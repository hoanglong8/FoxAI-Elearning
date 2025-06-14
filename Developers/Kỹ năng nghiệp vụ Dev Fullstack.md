# 🧑‍💻 Năng lực Fullstack Developer trong dự án phần mềm AI tại FoxAI
## 🎯 Mục tiêu (Objective)
- Xây dựng hệ thống phần mềm AI hoàn chỉnh: từ API, xử lý dữ liệu, tích hợp mô hình AI đến giao diện người dùng.
- Đảm bảo hiệu năng, bảo mật, khả năng mở rộng của cả backend và frontend.
- Tương tác chặt với AI team, Data team và UI/UX để triển khai MVP nhanh, đúng và có thể đo lường hiệu quả.

## 📚 Phương pháp luận (Lý thuyết cần nắm)
| Lĩnh vực                      | Nội dung cần nắm vững                                                               |
| ----------------------------- | ----------------------------------------------------------------------------------- |
| **Kiến trúc phần mềm AI**     | Microservice, RESTful API, event-driven, model-as-a-service                         |
| **Software Lifecycle (SDLC)** | Agile, CI/CD, Git-flow, code review practice                                        |
| **AI integration**            | Cách tích hợp model AI vào hệ thống: qua API, dockerized service, inference gateway |
| **Backend best practices**    | Clean Architecture, SOLID, Authentication & Authorization                           |
| **Frontend pattern**          | Component-based architecture (React/Vue), State Management, SPA/PWA                 |
| **Bảo mật**                   | OWASP, JWT, CORS, rate limit, input sanitization                                    |

## 🧠 Tư duy (Mindset)
| Mindset                       | Mô tả                                                                |
| ----------------------------- | -------------------------------------------------------------------- |
| **AI-first thinking**         | Luôn hiểu dữ liệu/mô hình AI sẽ được dùng ở đâu trong hệ thống       |
| **Modular hóa**               | Thiết kế dễ mở rộng, maintain từng phần độc lập (AI module, UI, API) |
| **User-centered**             | Frontend phải giúp hiểu & kiểm soát đầu ra AI dễ dàng                |
| **Fail-safe mindset**         | AI model có thể lỗi → hệ thống phải có default case/fallback         |
| **Agile & rapid prototyping** | Ưu tiên release nhanh, test feedback, cải tiến liên tục              |

## 🧰 Công cụ sử dụng (Toolset)
| Mục đích                 | Công cụ phổ biến                                         |
| ------------------------ | -------------------------------------------------------- |
| **Backend/API**          | Node.js (NestJS), Python (FastAPI), ExpressJS, .NET Core |
| **Frontend**             | ReactJS, VueJS, TailwindCSS, Chart.js, Next.js           |
| **AI Model Integration** | OpenAI API, Huggingface Inference, Docker, REST/gRPC     |
| **DevOps**               | Git, GitHub Actions, Docker, CI/CD pipelines, NGINX      |
| **Database**             | PostgreSQL, MongoDB, Redis, Prisma/TypeORM/Mongoose      |
| **Auth/Security**        | JWT, OAuth2, Passport.js, Bcrypt, CORS config            |

## 🛠 Kỹ năng cần có (Skillset)
### 🔧 Backend
Thiết kế và phát triển RESTful API hoặc GraphQL

Tạo hệ thống xử lý request cho inference AI models (stream hoặc async)

Xử lý file upload, webhook, data pipeline nhỏ (nếu có)

Kiểm soát phiên, bảo mật API, xử lý concurrency

Thiết lập CI/CD cho backend app

### 🎨 Frontend
Thiết kế responsive UI, giao tiếp với API

Tích hợp input/output AI: chat, prediction, analytics, file/image

Hiển thị kết quả AI một cách rõ ràng, trực quan, có feedback

Xử lý validation, toast, error boundary, route guard

Tối ưu performance cho SPA/PWA

### 🔗 API / Middle Layer
Connect đến AI Model service (OpenAI, Huggingface, custom model)

Thiết lập retry/fallback nếu model lỗi

Làm việc với hệ thống job queue nếu inference lâu (BullMQ, RabbitMQ)

### 🧪 Testing
Viết unit test & e2e test cho backend và frontend

Dùng Jest, Vitest, Cypress, Postman collection

## 📥 Thông tin đầu vào cần có (Tiêu chuẩn)
| Loại dữ liệu                    | Mô tả                                                |
| ------------------------------- | ---------------------------------------------------- |
| Tài liệu yêu cầu sản phẩm (SRS) | Danh sách tính năng, hành vi UI, mô hình AI cần dùng |
| API spec của AI model           | Đầu vào/ra, cấu hình, giới hạn, tốc độ               |
| UI design hoặc prototype        | Figma, Zeplin hoặc bản thiết kế tay                  |
| Dataset mẫu / file input        | Kiểm thử hệ thống với data thật                      |
| Rule kiểm soát AI               | Prompt, validation rule, fallback logic              |

