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

![image](https://github.com/user-attachments/assets/9e737fcd-67df-4fb8-a255-583d087047b7)

https://google.github.io/
Không giống như trọng tâm cục bộ của ACP hay lớp tích hợp công cụ của MCP, A2A giải quyết vấn đề khả năng tương tác theo chiều ngang — chuẩn hóa cách các tác nhân từ các nhà cung cấp hoặc thời gian chạy khác nhau có thể trao đổi khả năng và phối hợp quy trình công việc trên web mở.

### Tổng quan về giao thức
A2A định nghĩa một mô hình giao tiếp dựa trên HTTP, trong đó các tác nhân được coi là các dịch vụ có thể tương tác. Mỗi tác nhân sẽ hiển thị một “Agent Card” — một mô tả JSON có thể đọc được bằng máy, nêu chi tiết danh tính, khả năng, điểm cuối và yêu cầu xác thực của tác nhân đó.

Các đại lý sử dụng thông tin này để:

Khám phá lẫn nhau theo chương trình
Đàm phán nhiệm vụ và vai trò
Trao đổi tin nhắn, dữ liệu và cập nhật phát trực tuyến
Về nguyên tắc, A2A không phụ thuộc vào tầng vận chuyển, nhưng hiện tại chỉ định JSON-RPC 2.0 qua HTTPS làm cơ chế cốt lõi cho tương tác.

Thành phần cốt lõi
Thẻ tác nhân Tài
liệu JSON mô tả khả năng, điểm cuối, loại tin nhắn được hỗ trợ, phương thức xác thực và siêu dữ liệu thời gian chạy của tác nhân.

Giao diện máy khách/máy chủ A2A
Mỗi tác nhân có thể hoạt động như máy khách (người khởi tạo tác vụ), máy chủ (người thực thi tác vụ) hoặc cả hai, cho phép định tuyến và đàm phán tác vụ động.

Trao đổi tin nhắn và hiện vật
Hỗ trợ các tác vụ nhiều phần với ngữ cảnh, đầu ra phát trực tuyến (thông qua SSE) và hiện vật cố định (ví dụ: tệp, khối kiến ​​thức).

Các tác nhân đàm phán trải nghiệm người dùng
có thể điều chỉnh định dạng tin nhắn, mức độ chi tiết của nội dung và hình ảnh để phù hợp với khả năng của tác nhân hạ nguồn.

Kiến trúc bảo mật
OAuth 2.0 và xác thực dựa trên khóa API
Điểm cuối có phạm vi khả năng — các tác nhân chỉ hiển thị các chức năng cần thiết cho các tương tác đã khai báo
Các tác nhân có thể hoạt động ở chế độ "mờ đục" — ẩn logic bên trong trong khi tiết lộ các dịch vụ có thể gọi được
Đặc điểm triển khai
Thiết kế theo dạng web gốc: được xây dựng trên HTTP, JSON-RPC và bảo mật web tiêu chuẩn
Không phụ thuộc vào mô hình: hoạt động với bất kỳ hệ thống tác nhân nào (LLM hoặc các hệ thống khác) triển khai giao thức
Hỗ trợ luồng tác vụ và cộng tác nhiều lượt với tải trọng nhẹ
Các trường hợp sử dụng kỹ thuật
➀ Hệ sinh thái tác nhân đa nền tảng, nơi các tác nhân từ các nhóm hoặc nhà cung cấp khác nhau cần tương tác an toàn

➁ Điều phối tác nhân phân tán trong môi trường AI gốc đám mây (ví dụ: Vertex AI, LangChain, HuggingFace Agents)

➂ Khung cộng tác đa tác nhân , chẳng hạn như quy trình làm việc AI của doanh nghiệp trải dài trên nhiều hệ thống (ví dụ: CRM, HR, tác nhân CNTT)

### So sánh các giao thức với nhau

![image](https://github.com/user-attachments/assets/4b731f97-0e53-4748-8d22-805d07cfc324)

Bổ sung hay cạnh tranh?
A2A + MCP
A2A và MCP không hề chống lại nhau — chúng giải quyết những phần hoàn toàn khác nhau của câu đố AI đặc vụ và chúng thực sự phù hợp với nhau một cách khá tốt.

![image](https://github.com/user-attachments/assets/989de1e8-9060-439b-a78a-cb65ea3a7feb)

Hãy nghĩ về MCP như một giao thức cho phép các tác nhân AI kết nối với thế giới. Nó cung cấp cho họ quyền truy cập vào các tệp, API, cơ sở dữ liệu — về cơ bản, tất cả các ngữ cảnh có cấu trúc mà họ cần để làm điều gì đó hữu ích. Cho dù đó là kéo dữ liệu bán hàng theo thời gian thực hay tạo báo cáo tùy chỉnh, MCP đều xử lý kết nối với các công cụ và dữ liệu.

Bây giờ là lớp A2A. Đây là nơi các tác nhân bắt đầu cộng tác. A2A cung cấp cho họ một ngôn ngữ chung và một bộ quy tắc để khám phá lẫn nhau, phân công nhiệm vụ và thương lượng về cách họ sẽ làm việc cùng nhau — ngay cả khi chúng được xây dựng bởi các nhà cung cấp khác nhau hoặc chạy trên các nền tảng khác nhau.

Sau đây là một cách đơn giản để suy nghĩ về nó:
⟢ MCP kết nối AI với các công cụ.
⟢ A2A kết nối AI với AI khác.

Cùng nhau, chúng tạo thành một cơ sở mô-đun vững chắc để xây dựng các hệ thống thông minh, cộng tác.

Còn ACP thì sao?
Sau đó là ACP, có cách tiếp cận hoàn toàn khác. Tất cả là về sự phối hợp tác nhân cục bộ đầu tiên — không cần đám mây. Thay vì sử dụng HTTP và khám phá dựa trên web, ACP cho phép các tác nhân tìm và nói chuyện với nhau ngay bên trong thời gian chạy được chia sẻ.

Điều này hoàn hảo cho những tình huống sau:

Bạn có băng thông hạn chế hoặc cần độ trễ thấp (như trong robot hoặc trợ lý trên thiết bị),
Quyền riêng tư rất quan trọng và bạn muốn giữ mọi thứ ngoại tuyến,
Hoặc bạn đang triển khai trong môi trường không có kết nối internet (ví dụ: nhà máy, nút biên).
ACP không cố gắng cạnh tranh với A2A — nó chỉ lấp đầy một phân khúc khác. Nhưng trong một số thiết lập, đặc biệt là trong môi trường được kiểm soát chặt chẽ, ACP có thể thay thế hoàn toàn A2A, vì nó bỏ qua chi phí chung của các giao thức gốc trên web và chỉ hoàn thành công việc cục bộ.

Sự hội tụ hay phân mảnh?
Khi ngày càng nhiều nhóm áp dụng các giao thức này, một số viễn cảnh tương lai khả thi đang dần hình thành.

Trường hợp tốt nhất? Chúng ta thấy sự hội tụ. Hãy tưởng tượng một nền tảng tác nhân hợp nhất, trong đó A2A xử lý việc trao đổi qua lại giữa các tác nhân, MCP quản lý quyền truy cập vào các công cụ và dữ liệu, và các thời gian chạy theo kiểu ACP cắm vào cho các tình huống biên hoặc ngoại tuyến. Mọi thứ chỉ hoạt động và các nhà phát triển có thể xây dựng trên đó mà không cần lo lắng giao thức nào đang làm gì đằng sau hậu trường.

Trường hợp tệ nhất? Mọi thứ sẽ bị phân mảnh. Các nhà cung cấp khác nhau sẽ đưa ra các phiên bản A2A hoặc MCP riêng của họ và cuối cùng chúng ta sẽ gặp phải một mớ hỗn độn — giống như những ngày đầu của dịch vụ web, khi không có gì có thể giao tiếp với bất kỳ thứ gì khác mà không cần nhiều mã kết dính.

Giải pháp trung gian? Các công cụ và phần mềm trung gian nguồn mở có thể cứu vãn tình hình. Các dự án này sẽ nằm giữa các tác nhân và giao thức, trừu tượng hóa các điểm khác biệt và cung cấp cho các nhà phát triển một API sạch, thống nhất — trong khi dịch ẩn tùy thuộc vào nơi và cách các tác nhân của bạn chạy.

Tóm lại: chúng ta còn quá sớm. Nhưng cách chúng ta xây dựng và áp dụng các tiêu chuẩn này ngay bây giờ sẽ định hình liệu các tác nhân AI có trở thành một hệ sinh thái gắn kết hay là một mớ hỗn độn của các silo.

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
