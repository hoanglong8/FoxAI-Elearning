# 🎯 [Bài 10/700] – “Text-to-SQL for Enterprise Data – Từ Overview đến Ứng Dụng”

Chọn Độ Chính Xác Hay Bảo Mật? – thuật ngữ allow_llm_to_see_data

Tiếp nối Bài 9, nơi mình chia sẻ cách nâng cấp Vanna AI có thể tự sửa lỗi truy vấn SQL thì hôm nay, chúng ta sẽ bàn đến một khía cạnh "khá nhạy cảm" nhưng lại không thể bỏ qua khi đưa vào production:

💡 Làm sao để hệ thống Text-to-SQL vừa chính xác, vừa đảm bảo bảo mật dữ liệu...hazzzzz?

❗Vấn đề: Không cho nhìn thấy data → Dự đoán… sai bét cho những usecase cần 1 giá trị cụ thể để truy vấn

Mặc định, Vanna AI không được truy vấn dữ liệu thật – LLM chỉ được dùng metadata như schema, docs, SQL mẫu. Điều này đúng cho các tổ chức như ngân hàng, y tế… nơi mà chỉ 1 query SELECT nhầm cũng gây rò rỉ dữ liệu.

Nhưng điều gì xảy ra khi người dùng hỏi:

“Doanh thu tháng này tại TP.HCM là bao nhiêu?”

Trong khi DB chỉ lưu giá trị là "HCM" chứ không phải "TP.HCM" hay "Ho Chi Minh".

Kết quả là:

LLM không match được giá trị với cột city

→ Truy vấn trả về rỗng, hoặc sai

→ Người dùng thì không hiểu vì sao bot lại ngu vậy? 😅

Giải pháp: Bật allow_llm_to_see_data = True

Khi bật chế độ này, hệ thống được phép:

Tạm thời chạy truy vấn như SELECT DISTINCT city FROM customers

Trích xuất vài giá trị thật trong DB (vd: "HCM", "HANOI", "DANANG")

Dùng thông tin đó để viết lại câu truy vấn chính xác hơn

✅ Kết quả khi bật chế độ này:

Độ chính xác tăng rõ rệt ở các truy vấn chứa giá trị dạng text/string

Bot có thể hiểu ý định người dùng và map chính xác hơn

Giải quyết được nhiều case mơ hồ như "TP.HCM" → "HCM"

⚠️ Nhưng đừng quên, đây là "con dao hai lưỡi" nha mọi ngừoi, nó liên quan bài toán đánh đổi và cân bằng

LLM có thể nhìn thấy một phần data thật

Nếu không kiểm soát kỹ, có thể truy xuất nhầm bảng nhạy cảm

Trong Bài 11, mình sẽ chia sẻ:

Giới thiệu 1 số kĩ thuật phổ biến về vấn đề này như dùng Masking, Logging, Role-based Filter, hoặc Approval Workflow....

🔗 Loạt “Text-to-SQL for Enterprise Data – Từ Overview đến Ứng Dụng”

Đây là Phần 10/700 trong chuỗi 700 bài chia sẻ AI ứng dụng thực chiến.

👉 Follow để không bỏ lỡ Phần 11: Privacy & Accuracy trong Data Introspection
