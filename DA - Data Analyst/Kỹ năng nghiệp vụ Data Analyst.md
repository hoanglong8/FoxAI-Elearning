# 📊 Năng lực Data Analyst triển khai dự án BI Dashboard cho khách hàng
## 🎯 Mục tiêu (Objective)
- Phân tích yêu cầu và hiện trạng dữ liệu của khách hàng để thiết kế báo cáo phù hợp
- Xây dựng hệ thống dashboard trực quan, thông minh, hỗ trợ ra quyết định nhanh
- Đảm bảo dữ liệu chính xác, realtime hoặc cập nhật định kỳ ổn định
- Hướng dẫn sử dụng báo cáo, bàn giao & bảo trì vận hành dashboard theo quy chuẩn

## 📚 Phương pháp luận (Lý thuyết cần nắm)
| Chủ đề                         | Nội dung chính                                                     |
| ------------------------------ | ------------------------------------------------------------------ |
| **BI Lifecycle**               | Khảo sát → Thiết kế → Triển khai → Đào tạo → Chuyển giao → Bảo trì |
| **Dimensional Modeling**       | Star schema, Snowflake schema, Slowly Changing Dimension           |
| **ETL/ELT Concepts**           | Data refresh, data source mapping, data mart concepts              |
| **Data Governance**            | Quy tắc bảo mật, phân quyền, kiểm tra chất lượng dữ liệu           |
| **Dashboard Design Principle** | Minimalism, color theory, drill-down logic, layout UX              |
| **KPI & Business Metrics**     | Định nghĩa KPI: tài chính, vận hành, marketing, nhân sự…           |

## 🧠 Tư duy (Mindset)
| Mindset                        | Mô tả                                                              |
| ------------------------------ | ------------------------------------------------------------------ |
| **Client-Centric**             | Phân tích từ góc nhìn người dùng, không chỉ kỹ thuật               |
| **Insightful Design Thinking** | Không chỉ “vẽ dashboard” mà phải hiểu logic business đằng sau      |
| **Chủ động giao tiếp**         | Thường xuyên trao đổi clarify kỳ vọng khách hàng                   |
| **Scalability-first**          | Thiết kế linh hoạt: drill-down, lọc động, phân quyền nhiều vai trò |
| **Tự động hóa & maintainable** | Hạn chế hard-code, tổ chức folder, query dễ maintain               |

## 🧰 Công cụ sử dụng (Toolset)
| Mục tiêu triển khai        | Công cụ thường dùng                                 |
| -------------------------- | --------------------------------------------------- |
| Trích xuất & xử lý dữ liệu | SQL (PostgreSQL, SQL Server), Google Sheets, Python |
| Trực quan hóa & dashboard  | Power BI, Tableau, Google Looker Studio             |
| Thiết kế dashboard UX/UI   | Figma (mockup), Notion (prototype)                  |
| Tài liệu & quy trình       | Google Docs, Confluence, Notion, Excel spec mapping |
| Quản lý dự án              | Jira, Trello, Notion, Git (cho versioning template) |

## 🛠 Kỹ năng cần có (Skillset)
### 🧩 Kỹ năng kỹ thuật (Technical Skill)
- Thành thạo SQL: JOIN, CTE, window function, xử lý dữ liệu đa nguồn
- Thành thạo ít nhất 1 công cụ BI (Power BI/Tableau/Looker), hiểu cách xây dựng model, visual, DAX/LOD
- Thiết kế schema star/snowflake, hiểu khái niệm Fact – Dim – Date
- Làm chủ logic Drill-down, Filter, Dynamic Parameter
- Biết tích hợp nguồn dữ liệu: Excel, Google Sheet, Database, API
- Nắm vững nguyên tắc cập nhật dữ liệu: Scheduled refresh, live data, incremental

### 🧠 Kỹ năng nghiệp vụ (Business Skill)
- Đọc hiểu biểu mẫu/kpi khách hàng (P&L, báo cáo bán hàng, tồn kho, năng suất,…)
- Khả năng phân tích logic nghiệp vụ → chuyển thành chỉ số đo lường
- Biết viết quy ước báo cáo: data dictionary, KPI mapping
- Kỹ năng trình bày & thuyết trình dashboard cho khách hàng
- Viết tài liệu hướng dẫn sử dụng (manual, training slide)

## 📥 Thông tin đầu vào cần có (Tiêu chuẩn)
| Đầu vào cần thiết                       | Mục đích sử dụng                       |
| --------------------------------------- | -------------------------------------- |
| Danh sách KPI hoặc báo cáo cần xây dựng | Định nghĩa scope & nội dung dashboard  |
| Mẫu báo cáo cũ (Excel, PDF)             | Mapping sang layout dashboard hiện đại |
| Access vào nguồn dữ liệu gốc            | Trích xuất, tiền xử lý, cấu trúc bảng  |
| Danh sách người dùng & vai trò          | Phân quyền sử dụng dashboard           |
| Lịch cập nhật dữ liệu                   | Thiết lập schedule & refresh mechanism |

## 📤 Kết quả đầu ra (Format)
| Output                      | Diễn giải                                                      |
| --------------------------- | -------------------------------------------------------------- |
| Dashboard chính thức        | Link dashboard công khai hoặc private dùng nội bộ              |
| Tài liệu mapping KPI        | File mapping logic – trường dữ liệu – nguồn dữ liệu            |
| Training slide & manual     | Slide hướng dẫn sử dụng + file hướng dẫn chi tiết              |
| File cấu hình & template    | File `.pbix`, `.twbx`, Looker Template đã tổ chức folder/table |
| Tài liệu bàn giao & bảo trì | Checklist + hướng dẫn clone, restore, cập nhật dashboard       |

