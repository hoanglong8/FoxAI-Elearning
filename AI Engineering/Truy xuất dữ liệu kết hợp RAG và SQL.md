# 🐾 TRUY XUẤT DỮ LIỆU BẢNG BẰNG GENAI: KẾT HỢP RAG VÀ SQL

Hầu hết ứng dụng GenAI không chỉ làm việc với dữ liệu phi cấu trúc (văn bản, hình ảnh) mà còn cần dữ liệu dạng bảng (tabular data), nơi lưu thông tin nghiệp vụ quan trọng như doanh số, đơn hàng, thông tin sản phẩm. Việc augment context từ dữ liệu bảng có quy trình rất khác với RAG cổ điển.

### 🎯 Bài toán minh họa:
Bạn làm việc tại Kitty Vogue – một cửa hàng thương mại điện tử chuyên thời trang cho mèo, có bảng Sales lưu thông tin đơn hàng:

Order ID	Timestamp	Product ID	Product	Unit price ($)	Units	Total
1	…	2044	Meow Mix Seasoning	10.99	1	10.99
2	…	3492	Purr & Shake	25	2	50
3	…	2045	Fruity Fedora	18	1	18
…	…	…	…	…	…	…
Người dùng hỏi:

“Trong 7 ngày qua đã bán được bao nhiêu đơn Fruity Fedora?”

Để trả lời, hệ thống cần:
✅ Lọc đơn hàng sản phẩm Fruity Fedora
✅ Trong 7 ngày qua
✅ Cộng tổng số lượng bán.

🔍 SQL Query cần thực hiện:

```sql
SELECT SUM(units) AS total_units_sold
FROM Sales
WHERE product_name = 'Fruity Fedora'
AND timestamp >= DATE_SUB(CURDATE(), INTERVAL 7 DAY);
```

⚙️ Workflow RAG with Tabular Data
⚡ Khác với RAG truyền thống (retriever + generator), quy trình augment context từ tabular data gồm:

1️⃣ Text-to-SQL (Semantic Parsing):

Từ câu hỏi người dùng + schema bảng, mô hình xác định câu SQL cần thiết.

Nếu có quá nhiều bảng, cần bước chọn bảng liên quan trước để giảm tải context.

2️⃣ SQL Execution:

Chạy query trên cơ sở dữ liệu.

3️⃣ Generation:

Sinh câu trả lời dựa trên kết quả SQL + câu hỏi gốc.

🪄 Minh họa luồng xử lý:
📥 User Query ➔ 🧠 Text-to-SQL ➔ 🗂️ Execute SQL ➔ ✍️ Generate Response

Hình dung đơn giản: GenAI không tự đoán "Fruity Fedora bán bao nhiêu", mà biết cách tạo câu SQL, chạy, lấy kết quả, rồi trả lời.

🚧 Hạn chế của RAG với dữ liệu dạng bảng
1️⃣ Hiểu sai cấu trúc dữ liệu

Mô hình ngôn ngữ mạnh về xử lý văn bản tự nhiên nhưng không hiểu logic quan hệ giữa các bảng nếu không có sơ đồ (schema) rõ ràng.

Ví dụ: bảng Sales liên kết bảng Products qua Product ID → nếu không khai báo quan hệ, mô hình dễ suy luận sai.

2️⃣ Sinh câu SQL lỗi cú pháp hoặc không chạy được

Text-to-SQL vẫn là bài toán khó: câu lệnh có thể thiếu điều kiện, sai tên trường, hoặc không tương thích cú pháp với hệ quản trị.

3️⃣ Thiếu dữ liệu thời gian thực hoặc đồng bộ chậm

Nếu dữ liệu chưa được cập nhật, câu trả lời vẫn đúng cú pháp nhưng sai giá trị.

4️⃣ Chi phí tính toán

Chạy pipeline Text-to-SQL + Executor + Generator nhiều lần → tốn token, latency cao.

### ⚙️ Giải pháp tối ưu
✅ Cung cấp schema rõ ràng

Truyền schema bảng, tên cột, quan hệ trực tiếp vào context, hoặc làm metadata prompt cố định.

Với nhiều bảng, triển khai thêm bước Schema Linker để chọn bảng cần thiết.

✅ Sử dụng Prompt Template cố định cho Text-to-SQL

Chuẩn hóa cách mô hình sinh SQL, kiểm tra cú pháp bằng regex hoặc rule.

Có thể huấn luyện thêm (finetune) mô hình Text-to-SQL với tập câu hỏi thực tế của doanh nghiệp.

✅ Thêm bước Validation

Thực thi câu SQL trên cơ sở dữ liệu sandbox/test trước khi chạy query thật.

Nếu lỗi cú pháp, tự động chỉnh lại prompt hoặc cảnh báo.

✅ Sử dụng Caching và Pre-aggregation

Với truy vấn lặp lại (ví dụ KPI ngày, tuần), lưu kết quả trung gian → giảm latency và token.

✅ Triển khai Agentic Pattern cho các bước phức tạp hơn

Cho phép LLM gọi nhiều công cụ: SQL Executor, API cập nhật dữ liệu mới, Python script tính toán bổ sung.

🚩 Lợi ích khi kết hợp RAG với tabular data:
✅ Truy vấn có căn cứ, đúng dữ liệu nghiệp vụ
✅ Giảm hallucination, trả lời đúng con số, không phỏng đoán
✅ Linh hoạt cho các ứng dụng BI GenAI, chatbot nội bộ, GenAI analytics
✅ Là bước đệm để phát triển agentic pattern, cho phép mô hình dùng công cụ SQL, API, automation.

### 💡 Ghi nhớ:
RAG không chỉ dừng ở “tìm và sinh” trên text, mà còn làm việc với dữ liệu bảng.

Text-to-SQL + SQL Executor chính là retriever đặc biệt cho dạng tabular.

Đây là cầu nối cần thiết giữa GenAI và hệ thống dữ liệu doanh nghiệp, giúp tạo các ứng dụng truy vấn tự động trên cơ sở dữ liệu bằng ngôn ngữ tự nhiên.
