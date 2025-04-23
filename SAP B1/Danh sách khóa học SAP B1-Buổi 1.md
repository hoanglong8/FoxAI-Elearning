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
## Câu hỏi kiểm tra về ERP và tự động hóa bút toán kế toán

### Câu hỏi 1:
**Một trong những lợi ích chính của hệ thống ERP trong quy trình kế toán là gì?**
   - A) Tăng cường sự can thiệp thủ công trong việc ghi nhận công nợ.
   - B) Giảm thiểu sự can thiệp thủ công và tự động hóa các bút toán kế toán.
   - C) Không ảnh hưởng đến các bút toán kế toán.
   - D) Không giúp cải thiện báo cáo tài chính.

   **Đáp án**: B) **Giảm thiểu sự can thiệp thủ công và tự động hóa các bút toán kế toán.**

### Câu hỏi 2:
**Hệ thống ERP giúp tăng tính chính xác trong báo cáo tài chính bằng cách nào?**
   - A) Cải thiện khả năng phân tích dữ liệu của kế toán.
   - B) Hệ thống tự động tạo ra các báo cáo tài chính mà không cần can thiệp thủ công.
   - C) Giảm bớt số lượng báo cáo tài chính cần thiết.
   - D) Dữ liệu được nhập thủ công để đảm bảo tính chính xác.

   **Đáp án**: B) **Hệ thống tự động tạo ra các báo cáo tài chính mà không cần can thiệp thủ công.**


### Câu hỏi 3:
**Hệ thống ERP trong doanh nghiệp giúp làm gì đối với các quy trình liên quan đến kế toán?**
   - A) Đảm bảo rằng tất cả các quy trình kế toán được thực hiện thủ công để kiểm soát chính xác hơn.
   - B) Tự động hóa các bút toán kế toán từ các quy trình khác nhau, giảm thiểu sự can thiệp thủ công.
   - C) Hệ thống chỉ hỗ trợ ghi nhận doanh thu mà không liên quan đến các bút toán khác.
   - D) Cung cấp báo cáo tài chính theo cách thủ công, không có sự tự động hóa.

   **Đáp án**: B) **Tự động hóa các bút toán kế toán từ các quy trình khác nhau, giảm thiểu sự can thiệp thủ công.**

### Câu hỏi 4:
**Tính năng tự động hạch toán trong hệ thống ERP sẽ giúp kế toán thực hiện công việc như thế nào?**
   - A) Kế toán cần kiểm tra thủ công từng bút toán một.
   - B) Kế toán không cần phải nhập liệu thủ công vì hệ thống sẽ tự động hạch toán các bút toán cần thiết.
   - C) Kế toán chỉ tham gia vào công việc báo cáo mà không phải làm việc với các bút toán.
   - D) Kế toán sẽ cần phải xác nhận thủ công từng bước trong quy trình hạch toán.

   **Đáp án**: B) **Kế toán không cần phải nhập liệu thủ công vì hệ thống sẽ tự động hạch toán các bút toán cần thiết.**

### Câu hỏi 5:
**Lợi ích của việc tự động hóa các bút toán kế toán trong hệ thống ERP đối với các báo cáo tài chính là gì?**
   - A) Giảm thiểu sự chính xác trong việc lập báo cáo tài chính.
   - B) Tăng sự can thiệp thủ công của các nhân viên kế toán vào báo cáo tài chính.
   - C) Giảm thiểu lỗi và tăng tính chính xác trong các báo cáo tài chính.
   - D) Không có ảnh hưởng đến tính chính xác của báo cáo tài chính.

   **Đáp án**: C) **Giảm thiểu lỗi và tăng tính chính xác trong các báo cáo tài chính.**

---
## Câu hỏi kiểm tra về tự động hóa bút toán kế toán

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

---
## Câu hỏi kiểm tra về liên kết dữ liệu, hạch toán tự động

