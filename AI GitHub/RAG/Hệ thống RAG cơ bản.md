# Hệ thống RAG

Link nguồn: https://protonx.coursemind.io/courses/684d3a8bb224570012d03b22/topics/684d4562b07f0a0019454502

## Quy trình của RAG cơ bản

![image](https://github.com/user-attachments/assets/8739d58d-adfe-4be4-b7c1-8678ae18d9e7)

## Các chỉ số đo lường như Cosine Similarity, Dot Product hay L2 Distance

## Các thành phần của RAG

![image](https://github.com/user-attachments/assets/03de0aa0-6a93-4fb1-a694-ec1ae9e1b581)

RankGPT: https://github.com/sunnweiwei/RankGPT

Chunking Optimization: https://medium.com/@thallyscostalat/chunking-strategies-optimization-for-retrieval-augmented-generation-rag-in-the-context-of-e47cc949931d

Đường đẫn dự án: https://github.com/bangoc123/retrieval-backend-with-rag

## Phương pháp đánh giá Chunking

Link bài viết: https://research.trychroma.com/evaluating-chunking

Báo cáo kỹ thuật “Evaluating Chunking Strategies for Retrieval” của Chroma Research (07/2024) tập trung vào việc đánh giá các chiến lược chia nhỏ văn bản (chunking) trong hệ thống RAG (Retrieval-Augmented Generation).

Các benchmark phổ biến như MTEB thường đánh giá hiệu suất truy xuất ở cấp độ tài liệu, không xem xét chi tiết đến mức độ đoạn văn hoặc token. Trong các ứng dụng AI, thông tin liên quan đến truy vấn có thể nằm rải rác trong nhiều đoạn hoặc tài liệu, khiến việc đánh giá toàn tài liệu không phản ánh chính xác hiệu suất thực tế.

Chroma đề xuất đánh giá hiệu suất truy xuất ở cấp độ token, sử dụng các chỉ số như Precision, Recall và Intersection-over-Union (IoU) để đo lường độ chính xác và đầy đủ của thông tin được truy xuất. Phương pháp này giúp đánh giá chi tiết hơn, phản ánh chính xác hơn hiệu suất của các chiến lược chunking trong việc hỗ trợ LLMs xử lý thông tin.
- [MTEB](https://github.com/embeddings-benchmark/mteb) (Massive Text Embedding Benchmark): là một bộ tiêu chuẩn đánh giá lớn dành cho các mô hình nhúng văn bản (text embedding). Nó bao gồm 58 bộ dữ liệu trải rộng trên 112 ngôn ngữ và 8 loại nhiệm vụ như phân loại, truy xuất, tóm tắt, v.v.
- **Precision (Độ chính xác)** đo lường Số lượng kết quả đúng được dự đoán / Tổng số kết quả được dự đoán là đúng.
- **Recall (Độ bao phủ)** đo lường Số lượng kết quả đúng được dự đoán / Tổng số kết quả đúng thực tế.
- **Intersection-over-Union (IoU)** đo lường mức độ trùng khớp giữa hai vùng, thường được sử dụng trong các nhiệm vụ như phát hiện đối tượng trong hình ảnh. Diện tích giao nhau giữa vùng dự đoán và vùng thực tế / Diện tích hợp nhất của hai vùng đó (min = 0, max = 1).

**So sánh các chiến lược chunking**
- Đánh giá các phương pháp chunking phổ biến như:
  + RecursiveCharacterTextSplitter
  + ClusterSemanticChunker: Sử dụng mô hình embedding để chia văn bản thành các đoạn có ý nghĩa ngữ nghĩa tương đồng.
  + LLMChunker: Sử dụng LLM để trực tiếp chia nhỏ văn bản dựa trên ngữ cảnh và nội dung.

Kết quả cho thấy lựa chọn chiến lược chunking ảnh hưởng đáng kể đến hiệu suất truy xuất, với một số phương pháp cải thiện Recall lên đến 9%.

---
## Các thuật toán trong Vector search của FAISS
![image](https://github.com/user-attachments/assets/4b048803-731a-497b-ad57-ecd9a1f60291)

- Ý tưởng các thuật toán sẽ xoay quanh hai cách tối ưu sau:
  + Giảm chiều vector. Ví dụ dùng thuật toán nén để giảm chiều từ 1024 về 768
  + Giảm không gian tìm kiếm, phân cụm các vector.

- Flat: Thuật toán vét cạn thông thường
  + Lặp qua từng Vector trong DB/Embeddings
  + Tính L2 distance giữa query vector và vector hiện tại
  + Dựa trên tất cả các L2 distance đã tính, tìm ra K vector có khoảng cách ngắn nhắt với query vector
- IVF (Inverted File):
  + Sử dụng Voronoi diagrams, chia nhỏ không than thành nhiều phần nhỏ gọi là Voronoi cells, mỗi cell này có tâm gọi là centroids (tương tự tên gọi trong thuật KNN). Sau đó thuật toán sẽ xác định cell mà query vector nằm bên trong rồi từ đó tính L2 distance giữa query vector và các vector nằm trong đó để tìm ra vector gần vector query nhất.
  + LHS (Locality Sensitive Hashing)
  + Nhóm vector vào các buckets và hashing các vector và tối đa việc collisions giữa hai vector, ngược lại với điều chúng ta thường làm như hash password và cố gắng giảm thiểu collisions khi hai password cùng được hash ra một chuỗi.
  + Việc tối đa collisions chính là cách giúp ta group các vector
- HNSW (Hierarchical Navigable Small World Graphs)
  + HNSW dựa trên ANNS là thuật toán có tốc độ truy vấn thấp nhất.
  + Small World Graph là đồ thị khi một đỉnh kết nối với các đỉnh mà nó gần nhất.

---
## Cách đo khoảng cách trong ChromaDB
### 1. Độ đo Cosine
- Cosine Distance không phải là Cosine Similarity.
- Để chuyển đổi khoảng cách Cosine về độ tương đồng Cosine bạn hãy lấy 1 - khoảng cách Cosine. 

![image](https://github.com/user-attachments/assets/4e5806aa-492e-43da-9079-317aa362f72c)

### 2. Độ đo L2
![image](https://github.com/user-attachments/assets/741f2e59-485c-4001-9e1c-20e1869f9e2f)

### 3. Độ đo IP
![image](https://github.com/user-attachments/assets/6e478229-dacc-405d-a5e3-5d0bec7958b6)

---
## RAG Keywords Search + ReRank
![image](https://github.com/user-attachments/assets/ef87f7a1-cb3d-4200-a650-8e7517d3dd2b)

Áp dụng RAG ở các hệ thống lớn đang có sẵn mà chưa cần Vector Search ngay thì chúng ta có thể áp dụng kiến trúc Keyword Search + Rerank.
Query được gửi đến Keyword Search engine (ví dụ: `Elasticsearch` hoặc `BM25`).

Module này thực hiện tìm kiếm theo từ khóa trong Database (cơ sở dữ liệu) để lấy các kết quả liên quan ban đầu.

---
## RAG Nâng cao - Semantic Router + Reflection + Hyde Search

Nội dung slide: https://drive.google.com/file/d/1pmNfdDTuy9b9_chiYBZAt-zVOH4LhXJ0/view

---
## RAG có bổ sung ReRank

Ranking Model (ReRank) - Sự khác biệt ở chỗ thay vì dùng top-k chunk luôn, một ranking model (ví dụ: `BGE Reranker`, `Cohere Rerank`, hoặc `Cross-Encoder`) sẽ đánh giá lại các chunk theo độ liên quan sâu hơn.
Kết quả sau rerank thường chính xác hơn vì xét đến mối quan hệ giữa ngữ nghĩa query và nội dung chunk chặt chẽ hơn.

![image](https://github.com/user-attachments/assets/89fbff5f-4668-4753-bd69-21fb8e519e73)

---
## Graph RAG - Rag trên đồ thị
- Xây dựng đồ thị tri thức Knowledge graph từ văn bản
- Thực hành RAG sử dụng Cypher Query trên Neo4j
- Xây dựng Embeddings sử dụng Graph Convolution Network
- Các trending về RAG trên đồ thị

![image](https://github.com/user-attachments/assets/904b2cd1-209d-4563-91b3-ff06f87a4077)

Nội dung Slide: https://drive.google.com/file/d/1yliCGONb2yJv0IoFQ-GWpgrv_bz70Wqf/view

---
## Hybrid RAG
![image](https://github.com/user-attachments/assets/c15e3bda-4139-4032-8d9f-7a9e13d6a09d)

`Hybrid RAG` kết hợp giữa `RAG cơ bản` và `RAG đồ thị`.

---
## Agentic RAG
![image](https://github.com/user-attachments/assets/d9312207-5625-4c23-a18e-0fcd6e38882c)

Nội dung Slide: https://drive.google.com/file/d/1a88Skfkp8OhpLndvbmwTE07N9PsM-n5f/view

Agent ReAct framework - Slide: https://drive.google.com/file/d/1inr_rNzNDhhW09e4KroaQ4VnvWhFDfzT/view

