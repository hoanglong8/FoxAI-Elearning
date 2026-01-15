## Mục tiêu

Dựa trên tài liệu chuẩn hóa năng lực (Competency Framework) kết hợp với kiến trúc hệ thống **FOX-MIS** của công ty để xây dựng ra **Lộ trình đào tạo (Training Roadmap) dành cho Data Analyst (DA) tại FoxAI**.

Lộ trình này được thiết kế để biến một nhân sự từ "biết làm báo cáo" thành một **"Full-stack DA"** – người vừa vững kỹ thuật, vừa thấu hiểu nghiệp vụ và có tư duy sản phẩm (Product Mindset).

<img width="1000" height="534" alt="image" src="https://github.com/user-attachments/assets/ecbbf21f-b655-4ce9-ad50-a74c3a8ed0cd" />

---

### 🚵 LỘ TRÌNH ĐÀO TẠO DATA ANALYST FOXAI (12 TUẦN)

#### GIAI ĐOẠN 1: FOUNDATION & SYSTEM INTEGRATION (Tuần 1 - 3)

*Mục tiêu: Hiểu văn hóa, nắm vững kiến trúc dữ liệu Fox-MIS và quy chuẩn báo cáo.*

**Tuần 1: Hội nhập & Kiến trúc dữ liệu (The Ecosystem)**

* **Văn hóa & Mindset:**
* Thấm nhuần tư duy **Client-Centric** & **Problem-first**: Không vội vã "nhảy" vào làm dashboard ngay, phải đặt câu hỏi "Tại sao cần báo cáo này?".
* Tìm hiểu về các Domain chính: Fintech, Gov, Business (ERP/SCM).


* **Hệ thống FOX-MIS:**
* Hiểu luồng dữ liệu (Data Lineage) từ L1 (Source) -> L3 (Lakehouse) -> L5 (Consumption).
* Cách sử dụng **Datahub (Data Governance)** để tra cứu Data Dictionary.


* **Công cụ (Toolset Setup):**
* Cài đặt và kết nối: DBeaver (cho SQL), Power BI/Tableau/Looker.
* Quy định bảo mật: Phân quyền truy cập (RBAC), quy tắc che giấu dữ liệu nhạy cảm (PII) trong Gov/Fintech.



**Tuần 2-3: SQL Nâng cao & Data Modeling (The Backbone)**

* **Advanced SQL (trên nền tảng Trino/Presto):**
* Thực hành tối ưu hóa truy vấn trên Big Data (tránh `SELECT *`, xử lý Partition).
* Master các kỹ thuật: `WINDOW FUNCTIONS`, `CTEs`, `Advanced JOINs`, xử lý `JSON/Array` (thường gặp trong Event logs).


* **Data Modeling:**
* Lý thuyết & Thực hành: Xây dựng **Star Schema** & **Snowflake Schema**.
* Hiểu bản chất bảng **Fact** (Sự kiện) vs **Dimension** (Chiều dữ liệu).
* Bài tập: Thiết kế Data Model cho một module nhỏ (ví dụ: Theo dõi giao dịch ngân hàng).



---

#### GIAI ĐOẠN 2: VISUALIZATION & BI MASTERY (Tuần 4 - 7)

*Mục tiêu: Xây dựng Dashboard không chỉ đẹp mà còn "thông minh", tuân thủ quy trình BI Lifecycle.*

**Tuần 4-5: Dashboard Design & UX/UI (The Art)**

* **Nguyên lý thiết kế:**
* Học về **Minimalism**: Loại bỏ "rác" (chart junk) trên biểu đồ.
* Tư duy **Drill-down**: Thiết kế báo cáo tầng lớp (Tổng quan -> Chi tiết -> Raw Data).


* **Thực hành Công cụ BI:**
* Xử lý Dynamic Parameters & Filters.
* Viết các hàm tính toán phức tạp (DAX trong Power BI hoặc LOD trong Tableau).
* Mapping KPI: Chuyển đổi yêu cầu nghiệp vụ (ví dụ: Tỷ lệ rời bỏ - Churn Rate) thành công thức kỹ thuật.



**Tuần 6-7: Quy trình triển khai dự án BI (The Process)**

* **BI Lifecycle thực chiến:**
* Thực hành quy trình: Khảo sát (Requirement) -> Mockup (Figma) -> Build -> Test -> Deploy.
* Viết tài liệu: **Technical Spec** (cấu trúc bảng) và **User Manual** (hướng dẫn sử dụng).


