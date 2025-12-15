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

## 5. Logic nghiệp vụ 

> Ngân hàng sử dụng **chi phí khác kế hoạch được phê duyệt từ đầu năm (tháng 1)** làm cơ sở so sánh.
> Tỷ lệ hoàn thành được xác định bằng cách so sánh **chi phí khác thực tế phát sinh** với **kế hoạch năm**, nhằm đánh giá mức độ kiểm soát chi phí.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Trường hợp **KH = 0**, chỉ tiêu không xác định (đã được xử lý trong DAX bằng hàm `DIVIDE`)
* ⚠️ **KH cố định theo tháng 1**, không thay đổi theo bộ lọc thời gian
* ⚠️ **TH thay đổi theo kỳ báo cáo** (tháng / quý / năm)
* ⚠️ Cần đảm bảo dữ liệu **Attribute = “Chi phí khác”** được chuẩn hóa và nhất quán

---

---

## 1. Tên chỉ tiêu

**%HT_CPK_Còn lại cần TH – Tỷ lệ Chi phí khác còn lại cần thực hiện**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **%HT_CPK_Còn lại cần TH** dùng để xác định **phần tỷ lệ chi phí khác còn thiếu so với mục tiêu kế hoạch**, trong trường hợp mức độ hoàn thành hiện tại **chưa đạt mục tiêu**.

* Phản ánh **khoảng cách còn lại** so với kế hoạch
* Hỗ trợ theo dõi **tiến độ thực hiện chi phí**
* Phục vụ báo cáo **quản trị điều hành và kiểm soát ngân sách**

---

## 3. Công thức tính

```
%HT_CPK_Còn lại cần TH = Target – %HT_CPK
```

**Điều kiện áp dụng:**

* Chỉ tính khi `Target – %HT_CPK > 0`
* Nếu `%HT_CPK ≥ Target` thì **không hiển thị giá trị**

Trong đó:

* **Target**: Mục tiêu hoàn thành (giá trị chuẩn = 1, tương ứng 100%)
* **%HT_CPK**: Tỷ lệ hoàn thành Chi phí khác hiện tại

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Mục tiêu hoàn thành (Target)

**Giá trị:**

```
Target = 1
```

**Giải thích nghiệp vụ:**

* Target = 1 tương đương **100% kế hoạch**
* Được sử dụng làm **ngưỡng chuẩn** để đánh giá mức độ hoàn thành
* Giá trị cố định, không phụ thuộc kỳ báo cáo

---

### 4.2. Tỷ lệ hoàn thành Chi phí khác (%HT_CPK)

**Giải thích nghiệp vụ:**

* Là chỉ tiêu đã được tính toán trước đó
* Phản ánh **mức độ chi phí khác thực tế so với kế hoạch**
* Thay đổi theo **kỳ báo cáo** (tháng / quý / năm)

---

## 5. Logic nghiệp vụ 

> Ngân hàng đặt mục tiêu hoàn thành chi phí khác là **100% kế hoạch**.
> Nếu tại thời điểm báo cáo, tỷ lệ hoàn thành vẫn **chưa đạt 100%**, hệ thống sẽ tính toán phần **tỷ lệ còn thiếu cần thực hiện thêm**.
> Trường hợp đã đạt hoặc vượt mục tiêu, chỉ tiêu này **không hiển thị**.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Chỉ tiêu **chỉ có giá trị khi %HT_CPK < 100%**
* ⚠️ Khi **%HT_CPK ≥ Target**, hệ thống trả về **BLANK** (không hiển thị)
* ⚠️ Target được giả định **luôn bằng 1 (100%)**
* ⚠️ Chỉ tiêu mang tính **theo dõi tiến độ**, không phản ánh giá trị chi phí tuyệt đối

---
---

## 1. Tên chỉ tiêu

**%HT_CPNV – Tỷ lệ hoàn thành Chi phí nhân viên**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **%HT_CPNV** dùng để đo lường **mức độ hoàn thành chi phí nhân viên thực tế so với kế hoạch** trong năm tài chính.

* Phản ánh mức độ **kiểm soát chi phí nhân sự**
* Phục vụ báo cáo **quản trị – tài chính – ngân sách**
* So sánh giữa **Thực hiện (TH)** và **Kế hoạch (KH)**

---

## 3. Công thức tính

```
%HT_CPNV = Chi phí nhân viên thực hiện / Chi phí nhân viên kế hoạch
```

Trong đó:

* **Chi phí nhân viên thực hiện (TH)**: Tổng chi phí nhân viên phát sinh thực tế trong kỳ báo cáo
* **Chi phí nhân viên kế hoạch (KH)**: Tổng chi phí nhân viên kế hoạch của **tháng 1 trong năm báo cáo**

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Chi phí nhân viên kế hoạch (KH)

**Công thức:**

$$
KH = \frac{\sum \text{Kế hoạch Chi phí nhân viên (tháng 1, cùng năm)}}{1.000}
$$

**Giải thích nghiệp vụ:**

* Lấy **giá trị kế hoạch** của khoản mục **“Chi phí nhân viên”**
* Chỉ sử dụng số liệu của **tháng 1** trong **năm báo cáo**
* Kế hoạch tháng 1 được xem là **kế hoạch chuẩn cho toàn bộ năm**
* Chia cho **1.000** nhằm **quy đổi đơn vị** (ví dụ: từ đồng sang nghìn đồng)

---

### 4.2. Chi phí nhân viên thực hiện (TH)

**Công thức:**

$$
TH = \sum \text{Chi phí nhân viên thực tế phát sinh}
$$

**Giải thích nghiệp vụ:**

* Lấy **giá trị thực tế (Value)** của khoản mục **“Chi phí nhân viên”**
* Không cố định theo tháng, phụ thuộc vào **kỳ báo cáo được chọn**
* Phản ánh **chi phí nhân viên thực tế đã phát sinh** tại thời điểm báo cáo

---

## 5. Logic nghiệp vụ 

> Ngân hàng sử dụng **chi phí nhân viên kế hoạch được phê duyệt từ đầu năm (tháng 1)** làm cơ sở so sánh.
> Tỷ lệ hoàn thành được xác định bằng cách so sánh **chi phí nhân viên thực tế phát sinh** với **kế hoạch năm**, nhằm đánh giá mức độ kiểm soát và sử dụng chi phí nhân sự.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Trường hợp **KH = 0**, chỉ tiêu không xác định (đã được xử lý trong DAX bằng hàm `DIVIDE`)
* ⚠️ **KH cố định theo tháng 1**, không thay đổi theo bộ lọc thời gian
* ⚠️ **TH thay đổi theo kỳ báo cáo** (tháng / quý / năm)
* ⚠️ Cần đảm bảo dữ liệu **Attribute = “Chi phí nhân viên”** được chuẩn hóa và nhất quán

---
Dưới đây là **tài liệu hóa công thức DAX `%HT_CPNV_Còn lại cần TH`**, được viết **đúng theo form đã chốt**, trong đó **mục 5 chỉ để là “Logic nghiệp vụ”** như bạn yêu cầu.

---

## 1. Tên chỉ tiêu

**%HT_CPNV_Còn lại cần TH – Tỷ lệ Chi phí nhân viên còn lại cần thực hiện**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **%HT_CPNV_Còn lại cần TH** dùng để xác định **phần tỷ lệ chi phí nhân viên còn thiếu so với mục tiêu kế hoạch**, trong trường hợp mức độ hoàn thành hiện tại **chưa đạt mục tiêu**.

* Phản ánh **khoảng cách còn lại** so với kế hoạch
* Hỗ trợ theo dõi **tiến độ thực hiện chi phí nhân sự**
* Phục vụ báo cáo **quản trị điều hành và kiểm soát ngân sách**

---

## 3. Công thức tính

```
%HT_CPNV_Còn lại cần TH = Target – %HT_CPNV
```

**Điều kiện áp dụng:**

* Chỉ tính khi `Target – %HT_CPNV > 0`
* Nếu `%HT_CPNV ≥ Target` thì **không hiển thị giá trị**

Trong đó:

* **Target**: Mục tiêu hoàn thành (giá trị chuẩn = 1, tương ứng 100%)
* **%HT_CPNV**: Tỷ lệ hoàn thành Chi phí nhân viên hiện tại

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Mục tiêu hoàn thành (Target)

**Giá trị:**

```
Target = 1
```

**Giải thích nghiệp vụ:**

* Target = 1 tương đương **100% kế hoạch**
* Được sử dụng làm **ngưỡng chuẩn** để đánh giá mức độ hoàn thành
* Giá trị cố định, không phụ thuộc kỳ báo cáo

---

### 4.2. Tỷ lệ hoàn thành Chi phí nhân viên (%HT_CPNV)

**Giải thích nghiệp vụ:**

* Là chỉ tiêu đã được tính toán trước đó
* Phản ánh **mức độ chi phí nhân viên thực tế so với kế hoạch**
* Thay đổi theo **kỳ báo cáo** (tháng / quý / năm)

---

## 5. Logic nghiệp vụ

> Ngân hàng đặt mục tiêu hoàn thành chi phí nhân viên là **100% kế hoạch**.
> Nếu tại thời điểm báo cáo, tỷ lệ hoàn thành **chưa đạt mục tiêu**, hệ thống xác định **phần tỷ lệ còn lại cần thực hiện**.
> Trường hợp đã đạt hoặc vượt mục tiêu, chỉ tiêu này **không hiển thị**.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Chỉ tiêu **chỉ có giá trị khi %HT_CPNV < 100%**
* ⚠️ Khi **%HT_CPNV ≥ Target**, hệ thống trả về **BLANK** (không hiển thị)
* ⚠️ Target được giả định **luôn bằng 1 (100%)**
* ⚠️ Chỉ tiêu mang tính **theo dõi tiến độ**, không phản ánh giá trị chi phí tuyệt đối

---
---

## 1. Tên chỉ tiêu

**%HT_CPQL – Tỷ lệ hoàn thành Chi phí hoạt động quản lý và công cụ**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **%HT_CPQL** dùng để đo lường **mức độ hoàn thành chi phí hoạt động quản lý và công cụ thực tế so với kế hoạch** trong năm tài chính.

* Phản ánh mức độ **kiểm soát chi phí quản lý**
* Phục vụ báo cáo **quản trị – tài chính – ngân sách**
* So sánh giữa **Thực hiện (TH)** và **Kế hoạch (KH)**

---

## 3. Công thức tính

```
%HT_CPQL = Chi phí hoạt động quản lý và công cụ thực hiện / Chi phí hoạt động quản lý và công cụ kế hoạch
```

Trong đó:

* **Chi phí hoạt động quản lý và công cụ thực hiện (TH)**: Tổng chi phí hoạt động quản lý và công cụ phát sinh thực tế trong kỳ báo cáo
* **Chi phí hoạt động quản lý và công cụ kế hoạch (KH)**: Tổng chi phí hoạt động quản lý và công cụ kế hoạch của **tháng 1 trong năm báo cáo**

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Chi phí hoạt động quản lý và công cụ kế hoạch (KH)

**Công thức:**

$$
KH = \frac{\sum \text{Kế hoạch CP HĐ quản lý và công cụ (tháng 1, cùng năm)}}{1.000}
$$

**Giải thích nghiệp vụ:**

* Lấy **giá trị kế hoạch** của khoản mục **“CP HĐ QLy và công cụ”**
* Chỉ sử dụng số liệu của **tháng 1** trong **năm báo cáo**
* Kế hoạch tháng 1 được xem là **kế hoạch chuẩn cho toàn bộ năm**
* Chia cho **1.000** nhằm **quy đổi đơn vị** (ví dụ: từ đồng sang nghìn đồng)

---

### 4.2. Chi phí hoạt động quản lý và công cụ thực hiện (TH)

**Công thức:**

$$
TH = \sum \text{Chi phí hoạt động quản lý và công cụ thực tế phát sinh}
$$

**Giải thích nghiệp vụ:**

* Lấy **giá trị thực tế (Value)** của khoản mục **“CP HĐ QLy và công cụ”**
* Không cố định theo tháng, phụ thuộc vào **kỳ báo cáo được chọn**
* Phản ánh **chi phí hoạt động quản lý và công cụ thực tế đã phát sinh** tại thời điểm báo cáo

---

## 5. Logic nghiệp vụ

> Ngân hàng sử dụng **chi phí hoạt động quản lý và công cụ kế hoạch được phê duyệt từ đầu năm (tháng 1)** làm cơ sở so sánh.
> Tỷ lệ hoàn thành được xác định bằng cách so sánh **chi phí hoạt động quản lý và công cụ thực tế phát sinh** với **kế hoạch năm**, nhằm đánh giá mức độ kiểm soát và sử dụng chi phí quản lý.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Trường hợp **KH = 0**, chỉ tiêu không xác định (đã được xử lý trong DAX bằng hàm `DIVIDE`)
* ⚠️ **KH cố định theo tháng 1**, không thay đổi theo bộ lọc thời gian
* ⚠️ **TH thay đổi theo kỳ báo cáo** (tháng / quý / năm)
* ⚠️ Cần đảm bảo dữ liệu **Attribute = “CP HĐ QLy và công cụ”** được chuẩn hóa và nhất quán

---
---

## 1. Tên chỉ tiêu

**%HT_CPQL_Còn lại cần TH – Tỷ lệ Chi phí hoạt động quản lý và công cụ còn lại cần thực hiện**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **%HT_CPQL_Còn lại cần TH** dùng để xác định **phần tỷ lệ chi phí hoạt động quản lý và công cụ còn thiếu so với mục tiêu kế hoạch**, trong trường hợp mức độ hoàn thành hiện tại **chưa đạt mục tiêu**.

* Phản ánh **khoảng cách còn lại** so với kế hoạch
* Hỗ trợ theo dõi **tiến độ thực hiện chi phí quản lý**
* Phục vụ báo cáo **quản trị điều hành và kiểm soát ngân sách**

---

## 3. Công thức tính

```
%HT_CPQL_Còn lại cần TH = Target – %HT_CPQL
```

**Điều kiện áp dụng:**

* Chỉ tính khi `Target – %HT_CPQL > 0`
* Nếu `%HT_CPQL ≥ Target` thì **không hiển thị giá trị**

Trong đó:

* **Target**: Mục tiêu hoàn thành (giá trị chuẩn = 1, tương ứng 100%)
* **%HT_CPQL**: Tỷ lệ hoàn thành Chi phí hoạt động quản lý và công cụ hiện tại

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Mục tiêu hoàn thành (Target)

**Giá trị:**

```
Target = 1
```

**Giải thích nghiệp vụ:**

* Target = 1 tương đương **100% kế hoạch**
* Được sử dụng làm **ngưỡng chuẩn** để đánh giá mức độ hoàn thành
* Giá trị cố định, không phụ thuộc kỳ báo cáo

---

### 4.2. Tỷ lệ hoàn thành Chi phí hoạt động quản lý và công cụ (%HT_CPQL)

**Giải thích nghiệp vụ:**

* Là chỉ tiêu đã được tính toán trước đó
* Phản ánh **mức độ chi phí hoạt động quản lý và công cụ thực tế so với kế hoạch**
* Thay đổi theo **kỳ báo cáo** (tháng / quý / năm)

---

## 5. Logic nghiệp vụ

> Ngân hàng đặt mục tiêu hoàn thành chi phí hoạt động quản lý và công cụ là **100% kế hoạch**.
> Nếu tại thời điểm báo cáo, tỷ lệ hoàn thành **chưa đạt mục tiêu**, hệ thống xác định **phần tỷ lệ còn lại cần thực hiện**.
> Trường hợp đã đạt hoặc vượt mục tiêu, chỉ tiêu này **không hiển thị**.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Chỉ tiêu **chỉ có giá trị khi %HT_CPQL < 100%**
* ⚠️ Khi **%HT_CPQL ≥ Target**, hệ thống trả về **BLANK** (không hiển thị)
* ⚠️ Target được giả định **luôn bằng 1 (100%)**
* ⚠️ Chỉ tiêu mang tính **theo dõi tiến độ**, không phản ánh giá trị chi phí tuyệt đối

---
---

## 1. Tên chỉ tiêu

**%HT_CPTS – Tỷ lệ hoàn thành Chi về tài sản**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **%HT_CPTS** dùng để đo lường **mức độ hoàn thành chi về tài sản thực tế so với kế hoạch** trong năm tài chính.

* Phản ánh mức độ **kiểm soát chi phí đầu tư, mua sắm tài sản**
* Phục vụ báo cáo **quản trị – tài chính – ngân sách**
* So sánh giữa **Thực hiện (TH)** và **Kế hoạch (KH)**

---

## 3. Công thức tính

```
%HT_CPTS = Chi về tài sản thực hiện / Chi về tài sản kế hoạch
```

Trong đó:

* **Chi về tài sản thực hiện (TH)**: Tổng chi về tài sản phát sinh thực tế trong kỳ báo cáo
* **Chi về tài sản kế hoạch (KH)**: Tổng chi về tài sản kế hoạch của **tháng 1 trong năm báo cáo**

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Chi về tài sản kế hoạch (KH)

**Công thức:**

$$
KH = \frac{\sum \text{Kế hoạch Chi về tài sản (tháng 1, cùng năm)}}{1.000}
$$

**Giải thích nghiệp vụ:**

* Lấy **giá trị kế hoạch** của khoản mục **“Chi về tài sản”**
* Chỉ sử dụng số liệu của **tháng 1** trong **năm báo cáo**
* Kế hoạch tháng 1 được xem là **kế hoạch chuẩn cho toàn bộ năm**
* Chia cho **1.000** nhằm **quy đổi đơn vị** (ví dụ: từ đồng sang nghìn đồng)

---

### 4.2. Chi về tài sản thực hiện (TH)

**Công thức:**

$$
TH = \sum \text{Chi về tài sản thực tế phát sinh}
$$

**Giải thích nghiệp vụ:**

