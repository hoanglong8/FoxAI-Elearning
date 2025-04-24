# Bài 2 - Thiết lập kế toán cơ bản trên SAP B1 TB1100

## Mục tiêu buổi học
Tập trung vào 3 nội dung chính:
1. Bảng tài khoản kế toán
2. Hạch toán tự động (GL Account Determination)
3. Thiết lập đơn vị tiền tệ trong SAP

Nhấn mạnh sự liên kết giữa các phân hệ mua, bán, sản xuất và kế toán.  
**Thời gian:** 00:01 - 10:40

Nội dung video trên YouTube qua đường dẫn sau:
[Video Buổi 2 - SAP Business One TB1100](https://youtu.be/hhgoNmPgikA?si=LUR3WeRkWe6FYB9N)

Hoặc ở trên [Sharepoint](https://foxai.sharepoint.com/:f:/s/TaiLieuTTSXFoxAI/ErmZyUSLwINOnMl07xPugOUBXEf8v3Gdq4_OtyKs-3lJcQ?e=lAmQcF)

![Hình](https://i.ytimg.com/vi/hhgoNmPgikA/maxresdefault.jpg)

---

## Overview
## 1. Quản lý bảng tài khoản
- **Phân biệt tài khoản Title Account và Active Account:**  
  - **Active Account** mới được phép hạch toán.
- **Thuộc tính tài khoản:**  
  - Bao gồm mã, tên, ngôn ngữ, số dư và đơn vị tiền tệ.
  - Các thuộc tính này cần được khai báo đầy đủ từ đầu để dễ quản lý.  
**Thời gian:** 10:40 - 21:19

## 2. Hạch toán tự động
- **Thiết lập tài khoản mặc định cho từng phân hệ (Sales, Purchasing, Inventory):**  
  - Tài khoản mặc định tự động gán vào giao dịch nhưng có thể điều chỉnh.
- **Lấy tài khoản mặc định cho hàng tồn kho:**  
  - Phân tích cách lấy tài khoản mặc định theo **item group** hoặc **warehouse**.  
**Thời gian:** 32:23 - 42:57

## 3. Thiết lập đơn vị tiền tệ
- **Giới thiệu khái niệm:**  
  - **Local currency** và **foreign currency**.
- **Cách khai báo đồng tiền và gán cho từng tài khoản:**  
  - Nhấn mạnh việc thể hiện số dư theo loại tiền.
  - Quản lý chênh lệch tỷ giá liên quan.  
**Thời gian:** 01:02:47

---

## Notes

📚 Giới thiệu tổng quan và mục tiêu buổi học (00:01 - 10:40)
- Giới thiệu ba nội dung chính: bảng tài khoản kế toán, thiết lập hạch toán tự động (GL Account Determination), thiết lập đơn vị tiền tệ trong SAP.
- Giải thích sự liên kết giữa các phân hệ mua, bán, sản xuất và kế toán qua các bút toán tự động.
- Phân biệt bút toán tự động và bút toán thủ công, nhấn mạnh vai trò của bảng tài khoản kế toán (chart of accounts).
- Giới thiệu cấu trúc bảng tài khoản theo chuẩn Việt Nam (Thông tư 200), phân loại tài khoản tài sản, nguồn vốn, doanh thu, chi phí, v.v.

🗂️ Chi tiết cấu trúc và quản lý bảng tài khoản (00:10:40 - 00:21:19) (10:40 - 21:19)
- Phân biệt tài khoản Title Account và Active Account, chỉ Active Account mới được phép hạch toán.
- Giải thích các thuộc tính tài khoản: mã, tên, tên tiếng Anh (Foreign Name), External Code (phục vụ hợp nhất báo cáo với công ty mẹ), cấp độ (level), số dư, đơn vị tiền tệ.
- Hướng dẫn cách inactive tài khoản không còn sử dụng thay vì xóa.
- Nhấn mạnh việc chuẩn bị bảng tài khoản đầy đủ ngay từ đầu để tránh khó khăn khi phát sinh nhu cầu mới.

🛠️ Thao tác tạo, sửa, xóa và quản lý bảng tài khoản (00:21:19 - 00:32:23) (21:19 - 32:23)
- Hướng dẫn thao tác thêm, xóa, sửa tài khoản trên SAP, tạo tài khoản cùng cấp hoặc tài khoản con.
- Giới thiệu chức năng Edit Chart of Accounts để quản lý linh hoạt hơn.
- Lưu ý chỉ xóa được tài khoản khi chưa phát sinh giao dịch.
- Giải thích cách thay đổi vị trí tài khoản trong cây tài khoản để dễ quản lý.

🔄 Thiết lập hạch toán tự động với GL Account Determination (00:32:23 - 00:42:57) (32:23 - 42:57)
- Giới thiệu sơ đồ luồng thông tin từ GL Account Determination sang Business Partner và Transaction.
- Hướng dẫn thiết lập tài khoản mặc định cho từng phân hệ (Sales, Purchasing, Inventory, General).
- Giải thích cách tài khoản mặc định được tự động gán vào các giao dịch và có thể điều chỉnh khi cần.
- Phân tích chi tiết cách lấy tài khoản mặc định cho từng nghiệp vụ, đặc biệt với hàng tồn kho (theo item group hoặc warehouse).

💡 Ý nghĩa và hướng dẫn khai báo các tài khoản trong GL Account Determination (00:42:57 - 00:52:25) (42:57 - 52:25)
- Giải thích chi tiết các trường hợp cần khai báo tài khoản trong từng tab (Sales, Purchasing, Inventory).
- Nhấn mạnh các tài khoản bắt buộc như: phải thu, phải trả, doanh thu, chi phí, tài khoản trung gian, tài khoản chênh lệch tỷ giá, tài khoản allocation, price difference, negative inventory, v.v.
- Giới thiệu cách hệ thống tự động sinh bút toán theo thiết lập tài khoản mặc định.
- Lưu ý về các trường hợp đặc biệt như hàng mua đang đi đường, hàng bán giao trước, đánh giá lại giá trị hàng tồn kho.

💱 Thiết lập và quản lý đơn vị tiền tệ trong SAP (01:02:47 - 01:11:20) (01:02:47 - 01:11:20)
- Giới thiệu khái niệm local currency (đồng tiền hạch toán) và foreign currency (ngoại tệ).
- Hướng dẫn cách khai báo đồng tiền trên hệ thống và gán currency cho từng tài khoản.
- Giải thích ý nghĩa của việc chọn currency cho từng tài khoản (chỉ nhận giao dịch bằng loại tiền đó).
- Lưu ý về việc thể hiện số dư cuối kỳ theo loại tiền và quy đổi sang đồng tiền hạch toán.
- Giới thiệu cách hệ thống xử lý chênh lệch tỷ giá thực hiện và chưa thực hiện, liên kết với các tài khoản đã thiết lập.

---
## Giải thích sự liên kết giữa các phân hệ mua, bán, sản xuất và kế toán qua các bút toán tự động.

### Câu hỏi 1:
**Cách thức hoạt động của bút toán tự động giữa các phân hệ (mua, bán, sản xuất) và kế toán trên SAP Business One là gì?**
   - A) Các bút toán tự động chỉ được sinh ra trong phân hệ kế toán khi có giao dịch trong phân hệ mua hàng.
   - B) Các bút toán tự động được tạo ra từ các giao dịch trong các phân hệ khác như mua hàng, bán hàng, sản xuất và sau đó được ghi nhận vào hệ thống kế toán mà không cần can thiệp thủ công.
   - C) Các bút toán tự động chỉ được tạo khi có thao tác thủ công từ người sử dụng.
   - D) Các bút toán tự động chỉ liên quan đến phân hệ kế toán mà không liên kết với các phân hệ khác.

   **Đáp án**: B) **Các bút toán tự động được tạo ra từ các giao dịch trong các phân hệ khác như mua hàng, bán hàng, sản xuất và sau đó được ghi nhận vào hệ thống kế toán mà không cần can thiệp thủ công.**

