# Kế toán mua hàng và bán hàng SAP Business One - TB1100 - Bài 1

## Tóm tắt nội dung

Trong buổi đầu tiên của khóa học, chúng ta sẽ tìm hiểu về quy trình mua hàng và bán hàng trong SAP Business One. Các khái niệm chính như **mua hàng**, **bán hàng**, **hạch toán tự động**, và các loại phiếu trong quy trình mua hàng và bán hàng sẽ được giới thiệu và giải thích chi tiết. Chúng ta sẽ khám phá các bước cơ bản từ việc tạo báo giá, đơn đặt hàng, nhận hàng, ghi nhận công nợ cho đến việc thanh toán cho nhà cung cấp.

Bài học này giúp bạn hiểu rõ `hạch toán tự động trên SAP`, `thiết lập tài khoản`, `ghi nhận hóa đơn`, `báo cáo công nợ`.

Nội dung video trên YouTube qua đường dẫn sau:
[Video Buổi 1 - SAP Business One TB1100](https://www.youtube.com/watch?v=DiLvkZ0aPbk&list=PLNomLztKzjUpMmsgtKoOKWsywDnT86bZL)

![Hình](https://i.ytimg.com/vi/DiLvkZ0aPbk/maxresdefault.jpg)

---

## Overview

📅 **Giới thiệu khóa học & Yêu cầu nền tảng (00:02 - 07:33)**
- Khóa học gồm 13 buổi, 11 unit về kế toán từ cơ bản đến nâng cao, học định kỳ thứ 3 hoặc thứ 6.
- Yêu cầu học viên có kiến thức kế toán cơ bản, ưu tiên đã từng sử dụng phần mềm kế toán hoặc SAP.
- Khuyến khích xem lại các video khóa học trước về Logistics, mua hàng, bán hàng, sản xuất trên kênh Youtube Axon Company để có nền tảng tốt hơn.
- Nội dung buổi đầu: Giới thiệu phân hệ kế toán trong quy trình ERP, ví dụ thực tế về hạch toán tự động, cập nhật thông tin hóa đơn đầu ra/đầu vào.

🔗 **Vị trí & Vai trò của Kế toán trong ERP (07:33 - 15:16)**
- Giải thích vị trí của kế toán trong chuỗi quy trình doanh nghiệp (mua hàng, kho, sản xuất, bán hàng, marketing, bảo trì).
- Kế toán đóng vai trò quan trọng trong việc theo dõi và ghi nhận các giao dịch tài chính liên quan đến các quy trình doanh nghiệp.
- Kế toán can thiệp vào tất cả các quy trình như mua hàng, sản xuất, và bán hàng để đảm bảo rằng các dữ liệu tài chính được ghi nhận chính xác và kịp thời.
- Hệ thống ERP giúp tự động hóa các bút toán kế toán từ các quy trình khác nhau, giảm thiểu sự can thiệp thủ công và tăng tính chính xác trong báo cáo tài chính.
- So sánh giữa công ty không dùng ERP (phòng ban rời rạc, nhập liệu thủ công) và công ty dùng ERP (liên kết dữ liệu, hạch toán tự động).
- Nhấn mạnh lợi ích của ERP: giảm trùng lặp công việc, tự động hóa hạch toán khi các phòng ban thực hiện nghiệp vụ liên quan đến tài chính.

📝 **Quy trình mua hàng, bán hàng, sản xuất & kho trên SAP (15:16 - 23:35)**
- Trình bày các bước nghiệp vụ mua hàng (báo giá, đặt hàng, nhập kho, nhận hóa đơn, chi tiền) và xác định các phiếu sinh ra bút toán kế toán.
- Tương tự với quy trình bán hàng (báo giá, đơn hàng, giao hàng, xuất hóa đơn, thu tiền) và sản xuất (lệnh sản xuất, xuất vật tư, nhập thành phẩm).
- Giải thích các nghiệp vụ kho (nhập/xuất khác, điều chuyển, kiểm kê) đều ảnh hưởng đến tài khoản tài sản (hàng tồn kho).

⚙️ **Thiết lập hạch toán tự động & khái niệm trên SAP (23:35 - 31:30)**
- Giới thiệu cách thiết lập hạch toán tự động trên SAP qua các ví dụ về phiếu nhập kho, hóa đơn bán hàng.
- Trình bày khái niệm Account Determination (thiết lập tài khoản cho từng tình huống nghiệp vụ) và Control Account (tài khoản theo dõi đối tượng công nợ).
- Nhấn mạnh vai trò của việc thiết lập đúng để đảm bảo số liệu kế toán chính xác, tự động cập nhật công nợ theo từng khách hàng/nhà cung cấp.

💡 **Tùy chỉnh hóa đơn, thuế & Addon Việt hóa (31:30 - 40:54)**
- Hướng dẫn ghi nhận thông tin hóa đơn đầu ra phù hợp với quy định thuế Việt Nam (ngày hóa đơn, mã số thuế, số hóa đơn, mẫu số, ký hiệu).
- Giới thiệu Addon của AppZone giúp SAP phù hợp với chuẩn thuế Việt Nam (localization, báo cáo thuế VAT).
- Trình bày cách định nghĩa nhóm thuế, loại thuế trên SAP và liên kết với tài khoản thuế (333-110, 10%, 5%, 0%).
- Giải thích cách hệ thống tự động tính thuế và sinh bút toán phù hợp khi lập hóa đơn bán hàng.

📊 **Báo cáo công nợ & quản lý trên SAP (40:54 - 49:06)**
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
# Câu hỏi trắc nghiệm về báo cáo chuẩn của SAP và báo cáo VS của AppZone

### Câu hỏi 1: 
**Báo cáo chuẩn SAP liên quan đến công nợ phải thu phải trả được xem ở phân hệ nào?**
   - A) Finance và Banking.
   - B) Logistics và Warehouse.
   - C) Sales và Purchases.
   - D) HR và Payroll.

   **Đáp án**: A) **Finance và Banking.**

