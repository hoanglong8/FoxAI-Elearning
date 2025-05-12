# Power BI cơ bản | Phân tích dữ liệu | Part 1

Link video [tại đây](https://youtu.be/Zg13Ax3jt1Y?si=aLtwRvSra4r_wKGl)

[![image](https://github.com/user-attachments/assets/43bc2044-4959-4561-b14e-297d975eb0e2)](https://youtu.be/Zg13Ax3jt1Y?si=FQ72G8L0qOw6Q-cp)

[Bộ dữ liệu](https://docs.google.com/spreadsheets/d/10H5tYIi0y2m1Cee_q1XwlVbgHIo12zvy/edit?gid=524278731#gid=524278731) dùng trong Part 1

---
# Tóm tắt nội dung Part 1
## 📘[Tổng hợp bởi ChatGPT-4o](https://chatgpt.com/g/g-p-67db70bd74148191a544ca070a256ac6-sach-data-science-machine-learning/c/68219754-21e4-8001-8ae5-ea8ab038091d)

### 1. Tổng Quan Về Data Analytics và Power BI

#### 1.1 Data Analytics là gì?
- Data Analytics (phân tích dữ liệu) là quá trình thu thập, xử lý, và trực quan hóa dữ liệu để đưa ra quyết định.
- Ứng dụng: Theo dõi doanh thu, lợi nhuận, tồn kho, sản phẩm bán chạy, đánh giá hiệu quả hoạt động kinh doanh.

#### 1.2 Tại sao doanh nghiệp cần phân tích dữ liệu?
- Theo dõi hiệu quả bán hàng theo thời gian.
- Dự đoán kết quả kinh doanh trong tương lai.
- Ra quyết định dựa trên dữ liệu thực tế.
- Cảnh báo và điều chỉnh theo biến động thực tế (ví dụ: sản phẩm sắp hết hàng, chi phí tăng đột biến…).

### 2. Giới Thiệu Power BI
#### 2.1 Power BI gồm 3 thành phần chính:
|Thành phần	|Vai trò|
|---|---|
|Power BI Desktop	|Cài trên PC, thiết kế báo cáo, mô hình dữ liệu.|
|Power BI Service (Online)|	Chia sẻ báo cáo, phân quyền người dùng, lên lịch cập nhật dữ liệu.|
|Power BI Mobile	|Xem báo cáo mọi lúc mọi nơi trên điện thoại.|

#### 2.2 So sánh Power BI với Excel:
|Tiêu chí	|Power BI	|Excel|
|---|---|---|
|Số lượng nguồn dữ liệu hỗ trợ|	>100 loại	|Giới hạn|
|Tính năng mô hình hóa	|Có, nâng cao|Hạn chế|
|Tự động cập nhật (schedule refresh)|	Có	|Không|
|Phân quyền báo cáo	|Có	|Không rõ ràng|
|Dễ tích hợp Power Automate (cảnh báo, workflow)|	Có	|Không|

### 3. Quy trình 5 bước phân tích dữ liệu (Data Analysis Workflow)
|Bước	|Tên gọi	|Mô tả|
|---|---|---|
|1️⃣	|Kết nối dữ liệu (Extract)	|Kết nối đến Excel, CSV, Database, Web API, Google Sheet…|
|2️⃣	|Làm sạch dữ liệu (Transform)|	Loại bỏ dòng sai, đổi tên cột, chuẩn hóa giá trị, loại trừ dữ liệu bất hợp lý.|
|3️⃣	|Mô hình hóa dữ liệu (Modeling)	|Tạo mối quan hệ giữa các bảng, thiết lập kiểu dữ liệu, tổ chức dữ liệu theo logic.|
|4️⃣	|Trực quan hóa dữ liệu (Visualization)|	Vẽ biểu đồ, tạo dashboard, bảng tổng hợp KPI.|
|5️⃣	|Chia sẻ báo cáo (Share)	|Upload lên Power BI Service, phân quyền, hẹn giờ cập nhật, chia sẻ nội bộ.|

### 4. Thực Hành Cơ Bản với Power BI Desktop
#### 4.1 Kết nối dữ liệu
- Mở Power BI → Home → “Get Data” → chọn “Excel” hoặc “CSV”.
- Chọn file dữ liệu, chọn bảng/worksheet → click Transform Data để vào Power Query Editor.

#### 4.2 Làm sạch dữ liệu
- Thao tác trong Power Query Editor:
- Xóa cột: Chuột phải → Remove.
- Đổi tên cột: Double-click tiêu đề → nhập tên mới.
- Loại bỏ giá trị lỗi: Sử dụng bộ lọc.
- Xem lịch sử chỉnh sửa bên phải màn hình.

#### 4.3 Load dữ liệu vào mô hình
Sau khi làm sạch xong → Click Close & Apply để load dữ liệu vào Power BI.

### 5. Tạo Biểu Đồ và Báo Cáo Đầu Tiên
#### 5.1 Giao diện Power BI Desktop
- Report View: Vẽ biểu đồ (chart, table, matrix…).
- Data View: Xem bảng dữ liệu.
- Model View: Xem mô hình quan hệ giữa các bảng.

#### 5.2 Thực hành tạo biểu đồ
- Kéo các trường dữ liệu vào canvas.
- Ví dụ: Tạo biểu đồ đường hiển thị “Doanh thu theo ngày”.
- Có thể thêm nhiều biểu đồ trên cùng một trang để tạo dashboard.

### 6. Chia Sẻ Báo Cáo
#### 6.1 Cách chia sẻ
- Lưu file .pbix → Gửi qua email, Google Drive, OneDrive (hạn chế vì có thể lỗi đường dẫn).
- Upload lên Power BI Service:
- Yêu cầu tài khoản Microsoft (ví dụ: @fdu.edu.vn).
- Có thể phân quyền, hẹn lịch cập nhật dữ liệu tự động.
- Xem trên trình duyệt hoặc app Power BI Mobile.

#### 7. Lưu ý khi sử dụng Power BI
- Chỉ hỗ trợ hệ điều hành Windows (không hỗ trợ macOS/Linux).
- Khuyến nghị dùng Windows 10 trở lên để tránh lỗi.
- Dữ liệu gốc sẽ không bị ảnh hưởng khi làm sạch/trực quan hóa trong Power BI.
- Tạo mô hình hóa dữ liệu (relationships) chỉ áp dụng khi có từ 2 bảng trở lên.

#### 8. Kết luận và Hướng Dẫn Học Tiếp
Sau buổi 1, người học cần:
- Làm quen giao diện Power BI Desktop.
- Biết cách kết nối và làm sạch dữ liệu đơn giản.
- Tạo biểu đồ và lưu báo cáo.

Buổi học tiếp theo sẽ tập trung vào:
- Mô hình hóa dữ liệu phức tạp.
- Tạo các bảng quan hệ và tính toán nâng cao.

--- 
## [NotebookLM](https://notebooklm.google.com/notebook/f51cadcf-890a-4044-90a0-a75761b14192)

🎯 Mục tiêu
- Giúp người học:
- Hiểu về Data Analytics
- Nắm quy trình làm việc với dữ liệu

Làm quen với các bước đầu tiên trong Power BI Desktop (Kết nối và Làm sạch dữ liệu)

### 1. 🧠 Tổng Quan Về Phân Tích Dữ Liệu (Data Analytics)
#### 1.1 Data Analytics là gì?
- Hiểu nôm na là phân tích dữ liệu.
- Là quá trình làm việc với dữ liệu để đưa ra thông tin hữu ích.

#### 1.2 Tại sao Data Analytics quan trọng?
- Là một “buzzword” – từ khóa được nhiều người quan tâm.
- Doanh nghiệp hiện nay rất chú trọng đến việc phân tích dữ liệu.
- Không chỉ hữu ích cho doanh nghiệp mà còn có vai trò trong đời sống hàng ngày → giúp ra quyết định hợp lý, cải thiện hành động, đạt được mục tiêu.

#### 1.3 Lợi ích của Data Analytics:
- Hiểu được performance (hiệu quả) kinh doanh: lãi lỗ, doanh thu.
- Theo dõi doanh số, tồn kho.
- Phát hiện sản phẩm bán chạy / bán chậm để điều chỉnh tồn kho.
- So sánh giữa thực tế và mục tiêu (target).
- Dự báo được các chỉ số tương lai (sản lượng bán…).
- Từ dữ liệu → đưa ra quyết định kinh doanh hợp lý.

### 2. 🔁 Quy Trình Phân Tích Dữ Liệu Gồm 5 Bước
#### Bước 1: Kết nối dữ liệu (Connect/Extract)
- Thu thập dữ liệu từ nhiều nguồn khác nhau:
- File: Excel (.xlsx), Google Sheet, Text/CSV (.csv)
- Cơ sở dữ liệu (Database): SQL Server, MySQL…
- Website/API
- Data Warehouse
- Truy xuất/trích xuất dữ liệu: Extract

#### Bước 2: Làm sạch dữ liệu (Transform)
- Xử lý dữ liệu không đúng, không hợp lý.
- Thực hiện trong Power Query Editor:
- Queries: Danh sách bảng đã kết nối.
- Data View: Dữ liệu đang được biến đổi.
- Applied Steps: Lịch sử các bước xử lý.
- Sau khi làm sạch xong → Close & Apply để nạp dữ liệu.
- Kiểm tra trong Tab Data của Power BI Desktop.

### Bước 3: Mô hình hóa dữ liệu (Model)
- Kết nối các bảng dữ liệu lại với nhau qua mối quan hệ (relationship).
- Ví dụ: Kết nối Zalo & Facebook qua số điện thoại.
- Thực hiện trong Tab Model (Data Model View).
- Cần có từ 2 bảng trở lên mới mô hình hóa được.

### Bước 4: Trực quan hóa dữ liệu (Visualize)
- Tạo biểu đồ, bảng biểu từ dữ liệu đã xử lý.
- Dùng Tab Report để thiết kế báo cáo.
- Thành phần chính:
  - Visualizations: Các loại biểu đồ (line, column, map,…)
  - Fields: Danh sách cột dữ liệu
  - Tạo chỉ số (metrics) bằng DAX
  - Phân tích các outlier (điểm bất thường) trên biểu đồ.

### Bước 5: Chia sẻ báo cáo (Share)
- Chia sẻ báo cáo cho lãnh đạo, đồng nghiệp.
- Lưu báo cáo dưới dạng .pbix
-Cách chia sẻ:
- Thủ công: OneDrive, Google Drive (nhược điểm: yêu cầu cùng cài Power BI, dễ lỗi).
- Qua Power BI Service (Ưu điểm):
- Scheduled Refresh: cập nhật tự động theo giờ.
- hân quyền xem dữ liệu (theo phòng ban/vị trí).
- Tích hợp Power Automate để tự động cảnh báo.

## 3. 🌐 Hệ Sinh Thái Power BI
|Thành phần|	Mô tả|
|Power BI Desktop|	Phần mềm cài trên máy tính (Windows). Dùng để thiết kế báo cáo, thực hiện 4 bước đầu tiên của quy trình.|
|Power BI Service|	Nền tảng cloud để chia sẻ và phân quyền báo cáo. Giống như Google Drive cho báo cáo Power BI.|
|Power BI Mobile	|Ứng dụng di động để xem báo cáo mọi lúc mọi nơi. Có trên Android và iOS.|

## 4. 📊 So Sánh Power BI và Excel
|Tiêu chí	|Power BI	|Excel|
|---|---|---|
|Kết nối dữ liệu	|>100 loại nguồn dữ liệu|	Hạn chế hơn|
|Làm sạch dữ liệu|	Power Query Editor	|Có Power Query add-in
|Mô hình hóa	|Có (Data Model)|	Power Pivot|
|Trực quan hóa	|Nhiều loại biểu đồ nâng cao	|Có hạn chế|
|Chia sẻ báo cáo	Rất mạnh:| phân quyền, cập nhật tự động, cloud-based	|Chia sẻ thủ công, không phân quyền|

5. 🛠️ Chuẩn Bị và Thực Hành Cơ Bản (Từ Buổi 1)
5.1 Cài đặt Power BI Desktop
Dùng Windows 10 trở lên (nên cài máy ảo nếu dùng macOS/Linux).

Tải từ Microsoft Store hoặc trang chính thức.

5.2 Chuẩn bị dữ liệu
Tải file Excel mẫu.

Lưu vào thư mục dễ tìm trên máy.

5.3 Kết nối dữ liệu
Mở Power BI Desktop.

Chọn Get Data → Excel workbook.

Chọn file Excel.

Trong Navigator, chọn sheet muốn lấy.

Bấm Transform data để chuyển sang Power Query Editor.

5.4 Làm sạch dữ liệu (Power Query Editor)
Giao diện chính:

Queries (bên trái)

Data View (giữa)

Applied Steps (bên phải)

Thực hiện thao tác:

Ví dụ: Xoá một cột không cần → chuột phải → Remove

Xem bước được ghi lại trong Applied Steps

Bấm Close & Apply để nạp dữ liệu

5.5 Kiểm tra dữ liệu đã nạp
Mở Tab Data (icon thứ 2 bên trái) để xem bảng.

Kiểm tra số cột đã thay đổi sau khi làm sạch.

5.6 Xem qua mô hình hóa và trực quan hóa
Tab Model: Kiểm tra quan hệ giữa bảng (nếu có).

Tab Report: Tạo biểu đồ và dashboard.

5.7 Tạo biểu đồ đơn giản
Trong Report View, chọn biểu đồ (Line chart, Column chart,...).

Kéo cột dữ liệu từ Fields vào biểu đồ.

Ví dụ: Kéo Ngày và Tổng quãng đường.

Xem biểu đồ → phân tích điểm bất thường.

5.8 Lưu báo cáo
File → Save As

Lưu với đuôi .pbix

---

# Danh sách 9 video bài giảng Power BI

Video tại đây

[Bộ dữ liệu](https://drive.google.com/drive/folders/16fFqlNFpceg4_EG-EFRCYWB5AINVaFMG?usp=sharing) dùng trong toàn bộ khóa học 
