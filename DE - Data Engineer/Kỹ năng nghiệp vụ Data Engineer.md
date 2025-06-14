# 🧱 Data Engineer tại FoxAI – Chuẩn nghiệp vụ trong vòng đời phát triển phần mềm
## 🎯 Mục tiêu
- Thiết kế, xây dựng và duy trì hệ thống dữ liệu đáng tin cậy, linh hoạt, mở rộng được
- Đảm bảo dữ liệu luôn chính xác, cập nhật và sẵn sàng cho phân tích, ML/AI hoặc dashboard
- Là cầu nối kỹ thuật giữa nguồn dữ liệu thô và giá trị dữ liệu phân tích/hành động
- Tối ưu hóa hiệu năng lưu trữ, pipeline xử lý và chi phí vận hành dữ liệu

## 📚 Phương pháp luận (Lý thuyết hiện tại cần nắm)
| Chủ đề                     | Lý thuyết / Framework chính cần nắm                                        |
| -------------------------- | -------------------------------------------------------------------------- |
| **Kiến trúc dữ liệu**      | Lambda Architecture, Kappa Architecture, Data Mesh, Data Lake vs Warehouse |
| **Thiết kế hệ thống**      | ELT/ETL Pipelines, Data Modelling (Star/Snowflake Schema), CDC             |
| **Dữ liệu chất lượng cao** | Data Quality Framework, Data Validation, Observability                     |
| **Quản trị dữ liệu**       | Data Governance, Metadata, Lineage (GDPR compliance nếu cần)               |
| **CI/CD cho dữ liệu**      | DataOps, DAG versioning, dbt practices                                     |

## 🧠 Tư duy (Mindset)
| Mindset                           | Diễn giải cụ thể                                                      |
| --------------------------------- | --------------------------------------------------------------------- |
| **Data-as-a-product**             | Dữ liệu là sản phẩm cần được kiểm soát chất lượng & khả năng tiêu thụ |
| **Automation-first**              | Ưu tiên tự động hóa thay vì xử lý thủ công hoặc one-off               |
| **Scalability & Maintainability** | Mọi pipeline phải scale được và dễ bảo trì                            |
| **Security-by-default**           | Dữ liệu cần được bảo vệ từ thiết kế ban đầu (masking, encryption...)  |
| **Collaboration-ready**           | Dữ liệu phải rõ ràng, có tài liệu và dễ dùng với Data Analyst, ML,... |

## 🧰 Công cụ sử dụng (Toolset)
| Mục đích                     | Công cụ phổ biến tại FoxAI hoặc tương đương              |
| ---------------------------- | -------------------------------------------------------- |
| **Orchestration**            | Apache Airflow, Prefect, Dagster                         |
| **Data pipeline/ELT**        | dbt, Luigi, Fivetran, custom Python/SQL pipeline         |
| **Query engine / SQL layer** | PostgreSQL, BigQuery, Trino/Presto, SparkSQL             |
| **Data lake/warehouse**      | S3 + Athena, Snowflake, Google BigQuery                  |
| **Streaming**                | Apache Kafka, Spark Structured Streaming, Flink          |
| **Monitoring/Validation**    | Great Expectations, Evidently AI, Datafold               |
| **Infra as Code (IaC)**      | Terraform, Docker, Kubernetes (basic setup cho pipeline) |
| **DevOps for data**          | GitLab CI, dbt Cloud, Airflow + GitOps                   |

## 🛠 Kỹ năng cần có (Skillset)
### 📌 Kỹ năng cứng
- Thành thạo viết SQL tối ưu hóa hiệu suất, sử dụng partition, CTE, window function
- Thành thạo Python (Pandas, PySpark, xử lý batch/stream)
- Xây dựng và vận hành ETL/ELT pipelines linh hoạt, kiểm soát version
- Thiết kế schema dạng star/snowflake, tối ưu cho phân tích/dashboards
- Làm việc tốt với job scheduler (Airflow/Dagster)
- Tích hợp dữ liệu từ nhiều nguồn: API, database, file, real-time stream
- Hiểu căn bản về bảo mật dữ liệu, masking, encryption, RBAC