### Câu hỏi 2: 
**Báo cáo VS của AppZone theo chuẩn của kế toán Việt Nam liên quan đến các báo cáo nào?**
   - A) Báo cáo tài chính và báo cáo thuế VAT.
   - B) Báo cáo công nợ phải thu, phải trả và bảng kê thuế.
   - C) Báo cáo sản xuất và báo cáo thu nhập.
   - D) Báo cáo chi phí và thu nhập.

   **Đáp án**: B) **Báo cáo công nợ phải thu, phải trả và bảng kê thuế.**

### Câu hỏi 3: 
**Báo cáo nào trong SAP giúp theo dõi chi tiết công nợ của từng đối tượng khách hàng hoặc nhà cung cấp?**
   - A) General Resources Report.
   - B) Profit and Loss Report.
   - C) Balance Sheet Report.
   - D) Cash Flow Report.

   **Đáp án**: A) **General Resources Report.**

### Câu hỏi 4: 
**Báo cáo nào trong SAP cung cấp thông tin tổng hợp về công nợ phải thu và phải trả theo tài khoản?**
   - A) Balance Sheet Report.
   - B) General Ledger Report.
   - C) AR/AP Aging Report.
   - D) Business Partner Report.

   **Đáp án**: C) **AR/AP Aging Report.**

### Câu hỏi 5: 
**Báo cáo VS của AppZone theo chuẩn của Thông tư 200 cung cấp các thông tin gì?**
   - A) Thông tin về tài sản cố định và doanh thu.
   - B) Thông tin về bảng kê thuế VAT và công nợ phải thu, phải trả.
   - C) Thông tin về chi phí sản xuất và giá trị hàng tồn kho.
   - D) Thông tin về lương nhân viên và thu nhập.

   **Đáp án**: B) **Thông tin về bảng kê thuế VAT và công nợ phải thu, phải trả.**

---
# Câu hỏi trắc nghiệm về các báo cáo công nợ

### Câu hỏi 1: 
**Báo cáo nào trong SAP cho phép theo dõi chi tiết các giao dịch công nợ của từng đối tượng khách hàng hoặc nhà cung cấp?**
   - A) General Ledger Report.
   - B) Aging Report.
   - C) Balance Sheet Report.
   - D) Profit and Loss Report.

   **Đáp án**: A) **General Ledger Report.**

