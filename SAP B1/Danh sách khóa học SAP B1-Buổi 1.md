# Kế toán mua hàng và bán hàng SAP Business One - TB1100 - Bài 1

## Tóm tắt nội dung

Trong buổi đầu tiên của khóa học, chúng ta sẽ tìm hiểu về quy trình mua hàng và bán hàng trong SAP Business One. Các khái niệm chính như **mua hàng**, **bán hàng**, **hạch toán tự động**, và các loại phiếu trong quy trình mua hàng và bán hàng sẽ được giới thiệu và giải thích chi tiết. Chúng ta sẽ khám phá các bước cơ bản từ việc tạo báo giá, đơn đặt hàng, nhận hàng, ghi nhận công nợ cho đến việc thanh toán cho nhà cung cấp.

Bài học này giúp bạn hiểu rõ cách SAP Business One tự động hóa quá trình hạch toán, giúp kế toán không cần phải nhập liệu thủ công.

Để xem lại nội dung bài giảng, bạn có thể xem video trên YouTube qua đường dẫn sau:
[Video Buổi 1 - SAP Business One TB1100](https://www.youtube.com/watch?v=DiLvkZ0aPbk&list=PLNomLztKzjUpMmsgtKoOKWsywDnT86bZL)

![Hình](https://i.ytimg.com/vi/DiLvkZ0aPbk/maxresdefault.jpg)

---

## Overview

📅 Giới thiệu khóa học & Yêu cầu nền tảng (00:00:02 - 00:07:33) (00:02 - 07:33)
- Khóa học gồm 13 buổi, 11 unit về kế toán từ cơ bản đến nâng cao, học định kỳ thứ 3 hoặc thứ 6.
- Yêu cầu học viên có kiến thức kế toán cơ bản, ưu tiên đã từng sử dụng phần mềm kế toán hoặc SAP.
- Khuyến khích xem lại các video khóa học trước về Logistics, mua hàng, bán hàng, sản xuất trên kênh Youtube Axon Company để có nền tảng tốt hơn.
- Nội dung buổi đầu: Giới thiệu phân hệ kế toán trong quy trình ERP, ví dụ thực tế về hạch toán tự động, cập nhật thông tin hóa đơn đầu ra/đầu vào.

🔗 Vị trí & Vai trò của Kế toán trong ERP (00:07:33 - 00:15:16) (07:33 - 15:16)
- Giải thích vị trí của kế toán trong chuỗi quy trình doanh nghiệp (mua hàng, kho, sản xuất, bán hàng, marketing, bảo trì).
- Kế toán đóng vai trò quan trọng trong việc theo dõi và ghi nhận các giao dịch tài chính liên quan đến các quy trình doanh nghiệp.
- Kế toán can thiệp vào tất cả các quy trình như mua hàng, sản xuất, và bán hàng để đảm bảo rằng các dữ liệu tài chính được ghi nhận chính xác và kịp thời.
- Hệ thống ERP giúp tự động hóa các bút toán kế toán từ các quy trình khác nhau, giảm thiểu sự can thiệp thủ công và tăng tính chính xác trong báo cáo tài chính.
- So sánh giữa công ty không dùng ERP (phòng ban rời rạc, nhập liệu thủ công) và công ty dùng ERP (liên kết dữ liệu, hạch toán tự động).
- Nhấn mạnh lợi ích của ERP: giảm trùng lặp công việc, tự động hóa hạch toán khi các phòng ban thực hiện nghiệp vụ liên quan đến tài chính.

📝 Quy trình mua hàng, bán hàng, sản xuất & kho trên SAP (00:15:16 - 00:23:35) (15:16 - 23:35)
- Trình bày các bước nghiệp vụ mua hàng (báo giá, đặt hàng, nhập kho, nhận hóa đơn, chi tiền) và xác định các phiếu sinh ra bút toán kế toán.
- Tương tự với quy trình bán hàng (báo giá, đơn hàng, giao hàng, xuất hóa đơn, thu tiền) và sản xuất (lệnh sản xuất, xuất vật tư, nhập thành phẩm).
- Giải thích các nghiệp vụ kho (nhập/xuất khác, điều chuyển, kiểm kê) đều ảnh hưởng đến tài khoản tài sản (hàng tồn kho).

⚙️ Thiết lập hạch toán tự động & khái niệm trên SAP (00:23:35 - 00:31:30) (23:35 - 31:30)
- Giới thiệu cách thiết lập hạch toán tự động trên SAP qua các ví dụ về phiếu nhập kho, hóa đơn bán hàng.
- Trình bày khái niệm Account Determination (thiết lập tài khoản cho từng tình huống nghiệp vụ) và Control Account (tài khoản theo dõi đối tượng công nợ).
- Nhấn mạnh vai trò của việc thiết lập đúng để đảm bảo số liệu kế toán chính xác, tự động cập nhật công nợ theo từng khách hàng/nhà cung cấp.

💡 Tùy chỉnh hóa đơn, thuế & Addon Việt hóa (00:31:30 - 00:40:54) (31:30 - 40:54)
- Hướng dẫn ghi nhận thông tin hóa đơn đầu ra phù hợp với quy định thuế Việt Nam (ngày hóa đơn, mã số thuế, số hóa đơn, mẫu số, ký hiệu).
- Giới thiệu Addon của AppZone giúp SAP phù hợp với chuẩn thuế Việt Nam (localization, báo cáo thuế VAT).
- Trình bày cách định nghĩa nhóm thuế, loại thuế trên SAP và liên kết với tài khoản thuế (333-110, 10%, 5%, 0%).
- Giải thích cách hệ thống tự động tính thuế và sinh bút toán phù hợp khi lập hóa đơn bán hàng.

📊 Báo cáo công nợ & quản lý trên SAP (00:40:54 - 00:49:06) (40:54 - 49:06)
- Giới thiệu các loại báo cáo chuẩn của SAP và báo cáo VS của AppZone theo Thông tư 200.
- Hướng dẫn sử dụng báo cáo chi tiết công nợ (General Ledger), báo cáo tổng hợp công nợ, báo cáo tuổi nợ (aging report).
- Trình bày cách lọc, xem chi tiết công nợ theo từng khách hàng, tài khoản, loại phiếu, thời gian.
- Nhấn mạnh tính linh hoạt trong việc truy xuất, in ấn, và sử dụng báo cáo cho mục đích kiểm tra, xác nhận công nợ.

---

## Câu hỏi kiểm tra

### 1. **Trong quy trình mua hàng trên SAP Business One, phiếu nào sẽ sinh ra bút toán hạch toán tự động?**
   - A) Purchase Quotation
   - B) AP Invoice
   - C) Purchase Order
   - D) Delivery

   **Đáp án**: B) **AP Invoice**