* Lấy **giá trị thực tế (Value)** của khoản mục **“Chi về tài sản”**
* Không cố định theo tháng, phụ thuộc vào **kỳ báo cáo được chọn**
* Phản ánh **chi phí đầu tư, mua sắm tài sản thực tế đã phát sinh** tại thời điểm báo cáo

---

## 5. Logic nghiệp vụ

> Ngân hàng sử dụng **chi về tài sản kế hoạch được phê duyệt từ đầu năm (tháng 1)** làm cơ sở so sánh.
> Tỷ lệ hoàn thành được xác định bằng cách so sánh **chi về tài sản thực tế phát sinh** với **kế hoạch năm**, nhằm đánh giá mức độ thực hiện và kiểm soát chi đầu tư tài sản.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Trường hợp **KH = 0**, chỉ tiêu không xác định (đã được xử lý trong DAX bằng hàm `DIVIDE`)
* ⚠️ **KH cố định theo tháng 1**, không thay đổi theo bộ lọc thời gian
* ⚠️ **TH thay đổi theo kỳ báo cáo** (tháng / quý / năm)
* ⚠️ Cần đảm bảo dữ liệu **Attribute = “Chi về tài sản”** được chuẩn hóa và nhất quán

---
---

## 1. Tên chỉ tiêu

**%HT_CPTS_Còn lại cần TH – Tỷ lệ Chi về tài sản còn lại cần thực hiện**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **%HT_CPTS_Còn lại cần TH** dùng để xác định **phần tỷ lệ chi về tài sản còn thiếu so với mục tiêu kế hoạch**, trong trường hợp mức độ hoàn thành hiện tại **chưa đạt mục tiêu**.

* Phản ánh **khoảng cách còn lại** so với kế hoạch
* Hỗ trợ theo dõi **tiến độ thực hiện chi đầu tư tài sản**
* Phục vụ báo cáo **quản trị điều hành và kiểm soát ngân sách**

---

## 3. Công thức tính

```
%HT_CPTS_Còn lại cần TH = Target – %HT_CPTS
```

**Điều kiện áp dụng:**

* Chỉ tính khi `Target – %HT_CPTS > 0`
* Nếu `%HT_CPTS ≥ Target` thì **không hiển thị giá trị**

Trong đó:

* **Target**: Mục tiêu hoàn thành (giá trị chuẩn = 1, tương ứng 100%)
* **%HT_CPTS**: Tỷ lệ hoàn thành Chi về tài sản hiện tại

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Mục tiêu hoàn thành (Target)

**Giá trị:**

```
Target = 1
```

**Giải thích nghiệp vụ:**

* Target = 1 tương đương **100% kế hoạch**
* Được sử dụng làm **ngưỡng chuẩn** để đánh giá mức độ hoàn thành
* Giá trị cố định, không phụ thuộc kỳ báo cáo

---

### 4.2. Tỷ lệ hoàn thành Chi về tài sản (%HT_CPTS)

**Giải thích nghiệp vụ:**

* Là chỉ tiêu đã được tính toán trước đó
* Phản ánh **mức độ chi về tài sản thực tế so với kế hoạch**
* Thay đổi theo **kỳ báo cáo** (tháng / quý / năm)

---

## 5. Logic nghiệp vụ

> Ngân hàng đặt mục tiêu hoàn thành chi về tài sản là **100% kế hoạch**.
> Nếu tại thời điểm báo cáo, tỷ lệ hoàn thành **chưa đạt mục tiêu**, hệ thống xác định **phần tỷ lệ còn lại cần thực hiện**.
> Trường hợp đã đạt hoặc vượt mục tiêu, chỉ tiêu này **không hiển thị**.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Chỉ tiêu **chỉ có giá trị khi %HT_CPTS < 100%**
* ⚠️ Khi **%HT_CPTS ≥ Target**, hệ thống trả về **BLANK** (không hiển thị)
* ⚠️ Target được giả định **luôn bằng 1 (100%)**
* ⚠️ Chỉ tiêu mang tính **theo dõi tiến độ**, không phản ánh giá trị chi phí tuyệt đối

---
---

## 1. Tên chỉ tiêu

**LN_CP % KH CPDP LK – Tỷ lệ Chi phí dự phòng rủi ro tín dụng lũy kế so với Kế hoạch**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **LN_CP % KH CPDP LK** dùng để đo lường **mức độ thực hiện chi phí dự phòng rủi ro tín dụng lũy kế so với kế hoạch năm**.

* Phản ánh mức độ **trích lập dự phòng rủi ro tín dụng**
* Phục vụ báo cáo **kết quả kinh doanh, quản trị rủi ro**
* So sánh giữa **Thực hiện lũy kế (TH)** và **Kế hoạch năm (KH)**

---

## 3. Công thức tính

```
LN_CP % KH CPDP LK = Chi phí dự phòng rủi ro tín dụng lũy kế / Chi phí dự phòng rủi ro tín dụng kế hoạch
```

Trong đó:

* **Chi phí dự phòng rủi ro tín dụng lũy kế (TH)**: Tổng chi phí dự phòng rủi ro tín dụng thực tế phát sinh lũy kế đến kỳ báo cáo
* **Chi phí dự phòng rủi ro tín dụng kế hoạch (KH)**: Tổng chi phí dự phòng rủi ro tín dụng kế hoạch năm (lấy tại tháng 1)

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Chi phí dự phòng rủi ro tín dụng kế hoạch (KH)

**Công thức:**

$$
KH = \sum \text{Kế hoạch Chi phí dự phòng rủi ro tín dụng (tháng 1, cùng năm)}
$$

**Giải thích nghiệp vụ:**

* Lấy **giá trị kế hoạch** của chỉ tiêu **“Chi phí dự phòng rủi ro tín dụng”**
* Chỉ sử dụng số liệu của **tháng 1** trong **năm báo cáo**
* Kế hoạch tháng 1 được xem là **kế hoạch chuẩn cho toàn bộ năm**
* Đơn vị tính theo **tỷ đồng** (theo dữ liệu kế hoạch)

---

### 4.2. Chi phí dự phòng rủi ro tín dụng lũy kế (TH)

**Công thức:**

$$
TH = \sum \text{Chi phí dự phòng rủi ro tín dụng thực tế phát sinh lũy kế}
$$

**Giải thích nghiệp vụ:**

* Lấy **giá trị thực tế (Value)** của khoản mục **“Chi phí dự phòng”**
* Tính **lũy kế đến kỳ báo cáo đang xem**
* Phản ánh mức độ **trích lập dự phòng rủi ro tín dụng thực tế** của ngân hàng

---

## 5. Logic nghiệp vụ

> Ngân hàng sử dụng **chi phí dự phòng rủi ro tín dụng kế hoạch năm (chốt tại tháng 1)** làm cơ sở so sánh.
> Chỉ tiêu thể hiện **tỷ lệ chi phí dự phòng rủi ro tín dụng đã trích lập lũy kế** so với **kế hoạch năm**, phục vụ đánh giá tiến độ và mức độ tuân thủ kế hoạch trích lập.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Trường hợp **KH = 0**, chỉ tiêu không xác định (đã được xử lý trong DAX bằng hàm `DIVIDE`)
* ⚠️ **KH cố định theo tháng 1**, không thay đổi theo bộ lọc thời gian
* ⚠️ **TH là giá trị lũy kế**, phụ thuộc vào kỳ báo cáo (tháng / quý / năm)
* ⚠️ Cần đảm bảo dữ liệu **Chỉ tiêu = “Chi phí dự phòng rủi ro tín dụng”** và **Attribute = “Chi phí dự phòng”** được chuẩn hóa và khớp nghĩa nghiệp vụ

---
---

## 1. Tên chỉ tiêu

**CPDP_Còn lại cần TH – Tỷ lệ Chi phí dự phòng rủi ro tín dụng còn lại cần thực hiện**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **CPDP_Còn lại cần TH** dùng để xác định **phần tỷ lệ chi phí dự phòng rủi ro tín dụng còn thiếu so với mục tiêu kế hoạch năm**, trong trường hợp mức độ thực hiện hiện tại **chưa đạt mục tiêu**.

* Phản ánh **khoảng cách còn lại** so với kế hoạch trích lập
* Hỗ trợ theo dõi **tiến độ trích lập dự phòng rủi ro tín dụng**
* Phục vụ báo cáo **quản trị rủi ro và điều hành tài chính**

---

## 3. Công thức tính

```
CPDP_Còn lại cần TH = Target – (LN_CP % KH CPDP LK)
```

**Điều kiện áp dụng:**

* Chỉ tính khi `Target – (LN_CP % KH CPDP LK) > 0`
* Nếu `LN_CP % KH CPDP LK ≥ Target` thì **không hiển thị giá trị**

Trong đó:

* **Target**: Mục tiêu hoàn thành (giá trị chuẩn = 1, tương ứng 100%)
* **LN_CP % KH CPDP LK**: Tỷ lệ chi phí dự phòng rủi ro tín dụng lũy kế so với kế hoạch

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Mục tiêu hoàn thành (Target)

**Giá trị:**

```
Target = 1
```

**Giải thích nghiệp vụ:**

* Target = 1 tương đương **100% kế hoạch trích lập dự phòng**
* Được sử dụng làm **ngưỡng chuẩn** để đánh giá mức độ hoàn thành
* Giá trị cố định, không phụ thuộc kỳ báo cáo

---

### 4.2. Tỷ lệ chi phí dự phòng rủi ro tín dụng lũy kế so với kế hoạch

(**LN_CP % KH CPDP LK**)

**Giải thích nghiệp vụ:**

* Là chỉ tiêu đã được tính toán trước đó
* Phản ánh **mức độ trích lập dự phòng rủi ro tín dụng lũy kế so với kế hoạch năm**
* Thay đổi theo **kỳ báo cáo** (tháng / quý / năm)

---

## 5. Logic nghiệp vụ

> Ngân hàng đặt mục tiêu trích lập **100% chi phí dự phòng rủi ro tín dụng theo kế hoạch năm**.
> Nếu tại thời điểm báo cáo, mức độ trích lập **chưa đạt mục tiêu**, hệ thống xác định **phần tỷ lệ còn lại cần tiếp tục trích lập**.
> Trường hợp đã đạt hoặc vượt kế hoạch, chỉ tiêu này **không hiển thị**.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Chỉ tiêu **chỉ có giá trị khi LN_CP % KH CPDP LK < 100%**
* ⚠️ Khi **LN_CP % KH CPDP LK ≥ Target**, hệ thống trả về **BLANK** (không hiển thị)
* ⚠️ Target được giả định **luôn bằng 1 (100%)**
* ⚠️ Chỉ tiêu mang tính **theo dõi tiến độ trích lập**, không phản ánh giá trị chi phí tuyệt đối

---
---

## 1. Tên chỉ tiêu

**LN_CP % KH CPHD LK – Tỷ lệ Chi phí hoạt động lũy kế so với Kế hoạch**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **LN_CP % KH CPHD LK** dùng để đo lường **mức độ thực hiện chi phí hoạt động lũy kế so với kế hoạch năm**.

* Phản ánh **tổng thể chi phí hoạt động** của ngân hàng
* Phục vụ báo cáo **kết quả kinh doanh, quản trị chi phí**
* So sánh giữa **Thực hiện lũy kế (TH)** và **Kế hoạch năm (KH)**

---

## 3. Công thức tính

```
LN_CP % KH CPHD LK = Chi phí hoạt động lũy kế thực hiện / Chi phí hoạt động kế hoạch
```

Trong đó:

* **Chi phí hoạt động lũy kế thực hiện (TH)**: Tổng chi phí hoạt động thực tế phát sinh lũy kế đến kỳ báo cáo
* **Chi phí hoạt động kế hoạch (KH)**: Tổng chi phí hoạt động kế hoạch năm (lấy tại tháng 1)

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Chi phí hoạt động kế hoạch (KH)

**Công thức:**

$$
KH = \sum \text{Kế hoạch Chi phí hoạt động (tháng 1, cùng năm)}
$$

**Giải thích nghiệp vụ:**

* Lấy **giá trị kế hoạch** của chỉ tiêu **“Chi phí hoạt động”**
* Chỉ sử dụng số liệu của **tháng 1** trong **năm báo cáo**
* Kế hoạch tháng 1 được xem là **kế hoạch chuẩn cho toàn bộ năm**
* Đơn vị tính theo **tỷ đồng** (theo dữ liệu kế hoạch)

---

### 4.2. Chi phí hoạt động lũy kế thực hiện (TH)

**Công thức:**

$$
TH = \sum \text{Chi phí hoạt động thực tế phát sinh lũy kế}
$$

**Giải thích nghiệp vụ:**

* Lấy **giá trị thực tế (Value)** từ các khoản mục cấu thành chi phí hoạt động, bao gồm:

  * Chi phí khác
  * Chi phí nhân viên
  * Chi về tài sản
  * Chi phí hoạt động quản lý và công cụ
* Tính **lũy kế đến kỳ báo cáo đang xem**
* Phản ánh **tổng chi phí hoạt động thực tế** của ngân hàng

---

## 5. Logic nghiệp vụ

> Ngân hàng sử dụng **chi phí hoạt động kế hoạch năm (chốt tại tháng 1)** làm cơ sở so sánh.
> Chỉ tiêu thể hiện **tỷ lệ chi phí hoạt động đã thực hiện lũy kế** so với **kế hoạch năm**, giúp đánh giá mức độ kiểm soát và sử dụng chi phí hoạt động trong năm tài chính.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Trường hợp **KH = 0**, chỉ tiêu không xác định (đã được xử lý trong DAX bằng hàm `DIVIDE`)
* ⚠️ **KH cố định theo tháng 1**, không thay đổi theo bộ lọc thời gian
* ⚠️ **TH là giá trị lũy kế**, phụ thuộc vào kỳ báo cáo (tháng / quý / năm)
* ⚠️ Cần đảm bảo dữ liệu:

  * **Chỉ tiêu = “Chi phí hoạt động”** (bảng KQKD)
  * **Attribute** thuộc nhóm chi phí hoạt động (bảng Data_LN_CP)
    được **chuẩn hóa và khớp nghĩa nghiệp vụ**

---
---

## 1. Tên chỉ tiêu

**CPDP_Còn lại cần TH – Tỷ lệ Chi phí dự phòng rủi ro tín dụng còn lại cần thực hiện**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **CPDP_Còn lại cần TH** dùng để xác định **phần tỷ lệ chi phí dự phòng rủi ro tín dụng còn thiếu so với mục tiêu kế hoạch năm**, trong trường hợp mức độ thực hiện hiện tại **chưa đạt mục tiêu**.

* Phản ánh **khoảng cách còn lại** so với kế hoạch trích lập
* Hỗ trợ theo dõi **tiến độ trích lập dự phòng rủi ro tín dụng**
* Phục vụ báo cáo **quản trị rủi ro và điều hành tài chính**

---

## 3. Công thức tính

```
CPDP_Còn lại cần TH = Target – (LN_CP % KH CPDP LK)
```

**Điều kiện áp dụng:**

* Chỉ tính khi `Target – (LN_CP % KH CPDP LK) > 0`
* Nếu `LN_CP % KH CPDP LK ≥ Target` thì **không hiển thị giá trị**

Trong đó:

* **Target**: Mục tiêu hoàn thành (giá trị chuẩn = 1, tương ứng 100%)
* **LN_CP % KH CPDP LK**: Tỷ lệ chi phí dự phòng rủi ro tín dụng lũy kế so với kế hoạch

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Mục tiêu hoàn thành (Target)

**Giá trị:**

```
Target = 1
```

**Giải thích nghiệp vụ:**

* Target = 1 tương đương **100% kế hoạch trích lập dự phòng**
* Được sử dụng làm **ngưỡng chuẩn** để đánh giá mức độ hoàn thành
* Giá trị cố định, không phụ thuộc kỳ báo cáo

---

### 4.2. Tỷ lệ chi phí dự phòng rủi ro tín dụng lũy kế so với kế hoạch

(**LN_CP % KH CPDP LK**)

**Giải thích nghiệp vụ:**

* Là chỉ tiêu đã được tính toán trước đó
* Phản ánh **mức độ trích lập dự phòng rủi ro tín dụng lũy kế so với kế hoạch năm**
* Thay đổi theo **kỳ báo cáo** (tháng / quý / năm)

---

## 5. Logic nghiệp vụ

> Ngân hàng đặt mục tiêu trích lập **100% chi phí dự phòng rủi ro tín dụng theo kế hoạch năm**.
> Nếu tại thời điểm báo cáo, mức độ trích lập **chưa đạt mục tiêu**, hệ thống xác định **phần tỷ lệ còn lại cần tiếp tục trích lập**.
> Trường hợp đã đạt hoặc vượt kế hoạch, chỉ tiêu này **không hiển thị**.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Chỉ tiêu **chỉ có giá trị khi LN_CP % KH CPDP LK < 100%**
* ⚠️ Khi **LN_CP % KH CPDP LK ≥ Target**, hệ thống trả về **BLANK** (không hiển thị)
* ⚠️ Target được giả định **luôn bằng 1 (100%)**
* ⚠️ Chỉ tiêu mang tính **theo dõi tiến độ trích lập**, không phản ánh giá trị chi phí tuyệt đối

---
---

## 1. Tên chỉ tiêu

**LN_CP % KH CPHD LK – Tỷ lệ Chi phí hoạt động lũy kế so với Kế hoạch**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **LN_CP % KH CPHD LK** dùng để đo lường **mức độ thực hiện chi phí hoạt động lũy kế so với kế hoạch năm**.

* Phản ánh **tổng thể chi phí hoạt động** của đơn vị/ngân hàng
* Phục vụ báo cáo **kết quả kinh doanh và quản trị chi phí**
* So sánh giữa **Thực hiện lũy kế (TH)** và **Kế hoạch năm (KH)**

---

## 3. Công thức tính