### 1. **Trong công ty sử dụng ERP, việc liên kết dữ liệu giữa các phòng ban giúp ích gì?**
   - A) Các phòng ban sẽ làm việc độc lập với nhau.
   - B) Dữ liệu được liên kết giúp giảm thiểu sai sót và tăng tính chính xác trong quy trình.
   - C) Các phòng ban phải nhập liệu thủ công vào hệ thống riêng biệt.
   - D) Dữ liệu không được chia sẻ giữa các phòng ban.

   **Đáp án**: B) **Dữ liệu được liên kết giúp giảm thiểu sai sót và tăng tính chính xác trong quy trình.**

### 2. **Kế toán trong công ty sử dụng ERP sẽ can thiệp vào những bước nào trong quy trình mua hàng?**
   - A) Kế toán can thiệp vào tất cả các bước từ báo giá đến thanh toán.
   - B) Kế toán chỉ tham gia vào việc ghi nhận công nợ khi có hóa đơn từ nhà cung cấp.
   - C) Kế toán chỉ theo dõi các bước cuối cùng của quy trình.
   - D) Kế toán không can thiệp vào quy trình mua hàng.

   **Đáp án**: B) **Kế toán chỉ tham gia vào việc ghi nhận công nợ khi có hóa đơn từ nhà cung cấp.**

### 3. **Lợi ích của việc sử dụng ERP trong quản lý bán hàng là gì?**
   - A) Giảm bớt sự can thiệp của kế toán trong toàn bộ quy trình bán hàng.
   - B) Tự động hạch toán công nợ và doanh thu ngay khi tạo hóa đơn cho khách hàng.
   - C) Các phòng ban trong công ty làm việc độc lập mà không cần sự liên kết dữ liệu.
   - D) Chỉ có bộ phận bán hàng có quyền tạo hóa đơn và ghi nhận doanh thu.

   **Đáp án**: B) **Tự động hạch toán công nợ và doanh thu ngay khi tạo hóa đơn cho khách hàng.**

---
## Câu hỏi kiểm tra về nghiệp vụ mua hàng và bút toán kế toán trong SAP Business One

### Câu hỏi 1:
**Trong quy trình mua hàng, phiếu nào sẽ sinh ra bút toán hạch toán công nợ khi nhà cung cấp xuất hóa đơn?**
   - A) Purchase Quotation
   - B) Purchase Order
   - C) AP Invoice
   - D) Delivery

   **Đáp án**: C) **AP Invoice**

### Câu hỏi 2:
**Khi nhập kho hàng từ nhà cung cấp, phiếu nào sẽ sinh ra bút toán hạch toán tăng tài sản (hàng tồn kho)?**
   - A) Purchase Quotation
   - B) Purchase Order
   - C) Receipt of Goods (CPO)
   - D) AP Invoice

   **Đáp án**: C) **Receipt of Goods (CPO)**

### Câu hỏi 3:
**Trong quy trình mua hàng, để chi tiền cho nhà cung cấp, phiếu nào sẽ sinh ra bút toán hạch toán thanh toán?**
   - A) AP Invoice
   - B) Purchase Quotation
   - C) Payment (Hourly Payment)
   - D) Purchase Order

   **Đáp án**: C) **Payment (Hourly Payment)**

---

## Câu hỏi kiểm tra về quy trình bán hàng và sản xuất trong SAP Business One

### Câu hỏi 1:
**Trong quy trình bán hàng, phiếu nào sẽ sinh ra bút toán hạch toán doanh thu và công nợ phải thu?**
   - A) Sales Order
   - B) Sales Quotation
   - C) Sales Delivery
   - D) A/R Invoice

   **Đáp án**: D) **A/R Invoice**

### Câu hỏi 2:
**Khi tạo đơn hàng bán hàng trong SAP, phiếu nào sẽ được sử dụng để ghi nhận đơn đặt hàng với khách hàng?**
   - A) Sales Quotation
   - B) Sales Order
   - C) Sales Delivery
   - D) A/R Invoice

   **Đáp án**: B) **Sales Order**

### Câu hỏi 3:
**Trong quy trình bán hàng, khi hàng hóa được giao cho khách hàng, phiếu nào sẽ sinh ra bút toán ghi nhận sự xuất kho?**
   - A) Sales Quotation
   - B) Sales Order
   - C) Sales Delivery
   - D) A/R Invoice

   **Đáp án**: C) **Sales Delivery**

