# Huấn luyện mô hình OCR (Nhận dạng ký tự quang học)

Các huấn luyện mô hình OCR (Nhận dạng ký tự quang học) cho việc xử lý hóa đơn, PDF và ảnh chụp, sử dụng các công cụ mã nguồn mở và triển khai trên môi trường on-premise với ngôn ngữ lập trình Python, SQL, DAX.

![image](https://github.com/user-attachments/assets/5f4db4dc-3cef-42dc-82cf-24b8e72cb644)

## 🧠 1. Xác định yêu cầu và mục tiêu
Đầu vào: Hình ảnh hóa đơn, PDF quét, ảnh chụp.

Đầu ra: Trích xuất thông tin như số hóa đơn, ngày tháng, tên người mua, tên nhà cung cấp, tổng tiền, thuế, v.v.

Mục tiêu: Tự động hóa quá trình nhập liệu, giảm thiểu sai sót và tăng tốc độ xử lý.

![image](https://github.com/user-attachments/assets/a71191be-f2ee-49bb-a0ab-4f7b0289e879)

## 🛠️ 2. Chuẩn bị công cụ và môi trường
Phần mềm cần cài đặt

Python 3.8+: Ngôn ngữ lập trình chính.

Tesseract OCR: Công cụ nhận dạng ký tự quang học mã nguồn mở.

OpenCV: Thư viện xử lý ảnh.

PyTesseract: Wrapper Python cho Tesseract.

TensorFlow / PyTorch: Thư viện học sâu.

Keras-OCR: Thư viện hỗ trợ nhận dạng văn bản từ ảnh.

Cài đặt thư viện
```bash
pip install pytesseract opencv-python tensorflow keras-ocr
```

![image](https://github.com/user-attachments/assets/72986998-93f2-4b09-8b15-83834c258206)

## 🧾 3. Thu thập và chuẩn bị dữ liệu
Nguồn dữ liệu: Sử dụng các bộ dữ liệu công khai như [MIDD](https://www.mdpi.com/2306-5729/6/7/78) hoặc tự thu thập hóa đơn từ doanh nghiệp.

Định dạng dữ liệu: Hình ảnh hóa đơn (JPEG, PNG) và nhãn tương ứng (JSON, CSV).

Tiền xử lý dữ liệu:

Chuyển PDF sang hình ảnh (sử dụng pdf2image).

Cắt xén vùng chứa văn bản.

Chuyển đổi sang ảnh nhị phân (binarization).

Loại bỏ nhiễu (denoising).

![image](https://github.com/user-attachments/assets/4248fe01-ba53-4a14-b2e8-7d321ab9fc3a)

## 🧠 4. Xây dựng và huấn luyện mô hình OCR
### Phương pháp
Nhận dạng ký tự (OCR): Sử dụng mô hình CRNN (Convolutional Recurrent Neural Network) hoặc LayoutLM cho văn bản có cấu trúc phức tạp.

### Mô hình đề xuất
CRNN: Kết hợp CNN và RNN với CTC loss, phù hợp cho nhận dạng văn bản liên tục.

LayoutLM: Mô hình transformer, hiệu quả cho tài liệu có cấu trúc như hóa đơn.

### Huấn luyện mô hình
Dữ liệu huấn luyện: Sử dụng bộ dữ liệu đã chuẩn bị.

Cấu hình mô hình: Xác định kiến trúc mạng, hàm mất mát, bộ tối ưu.

Đánh giá mô hình: Sử dụng các chỉ số như accuracy, F1-score.

![image](https://github.com/user-attachments/assets/c32abda2-7a38-44e7-9002-91ba6830a7ec)

## 🔄 5. Triển khai và tích hợp
API RESTful: Xây dựng API sử dụng Flask hoặc FastAPI để nhận và xử lý hình ảnh.

Tích hợp vào hệ thống: Kết nối với hệ thống ERP hoặc CRM để tự động nhập liệu.

Giao diện người dùng: Phát triển giao diện để người dùng có thể tải lên và xem kết quả.

![image](https://github.com/user-attachments/assets/d75479a8-2798-4b8d-8a7c-626582ebd55d)

## 📈 6. Đánh giá và cải tiến
Đánh giá hiệu suất: Kiểm tra trên tập dữ liệu kiểm thử.

Cải tiến mô hình: Sử dụng kỹ thuật như fine-tuning, transfer learning để nâng cao độ chính xác.

Xử lý trường hợp đặc biệt: Phát triển các phương pháp để xử lý các trường hợp ngoại lệ như văn bản mờ, định dạng không chuẩn.

![image](https://github.com/user-attachments/assets/a3574cf0-2441-4190-931b-b1c0fb96d21b)

## 📚 Tài liệu tham khảo
[Hướng dẫn huấn luyện mô hình OCR với Keras và TensorFlow](https://pyimagesearch.com/2020/08/17/ocr-with-keras-tensorflow-and-deep-learning/)

[Hướng dẫn sử dụng Keras-OCR](https://www.analyticsvidhya.com/blog/2022/09/extract-text-from-images-quickly-using-keras-ocr-pipeline/)

[Dự án InvoiceNet trên GitHub](https://github.com/naiveHobo/InvoiceNet)