```
LN_CP % KH CPHD LK = Chi phí hoạt động lũy kế thực hiện / Chi phí hoạt động kế hoạch
```

Trong đó:

* **Chi phí hoạt động lũy kế thực hiện (TH)**: Tổng chi phí hoạt động thực tế phát sinh lũy kế đến kỳ báo cáo
* **Chi phí hoạt động kế hoạch (KH)**: Tổng chi phí hoạt động kế hoạch năm (lấy tại tháng 1)

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Chi phí hoạt động kế hoạch (KH)

**Công thức:**

$$
KH = \sum \text{Kế hoạch Chi phí hoạt động (tháng 1, cùng năm)}
$$

**Giải thích nghiệp vụ:**

* Lấy **giá trị kế hoạch** của chỉ tiêu **“Chi phí hoạt động”**
* Chỉ sử dụng số liệu của **tháng 1** trong **năm báo cáo**
* Kế hoạch tháng 1 được xem là **kế hoạch chuẩn cho toàn bộ năm**
* Đơn vị tính theo **tỷ đồng** (theo dữ liệu kế hoạch)

---

### 4.2. Chi phí hoạt động lũy kế thực hiện (TH)

**Công thức:**

$$
TH = \sum \text{Chi phí hoạt động thực tế phát sinh lũy kế}
$$

**Giải thích nghiệp vụ:**

* Lấy **giá trị thực tế (Value)** từ các khoản mục cấu thành chi phí hoạt động, bao gồm:

  * Chi phí khác
  * Chi phí nhân viên
  * Chi về tài sản
  * Chi phí hoạt động quản lý và công cụ
* Tính **lũy kế đến kỳ báo cáo đang xem**
* Phản ánh **tổng chi phí hoạt động thực tế** của đơn vị

---

## 5. Logic nghiệp vụ

> Ngân hàng sử dụng **chi phí hoạt động kế hoạch năm (chốt tại tháng 1)** làm cơ sở so sánh.
> Chỉ tiêu thể hiện **tỷ lệ chi phí hoạt động đã thực hiện lũy kế** so với **kế hoạch năm**, nhằm đánh giá mức độ kiểm soát và sử dụng chi phí hoạt động trong năm tài chính.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Trường hợp **KH = 0**, chỉ tiêu không xác định (đã được xử lý trong DAX bằng hàm `DIVIDE`)
* ⚠️ **KH cố định theo tháng 1**, không thay đổi theo bộ lọc thời gian
* ⚠️ **TH là giá trị lũy kế**, phụ thuộc vào kỳ báo cáo (tháng / quý / năm)
* ⚠️ Cần đảm bảo dữ liệu:

  * **Chỉ tiêu = “Chi phí hoạt động”** (bảng KQKD)
  * **Attribute** thuộc nhóm chi phí hoạt động (bảng Data_LN_CP)
    được **chuẩn hóa và thống nhất về ý nghĩa nghiệp vụ**

---
---

## 1. Tên chỉ tiêu

**CPHĐ_Còn lại cần TH – Tỷ lệ Chi phí hoạt động còn lại cần thực hiện**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **CPHĐ_Còn lại cần TH** dùng để xác định **phần tỷ lệ chi phí hoạt động còn thiếu so với mục tiêu kế hoạch năm**, trong trường hợp mức độ thực hiện hiện tại **chưa đạt mục tiêu**.

* Phản ánh **khoảng cách còn lại** so với kế hoạch chi phí hoạt động
* Hỗ trợ theo dõi **tiến độ thực hiện chi phí hoạt động**
* Phục vụ báo cáo **quản trị điều hành và kiểm soát ngân sách**

---

## 3. Công thức tính

```
CPHĐ_Còn lại cần TH = Target – (LN_CP % KH CPHD LK)
```

**Điều kiện áp dụng:**

* Chỉ tính khi `Target – (LN_CP % KH CPHD LK) > 0`
* Nếu `LN_CP % KH CPHD LK ≥ Target` thì **không hiển thị giá trị**

Trong đó:

* **Target**: Mục tiêu hoàn thành (giá trị chuẩn = 1, tương ứng 100%)
* **LN_CP % KH CPHD LK**: Tỷ lệ chi phí hoạt động lũy kế so với kế hoạch

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Mục tiêu hoàn thành (Target)

**Giá trị:**

```
Target = 1
```

**Giải thích nghiệp vụ:**

* Target = 1 tương đương **100% kế hoạch chi phí hoạt động**
* Được sử dụng làm **ngưỡng chuẩn** để đánh giá mức độ hoàn thành
* Giá trị cố định, không phụ thuộc kỳ báo cáo

---

### 4.2. Tỷ lệ chi phí hoạt động lũy kế so với kế hoạch

(**LN_CP % KH CPHD LK**)

**Giải thích nghiệp vụ:**

* Là chỉ tiêu đã được tính toán trước đó
* Phản ánh **mức độ chi phí hoạt động đã thực hiện lũy kế so với kế hoạch năm**
* Thay đổi theo **kỳ báo cáo** (tháng / quý / năm)

---

## 5. Logic nghiệp vụ

> Ngân hàng đặt mục tiêu thực hiện **100% chi phí hoạt động theo kế hoạch năm**.
> Nếu tại thời điểm báo cáo, mức độ thực hiện **chưa đạt mục tiêu**, hệ thống xác định **phần tỷ lệ chi phí hoạt động còn lại cần tiếp tục thực hiện**.
> Trường hợp đã đạt hoặc vượt kế hoạch, chỉ tiêu này **không hiển thị**.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Chỉ tiêu **chỉ có giá trị khi LN_CP % KH CPHD LK < 100%**
* ⚠️ Khi **LN_CP % KH CPHD LK ≥ Target**, hệ thống trả về **BLANK** (không hiển thị)
* ⚠️ Target được giả định **luôn bằng 1 (100%)**
* ⚠️ Chỉ tiêu mang tính **theo dõi tiến độ**, không phản ánh giá trị chi phí tuyệt đối

---
---

## 1. Tên chỉ tiêu

**KH_CP – Kế hoạch chi phí năm**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **KH_CP** dùng để xác định **tổng kế hoạch chi phí năm**, được sử dụng làm **cơ sở so sánh** cho các chỉ tiêu đánh giá mức độ thực hiện chi phí.

* Là **nền tảng kế hoạch** cho các chỉ tiêu %HT chi phí
* Phục vụ báo cáo **ngân sách – quản trị – tài chính**
* Không phụ thuộc vào kỳ báo cáo trong năm

---

## 3. Công thức tính

```
KH_CP = Tổng kế hoạch chi phí năm
```

Trong đó:

* **Kế hoạch chi phí năm** được lấy từ **kế hoạch tháng 1 của năm báo cáo**

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Kế hoạch chi phí năm (KH_CP)

**Công thức:**

$$
KH_CP = \frac{\sum \text{Kế hoạch chi phí (tháng 1, cùng năm)}}{1.000}
$$

**Giải thích nghiệp vụ:**

* Lấy **toàn bộ giá trị kế hoạch chi phí** từ bảng dữ liệu chi phí
* Chỉ sử dụng số liệu của **tháng 1** trong **năm báo cáo**
* Kế hoạch tháng 1 được xem là **kế hoạch chuẩn cho cả năm**
* Chia cho **1.000** để **quy đổi đơn vị** (ví dụ: từ đồng sang nghìn đồng)

---

## 5. Logic nghiệp vụ

> Ngân hàng xây dựng **kế hoạch chi phí năm ngay từ đầu năm (tháng 1)**.
> Giá trị kế hoạch này được sử dụng **xuyên suốt trong năm** làm cơ sở so sánh, đánh giá mức độ thực hiện và kiểm soát chi phí.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ **KH_CP cố định theo tháng 1**, không thay đổi theo bộ lọc thời gian
* ⚠️ Giá trị chỉ phản ánh **kế hoạch**, không phản ánh chi phí thực tế
* ⚠️ Đảm bảo dữ liệu **Kế hoạch chi phí** được cập nhật đầy đủ và chuẩn hóa
* ⚠️ Đơn vị đo lường cần được thống nhất khi so sánh với các chỉ tiêu thực hiện

---
---

## 1. Tên chỉ tiêu

**KH_CPDP – Kế hoạch Chi phí dự phòng rủi ro tín dụng năm**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **KH_CPDP** dùng để xác định **kế hoạch chi phí dự phòng rủi ro tín dụng của năm tài chính**, làm cơ sở so sánh và đánh giá mức độ trích lập dự phòng trong năm.

* Là **cơ sở kế hoạch** cho các chỉ tiêu % thực hiện CPDP
* Phục vụ báo cáo **kết quả kinh doanh và quản trị rủi ro**
* Được sử dụng xuyên suốt trong năm tài chính

---

## 3. Công thức tính

```
KH_CPDP = Tổng kế hoạch Chi phí dự phòng rủi ro tín dụng năm
```

Trong đó:

* **Kế hoạch Chi phí dự phòng rủi ro tín dụng năm** được lấy từ **kế hoạch tháng 1 của năm báo cáo**

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Kế hoạch Chi phí dự phòng rủi ro tín dụng năm (KH_CPDP)

**Công thức:**

$$
KH_CPDP = \sum \text{Kế hoạch Chi phí dự phòng rủi ro tín dụng (tháng 1, cùng năm)}
$$

**Giải thích nghiệp vụ:**

* Lấy **giá trị kế hoạch** của chỉ tiêu **“Chi phí dự phòng rủi ro tín dụng”**
* Chỉ sử dụng số liệu của **tháng 1** trong **năm báo cáo**
* Kế hoạch tháng 1 được xem là **kế hoạch chuẩn cho toàn bộ năm**
* Đơn vị tính theo **tỷ đồng** (theo dữ liệu kế hoạch KQKD)

---

## 5. Logic nghiệp vụ

> Ngân hàng xác định **kế hoạch trích lập chi phí dự phòng rủi ro tín dụng ngay từ đầu năm (tháng 1)**.
> Giá trị kế hoạch này được sử dụng làm **ngưỡng so sánh** để theo dõi, đánh giá mức độ trích lập dự phòng thực tế trong suốt năm tài chính.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ **KH_CPDP cố định theo tháng 1**, không thay đổi theo bộ lọc thời gian
* ⚠️ Chỉ tiêu phản ánh **kế hoạch**, không phản ánh chi phí dự phòng thực tế
* ⚠️ Đơn vị tính (**tỷ đồng**) cần được thống nhất khi so sánh với các chỉ tiêu thực hiện
* ⚠️ Cần đảm bảo dữ liệu **Chỉ tiêu = “Chi phí dự phòng rủi ro tín dụng”** trong bảng KQKD được chuẩn hóa và nhất quán

---
---

## 1. Tên chỉ tiêu

**KH_CPHĐ – Kế hoạch Chi phí hoạt động năm**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **KH_CPHĐ** dùng để xác định **kế hoạch chi phí hoạt động của năm tài chính**, làm cơ sở so sánh và đánh giá mức độ thực hiện chi phí hoạt động trong năm.

* Là **nền tảng kế hoạch** cho các chỉ tiêu % thực hiện chi phí hoạt động
* Phục vụ báo cáo **kết quả kinh doanh, quản trị chi phí**
* Được sử dụng xuyên suốt trong năm tài chính

---

## 3. Công thức tính

```
KH_CPHĐ = Tổng kế hoạch Chi phí hoạt động năm
```

Trong đó:

* **Kế hoạch Chi phí hoạt động năm** được lấy từ **kế hoạch tháng 1 của năm báo cáo**

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Kế hoạch Chi phí hoạt động năm (KH_CPHĐ)

**Công thức:**

$$
KH_CPHĐ = \sum \text{Kế hoạch Chi phí hoạt động (tháng 1, cùng năm)}
$$

**Giải thích nghiệp vụ:**

* Lấy **giá trị kế hoạch** của chỉ tiêu **“Chi phí hoạt động”** từ bảng KQKD
* Chỉ sử dụng số liệu của **tháng 1** trong **năm báo cáo**
* Kế hoạch tháng 1 được xem là **kế hoạch chuẩn cho toàn bộ năm**
* Đơn vị tính theo **tỷ đồng** (theo dữ liệu kế hoạch)

---

## 5. Logic nghiệp vụ

> Ngân hàng xây dựng **kế hoạch chi phí hoạt động ngay từ đầu năm (tháng 1)**.
> Giá trị kế hoạch này được sử dụng **xuyên suốt trong năm** làm cơ sở so sánh, theo dõi và đánh giá mức độ thực hiện chi phí hoạt động.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ **KH_CPHĐ cố định theo tháng 1**, không thay đổi theo bộ lọc thời gian
* ⚠️ Chỉ tiêu phản ánh **kế hoạch**, không phản ánh chi phí hoạt động thực tế
* ⚠️ Đơn vị tính (**tỷ đồng**) cần được thống nhất khi so sánh với các chỉ tiêu thực hiện
* ⚠️ Cần đảm bảo dữ liệu **Chỉ tiêu = “Chi phí hoạt động”** trong bảng KQKD được chuẩn hóa và nhất quán

---
---

## 1. Tên chỉ tiêu

**KH_CPK – Kế hoạch Chi phí khác năm**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **KH_CPK** dùng để xác định **kế hoạch Chi phí khác của năm tài chính**, làm cơ sở so sánh và đánh giá mức độ thực hiện Chi phí khác trong năm.

* Là **cơ sở kế hoạch** cho các chỉ tiêu % hoàn thành Chi phí khác
* Phục vụ báo cáo **quản trị – tài chính – ngân sách**
* Được sử dụng xuyên suốt trong năm tài chính

---

## 3. Công thức tính

```
KH_CPK = Tổng kế hoạch Chi phí khác năm
```

Trong đó:

* **Kế hoạch Chi phí khác năm** được lấy từ **kế hoạch tháng 1 của năm báo cáo**

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Kế hoạch Chi phí khác năm (KH_CPK)

**Công thức:**

$$
KH_CPK = \sum \text{Kế hoạch Chi phí khác (tháng 1, cùng năm)}
$$

**Giải thích nghiệp vụ:**

* Lấy **giá trị kế hoạch** của chỉ tiêu **“Chi phí khác”** từ bảng **KH_CP**
* Chỉ sử dụng số liệu của **tháng 1** trong **năm báo cáo**
* Kế hoạch tháng 1 được xem là **kế hoạch chuẩn cho toàn bộ năm**
* Phản ánh **tổng ngân sách Chi phí khác được phê duyệt**

---

## 5. Logic nghiệp vụ

> Ngân hàng xác định **kế hoạch Chi phí khác ngay từ đầu năm (tháng 1)**.
> Giá trị kế hoạch này được sử dụng **xuyên suốt trong năm** làm căn cứ so sánh, theo dõi và đánh giá mức độ thực hiện Chi phí khác.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ **KH_CPK cố định theo tháng 1**, không thay đổi theo bộ lọc thời gian
* ⚠️ Chỉ tiêu phản ánh **kế hoạch**, không phản ánh Chi phí khác thực tế
* ⚠️ Cần đảm bảo dữ liệu **Chỉ tiêu = “Chi phí khác”** trong bảng **KH_CP** được chuẩn hóa
* ⚠️ Đơn vị tính của kế hoạch cần được thống nhất khi so sánh với các chỉ tiêu thực hiện

---
---

## 1. Tên chỉ tiêu

**KH_LNTT – Kế hoạch Lợi nhuận trước thuế năm**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **KH_LNTT** dùng để xác định **kế hoạch Lợi nhuận trước thuế (LNTT) của năm tài chính**, làm cơ sở so sánh và đánh giá mức độ hoàn thành kết quả kinh doanh trong năm.

* Là **chỉ tiêu mục tiêu cốt lõi** trong kế hoạch kinh doanh
* Phục vụ báo cáo **điều hành, quản trị và đánh giá hiệu quả hoạt động**
* Được sử dụng xuyên suốt trong năm tài chính

---

## 3. Công thức tính

```
KH_LNTT = Tổng kế hoạch Lợi nhuận trước thuế năm
```

Trong đó:

* **Kế hoạch Lợi nhuận trước thuế năm** được lấy từ **kế hoạch tháng 1 của năm báo cáo**

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Kế hoạch Lợi nhuận trước thuế năm (KH_LNTT)

**Công thức:**

$$
KH_LNTT = \sum \text{Kế hoạch Lợi nhuận trước thuế (tháng 1, cùng năm)}
$$

**Giải thích nghiệp vụ:**

* Lấy **giá trị kế hoạch** của chỉ tiêu **“Tổng lợi nhuận trước thuế”** từ bảng **KQKD**
* Chỉ sử dụng số liệu của **tháng 1** trong **năm báo cáo**
* Kế hoạch tháng 1 được xem là **kế hoạch chuẩn cho toàn bộ năm**
* Đơn vị tính theo **tỷ đồng** (theo dữ liệu kế hoạch)

---

## 5. Logic nghiệp vụ

> Ngân hàng xây dựng **kế hoạch lợi nhuận trước thuế ngay từ đầu năm (tháng 1)**.
> Giá trị kế hoạch này được sử dụng **xuyên suốt trong năm** làm mục tiêu điều hành, đồng thời là cơ sở so sánh để đánh giá mức độ hoàn thành kết quả kinh doanh.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ **KH_LNTT cố định theo tháng 1**, không thay đổi theo bộ lọc thời gian
* ⚠️ Chỉ tiêu phản ánh **kế hoạch**, không phản ánh lợi nhuận thực tế
* ⚠️ Đơn vị tính (**tỷ đồng**) cần được thống nhất khi so sánh với các chỉ tiêu thực hiện
* ⚠️ Cần đảm bảo dữ liệu **Chỉ tiêu = “Tổng lợi nhuận trước thuế”** trong bảng **KQKD** được chuẩn hóa và nhất quán

---
---

## 1. Tên chỉ tiêu

