## **Tài liệu Hướng dẫn Sử dụng: FOXAI HRM - Recruit Assistant**

### **1. Giới thiệu chung**

Chào mừng bạn đến với **FOXAI HRM - Recruit Assistant**, công cụ được thiết kế để tự động hóa và tối ưu hóa quy trình sàng lọc hồ sơ ứng viên.

Hệ thống sẽ giúp bạn tiết kiệm hàng giờ làm việc thủ công bằng cách tự động lấy dữ liệu, tải CV, và sử dụng trí tuệ nhân tạo (AI) để chấm điểm, so sánh CV với Mô tả công việc (JD). Mục tiêu của chúng tôi là giúp bạn nhanh chóng tìm ra những ứng viên tiềm năng nhất trong hàng trăm hồ sơ.

Tài liệu này sẽ hướng dẫn bạn qua các chức năng chính của hệ thống, từ việc tạo chiến dịch cho đến xem báo cáo phân tích.

### **2. Bắt đầu**

Để truy cập hệ thống, bạn vui lòng mở trình duyệt web và đi đến địa chỉ:
[FOXAI Recruitment Assistant](https://ai.studio/apps/drive/1xPk8wbhOPT1ONZfZeM14Vz5LQAY17rKc)

Sử dụng tài khoản (email và mật khẩu) đã được cấp để đăng nhập.

---

### **3. Hướng dẫn chi tiết các chức năng**

<img width="1896" height="979" alt="image" src="https://github.com/user-attachments/assets/83d7b9f8-b511-4d72-af5d-54d388dbcba7" />

#### **Màn hình 1: Quản lý Chiến dịch (Campaign Management)**

**Mục đích:** Đây là màn hình khởi đầu, nơi bạn tạo mới, xem và quản lý tất cả các đợt tuyển dụng của mình. Mỗi chiến dịch tương ứng với một vị trí bạn đang cần tuyển.

<img width="1908" height="978" alt="image" src="https://github.com/user-attachments/assets/add0aea8-3f60-405e-a7fe-5d1d1958270a" />

**Các bước thực hiện:**

1.  **Để tạo một chiến dịch tuyển dụng mới:**
    *   Nhấn vào nút **"+ Thêm chiến dịch mới"** ở góc trên bên phải.
    *   Một cửa sổ (popup) **"Thông tin Chiến dịch"** sẽ hiện ra.

2.  **Điền thông tin vào form:**
    *   **Tên chiến dịch:** Nhập tên vị trí tuyển dụng. (Mẹo: Nên đặt tên theo quy chuẩn, ví dụ: "Senior Frontend Developer Q4/2025").
    *   **Mô tả công việc (JD):** Dán toàn bộ nội dung JD của vị trí vào khung văn bản lớn. Đây là thông tin quan trọng nhất để AI dựa vào đó chấm điểm CV.
    *   **Số lượng tuyển:** Nhập số lượng vị trí cần tuyển.
    *   **Nguồn:** Ghi rõ nguồn tuyển dụng (ví dụ: TopCV).
    *   **Ngày bắt đầu/kết thúc:** Chọn khoảng thời gian diễn ra chiến dịch.
    *   **Trạng thái:** Chọn **"Open"** cho các chiến dịch đang chạy.
    *   Nhấn nút **"Lưu lại"** để hoàn tất. Chiến dịch mới sẽ xuất hiện trong danh sách.

<img width="1917" height="977" alt="image" src="https://github.com/user-attachments/assets/ebd2dc37-3c52-4fe8-8db9-7be02cceb039" />

3.  **Để chỉnh sửa thông tin một chiến dịch:**
    *   Tại bảng danh sách, tìm đến chiến dịch bạn muốn sửa.
    *   Ở cột "Hành động", nhấn vào biểu tượng **bút chì (Sửa)**.
    *   Cửa sổ thông tin sẽ hiện ra, bạn có thể thay đổi và lưu lại.

4.  **Để xem các ứng viên của một chiến dịch:**
    *   Ở cột "Hành động", nhấn vào nút **"Xem ứng viên"**. Hệ thống sẽ chuyển bạn đến Màn hình 2.

---

#### **Màn hình 2: Quản lý Ứng viên theo Chiến dịch**

**Mục đích:** Sau khi có chiến dịch, đây là nơi bạn lấy dữ liệu ứng viên từ các nền tảng (như TopCV) về hệ thống và ra lệnh cho AI bắt đầu quá trình xử lý.

<img width="1824" height="625" alt="image" src="https://github.com/user-attachments/assets/c9deef6f-32f9-4cca-ab10-0f09e92b416b" />

**Các bước thực hiện:**

1.  **Lấy danh sách ứng viên về hệ thống:**
    *   Sau khi chọn một chiến dịch từ Màn hình 1, bạn sẽ thấy tên chiến dịch được hiển thị rõ ràng.
    *   Nhấn vào nút **"Lấy ứng viên từ TopCV"**.
    *   Hệ thống sẽ chạy ngầm để kết nối và tải thông tin cơ bản (Họ tên, Email, SĐT) của tất cả ứng viên đã nộp đơn vào chiến dịch đó. Quá trình này có thể mất vài phút tùy số lượng.
    *   Sau khi hoàn tất, danh sách ứng viên sẽ hiện ra trong bảng bên dưới.

2.  **Bắt đầu tải và chấm điểm CV:**
    *   Sau khi đã có danh sách ứng viên, nhấn vào nút **"Tải và Chấm điểm CV"**.
    *   Đây là một tác vụ tự động và tốn nhiều thời gian nhất. Hệ thống sẽ lần lượt:
        *   Tải file CV của từng người về.
        *   Cập nhật "Trạng thái CV" từ **Pending** (Chờ xử lý) sang **Downloaded** (Đã tải).
        *   Gọi AI để phân tích và cho điểm từng CV.
    *   Bạn không cần phải ngồi chờ. Hệ thống sẽ tự chạy ngầm và bạn có thể quay lại kiểm tra kết quả sau.

3.  **Theo dõi trạng thái CV:**
    *   Cột **"Trạng thái CV"** giúp bạn biết tiến độ của hệ thống:
        *   **Pending (Màu vàng):** Hệ thống chưa xử lý CV này.
        *   **Downloaded (Màu xanh):** CV đã được tải về thành công và đang chờ chấm điểm hoặc đã chấm xong.
        *   **Error (Màu đỏ):** Có lỗi xảy ra khi tải CV (ví dụ: link hỏng).

---

#### **Chức năng tích hợp: Xem CV gốc của ứng viên**

**Mục đích:** Hệ thống cho phép bạn xem CV gốc của ứng viên một cách nhanh chóng ngay trên màn hình quản lý mà không cần phải đi đâu khác.

**Cách thực hiện:**

*   Tại Màn hình 2 (Quản lý Ứng viên), hãy nhìn vào cột **"Trạng thái CV"**.
*   Nếu một ứng viên có trạng thái là **Downloaded (Màu xanh)**, bạn sẽ thấy một **biểu tượng con mắt (Xem CV)** xuất hiện bên cạnh.
*   Nhấn vào biểu tượng đó, file CV (PDF) của ứng viên sẽ được mở ra trong một tab mới trên trình duyệt của bạn.

<img width="1826" height="916" alt="image" src="https://github.com/user-attachments/assets/7df11b0e-1de9-4a73-b2fe-6ce13e4ba108" />

---

#### **Màn hình 4: Báo cáo & Chấm điểm (Scoring Dashboard)**

**Mục đích:** Đây là màn hình quan trọng nhất, nơi hiển thị kết quả làm việc của AI, giúp bạn xem và so sánh điểm số của các ứng viên để nhanh chóng tìm ra những người phù hợp nhất.

<img width="1824" height="989" alt="image" src="https://github.com/user-attachments/assets/c6d1aa03-8af5-4e5b-bd0d-8b1c2bb34452" />

**Các bước thực hiện:**

1.  **Lọc kết quả:**
    *   **Chọn Chiến dịch:** Sử dụng bộ lọc để chọn chiến dịch bạn muốn xem báo cáo.
    *   **Lấy Top N:** Nhập số lượng ứng viên có điểm cao nhất mà bạn muốn xem (ví dụ: 10, 20, 50).
    *   Nhấn nút **"Lọc"** để xem kết quả.

2.  **Đọc và phân tích danh sách:**
    *   Danh sách ứng viên sẽ được **xếp hạng tự động theo điểm số giảm dần**.
    *   Bạn có thể xem nhanh các thông tin quan trọng:
        *   **Hạng:** Thứ hạng của ứng viên.
        *   **Họ tên:** Tên ứng viên.
        *   **Điểm số:** Điểm do AI chấm, thể hiện mức độ phù hợp với JD.
        *   **Điểm mạnh/yếu (tóm tắt):** Những từ khóa chính mà AI rút ra từ CV của ứng viên.

3.  **Xem phân tích chi tiết của AI:**
    *   Với những ứng viên mà bạn quan tâm, hãy nhấn vào nút **"Xem chi tiết"** ở cuối dòng.
    *   Một cửa sổ (popup) sẽ hiện ra, cung cấp phân tích sâu hơn:
        *   **Điểm số chính xác.**
        *   **Điểm mạnh:** Liệt kê chi tiết các kỹ năng, kinh nghiệm phù hợp.
        *   **Điểm yếu:** Những kỹ năng còn thiếu so với JD.
        *   **Đề xuất cải thiện:** Gợi ý từ AI.
        *   Tại đây, bạn cũng có một link **"Xem CV Gốc"** để đối chiếu lại thông tin.

<img width="1822" height="987" alt="image" src="https://github.com/user-attachments/assets/c648672d-6475-416f-8d7d-f1e14465c8c0" />

---
### **Tài liệu Nền tảng cho Salekit & Pitching Deck**
**Giải pháp: FOXAI HRM - Recruit Assistant**

*   **Sản phẩm dành cho:** Doanh nghiệp đang đối mặt với thách thức tuyển dụng số lượng lớn, mong muốn tối ưu hóa quy trình và nâng cao chất lượng ứng viên đầu vào.
*   **Tuyên bố giá trị (Value Proposition):** FOXAI HRM - Recruit Assistant là giải pháp công nghệ AI giúp tự động hóa 80% quy trình sàng lọc hồ sơ, giúp bộ phận nhân sự **tuyển đúng người, nhanh hơn** và ra quyết định tuyển dụng dựa trên dữ liệu khách quan.

---

### **1. Function List (Danh sách Chức năng Kỹ thuật)**

*(Phần này mô tả các hành động cụ thể mà hệ thống có thể thực hiện - Dùng để đội ngũ marketing hiểu sâu về "cỗ máy" bên trong)*

*   **Quản lý Chiến dịch:**
    *   `CreateCampaign`: Tạo mới một chiến dịch tuyển dụng với các trường thông tin (JD, số lượng, ngày...).
    *   `UpdateCampaign`: Chỉnh sửa thông tin và trạng thái (Open/Close) của chiến dịch.
    *   `ListCampaigns`: Hiển thị danh sách tất cả các chiến dịch đã tạo.
*   **Xử lý Ứng viên & CV:**
    *   `GetCandidatesFromSource`: Kích hoạt API để lấy danh sách ứng viên từ nền tảng bên thứ ba (TopCV).
    *   `DownloadCV`: Tải tệp CV (định dạng PDF) từ link cung cấp về máy chủ.
    *   `StoreCV`: Lưu trữ file CV vào thư mục có cấu trúc theo tên chiến dịch.
    *   `UpdateCVStatus`: Cập nhật trạng thái của CV (Pending, Downloaded, Error).
*   **Lõi AI & Chấm điểm:**
    *   `CallScoringAPI`: Gửi nội dung CV và JD đến lõi AI để phân tích.
    *   `SaveScoreResults`: Lưu kết quả chấm điểm (điểm số, điểm mạnh/yếu, gợi ý) vào database.
*   **Báo cáo & Phân tích:**
    *   `FilterByCampaign`: Lọc danh sách ứng viên theo chiến dịch được chọn.
    *   `FilterByTopN`: Lọc và trả về top N ứng viên có điểm số cao nhất.
    *   `ViewScoreDetails`: Hiển thị chi tiết kết quả phân tích của một ứng viên cụ thể.
    *   `AccessCVFile`: Cung cấp đường dẫn để xem file CV gốc.

---

### **2. Feature List (Danh sách Tính năng Nổi bật)**

*(Phần này đóng gói các function thành những tính năng có ý nghĩa với người dùng - Dùng để đưa vào Salekit và trình bày trong slide)*

1.  **Quản lý Chiến dịch Tuyển dụng Tập trung (Centralized Campaign Management):**
    *   Tạo và quản lý không giới hạn các chiến dịch tuyển dụng trên một giao diện duy nhất. Dễ dàng theo dõi, chỉnh sửa và kiểm soát trạng thái của từng vị trí đang tuyển.

2.  **Tự động Thu thập Hồ sơ Ứng viên (Automated Candidate Profile Collection):**
    *   Chỉ với một cú nhấp chuột "Lấy ứng viên", hệ thống tự động đồng bộ hóa hàng trăm, hàng ngàn hồ sơ từ các nền tảng tuyển dụng (như TopCV) về một nơi duy nhất, không cần thao tác thủ công.

3.  **Sàng lọc và Chấm điểm CV Thông minh bằng AI (AI-Powered Smart CV Screening & Scoring):**
    *   **Đây là tính năng cốt lõi.** Trí tuệ nhân tạo tự động đọc, hiểu và so sánh nội dung của từng CV với Mô tả công việc (JD) của bạn.
    *   Hệ thống chấm điểm mức độ phù hợp trên thang điểm 10 và đưa ra phân tích chi tiết:
        *   **Điểm mạnh:** Các kỹ năng, kinh nghiệm trong CV khớp với yêu cầu.
        *   **Điểm yếu:** Những kỹ năng quan trọng còn thiếu.
        *   **Đề xuất cải thiện:** Gợi ý từ AI.

4.  **Dashboard Báo cáo Trực quan & Xếp hạng Ứng viên (Visual Dashboard & Candidate Ranking):**
    *   Tự động xếp hạng ứng viên theo thứ tự điểm số từ cao đến thấp.
    *   Bộ lọc thông minh cho phép HR xem nhanh top 10, 20, 50 ứng viên tiềm năng nhất.
    *   Giao diện dashboard giúp nhà quản lý nhân sự ra quyết định nhanh chóng, không cần đọc qua từng CV một cách tràn lan.

5.  **Kho lưu trữ CV Kỹ thuật số (Digital CV Repository):**
    *   Tất cả CV được tải về và lưu trữ một cách khoa học, có tổ chức theo từng chiến dịch. Dễ dàng truy cập và xem lại CV gốc bất cứ lúc nào chỉ với một cú nhấp chuột.

---

### **3. Lợi ích Vượt trội cho Doanh nghiệp (Key Business Benefits)**

*(Phần này trả lời câu hỏi "Why should I care?" của khách hàng - Đây là nội dung quan trọng nhất cho slide pitching và các ấn phẩm marketing)*

1.  **Tiết kiệm đến 80% thời gian sàng lọc hồ sơ:**
    *   **Nỗi đau:** HR mất hàng giờ, thậm chí hàng ngày để tải, đọc và lọc hàng trăm CV một cách thủ công.
    *   **Giải pháp:** Tự động hóa hoàn toàn giai đoạn tốn thời gian nhất. Thay vì làm thủ công, HR chỉ cần 5 phút để ra lệnh cho hệ thống và nhận về danh sách top ứng viên tiềm năng. **Thời gian được giải phóng để tập trung vào các công việc tạo ra giá trị cao hơn** như phỏng vấn, tương tác với ứng viên.

2.  **Tăng 30-40% chất lượng tuyển dụng đầu vào:**
    *   **Nỗi đau:** Sàng lọc thủ công dễ bỏ sót ứng viên giỏi nhưng trình bày CV chưa đẹp, hoặc bị ảnh hưởng bởi định kiến vô thức của người đọc.
    *   **Giải pháp:** AI phân tích dựa trên dữ liệu khách quan (kỹ năng, kinh nghiệm thực tế) so với yêu cầu công việc. Điều này **đảm bảo không một ứng viên phù hợp nào bị bỏ lỡ** và chất lượng ứng viên được đưa vào vòng phỏng vấn cao hơn hẳn.

3.  **Ra quyết định dựa trên Dữ liệu (Data-Driven Decision Making):**
    *   **Nỗi đau:** Việc lựa chọn CV thường mang tính cảm tính, phụ thuộc vào kinh nghiệm của từng nhân viên HR.
    *   **Giải pháp:** Hệ thống cung cấp điểm số và phân tích rõ ràng, giúp nhà quản lý và đội ngũ HR có một tiêu chuẩn chung để đánh giá. **Mọi quyết định đều dựa trên cơ sở dữ liệu khách quan, minh bạch.**

4.  **Loại bỏ Sai sót do Con người & Tăng tính Công bằng:**
    *   **Nỗi đau:** Thao tác thủ công dễ gây nhầm lẫn, mất file, sót hồ sơ.
    *   **Giải pháp:** Quy trình tự động đảm bảo tính chính xác 100%. AI đánh giá công bằng dựa trên năng lực, loại bỏ các yếu tố thiên vị, **xây dựng quy trình tuyển dụng công bằng và chuyên nghiệp.**

5.  **Nâng cao Thương hiệu Nhà tuyển dụng (Enhances Employer Brand):**
    *   **Nỗi đau:** Quy trình tuyển dụng chậm chạp khiến ứng viên có trải nghiệm không tốt và doanh nghiệp có thể mất người tài vào tay đối thủ.
    *   **Giải pháp:** Rút ngắn đáng kể thời gian từ lúc ứng viên nộp hồ sơ đến lúc nhận được phản hồi. Một quy trình nhanh chóng, chuyên nghiệp và ứng dụng công nghệ cao **tạo ấn tượng tốt với ứng viên và nâng tầm thương hiệu của doanh nghiệp** trên thị trường lao động.

---
**Gợi ý cho bộ phận Marketing:**

*   **Key Message chính:** "Đừng để HR của bạn lãng phí thời gian. Hãy để AI tìm ra ngôi sao!" hoặc "FOXAI HRM: Tuyển đúng người, nhanh hơn."
*   **Slide Pitching:** Bắt đầu bằng Nỗi đau (Pain Points), sau đó trình bày Giải pháp (Features) và kết thúc bằng Lợi ích (Benefits) với các con số ấn tượng.
*   **Salekit:** Sử dụng các biểu đồ, infographic để minh họa sự khác biệt "Trước & Sau" khi sử dụng giải pháp. Nhấn mạnh vào các con số: "giảm 80% thời gian", "tăng 40% chất lượng"...