### Câu hỏi 4:
**Khi tiến hành sản xuất trong SAP, phiếu nào được sử dụng để ghi nhận lệnh sản xuất và yêu cầu xuất vật tư từ kho?**
   - A) Production Order
   - B) Receipt for Production
   - C) Sales Delivery
   - D) A/R Invoice

   **Đáp án**: A) **Production Order**


### Câu hỏi 5:
**Trong quy trình sản xuất, phiếu nào được sử dụng để ghi nhận việc xuất vật tư từ kho để phục vụ cho quá trình sản xuất?**
   - A) Production Order
   - B) Receipt for Production
   - C) Goods Issue for Production
   - D) Goods Receipt for Production

   **Đáp án**: C) **Goods Issue for Production**


### Câu hỏi 6:
**Khi thành phẩm được sản xuất và nhập kho, phiếu nào sẽ được sử dụng để ghi nhận việc nhập kho thành phẩm?**
   - A) Production Order
   - B) Receipt for Production
   - C) Goods Issue for Production
   - D) A/R Invoice

   **Đáp án**: B) **Receipt for Production**

---
## Câu hỏi kiểm tra về nghiệp vụ kho và ảnh hưởng đến tài khoản tài sản (hàng tồn kho)

### Câu hỏi 1:
**Khi thực hiện nghiệp vụ "nhập kho khác" (nhập hàng từ các nguồn khác không phải mua hàng), nghiệp vụ này sẽ ảnh hưởng như thế nào đến tài khoản hàng tồn kho?**
   - A) Tăng tài khoản hàng tồn kho và sinh ra bút toán hạch toán tài sản.
   - B) Giảm tài khoản hàng tồn kho và không tạo ra bút toán kế toán.
   - C) Tăng tài khoản hàng tồn kho nhưng không tạo ra bút toán kế toán.
   - D) Không ảnh hưởng đến tài khoản hàng tồn kho.

   **Đáp án**: A) **Tăng tài khoản hàng tồn kho và sinh ra bút toán hạch toán tài sản.**

### Câu hỏi 2:
**Trong quy trình điều chuyển kho (inventory transfer), khi hàng hóa được chuyển từ kho này sang kho khác, nghiệp vụ này sẽ ảnh hưởng như thế nào đến tài khoản hàng tồn kho?**
   - A) Không ảnh hưởng đến tài khoản hàng tồn kho vì chỉ là điều chuyển giữa các kho.
   - B) Tăng tài khoản hàng tồn kho tại kho đích và giảm tại kho xuất.
   - C) Tăng tài khoản hàng tồn kho tại kho xuất và giảm tại kho đích.
   - D) Giảm tài khoản hàng tồn kho và sinh ra bút toán hạch toán tài sản.

   **Đáp án**: B) **Tăng tài khoản hàng tồn kho tại kho đích và giảm tại kho xuất.**

### Câu hỏi 3:
**Khi thực hiện nghiệp vụ kiểm kê kho và phát hiện có sự chênh lệch (thừa/thiếu hàng), nghiệp vụ này sẽ ảnh hưởng như thế nào đến tài khoản hàng tồn kho?**
   - A) Chỉ thay đổi số lượng hàng tồn kho nhưng không ảnh hưởng đến tài khoản tài sản.
   - B) Tăng hoặc giảm tài khoản hàng tồn kho tùy theo tình huống và sinh ra bút toán hạch toán tài sản.
   - C) Không ảnh hưởng đến tài khoản hàng tồn kho vì chỉ là kiểm kê.
   - D) Giảm tài khoản hàng tồn kho nhưng không sinh ra bút toán kế toán.

   **Đáp án**: B) **Tăng hoặc giảm tài khoản hàng tồn kho tùy theo tình huống và sinh ra bút toán hạch toán tài sản.**

---
# Câu hỏi kiểm tra về Account Determination và Control Account trong SAP Business One