**KH_TNLT – Kế hoạch Thu nhập lãi thuần năm**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **KH_TNLT** dùng để xác định **kế hoạch Thu nhập lãi thuần (TNLT) của năm tài chính**, làm cơ sở so sánh và đánh giá mức độ hoàn thành hoạt động kinh doanh cốt lõi của ngân hàng.

* Là **chỉ tiêu trọng yếu** phản ánh hiệu quả hoạt động tín dụng và huy động vốn
* Phục vụ báo cáo **điều hành, quản trị và kết quả kinh doanh**
* Được sử dụng xuyên suốt trong năm tài chính

---

## 3. Công thức tính

```
KH_TNLT = Tổng kế hoạch Thu nhập lãi thuần năm
```

Trong đó:

* **Kế hoạch Thu nhập lãi thuần năm** được lấy từ **kế hoạch tháng 1 của năm báo cáo**

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Kế hoạch Thu nhập lãi thuần năm (KH_TNLT)

**Công thức:**

$$
KH_TNLT = \sum \text{Kế hoạch Thu nhập lãi thuần (tháng 1, cùng năm)}
$$

**Giải thích nghiệp vụ:**

* Lấy **giá trị kế hoạch** của chỉ tiêu **“Thu nhập lãi thuần”** từ bảng **KQKD**
* Chỉ sử dụng số liệu của **tháng 1** trong **năm báo cáo**
* Kế hoạch tháng 1 được xem là **kế hoạch chuẩn cho toàn bộ năm**
* Đơn vị tính theo **tỷ đồng** (theo dữ liệu kế hoạch)

---

## 5. Logic nghiệp vụ

> Ngân hàng xây dựng **kế hoạch Thu nhập lãi thuần ngay từ đầu năm (tháng 1)**.
> Giá trị kế hoạch này được sử dụng **xuyên suốt trong năm** làm mục tiêu điều hành và là cơ sở so sánh để đánh giá mức độ hoàn thành hoạt động kinh doanh cốt lõi.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ **KH_TNLT cố định theo tháng 1**, không thay đổi theo bộ lọc thời gian
* ⚠️ Chỉ tiêu phản ánh **kế hoạch**, không phản ánh Thu nhập lãi thuần thực tế
* ⚠️ Đơn vị tính (**tỷ đồng**) cần được thống nhất khi so sánh với các chỉ tiêu thực hiện
* ⚠️ Cần đảm bảo dữ liệu **Chỉ tiêu = “Thu nhập lãi thuần”** trong bảng **KQKD** được chuẩn hóa và nhất quán

---
---

## 1. Tên chỉ tiêu

**KH_TNTDV – Kế hoạch Thu nhập từ hoạt động dịch vụ năm**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **KH_TNTDV** dùng để xác định **kế hoạch Thu nhập từ hoạt động dịch vụ của năm tài chính**, làm cơ sở so sánh và đánh giá mức độ hoàn thành các nguồn thu ngoài lãi của ngân hàng.

* Phản ánh **mục tiêu phát triển thu nhập dịch vụ**
* Phục vụ báo cáo **điều hành, quản trị và kết quả kinh doanh**
* Được sử dụng xuyên suốt trong năm tài chính

---

## 3. Công thức tính

```
KH_TNTDV = Tổng kế hoạch Thu nhập từ hoạt động dịch vụ năm
```

Trong đó:

* **Kế hoạch Thu nhập từ hoạt động dịch vụ năm** được lấy từ **kế hoạch tháng 1 của năm báo cáo**

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Kế hoạch Thu nhập từ hoạt động dịch vụ năm (KH_TNTDV)

**Công thức:**

$$
KH_TNTDV = \sum \text{Kế hoạch Thu nhập từ hoạt động dịch vụ (tháng 1, cùng năm)}
$$

**Giải thích nghiệp vụ:**

* Lấy **giá trị kế hoạch** của chỉ tiêu **“Thu nhập từ hoạt động dịch vụ”** từ bảng **KQKD**
* Chỉ sử dụng số liệu của **tháng 1** trong **năm báo cáo**
* Kế hoạch tháng 1 được xem là **kế hoạch chuẩn cho toàn bộ năm**
* Đơn vị tính theo **tỷ đồng** (theo dữ liệu kế hoạch)

---

## 5. Logic nghiệp vụ

> Ngân hàng xây dựng **kế hoạch Thu nhập từ hoạt động dịch vụ ngay từ đầu năm (tháng 1)**.
> Giá trị kế hoạch này được sử dụng **xuyên suốt trong năm** làm mục tiêu điều hành và là cơ sở so sánh để đánh giá mức độ phát triển thu nhập dịch vụ.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ **KH_TNTDV cố định theo tháng 1**, không thay đổi theo bộ lọc thời gian
* ⚠️ Chỉ tiêu phản ánh **kế hoạch**, không phản ánh Thu nhập từ hoạt động dịch vụ thực tế
* ⚠️ Đơn vị tính (**tỷ đồng**) cần được thống nhất khi so sánh với các chỉ tiêu thực hiện
* ⚠️ Cần đảm bảo dữ liệu **Chỉ tiêu = “Thu nhập từ hoạt động dịch vụ”** trong bảng **KQKD** được chuẩn hóa và nhất quán

---
---

## 1. Tên chỉ tiêu

**KH_TTK – Kế hoạch Lãi/Lỗ thuần từ hoạt động khác năm**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **KH_TTK** dùng để xác định **kế hoạch lãi/lỗ thuần từ hoạt động khác của năm tài chính**, làm cơ sở so sánh và đánh giá mức độ thực hiện các nguồn thu, chi ngoài hoạt động kinh doanh cốt lõi.

* Phản ánh **mục tiêu thu nhập ngoài lãi và ngoài dịch vụ**
* Phục vụ báo cáo **kết quả kinh doanh và điều hành**
* Được sử dụng xuyên suốt trong năm tài chính

---

## 3. Công thức tính

```
KH_TTK = Tổng kế hoạch Lãi/Lỗ thuần từ hoạt động khác năm
```

Trong đó:

* **Kế hoạch Lãi/Lỗ thuần từ hoạt động khác năm** được lấy từ **kế hoạch tháng 1 của năm báo cáo**

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Kế hoạch Lãi/Lỗ thuần từ hoạt động khác năm (KH_TTK)

**Công thức:**

$$
KH_TTK = \sum \text{Kế hoạch Lãi/Lỗ thuần từ hoạt động khác (tháng 1, cùng năm)}
$$

**Giải thích nghiệp vụ:**

* Lấy **giá trị kế hoạch** của chỉ tiêu **“Lãi/lỗ thuần từ hoạt động khác”** từ bảng **KQKD**
* Chỉ sử dụng số liệu của **tháng 1** trong **năm báo cáo**
* Kế hoạch tháng 1 được xem là **kế hoạch chuẩn cho toàn bộ năm**
* Đơn vị tính theo **tỷ đồng** (theo dữ liệu kế hoạch)

---

## 5. Logic nghiệp vụ

> Ngân hàng xây dựng **kế hoạch lãi/lỗ thuần từ hoạt động khác ngay từ đầu năm (tháng 1)**.
> Giá trị kế hoạch này được sử dụng **xuyên suốt trong năm** làm mục tiêu điều hành và là cơ sở so sánh để đánh giá mức độ đóng góp của các hoạt động ngoài kinh doanh cốt lõi.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ **KH_TTK cố định theo tháng 1**, không thay đổi theo bộ lọc thời gian
* ⚠️ Chỉ tiêu phản ánh **kế hoạch**, không phản ánh lãi/lỗ thực tế từ hoạt động khác
* ⚠️ Đơn vị tính (**tỷ đồng**) cần được thống nhất khi so sánh với các chỉ tiêu thực hiện
* ⚠️ Cần đảm bảo dữ liệu **Chỉ tiêu = “Lãi/lỗ thuần từ hoạt động khác”** trong bảng **KQKD** được chuẩn hóa và nhất quán

---
---

## 1. Tên chỉ tiêu

**LN_CP % KH LNTT LK – Tỷ lệ Lợi nhuận trước thuế lũy kế so với Kế hoạch**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **LN_CP % KH LNTT LK** dùng để đo lường **mức độ thực hiện lợi nhuận trước thuế (LNTT) lũy kế so với kế hoạch năm**.

* Phản ánh **kết quả kinh doanh tổng thể** của đơn vị/ngân hàng
* Phục vụ báo cáo **điều hành, quản trị và đánh giá hiệu quả**
* So sánh giữa **Thực hiện lũy kế (TH)** và **Kế hoạch năm (KH)**

---

## 3. Công thức tính

```
LN_CP % KH LNTT LK = Lợi nhuận trước thuế lũy kế thực hiện / Lợi nhuận trước thuế kế hoạch
```

Trong đó:

* **Lợi nhuận trước thuế lũy kế thực hiện (TH)**: Tổng lợi nhuận trước thuế thực tế phát sinh lũy kế đến kỳ báo cáo
* **Lợi nhuận trước thuế kế hoạch (KH)**: Tổng lợi nhuận trước thuế kế hoạch năm (lấy tại tháng 1)

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Lợi nhuận trước thuế kế hoạch (KH)

**Công thức:**

$$
KH = \sum \text{Kế hoạch Lợi nhuận trước thuế (tháng 1, cùng năm)}
$$

**Giải thích nghiệp vụ:**

* Lấy **giá trị kế hoạch** của chỉ tiêu **“Tổng lợi nhuận trước thuế”** từ bảng **KQKD**
* Chỉ sử dụng số liệu của **tháng 1** trong **năm báo cáo**
* Kế hoạch tháng 1 được xem là **kế hoạch chuẩn cho toàn bộ năm**
* Đơn vị tính theo **tỷ đồng** (theo dữ liệu kế hoạch)

---

### 4.2. Lợi nhuận trước thuế lũy kế thực hiện (TH)

**Công thức:**

$$
TH = \sum \text{Lợi nhuận trước thuế thực tế phát sinh lũy kế}
$$

**Giải thích nghiệp vụ:**

* Lấy **giá trị thực tế (Value)** của khoản mục **“LNTT”** từ bảng **Data_LN_CP**
* Tính **lũy kế đến kỳ báo cáo đang xem**
* Phản ánh **kết quả lợi nhuận trước thuế thực tế** của đơn vị tại thời điểm báo cáo

---

## 5. Logic nghiệp vụ

> Ngân hàng sử dụng **kế hoạch lợi nhuận trước thuế năm (chốt tại tháng 1)** làm mục tiêu điều hành.
> Chỉ tiêu thể hiện **tỷ lệ lợi nhuận trước thuế đã thực hiện lũy kế** so với **kế hoạch năm**, qua đó đánh giá mức độ hoàn thành kết quả kinh doanh trong năm tài chính.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Trường hợp **KH = 0**, chỉ tiêu không xác định (đã được xử lý trong DAX bằng hàm `DIVIDE`)
* ⚠️ **KH cố định theo tháng 1**, không thay đổi theo bộ lọc thời gian
* ⚠️ **TH là giá trị lũy kế**, phụ thuộc vào kỳ báo cáo (tháng / quý / năm)
* ⚠️ Cần đảm bảo dữ liệu **Chỉ tiêu = “Tổng lợi nhuận trước thuế”** (KQKD) và **Attribute = “LNTT”** (Data_LN_CP) được chuẩn hóa và thống nhất về ý nghĩa nghiệp vụ

---
---

## 1. Tên chỉ tiêu

**LNTT_Còn lại cần TH – Tỷ lệ Lợi nhuận trước thuế còn lại cần thực hiện**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **LNTT_Còn lại cần TH** dùng để xác định **phần tỷ lệ lợi nhuận trước thuế còn thiếu so với mục tiêu kế hoạch năm**, trong trường hợp mức độ thực hiện hiện tại **chưa đạt mục tiêu**.

* Phản ánh **khoảng cách còn lại** để đạt kế hoạch lợi nhuận
* Hỗ trợ theo dõi **tiến độ thực hiện lợi nhuận trước thuế**
* Phục vụ báo cáo **điều hành và đánh giá kết quả kinh doanh**

---

## 3. Công thức tính

```
LNTT_Còn lại cần TH = Target – (LN_CP % KH LNTT LK)
```

**Điều kiện áp dụng:**

* Chỉ tính khi `Target – (LN_CP % KH LNTT LK) > 0`
* Nếu `LN_CP % KH LNTT LK ≥ Target` thì **không hiển thị giá trị**

Trong đó:

* **Target**: Mục tiêu hoàn thành (giá trị chuẩn = 1, tương ứng 100%)
* **LN_CP % KH LNTT LK**: Tỷ lệ lợi nhuận trước thuế lũy kế so với kế hoạch

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Mục tiêu hoàn thành (Target)

**Giá trị:**

```
Target = 1
```

**Giải thích nghiệp vụ:**

* Target = 1 tương đương **100% kế hoạch lợi nhuận trước thuế**
* Được sử dụng làm **ngưỡng chuẩn** để đánh giá mức độ hoàn thành
* Giá trị cố định, không phụ thuộc kỳ báo cáo

---

### 4.2. Tỷ lệ lợi nhuận trước thuế lũy kế so với kế hoạch

(**LN_CP % KH LNTT LK**)

**Giải thích nghiệp vụ:**

* Là chỉ tiêu đã được tính toán trước đó
* Phản ánh **mức độ thực hiện lợi nhuận trước thuế lũy kế so với kế hoạch năm**
* Thay đổi theo **kỳ báo cáo** (tháng / quý / năm)

---

## 5. Logic nghiệp vụ

> Ngân hàng đặt mục tiêu đạt **100% lợi nhuận trước thuế theo kế hoạch năm**.
> Nếu tại thời điểm báo cáo, mức độ thực hiện **chưa đạt mục tiêu**, hệ thống xác định **phần tỷ lệ lợi nhuận còn lại cần tiếp tục thực hiện**.
> Trường hợp đã đạt hoặc vượt kế hoạch, chỉ tiêu này **không hiển thị**.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Chỉ tiêu **chỉ có giá trị khi LN_CP % KH LNTT LK < 100%**
* ⚠️ Khi **LN_CP % KH LNTT LK ≥ Target**, hệ thống trả về **BLANK** (không hiển thị)
* ⚠️ Target được giả định **luôn bằng 1 (100%)**
* ⚠️ Chỉ tiêu mang tính **theo dõi tiến độ**, không phản ánh giá trị lợi nhuận tuyệt đối

---
---

## 1. Tên chỉ tiêu

**LN_CP % KH TNLT LK – Tỷ lệ Thu nhập lãi thuần lũy kế so với Kế hoạch**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **LN_CP % KH TNLT LK** dùng để đo lường **mức độ thực hiện Thu nhập lãi thuần (TNLT) lũy kế so với kế hoạch năm**.

* Phản ánh **kết quả hoạt động kinh doanh cốt lõi** của ngân hàng
* Phục vụ báo cáo **điều hành, quản trị và đánh giá hiệu quả sinh lời**
* So sánh giữa **Thực hiện lũy kế (TH)** và **Kế hoạch năm (KH)**

---

## 3. Công thức tính

```
LN_CP % KH TNLT LK = Thu nhập lãi thuần lũy kế thực hiện / Thu nhập lãi thuần kế hoạch
```

Trong đó:

* **Thu nhập lãi thuần lũy kế thực hiện (TH)**: Tổng thu nhập lãi thuần thực tế phát sinh lũy kế đến kỳ báo cáo
* **Thu nhập lãi thuần kế hoạch (KH)**: Tổng thu nhập lãi thuần kế hoạch năm (lấy tại tháng 1)

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Thu nhập lãi thuần kế hoạch (KH)

**Công thức:**

$$
KH = \sum \text{Kế hoạch Thu nhập lãi thuần (tháng 1, cùng năm)}
$$

**Giải thích nghiệp vụ:**

* Lấy **giá trị kế hoạch** của chỉ tiêu **“Thu nhập lãi thuần”** từ bảng **KQKD**
* Chỉ sử dụng số liệu của **tháng 1** trong **năm báo cáo**
* Kế hoạch tháng 1 được xem là **kế hoạch chuẩn cho toàn bộ năm**
* Đơn vị tính theo **tỷ đồng** (theo dữ liệu kế hoạch)

---

### 4.2. Thu nhập lãi thuần lũy kế thực hiện (TH)

**Công thức:**

$$
TH = \sum \text{Thu nhập lãi thuần thực tế phát sinh lũy kế}
$$

**Giải thích nghiệp vụ:**

* Lấy **giá trị thực tế (Value)** của khoản mục **“Thu nhập lãi thuần”** từ bảng **Data_LN_CP**
* Tính **lũy kế đến kỳ báo cáo đang xem**
* Phản ánh **thu nhập lãi thuần thực tế** của ngân hàng tại thời điểm báo cáo

---

## 5. Logic nghiệp vụ

> Ngân hàng sử dụng **kế hoạch Thu nhập lãi thuần năm (chốt tại tháng 1)** làm mục tiêu điều hành.
> Chỉ tiêu thể hiện **tỷ lệ Thu nhập lãi thuần đã thực hiện lũy kế** so với **kế hoạch năm**, qua đó đánh giá hiệu quả hoạt động kinh doanh cốt lõi trong năm tài chính.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Trường hợp **KH = 0**, chỉ tiêu không xác định (đã được xử lý trong DAX bằng hàm `DIVIDE`)
* ⚠️ **KH cố định theo tháng 1**, không thay đổi theo bộ lọc thời gian
* ⚠️ **TH là giá trị lũy kế**, phụ thuộc vào kỳ báo cáo (tháng / quý / năm)
* ⚠️ Cần đảm bảo dữ liệu **Chỉ tiêu = “Thu nhập lãi thuần”** (KQKD) và **Attribute = “Thu nhập lãi thuần”** (Data_LN_CP) được chuẩn hóa và thống nhất về ý nghĩa nghiệp vụ

---
---

## 1. Tên chỉ tiêu