### Câu hỏi 2:
**Trong quá trình thiết lập hệ thống SAP, bút toán tự động giữa các phân hệ có tác dụng gì?**
   - A) Giảm thiểu sự chính xác của các bút toán kế toán.
   - B) Tăng tính tự động hóa trong việc hạch toán kế toán, giảm thiểu sự can thiệp thủ công, và duy trì tính chính xác của báo cáo tài chính.
   - C) Chỉ tạo ra các báo cáo không liên quan đến tài khoản kế toán.
   - D) Tạo ra báo cáo tài chính nhưng không ảnh hưởng đến số dư tài khoản.

   **Đáp án**: B) **Tăng tính tự động hóa trong việc hạch toán kế toán, giảm thiểu sự can thiệp thủ công, và duy trì tính chính xác của báo cáo tài chính.**

### Câu hỏi 3:
**Bút toán tự động sinh ra từ các phân hệ như mua hàng, bán hàng và sản xuất sẽ liên kết đến các tài khoản nào trong hệ thống SAP?**
   - A) Chỉ liên kết với tài khoản chi phí.
   - B) Liên kết với các tài khoản phải thu, phải trả, doanh thu, chi phí và tài sản.
   - C) Không liên kết với tài khoản nào, chỉ hiển thị trên báo cáo.
   - D) Chỉ liên kết với tài khoản tài sản.

   **Đáp án**: B) **Liên kết với các tài khoản phải thu, phải trả, doanh thu, chi phí và tài sản.**

---
## Phân biệt bút toán tự động và bút toán thủ công, nhấn mạnh vai trò của bảng tài khoản kế toán (chart of accounts).

### Câu hỏi 1:
**Bút toán tự động và bút toán thủ công khác nhau như thế nào trong hệ thống SAP, và vai trò của bảng tài khoản kế toán (chart of accounts) là gì?**
   - A) Bút toán tự động được hệ thống tạo ra từ các giao dịch trong các phân hệ khác, và bảng tài khoản kế toán chỉ đóng vai trò trong việc lưu trữ các tài khoản đã được thiết lập.
   - B) Bút toán tự động không cần bảng tài khoản kế toán, còn bút toán thủ công được ghi nhận vào các tài khoản đã được cấu hình trong bảng tài khoản kế toán.
   - C) Bút toán tự động là bút toán được hệ thống tự tạo từ các phân hệ khác mà không cần sự can thiệp của người dùng, và bảng tài khoản kế toán xác định tài khoản kế toán mà các bút toán này sẽ được ghi nhận.
   - D) Bút toán thủ công có thể tự động tạo ra bút toán kế toán mà không cần bảng tài khoản kế toán.

   **Đáp án**: C) **Bút toán tự động là bút toán được hệ thống tự tạo từ các phân hệ khác mà không cần sự can thiệp của người dùng, và bảng tài khoản kế toán xác định tài khoản kế toán mà các bút toán này sẽ được ghi nhận.**

### Câu hỏi 2:
**Khi thiết lập bảng tài khoản kế toán (chart of accounts) trong SAP, vai trò của bảng này đối với bút toán tự động và bút toán thủ công là gì?**
   - A) Bảng tài khoản kế toán chỉ có tác dụng với bút toán thủ công, giúp người dùng chọn tài khoản khi nhập liệu.
   - B) Bảng tài khoản kế toán chỉ định các tài khoản phải thu, phải trả, doanh thu, chi phí, và tài sản cho cả bút toán tự động và thủ công, đảm bảo tính chính xác của báo cáo tài chính.
   - C) Bảng tài khoản kế toán không liên quan đến bút toán tự động, chỉ ảnh hưởng đến bút toán thủ công.
   - D) Bảng tài khoản kế toán chỉ ảnh hưởng đến bút toán tự động, giúp xác định tài khoản trong các báo cáo.

   **Đáp án**: B) **Bảng tài khoản kế toán chỉ định các tài khoản phải thu, phải trả, doanh thu, chi phí, và tài sản cho cả bút toán tự động và thủ công, đảm bảo tính chính xác của báo cáo tài chính.**

---
## Câu hỏi về hệ thống tài khoản theo chuẩn mực kế toán Việt Nam (Thông tư 200)

### Câu hỏi 1:
**Theo chuẩn Việt Nam (Thông tư 200), tài khoản kế toán được phân thành các nhóm chính nào?**
   - A) Tài sản, nguồn vốn, doanh thu, chi phí.
   - B) Tài sản, nợ phải trả, thuế, lợi nhuận.
   - C) Tài khoản chi phí, tài khoản tiền mặt, tài khoản ngân hàng.
   - D) Tài sản ngắn hạn, tài sản dài hạn, nợ phải trả.

   **Đáp án**: A) **Tài sản, nguồn vốn, doanh thu, chi phí.**