### Câu hỏi 1:
**Khái niệm "Account Determination" trong SAP Business One là gì?**
   - A) Là quá trình tạo và thiết lập bảng tài khoản kế toán cho toàn bộ hệ thống.
   - B) Là quá trình xác định tài khoản kế toán cho từng tình huống nghiệp vụ cụ thể như mua hàng, bán hàng, v.v.
   - C) Là quá trình kiểm tra và điều chỉnh số dư tài khoản hàng tồn kho.
   - D) Là quá trình hạch toán thủ công cho từng giao dịch kế toán.

   **Đáp án**: B) **Là quá trình xác định tài khoản kế toán cho từng tình huống nghiệp vụ cụ thể như mua hàng, bán hàng, v.v.**

### Câu hỏi 2:
**Tài khoản "Control Account" trong SAP Business One có vai trò gì?**
   - A) Theo dõi số dư của tài khoản công nợ phải thu và phải trả, giúp kế toán dễ dàng theo dõi công nợ của từng khách hàng, nhà cung cấp.
   - B) Ghi nhận tất cả các giao dịch tài chính của công ty.
   - C) Được sử dụng để phân bổ chi phí cho các bộ phận khác nhau trong công ty.
   - D) Được dùng để ghi nhận tất cả các khoản thuế đầu vào và đầu ra.

   **Đáp án**: A) **Theo dõi số dư của tài khoản công nợ phải thu và phải trả, giúp kế toán dễ dàng theo dõi công nợ của từng khách hàng, nhà cung cấp.**

### Câu hỏi 3:
**Khi thực hiện một giao dịch như lập hóa đơn bán hàng (A/R Invoice), SAP Business One sẽ sử dụng thông tin nào để tự động xác định tài khoản kế toán?**
   - A) Tài khoản kế toán được thiết lập thủ công bởi kế toán mỗi lần nhập giao dịch.
   - B) Thông tin từ "Account Determination" sẽ tự động xác định tài khoản kế toán dựa trên tình huống nghiệp vụ cụ thể, ví dụ như tài khoản phải thu 131.
   - C) SAP sẽ yêu cầu người dùng nhập tài khoản kế toán mỗi khi thực hiện giao dịch.
   - D) SAP không tự động hạch toán mà chỉ lưu trữ thông tin giao dịch.

   **Đáp án**: B) **Thông tin từ "Account Determination" sẽ tự động xác định tài khoản kế toán dựa trên tình huống nghiệp vụ cụ thể, ví dụ như tài khoản phải thu 131.**

---
# Câu hỏi kiểm tra về thiết lập hạch toán tự động trong SAP qua các ví dụ phiếu nhập kho và hóa đơn bán hàng

### Câu hỏi 1:
**Khi thực hiện phiếu nhập kho (Receipt of Goods) trên SAP, hệ thống sẽ tự động hạch toán tài khoản nào liên quan đến tài sản (hàng tồn kho)?**
   - A) Tài khoản phải thu khách hàng (131)
   - B) Tài khoản phải trả nhà cung cấp (331)
   - C) Tài khoản hàng tồn kho (Inventory)
   - D) Tài khoản doanh thu (511)

   **Đáp án**: C) **Tài khoản hàng tồn kho (Inventory)**

### Câu hỏi 2:
**Khi lập hóa đơn bán hàng (A/R Invoice) trong SAP, hệ thống sẽ tự động hạch toán tài khoản nào liên quan đến công nợ phải thu?**
   - A) Tài khoản phải thu khách hàng (131) và tài khoản doanh thu (511)
   - B) Tài khoản hàng tồn kho (Inventory) và tài khoản phải trả nhà cung cấp (331)
   - C) Tài khoản chi phí (Expense) và tài khoản phải thu (132)
   - D) Tài khoản phải trả nhà cung cấp (331) và tài khoản hàng tồn kho (Inventory)

   **Đáp án**: A) **Tài khoản phải thu khách hàng (131) và tài khoản doanh thu (511)**

---
# Câu hỏi trắc nghiệm về thuế và hạch toán trên SAP