**TNLT_Còn lại cần TH – Tỷ lệ Thu nhập lãi thuần còn lại cần thực hiện**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **TNLT_Còn lại cần TH** dùng để xác định **phần tỷ lệ Thu nhập lãi thuần còn thiếu so với mục tiêu kế hoạch năm**, trong trường hợp mức độ thực hiện hiện tại **chưa đạt mục tiêu**.

* Phản ánh **khoảng cách còn lại** để đạt kế hoạch Thu nhập lãi thuần
* Hỗ trợ theo dõi **tiến độ thực hiện Thu nhập lãi thuần**
* Phục vụ báo cáo **điều hành và đánh giá hiệu quả kinh doanh**

---

## 3. Công thức tính

```
TNLT_Còn lại cần TH = Target – (LN_CP % KH TNLT LK)
```

**Điều kiện áp dụng:**

* Chỉ tính khi `Target – (LN_CP % KH TNLT LK) > 0`
* Nếu `LN_CP % KH TNLT LK ≥ Target` thì **không hiển thị giá trị**

Trong đó:

* **Target**: Mục tiêu hoàn thành (giá trị chuẩn = 1, tương ứng 100%)
* **LN_CP % KH TNLT LK**: Tỷ lệ Thu nhập lãi thuần lũy kế so với kế hoạch

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Mục tiêu hoàn thành (Target)

**Giá trị:**

```
Target = 1
```

**Giải thích nghiệp vụ:**

* Target = 1 tương đương **100% kế hoạch Thu nhập lãi thuần**
* Được sử dụng làm **ngưỡng chuẩn** để đánh giá mức độ hoàn thành
* Giá trị cố định, không phụ thuộc kỳ báo cáo

---

### 4.2. Tỷ lệ Thu nhập lãi thuần lũy kế so với kế hoạch

(**LN_CP % KH TNLT LK**)

**Giải thích nghiệp vụ:**

* Là chỉ tiêu đã được tính toán trước đó
* Phản ánh **mức độ thực hiện Thu nhập lãi thuần lũy kế so với kế hoạch năm**
* Thay đổi theo **kỳ báo cáo** (tháng / quý / năm)

---

## 5. Logic nghiệp vụ

> Ngân hàng đặt mục tiêu đạt **100% Thu nhập lãi thuần theo kế hoạch năm**.
> Nếu tại thời điểm báo cáo, mức độ thực hiện **chưa đạt mục tiêu**, hệ thống xác định **phần tỷ lệ Thu nhập lãi thuần còn lại cần tiếp tục thực hiện**.
> Trường hợp đã đạt hoặc vượt kế hoạch, chỉ tiêu này **không hiển thị**.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Chỉ tiêu **chỉ có giá trị khi LN_CP % KH TNLT LK < 100%**
* ⚠️ Khi **LN_CP % KH TNLT LK ≥ Target**, hệ thống trả về **BLANK** (không hiển thị)
* ⚠️ Target được giả định **luôn bằng 1 (100%)**
* ⚠️ Chỉ tiêu mang tính **theo dõi tiến độ**, không phản ánh giá trị Thu nhập lãi thuần tuyệt đối

---
---

## 1. Tên chỉ tiêu

**LN_CP % KH TNDV LK – Tỷ lệ Thu nhập từ hoạt động dịch vụ lũy kế so với Kế hoạch**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **LN_CP % KH TNDV LK** dùng để đo lường **mức độ thực hiện Thu nhập từ hoạt động dịch vụ (TNDV) lũy kế so với kế hoạch năm**.

* Phản ánh **kết quả phát triển nguồn thu dịch vụ**
* Phục vụ báo cáo **điều hành, quản trị và đánh giá hiệu quả đa dạng hóa thu nhập**
* So sánh giữa **Thực hiện lũy kế (TH)** và **Kế hoạch năm (KH)**

---

## 3. Công thức tính

```
LN_CP % KH TNDV LK = Thu nhập từ hoạt động dịch vụ lũy kế thực hiện / Thu nhập từ hoạt động dịch vụ kế hoạch
```

Trong đó:

* **Thu nhập từ hoạt động dịch vụ lũy kế thực hiện (TH)**: Tổng thu nhập dịch vụ thực tế phát sinh lũy kế đến kỳ báo cáo
* **Thu nhập từ hoạt động dịch vụ kế hoạch (KH)**: Tổng thu nhập dịch vụ kế hoạch năm (lấy tại tháng 1)

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Thu nhập từ hoạt động dịch vụ kế hoạch (KH)

**Công thức:**

$$
KH = \sum \text{Kế hoạch Thu nhập từ hoạt động dịch vụ (tháng 1, cùng năm)}
$$

**Giải thích nghiệp vụ:**

* Lấy **giá trị kế hoạch** của chỉ tiêu **“Thu nhập từ hoạt động dịch vụ”** từ bảng **KQKD**
* Chỉ sử dụng số liệu của **tháng 1** trong **năm báo cáo**
* Kế hoạch tháng 1 được xem là **kế hoạch chuẩn cho toàn bộ năm**
* Đơn vị tính theo **tỷ đồng** (theo dữ liệu kế hoạch)

---

### 4.2. Thu nhập từ hoạt động dịch vụ lũy kế thực hiện (TH)

**Công thức:**

$$
TH = \sum \text{Thu nhập từ hoạt động dịch vụ thực tế phát sinh lũy kế}
$$

**Giải thích nghiệp vụ:**

* Lấy **giá trị thực tế (Value)** của khoản mục **“Thu thuần từ DV”** từ bảng **Data_LN_CP**
* Tính **lũy kế đến kỳ báo cáo đang xem**
* Phản ánh **thu nhập dịch vụ thực tế** của ngân hàng tại thời điểm báo cáo

---

## 5. Logic nghiệp vụ

> Ngân hàng sử dụng **kế hoạch Thu nhập từ hoạt động dịch vụ năm (chốt tại tháng 1)** làm mục tiêu điều hành.
> Chỉ tiêu thể hiện **tỷ lệ Thu nhập từ hoạt động dịch vụ đã thực hiện lũy kế** so với **kế hoạch năm**, qua đó đánh giá mức độ phát triển và hiệu quả các hoạt động dịch vụ.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Trường hợp **KH = 0**, chỉ tiêu không xác định (đã được xử lý trong DAX bằng hàm `DIVIDE`)
* ⚠️ **KH cố định theo tháng 1**, không thay đổi theo bộ lọc thời gian
* ⚠️ **TH là giá trị lũy kế**, phụ thuộc vào kỳ báo cáo (tháng / quý / năm)
* ⚠️ Cần đảm bảo dữ liệu:

  * **Chỉ tiêu = “Thu nhập từ hoạt động dịch vụ”** (bảng KQKD)
  * **Attribute = “Thu thuần từ DV”** (bảng Data_LN_CP)
    được **chuẩn hóa và khớp nghĩa nghiệp vụ**

---
---

## 1. Tên chỉ tiêu

**TTDV_Còn lại cần TH – Tỷ lệ Thu nhập từ hoạt động dịch vụ còn lại cần thực hiện**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **TTDV_Còn lại cần TH** dùng để xác định **phần tỷ lệ thu nhập từ hoạt động dịch vụ còn thiếu so với mục tiêu kế hoạch năm**, trong trường hợp mức độ thực hiện hiện tại **chưa đạt mục tiêu**.

* Phản ánh **khoảng cách còn lại** để đạt kế hoạch thu nhập dịch vụ
* Hỗ trợ theo dõi **tiến độ thực hiện thu nhập dịch vụ**
* Phục vụ báo cáo **điều hành và đánh giá hiệu quả đa dạng hóa thu nhập**

---

## 3. Công thức tính

```
TTDV_Còn lại cần TH = Target – (LN_CP % KH TNDV LK)
```

**Điều kiện áp dụng:**

* Chỉ tính khi `Target – (LN_CP % KH TNDV LK) > 0`
* Nếu `LN_CP % KH TNDV LK ≥ Target` thì **không hiển thị giá trị**

Trong đó:

* **Target**: Mục tiêu hoàn thành (giá trị chuẩn = 1, tương ứng 100%)
* **LN_CP % KH TNDV LK**: Tỷ lệ Thu nhập từ hoạt động dịch vụ lũy kế so với kế hoạch

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Mục tiêu hoàn thành (Target)

**Giá trị:**

```
Target = 1
```

**Giải thích nghiệp vụ:**

* Target = 1 tương đương **100% kế hoạch Thu nhập từ hoạt động dịch vụ**
* Được sử dụng làm **ngưỡng chuẩn** để đánh giá mức độ hoàn thành
* Giá trị cố định, không phụ thuộc kỳ báo cáo

---

### 4.2. Tỷ lệ Thu nhập từ hoạt động dịch vụ lũy kế so với kế hoạch

(**LN_CP % KH TNDV LK**)

**Giải thích nghiệp vụ:**

* Là chỉ tiêu đã được tính toán trước đó
* Phản ánh **mức độ thực hiện Thu nhập từ hoạt động dịch vụ lũy kế so với kế hoạch năm**
* Thay đổi theo **kỳ báo cáo** (tháng / quý / năm)

---

## 5. Logic nghiệp vụ

> Ngân hàng đặt mục tiêu đạt **100% Thu nhập từ hoạt động dịch vụ theo kế hoạch năm**.
> Nếu tại thời điểm báo cáo, mức độ thực hiện **chưa đạt mục tiêu**, hệ thống xác định **phần tỷ lệ Thu nhập từ hoạt động dịch vụ còn lại cần tiếp tục thực hiện**.
> Trường hợp đã đạt hoặc vượt kế hoạch, chỉ tiêu này **không hiển thị**.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Chỉ tiêu **chỉ có giá trị khi LN_CP % KH TNDV LK < 100%**
* ⚠️ Khi **LN_CP % KH TNDV LK ≥ Target**, hệ thống trả về **BLANK** (không hiển thị)
* ⚠️ Target được giả định **luôn bằng 1 (100%)**
* ⚠️ Chỉ tiêu mang tính **theo dõi tiến độ**, không phản ánh giá trị Thu nhập từ hoạt động dịch vụ tuyệt đối

---
---

## 1. Tên chỉ tiêu

**LN_CP % KH Thu thuần khác LK – Tỷ lệ Thu thuần khác lũy kế so với Kế hoạch**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **LN_CP % KH Thu thuần khác LK** dùng để đo lường **mức độ thực hiện thu thuần từ hoạt động khác lũy kế so với kế hoạch năm**.

* Phản ánh **kết quả thu nhập ngoài lãi và ngoài dịch vụ**
* Phục vụ báo cáo **kết quả kinh doanh, điều hành và quản trị**
* So sánh giữa **Thực hiện lũy kế (TH)** và **Kế hoạch năm (KH)**

---

## 3. Công thức tính

```
LN_CP % KH Thu thuần khác LK = Thu thuần khác lũy kế thực hiện / Thu thuần khác kế hoạch
```

Trong đó:

* **Thu thuần khác lũy kế thực hiện (TH)**: Tổng thu thuần khác thực tế phát sinh lũy kế đến kỳ báo cáo
* **Thu thuần khác kế hoạch (KH)**: Tổng thu thuần khác kế hoạch năm (lấy tại tháng 1)

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Thu thuần khác kế hoạch (KH)

**Công thức:**

$$
KH = \sum \text{Kế hoạch Thu thuần khác (tháng 1, cùng năm)}
$$

**Giải thích nghiệp vụ:**

* Lấy **giá trị kế hoạch** của chỉ tiêu **“Lãi/lỗ thuần từ hoạt động khác”** từ bảng **KQKD**
* Chỉ sử dụng số liệu của **tháng 1** trong **năm báo cáo**
* Kế hoạch tháng 1 được xem là **kế hoạch chuẩn cho toàn bộ năm**
* Đơn vị tính theo **tỷ đồng** (theo dữ liệu kế hoạch)

---

### 4.2. Thu thuần khác lũy kế thực hiện (TH)

**Công thức:**

$$
TH = \sum \text{Thu thuần khác thực tế phát sinh lũy kế}
$$

**Giải thích nghiệp vụ:**

* Lấy **giá trị thực tế (Value)** của khoản mục **“Thu thuần khác”** từ bảng **Data_LN_CP**
* Tính **lũy kế đến kỳ báo cáo đang xem**
* Phản ánh **thu thuần khác thực tế** của ngân hàng tại thời điểm báo cáo

---

## 5. Logic nghiệp vụ

> Ngân hàng sử dụng **kế hoạch thu thuần khác năm (chốt tại tháng 1)** làm mục tiêu điều hành.
> Chỉ tiêu thể hiện **tỷ lệ thu thuần khác đã thực hiện lũy kế** so với **kế hoạch năm**, qua đó đánh giá mức độ đóng góp của các hoạt động ngoài kinh doanh cốt lõi vào kết quả chung.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Trường hợp **KH = 0**, chỉ tiêu không xác định (đã được xử lý trong DAX bằng hàm `DIVIDE`)
* ⚠️ **KH cố định theo tháng 1**, không thay đổi theo bộ lọc thời gian
* ⚠️ **TH là giá trị lũy kế**, phụ thuộc vào kỳ báo cáo (tháng / quý / năm)
* ⚠️ Cần đảm bảo dữ liệu:

  * **Chỉ tiêu = “Lãi/lỗ thuần từ hoạt động khác”** (bảng KQKD)
  * **Attribute = “Thu thuần khác”** (bảng Data_LN_CP)
    được **chuẩn hóa và thống nhất về ý nghĩa nghiệp vụ**

---
---

## 1. Tên chỉ tiêu

**TTK_Còn lại cần TH – Tỷ lệ Thu thuần khác còn lại cần thực hiện**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **TTK_Còn lại cần TH** dùng để xác định **phần tỷ lệ thu thuần khác còn thiếu so với mục tiêu kế hoạch năm**, trong trường hợp mức độ thực hiện hiện tại **chưa đạt mục tiêu**.

* Phản ánh **khoảng cách còn lại** để đạt kế hoạch thu thuần khác
* Hỗ trợ theo dõi **tiến độ thực hiện các khoản thu ngoài hoạt động cốt lõi**
* Phục vụ báo cáo **điều hành và đánh giá kết quả kinh doanh tổng thể**

---

## 3. Công thức tính

```
TTK_Còn lại cần TH = Target – (LN_CP % KH Thu thuần khác LK)
```

**Điều kiện áp dụng:**

* Chỉ tính khi `Target – (LN_CP % KH Thu thuần khác LK) > 0`
* Nếu `LN_CP % KH Thu thuần khác LK ≥ Target` thì **không hiển thị giá trị**

Trong đó:

* **Target**: Mục tiêu hoàn thành (giá trị chuẩn = 1, tương ứng 100%)
* **LN_CP % KH Thu thuần khác LK**: Tỷ lệ Thu thuần khác lũy kế so với kế hoạch

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Mục tiêu hoàn thành (Target)

**Giá trị:**

```
Target = 1
```

**Giải thích nghiệp vụ:**

* Target = 1 tương đương **100% kế hoạch Thu thuần khác**
* Được sử dụng làm **ngưỡng chuẩn** để đánh giá mức độ hoàn thành
* Giá trị cố định, không phụ thuộc kỳ báo cáo

---

### 4.2. Tỷ lệ Thu thuần khác lũy kế so với kế hoạch

(**LN_CP % KH Thu thuần khác LK**)

**Giải thích nghiệp vụ:**

* Là chỉ tiêu đã được tính toán trước đó
* Phản ánh **mức độ thực hiện Thu thuần khác lũy kế so với kế hoạch năm**
* Thay đổi theo **kỳ báo cáo** (tháng / quý / năm)

---

## 5. Logic nghiệp vụ

> Ngân hàng đặt mục tiêu đạt **100% Thu thuần khác theo kế hoạch năm**.
> Nếu tại thời điểm báo cáo, mức độ thực hiện **chưa đạt mục tiêu**, hệ thống xác định **phần tỷ lệ Thu thuần khác còn lại cần tiếp tục thực hiện**.
> Trường hợp đã đạt hoặc vượt kế hoạch, chỉ tiêu này **không hiển thị**.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Chỉ tiêu **chỉ có giá trị khi LN_CP % KH Thu thuần khác LK < 100%**
* ⚠️ Khi **LN_CP % KH Thu thuần khác LK ≥ Target**, hệ thống trả về **BLANK** (không hiển thị)
* ⚠️ Target được giả định **luôn bằng 1 (100%)**
* ⚠️ Chỉ tiêu mang tính **theo dõi tiến độ**, không phản ánh giá trị Thu thuần khác tuyệt đối

---
---

## 1. Tên chỉ tiêu

**ChiSo_TH – Giá trị thực hiện chỉ số theo logic chốt cuối tháng**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **ChiSo_TH** dùng để xác định **giá trị thực hiện của một chỉ số tại thời điểm báo cáo**, với logic:

* Nếu đang ở **ngày cuối tháng** → lấy **giá trị thực hiện của tháng hiện tại**
* Nếu **chưa phải ngày cuối tháng** → hiển thị **giá trị thực hiện của tháng liền trước**

Chỉ tiêu này thường dùng trong:

* Dashboard theo dõi **chỉ số điều hành**
* Báo cáo **ngày trong tháng nhưng chốt số theo tháng**
* Tránh biến động số liệu khi tháng chưa kết thúc

---

## 3. Công thức tính

```
ChiSo_TH =
IF(
    Ngày báo cáo là ngày cuối tháng,
    Thực hiện tháng hiện tại,
    Thực hiện tháng trước
)
```

Trong đó:

* **Thực hiện tháng hiện tại**: Tổng giá trị thực hiện của tháng đang xem
* **Thực hiện tháng trước**: Tổng giá trị thực hiện của tháng liền trước

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Thực hiện tháng hiện tại (ThisM)

**Công thức:**

$$
ThisM = \sum \text{Giá trị thực hiện của tháng hiện tại}
$$

**Giải thích nghiệp vụ:**