### 💬 Kỹ năng mềm
- Giao tiếp rõ ràng với PO, DA, PM về yêu cầu dữ liệu, schema, logic
- Viết tài liệu pipeline, bảng, flow rõ ràng để team khác hiểu và dùng lại
- Làm việc chủ động, phản biện khi thấy pipeline kém hiệu quả
- Làm việc độc lập nhưng phối hợp hiệu quả trong các squad Agile

## 📥 Thông tin đầu vào cần có (Tiêu chuẩn)
| Đầu vào                      | Vai trò trong quá trình thiết kế & xây dựng dữ liệu                  |
| ---------------------------- | -------------------------------------------------------------------- |
| Yêu cầu phân tích từ DA/PO   | Định hướng nguồn dữ liệu, transformation logic                       |
| ERD / Database Schema        | Thiết kế schema mới hoặc hiểu hệ thống cũ để làm pipeline            |
| Yêu cầu báo cáo/dashboards   | Biết dữ liệu cần support cho dashboard nào, KPI gì                   |
| Yêu cầu xử lý theo thời gian | Xác định cần xử lý theo batch, streaming hay real-time               |
| Ràng buộc pháp lý            | Đảm bảo các pipeline tuân thủ yêu cầu dữ liệu nhạy cảm hoặc riêng tư |

## 📤 Kết quả đầu ra (Format)
| Đầu ra                       | Mô tả cụ thể                                                  |
| ---------------------------- | ------------------------------------------------------------- |
| ✅ Data Pipeline (code & DAG) | Có version, retry logic, alerting                             |
| ✅ Clean Table (dim/fact)     | Được normalize hoặc denormalize hợp lý, có indexing/partition |
| ✅ Data Dictionary            | Mô tả field/table/schema để team khác hiểu & tái sử dụng      |
| ✅ Data Quality Report        | Tỷ lệ null, duplicate, check constraint cho bảng đã transform |
| ✅ Documentation              | File Markdown/Notion mô tả pipeline, dependency, config       |
| ✅ Tích hợp với Dashboard/BI  | Dữ liệu kết nối được tới Power BI, Metabase, Superset,...     |

## 🔄 Theo từng giai đoạn SDLC
| Giai đoạn SDLC  | Vai trò của Data Engineer                                   |
| --------------- | ----------------------------------------------------------- |
| **Requirement** | Làm việc với PO/DA để xác định data source, latency yêu cầu |
| **Design**      | Thiết kế pipeline, schema logic, partitioning, mapping      |
| **Development** | Viết pipeline (Python, SQL, dbt), test dữ liệu, chuẩn hóa   |
| **Testing**     | Validate output (schema, logic, data quality)               |
| **Release**     | Deploy lên Airflow/Scheduler, thiết lập monitor & alerting  |
| **Operation**   | Fix lỗi, nâng cấp pipeline, tối ưu cost & performance       |

---
# 🧱 OKRs cho Data Engineer tại FoxAI (Chuẩn đánh giá nội bộ)
## 🎯 Objective 1: Thiết kế và vận hành hệ thống pipeline dữ liệu chính xác, tin cậy và hiệu suất cao
| Key Result | Mục tiêu đo lường cụ thể                                                                     |
| ---------- | -------------------------------------------------------------------------------------------- |
| KR1.1      | Xây dựng hoặc tối ưu **tối thiểu 3 pipeline** dữ liệu batch hoặc stream đạt SLA ≥ 99%        |
| KR1.2      | Đảm bảo **≥ 98% bảng dữ liệu chính** có kiểm soát null, duplicate, và schema validation      |
| KR1.3      | Tối ưu **≥ 20% hiệu năng xử lý hoặc chi phí lưu trữ** so với bản cũ (query hoặc job runtime) |
| KR1.4      | Thiết lập **monitor & alert** cho 100% job quan trọng (Airflow, logs, retry logic)           |

