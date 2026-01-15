# Standardized Naming Convention - Quy tắc chuẩn hóa tên tài liệu

Cấu trúc đặt tên file theo nguyên tắc **"Từ lớn đến nhỏ"** (General to Specific) để dễ sắp xếp và tìm kiếm, giúp "bộ não thứ hai" NotebookLM của bạn hoạt động hiệu quả hơn, vì AI cũng dựa vào tên file để định vị ngữ cảnh (context).

```
# 📚 FOXAI NATIVE KNOWLEDGE HUB
Cấu trúc kho tài liệu học tập và nghiên cứu cho dự án FoxAI Native.

## 📂 Sơ đồ tổ chức thư mục

FOXAI-LIBRARY/
│
├── 01_FOUNDATIONS/                 # Kiến thức nền tảng (Toán, Xác suất, CS cơ bản)
│   ├── [FOUNDATION] - [DS] - [GEN] - Mathematics for Machine Learning.pdf
│   └── [FOUNDATION] - [DEV] - [GEN] - Introduction to Algorithms.pdf
│
├── 02_DATA_ENGINEERING/            # Kỹ thuật dữ liệu, Big Data, Cloud, Architecture
│   ├── [DATA-ENG] - [DE] - [GEN] - Designing Data-Intensive Applications.pdf
│   └── [DATA-ENG] - [DE] - [GEN] - The Data Warehouse Toolkit.pdf
│
├── 03_MACHINE_LEARNING_DL/         # Học máy cổ điển, Deep Learning, Data Mining
│   ├── [ML-DL] - [DS] - [GEN] - Data Mining Practical Tools (Witten).pdf
│   ├── [ML-DL] - [DS] - [GEN] - Pattern Recognition and Machine Learning.pdf
│   └── [ML-DL] - [DS] - [FINTECH] - Credit Risk Analytics.pdf
│
├── 04_GENERATIVE_AI_LLM/           # AI tạo sinh, LLMs, RAG, Agents (Trọng tâm FoxAI)
│   ├── [GEN-AI] - [DEV] - [GEN] - LangChain AI Application Development.pdf
│   ├── [GEN-AI] - [BA-PO] - [GEN] - Prompt Engineering for Business.pdf
│   └── [GEN-AI] - [DEV] - [GEN] - Building LLM Apps with CrewAI.pdf
│
├── 05_DOMAIN_KNOWLEDGE/            # Kiến thức nghiệp vụ chuyên ngành
│   ├── FINTECH/
│   │   └── [DOMAIN] - [BA] - [FINTECH] - Digital Banking Strategy.pdf
│   ├── EDUTECH/
│   │   └── [DOMAIN] - [PO] - [EDU] - AI in Education.pdf
│   └── GOV_PUBLIC/
│       └── [DOMAIN] - [BA] - [GOV] - Digital Transformation in Government.pdf
│
└── 06_MANAGEMENT_SOFT_SKILLS/      # Quản trị dự án, Product Management
    ├── [SOFT-SKILL] - [PO] - [GEN] - User Story Mapping.pdf
    └── [SOFT-SKILL] - [MGT] - [GEN] - Inspired: How to Create Tech Products.pdf
```

## 📝 Quy tắc đặt tên (Naming Convention)

Tài liệu được chuẩn hóa tên theo định dạng:
> **`[CATEGORY] - [ROLE] - [DOMAIN] - Tên Sách - Tác giả`**

*(Nếu cuốn sách không thuộc Domain cụ thể, bạn có thể bỏ qua phần Domain)*

## 1. Giải thích các thẻ (Tags)

**A. `[CATEGORY]` (Phân loại):** Dùng để gom nhóm theo tầng kiến thức.

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

* `[FIN]`: Tài chính, Ngân hàng.
* `[GOV]`: Hành chính công (Government).
* `[BUS]`: Doanh nghiệp (Business).
* `[GEN]`: General (Chung, không cụ thể ngành nào).

---

## 2. Ví dụ áp dụng thực tế
Link NotebookLM: https://notebooklm.google.com/notebook/6125fbc1-4999-43c5-9113-9cf645b8d4c1

Với cuốn *Data Mining: Practical Machine Learning Tools and Techniques*, tên file chuẩn sẽ là:

> **`[ML-DL] - [DS] - [GEN] - Data Mining Practical Tools - Ian Witten`**

<img width="1913" height="909" alt="image" src="https://github.com/user-attachments/assets/18ec550f-e4c5-429f-afb6-704088649133" />

**Giải thích:**

* `[ML-DL]`: Vì nó nói về Data Mining và ML.
* `[DS]`: Vì nó nặng về thuật toán, phù hợp cho Data Scientist.
* `[GEN]`: Vì kiến thức này áp dụng chung cho mọi ngành, không riêng gì Bank hay Gov.

---

## 3. Một số ví dụ khác cho kho sách của bạn

**Sách về chiến lược AI cho sếp:**

> `[SOFT-SKILL] - [MGT] - [GEN] - Prediction Machines The Simple Economics of AI - Agrawal`

**Sách về AI trong Ngân hàng:**

> `[ML-DL] - [DS] - [FINTECH] - Machine Learning for Financial Risk Management - Abdullah Karasan`

**Sách về Quản lý sản phẩm (User Story, Agile):**

> `[SOFT-SKILL] - [DA-BA] - [GEN] - User Story Mapping - Jeff Patton`

**Sách về AutoGen/CrewAI (Mới):**

> `[GEN-AI] - [DEV] - [GEN] - Developing Apps with GPT-4 and ChatGPT - Olivier Caelen`

## 4. Tại sao cách đặt tên này hiệu quả trên NotebookLM?

1. **Dễ dàng lọc nguồn (Source Filtering):** Khi bạn vào NotebookLM, danh sách nguồn sẽ tự động sắp xếp theo thứ tự bảng chữ cái. Các file cùng nhóm `[ML-DL]` sẽ nằm cạnh nhau, giúp bạn dễ tick chọn các nguồn liên quan để query.
2. **AI hiểu ngữ cảnh tốt hơn:** Khi bạn hỏi *"Đóng vai một chuyên gia Fintech, hãy tóm tắt..."*, NotebookLM sẽ ưu tiên nhìn vào các file có tag `[FINTECH]` trong tên để lấy thông tin chính xác hơn.
3. **Quản lý phiên bản:** Nếu bạn có sách tái bản, chỉ cần thêm `(v2025)` vào cuối tên file mà không phá vỡ cấu trúc.

---