* Lấy tổng giá trị **Thực hiện** từ bảng **CacChiSo**
* Phụ thuộc vào **tháng đang được chọn** trên báo cáo
* Chỉ phản ánh đầy đủ khi **tháng đã kết thúc**

---

### 4.2. Thực hiện tháng trước (LastM)

**Công thức:**

$$
LastM = \sum \text{Giá trị thực hiện của tháng liền trước}
$$

**Giải thích nghiệp vụ:**

* Lấy tổng giá trị **Thực hiện** của **tháng trước đó**
* Áp dụng khi tháng hiện tại **chưa kết thúc**
* Đảm bảo số liệu hiển thị là **số đã chốt**

---

## 5. Logic nghiệp vụ

> Trong quá trình theo dõi chỉ số theo ngày, ngân hàng **chỉ coi số liệu của tháng là hợp lệ khi tháng đã kết thúc**.
> Do đó:
>
> * Nếu đang ở **ngày cuối tháng**, hệ thống hiển thị **giá trị thực hiện của tháng hiện tại**
> * Nếu chưa đến ngày cuối tháng, hệ thống **giữ nguyên số thực hiện của tháng trước** để đảm bảo tính ổn định và chính xác của báo cáo

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Chỉ tiêu phụ thuộc vào **ngày báo cáo (Date)** đang được chọn
* ⚠️ Trong tháng đang chạy, số liệu **không phản ánh tạm tính**
* ⚠️ Đảm bảo bảng **dimDate** có thông tin chính xác về **ngày cuối tháng**
* ⚠️ Phù hợp cho **báo cáo điều hành**, không phù hợp cho phân tích chi tiết biến động nội tháng

---
---

## 1. Tên chỉ tiêu

**ChiSo_TH – Giá trị thực hiện chỉ số theo logic chốt cuối tháng**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **ChiSo_TH** dùng để xác định **giá trị thực hiện của một chỉ số tại thời điểm báo cáo**, với logic:

* Nếu đang ở **ngày cuối tháng** → lấy **giá trị thực hiện của tháng hiện tại**
* Nếu **chưa phải ngày cuối tháng** → hiển thị **giá trị thực hiện của tháng liền trước**

Chỉ tiêu này thường dùng trong:

* Dashboard theo dõi **chỉ số điều hành**
* Báo cáo **ngày trong tháng nhưng chốt số theo tháng**
* Tránh biến động số liệu khi tháng chưa kết thúc

---

## 3. Công thức tính

```
ChiSo_TH =
IF(
    Ngày báo cáo là ngày cuối tháng,
    Thực hiện tháng hiện tại,
    Thực hiện tháng trước
)
```

Trong đó:

* **Thực hiện tháng hiện tại**: Tổng giá trị thực hiện của tháng đang xem
* **Thực hiện tháng trước**: Tổng giá trị thực hiện của tháng liền trước

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Thực hiện tháng hiện tại (ThisM)

**Công thức:**

$$
ThisM = \sum \text{Giá trị thực hiện của tháng hiện tại}
$$

**Giải thích nghiệp vụ:**

* Lấy tổng giá trị **Thực hiện** từ bảng **CacChiSo**
* Phụ thuộc vào **tháng đang được chọn** trên báo cáo
* Chỉ phản ánh đầy đủ khi **tháng đã kết thúc**

---

### 4.2. Thực hiện tháng trước (LastM)

**Công thức:**

$$
LastM = \sum \text{Giá trị thực hiện của tháng liền trước}
$$

**Giải thích nghiệp vụ:**

* Lấy tổng giá trị **Thực hiện** của **tháng trước đó**
* Áp dụng khi tháng hiện tại **chưa kết thúc**
* Đảm bảo số liệu hiển thị là **số đã chốt**

---

## 5. Logic nghiệp vụ

> Trong quá trình theo dõi chỉ số theo ngày, ngân hàng **chỉ coi số liệu của tháng là hợp lệ khi tháng đã kết thúc**.
> Do đó:
>
> * Nếu đang ở **ngày cuối tháng**, hệ thống hiển thị **giá trị thực hiện của tháng hiện tại**
> * Nếu chưa đến ngày cuối tháng, hệ thống **giữ nguyên số thực hiện của tháng trước** để đảm bảo tính ổn định và chính xác của báo cáo

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Chỉ tiêu phụ thuộc vào **ngày báo cáo (Date)** đang được chọn
* ⚠️ Trong tháng đang chạy, số liệu **không phản ánh tạm tính**
* ⚠️ Đảm bảo bảng **dimDate** có thông tin chính xác về **ngày cuối tháng**
* ⚠️ Phù hợp cho **báo cáo điều hành**, không phù hợp cho phân tích chi tiết biến động nội tháng

---
---

## 1. Tên chỉ tiêu

**CIR – Cost to Income Ratio (Tỷ lệ Chi phí trên Thu nhập)**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **CIR** dùng để đo lường **mức độ hiệu quả trong việc kiểm soát chi phí so với thu nhập**, thông qua tỷ lệ giữa **tổng chi phí hoạt động** và **tổng thu nhập**.

* Là **chỉ tiêu trọng yếu** trong quản trị hiệu quả hoạt động
* Phục vụ báo cáo **điều hành, quản trị và đánh giá hiệu suất**
* Thường được sử dụng để **so sánh theo thời gian** hoặc **so sánh giữa các đơn vị**

---

## 3. Công thức tính

```
CIR = Giá trị thực hiện chỉ tiêu CIR tại thời điểm báo cáo
```

Trong đó:

* Giá trị CIR được lấy theo **ngày số liệu tương ứng với ngày báo cáo đang xem**

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Giá trị thực hiện chỉ tiêu CIR

**Công thức:**

$$
CIR = \sum \text{Giá trị Thực hiện của chỉ tiêu CIR}
$$

**Giải thích nghiệp vụ:**

* Lấy **giá trị Thực hiện** từ bảng **CacChiSo**
* Chỉ lấy các bản ghi có **Chỉ tiêu = “CIR”**
* Không phụ thuộc bộ lọc khác trên bảng **CacChiSo** (đã loại bỏ filter bằng `ALL`)

---

### 4.2. Ngày số liệu áp dụng

**Logic chọn ngày:**

* Ngày tính CIR được xác định bằng:

  * **Ngày số liệu lớn nhất** trong bảng **CacChiSo**
  * Hoặc **ngày đang được chọn trên báo cáo** nếu có

**Giải thích nghiệp vụ:**

* Đảm bảo CIR được hiển thị theo **ngày số liệu mới nhất**
* Tránh trường hợp hiển thị **số liệu lỗi thời** khi báo cáo có nhiều mốc thời gian

---

## 5. Logic nghiệp vụ

> Chỉ tiêu CIR được hiển thị theo **ngày số liệu tương ứng với ngày báo cáo đang xem**.
> Hệ thống luôn ưu tiên **giá trị CIR mới nhất hợp lệ**, đảm bảo chỉ tiêu phản ánh **đúng tình trạng hiệu quả hoạt động tại thời điểm báo cáo**.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Chỉ tiêu phụ thuộc vào **Ngày số liệu** trong bảng **CacChiSo**
* ⚠️ Cần đảm bảo dữ liệu **Chỉ tiêu = “CIR”** được cập nhật đầy đủ và duy nhất theo ngày
* ⚠️ Không dùng để phân tích chi tiết theo ngày trong tháng nếu dữ liệu chưa được chốt
* ⚠️ Phù hợp cho **dashboard điều hành và báo cáo tổng hợp**, không dùng cho phân tích giao dịch chi tiết

---
---

## 1. Tên chỉ tiêu

**NPL – Tỷ lệ nợ xấu (Non-Performing Loan Ratio)**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **NPL** dùng để phản ánh **tỷ lệ nợ xấu tại thời điểm báo cáo**, là một trong những chỉ tiêu trọng yếu trong **quản trị rủi ro tín dụng** của ngân hàng.

* Phản ánh **chất lượng danh mục tín dụng**
* Phục vụ báo cáo **điều hành, quản trị rủi ro, giám sát an toàn hoạt động**
* Thường được theo dõi **theo thời gian và so với ngưỡng kiểm soát**

---

## 3. Công thức tính

```
NPL = Giá trị thực hiện chỉ tiêu NPL tại thời điểm báo cáo
```

Trong đó:

* Giá trị NPL được lấy theo **ngày số liệu tương ứng với ngày báo cáo đang xem**

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Giá trị thực hiện chỉ tiêu NPL

**Công thức:**

$$
NPL = \sum \text{Giá trị Thực hiện của chỉ tiêu NPL}
$$

**Giải thích nghiệp vụ:**

* Lấy **giá trị Thực hiện** từ bảng **CacChiSo**
* Chỉ lấy các bản ghi có **Chỉ tiêu = “NPL”**
* Không bị ảnh hưởng bởi các bộ lọc khác trên bảng **CacChiSo** (đã loại bỏ bằng `ALL`)

---

### 4.2. Ngày số liệu áp dụng

**Logic chọn ngày:**

* Ngày tính NPL được xác định bằng:

  * **Ngày số liệu được chọn trên báo cáo**
  * Hoặc **ngày số liệu lớn nhất** nếu không có ngày được chọn

**Giải thích nghiệp vụ:**

* Đảm bảo NPL hiển thị theo **số liệu mới nhất hợp lệ**
* Tránh hiển thị **số liệu cũ** khi người dùng thay đổi bộ lọc thời gian

---

## 5. Logic nghiệp vụ

> Chỉ tiêu NPL được hiển thị theo **ngày số liệu tương ứng với ngày báo cáo đang xem**.
> Hệ thống ưu tiên **giá trị NPL mới nhất** trong trường hợp không xác định rõ ngày, nhằm đảm bảo chỉ tiêu phản ánh **đúng tình trạng rủi ro tín dụng tại thời điểm báo cáo**.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Chỉ tiêu phụ thuộc vào **Ngày số liệu** trong bảng **CacChiSo**
* ⚠️ Cần đảm bảo mỗi ngày chỉ có **một giá trị NPL hợp lệ**
* ⚠️ Không sử dụng để phân tích chi tiết theo giao dịch hoặc theo khoản vay
* ⚠️ Phù hợp cho **dashboard điều hành và báo cáo giám sát rủi ro**, không dùng cho phân tích tác nghiệp

---
---

## 1. Tên chỉ tiêu

**ROA – Tỷ suất sinh lời trên tổng tài sản (Return on Assets)**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **ROA** dùng để đo lường **mức độ sinh lời của ngân hàng trên mỗi đơn vị tài sản**, phản ánh hiệu quả sử dụng tổng tài sản trong hoạt động kinh doanh.

* Là **chỉ tiêu cốt lõi** trong đánh giá hiệu quả hoạt động
* Phục vụ báo cáo **điều hành, quản trị và đánh giá hiệu suất**
* Thường được sử dụng để **so sánh theo thời gian** hoặc **giữa các đơn vị/ngân hàng**

---

## 3. Công thức tính

```
ROA = Giá trị thực hiện chỉ tiêu ROA tại thời điểm báo cáo
```

Trong đó:

* Giá trị ROA được lấy theo **ngày số liệu tương ứng với ngày báo cáo đang xem**

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Giá trị thực hiện chỉ tiêu ROA

**Công thức:**

$$
ROA = \sum \text{Giá trị Thực hiện của chỉ tiêu ROA}
$$

**Giải thích nghiệp vụ:**

* Lấy **giá trị Thực hiện** từ bảng **CacChiSo**
* Chỉ lấy các bản ghi có **Chỉ tiêu = “ROA”**
* Không bị ảnh hưởng bởi các bộ lọc khác trên bảng **CacChiSo** (đã loại bỏ bằng `ALL`)

---

### 4.2. Ngày số liệu áp dụng

**Logic chọn ngày:**

* Ngày tính ROA được xác định bằng:

  * **Ngày số liệu được chọn trên báo cáo**
  * Hoặc **ngày số liệu lớn nhất** nếu không có ngày được chọn

**Giải thích nghiệp vụ:**

* Đảm bảo ROA hiển thị theo **số liệu mới nhất hợp lệ**
* Tránh hiển thị **số liệu cũ** khi người dùng thay đổi bộ lọc thời gian

---

## 5. Logic nghiệp vụ

> Chỉ tiêu ROA được hiển thị theo **ngày số liệu tương ứng với ngày báo cáo đang xem**.
> Hệ thống ưu tiên **giá trị ROA mới nhất** trong trường hợp không xác định rõ ngày, nhằm đảm bảo chỉ tiêu phản ánh **đúng hiệu quả sử dụng tài sản tại thời điểm báo cáo**.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Chỉ tiêu phụ thuộc vào **Ngày số liệu** trong bảng **CacChiSo**
* ⚠️ Cần đảm bảo mỗi ngày chỉ có **một giá trị ROA hợp lệ**
* ⚠️ Không sử dụng để phân tích chi tiết theo giao dịch
* ⚠️ Phù hợp cho **dashboard điều hành và báo cáo hiệu quả hoạt động**, không dùng cho phân tích tác nghiệp

---
---

## 1. Tên chỉ tiêu

**ROE – Tỷ suất sinh lời trên vốn chủ sở hữu (Return on Equity)**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **ROE** dùng để đo lường **mức độ sinh lời của ngân hàng trên mỗi đơn vị vốn chủ sở hữu**, phản ánh hiệu quả sử dụng vốn trong hoạt động kinh doanh.

* Là **chỉ tiêu cốt lõi** trong đánh giá hiệu quả và sức hấp dẫn của ngân hàng
* Phục vụ báo cáo **điều hành, quản trị và đánh giá hiệu suất**
* Thường được sử dụng để **so sánh theo thời gian** hoặc **giữa các đơn vị/ngân hàng**

---

## 3. Công thức tính

```
ROE = Giá trị thực hiện chỉ tiêu ROE tại thời điểm báo cáo
```

Trong đó:

* Giá trị ROE được lấy theo **ngày số liệu tương ứng với ngày báo cáo đang xem**

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Giá trị thực hiện chỉ tiêu ROE

**Công thức:**

$$
ROE = \sum \text{Giá trị Thực hiện của chỉ tiêu ROE}
$$

**Giải thích nghiệp vụ:**

* Lấy **giá trị Thực hiện** từ bảng **CacChiSo**
* Chỉ lấy các bản ghi có **Chỉ tiêu = “ROE”**
* Không bị ảnh hưởng bởi các bộ lọc khác trên bảng **CacChiSo** (đã loại bỏ bằng `ALL`)

---

### 4.2. Ngày số liệu áp dụng

**Logic chọn ngày:**

* Ngày tính ROE được xác định bằng:

  * **Ngày số liệu được chọn trên báo cáo**
  * Hoặc **ngày số liệu lớn nhất** nếu không có ngày được chọn

**Giải thích nghiệp vụ:**

* Đảm bảo ROE hiển thị theo **số liệu mới nhất hợp lệ**
* Tránh hiển thị **số liệu cũ** khi người dùng thay đổi bộ lọc thời gian

---

## 5. Logic nghiệp vụ

> Chỉ tiêu ROE được hiển thị theo **ngày số liệu tương ứng với ngày báo cáo đang xem**.
> Hệ thống ưu tiên **giá trị ROE mới nhất** trong trường hợp không xác định rõ ngày, nhằm đảm bảo chỉ tiêu phản ánh **đúng hiệu quả sử dụng vốn chủ sở hữu tại thời điểm báo cáo**.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Chỉ tiêu phụ thuộc vào **Ngày số liệu** trong bảng **CacChiSo**
* ⚠️ Cần đảm bảo mỗi ngày chỉ có **một giá trị ROE hợp lệ**
* ⚠️ Không sử dụng để phân tích chi tiết theo giao dịch
* ⚠️ Phù hợp cho **dashboard điều hành và báo cáo hiệu quả vốn**, không dùng cho phân tích tác nghiệp

---
---

## 1. Tên chỉ tiêu

**Tỷ lệ dự trữ thanh khoản – Liquidity Reserve Ratio**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **Tỷ lệ dự trữ thanh khoản** dùng để phản ánh **mức độ đảm bảo khả năng thanh khoản của ngân hàng tại thời điểm báo cáo**, thông qua tỷ lệ dự trữ thanh khoản so với quy mô hoạt động.

* Là **chỉ tiêu an toàn thanh khoản** quan trọng
* Phục vụ báo cáo **điều hành, quản trị rủi ro thanh khoản**
* Thường được theo dõi **theo ngày số liệu** và so sánh với **ngưỡng quy định**

---

## 3. Công thức tính

```
Tỷ lệ dự trữ thanh khoản = Giá trị thực hiện chỉ tiêu Tỷ lệ dự trữ thanh khoản tại thời điểm báo cáo
```

Trong đó:

* Giá trị chỉ tiêu được lấy theo **ngày số liệu tương ứng với ngày báo cáo đang xem**

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Giá trị thực hiện Tỷ lệ dự trữ thanh khoản

**Công thức:**

$$
Tỷ\ lệ\ dự\ trữ\ thanh\ khoản
= \sum \text{Giá trị Thực hiện của chỉ tiêu “Tỷ lệ dự trữ thanh khoản”}
$$

**Giải thích nghiệp vụ:**

* Lấy **giá trị Thực hiện** từ bảng **CacChiSo**
* Chỉ lấy các bản ghi có **Chỉ tiêu = “Tỷ lệ dự trữ thanh khoản”**
* Không bị ảnh hưởng bởi các bộ lọc khác trên bảng **CacChiSo** (đã loại bỏ bằng `ALL`)

---

### 4.2. Ngày số liệu áp dụng

**Logic chọn ngày:**

* Ngày tính chỉ tiêu được xác định bằng:

  * **Ngày số liệu được chọn trên báo cáo**
  * Hoặc **ngày số liệu lớn nhất** nếu không có ngày được chọn

**Giải thích nghiệp vụ:**

* Đảm bảo chỉ tiêu hiển thị theo **số liệu mới nhất hợp lệ**
* Tránh hiển thị **số liệu lỗi thời** khi thay đổi bộ lọc thời gian

