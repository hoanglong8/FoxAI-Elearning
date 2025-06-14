# 🧪 QA/QC/Tester – Chuẩn nghiệp vụ theo SDLC tại FoxAI
## 🎯 Mục tiêu
- Đảm bảo chất lượng phần mềm được kiểm soát và đo lường rõ ràng
- Phát hiện và ghi nhận lỗi/bug sớm nhất có thể với chi phí sửa thấp nhất
- Cải thiện trải nghiệm người dùng cuối thông qua kiểm thử toàn diện
- Góp phần duy trì chu kỳ phát hành ổn định, an toàn và không bị vỡ kế hoạch

## 📚 Phương pháp luận (Lý thuyết cần nắm)
| Lĩnh vực               | Lý thuyết / Framework cốt lõi                            |
| ---------------------- | -------------------------------------------------------- |
| **Kiểm thử phần mềm**  | ISTQB, SDLC, STLC, V-model                               |
| **Chiến lược test**    | Test Pyramid, Risk-based testing, Exploratory Testing    |
| **Phân loại test**     | Functional, Regression, Smoke, UAT, Load, Security Test  |
| **Thiết kế test case** | Boundary Value Analysis, Equivalence Partitioning        |
| **QA Agile**           | Shift-left testing, Continuous Testing (DevOps), TDD/BDD |

## 🧠 Tư duy (Mindset)
| Mindset                   | Mô tả                                                        |
| ------------------------- | ------------------------------------------------------------ |
| **Quality-first**         | Luôn đặt tiêu chí chất lượng lên hàng đầu, từ sớm đến muộn   |
| **Detail-oriented**       | Nhạy bén với lỗi nhỏ, hành vi bất thường, edge case          |
| **Risk-awareness**        | Ưu tiên kiểm thử những điểm có rủi ro cao trước              |
| **Curious & Explorative** | Không chỉ test theo script, mà còn khám phá theo cảm nhận UX |
| **Team-integrated**       | Làm việc chặt chẽ với Dev, BA, PO thay vì đứng ngoài         |

## 🧰 Công cụ sử dụng (Toolset)
| Mục đích                        | Công cụ cụ thể tại FoxAI hoặc phổ biến tương đương |
| ------------------------------- | -------------------------------------------------- |
| **Quản lý test case & bug**     | Jira, TestRail, Zephyr, Xray                       |
| **Giao tiếp & tài liệu**        | Slack, Notion, Google Docs, Confluence             |
| **Ghi lại màn hình / chụp lỗi** | Loom, Lightshot, OBS, Snagit                       |
| **Kiểm thử API**                | Postman, Insomnia                                  |
| **Kiểm thử UI tự động**         | Selenium, Cypress, Playwright                      |
| **Load/Stress testing**         | JMeter, k6                                         |
| **CI/CD testing**               | GitLab CI, Jenkins, Allure Report                  |

## 🛠 Kỹ năng cần có (Skillset)
### 📌 Kỹ năng cứng
- Viết test case, test scenario, test plan
- Đọc hiểu và tạo được bug report chi tiết, dễ hiểu
- Kiểm thử UI (manual), API (Postman), database (query kiểm tra dữ liệu)
- Thiết lập môi trường kiểm thử: staging/test/UAT
- Biết viết testcase dựa trên yêu cầu từ PRD/BA/User Story
- Biết phân biệt bug logic, UI, performance, compatibility, security

### 💬 Kỹ năng mềm
- Giao tiếp rõ ràng, logic với Dev/PO/BA
- Thuyết phục khi cần bảo vệ lỗi nghiêm trọng
- Chủ động phát hiện issue chưa được ghi nhận
- Cẩn thận, kiên nhẫn, tỉ mỉ
- Quản lý thời gian kiểm thử trong Sprint hoặc dưới áp lực release

## 📥 Thông tin đầu vào cần có (Tiêu chuẩn)
| Đầu vào                          | Vai trò trong quy trình kiểm thử                               |
| -------------------------------- | -------------------------------------------------------------- |
| User story / Acceptance Criteria | Cơ sở viết test case đúng tính năng & điều kiện chấp nhận      |
| PRD / BRD / Prototype            | Tài liệu phân tích logic, hỗ trợ thiết kế test case UI & logic |
| API spec (Swagger/Postman)       | Kiểm thử API request/response & xử lý lỗi backend              |
| DB schema / dữ liệu mẫu          | So sánh kết quả thực tế và giá trị backend trả về              |
| Sprint board (Jira/Trello)       | Biết trạng thái issue, gán testcase phù hợp                    |

## 📤 Kết quả đầu ra (Format)
| Tài liệu / Artefact          | Mục đích sử dụng                                              |
| ---------------------------- | ------------------------------------------------------------- |
| ✅ **Test Plan**              | Mô tả phạm vi, mục tiêu, chiến lược kiểm thử dự án            |
| ✅ **Test Case**              | Các bước test cụ thể, input/output, trạng thái mong đợi       |
| ✅ **Bug Report**             | Mô tả chi tiết lỗi: mô tả, bước tái hiện, severity, ảnh/video |
| ✅ **Test Summary Report**    | Tổng kết bug theo trạng thái, tỷ lệ pass/fail của testcase    |
| ✅ **Checklist Regression**   | Kiểm thử lại các tính năng cũ mỗi lần có release              |
| ✅ **UAT support / sign-off** | Tài liệu bàn giao cho team business test hoặc production      |