### Câu hỏi 2: 
**Báo cáo tổng hợp công nợ (AR/AP Aging Report) trong SAP giúp người sử dụng làm gì?**
   - A) Theo dõi tổng số dư công nợ của các đối tượng công nợ.
   - B) Xem thông tin chi tiết về công nợ phải thu hoặc phải trả của từng khách hàng hoặc nhà cung cấp.
   - C) Xác định số dư tài khoản của tất cả các đối tượng trong báo cáo.
   - D) Đánh giá tuổi nợ của các công nợ phải thu và phải trả.

   **Đáp án**: D) **Đánh giá tuổi nợ của các công nợ phải thu và phải trả.**

### Câu hỏi 3: 
**Báo cáo tuổi nợ (Aging Report) trong SAP thường được sử dụng để làm gì?**
   - A) Xem tổng số tiền phải thu của tất cả khách hàng.
   - B) Xác định thời gian quá hạn của các công nợ phải thu và phải trả.
   - C) Liệt kê tất cả các tài khoản ngân hàng của công ty.
   - D) Theo dõi doanh thu của công ty trong từng kỳ.

   **Đáp án**: B) **Xác định thời gian quá hạn của các công nợ phải thu và phải trả.**

---
# Câu hỏi trắc nghiệm về cách lọc và xem chi tiết công nợ

### Câu hỏi 1:
**Khi muốn lọc báo cáo công nợ theo từng khách hàng trong SAP, bạn cần làm gì?**
   - A) Chọn tài khoản phải thu và nhập thông tin về khách hàng trong báo cáo.
   - B) Lựa chọn "Business Partner" và chọn mã khách hàng cần theo dõi.
   - C) Chỉ cần nhập số dư của khách hàng cần kiểm tra.
   - D) Lọc theo số lượng phiếu giao dịch của khách hàng.

   **Đáp án**: B) **Lựa chọn "Business Partner" và chọn mã khách hàng cần theo dõi.**

### Câu hỏi 2:
**Để xem chi tiết công nợ theo loại phiếu trong SAP, bạn cần chọn tiêu chí nào trong báo cáo?**
   - A) Chọn thời gian và tài khoản liên quan đến công nợ.
   - B) Chọn loại phiếu và loại công nợ cần theo dõi.
   - C) Chọn mã số thuế của khách hàng và nhà cung cấp.
   - D) Chọn loại báo cáo tổng hợp công nợ.

   **Đáp án**: B) **Chọn loại phiếu và loại công nợ cần theo dõi.**

### Câu hỏi 3:
**Khi muốn xem chi tiết công nợ theo thời gian (tháng/năm) trong SAP, bạn cần làm gì?**
   - A) Lựa chọn dải thời gian cụ thể từ ngày bắt đầu đến ngày kết thúc.
   - B) Lọc theo số lượng phiếu giao dịch trong tháng.
   - C) Sử dụng báo cáo tổng hợp công nợ mà không cần xác định thời gian.
   - D) Đánh dấu các khoản công nợ chưa thanh toán.

   **Đáp án**: A) **Lựa chọn dải thời gian cụ thể từ ngày bắt đầu đến ngày kết thúc.**

---
# Câu hỏi trắc nghiệm về báo cáo và công nợ trên SAP Business One

### Câu hỏi 1:
**Trong SAP, khi muốn kiểm tra công nợ theo các tiêu chí khác nhau (như khách hàng, loại phiếu, thời gian), tính linh hoạt của báo cáo cho phép bạn làm gì?**
   - A) Lọc và truy xuất thông tin công nợ theo các tiêu chí riêng biệt mà không cần thay đổi cấu hình hệ thống.
   - B) In báo cáo chỉ một lần duy nhất và không thể thay đổi các tiêu chí lọc.
   - C) Chỉ có thể lọc thông tin công nợ theo một tiêu chí duy nhất tại một thời điểm.
   - D) Không thể truy xuất báo cáo công nợ theo các tiêu chí khác nhau.

   **Đáp án**: A) **Lọc và truy xuất thông tin công nợ theo các tiêu chí riêng biệt mà không cần thay đổi cấu hình hệ thống.**

### Câu hỏi 2:
**Khi sử dụng SAP để in báo cáo công nợ, bạn có thể làm gì để xác nhận số dư công nợ của khách hàng trong một khoảng thời gian nhất định?**
   - A) Lọc báo cáo công nợ theo ngày và chọn khách hàng cụ thể để in báo cáo số dư công nợ của họ.
   - B) In báo cáo công nợ một lần và không thể thay đổi phạm vi thời gian.
   - C) Chỉ có thể xác nhận số dư công nợ cho tất cả khách hàng cùng lúc mà không phân biệt thời gian.
   - D) Không thể in báo cáo công nợ cho từng khách hàng riêng biệt.

   **Đáp án**: A) **Lọc báo cáo công nợ theo ngày và chọn khách hàng cụ thể để in báo cáo số dư công nợ của họ.**