### Câu hỏi 2:
**Tài khoản nào dưới đây thuộc nhóm tài khoản tài sản trong chuẩn Việt Nam (Thông tư 200)?**
   - A) 111 - Tiền mặt.
   - B) 411 - Vốn điều lệ.
   - C) 511 - Doanh thu bán hàng.
   - D) 632 - Giá vốn hàng bán.

   **Đáp án**: A) **111 - Tiền mặt.**

### Câu hỏi 3:
**Tài khoản nào dưới đây thuộc nhóm tài khoản nguồn vốn theo chuẩn Việt Nam (Thông tư 200)?**
   - A) 411 - Vốn điều lệ.
   - B) 111 - Tiền mặt.
   - C) 156 - Hàng hóa.
   - D) 511 - Doanh thu bán hàng.

   **Đáp án**: A) **411 - Vốn điều lệ.**

### Câu hỏi 4:
**Tài khoản 641 trong bảng tài khoản theo chuẩn Việt Nam (Thông tư 200) thuộc nhóm nào?**
   - A) Tài sản ngắn hạn.
   - B) Tài sản dài hạn.
   - C) Chi phí sản xuất, kinh doanh.
   - D) Doanh thu.

   **Đáp án**: C) **Chi phí sản xuất, kinh doanh.**

### Câu hỏi 5:
**Tài khoản 711 trong bảng tài khoản theo chuẩn Việt Nam (Thông tư 200) dùng để ghi nhận gì?**
   - A) Doanh thu bán hàng.
   - B) Thu nhập khác.
   - C) Chi phí bán hàng.
   - D) Lãi từ cổ phiếu.

   **Đáp án**: B) **Thu nhập khác.**

### Câu hỏi 6:
**Tài khoản nào dưới đây là tài khoản chi phí theo chuẩn Việt Nam (Thông tư 200)?**
   - A) 632 - Giá vốn hàng bán.
   - B) 111 - Tiền mặt.
   - C) 156 - Hàng hóa.
   - D) 411 - Vốn điều lệ.

   **Đáp án**: A) **632 - Giá vốn hàng bán.**

### Câu hỏi 7:
**Theo chuẩn Việt Nam (Thông tư 200), tài khoản doanh thu được phân vào nhóm nào?**
   - A) Tài sản.
   - B) Nguồn vốn.
   - C) Chi phí.
   - D) Doanh thu.

   **Đáp án**: D) **Doanh thu.**

### Câu hỏi 8:
**Tài khoản 131 trong bảng tài khoản theo chuẩn Việt Nam (Thông tư 200) đại diện cho gì?**
   - A) Công nợ phải thu của khách hàng.
   - B) Tiền gửi ngân hàng.
   - C) Giá trị hàng hóa tồn kho.
   - D) Nợ phải trả cho nhà cung cấp.

   **Đáp án**: A) **Công nợ phải thu của khách hàng.**

### Câu hỏi 9:
**Theo chuẩn Việt Nam (Thông tư 200), tài khoản 211 dùng để ghi nhận gì?**
   - A) Tiền mặt.
   - B) Tài sản cố định hữu hình.
   - C) Công nợ phải trả.
   - D) Chi phí trả trước.

   **Đáp án**: B) **Tài sản cố định hữu hình.**

### Câu hỏi 10:
**Tài khoản 642 trong bảng tài khoản theo chuẩn Việt Nam (Thông tư 200) đại diện cho loại chi phí nào?**
   - A) Chi phí bán hàng.
   - B) Chi phí quản lý doanh nghiệp.
   - C) Chi phí tài chính.
   - D) Chi phí dự phòng.

   **Đáp án**: B) **Chi phí quản lý doanh nghiệp.**

---
### Câu hỏi: Phân biệt giữa Title Account và Active Account

**Câu 1:** Điều nào sau đây là sự khác biệt chính giữa **Title Account** và **Active Account**?

- A. **Title Account** có thể được sử dụng để hạch toán, còn **Active Account** thì không.
- B. **Title Account** chỉ có thể là tài khoản mô tả, không có khả năng hạch toán, trong khi **Active Account** có thể được sử dụng để hạch toán các nghiệp vụ.
- C. **Active Account** không cần phải được theo dõi, trong khi **Title Account** yêu cầu phải theo dõi.
- D. **Active Account** chỉ có thể sử dụng trong báo cáo tài chính, còn **Title Account** không được dùng trong báo cáo tài chính.

**Đáp án:** B. **Title Account** chỉ có thể là tài khoản mô tả, không có khả năng hạch toán, trong khi **Active Account** có thể được sử dụng để hạch toán các nghiệp vụ.

**Câu 2:** Tài khoản nào dưới đây là loại tài khoản có thể hạch toán các nghiệp vụ tài chính?

- A. Title Account
- B. Active Account
- C. Control Account
- D. Cashier Account

**Đáp án:** B. **Active Account** có thể hạch toán các nghiệp vụ tài chính.

**Câu 3:** Trong trường hợp tài khoản đã được sử dụng để phát sinh giao dịch, tài khoản này có thể được thay đổi trạng thái thành:

- A. Title Account
- B. Inactive Account
- C. Active Account
- D. Cashier Account

**Đáp án:** B. **Inactive Account**. Khi một tài khoản đã phát sinh giao dịch, bạn không thể xóa nó khỏi hệ thống và chỉ có thể làm cho nó **Inactive**.

**Câu 4:** Tại sao một tài khoản **Active Account** cần được chọn để theo dõi nghiệp vụ tài chính?

- A. Để đảm bảo rằng tài khoản có thể được sử dụng trong các báo cáo tài chính.
- B. Để không cho phép thay đổi thông tin tài khoản.
- C. Để tránh việc tài khoản bị inactive trong hệ thống.
- D. Để tài khoản có thể được hiển thị trong các báo cáo nội bộ.

**Đáp án:** A. **Active Account** cần được chọn để theo dõi nghiệp vụ tài chính để đảm bảo rằng nó có thể được sử dụng trong các báo cáo tài chính.

**Câu 5:** Câu nào sau đây đúng về việc sử dụng **Title Account** trong hệ thống?

- A. **Title Account** có thể trực tiếp hạch toán vào các báo cáo tài chính.
- B. **Title Account** chỉ được sử dụng để mô tả các loại tài khoản mà không có khả năng phát sinh nghiệp vụ.
- C. **Title Account** có thể được hạch toán vào báo cáo tài chính như **Active Account**.
- D. **Title Account** có thể chuyển thành **Active Account** sau khi sử dụng trong báo cáo tài chính.

**Đáp án:** B. **Title Account** chỉ được sử dụng để mô tả các loại tài khoản mà không có khả năng phát sinh nghiệp vụ.

