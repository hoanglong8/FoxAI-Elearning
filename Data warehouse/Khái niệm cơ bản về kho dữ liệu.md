## 1. Kho dữ liệu là gì?
Kho dữ liệu (Data warehouse) là một hệ thống có nhiệm vụ thống kê, lưu trữ dữ liệu từ nhiều nguồn khác nhau (như phần mềm bán hàng, kế toán, nhân sự,…). Đây cũng là nền tảng thống nhất để lưu trữ, quản lý và phân tích dữ liệu, nhằm hỗ trợ quá trình phân tích và đưa ra quyết định của doanh nghiệp.

Dữ liệu đi vào kho dữ liệu từ hệ thống giao dịch và các cơ sở dữ liệu quan hệ và các nguồn dữ liệu khác. Sau đó, dữ liệu này sẽ được xử lý, chuyển đổi để người dùng truy cập dễ dàng hơn thông qua một số công cụ như BI tools, SQL clients, các ứng dụng phân tích dữ liệu khác… 

Một Data warehouse sẽ có những thành phần chính sau:

- **Cơ sở dữ liệu trung tâm:** Là nơi dữ liệu từ nhiều nguồn khác nhau được lưu trữ sau khi đã qua xử lý và chuẩn hóa.
- **ETL (Extract, Transform, Load):** Các quy trình ETL liên quan đến việc trích xuất dữ liệu từ nhiều hệ thống nguồn khác nhau, chuyển đổi chúng thành định dạng dữ liệu nhất quán và tải dữ liệu đó vào Data Warehouse. Các công cụ ETL được dùng để tự động hóa các quy trình này, giúp đảm bảo tính chính xác và toàn vẹn của dữ liệu.
- **Metadata (siêu dữ liệu):** Metadata là “dữ liệu về dữ liệu”, chúng mô tả nguồn, định dạng, ngữ nghĩa và thông tin cấu trúc cho dữ liệu trong kho. Siêu dữ liệu có nhiệm vụ quản lý kho dữ liệu, hỗ trợ người dùng khi truy xuất và phân tích thông tin.
- **Công cụ cập kho dữ liệu:** Công cụ truy cập cho phép người dùng tương tác với dữ liệu trong kho dữ liệu.


