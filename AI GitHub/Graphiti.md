# Graphiti
[Graphiti](https://github.com/getzep/graphiti) là một khung công tác nguồn mở được thiết kế để xây dựng và truy vấn các biểu đồ kiến thức thời gian thực, thời gian thực, đặc biệt phù hợp với các tác nhân AI hoạt động trong môi trường động. Nó liên tục tích hợp dữ liệu từ nhiều nguồn và, thông qua mô hình dữ liệu thời gian kép (ghi cả thời gian sự kiện và thời gian ăn vào), hỗ trợ truy xuất thông tin hiệu quả và các truy vấn lịch sử chính xác. Khung này nhằm mục đích cung cấp cho các tác nhân AI một cơ sở kiến thức giàu có, giàu có, tối ưu hóa việc ra quyết định và đáp ứng của họ. Một MCP chính thức cũng có sẵn để tích hợp với Claude.

<img width="1335" height="355" alt="image" src="https://github.com/user-attachments/assets/c70f4fc2-4fb8-4674-81a4-cf88ea3f8483" />


<img width="1397" height="581" alt="image" src="https://github.com/user-attachments/assets/c57baec6-6054-42cf-946c-57d987ad2101" />

<img width="1197" height="792" alt="image" src="https://github.com/user-attachments/assets/2e32fa01-74d8-4244-abd9-8a46eaaa7020" />

<img width="320" height="340" alt="image" src="https://github.com/user-attachments/assets/0adc89f0-f954-4199-bfaa-4f573d2496a1" />

---
## Zep: Kiến trúc đồ thị tri thức thời gian cho bộ nhớ tác nhân - https://arxiv.org/html/2501.13956v1
<img width="2852" height="1226" alt="image" src="https://github.com/user-attachments/assets/d6a29c3a-ddb3-4643-be39-862215a73594" />

**Zep** là một dịch vụ bộ nhớ lớp mới dành cho các tác nhân AI, nổi bật với khả năng vượt trội hơn các hệ thống hiện có như MemGPT trong việc truy xuất bộ nhớ sâu (DMR). Zep không chỉ xử lý tài liệu tĩnh mà còn có thể tổng hợp kiến thức động từ nhiều nguồn khác nhau, bao gồm hội thoại đang diễn ra và dữ liệu kinh doanh, qua đó đáp ứng tốt hơn các nhu cầu thực tế trong doanh nghiệp.

Cốt lõi của Zep là **Graphiti** – một công cụ đồ thị kiến thức nhận biết thời gian, giúp tổng hợp và duy trì các mối quan hệ lịch sử phức tạp giữa các thực thể và sự kiện trong bộ nhớ của tác nhân AI. Kiến trúc này cho phép Zep thể hiện một thế giới phức tạp và luôn thay đổi, đồng thời giảm độ trễ phản hồi và tăng độ chính xác trong truy xuất thông tin.

Zep tổ chức bộ nhớ theo ba tầng:

* **Đồ thị con tập** chứa dữ liệu thô như tin nhắn hoặc JSON.
* **Đồ thị con thực thể ngữ nghĩa** biểu diễn các thực thể và mối quan hệ giữa chúng.
* **Đồ thị con cộng đồng** nhóm các thực thể liên quan thành các cụm lớn hơn với tóm tắt nội dung.

Hệ thống áp dụng các kỹ thuật tìm kiếm đa chiều (tương đồng ngữ nghĩa, tìm kiếm toàn văn, tìm kiếm theo chiều rộng đồ thị) và xếp hạng lại kết quả bằng các mô hình LLM để cung cấp ngữ cảnh phù hợp cho tác nhân.

Trong các bài đánh giá chuẩn DMR và LongMemEval, Zep cho thấy hiệu quả vượt trội so với các phương pháp hiện tại, với độ chính xác cải thiện đáng kể và giảm đáng kể độ trễ phản hồi, đặc biệt trong các trường hợp sử dụng có tính chất phức tạp và dữ liệu dài hạn.

Bài báo cũng đề xuất rằng việc tích hợp các mô hình LLM với kiến trúc đồ thị tri thức thời gian như Zep là một bước tiến quan trọng cho các tác nhân AI có bộ nhớ dài hạn, đáp ứng các yêu cầu thực tiễn trong doanh nghiệp và ứng dụng phức tạp.

---