## 🎯 Objective 2: Chuẩn hóa và tự động hóa việc tích hợp dữ liệu cho các team khác
| Key Result | Mục tiêu đo lường cụ thể                                                                 |
| ---------- | ---------------------------------------------------------------------------------------- |
| KR2.1      | Triển khai **≥ 1 mô hình ELT với dbt hoặc pipeline reusable** dùng chung cho team DA/ML  |
| KR2.2      | Xây dựng hoặc cập nhật **Data Dictionary** cho 100% bảng trong data mart/datalake        |
| KR2.3      | Giao tiếp định kỳ với team DA/PO để làm rõ **100% mapping logic** trước khi build schema |
| KR2.4      | Hỗ trợ **≥ 2 tích hợp dashboard hoặc model ML sử dụng dữ liệu từ pipeline DE cung cấp**  |

## 🎯 Objective 3: Đảm bảo bảo mật và tuân thủ dữ liệu trong quá trình xử lý
| Key Result | Mục tiêu đo lường cụ thể                                                                     |
| ---------- | -------------------------------------------------------------------------------------------- |
| KR3.1      | Áp dụng **masking/encryption** cho 100% bảng chứa dữ liệu nhạy cảm (PII, tài chính,...)      |
| KR3.2      | Viết log/audit trail cho **100% job liên quan đến dữ liệu quan trọng**                       |
| KR3.3      | Kiểm tra & xác minh **metadata lineage** và chủ sở hữu dữ liệu cho toàn bộ schema triển khai |
| KR3.4      | Đảm bảo **0 incident dữ liệu vi phạm bảo mật hoặc rò rỉ trong quý**                          |

## 🎯 Objective 4: Nâng cao kỹ năng và chia sẻ kiến thức kỹ thuật trong team dữ liệu
| Key Result | Mục tiêu đo lường cụ thể                                                                  |
| ---------- | ----------------------------------------------------------------------------------------- |
| KR4.1      | Tham gia hoặc hoàn thành **≥ 1 khóa học chuyên sâu (BigQuery, dbt, Kafka,...) trong quý** |
| KR4.2      | Viết hoặc trình bày **≥ 1 bài chia sẻ nội bộ** về best practice hoặc tool/pipeline đã làm |
| KR4.3      | Tham gia **≥ 90% buổi review hoặc planning của team DE/DA/ML**                            |
| KR4.4      | Được **rating ≥ 8/10 từ các bên liên quan** (DA, ML, PO) về chất lượng dữ liệu cung cấp   |

## 🎯 Objective 5: Đóng góp vào cải tiến kiến trúc và quy trình dữ liệu tại FoxAI
| Key Result | Mục tiêu đo lường cụ thể                                                                   |
| ---------- | ------------------------------------------------------------------------------------------ |
| KR5.1      | Đề xuất hoặc triển khai **≥ 1 cải tiến về kiến trúc (lưu trữ, phân vùng, xử lý)** mỗi quý  |
| KR5.2      | Xây dựng hoặc cập nhật **template pipeline, logging, CI/CD script dùng chung**             |
| KR5.3      | Góp phần hoàn thiện hoặc refactor **≥ 1 domain dữ liệu lớn theo hướng modular & scalable** |
| KR5.4      | Tham gia đánh giá (code review / kiến trúc) cho **≥ 2 pipeline của thành viên khác**       |

📌 Ghi chú triển khai nội bộ
- Áp dụng cho chu kỳ đánh giá quý (3 tháng)
- Có thể theo dõi trên Notion, Google Sheet, hoặc hệ thống OKR nội bộ
- Có thể tuỳ biến theo team product/AI/enterprise
- Kết hợp với hệ thống Career Ladder để đánh giá thăng cấp