### Câu hỏi 1: 
**Giải thích cách hệ thống SAP tự động tính thuế và sinh bút toán phù hợp khi lập hóa đơn bán hàng.**
   - A) SAP yêu cầu kế toán nhập thủ công tỷ lệ thuế vào mỗi hóa đơn.
   - B) Hệ thống tự động tính thuế dựa trên tỷ lệ thuế đã thiết lập (10%, 5%, 0%) và tính toán tự động phần thuế vào tài khoản thuế.
   - C) SAP không hỗ trợ tự động tính thuế mà chỉ ghi nhận giá trị thuế sau khi kế toán nhập vào.
   - D) Hệ thống không tính thuế và cần phải tính toán thuế ngoài hệ thống SAP.

   **Đáp án**: B) **Hệ thống tự động tính thuế dựa trên tỷ lệ thuế đã thiết lập (10%, 5%, 0%) và tính toán tự động phần thuế vào tài khoản thuế.**

### Câu hỏi 2: 
**Thông tin nào là yêu cầu bắt buộc khi lập hóa đơn đầu ra phù hợp với quy định thuế Việt Nam trên SAP?**
   - A) Ngày hóa đơn, mã số thuế, số hóa đơn, mẫu số và ký hiệu.
   - B) Chỉ cần số hóa đơn và tên công ty.
   - C) Chỉ cần ngày hóa đơn và mã số thuế.
   - D) Chỉ cần tên công ty và mẫu số hóa đơn.

   **Đáp án**: A) **Ngày hóa đơn, mã số thuế, số hóa đơn, mẫu số và ký hiệu.**

### Câu hỏi 3: 
**Addon của AppZone giúp SAP phù hợp với chuẩn thuế Việt Nam như thế nào?**
   - A) Nó cung cấp khả năng sử dụng SAP bằng tiếng Việt và báo cáo thuế VAT theo quy định của Việt Nam.
   - B) Nó chỉ cung cấp báo cáo thuế VAT mà không thay đổi giao diện SAP.
   - C) Nó chỉ hỗ trợ dịch SAP sang tiếng Việt nhưng không liên quan đến thuế.
   - D) Nó chỉ giúp SAP tương thích với các loại thuế ở Úc và New Zealand.

   **Đáp án**: A) **Nó cung cấp khả năng sử dụng SAP bằng tiếng Việt và báo cáo thuế VAT theo quy định của Việt Nam.**

### Câu hỏi 4: 
**Trong SAP, nhóm thuế được định nghĩa như thế nào?**
   - A) Là một nhóm thuế được áp dụng cho tất cả các loại giao dịch không phân biệt tỷ lệ thuế.
   - B) Là nhóm các thuế như 10%, 5%, 0% được sử dụng cho các sản phẩm và dịch vụ khác nhau.
   - C) Là nhóm các thuế chỉ áp dụng cho doanh thu bán hàng quốc tế.
   - D) Là một nhóm thuế duy nhất áp dụng cho tất cả các sản phẩm của công ty.

   **Đáp án**: B) **Là nhóm các thuế như 10%, 5%, 0% được sử dụng cho các sản phẩm và dịch vụ khác nhau.**

### Câu hỏi 5: 
**Khi thiết lập thuế trong SAP, loại thuế nào được liên kết với tài khoản thuế 333-110?**
   - A) Thuế suất 5%.
   - B) Thuế suất 10% và 0%.
   - C) Thuế suất 10% cho hóa đơn đầu ra.
   - D) Thuế suất 5% cho hóa đơn đầu ra.

   **Đáp án**: C) **Thuế suất 10% cho hóa đơn đầu ra.**

### Câu hỏi 6: 
**Tại sao tài khoản thuế 333-110 lại quan trọng trong SAP khi thiết lập thuế?**
   - A) Tài khoản này được sử dụng để ghi nhận giá trị gia tăng đầu ra của thuế từ các giao dịch bán hàng.
   - B) Tài khoản này dùng để ghi nhận chi phí thuế đầu vào từ các giao dịch mua hàng.
   - C) Tài khoản này không được sử dụng trong SAP.
   - D) Tài khoản này chỉ được dùng cho các báo cáo tài chính không liên quan đến thuế.

   **Đáp án**: A) **Tài khoản này được sử dụng để ghi nhận giá trị gia tăng đầu ra của thuế từ các giao dịch bán hàng.**

---
