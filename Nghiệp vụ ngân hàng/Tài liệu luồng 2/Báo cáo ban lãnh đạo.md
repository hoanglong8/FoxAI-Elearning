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


