---
### Câu hỏi: Giải thích các thuộc tính tài khoản

**Câu 1:** Thuộc tính **Foreign Name** trong tài khoản được sử dụng để:

- A. Để lưu trữ tên tài khoản bằng tiếng Việt.
- B. Để lưu trữ tên tài khoản bằng tiếng Anh, phục vụ cho các báo cáo với công ty mẹ.
- C. Để lưu trữ mã số tài khoản quốc tế.
- D. Để lưu trữ số dư của tài khoản trong báo cáo tài chính.

**Đáp án:** B. **Foreign Name** lưu trữ tên tài khoản bằng tiếng Anh, phục vụ cho các báo cáo với công ty mẹ.

**Câu 2:** **External Code** được sử dụng trong hệ thống tài khoản với mục đích:

- A. Để cung cấp mã số tài khoản duy nhất cho công ty nội địa.
- B. Để nhập mã hiệu tài khoản của công ty mẹ, phục vụ cho việc hợp nhất báo cáo tài chính.
- C. Để hiển thị số dư tài khoản trong báo cáo tài chính.
- D. Để lưu trữ tên tài khoản bằng tiếng Việt.

**Đáp án:** B. **External Code** nhập mã hiệu tài khoản của công ty mẹ, phục vụ cho việc hợp nhất báo cáo tài chính.

**Câu 3:** Cấp độ (level) của tài khoản có ý nghĩa gì trong hệ thống?

- A. Cấp độ xác định mức độ chi tiết của tài khoản trong báo cáo.
- B. Cấp độ cho biết tài khoản có thể hạch toán hay không.
- C. Cấp độ xác định số dư tài khoản trong báo cáo tài chính.
- D. Cấp độ cho biết tài khoản thuộc nhóm tài khoản nào trong sơ đồ tài khoản.

**Đáp án:** A. **Cấp độ** xác định mức độ chi tiết của tài khoản trong báo cáo, ví dụ từ cấp 1 đến cấp 3.

**Câu 4:** Thuộc tính **số dư** của tài khoản cho phép người sử dụng:

- A. Xem tổng số tiền của tất cả các tài khoản.
- B. Xem số tiền hiện tại trong tài khoản, bao gồm các nghiệp vụ gần đây.
- C. Xem lịch sử giao dịch của tài khoản.
- D. Xem tên các tài khoản liên quan đến tài khoản này.

**Đáp án:** B. **Số dư** cho phép người sử dụng xem số tiền hiện tại trong tài khoản, bao gồm các nghiệp vụ gần đây.

**Câu 5:** **Đơn vị tiền tệ** của tài khoản được sử dụng để:

- A. Xác định loại tiền tệ mà tài khoản này sử dụng trong các nghiệp vụ.
- B. Lưu trữ tỷ giá ngoại tệ cho các tài khoản quốc tế.
- C. Hiển thị tên tài khoản bằng tiếng Việt hoặc tiếng Anh.
- D. Lưu trữ thông tin về công ty mẹ trong hệ thống.

**Đáp án:** A. **Đơn vị tiền tệ** xác định loại tiền tệ mà tài khoản này sử dụng trong các nghiệp vụ.

**Câu 6:** Nếu một tài khoản có cấp độ là 3, điều này có nghĩa là:

- A. Tài khoản này là tài khoản cấp 1, dùng để phân loại các nhóm tài khoản.
- B. Tài khoản này là tài khoản cấp 2, được sử dụng để theo dõi tài khoản con.
- C. Tài khoản này là tài khoản cấp 3, chi tiết hơn trong nhóm tài khoản cấp 2.
- D. Tài khoản này là tài khoản cấp 3, được sử dụng cho báo cáo tài chính tổng hợp.

**Đáp án:** C. Tài khoản có cấp độ **3** là tài khoản chi tiết hơn trong nhóm tài khoản cấp 2.

---
### Câu hỏi: Hướng dẫn cách inactive tài khoản và chuẩn bị bảng tài khoản đầy đủ

**Câu 1:** Khi một tài khoản không còn sử dụng và cần phải dừng lại, bạn nên làm gì thay vì xóa tài khoản đó khỏi hệ thống?

- A. Xóa tài khoản đó để giải phóng bộ nhớ hệ thống.
- B. Đặt tài khoản vào trạng thái **inactive** để không thể sử dụng lại mà không làm mất dữ liệu.
- C. Chuyển tài khoản sang tài khoản khác để thay thế.
- D. Chuyển tài khoản đó thành tài khoản **Title Account**.

**Đáp án:** B. **Inactive** tài khoản để không thể sử dụng lại mà không làm mất dữ liệu.

**Câu 2:** Tại sao việc chuẩn bị bảng tài khoản đầy đủ ngay từ đầu là quan trọng trong quá trình quản lý tài khoản?

- A. Để dễ dàng cập nhật khi có sự thay đổi trong hệ thống báo cáo tài chính.
- B. Để không gặp khó khăn khi phát sinh nhu cầu mới và có thể theo dõi được các tài khoản con trong tương lai.
- C. Để tránh phải xóa các tài khoản không sử dụng, giúp giảm bớt số lượng tài khoản trong hệ thống.
- D. Để các tài khoản có thể chuyển thành **Inactive** mà không ảnh hưởng đến các nghiệp vụ đã thực hiện.

**Đáp án:** B. **Chuẩn bị bảng tài khoản đầy đủ ngay từ đầu** giúp tránh khó khăn khi phát sinh nhu cầu mới và đảm bảo việc theo dõi các tài khoản con trong tương lai.

---
### Câu hỏi: Thao tác thêm, xóa, sửa tài khoản trên SAP

**Câu 1:** Để **thêm một tài khoản mới** vào hệ thống SAP, bạn cần thực hiện thao tác nào sau đây?

- A. Click vào nút "Sửa" trên tài khoản hiện tại và thay đổi thông tin.
- B. Chọn tài khoản cha và sử dụng chức năng "Add Sub-Level Account" để tạo tài khoản con.
- C. Chọn "Add same level account" để tạo tài khoản cùng cấp với tài khoản hiện tại.
- D. Click vào nút "Xóa" và chọn tài khoản cần thêm.

**Đáp án:** C. Chọn "Add same level account" để tạo tài khoản cùng cấp với tài khoản hiện tại.

**Câu 2:** Khi bạn muốn **xóa một tài khoản** trong SAP, điều kiện cần thiết là:

- A. Tài khoản không được phép có bất kỳ nghiệp vụ nào đã được hạch toán.
- B. Tài khoản phải có ít nhất một nghiệp vụ đã được hạch toán.
- C. Tài khoản phải có trạng thái "Inactive".
- D. Tài khoản phải được chuyển sang tài khoản "Title Account".

**Đáp án:** A. Tài khoản không được phép có bất kỳ nghiệp vụ nào đã được hạch toán.

**Câu 3:** Nếu bạn muốn **tạo một tài khoản con** dưới một tài khoản cha trong SAP, bạn cần làm gì?

- A. Chọn tài khoản cha và sử dụng chức năng "Add same level account".
- B. Sử dụng chức năng "Add Sub-Level Account" khi chọn tài khoản cha để tạo tài khoản con.
- C. Xóa tài khoản cha và tạo lại tài khoản con từ đầu.
- D. Thay đổi cấp độ của tài khoản cha thành cấp độ 1.

**Đáp án:** B. Sử dụng chức năng "Add Sub-Level Account" khi chọn tài khoản cha để tạo tài khoản con.

---
### Câu hỏi về chức năng Edit Chart of Accounts và thay đổi vị trí tài khoản

**Câu 1:** Chức năng **Edit Chart of Accounts** trong SAP cho phép bạn thực hiện thao tác nào sau đây?

- A. Thay đổi thông tin tài khoản trong cây tài khoản và thêm các tài khoản con.
- B. Chỉ có thể xóa tài khoản và không thể thêm tài khoản mới.
- C. Không thể thay đổi thông tin tài khoản nhưng cho phép xóa tài khoản đã tồn tại.
- D. Tạo các tài khoản trong một mức độ riêng biệt mà không thay đổi cây tài khoản.

**Đáp án:** A. **Edit Chart of Accounts** cho phép bạn thay đổi thông tin tài khoản trong cây tài khoản và thêm các tài khoản con.

**Câu 2:** Để **thay đổi vị trí tài khoản** trong cây tài khoản, bạn cần làm gì?

- A. Sử dụng chức năng "Edit Chart of Accounts" và thay đổi vị trí của tài khoản trực tiếp trong cây tài khoản.
- B. Xóa tài khoản cũ và tạo tài khoản mới với vị trí mới.
- C. Sử dụng tính năng "Move Account" trong "Business Partner".
- D. Thay đổi trạng thái của tài khoản thành "Inactive" và tạo tài khoản mới ở vị trí cần thiết.

**Đáp án:** A. Sử dụng chức năng **"Edit Chart of Accounts"** và thay đổi vị trí của tài khoản trực tiếp trong cây tài khoản.

**Câu 3:** Khi sử dụng chức năng **Edit Chart of Accounts** để thay đổi vị trí tài khoản trong cây tài khoản, việc thay đổi vị trí này sẽ giúp bạn:

- A. Tạo ra các tài khoản con mà không cần phải thay đổi cấu trúc tài khoản.
- B. Quản lý tài khoản dễ dàng hơn bằng cách tổ chức lại các tài khoản theo cấp độ hoặc theo nhóm tài chính.
- C. Thực hiện các báo cáo tài chính mà không cần phải thay đổi thông tin tài khoản.
- D. Chỉ thay đổi mã số tài khoản mà không làm thay đổi cây tài khoản.

**Đáp án:** B. Việc thay đổi vị trí tài khoản giúp **quản lý tài khoản dễ dàng hơn** bằng cách tổ chức lại các tài khoản theo cấp độ hoặc theo nhóm tài chính.

---
### Câu hỏi: Sơ đồ luồng thông tin từ GL Account Determination sang Business Partner & Transaction, thiết lập tài khoản mặc định

**Câu 1:** Luồng thông tin từ **GL Account Determination** sang **Business Partner** và **Transaction** được mô tả như thế nào?

- A. Thông tin từ GL Account Determination sẽ được chuyển trực tiếp vào báo cáo tài chính.
- B. Thông tin từ GL Account Determination sẽ được chuyển vào Item Master Data và Business Partner, sau đó áp dụng vào các giao dịch như AI Invoice.
- C. Thông tin từ GL Account Determination chỉ được sử dụng cho việc kiểm tra số dư tài khoản.
- D. Thông tin từ GL Account Determination không liên quan đến Business Partner hay Transaction.

**Đáp án:** B. Thông tin từ **GL Account Determination** sẽ được chuyển vào **Item Master Data** và **Business Partner**, sau đó áp dụng vào các giao dịch như AI Invoice.

**Câu 2:** Khi thiết lập **tài khoản mặc định** trong SAP cho phân hệ **Sales**, thông tin tài khoản phải thu sẽ được lấy từ đâu?

- A. Từ thông tin kho (Warehouse).
- B. Từ thông tin Item Group.
- C. Từ thông tin **Business Partner** và **GL Account Determination**.
- D. Từ các tài khoản đã được thiết lập trong General Ledger.

**Đáp án:** C. Từ thông tin **Business Partner** và **GL Account Determination**.

**Câu 3:** Để thiết lập tài khoản mặc định cho các phân hệ như **Sales**, **Purchasing**, **Inventory**, và **General**, bạn cần làm gì trong SAP?

- A. Thiết lập tài khoản trong **Item Master Data** cho từng phân hệ và chọn tài khoản phù hợp từ **GL Account Determination**.
- B. Tạo tài khoản mới trong hệ thống mà không cần liên kết đến GL Account Determination.
- C. Chỉ cần nhập tài khoản trong **Business Partner** mà không cần kết nối với GL Account Determination.
- D. Thay đổi tài khoản mặc định trong các báo cáo tài chính và không cần thiết lập trong phân hệ.

**Đáp án:** A. Thiết lập tài khoản trong **Item Master Data** cho từng phân hệ và chọn tài khoản phù hợp từ **GL Account Determination**.

---
### Câu hỏi: Tài khoản mặc định và cách gán tài khoản vào các giao dịch

**Câu 1:** Tài khoản mặc định trong SAP được **tự động gán** vào giao dịch như thế nào?

- A. Tài khoản mặc định chỉ được gán thủ công khi nhập liệu vào từng phiếu giao dịch.
- B. Tài khoản mặc định được tự động gán từ **GL Account Determination** và có thể được thay đổi trong **Item Master Data** hoặc **Business Partner**.
- C. Tài khoản mặc định không thể thay đổi sau khi thiết lập ban đầu.
- D. Tài khoản mặc định chỉ được gán cho các giao dịch trong báo cáo tài chính.

