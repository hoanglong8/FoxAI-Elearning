## TỰ LÀM MỘT AI NHƯ PERPLEXITY
Người ta nói rằng bạn cần hàng triệu triệu đô la và một đội ngũ kỹ sư thiên tài để tạo ra AI như Perplexity[.]ai.
Có lẽ, người ta đã sai rồi. 
Toàn bộ mã nguồn (full code) để xây dựng một AI có năng lực gần tương tự, đã được công khai. F-R-E-E. Và bạn có thể sử dụng ngay bây giờ.
Đang ở trên Git_Hub, có tên là Scira. 

<img width="960" height="520" alt="image" src="https://github.com/user-attachments/assets/671039db-839f-41d9-9e6e-e4e6e784428e" />

__________
## SCIRA LÀ GÌ?
Scira (tên cũ MiniPerplx) là một công cụ tìm kiếm tối giản vận hành bằng trí tuệ nhân tạo. Chức năng chính của Scira là tìm kiếm thông tin trên internet, tổng hợp lại và trích dẫn nguồn cụ thể cho từng thông tin được đưa ra. 
Cấu trúc của Scira được xây dựng dựa trên Vercel AI SDK, một bộ công cụ phát triển phần mềm giúp tích hợp AI vào ứng dụng, và sử dụng 'năng lực' của các mô hình ngôn ngữ tiên tiến như Grok 3 của xAI để xử lý truy vấn. 
Thay vì trả về một danh sách dài các liên kết, Scira sẽ đọc, hiểu và chắt lọc nội dung từ các trang web để đưa ra một câu trả lời tổng hợp, kèm theo liên kết đến nguồn đã sử dụng.
(Đọc đến đây bạn đã thấy giống Perplexity rồi đúng không?)
__________
## CÁCH SCIRA THAY ĐỔI CUỘC CHƠI TÌM KIẾM
Cơ chế hoạt động của Scira: 
Khi bạn nhập một câu hỏi, Scira không chỉ tìm các từ khóa khớp với truy vấn. Scira sẽ sử dụng các API tìm kiếm chuyên dụng như của Exa AI để 'quét' các trang web, tìm kiếm thông tin trên các nền tảng như Red_dit với bộ lọc thời gian, và thậm chí có khả năng trích xuất nội dung trực tiếp từ một URL cụ thể...
Sau khi thu thập dữ liệu thô, các mô hình AI được kết nối với Scira, như Grok 3, sẽ phân tích toàn bộ thông tin có được, xác định những thông tin cốt lõi, rồi tạo thành một câu trả lời hoàn chỉnh, mạch lạc, súc tích.
Mỗi phần của câu trả lời đều được đánh dấu và liên kết ngược lại với nguồn tin, nên bạn có thể ngay lập tức kiểm chứng thông tin mà không cần phải tự mình mở từng trang web một. 
__________
## F-R-E-E
Scira là một dự án mã nguồn mở trên Gi_tHub, nên bạn có thể tùy chỉnh, hoặc tự triển khai trên thiết bị/máy chủ của mình, có thể cài đặt qua Docker hoặc Node[.]js.
Nếu muốn nhanh hơn, bạn có thể trải nghiệm trực tiếp Scira thông qua trang web scira[.]ai. Và bạn còn có thể thiết lập Scira làm công cụ tìm kiếm mặc định trên trình duyệt Ch_rome. 
__________
## THÔNG TIN CHÍNH THỨC
"Scira (Formerly MiniPerplx) is a minimalistic AI-powered search engine that helps you find information on the internet and cites it too.
LLM Models Supported:
1. xAI: Grok 3, Grok 3 Mini, Grok 2 Vision
2. Google: Gemini 2.5 Flash (Preview), Gemini 2.5 Pro (Preview)
3. Anthropic: Claude 4 Sonnet
4. OpenAI: GPT-4o, o4-mini, o3 (with reasoning capabilities)
5. Groq: Qwen QwQ 32B, Qwen 3 32B, Meta's Llama 4 Maverick
....
## Core Search & Information:
1. AI-powered search: Get answers to your questions using multiple AI models including xAI's Grok, Anthropic's Claude, Google's Gemini, and OpenAI's GPT models
2. Web search: Search the web using Exa's API with support for multiple queries, search depths, and topics
3. URL content retrieval: Extract and analyze content from any URL using Exa AI with live crawling capabilities
4. Reddit search: Search Reddit content with time range filtering using Tavily API
5. X (Twitter) search: Search X posts with date ranges and specific handle filtering using xAI Live Search
6. Extreme search: Advanced multi-step search capability for complex queries..."
__________
## SOURCE/HƯỚNG DẪN CÀI ĐẶT/THÔNG TIN CHI TIẾT/NGUỒN TIN:
github.com/zaidmukaddam/scira

## TÀI LIỆU API (API Documentation - Complete guide to integrating with the Scira API): 
api.scira.ai/docs
