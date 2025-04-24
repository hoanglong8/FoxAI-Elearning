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
