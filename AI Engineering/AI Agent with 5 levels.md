# Các tác nhân AI ở 5 cấp độ khó (Với việc triển khai mã đầy đủ)

Link nguồn: https://medium.com/data-science-collective/ai-agents-in-5-levels-of-difficulty-with-full-code-implementation-15d794becfb8

Khoảng hai tuần trước thời hạn nộp sản phẩm lớn, nguyên mẫu đại lý của tôi đã bị hỏng một cách tồi tệ nhất.

Nó trông ổn . Nó lấy dữ liệu, gọi công cụ và thậm chí giải thích các bước của nó. Nhưng bên trong, nó chỉ là trò bịp bợm. Không có trạng thái thực, không có bộ nhớ, không có lý luận. Chỉ là những lời nhắc lặp lại giả vờ thông minh.

Tôi chỉ nhận ra khi một trường hợp ngoại lệ hoàn toàn làm hỏng nó. Đó là lúc tôi nhận ra: Tôi đã không xây dựng một tác nhân. Tôi đã xây dựng một chuỗi nhắc nhở lạ mắt.

Sửa lỗi có nghĩa là thiết kế lại toàn bộ mọi thứ — không chỉ là chuỗi các cuộc gọi, mà còn quản lý trạng thái, quyết định và luồng dài hạn. Khi đã hiểu, mọi thứ trở nên đơn giản hơn. Mã, logic, kết quả.

Đó chính là nội dung của hướng dẫn này: chia thiết kế tác nhân thành năm cấp độ khó thực tế — mỗi cấp độ có mã hoạt động.

Cho dù bạn mới bắt đầu hay đang cố gắng mở rộng quy mô các nhiệm vụ thực tế, điều này sẽ giúp bạn tránh được những cạm bẫy mà tôi đã mắc phải và xây dựng các tác nhân thực sự hiệu quả.

Các cấp độ là:

- Cấp độ 1: Đại lý có Công cụ và Hướng dẫn (Tools and Instructions Agent)
- Cấp độ 2: Đặc vụ có kiến ​​thức và trí nhớ (Knowledge and Memory Agent)
- Cấp độ 3: Tác nhân có trí nhớ dài hạn và lý luận (Long-Term Memory and Reasoning Agent)
- Cấp độ 4: Nhóm nhiều tác nhân (Multi-Agent)
- Cấp độ 5: Hệ thống Agentic (Agentic Systems)

Chúng ta hãy bắt đầu nhé.

## Cấp độ 1: Đại lý có Công cụ và Hướng dẫn
Đây là thiết lập cơ bản — một LLM tuân theo hướng dẫn và gọi các công cụ trong một vòng lặp. Khi mọi người nói, " các tác nhân chỉ là LLM cộng với việc sử dụng công cụ ", họ đang nói về cấp độ này (và tiết lộ họ đã khám phá được bao xa).

Hướng dẫn cho tác nhân biết phải làm gì. Các công cụ cho phép tác nhân thực hiện hành động — tìm nạp dữ liệu, gọi API hoặc kích hoạt quy trình công việc. Nó đơn giản nhưng đủ mạnh để tự động hóa một số tác vụ.

từ agno.agent nhập Agent 
từ agno.models.openai nhập OpenAIChat 
từ agno.tools.duckduckgo nhập DuckDuckGoTools 

```
agno_assist = Agent( 
  name= "Agno AGI" , 
  model=0penAIChat( id = "gpt-4.1" ), 
  description=dedent( """\ 
  Bạn là "Agno AGI, một AI Agent tự động có thể xây dựng các tác nhân bằng cách sử dụng 
  khuôn khổ Agno). Mục tiêu của bạn là giúp các nhà phát triển hiểu và sử dụng Agno bằng cách cung cấp 
  các giải thích, ví dụ về mã hoạt động và các giải thích bằng hình ảnh và âm thanh tùy chọn 
  về các khái niệm chính.""" ), 
  instructions= "Tìm kiếm thông tin về Agno trên web." , 
  tools=[DuckDuckGoTools()], 
  add_datetime_to_instructions= True , 
  markdown= True , 
) 
  agno_assist.print_response( "Agno là gì?" , stream= True )
```