---

## 5. Logic nghiệp vụ

> Tỷ lệ dự trữ thanh khoản được hiển thị theo **ngày số liệu tương ứng với ngày báo cáo đang xem**.
> Trong trường hợp không xác định rõ ngày, hệ thống ưu tiên **giá trị mới nhất**, nhằm đảm bảo chỉ tiêu phản ánh **đúng tình trạng thanh khoản của ngân hàng tại thời điểm báo cáo**.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Chỉ tiêu phụ thuộc vào **Ngày số liệu** trong bảng **CacChiSo**
* ⚠️ Cần đảm bảo mỗi ngày chỉ có **một giá trị hợp lệ** cho chỉ tiêu này
* ⚠️ Thường được so sánh với **ngưỡng an toàn theo quy định nội bộ hoặc NHNN**
* ⚠️ Phù hợp cho **dashboard điều hành và báo cáo quản trị rủi ro thanh khoản**, không dùng cho phân tích giao dịch chi tiết

---
---

## 1. Tên chỉ tiêu

**Cần thực hiện – Giá trị còn lại cần hoàn thành so với kế hoạch**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **Cần thực hiện** dùng để xác định **phần giá trị còn thiếu so với kế hoạch**, căn cứ trên **số lũy kế thực hiện** tại thời điểm báo cáo.

* Phản ánh **khoảng cách còn lại** để đạt kế hoạch
* Phục vụ theo dõi **tiến độ hoàn thành chỉ tiêu kinh doanh**
* Áp dụng logic **chốt số theo cuối tháng** để đảm bảo số liệu ổn định

---

## 3. Công thức tính

```
Cần thực hiện = Kế hoạch – Lũy kế thực hiện
```

**Nguyên tắc áp dụng:**

* Nếu đang ở **ngày cuối tháng** → dùng số liệu **tháng hiện tại**
* Nếu **chưa phải ngày cuối tháng** → dùng số liệu **tháng liền trước**
* Nếu kết quả < 0 → hiển thị **0**

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Lũy kế thực hiện

**Công thức:**

$$
TH =
\begin{cases}
\text{Lũy kế thực hiện tháng hiện tại}, & \text{nếu là ngày cuối tháng} \
\text{Lũy kế thực hiện tháng trước}, & \text{nếu chưa cuối tháng}
\end{cases}
$$

**Giải thích nghiệp vụ:**

* **ThisM_TH**: Lũy kế thực hiện của **tháng đang xem**
* **LastM_TH**: Lũy kế thực hiện của **tháng liền trước**
* Đảm bảo chỉ sử dụng **số liệu đã chốt**

---

### 4.2. Kế hoạch

**Công thức:**

$$
KH =
\begin{cases}
\text{Kế hoạch tháng hiện tại}, & \text{nếu là ngày cuối tháng} \
\text{Kế hoạch tháng trước}, & \text{nếu chưa cuối tháng}
\end{cases}
$$

**Giải thích nghiệp vụ:**

* **ThisM_KH**: Kế hoạch của **tháng hiện tại**
* **LastM_KH**: Kế hoạch của **tháng liền trước**
* Kế hoạch được so sánh tương ứng với mốc thời gian thực hiện

---

### 4.3. Giá trị cần thực hiện

**Công thức:**

$$
Cần\ thực\ hiện = \max(KH - TH,\ 0)
$$

**Giải thích nghiệp vụ:**

* Nếu **thực hiện đã vượt kế hoạch** → không còn phần cần thực hiện (hiển thị 0)
* Nếu **chưa đạt kế hoạch** → hiển thị phần giá trị còn thiếu

---

## 5. Logic nghiệp vụ

> Trong báo cáo điều hành, ngân hàng **chỉ đánh giá mức độ hoàn thành trên cơ sở số liệu đã chốt theo tháng**.
> Do đó:
>
> * Tại **ngày cuối tháng**, chỉ tiêu phản ánh **phần còn lại so với kế hoạch của tháng hiện tại**
> * Trong các ngày còn lại của tháng, chỉ tiêu **giữ nguyên giá trị của tháng trước**
>
> Điều này giúp tránh hiểu nhầm do số liệu lũy kế chưa hoàn chỉnh trong tháng.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Chỉ tiêu **không âm** (giá trị nhỏ nhất = 0)
* ⚠️ Phụ thuộc vào **ngày báo cáo** và logic xác định **ngày cuối tháng**
* ⚠️ Sử dụng **lũy kế** nên phù hợp cho báo cáo tiến độ, không dùng cho phân tích giao dịch chi tiết
* ⚠️ Cần đảm bảo dữ liệu **Kế hoạch** và **Lũy kế thực hiện** được cập nhật đầy đủ, nhất quán

---
---

## 1. Tên chỉ tiêu

**Cần thực hiện 2 – Giá trị chi phí còn lại cần thực hiện so với kế hoạch**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **Cần thực hiện 2** dùng để xác định **phần chi phí còn thiếu so với kế hoạch**, dựa trên **số thực hiện lũy kế** tại thời điểm báo cáo.

* Phản ánh **khoảng chi phí còn lại** cần thực hiện để đạt kế hoạch
* Phục vụ theo dõi **tiến độ thực hiện chi phí**
* Áp dụng logic **chốt số theo cuối tháng** để đảm bảo tính ổn định của báo cáo

---

## 3. Công thức tính

```
Cần thực hiện 2 = Kế hoạch – Số thực hiện
```

**Nguyên tắc áp dụng:**

* Nếu đang ở **ngày cuối tháng** → sử dụng số liệu **tháng hiện tại**
* Nếu **chưa phải ngày cuối tháng** → sử dụng số liệu **tháng liền trước**
* Nếu kết quả < 0 → hiển thị **0**

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Số thực hiện

**Công thức:**

$$
TH =
\begin{cases}
\text{Số thực hiện tháng hiện tại}, & \text{nếu là ngày cuối tháng} \
\text{Số thực hiện tháng trước}, & \text{nếu chưa đến cuối tháng}
\end{cases}
$$

**Giải thích nghiệp vụ:**

* **ThisM_TH**: Tổng **Số thực hiện** của tháng đang xem (từ bảng **Chi phí**)
* **LastM_TH**: Tổng **Số thực hiện** của tháng liền trước
* Đảm bảo chỉ sử dụng **số liệu đã chốt**

---

### 4.2. Kế hoạch

**Công thức:**

$$
KH =
\begin{cases}
\text{Kế hoạch tháng hiện tại}, & \text{nếu là ngày cuối tháng} \
\text{Kế hoạch tháng trước}, & \text{nếu chưa đến cuối tháng}
\end{cases}
$$

**Giải thích nghiệp vụ:**

* **ThisM_KH**: Tổng **Kế hoạch** của tháng hiện tại (từ bảng **Chi phí**)
* **LastM_KH**: Tổng **Kế hoạch** của tháng liền trước
* Kế hoạch được so sánh tương ứng với mốc thời gian thực hiện

---

### 4.3. Giá trị cần thực hiện

**Công thức:**

$$
Cần\ thực\ hiện\ 2 = \max(KH - TH,\ 0)
$$

**Giải thích nghiệp vụ:**

* Nếu **thực hiện đã đạt hoặc vượt kế hoạch** → không còn chi phí cần thực hiện (hiển thị 0)
* Nếu **chưa đạt kế hoạch** → hiển thị phần chi phí còn thiếu

---

## 5. Logic nghiệp vụ

> Trong báo cáo điều hành chi phí, ngân hàng **chỉ đánh giá tiến độ trên cơ sở số liệu đã chốt theo tháng**.
> Do đó:
>
> * Tại **ngày cuối tháng**, chỉ tiêu phản ánh **phần chi phí còn lại so với kế hoạch của tháng hiện tại**
> * Trong các ngày còn lại của tháng, chỉ tiêu **giữ nguyên giá trị của tháng trước**
>
> Cách tiếp cận này giúp tránh sai lệch do số liệu chi phí trong tháng chưa hoàn chỉnh.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Chỉ tiêu **không âm** (giá trị nhỏ nhất = 0)
* ⚠️ Phụ thuộc vào **ngày báo cáo** và logic xác định **ngày cuối tháng**
* ⚠️ Phù hợp cho **theo dõi tiến độ chi phí**, không dùng cho phân tích chi tiết giao dịch
* ⚠️ Cần đảm bảo dữ liệu **Số thực hiện** và **Kế hoạch** trong bảng **Chi phí** được cập nhật đầy đủ và nhất quán

---
---

## 1. Tên chỉ tiêu

**CP_KH năm – Kế hoạch chi phí năm (theo logic chốt cuối tháng)**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **CP_KH năm** dùng để xác định **giá trị kế hoạch chi phí năm tại thời điểm báo cáo**, áp dụng logic:

* Nếu đang ở **ngày cuối tháng** → sử dụng **kế hoạch của tháng hiện tại**
* Nếu **chưa đến ngày cuối tháng** → giữ nguyên **kế hoạch của tháng liền trước**

Chỉ tiêu này đảm bảo kế hoạch chi phí hiển thị trên báo cáo luôn là **số liệu đã được chốt**, tránh biến động trong tháng.

---

## 3. Công thức tính

```
CP_KH năm =
IF(
    Ngày báo cáo là ngày cuối tháng,
    Kế hoạch tháng hiện tại,
    Kế hoạch tháng trước
)
```

Trong đó:

* **Kế hoạch tháng hiện tại**: Tổng kế hoạch chi phí của tháng đang xem
* **Kế hoạch tháng trước**: Tổng kế hoạch chi phí của tháng liền trước

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Kế hoạch tháng hiện tại (ThisM)

**Công thức:**

$$
ThisM = \sum \text{Kế hoạch chi phí của tháng hiện tại}
$$

**Giải thích nghiệp vụ:**

* Lấy tổng **Kế hoạch** từ bảng **Chi phí**
* Phụ thuộc vào **tháng đang được chọn** trên báo cáo
* Chỉ phản ánh đúng khi **tháng đã kết thúc**

---

### 4.2. Kế hoạch tháng trước (LastM)

**Công thức:**

$$
LastM = \sum \text{Kế hoạch chi phí của tháng liền trước}
$$

**Giải thích nghiệp vụ:**

* Lấy tổng **Kế hoạch** của **tháng trước đó**
* Áp dụng khi tháng hiện tại **chưa kết thúc**
* Đảm bảo kế hoạch hiển thị là **số liệu đã được chốt**

---

## 5. Logic nghiệp vụ

> Trong báo cáo điều hành chi phí, ngân hàng **chỉ sử dụng kế hoạch đã được chốt theo tháng**.
> Do đó:
>
> * Tại **ngày cuối tháng**, hệ thống hiển thị **kế hoạch chi phí của tháng hiện tại**
> * Trong các ngày còn lại của tháng, hệ thống **giữ nguyên kế hoạch của tháng trước**
>
> Cách làm này giúp báo cáo **ổn định, nhất quán**, tránh nhầm lẫn do kế hoạch trong tháng có thể điều chỉnh.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Chỉ tiêu phụ thuộc vào **ngày báo cáo (Date)** được chọn
* ⚠️ Cần đảm bảo bảng **dimDate** xác định chính xác **ngày cuối tháng**
* ⚠️ Chỉ tiêu phản ánh **kế hoạch**, không phản ánh chi phí thực tế
* ⚠️ Phù hợp cho **dashboard điều hành và theo dõi ngân sách**, không dùng cho phân tích chi tiết nội tháng

---
---

## 1. Tên chỉ tiêu

**CP_Tăng/giảm so với cùng kỳ – Mức tăng/giảm chi phí so với cùng kỳ năm trước**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **CP_Tăng/giảm so với cùng kỳ** dùng để phản ánh **mức biến động chi phí so với cùng kỳ năm trước**, tại thời điểm báo cáo.

* Giúp đánh giá **xu hướng tăng/giảm chi phí theo thời gian**
* Phục vụ phân tích **kiểm soát chi phí và hiệu quả quản trị**
* Áp dụng logic **chốt số theo cuối tháng** để đảm bảo số liệu ổn định

---

## 3. Công thức tính

```
CP_Tăng/giảm so với cùng kỳ =
IF(
    Ngày báo cáo là ngày cuối tháng,
    Giá trị tăng/giảm của tháng hiện tại,
    Giá trị tăng/giảm của tháng trước
)
```

Trong đó:

* **Giá trị tăng/giảm tháng hiện tại**: Mức chênh lệch chi phí so với cùng kỳ tại tháng đang xem
* **Giá trị tăng/giảm tháng trước**: Mức chênh lệch chi phí so với cùng kỳ tại tháng liền trước

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Mức tăng/giảm so với cùng kỳ tháng hiện tại (ThisM)

**Công thức:**

$$
ThisM = \sum \text{Giá trị Tăng/giảm chi phí so với cùng kỳ (tháng hiện tại)}
$$

**Giải thích nghiệp vụ:**

* Lấy tổng chỉ tiêu **“Tăng/giảm so với cùng kỳ”** từ bảng **Chi phí**
* Phụ thuộc vào **tháng đang được chọn** trên báo cáo
* Chỉ phản ánh đầy đủ khi **tháng đã kết thúc**

---

### 4.2. Mức tăng/giảm so với cùng kỳ tháng trước (LastM)

**Công thức:**

$$
LastM = \sum \text{Giá trị Tăng/giảm chi phí so với cùng kỳ (tháng trước)}
$$

**Giải thích nghiệp vụ:**

* Lấy tổng giá trị **tăng/giảm so với cùng kỳ** của **tháng liền trước**
* Áp dụng khi tháng hiện tại **chưa kết thúc**
* Đảm bảo số liệu hiển thị là **số đã được chốt**

---

## 5. Logic nghiệp vụ

> Trong báo cáo điều hành, ngân hàng **chỉ sử dụng số liệu biến động chi phí đã được chốt theo tháng**.
> Vì vậy:
>
> * Tại **ngày cuối tháng**, chỉ tiêu phản ánh **mức tăng/giảm chi phí so với cùng kỳ của tháng hiện tại**
> * Trong các ngày còn lại của tháng, chỉ tiêu **giữ nguyên giá trị của tháng trước**
>
> Cách tiếp cận này giúp tránh hiểu sai xu hướng do số liệu tháng đang chạy chưa hoàn chỉnh.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Chỉ tiêu có thể **dương hoặc âm** (tăng hoặc giảm chi phí)
* ⚠️ Phụ thuộc vào **ngày báo cáo** và logic xác định **ngày cuối tháng**
* ⚠️ Phù hợp cho **phân tích xu hướng và so sánh cùng kỳ**
* ⚠️ Không dùng để đánh giá biến động chi phí **theo ngày trong tháng**

---
---

## 1. Tên chỉ tiêu

**Thực hiện – Giá trị thực hiện lũy kế (theo logic chốt cuối tháng)**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **Thực hiện** dùng để xác định **giá trị thực hiện lũy kế tại thời điểm báo cáo**, với nguyên tắc:

* Nếu đang ở **ngày cuối tháng** → hiển thị **giá trị lũy kế của tháng hiện tại**
* Nếu **chưa đến ngày cuối tháng** → hiển thị **giá trị lũy kế của tháng liền trước**

Chỉ tiêu này giúp đảm bảo số liệu hiển thị trên báo cáo là **số đã được chốt**, tránh biến động trong tháng.

---

## 3. Công thức tính

```
Thực hiện =
IF(
    Ngày báo cáo là ngày cuối tháng,
    Lũy kế thực hiện tháng hiện tại,
    Lũy kế thực hiện tháng trước
)
```

Trong đó:

* **Lũy kế thực hiện tháng hiện tại**: Tổng giá trị thực hiện lũy kế của tháng đang xem
* **Lũy kế thực hiện tháng trước**: Tổng giá trị thực hiện lũy kế của tháng liền trước

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Lũy kế thực hiện tháng hiện tại (ThisM)

**Công thức:**

$$
ThisM = \sum \text{Giá trị Lũy kế thực hiện của tháng hiện tại}
$$

**Giải thích nghiệp vụ:**

* Lấy tổng **Luỹ kế (tỷ)** từ bảng **KQKD**
* Phụ thuộc vào **tháng đang được chọn** trên báo cáo
* Chỉ phản ánh đầy đủ khi **tháng đã kết thúc**

---

### 4.2. Lũy kế thực hiện tháng trước (LastM)

**Công thức:**

$$
LastM = \sum \text{Giá trị Lũy kế thực hiện của tháng liền trước}
$$

**Giải thích nghiệp vụ:**

* Lấy tổng **Luỹ kế (tỷ)** của **tháng trước đó**
* Áp dụng khi tháng hiện tại **chưa kết thúc**
* Đảm bảo số liệu hiển thị là **số đã được chốt**

---

## 5. Logic nghiệp vụ

> Trong báo cáo điều hành, ngân hàng **chỉ sử dụng số liệu thực hiện đã được chốt theo tháng**.
> Do đó:
>
> * Tại **ngày cuối tháng**, chỉ tiêu phản ánh **kết quả thực hiện lũy kế của tháng hiện tại**
> * Trong các ngày còn lại của tháng, chỉ tiêu **giữ nguyên kết quả lũy kế của tháng trước**
>
> Cách tiếp cận này giúp báo cáo **ổn định, nhất quán và tránh hiểu sai số liệu** khi tháng chưa kết thúc.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Chỉ tiêu phụ thuộc vào **ngày báo cáo (Date)** được chọn
* ⚠️ Cần đảm bảo bảng **dimDate** xác định chính xác **ngày cuối tháng**
* ⚠️ Chỉ tiêu phản ánh **giá trị thực hiện lũy kế**, không phản ánh phát sinh trong ngày
* ⚠️ Phù hợp cho **dashboard điều hành và báo cáo tổng hợp**, không dùng cho phân tích chi tiết nội tháng

---
---

## 1. Tên chỉ tiêu

