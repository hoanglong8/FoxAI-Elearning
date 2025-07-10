# ProtonX giới thiệu về Agentic AI
## LLMs trong Agent

### Giới thiệu tổng quan về Agent
Nội dung Slide: https://drive.google.com/file/d/1h9Nyw973Xpx-WWMMjUl-Jx0F3fh66aJ9/view

---
### Lập trình Agent sử dụng thư viện OpenAI Agents SDK
- Agents: Các mô hình LLM được thiết lập với hướng dẫn, công cụ, quy tắc an toàn và khả năng chuyển giao nhiệm vụ.

- Handoffs: Cho phép các agent chuyển giao quyền kiểm soát cho agent khác để thực hiện các nhiệm vụ cụ thể.

- Guardrails: Các cơ chế kiểm tra an toàn có thể tùy chỉnh để xác thực đầu vào và đầu ra.

- Tracing: Hệ thống theo dõi tự động quá trình hoạt động của agent, giúp bạn quan sát, gỡ lỗi và tối ưu hóa quy trình làm việc.

RAG Agent
![image](https://github.com/user-attachments/assets/ba3a3317-18e7-446a-af4c-1312c9f064a3)


---
## ReAct (Reason và Action) trong Agent

Link nguồn: https://arxiv.org/pdf/2210.03629

Bài báo "ReAct: Synergizing Reasoning and Acting in Language Models" (arXiv:2210.03629) giới thiệu một phương pháp mới giúp các mô hình ngôn ngữ lớn (LLMs) như GPT không chỉ suy luận (reasoning) mà còn thực hiện hành động (acting) một cách linh hoạt và hiệu quả hơn.

### 🧠 ReAct là gì?
ReAct (viết tắt của Reason + Act) là một kỹ thuật cho phép mô hình ngôn ngữ kết hợp giữa:

- Suy luận bằng ngôn ngữ tự nhiên (ví dụ: phân tích, lên kế hoạch, xử lý ngoại lệ).

- Hành động cụ thể (ví dụ: tìm kiếm thông tin, tương tác với API, thực hiện thao tác trong môi trường).

Thay vì tách biệt hai quá trình này, ReAct cho phép mô hình xen kẽ giữa suy nghĩ và hành động, tạo ra một chuỗi các bước: Suy nghĩ → Hành động → Quan sát → Suy nghĩ..., giúp mô hình xử lý nhiệm vụ một cách linh hoạt và thích ứng hơn.

Nội dung Slide: https://drive.google.com/file/d/1inr_rNzNDhhW09e4KroaQ4VnvWhFDfzT/view

### 🔍 Cách hoạt động của ReAct
ReAct sử dụng một chiến lược nhắc nhở (prompting) đặc biệt, trong đó mô hình được cung cấp các ví dụ về cách xen kẽ giữa suy nghĩ và hành động. Khi đối mặt với một nhiệm vụ, mô hình sẽ:

- Suy nghĩ: Phân tích nhiệm vụ, lên kế hoạch hoặc đánh giá kết quả trước đó.

- Hành động: Thực hiện một hành động cụ thể, như tìm kiếm thông tin hoặc tương tác với môi trường.

- Quan sát: Ghi nhận kết quả từ hành động vừa thực hiện.

- Lặp lại: Tiếp tục suy nghĩ dựa trên quan sát mới và thực hiện hành động tiếp theo.

Quy trình này cho phép mô hình cập nhật kế hoạch và điều chỉnh hành động dựa trên thông tin mới, tương tự như cách con người giải quyết vấn đề.

### 📊 Kết quả nổi bật
ReAct đã được thử nghiệm trên nhiều nhiệm vụ khác nhau và cho thấy hiệu quả vượt trội:

- HotpotQA (Hỏi đáp đa bước): ReAct giúp giảm hiện tượng "ảo tưởng" (hallucination) và cải thiện khả năng suy luận so với phương pháp chỉ suy nghĩ (Chain-of-Thought).

- Fever (Xác minh sự thật): ReAct đạt độ chính xác cao hơn so với các phương pháp chỉ hành động hoặc chỉ suy nghĩ.

- ALFWorld (Trò chơi dựa trên văn bản): ReAct vượt qua các phương pháp học bắt chước và học tăng cường với tỷ lệ thành công cao hơn 34%.

- WebShop (Mua sắm trực tuyến): ReAct đạt tỷ lệ thành công cao hơn 10% so với các phương pháp khác.

### 🤖 Lợi ích của ReAct
- Hiệu suất cao: Kết hợp suy nghĩ và hành động giúp mô hình giải quyết nhiệm vụ hiệu quả hơn.

- Dễ hiểu: Các bước suy nghĩ và hành động rõ ràng giúp người dùng dễ theo dõi và đánh giá quyết định của mô hình.

- Linh hoạt: Mô hình có thể thích ứng với thông tin mới và điều chỉnh kế hoạch khi cần thiết.

Trang dự án ReAct với mã nguồn: https://react-lm.github.io/

---
## 🔄 ReAct trong bối cảnh chatbot mở khóa thẻ
ReAct là một phương pháp cho phép mô hình ngôn ngữ lớn (LLM) kết hợp giữa suy luận (reasoning) và hành động (acting) trong một chuỗi tương tác. Thay vì chỉ suy nghĩ hoặc chỉ hành động, mô hình sẽ xen kẽ giữa các bước suy nghĩ, hành động và quan sát để hoàn thành nhiệm vụ một cách hiệu quả hơn.

### 🧩 Áp dụng ReAct vào quy trình mở khóa thẻ
Trong trường hợp của bạn, chatbot cần thực hiện các bước sau:

#### Bước 1: Xác minh thông tin khách hàng:

- Suy nghĩ: Phân tích yêu cầu mở khóa thẻ và xác định thông tin cần thiết từ khách hàng (tên, tuổi, số điện thoại).

- Hành động: Gửi yêu cầu đến người dùng để thu thập thông tin.

- Quan sát: Nhận và xử lý thông tin phản hồi từ người dùng.

#### Bước 2: Xác minh thông tin thẻ:

- Suy nghĩ: Xác định các thông tin cần thiết về thẻ (số thẻ, tình trạng, giao dịch gần nhất).

- Hành động: Truy vấn cơ sở dữ liệu để lấy thông tin thẻ.

- Quan sát: Phân tích dữ liệu nhận được để xác minh tình trạng thẻ.

#### Bước 3: Thực hiện mở khóa thẻ:

- Suy nghĩ: Đánh giá xem các điều kiện để mở khóa thẻ đã được đáp ứng chưa.

- Hành động: Gửi lệnh cập nhật trạng thái thẻ từ "deactive" sang "active" trong cơ sở dữ liệu.

- Quan sát: Xác nhận rằng thẻ đã được mở khóa thành công.

Quy trình này thể hiện rõ chuỗi `"Suy nghĩ → Hành động → Quan sát"` mà ReAct đề xuất, giúp mô hình tương tác linh hoạt và hiệu quả hơn trong các nhiệm vụ phức tạp.

### 🛠️ Triển khai ReAct trong hệ thống của bạn
Để áp dụng ReAct vào chatbot mở khóa thẻ, bạn có thể thực hiện các bước sau:

- Thiết kế prompt theo cấu trúc ReAct:
Cung cấp cho mô hình các ví dụ về chuỗi suy nghĩ, hành động và quan sát trong bối cảnh mở khóa thẻ.

- Tích hợp với các công cụ và API cần thiết:
Kết nối mô hình với cơ sở dữ liệu khách hàng và thẻ để truy vấn và cập nhật thông tin.

- Xử lý phản hồi và ngoại lệ:
Thiết lập cơ chế để mô hình xử lý các trường hợp ngoại lệ, như thông tin không khớp hoặc lỗi hệ thống.

- Đảm bảo bảo mật và tuân thủ quy định:
Áp dụng các biện pháp bảo mật để bảo vệ thông tin khách hàng và tuân thủ các quy định liên quan đến dữ liệu.

---
# Function Calling và Tools Calling

Thực hành lập trình Function Calling và Tools với Gemini 2.0: https://colab.research.google.com/drive/17ZNwxDwhXt9SZfdQtuQ1DzTLIFzt2oFL?usp=sharing

Function Calling với Open AI: https://colab.research.google.com/drive/1_ludopQhe2EDG-FC1HwU6W6kadwwKb8q#scrollTo=VJkMXZEJlOIY

Agents theo ReactFramework: https://colab.research.google.com/drive/1i6FrgSXsWXLTEq00x4KtemQXFQtNiyFX#scrollTo=oLidoJGTQkrC&uniqifier=1

Pandas Agents - Truy xuất dữ liệu bảng sử dụng Agents: https://colab.research.google.com/drive/1yvv0VQnRU_LKezs00aL1vBDjkyoYRuvW?usp=sharing

Agents tìm kiếm thông tin + tính toán số học: https://colab.research.google.com/drive/1s1o9bQxbX4h0UA6AA-p71wSNpvPATr-t?usp=sharing