## Cấp độ 2: Đặc vụ có kiến ​​thức và trí nhớ
Hầu hết các tác vụ đều yêu cầu thông tin mà mô hình không có. Bạn không thể nhồi nhét mọi thứ vào ngữ cảnh, do đó, tác nhân cần một cách để lấy kiến ​​thức khi chạy — đây là lúc RAG tác nhân hoặc lời nhắc động vài lần xuất hiện.

Tìm kiếm phải là kết hợp (toàn văn + ngữ nghĩa) và xếp hạng lại là bắt buộc. Kết hợp tìm kiếm kết hợp + xếp hạng lại là thiết lập plug-and-play tốt nhất cho việc truy xuất tác nhân.

Lưu trữ cung cấp bộ nhớ cho tác nhân. Theo mặc định, LLM không có trạng thái; việc lưu trữ các hành động, tin nhắn và quan sát trong quá khứ giúp tác nhân có trạng thái — có thể tham chiếu những gì đã xảy ra cho đến nay và đưa ra quyết định tốt hơn.

```
... nhập 
# Bạn cũng có thể sử dụng https://docs.agno.com/llms-full.txt để biết tài liệu đầy đủ
 knowledge_base = UrlKnowledge( 
  urls=[ "https://docs.agno.com/introduction.md" ], 
  vector_db=LanceDb( 
    uri= "tmp/lancedb" , 
    table_name= "agno_docs" , 
    search_type=SearchType.hybrid, 
    embedder=0penAIEmbedder( id = "text-embedding-3-small" ), 
    reranker=CohereReranker(model= "rerank-multilingual-v3.0" ), 
  ), 
) 
storage = SqliteStorage(table_name= "agent_sessions" , db_file= "tmp/agent.db" ) 

agno_assist = Agent( 
  name= "Agno AGI" , 
  model=OpenAIChat( id = "gpt-4.1" ) , 
  description=..., 
  instructions=..., 
  tools=[PythonTools(), DuckDuckGoTools()], 
  add_datetime_to_instructions= True , 
  # Agentic RAG được bật theo mặc định khi 'knowledge' được cung cấp cho Agent.
   knowledge=knowledge_base, 
  # Lưu trữ các phiên Agent trong cơ sở dữ liệu sqlite
   storage=storage, 
  # Thêm lịch sử trò chuyện vào tin nhắn
   add_history_to_messages= True , 
  # Số lần chạy lịch sử
   num_history_runs= 3 , 
  markdown= True , 
) 

if __name_ == "__main__" : 
  # Tải cơ sở kiến ​​thức, bình luận sau lần chạy đầu tiên 
  # agno_assist.knovledge.load(recreate=True)
   agno _assist.print_response( "Agno là gì?" , stream= True )
```

## Cấp độ 3: Tác nhân có trí nhớ dài hạn và lý luận
Bộ nhớ cho phép các tác nhân nhớ lại các chi tiết trong các phiên — như sở thích của người dùng, hành động trong quá khứ hoặc các lần thử không thành công — và thích ứng theo thời gian. Điều này mở khóa tính cá nhân hóa và tính liên tục. Chúng ta chỉ đang khám phá bề mặt ở đây, nhưng điều khiến tôi phấn khích nhất là khả năng tự học: các tác nhân tinh chỉnh hành vi của mình dựa trên kinh nghiệm trong quá khứ.

Lý luận đưa mọi thứ tiến xa hơn một bước.

Nó giúp tác nhân phân tích các vấn đề, đưa ra quyết định tốt hơn và tuân theo các hướng dẫn nhiều bước một cách đáng tin cậy hơn. Không chỉ là hiểu biết — mà còn là tăng tỷ lệ thành công của từng bước. Mọi nhà xây dựng tác nhân nghiêm túc đều cần biết khi nào và cách áp dụng nó.

