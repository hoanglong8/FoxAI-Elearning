# Phần 1 - From Prompt Injections to Protocol Exploits: Threats in LLM-Powered AI Agents Workflows
(Từ việc tiêm lệnh độc đến khai thác lỗ hổng giao thức: Các mối đe dọa trong quy trình làm việc của các tác nhân AI được hỗ trợ bởi LLM)

Link bài báo: https://arxiv.org/abs/2506.23260v1

![image](https://github.com/user-attachments/assets/0353e709-de4b-40a5-9eeb-ddeeb6e497a8)

Bài báo này trình bày sự phát triển của các hệ thống trí tuệ nhân tạo (AI), đặc biệt là những hệ thống dựa trên các mô hình ngôn ngữ lớn (LLMs) như ChatGPT. Những hệ thống này không chỉ được sử dụng cho mục đích trò chuyện mà còn có khả năng thực hiện các hành động thay cho con người. Các "đại lý AI tự động" giờ đây có thể truy xuất dữ liệu theo thời gian thực, thực hiện các nhiệm vụ phức tạp và thậm chí hợp tác với nhau thông qua các plugin và giao thức giao tiếp đặc biệt. Tuy nhiên, với sức mạnh này, cũng có một mối nguy ngày càng gia tăng: công nghệ phát triển quá nhanh, trong khi các biện pháp bảo mật thì không theo kịp.

Nghiên cứu mới này cung cấp cái nhìn tổng quan đầu tiên về các mối đe dọa tiềm tàng mà các đại lý AI phải đối mặt. Nó chỉ ra rằng những công cụ giúp cho các đại lý AI mạnh mẽ—như khả năng kết nối với các trang web, chương trình khác hoặc ngay cả các đại lý khác—cũng có thể làm cho chúng trở nên dễ tổn thương trước các cuộc tấn công.

Bài báo phân loại các kỹ thuật tấn công thành bốn nhóm chính - 𝐓𝐡𝐫𝐞𝐚𝐭𝐬 𝐓𝐚𝐱𝐨𝐧𝐨𝐦𝐲:

## 1.Input Manipulation (Tấn công lời nhắc - Thao túng prompt đầu vào)
Kẻ tấn công có thể lừa AI bằng cách sử dụng các prompt được thiết kế tinh vi (gọi là “tiêm prompt độc”), quá tải nó với thông tin để hướng dẫn phản hồi của nó, hoặc sử dụng hình ảnh hoặc âm thanh độc hại.

![image](https://github.com/user-attachments/assets/da01d9be-6581-4aca-a654-f76e7e6d818d)

![image](https://github.com/user-attachments/assets/ca8c98d8-5b8c-45ba-bcf2-aae09edebc43)

Tham khảo tại link sau: https://www.deepchecks.com/prompt-injection-attacks-impact-and-prevention/

![image](https://github.com/user-attachments/assets/6ac2eab9-116f-46b1-bd6a-a06620b4fc9a)

Tham khảo tại link sau: https://medium.com/@ajay.monga73/llm01-prompt-injection-explained-with-practical-example-protecting-your-llm-from-malicious-input-96acee9a2712

Và thử sức tại minigame `GPT Prompt Attack` sau: https://gpa.43z.one/

![image](https://github.com/user-attachments/assets/125e6671-3343-48f9-925c-d05ecac712db)

Hiện tại, sau khoảng 20 lần submit thì cũng đã tìm được secret key tại level 4:

![image](https://github.com/user-attachments/assets/118e22ea-fc8b-4b96-b885-0ac0417ef3b6)

## 2.Model Compromise (Tấn công xâm nhập mô hình)
Cài đặt các `backdoor ẩn` hoặc chiến lược `đầu độc dữ liệu` để chiếm quyền điều khiển mô hình. Đây là tình huống khi mô hình AI bị xâm phạm hoặc bị thay đổi theo hướng không mong muốn bởi kẻ tấn công. Điều này có thể xảy ra khi kẻ tấn công tận dụng các lỗ hổng hoặc điểm yếu trong mô hình AI, khiến cho hành vi của mô hình không còn đáng tin cậy hoặc không phản ánh chính xác dữ liệu đầu vào.

![image](https://github.com/user-attachments/assets/47558c7b-296f-4896-b20c-1129162ca82f)

![image](https://github.com/user-attachments/assets/4c33b8c5-651a-499e-95f0-7fdcc88e9d9a)
`Ví dụ về quy trình làm việc của các biến thể tấn công cửa sau trên một đại lý mua sắm do LLM cung cấp.`

## 3.System and Privacy Attacks (Tấn công hệ thống và quyền riêng tư)
**System Attacks (Tấn công hệ thống):**
Tấn công vào hệ thống có thể bao gồm các phương thức mà kẻ tấn công lợi dụng lỗ hổng trong chương trình hoặc giao thức để thao túng hoặc phá vỡ chức năng của hệ thống AI. Những cuộc tấn công này có thể nhằm mục đích làm sai lệch quyết định của AI, sử dụng AI cho các mục đích xấu, hoặc thậm chí là kiểm soát hệ thống AI.

![image](https://github.com/user-attachments/assets/65c24cdd-e2eb-44c7-8991-e15b139a1a0f)

**Privacy Attacks (Tấn công vào quyền riêng tư):**
Tấn công vào quyền riêng tư liên quan đến việc xâm phạm thông tin cá nhân của người dùng. Kẻ tấn công có thể thu thập dữ liệu cá nhân mà không có sự đồng ý của người dùng, dẫn đến rủi ro về đánh cắp thông tin nhạy cảm. Ví dụ, nếu một AI có thể truy cập vào cơ sở dữ liệu của người dùng, thì nó có thể bị lợi dụng để truy xuất thông tin riêng tư mà không có sự cho phép.

![image](https://github.com/user-attachments/assets/f373aef0-5558-485b-b9c8-3caba921bd18)
`Quy trình làm việc của một cuộc tấn công đầu độc bộ nhớ trong một tác nhân theo dõi đơn hàng. Trong giai đoạn tiêm , một đối thủ sẽ thêm một lời nhắc được tạo ra vào các truy vấn lành tính “Đơn hàng A đã được giao chưa?”, khiến mô hình lưu trữ các bước bắc cầu và suy luận độc hại (ánh xạ A → B). Các mục nhập này (cộng với truy vấn gốc) được lưu vào bộ nhớ của tác nhân. Trong các vòng liên tiếp, đối thủ cắt bớt văn bản hướng dẫn, chỉ giữ lại các bước bị đầu độc. Cuối cùng, khi khách hàng hỏi "Khi nào đơn hàng A sẽ đến?", bộ nhớ bị xâm phạm được lấy lại, khiến mô hình báo cáo ngày giao hàng của đơn hàng B (ngày 20 tháng 2) thay vì ngày thực tế (ngày 15 tháng 3).`

## 4.Protocol Vulnerabilities (Tấn công vào lỗ hổng giao thức)
Tận dụng các lỗ hổng trong các giao thức như Model Context Protocol (MCP) và Agent Communication Protocol (ACP).

**Giao thức (protocol)** là một tập hợp các quy tắc và hướng dẫn cho phép các hệ thống khác nhau giao tiếp và trao đổi thông tin. Trong trường hợp của các tác nhân AI, giao thức có thể liên quan đến cách mà các AI tương tác với nhau hoặc với các dịch vụ bên ngoài.

![image](https://github.com/user-attachments/assets/8a594776-a49c-4fba-9402-b6d7056a34d3)

**Lỗ hổng (vulnerabilities):** Khi một giao thức có lỗ hổng, điều này có thể cho phép các kẻ tấn công khai thác điểm yếu đó để thực hiện hành vi độc hại. Ví dụ, họ có thể can thiệp vào thông tin được gửi qua giao thức, thay đổi các yêu cầu hoặc nhận phản hồi không chính xác.

![image](https://github.com/user-attachments/assets/538ff377-e563-4702-90ca-3d13e9e502a5)
`Tấn công suy luận tư cách thành viên: Kẻ tấn công chia prompt thành một phân đoạn truy vấn (“Bí quyết làm bánh kếp là gì?”) và một văn bản bổ sung (“Chúc bạn ngon miệng!”). Truy vấn RAG lấy các công thức làm bánh kếp từ kho lưu trữ tài liệu bên ngoài và điều kiện hóa mô hình ngôn ngữ để tạo ra mẹo nấu ăn (ví dụ: “Sử dụng bơ sữa thay vì sữa, đánh trứng riêng, để bột nghỉ trong 15 phút…”). Điểm tương đồng Cosine cao cho thấy lời nhắc làm bánh kếp ban đầu có trong cơ sở dữ liệu công thức, cho phép kẻ tấn công suy ra tư cách thành viên, từ đó suy ra những điểm dữ liệu nào đang được truy cập nhúng hoặc sử dụng trong phản hồi của tác nhân, làm tổn hại đến tính bảo mật của người dùng.`

**Tác động của các lỗ hổng giao thức:** Khi các tác nhân AI có thể sử dụng các giao thức để giao tiếp, bất kỳ lỗ hổng nào trong giao thức đó có thể dẫn đến việc kẻ tấn công thực hiện các cuộc tấn công phức tạp hoặc chiếm quyền kiểm soát hành động của AI, dẫn đến hậu quả nghiêm trọng. Điều này đặc biệt quan trọng khi AI có khả năng thực hiện các thao tác tự động mà không cần sự giám sát của con người.

![image](https://github.com/user-attachments/assets/a49a1817-a54a-4181-a2bf-5a4dca346635)

Trong phần tiếp theo, tài liệu cũng điểm qua những thách thức chính và hướng nghiên cứu tương lai, cách thức bảo mật các MCP thông qua việc:
- Quản lý niềm tin động và theo dõi nguồn gốc mã hóa;
- Thiết kế và gia cố các giao diện web đại lý;
- Đạt được khả năng phục hồi trong môi trường đa đại lý và liên kết.

![image](https://github.com/user-attachments/assets/a5528044-7629-4ec1-b3a3-fa173ae332d0)
`Các lỗ hổng và kỹ thuật tấn công trong giao tiếp với tác nhân AI do LLM hỗ trợ.`

Các nhà nghiên cứu đã liệt kê hơn 30 kỹ thuật tấn công cụ thể và đánh giá tính khả thi của chúng hiện nay. Họ cũng khám phá những gì có thể được thực hiện để chống lại—từ việc cải thiện xác minh mã hóa và xây dựng các giao diện đại lý an toàn hơn, đến việc tạo ra hệ thống đáng tin cậy cho các đại lý làm việc trong đội nhóm hoặc qua mạng lưới.

![image](https://github.com/user-attachments/assets/a74aa9de-8cba-4e31-9576-4ea778791434)

Cuối cùng, tài liệu này vừa là một lời cảnh báo vừa là một lộ trình: khi các đại lý AI trở nên gắn bó hơn với thế giới số của chúng ta, chúng ta cần suy nghĩ lại cách để giữ cho chúng—và cả chúng ta—an toàn.

![image](https://github.com/user-attachments/assets/61c16b5a-e755-4203-be31-c1174a45152c)

---
# Phần 2 - Các thuật ngữ quan trọng
## Cách học thuật ngữ tiếng Anh hiệu quả, dễ hiểu và nhớ lâu
### 1. Hiểu khái niệm cơ bản (Basic Concept)
Bắt đầu bằng việc hiểu rõ định nghĩa chính xác và cơ bản của thuật ngữ.

Tóm tắt lại ý chính bằng ngôn ngữ đơn giản, tránh dùng thuật ngữ phức tạp ngay từ đầu.

### 2. Từ đồng nghĩa (Synonyms) và cụm từ liên quan (Collocation)
Tìm các từ đồng nghĩa, từ gần nghĩa để mở rộng vốn từ và hình dung thuật ngữ theo nhiều khía cạnh.

Học các cụm từ thường đi kèm (collocations) để hiểu cách thuật ngữ được sử dụng trong ngữ cảnh.

### 3. Chia tách từ (Word Breakdown)
Phân tích thuật ngữ thành các thành phần nhỏ, hiểu ý nghĩa từng phần.

Giúp liên tưởng dễ dàng và nhớ ý nghĩa tổng thể.

### 4. Phát âm tương đồng (Phonetic Association)
Luyện phát âm chuẩn để ghi nhớ qua âm thanh.

Dùng kỹ thuật liên tưởng âm thanh gần giống để tăng khả năng ghi nhớ.

### 5. Hình ảnh tương tự (Visual Association)
Tìm hoặc tạo hình ảnh minh họa cho thuật ngữ, giúp bộ não dễ ghi nhớ hơn bằng thị giác.

Hình ảnh càng liên quan và sinh động càng tốt.

### 6. Kể câu chuyện (Storytelling)
Tạo một câu chuyện, ví dụ thực tế hoặc tình huống liên quan đến thuật ngữ.

Giúp kết nối kiến thức với cảm xúc và kinh nghiệm, tăng hiệu quả ghi nhớ.

### 7. Lặp lại và thực hành (Repetition and Practice)
Ôn tập thường xuyên, dùng flashcards, quiz, hoặc giải thích lại cho người khác.

Sử dụng thuật ngữ trong câu, viết đoạn văn hoặc thảo luận.

---
## Thẻ học thuật ngữ Flashcard
### Flashcard 1: Input Manipulation
| **Front**                                                               | **Back**                                                                                                                                                                                                                                                                                                                                                        |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Input Manipulation**<br>/ˈɪnpʊt ˌmænɪpjʊˈleɪʃən/<br>Khai thác đầu vào | **Khái niệm:** Thao túng, điều khiển dữ liệu đầu vào của hệ thống AI để gây sai lệch kết quả.<br>**Từ đồng nghĩa:** dữ liệu bị thao túng, khai thác đầu vào.<br>**Hình ảnh:** ![minh họa](https://tse1.mm.bing.net/th/id/OIP.YDI-ElHsBUOzE3rHy9gUgQHaEK?pid=Api)<br>**Câu chuyện:** Hacker thay đổi dữ liệu gửi cho AI, khiến AI trả kết quả sai gây thiệt hại. |

### Flashcard 2: Prompt Injection
| **Front**                                                         | **Back**                                                                                                                                                                                                                                                                                                                      |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Prompt Injection**<br>/prɒmpt ɪnˈdʒɛkʃən/<br>Tiêm lệnh (vào AI) | **Khái niệm:** Chèn câu lệnh hoặc mã độc vào prompt, làm sai lệch hoặc kiểm soát AI.<br>**Từ đồng nghĩa:** tiêm lệnh, chèn lệnh.<br>**Hình ảnh:** ![minh họa](https://tse3.mm.bing.net/th/id/OIP.sTkoD95gzBLVLUXB16VEQgHaEE?pid=Api)<br>**Câu chuyện:** Kẻ tấn công chèn câu lệnh độc hại để chatbot tiết lộ dữ liệu bảo mật. |

### Flashcard 3: Model Compromise
| **Front**                                  | **Back**                                                                                                                                                                                                                                                        |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Model Compromise**<br>/ˈmɒdəl kɒmˈpraɪz/ | **Khái niệm:** Mô hình AI bị tấn công hoặc thay đổi không mong muốn gây mất an toàn.<br>**Từ đồng nghĩa:** model tampering, model poisoning.<br>**Hình ảnh:** Hacker xâm nhập mô hình AI.<br>**Câu chuyện:** Hacker tiêm dữ liệu độc làm mô hình nhận diện sai. |

### Flashcard 4: System and Privacy Attacks
| **Front**                                                      | **Back**                                                                                                                                                                                                                                              |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **System and Privacy Attacks**<br>/ˈsɪstəm ənd ˈprɪvəsi əˈtæk/ | **Khái niệm:** Tấn công làm hỏng hệ thống hoặc đánh cắp thông tin cá nhân.<br>**Từ đồng nghĩa:** data breach, privacy violation.<br>**Hình ảnh:** Hacker thu thập dữ liệu cá nhân.<br>**Câu chuyện:** Rò rỉ dữ liệu khách hàng ngân hàng gây lừa đảo. |

### Flashcard 5: Protocol Vulnerabilities
| **Front**                                                     | **Back**                                                                                                                                                                                                                                                |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Protocol Vulnerabilities**<br>/ˈproʊtəkɒl ˌvʌlnərəˈbɪlɪtiz/ | **Khái niệm:** Lỗ hổng trong giao thức truyền thông dễ bị tấn công.<br>**Từ đồng nghĩa:** protocol flaws, security loopholes.<br>**Hình ảnh:** Cánh cửa hở trên đường truyền mạng.<br>**Câu chuyện:** Hacker khai thác lỗ hổng để chiếm quyền hệ thống. |

### Flashcard 6: Hidden Backdoor
| **Front**                                 | **Back**                                                                                                                                                                                                                |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Hidden Backdoor**<br>/ˈhɪdən ˈbækˌdɔːr/ | **Khái niệm:** Cửa hậu bí mật cho phép truy cập trái phép.<br>**Từ đồng nghĩa:** secret backdoor.<br>**Hình ảnh:** Cửa bí mật trong hệ thống.<br>**Câu chuyện:** Hacker giấu cửa hậu để truy cập hệ thống bất hợp pháp. |

### Flashcard 7: Agent Communication Protocol
| **Front**                                                                  | **Back**                                                                                                                                                                                                                          |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Agent Communication Protocol**<br>/ˈeɪdʒənt kəˌmjuːnɪˈkeɪʃən ˈproʊtəkɒl/ | **Khái niệm:** Quy tắc giao tiếp giữa các tác nhân phần mềm AI.<br>**Từ đồng nghĩa:** communication standard.<br>**Hình ảnh:** Robot giao tiếp với nhau qua mạng.<br>**Câu chuyện:** Các agent phối hợp thực hiện nhiệm vụ chung. |

### Flashcard 8: Threats Taxonomy
| **Front**                                  | **Back**                                                                                                                                                                                                              |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Threats Taxonomy**<br>/θrɛts tæksˈɒnəmi/ | **Khái niệm:** Hệ thống phân loại các loại mối đe dọa.<br>**Từ đồng nghĩa:** threat classification.<br>**Hình ảnh:** Cây phân loại các mối đe dọa.<br>**Câu chuyện:** Chuyên gia dùng taxonomy để phân tích tấn công. |

### Flashcard 9: Cryptographic Provenance Tracking
| **Front**                                                                   | **Back**                                                                                                                                                                                                               |
| --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Cryptographic Provenance Tracking**<br>/ˌkrɪptəˈɡræfɪk prɒvənəns ˈtrækɪŋ/ | **Khái niệm:** Theo dõi nguồn gốc dữ liệu bằng mã hóa.<br>**Từ đồng nghĩa:** secure data lineage.<br>**Hình ảnh:** Dấu vân tay mã hóa trên dữ liệu.<br>**Câu chuyện:** Xác minh dữ liệu chưa bị thay đổi hoặc giả mạo. |

### Flashcard 10: Designing and Hardening
| **Front**                                               | **Back**                                                                                                                                                                                                                        |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Designing and Hardening**<br>/dɪˈzaɪnɪŋ ænd ˈhɑrdnɪŋ/ | **Khái niệm:** Thiết kế và củng cố hệ thống để tăng bảo mật.<br>**Từ đồng nghĩa:** system reinforcement.<br>**Hình ảnh:** Tòa nhà kiên cố với nhiều lớp bảo vệ.<br>**Câu chuyện:** Kỹ sư thiết kế hệ thống AI nhiều lớp bảo vệ. |

### Flashcard 11: Achieving Resilience
| **Front**                                          | **Back**                                                                                                                                                                                                |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Achieving Resilience**<br>/əˈtʃiːvɪŋ rɪˈzɪliəns/ | **Khái niệm:** Khả năng hệ thống phục hồi sau sự cố.<br>**Từ đồng nghĩa:** robustness.<br>**Hình ảnh:** Cây bị gió bẻ nhưng vẫn đứng vững.<br>**Câu chuyện:** Hệ thống AI vẫn hoạt động dù bị tấn công. |

---
