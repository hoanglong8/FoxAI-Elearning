# 🧭 AI PRODUCT MANAGEMENT FRAMEWORK

### Bộ câu hỏi định hướng (AI PM Framework Questionaire)

## I. MỤC TIÊU TÀI LIỆU

Tài liệu này giúp đội ngũ **Product Manager (PM)** của FOXAI hiểu rõ **toàn bộ quy trình quản lý sản phẩm AI**, thông qua hệ thống câu hỏi hướng dẫn trong từng giai đoạn – từ khám phá vấn đề cho đến cải tiến liên tục sau khi triển khai.

Framework này giúp:

* Đảm bảo **AI được áp dụng đúng chỗ, đúng mục tiêu**.
* Kết nối chặt chẽ giữa **đội kinh doanh – kỹ thuật – thiết kế – dữ liệu**.
* Hình thành tư duy sản phẩm **lấy người dùng làm trung tâm** trong mọi quyết định liên quan đến AI.

<img width="2048" height="1095" alt="image" src="https://github.com/user-attachments/assets/f2a7f90f-d453-454c-8d8d-f91cbd15e164" />

---

## II. CÁC GIAI ĐOẠN CHÍNH CỦA AI PRODUCT MANAGEMENT

### **1️⃣ Problem Discovery – Khám phá vấn đề**

**Mục tiêu:** Tìm ra vấn đề người dùng quan trọng nhất và phù hợp với mục tiêu kinh doanh.

**Câu hỏi định hướng:**

* Người dùng đang gặp **vấn đề lớn nhất nào**?
* **Mục tiêu kinh doanh** của sản phẩm là gì?
* Vấn đề này nếu giải quyết được sẽ tạo **tác động cụ thể nào** (doanh thu, trải nghiệm, hiệu quả vận hành)?

👉 *Kết quả mong đợi:* Một “problem statement” rõ ràng, đo lường được.

---

### **2️⃣ AI Feasibility – Đánh giá tính khả thi của AI**

**Mục tiêu:** Xác định xem có cần AI thực sự không, hay chỉ cần các thuật toán thông thường.

**Câu hỏi định hướng:**

* **AI có phải là cách tốt nhất** để giải quyết vấn đề này?
* Có **phương pháp đơn giản hơn** (rule-based, heuristic, automation) hiệu quả tương đương không?
* **Chi phí, thời gian, và rủi ro** khi dùng AI là gì?

👉 *Kết quả mong đợi:* Ra quyết định **có nên dùng AI hay không** – nếu có, xác định phạm vi sử dụng.

---

### **3️⃣ Data Strategy – Chiến lược dữ liệu**

**Mục tiêu:** Đảm bảo có đủ dữ liệu chất lượng để huấn luyện mô hình AI.

**Câu hỏi định hướng:**

* Có **đủ dữ liệu cần thiết** chưa? Nếu chưa, thu thập bằng cách nào?
* Dữ liệu có **đầy đủ, không thiên lệch (unbiased)** không?
* **Cân bằng giữa chất lượng và số lượng** dữ liệu ra sao?

👉 *Kết quả mong đợi:* Bộ dữ liệu khả dụng, sạch, phù hợp với mục tiêu mô hình.

---

### **4️⃣ Model Development – Phát triển mô hình**

**Mục tiêu:** Cùng data scientist xây dựng hoặc chọn mô hình phù hợp.

**Câu hỏi định hướng:**

* Mô hình cần **làm được gì** (output cụ thể)?
* **Chỉ số thành công (metric)** là gì – accuracy, recall, F1, NDCG...?
* Có nên **sử dụng mô hình sẵn có** (pre-trained, API) hay huấn luyện riêng?

👉 *Kết quả mong đợi:* Mô hình khả thi, có metric đánh giá rõ ràng và quy trình kiểm thử minh bạch.

---

### **5️⃣ Solution Design / Integration / UI Design – Thiết kế giải pháp và giao diện**

**Mục tiêu:** Đảm bảo trải nghiệm người dùng tự nhiên và hữu ích khi tương tác với AI.

**Câu hỏi định hướng:**

* **Trải nghiệm người dùng** mong muốn là gì?
* Làm sao để **AI phản hồi chính xác nhưng vẫn dễ hiểu**?
* **Cơ chế phản hồi (feedback)** từ người dùng hoạt động ra sao?
* Người dùng làm gì khi AI **trả lời sai hoặc không chắc chắn**?

👉 *Kết quả mong đợi:* Giao diện và trải nghiệm thống nhất, thân thiện, dễ phản hồi và cải tiến.

---

### **6️⃣ Testing, Deployment & Production Monitoring – Kiểm thử, triển khai và giám sát**

**Mục tiêu:** Đảm bảo sản phẩm AI đạt chất lượng cao khi ra mắt và vận hành ổn định.

**Câu hỏi định hướng:**

* Làm sao để **đảm bảo đầu ra đúng chuẩn và tuân thủ guideline**?
* Cách **kiểm thử ở quy mô lớn (at scale)** là gì?
* Làm sao để **cân bằng giữa chất lượng – tốc độ – chi phí**?
* Sau khi triển khai, **theo dõi performance và lỗi** như thế nào?

👉 *Kết quả mong đợi:* Sản phẩm AI hoạt động ổn định, được giám sát bằng metric rõ ràng (accuracy, latency, cost...).

---

### **7️⃣ Iteration & Improvement – Lặp lại và cải tiến**

**Mục tiêu:** Học từ phản hồi người dùng, cải thiện liên tục chất lượng và tính năng.

**Câu hỏi định hướng:**

* **Người dùng phản hồi** ra sao về kết quả AI?
* Có cần **xây dựng năng lực mới** hay tối ưu năng lực cũ?
* Làm sao để tiến từ **“tốt” đến “xuất sắc”** – cả về mô hình lẫn trải nghiệm?

👉 *Kết quả mong đợi:* Chu trình cải tiến liên tục, giúp sản phẩm ngày càng thông minh và phù hợp thực tế.

---

## III. KẾT LUẬN

**AI Product Manager** không chỉ quản lý mô hình AI, mà còn là người **kết nối giữa giá trị kinh doanh – dữ liệu – công nghệ – trải nghiệm người dùng**.

Framework câu hỏi này giúp PM:

* Luôn xác định rõ *“tại sao làm”*, *“làm cái gì”*, và *“làm như thế nào”*.
* Ra quyết định có cơ sở, tránh rơi vào bẫy “AI vì AI”.
* Duy trì chu trình **học – thử – cải tiến** liên tục sau khi ra mắt sản phẩm.

---