**Đáp án:** B. Tài khoản mặc định được tự động gán từ **GL Account Determination** và có thể được thay đổi trong **Item Master Data** hoặc **Business Partner**.

**Câu 2:** Khi thực hiện giao dịch liên quan đến **hàng tồn kho**, tài khoản mặc định sẽ được lấy từ đâu?

- A. Từ thông tin trong **Item Master Data** và **GL Account Determination**.
- B. Từ thông tin được cấu hình trong các báo cáo tài chính.
- C. Từ thông tin trong các **tài khoản phải thu** và **phải trả**.
- D. Từ các thông tin trong **Business Partner** mà không liên quan đến hàng tồn kho.

**Đáp án:** A. Tài khoản mặc định sẽ được lấy từ thông tin trong **Item Master Data** và **GL Account Determination**.

**Câu 3:** Trong trường hợp một mặt hàng có thể thuộc nhiều kho, tài khoản mặc định sẽ được lấy từ đâu?

- A. Từ thông tin trong **Item Group** mà không liên quan đến kho.
- B. Từ thông tin kho (**warehouse**) nơi mặt hàng đó đang tồn kho, theo cấu hình trong **Inventory**.
- C. Từ tài khoản liên kết trực tiếp với người cung cấp mặt hàng đó.
- D. Từ báo cáo tài chính cuối kỳ.

**Đáp án:** B. Tài khoản mặc định sẽ được lấy từ thông tin kho (**warehouse**) nơi mặt hàng đó đang tồn kho, theo cấu hình trong **Inventory**.

**Câu 4:** Khi tài khoản mặc định được tự động gán cho một giao dịch, người dùng có thể điều chỉnh tài khoản đó không?

- A. Không, tài khoản mặc định không thể thay đổi sau khi đã được thiết lập.
- B. Có, người dùng có thể thay đổi tài khoản mặc định trực tiếp trong từng phiếu giao dịch.
- C. Người dùng phải xóa và tạo lại tài khoản mặc định nếu muốn thay đổi.
- D. Người dùng có thể thay đổi tài khoản mặc định chỉ khi giao dịch chưa hoàn tất.

**Đáp án:** B. **Có**, người dùng có thể thay đổi tài khoản mặc định trực tiếp trong từng phiếu giao dịch.

**Câu 5:** Khi thiết lập tài khoản mặc định cho **hàng tồn kho**, sự lựa chọn giữa việc sử dụng **item group** hay **warehouse** có ý nghĩa gì?

- A. Việc lựa chọn giữa **item group** và **warehouse** chỉ ảnh hưởng đến báo cáo tài chính cuối kỳ.
- B. Lựa chọn giữa **item group** và **warehouse** giúp xác định cách thức hạch toán cho mặt hàng khi nó thay đổi kho hoặc nhóm mặt hàng.
- C. Lựa chọn này chỉ có tác dụng trong việc quản lý hàng hóa mà không liên quan đến hạch toán.
- D. **Item group** và **warehouse** không ảnh hưởng đến tài khoản mặc định cho hàng tồn kho.

**Đáp án:** B. Lựa chọn giữa **item group** và **warehouse** giúp xác định cách thức **hạch toán** cho mặt hàng khi nó thay đổi kho hoặc nhóm mặt hàng.

---
### Câu hỏi: Khai báo tài khoản trong các tab Sales, Purchasing, và Inventory

**Câu 1:** Trong tab **Sales**, tài khoản phải thu mặc định là gì và tại sao nó quan trọng?

- A. Tài khoản 131, tài khoản này là tài khoản phải thu và dùng để ghi nhận công nợ phải thu từ khách hàng.
- B. Tài khoản 331, dùng để ghi nhận các khoản phải trả cho nhà cung cấp.
- C. Tài khoản 711, dùng để ghi nhận doanh thu từ việc bán hàng.
- D. Tài khoản 811, dùng để ghi nhận chi phí cho hàng hóa bán ra.

**Đáp án:** A. Tài khoản **131** là tài khoản phải thu và dùng để ghi nhận công nợ phải thu từ khách hàng, đây là tài khoản quan trọng trong việc theo dõi công nợ trong tab **Sales**.

**Câu 2:** Trong tab **Purchasing**, tài khoản phải trả mặc định là gì và mục đích của nó là gì?

- A. Tài khoản 331, dùng để ghi nhận các khoản phải trả cho nhà cung cấp.
- B. Tài khoản 711, dùng để ghi nhận doanh thu từ việc bán hàng.
- C. Tài khoản 711, dùng để ghi nhận chi phí bán hàng.
- D. Tài khoản 515, dùng để ghi nhận lãi từ tỷ giá ngoại tệ.

**Đáp án:** A. Tài khoản **331** là tài khoản phải trả và dùng để ghi nhận các khoản phải trả cho nhà cung cấp, đây là tài khoản quan trọng trong tab **Purchasing**.

**Câu 3:** Tại sao trong tab **Inventory**, tài khoản **Inventory Account** (tài khoản hàng tồn kho) lại rất quan trọng?

- A. Nó dùng để ghi nhận tất cả các giao dịch nhập kho, xuất kho và theo dõi giá trị hàng tồn kho.
- B. Nó dùng để ghi nhận doanh thu từ bán hàng.
- C. Nó dùng để ghi nhận chi phí vận hành của kho.
- D. Nó dùng để ghi nhận các khoản nợ phải trả cho nhà cung cấp.

**Đáp án:** A. Tài khoản **Inventory Account** (tài khoản hàng tồn kho) dùng để ghi nhận tất cả các giao dịch nhập kho, xuất kho và theo dõi giá trị hàng tồn kho, giúp đảm bảo sự chính xác trong việc quản lý hàng hóa trong tab **Inventory**.

**Câu 4:** Khi sử dụng **tài khoản trung gian** trong hệ thống, trường hợp nào sẽ sử dụng tài khoản này?

- A. Khi bạn nhập hàng về nhưng chưa nhận được hóa đơn từ nhà cung cấp, tài khoản trung gian sẽ ghi nhận công nợ tạm thời.
- B. Khi thanh toán chi phí vận chuyển cho nhà cung cấp, tài khoản trung gian sẽ được sử dụng để phân bổ chi phí.
- C. Khi bạn hoàn tất thanh toán cho khách hàng và ghi nhận doanh thu, tài khoản trung gian không được sử dụng.
- D. Khi bạn cần ghi nhận tỷ giá chênh lệch, tài khoản trung gian không được phép sử dụng.