## 📤 Kết quả đầu ra (Format)
| Đầu ra                       | Diễn giải                                             |
| ---------------------------- | ----------------------------------------------------- |
| Source code frontend/backend | Tuân theo convention FoxAI, repo riêng hoặc mono-repo |
| Tài liệu API                 | Swagger, Postman Collection hoặc Markdown             |
| UI live prototype            | Đường link demo giao diện, thường kèm staging URL     |
| Tài liệu sử dụng hệ thống    | README, HDSD, error handling table                    |
| Report test                  | Kết quả test, log lỗi, test case checklist            |

## 🌀 Theo từng giai đoạn của vòng đời dự án AI
| Giai đoạn                      | Vai trò của Fullstack Dev                                          |
| ------------------------------ | ------------------------------------------------------------------ |
| **1. Khảo sát & Phân tích**    | Làm việc với BA/PO để hiểu data flow, AI logic, API cần            |
| **2. Thiết kế hệ thống**       | Chia module backend/frontend, quyết định stack & sơ đồ kiến trúc   |
| **3. Phát triển & Kết nối AI** | Viết API, frontend, kết nối model, xử lý input/output, fallback    |
| **4. Testing & Tinh chỉnh**    | Test end-to-end, tối ưu thời gian phản hồi, handle lỗi             |
| **5. Triển khai & Go-live**    | CI/CD, build production, deploy model & hệ thống web               |
| **6. Bảo trì & cải tiến**      | Log lỗi, fix bug, nâng cấp chức năng, scale UI/API nếu có load lớn |

✅ Template project Fullstack cho AI App (NestJS + VueJS + OpenAI)

✅ Tài liệu chuẩn kiến trúc hệ thống AI Microservice

✅ Bản checklist review chất lượng source code backend/frontend

--- 
# 💻 OKRs cho Fullstack Developer – Dự án AI tại FoxAI
## 🎯 Objective 1: Xây dựng hệ thống AI-first ổn định, có thể mở rộng và dễ bảo trì
| Key Result | Mục tiêu đo lường cụ thể                                                                   |
| ---------- | ------------------------------------------------------------------------------------------ |
| KR1.1      | Triển khai thành công **≥ 1 API backend phục vụ model AI hoặc inference pipeline**         |
| KR1.2      | Tạo **≥ 2 module frontend** xử lý input/output trực quan từ AI (ví dụ: chat, ảnh, văn bản) |
| KR1.3      | Đảm bảo **≥ 95% endpoint backend có test coverage ≥ 80%**                                  |
| KR1.4      | Viết tài liệu kỹ thuật cho **100% module chính (API, UI, logic kết nối AI)**               |

## 🎯 Objective 2: Đảm bảo chất lượng code và trải nghiệm người dùng xuyên suốt frontend - backend
| Key Result | Mục tiêu đo lường cụ thể                                                                 |
| ---------- | ---------------------------------------------------------------------------------------- |
| KR2.1      | Pass tất cả **CI/CD build và test pipeline ≥ 90% số lần merge PR**                       |
| KR2.2      | Viết **unit test và e2e test ≥ 80% module chức năng**                                    |
| KR2.3      | Tối ưu hóa frontend đạt **Lighthouse performance ≥ 85 điểm**                             |
| KR2.4      | Triển khai hệ thống **error tracking + logging** cho backend (ex: Sentry, Winston, etc.) |

## 🎯 Objective 3: Cộng tác hiệu quả với AI/PM/UI/BA để đưa AI từ ý tưởng đến thực tế
| Key Result | Mục tiêu đo lường cụ thể                                                               |
| ---------- | -------------------------------------------------------------------------------------- |
| KR3.1      | Tham gia thiết kế luồng dữ liệu AI cùng AI Engineer hoặc Data Team **≥ 2 lần/quý**     |
| KR3.2      | Giao tiếp và demo prototype AI cho PO/UI team **≥ 1 lần/sprint**                       |
| KR3.3      | Tiếp nhận và xử lý feedback của người dùng AI feature sau golive **≤ 3 ngày làm việc** |
| KR3.4      | Được đánh giá ≥ 8/10 từ PM hoặc PO về khả năng hỗ trợ/đóng góp cho AI feature          |

## 🎯 Objective 4: Tự phát triển năng lực công nghệ mới, đặc biệt là AI/LLM/GPU handling
| Key Result | Mục tiêu đo lường cụ thể                                                                  |
| ---------- | ----------------------------------------------------------------------------------------- |
| KR4.1      | Hoàn thành ≥ 1 khóa học liên quan đến **AI integration, LLM, hoặc MLOps**                 |
| KR4.2      | Viết bài chia sẻ kỹ thuật nội bộ về **1 công nghệ liên quan AI hoặc Fullstack**           |
| KR4.3      | Thử nghiệm ≥ 1 công nghệ mới (ex: WebSocket + AI chat, Vector Store UI, Streaming Output) |
| KR4.4      | Được Lead Dev hoặc CTO đánh giá “đạt kỳ vọng” hoặc cao hơn trong review quý               |

## 📌 Notes triển khai
Áp dụng theo quý hoặc milestone dự án AI

Theo dõi trên Notion/ClickUp hoặc Google Sheet OKR Tracker

Có thể điều chỉnh theo cấp độ (Junior → Senior → Tech Lead)

Gắn chặt với tính chất "AI-powered product": fail-safe, inference pipeline, latency management

---
