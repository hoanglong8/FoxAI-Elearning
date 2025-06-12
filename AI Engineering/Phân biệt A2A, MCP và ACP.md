# Tổng hợp các bài viết hay về AI Engineering - Kỹ sư AI
## Những điều mà mọi kỹ sư AI cần biết về A2A, MCP và ACP

Link nguồn: https://medium.com/@elisowski/what-every-ai-engineer-should-know-about-a2a-mcp-acp-8335a210a742

Các giao thức AI hàng đầu hiện nay giúp các tác nhân nói chuyện, suy nghĩ và làm việc cùng nhau như thế nào?

### MCP (Model Context Protocol) là gì?
Giao thức ngữ cảnh mô hình (MCP), do Anthropic giới thiệu , xác định một giao diện chuẩn hóa để cung cấp ngữ cảnh có cấu trúc, thời gian thực cho các mô hình ngôn ngữ lớn (LLM).

![image](https://github.com/user-attachments/assets/d7f5f803-9846-4f6a-b1a1-70824bea1b1f)

https://modelcontextprotocol.io/

**Chức năng cốt lõi**

MCP tiêm dữ liệu theo ngữ cảnh cho phép bạnkéo các tài nguyên bên ngoài — như tệp, hàng cơ sở dữ liệu hoặc phản hồi API — trực tiếp vào dấu nhắc hoặc bộ nhớ làm việc.Tất cả đều thông qua một giao diện chuẩn hóa, do đó LLM của bạn sẽ nhẹ và gọn gàng.

**Định tuyến và Gọi hàm**
- MCP cũng cho phép các mô hình gọi các công cụ một cách động. Bạn có thể đăng ký các khả năng như searchCustomerDatahoặc generateReport, và LLM có thể gọi chúng theo yêu cầu. Giống như cấp cho AI của bạn quyền truy cập vào hộp công cụ, nhưng không cần kết nối cứng các công cụ vào chính mô hình.

**Biên soạn lời nhắc**
- Thay vì nhồi nhét mọi chi tiết có thể vào lời nhắc, MCP giúp lắp ráp chỉ ngữ cảnh quan trọng. Nghĩ đến việc xây dựng lời nhắc theo mô-đun, tức thời — ngữ cảnh thông minh hơn, ít mã thông báo hơn, đầu ra tốt hơn.

**Đặc điểm triển khai**
- Hoạt động qua HTTP(S) với các mô tả khả năng dựa trên JSON
- Được thiết kế để không phụ thuộc vào mô hình — bất kỳ LLM nào có thời gian chạy tương thích đều có thể tận dụng các máy chủ tuân thủ MCP
Tương thích với các cổng API và tiêu chuẩn xác thực doanh nghiệp (ví dụ: OAuth2, mTLS)
Các trường hợp sử dụng kỹ thuật
➀ Tích hợp LLM cho API nội bộ: Cho phép truy cập an toàn, chỉ đọc hoặc tương tác vào dữ liệu kinh doanh có cấu trúc mà không làm lộ điểm cuối thô.

➁ Tác nhân doanh nghiệp: Trang bị cho các tác nhân tự động với bối cảnh thời gian chạy từ các công cụ như Salesforce, SAP hoặc cơ sở kiến ​​thức nội bộ.

➂ Xây dựng lời nhắc động: Điều chỉnh lời nhắc dựa trên phiên người dùng, trạng thái hệ thống hoặc logic đường ống tác vụ

ACP (Giao thức truyền thông tác nhân) là gì?
Giao thức truyền thông tác nhân (ACP) là một tiêu chuẩn mở ban đầu được BeeAI và IBM đề xuất để cho phép truyền thông có cấu trúc, khám phá và phối hợp giữa các tác nhân AI hoạt động trong cùng một môi trường cục bộ hoặc biên.

Không giống như các giao thức hướng đám mây như A2A hoặc các giao thức định tuyến theo ngữ cảnh như MCP, ACP được thiết kế để điều phối tác nhân cục bộ theo thời gian thực với chi phí mạng tối thiểu và tích hợp chặt chẽ giữa các tác nhân được triển khai trong thời gian chạy được chia sẻ.

Thiết kế & Kiến trúc Giao thức
ACP định nghĩa một môi trường tác nhân phi tập trung trong đó:

Mỗi tác nhân quảng cáo danh tính, khả năng và trạng thái của mình bằng cách sử dụng lớp phát hiện/phát sóng cục bộ.
Các tác nhân giao tiếp thông qua tin nhắn theo sự kiện, thường sử dụng hệ thống bus cục bộ hoặc IPC (giao tiếp giữa các tiến trình).
Bộ điều khiển thời gian chạy (tùy chọn) có thể điều phối hành vi của tác nhân, tổng hợp dữ liệu từ xa và thực thi các chính sách thực thi.
Các tác nhân ACP thường hoạt động như các dịch vụ hoặc vùng chứa nhẹ, không trạng thái với cơ sở truyền thông được chia sẻ.

Đặc điểm triển khai
Được thiết kế cho các môi trường có độ trễ thấp (ví dụ: phối hợp cục bộ, robot, AI ngoại tuyến)
Có thể được triển khai trên gRPC, ZeroMQ hoặc bus thời gian chạy tùy chỉnh
Nhấn mạnh chủ quyền địa phương — không cần phụ thuộc vào đám mây hoặc đăng ký dịch vụ bên ngoài
Hỗ trợ khả năng nhập và mô tả ngữ nghĩa cho việc định tuyến tác vụ tự động
Các trường hợp sử dụng kỹ thuật
➀ Phối hợp nhiều tác nhân trên các thiết bị biên (ví dụ: máy bay không người lái, cụm IoT hoặc đội tàu rô-bốt)

➁ Hệ thống LLM cục bộ đầu tiên phối hợp các lệnh gọi mô hình, đầu vào cảm biến và thực hiện hành động

➂ Môi trường thời gian chạy tự động nơi các tác nhân phải phối hợp mà không cần cơ sở hạ tầng đám mây tập trung

Tóm lại, ACP cung cấp một lớp giao thức cục bộ thời gian chạy cho các hệ thống AI mô-đun — ưu tiên sự phối hợp độ trễ thấp, khả năng phục hồi và khả năng kết hợp. Nó phù hợp tự nhiên với các triển khai nhạy cảm với quyền riêng tư, tự động hoặc ưu tiên biên giới, nơi các giao thức ưu tiên đám mây là không thực tế.

A2A (Giao thức tác nhân tới tác nhân) là gì?
Giao thức Agent-to-Agent (A2A) do Google giới thiệu là một thông số kỹ thuật đa nền tảng cho phép các tác nhân AI giao tiếp, cộng tác và phân công nhiệm vụ trên các hệ thống không đồng nhất.



---

## Ứng dụng NotebookLM giúp team dự án Chatbot cải thiện hiệu quả công việc và nâng cao khả năng xử lý thông tin, đồng thời hỗ trợ việc triển khai các giải pháp AI tại công ty FoxAI, cụ thể:
- F: FAQ Creation - Tạo câu hỏi thường gặp giúp hệ thống chatbot hoạt động hiệu quả.
- O: Organize Meetings - Ghi chú nhanh trong cuộc họp, lưu trữ thông tin quan trọng.
- X: eXpert Discussions - Tạo podcast thảo luận, chia sẻ kiến thức trong nhóm.
- A: AI Mindmap - Tạo sơ đồ mindmap cho các dự án AI.
- I: Intuitive Interface - Giao diện dễ sử dụng và trực quan.

---

## Ứng dụng Fireflies AI giúp tiết kiệm thời gian, cải thiện năng suất làm việc và tối ưu hóa quá trình ghi chép, phân tích cuộc họp, cụ thể:
- Note: cho phép ghi chú tự động trong các cuộc họp, toàn bộ transcript bằng tiếng Việt.
- Summarize Video: tóm tắt nội dung video cuộc họp, giúp người không tham gia cũng có thể nhanh chóng nắm bắt các điểm chính mà không cần phải xem toàn bộ video.
- Thống kê Actions: thống kê các hành động và quyết định quan trọng trong cuộc họp, giúp bạn theo dõi những nhiệm vụ cần thực hiện và những quyết định đã được đưa ra.
- Transcript: Công cụ này cung cấp bản chép lại toàn bộ cuộc hội thoại trong cuộc họp, giúp bạn dễ dàng tra cứu lại nội dung cuộc họp khi cần thiết, đồng thời hỗ trợ trong việc tìm kiếm các chi tiết quan trọng.
- Chia sẻ Video: Bạn có thể thảo luận trực tiếp trên nền tảng Fireflies về các video cuộc họp, giúp nhóm dễ dàng chia sẻ và phân tích các phần cụ thể của cuộc họp.

=> Chi tiết xem tại video sau: https://tinyurl.com/y6s2azcw

---

## Nguyen Hong Son - DA tự học:
- https://drive.google.com/file/d/1WG2nHxs8N78lMxAHDJzAlE7gC4sV_MjF/view?usp=sharing