## 🌀 Theo từng giai đoạn triển khai
| Giai đoạn                         | Vai trò và nhiệm vụ của DA                                             |
| --------------------------------- | ---------------------------------------------------------------------- |
| **1. Khảo sát hiện trạng**        | Làm việc với khách hàng thu thập KPI, biểu mẫu, luồng dữ liệu          |
| **2. Thiết kế hệ thống**          | Thiết kế schema, xác định nguồn dữ liệu, mockup dashboard layout       |
| **3. Triển khai & xử lý dữ liệu** | Viết SQL/ETL, chuẩn hoá bảng Fact/Dim, thiết lập dashboard & biểu đồ   |
| **4. Đào tạo người dùng**         | Hướng dẫn dùng dashboard, giải thích logic, làm slide hướng dẫn        |
| **5. Chuyển giao & Go-Live**      | Bàn giao dashboard, mapping file, hướng dẫn refresh, test phân quyền   |
| **6. Bảo hành & bảo trì**         | Theo dõi lỗi dashboard, hỗ trợ khi source thay đổi, tối ưu lại biểu đồ |

- Tạo file checklist triển khai BI dashboard (Excel/Notion)
- Viết slide training mẫu theo template FoxAI
- Cung cấp thư viện component biểu đồ cho Power BI/Tableau/Looker

---
# 📈 OKRs cho Data Analyst tại FoxAI
## 🎯 Objective 1: Cung cấp phân tích dữ liệu hỗ trợ ra quyết định sản phẩm chính xác và kịp thời
| Key Result | Mục tiêu đo lường cụ thể                                                           |
| ---------- | ---------------------------------------------------------------------------------- |
| KR1.1      | Hoàn thành ≥ 95% yêu cầu phân tích từ PO/PM đúng deadline đã cam kết               |
| KR1.2      | Phân tích ≥ 4 insight có ảnh hưởng đến quyết định sản phẩm/thay đổi logic hệ thống |
| KR1.3      | Mỗi báo cáo phân tích có ≥ 1 đề xuất hành động (actionable recommendation) cụ thể  |
| KR1.4      | Được PO/PM đánh giá trung bình ≥ 8/10 về chất lượng phân tích trong quý            |

## 🎯 Objective 2: Xây dựng và duy trì dashboard báo cáo trực quan hỗ trợ vận hành và ra quyết định
| Key Result | Mục tiêu đo lường cụ thể                                                                  |
| ---------- | ----------------------------------------------------------------------------------------- |
| KR2.1      | Thiết lập hoặc tối ưu ≥ 3 dashboard vận hành/kết quả (Retention, Usage, Conversion, v.v.) |
| KR2.2      | Đảm bảo ≥ 95% dashboard có dữ liệu cập nhật đúng lịch trình (daily, weekly, monthly)      |
| KR2.3      | Tài liệu hóa ≥ 90% các trường thông tin và logic tính toán trên dashboard                 |
| KR2.4      | Dashboard có ≥ 30 lượt truy cập/tháng từ stakeholder liên quan (CEO, PO, Sales...)        |

## 🎯 Objective 3: Nâng cao chất lượng phân tích bằng chuẩn hóa, tự động hóa và phát triển kỹ thuật
| Key Result | Mục tiêu đo lường cụ thể                                                                          |
| ---------- | ------------------------------------------------------------------------------------------------- |
| KR3.1      | Viết ≥ 2 SQL template hoặc notebook phân tích có thể tái sử dụng                                  |
| KR3.2      | Tự động hóa ≥ 2 báo cáo định kỳ (bằng Power BI, Python, Google Looker,...)                        |
| KR3.3      | Triển khai kiểm tra chất lượng dữ liệu (null check, outlier detection) cho ≥ 80% bảng phân tích   |
| KR3.4      | Đóng góp ≥ 1 ý tưởng hoặc công cụ giúp tăng hiệu suất phân tích hoặc cải thiện chất lượng dữ liệu |

## 🎯 Objective 4: Nâng cao kỹ năng và đóng góp tri thức trong cộng đồng nội bộ
| Key Result | Mục tiêu đo lường cụ thể                                                                |
| ---------- | --------------------------------------------------------------------------------------- |
| KR4.1      | Tham gia hoặc hoàn thành ≥ 1 khóa học kỹ năng phân tích (SQL nâng cao, A/B testing,...) |
| KR4.2      | Trình bày ≥ 1 buổi chia sẻ nội bộ hoặc viết ≥ 1 bài viết kỹ thuật/nghiệp vụ trên Notion |
| KR4.3      | Hỗ trợ mentor/đồng nghiệp junior/newcomer trong ≥ 2 task/phân tích                      |
| KR4.4      | Được đánh giá teamwork ≥ 8/10 từ các bên liên quan (DA team, PO, Developer)             |

## Ghi chú triển khai
- Áp dụng cho chu kỳ đánh giá quý (3 tháng)
- Có thể gắn với Jira/Notion/Google Sheet để theo dõi tiến độ
- Dễ mở rộng thành career roadmap hoặc làm baseline đánh giá thăng cấp từ Fresher → Junior → Middle → Senior
