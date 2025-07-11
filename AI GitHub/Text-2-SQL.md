# 🎯 Mục tiêu của loạt series: 700 bài chia sẻ AI thực chiến trong doanh nghiệp

Mình đang thực hiện một hành trình 700 bài viết chia sẻ kiến thức thực chiến về AI trong doanh nghiệp, với kỳ vọng hoàn thành trong khoảng 3 năm.
Nghe có vẻ hơi điên rồ và lãng phí thơi gian nhưng mình xem đây là một cách để:
Rèn luyện kỷ luật cá nhân trong việc học AI
Lan toả tư duy phát hiện sớm – giải quyết vấn đề đúng cách
Xây dựng nền tảng để sau này có thể tư vấn, đồng hành cùng các doanh nghiệp lớn ứng dụng AI bài bản hơn
Trong các bài viết hiện tại và sắp tới, Mình đã và sẽ không tập trung vào việc hướng dẫn từng dòng code, mà cố gắng giải thích mindset, logic và best practices mà mình học được từ các hệ thống lớn như LinkedIn, Meta, Microsoft,...hay từ cộng đồng AI...

<img width="526" height="526" alt="image" src="https://github.com/user-attachments/assets/9b4c434a-deae-4419-aad8-5e26dbb4f172" />

## 💡 Tất cả đều miễn phí – mục tiêu là chia sẻ & cộng đồng
Series này mình không bán khóa học, không upsell gì cả, chỉ đơn giản là chia sẻ kiến thức mình học được, trải nghiệm được.
Mình chỉ hi vọng:
Giúp các doanh nghiệp và các bạn đang làm AI hiểu rõ hơn cách triển khai giải pháp thực tế
Rút ngắn đường cong học tập bằng cách chia sẻ tư duy của “expert thật sự”, chứ không chỉ mày mò thử-sai như mình đã từng và đang khi học để chia sẽ cho mọi người

## 🧠 Tập trung vào tư duy phát hiện vấn đề sớm – không chỉ “chạy được là xong”
Bạn có thể thấy trong các bài viết, mình thường không đi sâu code.
Thay vào đó, mình đặt câu hỏi như:
Nếu bạn build chatbot trả lời SQL cho ngân hàng, nhưng quên tính privacy thì sao?
Bạn có nghĩ đến retry, logging, hoặc cách scale agent khi tăng truy vấn chưa?
Nếu openai sập trong 1 giờ, liệu app của bạn có chết theo không?
=> Đây chính là góc nhìn mình hi vọng có thể mang đến:
Phát hiện sớm – xử lý đúng – tiết kiệm chi phí & thời gian.

<img width="1283" height="784" alt="image" src="https://github.com/user-attachments/assets/5821a9ec-823f-4e17-bcba-69363f277cde" />

