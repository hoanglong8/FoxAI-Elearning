# ArXiv
## AgentDistill: Training-Free Agent Distillation with Generalizable MCP Boxes
(AgentDistill: Chưng cất tác nhân AI mà không cần đào tạo với MCP tổng quát)

**🧠 Tổng quan**
- Bài báo giới thiệu AgentDistill, một khuôn khổ chưng cất tác nhân không cần huấn luyện, cho phép chuyển giao kiến thức hiệu quả và có thể mở rộng thông qua việc tái sử dụng trực tiếp các Model–Context–Protocols (MCPs) — các mô-đun giải quyết tác vụ có cấu trúc và có thể tái sử dụng được tạo ra tự động bởi các tác nhân giáo viên.

- Khác với các phương pháp chưng cất tác nhân truyền thống, thường sử dụng việc phát lại toàn bộ hành trình của giáo viên hoặc mô phỏng việc sử dụng công cụ từng bước, AgentDistill loại bỏ hoàn toàn quá trình huấn luyện. Thay vào đó, các MCPs được tạo ra tự động và có thể tái sử dụng, cho phép các tác nhân học máy nhỏ (sLMs) kế thừa khả năng giải quyết tác vụ mà không cần cập nhật gradient hay phát lại hành trình.

**🔧 Phương pháp**
- Tạo MCPs: Các tác nhân giáo viên tự động tạo ra các MCPs — các mô-đun giải quyết tác vụ có cấu trúc và có thể tái sử dụng.

- Xây dựng MCP-Box: Các MCPs được tổ chức thành các hộp MCP, có thể được tích hợp trực tiếp vào các tác nhân học máy nhỏ.

- Suy luận của tác nhân học sinh: Các hộp MCP được sử dụng để suy luận, cho phép các tác nhân học sinh giải quyết các tác vụ mới mà không cần huấn luyện thêm.

**📊 Thí nghiệm và Kết quả**
- Dữ liệu và Nhiệm vụ: Các thí nghiệm được thực hiện trên các nhiệm vụ y sinh và toán học, bao gồm Game of 24, PathVQA và SLAKE.

- Hiệu suất: Các tác nhân học sinh sử dụng MCP-Box đạt hiệu suất tương đương với các hệ thống tiên tiến sử dụng các mô hình ngôn ngữ lớn như OctoTools (GPT-4o).

- Khả năng tổng quát: Việc tái sử dụng các MCPs cho phép các tác nhân học sinh tổng quát hóa khả năng của chúng trên nhiều miền và giải quyết các vấn đề mới với ít giám sát hoặc can thiệp của con người.

**💡 Kết luận**
- AgentDistill cung cấp một phương pháp hiệu quả và tiết kiệm chi phí để chuyển giao kiến thức giữa các tác nhân, cho phép xây dựng các tác nhân thông minh có thể mở rộng mà không cần huấn luyện tốn kém. Phương pháp này mở ra khả năng phát triển các tác nhân học máy nhỏ có khả năng giải quyết các tác vụ phức tạp mà không cần tài nguyên tính toán lớn.

---
## Optimizing RAG Pipelines for Arabic: A Systematic Analysis of Core Components
(Tối ưu hóa đường ống RAG cho tiếng Ả Rập: Phân tích có hệ thống các thành phần cốt lõi)

**🔍 Tổng quan**
- Bài báo này trình bày một nghiên cứu toàn diện về việc tối ưu hóa các thành phần của hệ thống Retrieval-Augmented Generation (RAG) cho ngôn ngữ Ả Rập. Mặc dù RAG đã được nghiên cứu rộng rãi cho các ngôn ngữ có tài nguyên phong phú, việc tối ưu hóa các thành phần của RAG cho tiếng Ả Rập vẫn còn hạn chế. Nghiên cứu này sử dụng khung RAGAS để đánh giá các chiến lược phân đoạn, mô hình nhúng, mô hình tái xếp hạng và mô hình ngôn ngữ trên nhiều bộ dữ liệu tiếng Ả Rập.

**⚙️ Phương pháp**
- Khung RAGAS: Được sử dụng để đánh giá các thành phần của RAG trên bốn chỉ số chính: độ chính xác ngữ cảnh, độ bao phủ ngữ cảnh, độ trung thực của câu trả lời và tính liên quan của câu trả lời.

**🧪 Kết quả chính**
- RQ1: Chiến lược phân đoạn (chunking) nhận diện câu: Hiệu quả hơn so với các phương pháp phân đoạn khác.

- RQ2: Mô hình nhúng (embedding) BGE-M3 và Multilingual-E5-large: Hiệu quả nhất trong việc nhúng văn bản.

- RQ3: Mô hình tái xếp hạng (re-ranking) bge-reranker-v2-m3: Nâng cao độ trung thực của câu trả lời trong các bộ dữ liệu phức tạp.

- RQ4: Mô hình ngôn ngữ (LLMs) Aya-8B: Vượt trội hơn StableLM về chất lượng sinh văn bản.

**🧭 Kết luận**
- Nghiên cứu này cung cấp những hiểu biết quan trọng về việc xây dựng các hệ thống RAG chất lượng cao cho tiếng Ả Rập và đưa ra hướng dẫn thực tế để chọn lựa các thành phần tối ưu cho từng loại tài liệu khác nhau.

---