## 🔄 Theo từng giai đoạn SDLC
| Giai đoạn       | Trách nhiệm QA đi kèm                                  |
| --------------- | ------------------------------------------------------ |
| **Requirement** | Review story, góp ý độ rõ ràng của acceptance criteria |
| **Design**      | Tham gia góp ý UI/UX, viết test scenario sớm           |
| **Development** | Viết test case, kiểm thử song song, báo bug liên tục   |
| **Testing**     | Thực hiện test case, regression, API test              |
| **Release**     | Smoke test, verify build, test dữ liệu sau release     |
| **Maintenance** | Ghi nhận bug sản phẩm thực tế, hỗ trợ kiểm tra fix     |

---
# ✅ OKRs dành cho QA/QC/Tester – FoxAI
## 🎯 Objective 1: Đảm bảo kiểm thử toàn diện và đúng tiến độ trong mỗi chu kỳ phát triển
| Key Result | Mục tiêu đo lường cụ thể                                                     |
| ---------- | ---------------------------------------------------------------------------- |
| KR1.1      | Viết và thực hiện **≥ 95% test case** cho mỗi tính năng trong sprint         |
| KR1.2      | Hoàn thành kiểm thử (test execution) **trước deadline release ≥ 90% sprint** |
| KR1.3      | Có **0 bug blocker lọt qua production** trong các bản release                |
| KR1.4      | Tối thiểu **1 lần review test case/story refinement mỗi tuần với PO/Dev/BA** |

## 🎯 Objective 2: Tăng độ tin cậy của sản phẩm qua kiểm thử hồi quy và tự động
| Key Result | Mục tiêu đo lường cụ thể                                                           |
| ---------- | ---------------------------------------------------------------------------------- |
| KR2.1      | Xây dựng hoặc cập nhật **tối thiểu 1 bộ regression checklist đầy đủ** trong quý    |
| KR2.2      | Tối thiểu **50% tính năng cốt lõi** được kiểm thử tự động (nếu applicable)         |
| KR2.3      | Tích hợp test auto hoặc smoke test vào **pipeline CI/CD (staging)** cho 100% build |
| KR2.4      | Tỷ lệ lỗi được phát hiện sớm (trước release) ≥ **95% bug thực tế ghi nhận**        |

## 🎯 Objective 3: Giao tiếp rõ ràng, phản hồi nhanh và phối hợp hiệu quả trong team
| Key Result | Mục tiêu đo lường cụ thể                                                        |
| ---------- | ------------------------------------------------------------------------------- |
| KR3.1      | Trả lời các câu hỏi từ Dev/PO liên quan đến bug/test trong **< 24h**            |
| KR3.2      | Viết **100% bug report** đúng template, có mô tả, bước tái hiện, mức độ ưu tiên |
| KR3.3      | Tham gia **≥ 90% daily meeting, review, retrospective** trong sprint            |
| KR3.4      | Được đánh giá mức độ phối hợp từ Dev/PO/PM ≥ **8/10** trong khảo sát nội bộ     |

## 🎯 Objective 4: Nâng cao năng lực kiểm thử và cải tiến quy trình QA tại FoxAI
| Key Result | Mục tiêu đo lường cụ thể                                                        |
| ---------- | ------------------------------------------------------------------------------- |
| KR4.1      | Tham gia **≥ 1 buổi đào tạo QA nội bộ hoặc workshop bên ngoài mỗi quý**         |
| KR4.2      | Đề xuất hoặc xây dựng **≥ 1 cải tiến về quy trình test hoặc công cụ** mỗi quý   |
| KR4.3      | Góp phần chuẩn hóa hoặc cải thiện **template test case, bug report, test plan** |
| KR4.4      | Viết **tối thiểu 1 bài chia sẻ nội bộ hoặc bài hướng dẫn test tool/technique**  |

## 🎯 Objective 5: Đảm bảo trải nghiệm người dùng qua kiểm thử giao diện và UAT
| Key Result | Mục tiêu đo lường cụ thể                                                                  |
| ---------- | ----------------------------------------------------------------------------------------- |
| KR5.1      | Tối thiểu **1 lần kiểm thử tương thích (cross-browser/cross-device)** cho mỗi bản release |
| KR5.2      | Hỗ trợ **100% buổi UAT với stakeholder/client khi có yêu cầu**                            |
| KR5.3      | Tổng hợp được **≥ 80% feedback UAT vào backlog để xử lý sớm**                             |
| KR5.4      | Phân tích được **≥ 2 lỗi UI/UX nghiêm trọng phát hiện từ tester mỗi quý**                 |

📌 Hướng dẫn triển khai OKRs trong team QA tại FoxAI
- Mỗi OKR có thể dùng cho 1 quý (3 tháng) hoặc theo milestone release sản phẩm
- Theo dõi bằng Notion, Jira Dashboard hoặc Google Sheets
- Có thể dùng để đánh giá năng lực theo kỳ và đề xuất nâng lương/thưởng