```
... imports 

knowledge_base = ... 

memory = Memory( 
  # Sử dụng bất kỳ mô hình nào để tạo nemories
   model=0penAIChat( id = "gpt-4.1" ), 
  db=SqliteMemoryDb(table_name= "user_menories" , db_file= "tmp/agent.db" ), 
  delete_memories= True , 
  clear_memories= True , 
) 

  storage = 

agno_assist = Agent( 
  name= "Agno AGI" , 
  model=Claude ( id = "claude-3-7-sonnet-latest" ), 
  # Người dùng cho các bộ nhớ
   user_id= "ava" , 
  description=..., 
  instructions=..., 
  # Cung cấp cho Agent khả năng suy luận
   tools=[PythonTools(), DuckDuckGoTools(), 
  ReasoningTools(add_instructions= True )], 
  ... 
  # Lưu trữ các bộ nhớ trong cơ sở dữ liệu sqlite
   memory=memory, 
  # Cho phép Agent quản lý các bộ nhớ của nó
   enable_agentic_memory= True , 
) 

if __name__ == "__main__" : 
  # Bạn có thể bình luận điều này sau lần chạy đầu tiên và tác nhân sẽ nhớ
   agno_assist.print_response( "Luôn bắt đầu tin nhắn của bạn bằng 'hi ava'" , stream= True ) 
  agno_assist.print_response( "Agno là gì?" , stream= True )
```

## Cấp độ 4: Nhóm nhiều tác nhân
Các tác nhân hiệu quả nhất khi họ tập trung — chuyên về một lĩnh vực với bộ công cụ chặt chẽ (lý tưởng nhất là dưới 10). Để giải quyết các nhiệm vụ phức tạp hoặc rộng hơn, chúng tôi kết hợp họ thành các nhóm. Mỗi tác nhân xử lý một phần của vấn đề và cùng nhau họ bao quát nhiều lĩnh vực hơn.

Nhưng có một điều đáng lưu ý: nếu không có lý lẽ vững chắc, người lãnh đạo nhóm sẽ thất bại trong mọi vấn đề tế nhị. Dựa trên mọi thứ tôi đã thấy cho đến nay, các hệ thống đa tác nhân tự động vẫn không hoạt động đáng tin cậy. Chúng thành công ít hơn một nửa thời gian — điều này không đủ tốt.

Nói như vậy, một số kiến ​​trúc giúp việc phối hợp dễ dàng hơn. Ví dụ, Agno hỗ trợ ba chế độ thực thi — phối hợp, định tuyến và cộng tác — cùng với bộ nhớ tích hợp và quản lý ngữ cảnh. Bạn vẫn cần thiết kế cẩn thận, nhưng các khối xây dựng này giúp công việc đa tác nhân nghiêm túc khả thi hơn.