### 2. **Khi sử dụng hệ thống hạch toán tự động trong SAP, phiếu nào sẽ sinh ra bút toán khi ghi nhận công nợ và phải trả cho nhà cung cấp?**
   - A) Purchase Order
   - B) AP Invoice
   - C) Delivery
   - D) Payment

   **Đáp án**: B) **AP Invoice**

### 3. **Trong quy trình sản xuất của SAP, phiếu nào liên quan đến việc xuất kho vật tư để sản xuất và nhập kho thành phẩm?**
   - A) Production Order
   - B) Receipt for Production
   - C) Delivery Note
   - D) All of the above

   **Đáp án**: B) **Receipt for Production**

### 4. **Trong công ty sử dụng ERP, việc liên kết dữ liệu giữa các phòng ban giúp ích gì?**
   - A) Các phòng ban sẽ làm việc độc lập với nhau.
   - B) Dữ liệu được liên kết giúp giảm thiểu sai sót và tăng tính chính xác trong quy trình.
   - C) Các phòng ban phải nhập liệu thủ công vào hệ thống riêng biệt.
   - D) Dữ liệu không được chia sẻ giữa các phòng ban.

   **Đáp án**: B) **Dữ liệu được liên kết giúp giảm thiểu sai sót và tăng tính chính xác trong quy trình.**

### 5. **Kế toán trong công ty sử dụng ERP sẽ can thiệp vào những bước nào trong quy trình mua hàng?**
   - A) Kế toán can thiệp vào tất cả các bước từ báo giá đến thanh toán.
   - B) Kế toán chỉ tham gia vào việc ghi nhận công nợ khi có hóa đơn từ nhà cung cấp.
   - C) Kế toán chỉ theo dõi các bước cuối cùng của quy trình.
   - D) Kế toán không can thiệp vào quy trình mua hàng.

   **Đáp án**: B) **Kế toán chỉ tham gia vào việc ghi nhận công nợ khi có hóa đơn từ nhà cung cấp.**

### 6. **Lợi ích của việc sử dụng ERP trong quản lý bán hàng là gì?**
   - A) Giảm bớt sự can thiệp của kế toán trong toàn bộ quy trình bán hàng.
   - B) Tự động hạch toán công nợ và doanh thu ngay khi tạo hóa đơn cho khách hàng.
   - C) Các phòng ban trong công ty làm việc độc lập mà không cần sự liên kết dữ liệu.
   - D) Chỉ có bộ phận bán hàng có quyền tạo hóa đơn và ghi nhận doanh thu.

   **Đáp án**: B) **Tự động hạch toán công nợ và doanh thu ngay khi tạo hóa đơn cho khách hàng.**