**Thực hiện2 – Giá trị thực hiện chi phí (theo logic chốt cuối tháng)**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **Thực hiện2** dùng để xác định **giá trị chi phí thực hiện tại thời điểm báo cáo**, với nguyên tắc:

* Nếu đang ở **ngày cuối tháng** → hiển thị **giá trị thực hiện của tháng hiện tại**
* Nếu **chưa đến ngày cuối tháng** → hiển thị **giá trị thực hiện của tháng liền trước**

Chỉ tiêu này giúp đảm bảo số liệu chi phí hiển thị trên báo cáo là **số đã được chốt**, tránh biến động trong tháng.

---

## 3. Công thức tính

```
Thực hiện2 =
IF(
    Ngày báo cáo là ngày cuối tháng,
    Số thực hiện tháng hiện tại,
    Số thực hiện tháng trước
)
```

Trong đó:

* **Số thực hiện tháng hiện tại**: Tổng chi phí thực hiện của tháng đang xem
* **Số thực hiện tháng trước**: Tổng chi phí thực hiện của tháng liền trước

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Số thực hiện tháng hiện tại (ThisM)

**Công thức:**

$$
ThisM = \sum \text{Số thực hiện chi phí của tháng hiện tại}
$$

**Giải thích nghiệp vụ:**

* Lấy tổng **Số thực hiện** từ bảng **Chi phí**
* Phụ thuộc vào **tháng đang được chọn** trên báo cáo
* Chỉ phản ánh đầy đủ khi **tháng đã kết thúc**

---

### 4.2. Số thực hiện tháng trước (LastM)

**Công thức:**

$$
LastM = \sum \text{Số thực hiện chi phí của tháng liền trước}
$$

**Giải thích nghiệp vụ:**

* Lấy tổng **Số thực hiện** của **tháng trước đó**
* Áp dụng khi tháng hiện tại **chưa kết thúc**
* Đảm bảo số liệu hiển thị là **số đã được chốt**

---

## 5. Logic nghiệp vụ

> Trong báo cáo điều hành chi phí, ngân hàng **chỉ sử dụng số liệu chi phí đã được chốt theo tháng**.
> Do đó:
>
> * Tại **ngày cuối tháng**, chỉ tiêu phản ánh **chi phí thực hiện của tháng hiện tại**
> * Trong các ngày còn lại của tháng, chỉ tiêu **giữ nguyên chi phí thực hiện của tháng trước**
>
> Cách tiếp cận này giúp báo cáo **ổn định, nhất quán**, tránh hiểu sai số liệu khi tháng chưa kết thúc.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Chỉ tiêu phụ thuộc vào **ngày báo cáo (Date)** được chọn
* ⚠️ Cần đảm bảo bảng **dimDate** xác định chính xác **ngày cuối tháng**
* ⚠️ Chỉ tiêu phản ánh **chi phí thực hiện**, không phản ánh phát sinh theo ngày
* ⚠️ Phù hợp cho **dashboard điều hành chi phí**, không dùng cho phân tích chi tiết nội tháng

---
---

## 1. Tên chỉ tiêu

**Vượt kế hoạch – Giá trị thực hiện vượt kế hoạch (theo logic chốt cuối tháng)**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **Vượt kế hoạch** dùng để xác định **phần giá trị thực hiện vượt quá kế hoạch**, căn cứ trên **giá trị lũy kế thực hiện so với kế hoạch** tại thời điểm báo cáo.

* Phản ánh **mức độ vượt kế hoạch** (nếu có)
* Phục vụ theo dõi **kết quả thực hiện vượt mục tiêu**
* Áp dụng logic **chốt số theo cuối tháng** để đảm bảo số liệu ổn định

---

## 3. Công thức tính

```
Vượt kế hoạch = max(Thực hiện lũy kế – Kế hoạch, 0)
```

**Nguyên tắc áp dụng:**

* Nếu đang ở **ngày cuối tháng** → sử dụng số liệu **tháng hiện tại**
* Nếu **chưa đến ngày cuối tháng** → sử dụng số liệu **tháng liền trước**
* Nếu kết quả ≤ 0 → hiển thị **0** (không vượt kế hoạch)

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Thực hiện lũy kế

**Công thức:**

$$
TH =
\begin{cases}
\text{Lũy kế thực hiện tháng hiện tại}, & \text{nếu là ngày cuối tháng} \
\text{Lũy kế thực hiện tháng trước}, & \text{nếu chưa cuối tháng}
\end{cases}
$$

**Giải thích nghiệp vụ:**

* **ThisM_TH**: Tổng **Luỹ kế (tỷ)** của tháng đang xem (bảng **KQKD**)
* **LastM_TH**: Tổng **Luỹ kế (tỷ)** của tháng liền trước
* Chỉ sử dụng **số liệu đã chốt**

---

### 4.2. Kế hoạch

**Công thức:**

$$
KH =
\begin{cases}
\text{Kế hoạch tháng hiện tại}, & \text{nếu là ngày cuối tháng} \
\text{Kế hoạch tháng trước}, & \text{nếu chưa cuối tháng}
\end{cases}
$$

**Giải thích nghiệp vụ:**

* **ThisM_KH**: Tổng **Kế hoạch (tỷ)** của tháng hiện tại
* **LastM_KH**: Tổng **Kế hoạch (tỷ)** của tháng liền trước
* Kế hoạch dùng để so sánh tương ứng với mốc thời gian thực hiện

---

### 4.3. Giá trị vượt kế hoạch

**Công thức:**

$$
Vượt\ kế\ hoạch = \max(TH - KH,\ 0)
$$

**Giải thích nghiệp vụ:**

* Nếu **TH > KH** → hiển thị phần **vượt kế hoạch**
* Nếu **TH ≤ KH** → hiển thị **0**

---

## 5. Logic nghiệp vụ

> Trong báo cáo điều hành, ngân hàng **chỉ đánh giá vượt kế hoạch trên cơ sở số liệu đã chốt theo tháng**.
> Do đó:
>
> * Tại **ngày cuối tháng**, chỉ tiêu phản ánh **giá trị vượt kế hoạch của tháng hiện tại**
> * Trong các ngày còn lại của tháng, chỉ tiêu **giữ nguyên kết quả vượt kế hoạch của tháng trước**
>
> Cách tiếp cận này giúp đảm bảo báo cáo **ổn định và nhất quán**, tránh hiểu sai khi tháng chưa kết thúc.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Chỉ tiêu **không âm** (giá trị nhỏ nhất = 0)
* ⚠️ Chỉ phản ánh **phần vượt**, không phản ánh phần chưa đạt kế hoạch
* ⚠️ Phụ thuộc vào **ngày báo cáo** và logic xác định **ngày cuối tháng**
* ⚠️ Phù hợp cho **dashboard điều hành, theo dõi kết quả vượt mục tiêu**, không dùng cho phân tích giao dịch chi tiết

---
---

## 1. Tên chỉ tiêu

**Vượt kế hoạch 2 – Giá trị chi phí thực hiện vượt kế hoạch (theo logic chốt cuối tháng)**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **Vượt kế hoạch 2** dùng để xác định **phần chi phí thực hiện vượt quá kế hoạch**, căn cứ trên **số thực hiện so với kế hoạch** tại thời điểm báo cáo.

* Phản ánh **mức độ chi phí vượt kế hoạch**
* Phục vụ theo dõi **kiểm soát chi phí và cảnh báo vượt ngân sách**
* Áp dụng logic **chốt số theo cuối tháng** để đảm bảo số liệu ổn định

---

## 3. Công thức tính

```
Vượt kế hoạch 2 = max(Số thực hiện – Kế hoạch, 0)
```

**Nguyên tắc áp dụng:**

* Nếu đang ở **ngày cuối tháng** → sử dụng số liệu **tháng hiện tại**
* Nếu **chưa đến ngày cuối tháng** → sử dụng số liệu **tháng liền trước**
* Nếu kết quả ≤ 0 → hiển thị **0** (không vượt kế hoạch)

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Số thực hiện

**Công thức:**

$$
TH =
\begin{cases}
\text{Số thực hiện tháng hiện tại}, & \text{nếu là ngày cuối tháng} \
\text{Số thực hiện tháng trước}, & \text{nếu chưa cuối tháng}
\end{cases}
$$

**Giải thích nghiệp vụ:**

* **ThisM_TH**: Tổng **Số thực hiện** của tháng đang xem (bảng **Chi phí**)
* **LastM_TH**: Tổng **Số thực hiện** của tháng liền trước
* Chỉ sử dụng **số liệu đã chốt**

---

### 4.2. Kế hoạch

**Công thức:**

$$
KH =
\begin{cases}
\text{Kế hoạch tháng hiện tại}, & \text{nếu là ngày cuối tháng} \
\text{Kế hoạch tháng trước}, & \text{nếu chưa cuối tháng}
\end{cases}
$$

**Giải thích nghiệp vụ:**

* **ThisM_KH**: Tổng **Kế hoạch** của tháng hiện tại (bảng **Chi phí**)
* **LastM_KH**: Tổng **Kế hoạch** của tháng liền trước
* Kế hoạch được dùng làm **ngưỡng so sánh**

---

### 4.3. Giá trị vượt kế hoạch

**Công thức:**

$$
Vượt\ kế\ hoạch\ 2 = \max(TH - KH,\ 0)
$$

**Giải thích nghiệp vụ:**

* Nếu **Số thực hiện > Kế hoạch** → hiển thị phần **chi phí vượt kế hoạch**
* Nếu **Số thực hiện ≤ Kế hoạch** → hiển thị **0**

---

## 5. Logic nghiệp vụ

> Trong báo cáo điều hành chi phí, ngân hàng **chỉ đánh giá vượt kế hoạch trên cơ sở số liệu đã chốt theo tháng**.
> Do đó:
>
> * Tại **ngày cuối tháng**, chỉ tiêu phản ánh **giá trị chi phí vượt kế hoạch của tháng hiện tại**
> * Trong các ngày còn lại của tháng, chỉ tiêu **giữ nguyên kết quả vượt kế hoạch của tháng trước**
>
> Cách tiếp cận này giúp báo cáo **ổn định, nhất quán**, tránh hiểu sai khi số liệu tháng chưa hoàn tất.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Chỉ tiêu **không âm** (giá trị nhỏ nhất = 0)
* ⚠️ Chỉ phản ánh **phần chi phí vượt**, không phản ánh phần chưa đạt kế hoạch
* ⚠️ Phụ thuộc vào **ngày báo cáo** và logic xác định **ngày cuối tháng**
* ⚠️ Phù hợp cho **dashboard kiểm soát chi phí và cảnh báo vượt ngân sách**, không dùng cho phân tích chi tiết giao dịch

---
---

## 1. Tên chỉ tiêu

**CP_KV_% HT KH – Tỷ lệ hoàn thành kế hoạch chi phí theo khu vực**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **CP_KV_% HT KH** dùng để đo lường **mức độ hoàn thành kế hoạch chi phí của từng khu vực**, thông qua tỷ lệ giữa **chi phí thực hiện** và **chi phí kế hoạch**.

* Phản ánh **tiến độ thực hiện chi phí theo khu vực**
* Phục vụ **so sánh, đánh giá và kiểm soát chi phí** giữa các khu vực
* Áp dụng logic **chốt số theo cuối tháng** để đảm bảo số liệu ổn định

---

## 3. Công thức tính

```
CP_KV_% HT KH = Chi phí thực hiện / Chi phí kế hoạch
```

**Nguyên tắc áp dụng:**

* Nếu đang ở **ngày cuối tháng** → sử dụng số liệu **tháng hiện tại**
* Nếu **chưa đến ngày cuối tháng** → sử dụng số liệu **tháng liền trước**

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Chi phí thực hiện

**Công thức:**

$$
TH = \sum \text{Chi phí thực hiện}
$$

**Giải thích nghiệp vụ:**

* Lấy tổng **Số thực hiện** từ bảng **CP_KV**
* Phản ánh **chi phí thực tế đã phát sinh** của khu vực
* Phụ thuộc vào kỳ báo cáo đang xem

---

### 4.2. Chi phí kế hoạch

**Công thức:**

$$
KH = \sum \text{Chi phí kế hoạch}
$$

**Giải thích nghiệp vụ:**

* Lấy tổng **Kế hoạch** từ bảng **CP_KV**
* Là **ngưỡng mục tiêu** để đánh giá mức độ hoàn thành
* Được so sánh tương ứng với kỳ thực hiện

---

### 4.3. Tỷ lệ hoàn thành kế hoạch chi phí

**Công thức:**

$$
CP_KV_%\ HT\ KH = \frac{TH}{KH}
$$

**Giải thích nghiệp vụ:**

* Nếu **CP_KV_% HT KH = 1** → hoàn thành 100% kế hoạch
* Nếu **< 1** → chưa đạt kế hoạch
* Nếu **> 1** → chi phí vượt kế hoạch

---

## 5. Logic nghiệp vụ

> Trong báo cáo điều hành theo khu vực, ngân hàng **chỉ đánh giá mức độ hoàn thành kế hoạch chi phí trên cơ sở số liệu đã chốt theo tháng**.
> Do đó:
>
> * Tại **ngày cuối tháng**, chỉ tiêu phản ánh **tỷ lệ hoàn thành kế hoạch của tháng hiện tại**
> * Trong các ngày còn lại của tháng, chỉ tiêu **giữ nguyên tỷ lệ hoàn thành của tháng trước**
>
> Cách tiếp cận này giúp việc so sánh giữa các khu vực **nhất quán và đáng tin cậy**.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Trường hợp **Kế hoạch = 0**, chỉ tiêu không xác định (đã được xử lý trong DAX bằng `DIVIDE`)
* ⚠️ Chỉ tiêu phụ thuộc vào **ngày báo cáo** và logic xác định **ngày cuối tháng**
* ⚠️ Phù hợp cho **dashboard so sánh khu vực và kiểm soát ngân sách**
* ⚠️ Cần đảm bảo dữ liệu **Số thực hiện** và **Kế hoạch** trong bảng **CP_KV** được cập nhật đầy đủ, nhất quán

---
---

## 1. Tên chỉ tiêu

**CP_KV_% Tăng giảm CK – Tỷ lệ % tăng/giảm chi phí theo khu vực so với cùng kỳ**

---

## 2. Mô tả chỉ tiêu

Chỉ tiêu **CP_KV_% Tăng giảm CK** dùng để đo lường **mức độ biến động chi phí của từng khu vực so với cùng kỳ năm trước**, thể hiện dưới dạng **tỷ lệ phần trăm**.

* Phản ánh **xu hướng tăng/giảm chi phí theo khu vực**
* Phục vụ **phân tích so sánh cùng kỳ và kiểm soát chi phí**
* Áp dụng logic **chốt số theo cuối tháng** để đảm bảo số liệu ổn định

---

## 3. Công thức tính

```
CP_KV_% Tăng giảm CK =
(Tăng/giảm chi phí so với cùng kỳ) / (Chi phí cùng kỳ năm trước)
```

**Nguyên tắc áp dụng:**

* Nếu đang ở **ngày cuối tháng** → sử dụng số liệu **tháng hiện tại**
* Nếu **chưa đến ngày cuối tháng** → sử dụng số liệu **tháng liền trước**

---

## 4. Diễn giải chi tiết từng thành phần

### 4.1. Giá trị tăng/giảm chi phí so với cùng kỳ

**Công thức:**

$$
\Delta CP = \sum \text{Tăng/giảm chi phí so với cùng kỳ}
$$

**Giải thích nghiệp vụ:**

* Lấy tổng chỉ tiêu **“Tăng/giảm so với cùng kỳ”** từ bảng **CP_KV**
* Phản ánh **mức chênh lệch tuyệt đối** giữa chi phí kỳ hiện tại và cùng kỳ năm trước
* Có thể mang giá trị **dương hoặc âm**

---

### 4.2. Chi phí cùng kỳ năm trước

**Công thức:**

$$
CP_{CK} = \sum \text{Chi phí cùng kỳ năm trước}
$$

**Giải thích nghiệp vụ:**

* Lấy tổng **Chi phí cùng kỳ năm trước** từ bảng **CP_KV**
* Là **mẫu số** để tính tỷ lệ % tăng/giảm
* Phản ánh **quy mô chi phí nền** để so sánh

---

### 4.3. Tỷ lệ % tăng/giảm chi phí so với cùng kỳ

**Công thức:**

$$
CP_KV_%\ Tăng\ giảm\ CK = \frac{\Delta CP}{CP_{CK}}
$$

**Giải thích nghiệp vụ:**

* Giá trị **> 0** → chi phí **tăng** so với cùng kỳ
* Giá trị **< 0** → chi phí **giảm** so với cùng kỳ
* Giá trị **= 0** → chi phí **không thay đổi**

---

## 5. Logic nghiệp vụ

> Trong báo cáo điều hành theo khu vực, ngân hàng **chỉ đánh giá mức tăng/giảm chi phí so với cùng kỳ trên cơ sở số liệu đã chốt theo tháng**.
> Do đó:
>
> * Tại **ngày cuối tháng**, chỉ tiêu phản ánh **tỷ lệ tăng/giảm của tháng hiện tại**
> * Trong các ngày còn lại của tháng, chỉ tiêu **giữ nguyên tỷ lệ tăng/giảm của tháng trước**
>
> Cách tiếp cận này giúp phân tích xu hướng chi phí **ổn định và nhất quán giữa các khu vực**.

---

## 6. Lưu ý nghiệp vụ quan trọng

* ⚠️ Trường hợp **Chi phí cùng kỳ năm trước = 0**, chỉ tiêu không xác định (đã được xử lý bằng `DIVIDE`)
* ⚠️ Chỉ tiêu có thể **dương hoặc âm**
* ⚠️ Phù hợp cho **phân tích xu hướng và so sánh khu vực**
* ⚠️ Không dùng để phân tích biến động chi phí **theo ngày trong tháng**

---


