```
... nhập 

web agent = Agent( 
  name= "Web Search Agent" ,   
  role= "Xử lý yêu cầu tìm kiếm trên web" , 
  model= OpenAIChat( id = "gpt-4o-mini" ), 
  tools=[DuckDuckGoTools()], 
  instructions= "Luôn bao gồm các nguồn" , 
) 

finance_agent= Agent( 
  name= "Finance Agent" , 
  role= "Xử lý yêu cầu dữ liệu tài chính" , 
  model=OpenAIChat( id = "gpt-4o-mini" ), 
  tools=[YFinanceTools()], 
  instructions=[ 
    "Bạn là chuyên gia dữ liệu tài chính. Cung cấp dữ liệu ngắn gọn và chính xác." , 
    "Sử dụng bảng để hiển thị giá cổ phiếu, thông tin cơ bản (P/E, Vốn hóa thị trường)" , 
  ], 
) 


team_leader = Team ( 
  name= "Trưởng nhóm tài chính lý luận" , 
  mode= "coordinate" , 
  model=Claude( id = "claude-3-7-sonnet-latest" ), 
  members=[web_agent, finance_agent], 
  tools=[ReasoningTools(add_instructions= True )], 
  instructions=[ 
    "Sử dụng bảng để hiển thị dữ liệu" , 
    "Chỉ xuất câu trả lời cuối cùng, không có văn bản nào khác." , 
  ], 
  show_members_responses= True , 
  enable_agentic_context= True , 
  add_datetime_to_instructions= True , 
  success_criteria= "Nhóm đã hoàn thành nhiệm vụ thành công." , 
) 


if __name__ == "__main__" : 
  team_leader.print_response( 
    """\ 
    Phân tích tác động của mức thuế quan gần đây của Hoa Kỳ đối với hiệu suất thị trường trên 
các lĩnh vực chính sau: 
- Thép và Nhôm: (X, NUE, AA) 
- Phần cứng công nghệ: (AAPL, DELL, HPQ) 

Đối với từng lĩnh vực: 
1. So sánh hiệu suất cổ phiếu trước và sau khi áp dụng thuế quan 
2. Xác định sự gián đoạn chuỗi cung ứng và tỷ lệ phần trăm tác động đến chi phí 
3. Phân tích các phản ứng chiến lược của công ty (chuyển sản xuất về trong nước, điều chỉnh giá, đa dạng hóa nhà cung cấp 
)""" , 
  stream= True , 
  stream_intermediate_steps= True , 
  show_full_reasoning= Đúng , 
)
```

## Cấp độ 5: Hệ thống Agentic
Đây là nơi các tác nhân chuyển từ công cụ sang cơ sở hạ tầng. Hệ thống Agentic là API đầy đủ — hệ thống tiếp nhận yêu cầu của người dùng, khởi động quy trình làm việc không đồng bộ và truyền phát kết quả trở lại khi chúng khả dụng.

Nghe có vẻ sạch sẽ trên lý thuyết. Nhưng thực tế thì khó. Thực sự khó.

Bạn cần duy trì trạng thái khi yêu cầu đến, khởi chạy tác vụ nền, theo dõi tiến trình và truyền phát đầu ra khi nó được tạo. Websockets có thể giúp ích, nhưng chúng khó mở rộng và bảo trì. Hầu hết các nhóm đều đánh giá thấp độ phức tạp của phần phụ trợ ở đây.

Đây là những gì cần thiết để biến các tác nhân thành sản phẩm thực sự. Ở cấp độ này, bạn không xây dựng một tính năng — bạn đang xây dựng một hệ thống.

Từ thất bại trong bản demo đến chiến thắng thực sự: Bài học chính trong thiết kế tác nhân
Xây dựng các tác nhân AI không phải là chạy theo sự cường điệu hay tích hợp các tính năng — mà là làm đúng các nguyên tắc cơ bản. Mỗi cấp độ, từ việc sử dụng công cụ cơ bản đến các hệ thống tác nhân hoàn toàn không đồng bộ, chỉ tăng thêm sức mạnh khi kiến ​​trúc cơ bản vững chắc.

Hầu hết thất bại không đến từ việc bỏ lỡ khuôn khổ mới nhất. Chúng đến từ việc bỏ qua những điều cơ bản: ranh giới rõ ràng, lý luận vững chắc, trí nhớ hiệu quả và biết khi nào nên để con người nắm quyền điều khiển.

Nếu bạn bắt đầu đơn giản, xây dựng có mục đích, không phức tạp hóa ngay từ đầu và chỉ thêm độ phức tạp khi nó giải quyết được vấn đề thực tế, bạn sẽ không chỉ xây dựng được thứ gì đó thú vị mà còn xây dựng được thứ gì đó hữu ích.

![image](https://github.com/user-attachments/assets/68fe3daa-6d28-4823-a075-15a8132db5f5)

