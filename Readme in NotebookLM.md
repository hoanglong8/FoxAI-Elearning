# Standardized Naming Convention - Nguyên tắc chuẩn hóa tên tài liệu

Cấu trúc đặt tên file theo nguyên tắc **"Từ lớn đến nhỏ"** (General to Specific) để dễ sắp xếp và tìm kiếm, giúp "bộ não thứ hai" NotebookLM của bạn hoạt động hiệu quả hơn, vì AI cũng dựa vào tên file để định vị ngữ cảnh (context).

### Công thức đặt tên file chuẩn:

> **`[PHÂN_LOẠI] - [ROLE] - [DOMAIN] - Tên Sách - Tác giả`**

*(Nếu cuốn sách không thuộc Domain cụ thể, bạn có thể bỏ qua phần Domain)*

---

### 1. Chi tiết các thành phần trong tên file

**A. `[PHÂN_LOẠI]` (Category/Level):** Dùng để gom nhóm theo tầng kiến thức.

* `[FOUNDATION]`: Kiến thức nền tảng (Toán, Xác suất, Basic CS).
* `[ML-DL]`: Machine Learning, Deep Learning, Data Mining.
* `[GEN-AI]`: LLMs, ChatGPT, Prompt Engineering.
* `[DATA-ENG]`: Big Data, SQL, Cloud, Architecture.
* `[SOFT-SKILL]`: Quản lý, Tư duy, Agile, Leadership.

**B. `[ROLE]` (Target Audience):** Dùng để biết sách này phục vụ ai trong team.

* `[DS]`: Data Scientist.
* `[DE]`: Data Engineer.
* `[DA-BA]`: Data Analyst / Business Analyst / PO.
* `[DEV]`: Software Developer/Engineer.
* `[MGT]`: Management (C-level, Manager).

**C. `[DOMAIN]` (Ứng dụng):** Dùng để biết sách áp dụng cho ngành nào.

* `[FINTECH]`: Tài chính, Ngân hàng.
* `[GOV]`: Hành chính công (Government).
* `[BUS]`: Doanh nghiệp (Business).
* `[GEN]`: General (Chung, không cụ thể ngành nào).

---

### 2. Ví dụ áp dụng thực tế (với cuốn sách bạn vừa hỏi)

Với cuốn *Data Mining: Practical Machine Learning Tools and Techniques*, tên file chuẩn sẽ là:

> **`[ML-DL] - [DS] - [GEN] - Data Mining Practical Tools - Ian Witten`**

**Giải thích:**

* `[ML-DL]`: Vì nó nói về Data Mining và ML.
* `[DS]`: Vì nó nặng về thuật toán, phù hợp cho Data Scientist.
* `[GEN]`: Vì kiến thức này áp dụng chung cho mọi ngành, không riêng gì Bank hay Edu.

---

### 3. Một số ví dụ khác cho kho sách của bạn

**Sách về chiến lược AI cho sếp:**

> `[SOFT-SKILL] - [MGT] - [GEN] - Prediction Machines The Simple Economics of AI - Agrawal`

**Sách về AI trong Ngân hàng:**

> `[ML-DL] - [DS] - [FINTECH] - Machine Learning for Financial Risk Management - Abdullah Karasan`

**Sách về Quản lý sản phẩm (User Story, Agile):**

> `[SOFT-SKILL] - [DA-BA] - [GEN] - User Story Mapping - Jeff Patton`

**Sách về AutoGen/CrewAI (Mới):**

> `[GEN-AI] - [DEV] - [GEN] - Developing Apps with GPT-4 and ChatGPT - Olivier Caelen`

### 4. Tại sao cách đặt tên này hiệu quả trên NotebookLM?

1. **Dễ dàng lọc nguồn (Source Filtering):** Khi bạn vào NotebookLM, danh sách nguồn sẽ tự động sắp xếp theo thứ tự bảng chữ cái. Các file cùng nhóm `[ML-DL]` sẽ nằm cạnh nhau, giúp bạn dễ tick chọn các nguồn liên quan để query.
2. **AI hiểu ngữ cảnh tốt hơn:** Khi bạn hỏi *"Đóng vai một chuyên gia Fintech, hãy tóm tắt..."*, NotebookLM sẽ ưu tiên nhìn vào các file có tag `[FINTECH]` trong tên để lấy thông tin chính xác hơn.
3. **Quản lý phiên bản:** Nếu bạn có sách tái bản, chỉ cần thêm `(v2025)` vào cuối tên file mà không phá vỡ cấu trúc.

---
