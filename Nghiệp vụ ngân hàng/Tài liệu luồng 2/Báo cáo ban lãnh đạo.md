## 1. Tên chỉ tiêu

**%HT_CPK – Tỷ lệ hoàn thành Chi phí khác**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **%HT_CPK** dùng để đo lường **mức độ hoàn thành chi phí “Chi phí khác” thực tế so với kế hoạch** trong năm tài chính.

* Phản ánh mức độ **kiểm soát chi phí**
* Phục vụ báo cáo **quản trị – tài chính – ngân sách**
* So sánh giữa **Thực hiện (TH)** và **Kế hoạch (KH)**

---

## 3. Công thức tính

```
%HT_CPK = Chi phí khác thực hiện / Chi phí khác kế hoạch
```

Trong đó:

* **Chi phí khác thực hiện (TH)**: Tổng chi phí khác phát sinh thực tế trong kỳ báo cáo
* **Chi phí khác kế hoạch (KH)**: Tổng chi phí khác kế hoạch của **tháng 1 trong năm báo cáo**

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Chi phí khác kế hoạch (KH)

**Công thức:**

$$
KH = \frac{\sum \text{Kế hoạch Chi phí khác (tháng 1, cùng năm)}}{1.000}
$$

**Giải thích nghiệp vụ:**

* Lấy **giá trị kế hoạch** của khoản mục **“Chi phí khác”**
* Chỉ sử dụng số liệu của **tháng 1** trong **năm báo cáo**
* Kế hoạch tháng 1 được xem là **kế hoạch chuẩn cho toàn bộ năm**
* Chia cho **1.000** nhằm **quy đổi đơn vị** (ví dụ: từ đồng sang nghìn đồng)

---

### 4.2. Chi phí khác thực hiện (TH)

**Công thức:**

$$
TH = \sum \text{Chi phí khác thực tế phát sinh}
$$

**Giải thích nghiệp vụ:**

* Lấy **giá trị thực tế (Value)** của khoản mục **“Chi phí khác”**
* Không cố định theo tháng, phụ thuộc vào **kỳ báo cáo được chọn**
* Phản ánh **chi phí thực tế đã phát sinh** tại thời điểm báo cáo

---

## 5. Logic nghiệp vụ (diễn giải cho người không biết DAX)

> Ngân hàng sử dụng **chi phí khác kế hoạch được phê duyệt từ đầu năm (tháng 1)** làm cơ sở so sánh.
> Tỷ lệ hoàn thành được xác định bằng cách so sánh **chi phí khác thực tế phát sinh** với **kế hoạch năm**, nhằm đánh giá mức độ kiểm soát chi phí.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Trường hợp **KH = 0**, chỉ tiêu không xác định (đã được xử lý trong DAX bằng hàm `DIVIDE`)
* ⚠️ **KH cố định theo tháng 1**, không thay đổi theo bộ lọc thời gian
* ⚠️ **TH thay đổi theo kỳ báo cáo** (tháng / quý / năm)
* ⚠️ Cần đảm bảo dữ liệu **Attribute = “Chi phí khác”** được chuẩn hóa và nhất quán

---



