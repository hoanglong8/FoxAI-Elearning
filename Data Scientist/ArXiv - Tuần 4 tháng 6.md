# Tạp chí khoa học ArXiv - Tuần 4 tháng 6 năm 2025
## AgentDistill: Training-Free Agent Distillation with Generalizable MCP Boxes
_(AgentDistill: Chưng cất tác nhân AI mà không cần đào tạo với MCP tổng quát)_

Link nguồn: https://arxiv.org/html/2506.14728v1

![image](https://github.com/user-attachments/assets/fb01f1ab-3b52-4c31-98d9-9e205b072caf)

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
_(Tối ưu hóa đường ống RAG cho tiếng Ả Rập: Phân tích có hệ thống các thành phần cốt lõi)_

Link nguồn: https://arxiv.org/abs/2506.06339

![image](https://github.com/user-attachments/assets/6d008ab3-dca0-43d7-86bf-3fbd18d5d8b7)

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
## KG-Infused RAG: Augmenting Corpus-Based RAG with External Knowledge Graphs
_(RAG truyền KG - đồ thị tri thức: Tăng cường RAG dựa trên ngữ liệu với đồ thị tri ​​thức bên ngoài)_

Link nguồn: https://arxiv.org/html/2506.09542v1

![image](https://github.com/user-attachments/assets/4898ab5e-a564-43dc-8e88-414820ad88d9)

**🧠 Tổng quan**
Bài báo giới thiệu KG-Infused RAG, một khung phương pháp tích hợp đồ thị tri thức (KG) vào hệ thống Retrieval-Augmented Generation (RAG) để thực hiện quá trình spreading activation — một cơ chế trong tâm lý học nhận thức giúp kích hoạt các khái niệm liên quan và suy luận. Phương pháp này nhằm cải thiện độ chính xác thông tin và khả năng giải thích trong các tác vụ trả lời câu hỏi (QA).

**⚙️ Phương pháp**
KG-Infused RAG bao gồm ba giai đoạn chính:

- KG-Guided Spreading Activation: Kích hoạt các thực thể liên quan trong KG để xây dựng một đồ thị con (subgraph) chứa thông tin có liên quan đến câu hỏi.

- KG-Based Query Expansion: Mở rộng truy vấn ban đầu bằng cách kết hợp thông tin từ đồ thị con, cải thiện khả năng truy xuất thông tin từ văn bản.

- KG-Augmented Answer Generation: Tạo câu trả lời bằng cách kết hợp các đoạn văn bản đã truy xuất với thông tin từ KG, đảm bảo tính chính xác và khả năng giải thích.

**📊 Kết quả thực nghiệm**
- So với RAG truyền thống: KG-Infused RAG đạt được mức cải thiện từ 3.8% đến 13.8% trên 05 bộ dữ liệu QA khác nhau.

- Kết hợp với Self-RAG: Khi tích hợp vào Self-RAG, KG-Infused RAG mang lại hiệu suất cao hơn, chứng minh tính hiệu quả và khả năng mở rộng của nó như một mô-đun bổ sung cho các phương pháp RAG dựa trên văn bản.

**🧭 Kết luận**
KG-Infused RAG cung cấp một phương pháp tiếp cận mạnh mẽ để cải thiện khả năng trả lời câu hỏi của các mô hình ngôn ngữ lớn, đặc biệt trong việc tích hợp thông tin từ các nguồn có cấu trúc như đồ thị tri thức. Phương pháp này không chỉ nâng cao độ chính xác mà còn cải thiện khả năng giải thích và tính minh bạch trong quá trình suy luận của mô hình.

---
## Re-ranking Reasoning Context with Tree Search Makes Large Vision-Language Models Stronger
(Kỹ thuật re-ranking dựa trên bối cảnh kết hợp với kỹ thuật tìm kiếm dạng cây làm cho các mô hình ngôn ngữ thị giác trở nên mạnh hơn)

Link nguồn: https://arxiv.org/html/2506.07785v1

![image](https://github.com/user-attachments/assets/421a6fdb-0819-48d4-8b4d-afb213dc4b31)

**🧠 Tổng quan**

Bài báo này trình bày một khung phương pháp Retrieval-Augmented Generation (RAG) đa mô thức mới, gọi là RCTS, nhằm cải thiện hiệu suất của các mô hình ngôn ngữ thị giác lớn (LVLMs) trong các tác vụ trả lời câu hỏi thị giác (VQA). Phương pháp này giải quyết hai vấn đề chính:

- Thiếu dữ liệu với ví dụ suy luận: Các bộ dữ liệu hiện có thiếu các ví dụ suy luận đa bước, khiến mô hình khó học được các mẫu suy luận nội tại.

- Phản hồi không ổn định từ kiến thức truy xuất: Các ví dụ truy xuất có thể không nhất quán hoặc không liên quan, dẫn đến phản hồi không chính xác hoặc không phù hợp.

**⚙️ Phương pháp**
Khung RCTS bao gồm hai thành phần chính:

- Xây dựng cơ sở dữ liệu kiến thức với ngữ cảnh suy luận: Sử dụng cơ chế đánh giá tự nhất quán để làm phong phú cơ sở dữ liệu với các mẫu suy luận nội tại, giúp mô hình học được các mẫu suy luận đa bước.

- Phân loại lại các ví dụ truy xuất bằng Tìm kiếm Cây Monte Carlo với Phần thưởng Heuristic (MCTS-HR): Sử dụng phương pháp MCTS-HR để ưu tiên các ví dụ truy xuất có liên quan nhất, đảm bảo mô hình sử dụng các ngữ cảnh suy luận chất lượng cao cho phản hồi chính xác và nhất quán hơn.

**📊 Kết quả thực nghiệm**

- Hiệu suất vượt trội: Khung RCTS đạt hiệu suất vượt trội trên nhiều bộ dữ liệu VQA, bao gồm ScienceQA, MMMU, MathV, VizWiz và VSR-MC.
- So với các phương pháp khác: So với các phương pháp như In-Context Learning (ICL) và Vanilla-RAG, RCTS cải thiện hiệu suất trung bình từ 3% đến hơn 4% trên các mô hình LVLMs khác nhau.
- Khả năng tổng quát: Phương pháp này cho thấy khả năng tổng quát tốt, có thể áp dụng cho các mô hình LVLMs với kích thước khác nhau và các loại tác vụ VQA khác nhau.

**🧭 Kết luận**
Khung RCTS cung cấp một phương pháp hiệu quả để cải thiện khả năng trả lời câu hỏi của các mô hình LVLMs, đặc biệt trong các tác vụ yêu cầu suy luận đa bước. Việc xây dựng cơ sở dữ liệu kiến thức với ngữ cảnh suy luận và phân loại lại các ví dụ truy xuất bằng MCTS-HR giúp mô hình sử dụng các ngữ cảnh suy luận chất lượng cao, từ đó nâng cao độ chính xác và nhất quán trong phản hồi.

---
## SceneRAG: Scene-level Retrieval-Augmented Generation for Video Understanding
(SceneRAG: Kỹ thuật tăng cường truy xuất cấp độ phân cảnh để hiểu nội dung của dữ liệu video)

Link nguồn: https://arxiv.org/html/2506.07600v1

![image](https://github.com/user-attachments/assets/828a16e3-8366-47ea-8e79-e78bcf2bb681)

**🧠 Tổng quan**
Bài báo giới thiệu SceneRAG, một khung phương pháp Retrieval-Augmented Generation (RAG) mới, được thiết kế để hiểu nội dung video dài bằng cách phân đoạn video thành các cảnh có tính nhất quán về mặt kể chuyện. SceneRAG sử dụng mô hình ngôn ngữ lớn (LLM) để phân tích bản chép tự động (ASR) và siêu dữ liệu thời gian, kết hợp với các phương pháp heuristics nhẹ và sửa lỗi lặp lại để xác định ranh giới cảnh chính xác. Sau đó, nó xây dựng đồ thị tri thức động từ thông tin hình ảnh và văn bản, cho phép truy xuất và sinh câu trả lời dựa trên nhiều bước, giúp mô hình hiểu được các phụ thuộc dài hạn trong video.

**⚙️ Phương pháp**
Phân đoạn cảnh tự động:

- Sử dụng LLM để phân tích bản chép ASR và siêu dữ liệu thời gian, xác định các ranh giới cảnh có tính nhất quán về mặt kể chuyện.

- Áp dụng các phương pháp heuristics và sửa lỗi lặp lại để cải thiện độ chính xác của phân đoạn.

Xây dựng đồ thị tri thức đa phương thức:

- Kết hợp thông tin từ hình ảnh và văn bản để trích xuất quan hệ giữa các thực thể.

- Xây dựng đồ thị tri thức động, cho phép truy xuất và sinh câu trả lời dựa trên nhiều bước.

Truy xuất và sinh câu trả lời dựa trên RAG:

- Sử dụng đồ thị tri thức để truy xuất các cảnh liên quan đến câu hỏi.

- Kết hợp thông tin từ các cảnh truy xuất được để sinh câu trả lời chính xác và nhất quán.

**📊 Kết quả thực nghiệm**
- Hiệu suất vượt trội: SceneRAG đạt được tỷ lệ thắng lên đến 72,5% trên các nhiệm vụ sinh câu trả lời, vượt qua các phương pháp RAG truyền thống và các mô hình ngôn ngữ thị giác lớn hiện có.

- Khả năng tổng quát: Phương pháp này cho thấy khả năng tổng quát tốt trên nhiều loại nội dung video khác nhau, bao gồm các bài giảng, tài liệu và giải trí.

- Hiệu quả trong việc duy trì tính nhất quán của câu chuyện: SceneRAG duy trì tính nhất quán của câu chuyện và theo dõi các thực thể xuyên suốt video, điều mà các phương pháp RAG truyền thống không làm được.

**🧭 Kết luận**
SceneRAG cung cấp một phương pháp mạnh mẽ và hiệu quả để hiểu nội dung video dài, giúp cải thiện khả năng trả lời câu hỏi và tóm tắt video. Việc phân đoạn video thành các cảnh có tính nhất quán về mặt kể chuyện và xây dựng đồ thị tri thức động cho phép mô hình hiểu được các phụ thuộc dài hạn trong video, từ đó cung cấp câu trả lời chính xác và nhất quán hơn.

---
## LlamaRec-LKG-RAG: A Single-Pass, Learnable Knowledge Graph-RAG Framework for LLM-Based Ranking
(LlamaRec-LKG-RAG: Kỹ thuật Khung đồ thị tri ​​thức tự học dùng để xếp hạng dựa trên LLM)

Link nguồn: https://arxiv.org/html/2506.07449v1

![image](https://github.com/user-attachments/assets/b63669cf-1a86-4f32-bf9b-c105eca0b18c)

**🧠 Tổng quan**
Bài báo này giới thiệu LlamaRec-LKG-RAG, một khung phương pháp mới kết hợp giữa Retrieval-Augmented Generation (RAG) và đồ thị tri thức (KG) để cải thiện hiệu suất xếp hạng trong hệ thống gợi ý sử dụng mô hình ngôn ngữ lớn (LLM). Phương pháp này vượt qua hạn chế của các phương pháp RAG truyền thống bằng cách tích hợp thông tin cá nhân hóa từ đồ thị tri thức vào quá trình suy luận của mô hình.

**⚙️ Phương pháp**
- Mô-đun sở thích người dùng: Xây dựng một mô-đun học sâu nhẹ giúp xác định các đường quan hệ quan trọng trong đồ thị tri thức, phản ánh sở thích người dùng.

- Truy xuất một bước: Sử dụng mô-đun trên để truy xuất các đồ thị con cá nhân hóa từ đồ thị tri thức, tích hợp trực tiếp vào đầu vào của mô hình Llama-2 đã được tinh chỉnh.

- Khung suy luận duy nhất: Kết hợp thông tin từ đồ thị tri thức và lịch sử tương tác của người dùng để tạo ra các đề xuất hiệu quả và dễ giải thích trong một bước suy luận duy nhất.

**📊 Kết quả thực nghiệm**
- Dữ liệu: Thí nghiệm được thực hiện trên hai bộ dữ liệu: ML-100K và Amazon Beauty.

- Đo lường: Hiệu suất được đánh giá qua các chỉ số xếp hạng: MRR (Mean Reciprocal Rank), NDCG (Normalized Discounted Cumulative Gain), và Recall.

- Kết quả: LlamaRec-LKG-RAG đạt được cải thiện đáng kể so với phương pháp LlamaRec ban đầu trên tất cả các chỉ số, chứng minh hiệu quả của việc tích hợp đồ thị tri thức vào quá trình suy luận của mô hình.

**🧭 Kết luận**
Phương pháp LlamaRec-LKG-RAG cung cấp một cách tiếp cận mạnh mẽ và hiệu quả để cải thiện hệ thống gợi ý sử dụng LLM, đặc biệt trong việc xử lý các vấn đề như khởi tạo nguội (cold-start), dữ liệu thưa thớt và sự mơ hồ trong ý định của người dùng. Việc tích hợp đồ thị tri thức vào quá trình suy luận giúp mô hình hiểu rõ hơn về ngữ cảnh và sở thích của người dùng, từ đó đưa ra các đề xuất chính xác và cá nhân hóa hơn.