**Đáp án:** A. **Tài khoản trung gian** được sử dụng khi bạn nhập hàng về nhưng chưa nhận được hóa đơn từ nhà cung cấp, tài khoản này ghi nhận công nợ tạm thời cho đến khi nhận được hóa đơn và thực hiện bút toán chính thức.

**Câu 5:** Tài khoản **Price Difference Account** trong tab **Inventory** được sử dụng trong trường hợp nào?

- A. Khi có sự khác biệt giữa giá mua thực tế và giá chuẩn (Standard Cost) của hàng tồn kho, sự chênh lệch sẽ được ghi nhận vào tài khoản này.
- B. Khi có sự chênh lệch giữa tỷ giá mua và tỷ giá bán của hàng hóa, tài khoản này sẽ ghi nhận sự khác biệt.
- C. Khi bạn phải điều chỉnh giá trị hàng tồn kho vào cuối kỳ kế toán.
- D. Khi bạn cần điều chỉnh tài khoản chi phí cho các mặt hàng đã xuất kho.

**Đáp án:** A. **Price Difference Account** được sử dụng khi có sự khác biệt giữa giá mua thực tế và giá chuẩn (**Standard Cost**) của hàng tồn kho, sự chênh lệch này sẽ được ghi nhận vào tài khoản này.

---
### Câu hỏi: Hệ thống tự động sinh bút toán theo thiết lập tài khoản mặc định

**Câu 1:** Hệ thống SAP tự động sinh bút toán như thế nào khi có một giao dịch nhập kho, xuất kho, hoặc bán hàng?

- A. Hệ thống tự động sinh bút toán dựa trên thiết lập tài khoản mặc định trong **Item Master Data** và **GL Account Determination**.
- B. Hệ thống yêu cầu người dùng nhập tất cả các tài khoản vào mỗi giao dịch.
- C. Hệ thống không hỗ trợ sinh bút toán tự động trong các giao dịch nhập kho hay xuất kho.
- D. Hệ thống tự động sinh bút toán nhưng không thể thay đổi tài khoản mặc định.

**Đáp án:** A. Hệ thống tự động sinh bút toán dựa trên thiết lập tài khoản mặc định trong **Item Master Data** và **GL Account Determination**.

**Câu 2:** Khi hàng hóa đang đi đường (chưa nhận được hóa đơn từ nhà cung cấp), tài khoản mặc định nào sẽ được sử dụng?

- A. Tài khoản **33883** (hoặc tài khoản trung gian khác) sẽ được sử dụng để ghi nhận hàng hóa đang đi đường.
- B. Tài khoản **331** (phải trả nhà cung cấp) sẽ được sử dụng ngay lập tức.
- C. Tài khoản **811** (chi phí) sẽ được sử dụng để ghi nhận chi phí vận chuyển.
- D. Tài khoản **711** (doanh thu) sẽ được ghi nhận vào khi hàng hóa đang đi đường.

**Đáp án:** A. Tài khoản **33883** (hoặc tài khoản trung gian khác) sẽ được sử dụng để ghi nhận hàng hóa đang đi đường khi chưa nhận được hóa đơn từ nhà cung cấp.

**Câu 3:** Khi hàng bán đã giao cho khách hàng nhưng chưa có hóa đơn (hàng bán giao trước), tài khoản nào sẽ được sử dụng trong hệ thống?

- A. Hệ thống sẽ ghi nhận tài khoản **711** (doanh thu) khi hàng bán đã giao.
- B. Tài khoản **131** (phải thu khách hàng) sẽ được ghi nhận khi hàng bán giao trước.
- C. Tài khoản **33883** (tài khoản trung gian) sẽ được ghi nhận khi hàng bán giao trước.
- D. Tài khoản **811** (chi phí) sẽ được ghi nhận khi hàng bán giao trước.

**Đáp án:** C. Tài khoản **33883** (tài khoản trung gian) sẽ được ghi nhận khi hàng bán giao trước, chờ đến khi nhận được hóa đơn và thực hiện bút toán chính thức.

**Câu 4:** Khi cần **đánh giá lại giá trị hàng tồn kho**, tài khoản nào sẽ được sử dụng để ghi nhận sự thay đổi?

- A. Tài khoản **515** (lãi tỷ giá) sẽ được sử dụng để ghi nhận sự thay đổi giá trị hàng tồn kho.
- B. Tài khoản **156** (hàng tồn kho) sẽ được điều chỉnh để ghi nhận sự thay đổi giá trị hàng tồn kho.
- C. Tài khoản **811** (chi phí) sẽ được sử dụng để ghi nhận sự thay đổi trong giá trị hàng tồn kho.
- D. Tài khoản **711** (doanh thu) sẽ được sử dụng để ghi nhận sự thay đổi giá trị hàng tồn kho.

**Đáp án:** B. Tài khoản **156** (hàng tồn kho) sẽ được điều chỉnh để ghi nhận sự thay đổi giá trị hàng tồn kho trong trường hợp đánh giá lại giá trị hàng tồn kho.

**Câu 5:** Khi hệ thống tự động sinh bút toán cho các giao dịch, có những trường hợp đặc biệt nào mà người dùng cần lưu ý khi sử dụng tài khoản mặc định?

- A. Người dùng cần lưu ý khi có các tình huống như hàng mua đang đi đường, hàng bán giao trước, hoặc đánh giá lại giá trị hàng tồn kho.
- B. Người dùng không cần phải lo lắng về các tình huống đặc biệt vì hệ thống sẽ tự động xử lý mọi trường hợp.
- C. Tài khoản mặc định chỉ được sử dụng cho các giao dịch liên quan đến khách hàng và nhà cung cấp, không áp dụng cho hàng tồn kho.
- D. Tất cả các giao dịch nhập kho và xuất kho đều sẽ sử dụng tài khoản mặc định mà không cần phải thay đổi gì.

**Đáp án:** A. Người dùng cần lưu ý khi có các tình huống như **hàng mua đang đi đường**, **hàng bán giao trước**, hoặc **đánh giá lại giá trị hàng tồn kho** vì hệ thống sẽ cần điều chỉnh các tài khoản tương ứng cho từng tình huống.

---
### Câu hỏi: Khái niệm về local currency và foreign currency, khai báo currency cho tài khoản

**Câu 1:** **Local currency** (đồng tiền hạch toán) là gì và có vai trò gì trong hệ thống SAP?