* **Tự động hóa (Automation):**
* Thiết lập lịch làm mới dữ liệu (Scheduled Refresh).
* Cấu hình cảnh báo (Data Alerts) khi chỉ số vượt ngưỡng (ví dụ: Server quá tải, Doanh thu tụt giảm đột ngột).



---

#### GIAI ĐOẠN 3: DOMAIN ANALYTICS & PRODUCT MINDSET (Tuần 8 - 10)

*Mục tiêu: Phân tích sâu, đưa ra Insight có giá trị hành động (Actionable Insight).*

**Tuần 8: Fintech & Business Analytics**

* **Fintech Domain:**
* Phân tích rủi ro tín dụng (Credit Scoring logic).
* Phân tích phát hiện gian lận (Fraud patterns).


* **Business Metrics:**
* Đọc hiểu P&L, Cashflow.
* Phân tích hiệu quả kinh doanh: Customer Lifetime Value (LTV), Customer Acquisition Cost (CAC).



**Tuần 9: Gov & Public Sector Analytics**

* **Đặc thù dữ liệu công:**
* Quy chuẩn báo cáo Chính phủ (nghiêm ngặt về format).
* Phân tích nhân khẩu học và dịch vụ công trực tuyến.


* **Data Quality (DQ):**
* Thực hiện kiểm tra chất lượng dữ liệu (Null check, Outlier detection) cho dữ liệu hành chính.



**Tuần 10: Product Analytics & A/B Testing**

* **Product Mindset:**
* Phân tích **Funnel** (Phễu chuyển đổi) và **Retention** (Tỷ lệ giữ chân).
* Phân tích hành vi người dùng (User Behavior) từ Event Logs.


* **A/B Testing:**
* Hiểu cách thiết kế thí nghiệm, kiểm định thống kê (Statistical Significance) để kết luận tính năng mới có hiệu quả hay không.



---

#### GIAI ĐOẠN 4: AI AUGMENTATION & GRADUATION (Tuần 11 - 12)

*Mục tiêu: Tích hợp sức mạnh AI vào công việc phân tích.*

**Tuần 11: Python & AI Integration**

* **Python for DA:**
* Sử dụng Pandas/Numpy cho EDA (Exploratory Data Analysis) nâng cao.
* Sử dụng thư viện Visualization (Seaborn/Matplotlib) cho các chart mà BI tool không vẽ được.


* **AI Support:**
* Sử dụng **NotebookLM** hoặc **ChatGPT** để hỗ trợ viết SQL, giải thích code, và tóm tắt insight từ dữ liệu thô.
* Hiểu cơ bản về **RAG** để hỗ trợ team AI Engineer chuẩn bị dữ liệu cho Chatbot.



**Tuần 12: Capstone Project & Defense**

* **Đồ án tốt nghiệp:** Thực hiện một dự án "Full-cycle" từ A-Z.
* *Đề bài:* Xây dựng Dashboard điều hành cho dự án FoxAI Native (theo dõi người dùng đăng ký, tỷ lệ eKYC thành công, lỗi hệ thống...).
* *Yêu cầu:* Phải có Mockup, Data Model, Dashboard hoàn chỉnh, Slide phân tích Insight và đề xuất hành động.


* **Đánh giá:** Dựa trên bộ OKRs (KR1.1 -> KR4.4) đã thiết lập.

---

### 📝 BỘ TÀI LIỆU CẦN CHUẨN BỊ CHO KHÓA ĐÀO TẠO

Để roadmap này chạy mượt mà, team  DA cần chuẩn bị sẵn các tài liệu sau (lưu trong NotebookLM để tra cứu):

1. **FoxAI Data Dictionary:** Từ điển định nghĩa các bảng, các trường trong Data Warehouse.
2. **KPI Library:** Danh sách định nghĩa chuẩn của các chỉ số (VD: Cách tính Churn Rate tại FoxAI là gì?).
3. **Dashboard Template:** File mẫu PowerBI/Looker đã có sẵn Theme, Logo, Header/Footer chuẩn của FoxAI.
4. **SQL Cheat Sheet:** Các đoạn code mẫu (Snippet) thường dùng cho hệ thống Fox-MIS.
5. **Checklist Triển khai:** File Excel kiểm tra các bước trước khi bàn giao dashboard cho khách hàng.