## ✅ Cách theo dõi trọn vẹn loạt series
Nếu bạn quan tâm, có thể theo dõi qua:
Cách 1: tại chính group này, Facebook cá nhân, hoặc group gốc của bài viết( trong trường hợp muốn theo dõi sớm nhất và k bỏ lỡ 1 bài nào đó 😆 – mình sẽ post đều các phần
Cách 2: Tìm theo hashtag:
Toàn chuỗi: #700DaysOfAI
Chuỗi cụ thể (for e.g: Text-to-SQL): #TextToSQLSeries
Bài cụ thể: #Post9_700AI

<img width="1279" height="718" alt="image" src="https://github.com/user-attachments/assets/ac80556f-f936-4c52-9e45-1542ec24272c" />

Mình sẽ tiếp tục chia sẻ nhiều chủ đề thực chiến hơn, như:
Build AI chatbot / multi -agent chuẩn Enterprise
Quản lý cost, latency, privacy, logging,scale
các vấn đề liên quan đến scale , solution....

<img width="1278" height="714" alt="image" src="https://github.com/user-attachments/assets/f8c47375-c00d-4859-9082-0e8f061488fb" />

---
# 🧠 [Bài 1/700] – Truy vấn SQL đúng không bắt đầu từ model
Doanh nghiệp của ANH CHỊ có hàng ngàn bảng dữ liệu...
Nhưng mỗi lần cần hỏi:
“Tháng trước có bao nhiêu người dùng mới ở thị trường Việt Nam?”
Lại là một hành trình bất lực:
❌ Phải chờ bên Dev viết SQL, QUÁ LÂU...
❌ Phải đoán xem dùng bảng nào đúng
❌ Và đôi khi… hỏi nhầm người
❌ Dashboard tao ra dữ liệu rỗng vì truy vấn sai
❌ Báo cáo sai số vì lấy nhầm bảng, cột

Tình trạng này đang xảy ra mỗi ngày ở rất nhiều doanh nghiệp — không phải do chúng ta không có AI model nào làm đươcj, mà vì một vấn đề tưởng chừng rất nhỏ:
👉 Không biết bảng, cột.... nào là đúng để dùng.
Thay vì đổ lỗi cho mô hình LLM hay prompt chưa tốt, chúng ta nên bắt đầu từ một thứ rất con người:
🧠 Giúp AI hiểu rõ bảng nào là đúng – với từng người hỏi, từng phòng ban, từng ngữ cảnh( context).
Đó là cách LinkedIn xây dựng SQL Bot – một trợ lý AI nội bộ, cho phép nhân viên gõ câu hỏi tự nhiên và nhận lại SQL đúng, chạy được, có kiểm soát truy cập.

Họ làm điều đó như thế nào? và chúng ta có thể bắt chước không?

🔹 Làm giàu metadata:
– Thu thập mô tả từ các experts
– Dùng AI tự ghi chú thêm từ Slack, tài liệu nội bộ

🔹 Giảm nhiễu bảng dữ liệu
– Lọc các bảng liên quan
– Chỉ giữ lại những bảng phổ biến, được dùng gần đây

🔹 Cá nhân hóa theo người dùng
– Dựa vào lịch sử truy vấn, phòng ban, vai trò trong tổ chức

<img width="2048" height="1142" alt="image" src="https://github.com/user-attachments/assets/06d4344f-3132-405e-ab45-5cff2e0e6d03" />

<img width="2048" height="1137" alt="image" src="https://github.com/user-attachments/assets/ca7e1ea1-b2d6-4355-8575-ba4acb238258" />

<img width="2048" height="1152" alt="image" src="https://github.com/user-attachments/assets/f9459f06-23f8-498c-bc14-27940fb91539" />

---
# 🧠 [Bài 2/700] – "Text-to-SQL for Enterprise Data – Từ Overview đến Ứng Dụng"
✨ Bạn đã bao giờ AI tạo SQL query nhưng kết quả chẳng dùng được, vì?
Trả về bảng/cột không liên quan
Sai cú pháp hoặc lỗi “table not found”
Câu lệnh quá dài, thiếu logic từng bước

## 📌 Vấn đề cần giải quyết
Sau khi đã lọc xuống ~20 bảng “hot” (Chiến lược #1 trong bài chia sẽ trước), AI vẫn có thể gặp các khó khăn sau:
1. Chọn sai bảng, sai cột → Kết quả không chính xác
2. Không biết tách câu hỏi phức tạp → Sinh SQL monolithic, thiếu linh hoạt , dẫn đến sai sót
3. Lỗi syntax & thiếu recovery → Cần dev can thiệp nếu gặp error

## 💡 Giải pháp Chiến lược #2: Knowledge Graph & Multi-Agent LLM
1. Xây Knowledge Graph
– Vấn đề: AI thiếu ngữ cảnh quan hệ giữa bảng/cột
– Giải pháp: Tạo mạng lưới nodes/edges thể hiện joins, metrics vs. dimensions, popularity, certified examples

2. LLM Re-Ranking Agents
– Vấn đề: Lọc 20 bảng vẫn còn quá nhiều → dễ chọn nhầm
– Giải pháp:
Table re-rank: LLM đánh giá & chọn top 7 bảng
Field re-rank: LLM sắp xếp cột theo độ liên quan

3. Iterative Query Planning
– Vấn đề: Câu hỏi multi-step bị ép vào 1 lệnh duy nhất
– Giải pháp: Phân nhỏ thành sub-queries, sinh từng fragment theo thứ tự, dùng phương pháp chia để trị

4. Validator & Self-Correction
– Vấn đề: Lỗi syntax, table/cột không tồn tại → bot dừng
– Giải pháp:
Programmatic checks (tồn tại & syntax)
LLM tự sửa lỗi dựa trên feedback cho đến khi SQL chạy được

<img width="1269" height="713" alt="image" src="https://github.com/user-attachments/assets/3b1910fb-00ca-4975-85b2-3a5d46a35b1e" />

---
# 🧠 [Bài 3/700] – "Text-to-SQL for Enterprise Data – Từ Overview đến Ứng Dụng"
Chiến lược #1 và #2 ở các post trước đã giúp cải thiện đáng kể chất lượng của câu SQL:
- Bảng được lọc kỹ hơn → ít nhiễu
- Cột được chọn chính xác hơn
- Truy vấn đa bước được chia nhỏ, dễ kiểm soát
- Lỗi cú pháp có validator & self-correction

🎯 Nhưng câu hỏi lớn là:
Nếu câu trả lời vẫn sai, làm sao tôi có biết nó sai ở đâu ?
Và tôi có thể làm gì để sửa không?
Hay tôi chỉ có thể… ngồi nhìn kết quả sai và hông biết vì sao😆?

📌 Nên giờ chúng ta xuất hiện 1 vài vấn đề cần handle:
Không hiểu được lý do chọn bảng/cột
→ Không biết logic đằng sau câu trả lời
Không sửa từng bước được
→ Chỉ nhận về SQL “đóng hộp”
Không thấy được quyền hạn ảnh hưởng thế nào đến kết quả
→ Cùng 1 câu hỏi, người khác có thể thấy bảng khác

💡 Giải pháp Chiến lược #3: Giao Diện Thân Thiện, Trò Chuyện & Tùy Biến
LinkedIn giải quyết điều này bằng cách:

Nhúng SQL Bot vào ngay bên trong hệ thống hiện tại (DARWIN)
→ Không cần mở tab mới, không cần copy-paste
→ Có nút “Fix with AI” hiện lên khi truy vấn lỗi

Phân loại ý định người dùng (Intent Classification)
→ Biết bạn đang cần gì: tìm bảng, sửa syntax, hỏi ví dụ

Lưu lịch sử chat và phản hồi người dùng
→ Có thể follow-up: “Tại sao bạn chọn bảng này?”, hoặc “Loại bảng test giùm tôi nhé”
→ Bot học theo cách mỗi người/team làm việc

Chế độ dẫn đường (Guided Mode)
→ Người dùng tự chọn bảng → xác nhận cột → xem bản nháp SQL → kiểm duyệt
→ Từng bước rõ ràng, dễ hiểu, có quyền điều chỉnh

Hiển thị chi tiết cho mỗi bảng & truy vấn
- Tên, mô tả
- Gắn nhãn “Certified” hoặc “Popular”
- Tần suất truy cập trung bình tháng
- Gợi ý các bảng thường join cùng
- Link mở rộng tới DataHub

Tự động kiểm tra quyền truy cập (ACL Check)
→ Nếu bạn không có quyền xem bảng X, bot sẽ báo hoặc gợi ý bảng thay thế
→ Nếu có quyền, bot chèn tự động SET ROLE phù hợp → giảm lỗi “Access Denied”
✅ Kết quả: Tăng adoption gấp 5–10 lần so với chatbot prototype độc lập

Người dùng tin tưởng hơn vì hiểu được quá trình, kiểm soát được kết quả.
Tuy nhiên, khi mình đọc đến chiến lược này, chiến lược nhúng sâu vào hệ thống, điều chỉnh từng bước, logic phụ thuộc người dùng & quyền hạn…
Đây rõ ràng là mô hình lý tưởng cho các ứng dụng nội bộ.
Nhưng liệu chúng có thể mang mô hình này ra môi trường production-scale, nơi có hàng ngàn user không đồng nhất?

<img width="2048" height="1146" alt="image" src="https://github.com/user-attachments/assets/722eb3eb-a559-440f-b647-e27c87f498a1" />

---
# 🧠 [Bài 4/700] – "Text-to-SQL for Enterprise Data – Từ Overview đến Ứng Dụng"
💭 Ở Chiến lược #1 & #2, chúng ta đã lọc bảng kỹ hơn, hiểu mối quan hệ cột tốt hơn, chia nhỏ truy vấn phức tạp và thậm chí tự sửa lỗi syntax.
💭 Với Chiến lược #3, chúng ta nhúng SQL Bot trực tiếp vào hệ thống phân tích , mang lại trải nghiệm chat linh hoạt, có thể giải thích từng bước, cho phép người dùng can thiệp , và kết quả: adoption tăng 5–10 lần.

## 🎯 Nhưng thực tế là, đời không như mơ:
Dù AI bot thông minh, được nhúng tốt đến đâu… vẫn có lúc chúng ta muốn dạy nó cách hành động như 1 thành viên của team để truy vấn hơn là chỉ 1 bot chung chung, có thể hiểu đơn giản là personlized 😉.
🧩 Vậy có những vấn đề nào cần giải quyết:
Mỗi team có cách làm khác nhau
Dataset rất lớn → chọn bảng sai là chuyện thường
Các luật “bất thành văn” như “đừng lấy bảng test nha mày”, “mặc định lọc theo vùng cụ thể” → bot hông biết! => Bạn có thể hình dung dễ hiểu những rule này nó là logic business, có thể ngân hàng A sẽ khác ngân hàng B, mà logic này chưa chắc AI đã biết, do nó có được public để các model được train đâu, nên ta phải cung cấp

## 💡 Chiến lược #4: Cho người dùng tự tùy chỉnh cách bot hoạt động
Từ “One-size-fits-all” → thành “Bot riêng cho team bạn”
Em sẽ giới thiệu mọi người triển khai 3 đòn bẩy nhé:

## 1. Giới hạn phạm vi dữ liệu (Dataset Scope)
✅ Team Marketing không cần nhìn bảng của Growth hay Finance
→ Họ chỉ định rõ: hey, bot chỉ được chọn bảng trong schema Marketing, UserEngagement
→ Vừa tăng tốc, vừa giảm nhầm lẫn
→ Người mới vào cũng sẽ không bị overwhelm với hàng nghìn bảng khác nhau

## 2.Custom Instructions – Hướng dẫn riêng cho team
✅ Giang hồ có luật ngầm, enterprise cũng vậy 😂
– "Exclude test account"
– "Luôn dùng timezone Asia/Ho_Chi_Minh"
→ Người dùng có thể gõ vào textbox hướng dẫn riêng
→ Bot sẽ tự động thêm vào prompt mỗi lần sinh SQL
⛳️ Kết quả:
Truy vấn sinh ra sẽ khớp hơn với chính sách nội bộ mà không cần sửa tay mỗi lần

## 3.Certified Example Queries – ví dụ đúng để AI tham khảo
✅ Team Growth có sẵn truy vấn chuẩn tính Monthly Active Users
→ Họ gắn tag certified → bot học và ưu tiên đề xuất lại nếu câu hỏi tương tự
→ Không chỉ đúng logic mà còn đảm bảo đúng chuẩn báo cáo nội bộ

👉 Không phải lúc nào cũng cần platform team update rule cho AI
👉 Người dùng giờ có thể “huấn luyện nhẹ” cho bot theo ngữ cảnh riêng
🔎 Và có lẽ đây chính là điểm khác biệt giữa AI được “cá nhân hoá” và AI basic chung chung.
Mọi người có nghĩ chiến dịch này giúp giảm "AI hallucination" và tăng niềm tin khi ứng dụng ở quy mô lớn?

<img width="2048" height="1139" alt="image" src="https://github.com/user-attachments/assets/4c226c52-7f96-481f-a782-521d7c9c94e0" />

---
# [Bài 5/700] – "Text-to-SQL for Enterprise Data – Từ Overview đến Ứng Dụng"
Nếu bạn từng phát triển một hệ thống sử dụng AI – đặc biệt là chatbot AI cho Enterprise , có lẽ đã từng rơi vào tình huống:
✅ Bot trả lời rất nhanh
🤔 Nhưng nó không trả lời đúng, hoặc đơn giản là chậm nhưng không biết giai đoạn nào, vì sao....????
Hay tệ hơn:
Bạn “tinh chỉnh” rất nhiều thứ – prompt, context, số bảng cần lấy, vòng lặp self-correction,...
Nhưng cuối cùng :đoán mò rằng việc sẽ có giúp hệ thống tốt lên chút....

## 🎯 Chiến lược #5: Đo Lường Để Cải Tiến
LinkedIn không đoán mò như hầu hết chúng ta. Họ build 1 hệ thống Benchmark để kiểm tra toàn diện hiệu quả hệ thống SQL Bot:
130 câu hỏi từ 10 team khác nhau → mô phỏng use case thực tế
Mỗi câu hỏi có ground truth SQL để so sánh chính xác

Đo lường qua metric(số liệu là thứ nói lên tất cả, chứ không phải, mình nghĩ là nó do cái này, cái kia....):
Table Recall – lấy được đúng bao nhiêu bảng..
Field Recall – có đủ cột không..

Hallucination Rate – nó có bịa bảng/cột ra trong quá trình không
Syntax Score – truy vấn có chạy được không
Latency – trả lời nhanh hay chậm
📌 Mình sẽ viết riêng một bài chi tiết về các chỉ số Benchmark này để mọi người có thể tự build cho usecase của mình

<img width="2048" height="1146" alt="image" src="https://github.com/user-attachments/assets/01446f9e-dea0-4146-a6c7-d96ef201b562" />

<img width="2048" height="1146" alt="image" src="https://github.com/user-attachments/assets/de3aa26c-ba1f-40b7-8a51-675071de5b87" />

---
# [Bài 6/700] – “Text-to-SQL for Enterprise Data – Từ Overview đến Ứng Dụng”
Tiếp nối từ 5 phần trước, nơi chúng ta tìm hiểu cách LinkedIn xây dựng giải pháp TEXT TO SQL của mình thì Phần 6 này mình sẽ giới thiệu một giải pháp opensource giúp mọi người xây dựng Text-to-SQL nhanh chóng mà không phải mất thời gian hơn 1 năm như Linkedin đã từng:

## 💡 Với 'Vanna AI', chúng ta chỉ mất vài tuần để triển khai, nghe thật tuyệt phải không?
Vanna AI là một framework mã nguồn mở, giúp bạn:
- RAG-based SQL Generation
– Train trên metadata (schema, docs, ví dụ SQL)
– Semantic Retrieval → Lấy candidate bảng/cột
– LLM prompt templates → Sinh SQL chính xác

Multi-LLM & Multi-Vector Store
– Hỗ trợ OpenAI, Anthropic, Gemini, Ollama…
– Vector Store: FAISS, Chroma, Pinecone, Milvus…

Đa nền tảng tích hợp (Pluggable Frontends)
– Jupyter Notebook & Colab
– Streamlit, Flask web-app
– Slack Bot, VSCode Extension, CLI

Self-Learning & Feedback Loop
– Tự động học từ các truy vấn thành công
– Lưu lại cặp “câu hỏi – SQL đúng” để fine-tune

Privacy-First & Security
– Dữ liệu schema/docs/query chỉ lưu nội bộ
– Có thể self-host vector DB trong VPC

<img width="2048" height="1150" alt="image" src="https://github.com/user-attachments/assets/817905fc-5fff-4578-8c38-79f4a1a3890c" />

<img width="2048" height="1146" alt="image" src="https://github.com/user-attachments/assets/ca6a3eae-5219-4a9e-9c64-7ad56e53048a" />

---
# 🎯 [Bài 7/700] – “Text-to-SQL for Enterprise Data – Từ Overview đến Ứng Dụng”

🔍 Hiểu sâu Text-to-SQL: Giai đoạn Training của Vanna AI hoạt động ra sao?
Ở phần 6, mình đã giới thiệu cho mọi ngừoi overview về Vanna AI – một opensource giúp bạn xây hệ thống Text-to-SQL cho enterprise chỉ trong vài tháng ngắn ngủi.
Hôm nay, mình sẽ đi sâu vào giai đoạn Training – nơi AI "học" kiến thức của doanh nghiệp trước khi có thể trả lời bất kỳ câu hỏi nào.

## 🧠 Giai đoạn Training: Vanna AI học như thế nào?
Để có thể sinh ra các truy vấn SQL chính xác, Vanna cần được "huấn luyện" trên các nguồn kiến thức sẵn có như:

🔹 DDL – Cấu trúc dữ liệu
Chính là các câu lệnh CREATE TABLE mô tả bảng, cột, kiểu dữ liệu.

🔹 Documentation – Ngữ cảnh kinh doanh
Các định nghĩa, quy ước, quy tắc kinh doanh… Ví dụ: “Active user = đã đăng ký trong 30 ngày qua”.

🔹 Question–SQL Pairs – Hành vi mong đợi
Câu hỏi thật từ người dùng kèm truy vấn SQL mẫu đúng → giúp AI học logic ngữ nghĩa.
Tất cả sẽ được chuyển hóa thành vector → lưu trong Vector DB → dùng cho truy hồi ngữ nghĩa (semantic retrieval).

Lưu ý cho moi người: Vanna không học từ dữ liệu người dùng thật! Mọi dữ liệu huấn luyện đều do bạn cung cấp, giúp đảm bảo bảo mật và tính kiểm soát.
Ở các bài viết sau, mình sẽ phân tích kỹ hơn về privacy trong Text-to-SQL các doanh nghiệp như ngân hàng...cần bảo mật data.... ,

<img width="1270" height="699" alt="image" src="https://github.com/user-attachments/assets/e127c122-c3fd-49b0-940f-26002bcd0a01" />

<img width="1264" height="1036" alt="image" src="https://github.com/user-attachments/assets/809587c7-5348-44d8-a4bd-8da3947b6557" />

---
# 🎯 [Bài 8/700] – “Text-to-SQL for Enterprise Data – Từ Overview đến Ứng Dụng”
🔍 Giai đoạn Trả Lời của Vanna AI hoạt động như thế nào???
Tiếp nối Bài 7, nơi mình giúp mọi người hiểu cách Vanna AI được "train" từ metadata như DDL, documentation, và SQL pairs thì hôm nay, chúng ta sẽ đi vào giai đoạn mà người dùng quan tâm nhất:
❓ Làm sao Vanna AI "hiểu" câu hỏi và sinh ra đúng SQL?

## 🔍 Giai đoạn 1: Hiểu câu hỏi (Understanding the Ask)
Ngay khi người dùng question , hệ thống
1.RAG Retrieval:
+ Tìm kiếm các câu hỏi giống, DDL liên quan, và tài liệu hướng dẫn từ vector store.
2.Derive Context:Tập hợp các dữ kiện vừa retrieve để tạo "prompt tăng cường" (augmented prompt).
📌 Lưu ý: Lúc này, dữ liệu thực vẫn chưa bị truy vấn, chỉ có metadata thôi nhé các bro!

## 🤖 Giai đoạn 2: create SQL và answer
LLM receive prompt và create SQL query.
SQL được parse và validate – giúp giảm rủi ro lỗi cú pháp.
Thực thi SQL trong DB thật .
Trả kết quả: Có thể là DataFrame, câu trả lời tự nhiên, hoặc biểu đồ Plotly.

<img width="1253" height="823" alt="image" src="https://github.com/user-attachments/assets/6810beae-7484-46f0-b58d-60552f561ec1" />

## ✅ Kết quả:
Bạn có được một hệ thống:
Trả lời bằng SQL, tương tác realtime.
Hiểu sâu ý định của người dùng.
Có thể tích hợp ngay với Slack, Dashboard, hoặc Backend App.

## 🎯 Chiến lược này đặc biệt tốt nếu bạn làm Data Platform cho đội business hoặc xây chatbot nội bộ trả lời dữ liệu.
Ở những bài tới, mình sẽ nói rõ về Privacy – cho enterprise như bank.... cần sự bảo mật data tuyệt đối

<img width="1273" height="1070" alt="image" src="https://github.com/user-attachments/assets/836393cd-bd53-4ef3-93a0-94a208748d9c" />

---
# 🎯 [Bài 9/700] – “Text-to-SQL for Enterprise Data – Từ Overview đến Ứng Dụng”
## Self-Correction( tự sửa lỗi) cho Vanna AI
Tiếp nối từ các bài trước nơi mình đã giới thiệu về 1 hệ thống "TEXT to SQL chuẩn enterprise " nên được build như thế nào, mất thời gian ra sao... và Vanna AI giups gì trong bài toán thực tế này ...
Rõ ràng chúng ta có thể thấy Vanna AI đã cho thấy sức mạnh của RAG trong việc create SQL chỉ sau vài tuần triển khai. Nhưng trong thực tế, như vậy vẫn chưa đủ, để kéo gần khoảng cách với việc tự build 1 hệ thống phức tạp, nhiều thời gian như linkedin, chúng ta còn làm rất nhiều, 1 trong số đó là giúp nó giống 1 ngừoi bạn đồng hành thật sự, 1 ngừoi bạn biết lắng nghe các lỗi và tìm cách cải thiện.....
❌ Khi gặp lỗi nhỏ như sai tên cột, lỗi join, syntax…
Vanna AI dừng và không có cách nào retry hay sửa lại.
Điều này làm nhiều use-case phức tạp (multi-join, aggregation, subquery) dễ bị fail và không thể đưa ra kết quả chính xác cho user....
🛠️ Giải pháp: Upgrade Vanna AI với Self-Correction
Retry Logic
– Tự động thử lại đến 3 lần khi query fail
Error Analysis
– Phân loại lỗi: syntax, column/table not found, join, group by…=> AI dễ dàng biết hướng đi rõ ràng
Contextual Correction
– Gửi lại lỗi + schema + guidance vào prompt để LLM tự sửa
Learning Loop
– Lưu lại mỗi lần sửa thành công để lần sau hạn chế phải sửa nữa
Kết quả
– Giảm >90% tỉ lệ fail cơ bản
– Hỗ trợ tốt trong "đa số" usecase cho các truy vấn enterprise phức tạp. Theo dõi bài 10 để hiểu làm sao để tiếp tục nâng cao độ chính xác....
– Hệ thống ngày càng “thông minh” theo thời gian

<img width="1271" height="715" alt="image" src="https://github.com/user-attachments/assets/2f759dec-f7b5-45f4-b8c5-4d930584c271" />

---
# 🎯 [Bài 10/700] – “Text-to-SQL for Enterprise Data – Từ Overview đến Ứng Dụng”
## Chọn Độ Chính Xác Hay Bảo Mật? – thuật ngữ allow_llm_to_see_data
chúng ta sẽ bàn đến một khía cạnh "khá nhạy cảm" nhưng lại không thể bỏ qua khi đưa vào production:

- 💡 Làm sao để hệ thống Text-to-SQL vừa chính xác, vừa đảm bảo bảo mật dữ liệu...hazzzzz?

- ❗Vấn đề: Không cho nhìn thấy data → Dự đoán… sai bét cho những usecase cần 1 giá trị cụ thể để truy vấn

Mặc định, Vanna AI không được truy vấn dữ liệu thật – LLM chỉ được dùng metadata như schema, docs, SQL mẫu. Điều này đúng cho các tổ chức như ngân hàng, y tế… nơi mà chỉ 1 query SELECT nhầm cũng gây rò rỉ dữ liệu.

Nhưng điều gì xảy ra khi người dùng hỏi:

“Doanh thu tháng này tại TP.HCM là bao nhiêu?”

Trong khi DB chỉ lưu giá trị là "HCM" chứ không phải "TP.HCM" hay "Ho Chi Minh".

Kết quả là:

LLM không match được giá trị với cột city

→ Truy vấn trả về rỗng, hoặc sai

→ Người dùng thì không hiểu vì sao bot lại ngu vậy? 😅

Giải pháp: Bật allow_llm_to_see_data = True

Khi bật chế độ này, hệ thống được phép:

Tạm thời chạy truy vấn như SELECT DISTINCT city FROM customers

Trích xuất vài giá trị thật trong DB (vd: "HCM", "HANOI", "DANANG")

Dùng thông tin đó để viết lại câu truy vấn chính xác hơn

✅ Kết quả khi bật chế độ này:

Độ chính xác tăng rõ rệt ở các truy vấn chứa giá trị dạng text/string

Bot có thể hiểu ý định người dùng và map chính xác hơn

Giải quyết được nhiều case mơ hồ như "TP.HCM" → "HCM"

⚠️ Nhưng đừng quên, đây là "con dao hai lưỡi" nha mọi ngừoi, nó liên quan bài toán đánh đổi và cân bằng

LLM có thể nhìn thấy một phần data thật

Nếu không kiểm soát kỹ, có thể truy xuất nhầm bảng nhạy cảm

<img width="2048" height="1303" alt="image" src="https://github.com/user-attachments/assets/430aa534-b675-4aac-956e-c43165b51b7c" />

---