- A. **Local currency** là đồng tiền ngoại tệ, dùng để ghi nhận tất cả các giao dịch quốc tế.
- B. **Local currency** là đồng tiền được sử dụng trong hệ thống để hạch toán toàn bộ các giao dịch tài chính của công ty, thường là tiền Việt Nam đồng (VND).
- C. **Local currency** là đồng tiền duy nhất được sử dụng cho các giao dịch liên quan đến ngân hàng.
- D. **Local currency** là đồng tiền mà công ty sử dụng để ghi nhận tất cả các giao dịch thanh toán với khách hàng.

**Đáp án:** B. **Local currency** là đồng tiền được sử dụng trong hệ thống để hạch toán toàn bộ các giao dịch tài chính của công ty, thường là tiền Việt Nam đồng (VND).

**Câu 2:** Cách khai báo **foreign currency** (ngoại tệ) và gán **currency** cho từng tài khoản trong hệ thống SAP như thế nào?

- A. Khi khai báo **foreign currency**, người dùng chỉ cần nhập tỷ giá và không cần liên kết với tài khoản nào.
- B. **Foreign currency** được khai báo khi hệ thống yêu cầu và có thể gán vào tài khoản để chỉ nhận giao dịch với loại ngoại tệ đó. Cần xác định tỷ giá khi tạo tài khoản.
- C. **Foreign currency** chỉ cần khai báo tại thời điểm ghi nhận giao dịch ngoại tệ, không cần thiết lập trước.
- D. **Foreign currency** chỉ được gán cho các tài khoản liên quan đến thuế và không ảnh hưởng đến tài khoản ngân hàng.

**Đáp án:** B. **Foreign currency** được khai báo khi hệ thống yêu cầu và có thể gán vào tài khoản để chỉ nhận giao dịch với loại ngoại tệ đó. Cần xác định tỷ giá khi tạo tài khoản.

**Câu 3:** Ý nghĩa của việc **chọn currency** cho từng tài khoản là gì?

- A. Khi chọn **currency** cho tài khoản, hệ thống sẽ tự động chuyển đổi tất cả các giao dịch sang **local currency**.
- B. Việc chọn **currency** cho tài khoản đảm bảo rằng tài khoản chỉ nhận giao dịch bằng loại tiền đó. Nếu một giao dịch có loại tiền khác, hệ thống sẽ báo lỗi.
- C. **Currency** chỉ có tác dụng khi giao dịch có giá trị trên một mức nhất định và không ảnh hưởng đến việc ghi nhận công nợ.
- D. Chọn **currency** không ảnh hưởng đến tài khoản, chỉ có tác dụng trong các báo cáo tài chính cuối kỳ.

**Đáp án:** B. Việc chọn **currency** cho tài khoản đảm bảo rằng tài khoản chỉ nhận giao dịch bằng loại tiền đó. Nếu một giao dịch có loại tiền khác, hệ thống sẽ báo lỗi.

---
### Câu hỏi: Thể hiện số dư cuối kỳ và xử lý chênh lệch tỷ giá

**Câu 1:** Khi hệ thống SAP **thể hiện số dư cuối kỳ** cho tài khoản, nếu tài khoản có đồng tiền ngoại tệ, hệ thống sẽ:

- A. Thể hiện số dư cuối kỳ bằng đồng tiền ngoại tệ và không quy đổi sang đồng tiền hạch toán.
- B. Chỉ thể hiện số dư cuối kỳ bằng đồng tiền hạch toán, bỏ qua đồng tiền ngoại tệ.
- C. Thể hiện số dư cuối kỳ bằng đồng tiền ngoại tệ và đồng tiền hạch toán, đồng thời chuyển đổi số dư ngoại tệ sang đồng tiền hạch toán.
- D. Thể hiện số dư cuối kỳ bằng đồng tiền ngoại tệ, sau đó chuyển thành tiền Việt nhưng không hiển thị số dư ngoại tệ.

**Đáp án:** C. Hệ thống sẽ **thể hiện số dư cuối kỳ bằng đồng tiền ngoại tệ** và **đồng tiền hạch toán**, đồng thời **chuyển đổi số dư ngoại tệ sang đồng tiền hạch toán**.

**Câu 2:** Khi **xử lý chênh lệch tỷ giá thực hiện và chưa thực hiện**, hệ thống sẽ làm gì với các tài khoản liên quan?

- A. Hệ thống sẽ tự động tính toán và chuyển chênh lệch tỷ giá vào tài khoản lợi nhuận hoặc lỗ và không yêu cầu thiết lập thêm tài khoản.
- B. Hệ thống không xử lý chênh lệch tỷ giá mà yêu cầu người dùng phải tự tính toán và nhập bút toán.
- C. Hệ thống sẽ ghi nhận **chênh lệch tỷ giá chưa thực hiện** vào tài khoản **chênh lệch tỷ giá** và **chênh lệch tỷ giá thực hiện** vào tài khoản lãi/lỗ tỷ giá.
- D. Hệ thống sẽ tính toán chênh lệch tỷ giá nhưng chỉ áp dụng cho các giao dịch liên quan đến ngoại tệ và không ảnh hưởng đến tài khoản liên quan.

**Đáp án:** C. Hệ thống sẽ ghi nhận **chênh lệch tỷ giá chưa thực hiện** vào tài khoản **chênh lệch tỷ giá** và **chênh lệch tỷ giá thực hiện** vào tài khoản lãi/lỗ tỷ giá.

**Câu 3:** Ý nghĩa của việc liên kết các **tài khoản tỷ giá** trong hệ thống SAP với **các tài khoản đã thiết lập** là gì?

- A. Các tài khoản tỷ giá chỉ phục vụ cho báo cáo tài chính cuối kỳ và không ảnh hưởng đến các giao dịch hàng ngày.
- B. Các tài khoản tỷ giá giúp tự động tính toán và ghi nhận các **chênh lệch tỷ giá** khi tỷ giá thay đổi, giúp điều chỉnh số dư tài khoản phù hợp.
- C. Các tài khoản tỷ giá chỉ được sử dụng cho các giao dịch mua bán ngoại tệ và không liên quan đến các giao dịch khác.
- D. Các tài khoản tỷ giá chỉ được liên kết với các tài khoản trong phần quản lý hàng tồn kho và không ảnh hưởng đến các tài khoản khác.

**Đáp án:** B. Các tài khoản tỷ giá giúp **tự động tính toán và ghi nhận các chênh lệch tỷ giá** khi tỷ giá thay đổi, giúp **điều chỉnh số dư tài khoản** phù hợp.

---