### Câu hỏi 3:
**Khi làm việc với báo cáo công nợ chi tiết trên SAP, bạn có thể làm gì để xem số dư công nợ của một khách hàng cụ thể?**
   - A) Sử dụng tính năng "Link" để truy xuất trực tiếp thông tin số dư công nợ của khách hàng trong báo cáo.
   - B) Nhập lại thông tin khách hàng vào báo cáo và tái tính toán lại số dư công nợ.
   - C) Xem báo cáo tổng hợp công nợ và lọc theo tên khách hàng.
   - D) Không thể truy xuất thông tin công nợ chi tiết cho khách hàng trong báo cáo.

   **Đáp án**: A) **Sử dụng tính năng "Link" để truy xuất trực tiếp thông tin số dư công nợ của khách hàng trong báo cáo.**

### Câu hỏi 4:
**Trong SAP, khi bạn muốn xem số dư công nợ chi tiết của một tài khoản 131, bạn có thể làm gì?**
   - A) Chọn tài khoản 131 và chỉ định thời gian để xem báo cáo chi tiết công nợ liên quan đến tài khoản này.
   - B) Lọc báo cáo theo khách hàng và nhập lại tất cả thông tin thủ công.
   - C) Chỉ có thể xem công nợ tổng hợp mà không thể chi tiết tài khoản.
   - D) Không có cách nào để xem công nợ chi tiết theo tài khoản 131.

   **Đáp án**: A) **Chọn tài khoản 131 và chỉ định thời gian để xem báo cáo chi tiết công nợ liên quan đến tài khoản này.**

### Câu hỏi 5:
**Khi muốn lọc báo cáo công nợ theo thời gian và loại phiếu, bạn cần thực hiện bước nào?**
   - A) Chọn đúng các tiêu chí như ngày tháng, loại phiếu trong báo cáo để dễ dàng lọc dữ liệu.
   - B) Không thể lọc báo cáo theo thời gian và loại phiếu trong SAP.
   - C) Lọc theo khách hàng và tự động lấy tất cả các phiếu trong khoảng thời gian đó.
   - D) Lọc theo loại phiếu và tự động lấy các báo cáo chi tiết mà không cần thiết lập thêm.

   **Đáp án**: A) **Chọn đúng các tiêu chí như ngày tháng, loại phiếu trong báo cáo để dễ dàng lọc dữ liệu.**

### Câu hỏi 6:
**Báo cáo tuổi nợ trên SAP giúp bạn làm gì?**
   - A) Theo dõi các khoản công nợ chưa thanh toán của khách hàng và tính toán tuổi nợ dựa trên thời gian quá hạn.
   - B) Chỉ xem các khoản công nợ đã thanh toán đầy đủ của khách hàng.
   - C) Không thể tính toán tuổi nợ mà chỉ hiển thị số dư công nợ của các khách hàng.
   - D) Báo cáo tuổi nợ không liên quan đến công nợ của khách hàng mà chỉ liên quan đến tài khoản ngân hàng.

   **Đáp án**: A) **Theo dõi các khoản công nợ chưa thanh toán của khách hàng và tính toán tuổi nợ dựa trên thời gian quá hạn.**

### Câu hỏi 7:
**Khi cần in báo cáo công nợ, hệ thống SAP hỗ trợ bạn thực hiện như thế nào?**
   - A) Báo cáo công nợ có thể in trực tiếp từ hệ thống SAP với các thông tin đã được lọc và sắp xếp.
   - B) Bạn phải xuất báo cáo công nợ ra Excel và sau đó in từ Excel.
   - C) SAP không hỗ trợ in báo cáo công nợ mà chỉ hiển thị trên màn hình.
   - D) Chỉ có thể in báo cáo công nợ nếu bạn sử dụng phần mềm bên ngoài.

   **Đáp án**: A) **Báo cáo công nợ có thể in trực tiếp từ hệ thống SAP với các thông tin đã được lọc và sắp xếp.**

---

