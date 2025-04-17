# FoxAI E-Learning Platform

## Mục Đích

FoxAI E-Learning Platform là hệ thống đào tạo nội bộ dành cho nhân viên tại FoxAI, giúp quản lý và cung cấp các khóa học trực tuyến, bài kiểm tra (quiz), và chứng chỉ cho người dùng. Hệ thống này nhằm nâng cao năng lực nhân viên thông qua `các bài học`, `bài kiểm tra`, và `chứng nhận hoàn thành khóa học`, đồng thời `theo dõi tiến độ học tập` của nhân viên trong công ty.

Tài liệu này sẽ hướng dẫn cách tạo một website đào tạo nội bộ cho nhân viên, tương tự như trang [Hugging Face Agents Course](https://huggingface.co/learn/agents-course/unit0/introduction).

![Hình](https://huggingface.co/datasets/agents-course/course-images/resolve/main/en/unit0/thumbnail.jpg)

## Phạm Vi

Website **FoxAI E-Learning** bao gồm các tính năng chính sau:

- **Quản lý khóa học**: Người dùng có thể tham gia vào các khóa học, bài giảng, và quiz.
- **Trắc nghiệm và quiz**: Các quiz trắc nghiệm sẽ được cung cấp sau mỗi bài giảng để kiểm tra kiến thức của người học.
- **Chứng chỉ hoàn thành**: Sau khi hoàn thành quiz với điểm số yêu cầu, người dùng sẽ nhận được chứng chỉ điện tử.
- **Tiến độ học tập**: Hệ thống sẽ theo dõi tiến độ học tập và điểm số của người dùng.

## Các Tính Năng Chính

- **Các khóa học trực tuyến**: Các bài giảng được tổ chức theo các đơn vị học tập (unit).
- **Trắc nghiệm (Quiz)**: Các câu hỏi trắc nghiệm sẽ giúp đánh giá kiến thức người học sau mỗi bài học.
- **Chứng chỉ hoàn thành khóa học**: Người học có thể nhận chứng chỉ khi hoàn thành khóa học với điểm số đủ yêu cầu.
- **Giao diện người dùng thân thiện**: Trang web được thiết kế dễ sử dụng và tương tác.

## Cách Xây Dựng

Hệ thống này được xây dựng bằng các công nghệ sau:

### **Frontend**:
- **HTML/CSS/JavaScript**: Dùng để tạo giao diện người dùng (UI).
- **Bootstrap**: Sử dụng để làm đẹp giao diện và đảm bảo tính responsive.
- **jsPDF**: Sử dụng để tạo chứng chỉ dưới dạng PDF cho người dùng.

### **Backend (Tùy Chọn)**:
- **Node.js + Express** (tùy chọn): Để xử lý dữ liệu quiz và lưu trữ kết quả người dùng vào cơ sở dữ liệu.
- **MongoDB/PostgreSQL** (tùy chọn): Để lưu trữ thông tin người dùng và kết quả học tập.

### **GitHub Pages**:
- Sử dụng **GitHub Pages** để triển khai website trên môi trường trực tuyến mà không cần server phức tạp. Dữ liệu và trang web được lưu trữ trong repository GitHub của bạn và có thể truy cập qua liên kết GitHub Pages.

Chi tiết xem [tại đây](https://github.com/hoanglong8/Document-Data-science/blob/main/E-learning%20DS/2023-04-16-How-to-build-website-elearning-on-GitHub.md)

## Cách Sử Dụng

### **1. Clone Repository**
Để sử dụng hoặc phát triển hệ thống, bạn có thể clone repository này về máy của mình:

```bash
git clone https://github.com/hoanglong8/FoxAI-Elearning.git
```
**2. Cấu Hình GitHub Pages**

Mở repository trên GitHub.

Vào tab Settings.

Trong phần GitHub Pages, chọn main branch và thư mục `docs/` làm nguồn.

Lưu lại cấu hình. Website của bạn sẽ có thể truy cập thông qua URL sau:
```
https://hoanglong8.github.io/FoxAI-Elearning/
```

**3. Tạo Bài Kiểm Tra (Quiz)**

Các quiz trắc nghiệm được xây dựng bằng HTML, CSS, và JavaScript. Các câu hỏi sẽ được hiển thị cho người dùng và người dùng sẽ chọn câu trả lời. Sau khi người dùng hoàn thành quiz, hệ thống sẽ tính điểm và hiển thị kết quả.

Để thêm một quiz mới, bạn chỉ cần tạo một file HTML mới trong thư mục docs và cập nhật liên kết trong index.html.

**4. Cấp Chứng Chỉ**

Chứng chỉ được tạo dưới dạng PDF khi người dùng hoàn thành quiz với điểm số đủ yêu cầu. Chúng tôi sử dụng thư viện jsPDF để tạo và tải chứng chỉ xuống máy người dùng.

**5. Đưa Dự Án Lên GitHub**

Sau khi bạn tạo và chỉnh sửa các file trên máy tính của mình, hãy commit và push lại lên GitHub:
```
git add .
git commit -m "Add new quiz and update content"
git push origin main
```

**Cấu Trúc Thư Mục**

**/docs:** Chứa các file HTML, CSS, JavaScript, và các tài nguyên trang web.

**index.html:** Trang chủ của website, giới thiệu về các khóa học và quiz.

**quiz.html:** Trang quiz, nơi người dùng làm bài kiểm tra.

**styles.css:** Tệp CSS để tùy chỉnh giao diện trang web.

**quiz.js:** JavaScript xử lý các câu hỏi và tính điểm.

**Kết luận**

Cảm ơn bạn đã tham gia vào dự án FoxAI E-Learning. Nếu bạn có bất kỳ câu hỏi nào hoặc muốn đóng góp, vui lòng tạo issue hoặc pull request trên repository này.
