## 1. Tên chỉ tiêu

**%HT_CPK – Tỷ lệ hoàn thành Chi phí khác**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **%HT_CPK** dùng để đo lường **mức độ hoàn thành chi phí “Chi phí khác” thực tế so với kế hoạch** trong năm tài chính.

* Phản ánh mức độ **kiểm soát chi phí**
* Phục vụ báo cáo **quản trị – tài chính – ngân sách**
* So sánh **Thực hiện (TH)** với **Kế hoạch (KH)**

---

## 3. Công thức tính (dạng bình thường)

`%HT_CPK = Chi phí khác thực hiện / Chi phí khác kế hoạch`

Trong đó:

* **Chi phí khác thực hiện (TH)**: Tổng chi phí khác phát sinh thực tế
* **Chi phí khác kế hoạch (KH)**: Tổng chi phí khác kế hoạch của **tháng 1 trong năm báo cáo**

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Chi phí khác kế hoạch (KH)

**Công thức:**

[
KH = \frac{\sum \text{Kế hoạch Chi phí khác (Tháng 1, cùng năm)}}{1.000}
]

**Giải thích nghiệp vụ:**

* Lấy **giá trị kế hoạch** của khoản mục **“Chi phí khác”**
* Chỉ lấy **tháng 1** của **năm đang xem báo cáo**
* Áp dụng cho **toàn bộ năm** (kế hoạch năm được chốt tại tháng 1)
* Chia **1.000** để **quy đổi đơn vị** (ví dụ: từ đồng sang nghìn đồng)

---

### 4.2. Chi phí khác thực hiện (TH)

**Công thức:**

[
TH = \sum \text{Chi phí khác thực tế phát sinh}
]

**Giải thích nghiệp vụ:**

* Lấy **giá trị thực tế (Value)** của khoản mục **“Chi phí khác”**
* Không giới hạn tháng → phụ thuộc vào **kỳ báo cáo đang xem**
* Phản ánh **chi phí thực tế đã phát sinh**

---

## 5. Công thức Excel tương đương (tham khảo)

```excel
%HT_CPK = Chi_phi_khac_thuc_hien / Chi_phi_khac_ke_hoach
```

Trong đó:

* `Chi_phi_khac_ke_hoach` = Tổng KH Chi phí khác tháng 1 / 1000
* `Chi_phi_khac_thuc_hien` = Tổng TH Chi phí khác

---

## 6. Logic nghiệp vụ (viết cho người không biết DAX)

> Ngân hàng lấy **chi phí khác kế hoạch được phê duyệt từ đầu năm (tháng 1)** làm chuẩn.
> Sau đó so sánh với **chi phí khác thực tế đã phát sinh** để tính tỷ lệ hoàn thành.

---

## 7. Lưu ý nghiệp vụ quan trọng

* ⚠️ Nếu **KH = 0** → chỉ tiêu không xác định (DAX đã xử lý bằng `DIVIDE`)
* ⚠️ KH luôn cố định theo **tháng 1**, không thay đổi theo filter tháng
* ⚠️ TH thay đổi theo **kỳ báo cáo** (tháng / quý / năm)
* ⚠️ Đảm bảo **Attribute = “Chi phí khác”** được chuẩn hóa dữ liệu

---

## 8. Tóm tắt ngắn gọn (đưa vào Data Dictionary)

> **%HT_CPK** phản ánh tỷ lệ giữa chi phí khác thực tế phát sinh so với chi phí khác kế hoạch năm (lấy tại tháng 1), dùng để đánh giá mức độ hoàn thành và kiểm soát chi phí.

---

Nếu bạn muốn, ở các công thức tiếp theo mình có thể:

* Chuẩn hóa **đúng 1 format duy nhất cho toàn bộ tài liệu**
* Gắn thêm **ví dụ số cụ thể**
* Hoặc viết theo **chuẩn ngân hàng (BIDV / Vietcombank / MB style)**

👉 **Gửi tiếp công thức DAX tiếp theo**, mình sẽ nối tiếp ngay trong cùng cấu trúc.

