# ML xây dựng mô hình dự đoán rủi ro gian lận trong hệ thống ngân hàng thương mại tại Việt Nam
1. Quản trị rủi ro gian lận
Khái niệm về rủi ro gian lận: Hiểu rõ các loại rủi ro gian lận trong lĩnh vực tài chính, ngân hàng, bảo hiểm, và các ngành khác.

Các kỹ thuật phát hiện gian lận: Kiến thức về các phương pháp như phân tích thống kê, phân tích hành vi khách hàng, mô hình học máy (machine learning) trong việc phát hiện gian lận.

Các quy trình quản trị rủi ro gian lận: Biết các bước từ nhận diện, đánh giá đến kiểm soát và giảm thiểu rủi ro gian lận trong doanh nghiệp.

2. Mô hình phân tích rủi ro
Mô hình tín dụng và rủi ro gian lận: Nắm vững các mô hình dùng để đánh giá rủi ro tín dụng, đặc biệt là trong việc phát hiện gian lận (như các mô hình Logistic Regression, Decision Trees, Random Forests).

Mô hình scoring và risk rating: Hiểu cách xây dựng mô hình điểm tín dụng (credit scoring) và xếp hạng rủi ro trong các hệ thống tài chính.

Mô hình phân loại và hồi quy trong phát hiện gian lận: Các mô hình phân loại (classification models) giúp xác định giao dịch nghi ngờ gian lận.

3. Xử lý dữ liệu
Xử lý dữ liệu thiếu (missing data): Biết cách xử lý dữ liệu thiếu trong các bộ dữ liệu tài chính.

Phân tích đặc trưng dữ liệu: Đặc biệt chú ý đến các yếu tố có thể là chỉ dấu gian lận trong dữ liệu (như hành vi không hợp lý, mẫu giao dịch bất thường, thông tin không chính xác).

Dữ liệu lớn và Big Data: Kiến thức về việc xử lý và phân tích các bộ dữ liệu lớn, sử dụng các công cụ như SQL, Hadoop, Spark.

4. Các phương pháp phân tích và mô hình học máy
Supervised learning: Các thuật toán như Logistic Regression, Decision Trees, Random Forest, XGBoost, LightGBM trong phân tích dữ liệu tài chính và phát hiện gian lận.

Unsupervised learning: Các kỹ thuật phát hiện gian lận không giám sát như Clustering (K-Means, DBSCAN) và Anomaly Detection.

Deep Learning: Kiến thức về việc ứng dụng các mô hình học sâu (Deep Learning) trong phát hiện gian lận.

5. Kỹ thuật phân tích dữ liệu
Phân tích thống kê: Kiến thức về các phương pháp thống kê cơ bản như kiểm định giả thuyết, phân tích phương sai (ANOVA), hồi quy tuyến tính và phi tuyến.

Biểu đồ và trực quan hóa dữ liệu: Sử dụng công cụ như Tableau, Power BI, hoặc matplotlib/Seaborn để trực quan hóa các mẫu gian lận và xu hướng trong dữ liệu.

6. Quy trình và công cụ trong Quản trị rủi ro
Các công cụ phân tích dữ liệu: Kiến thức về các công cụ phân tích và mô hình hóa như Python (Pandas, NumPy, scikit-learn), R, SQL, và các công cụ BI như Power BI, Tableau.

Quy trình kiểm soát rủi ro gian lận: Các hệ thống và quy trình trong quản trị rủi ro gian lận của tổ chức tài chính.

7. Công cụ và kỹ thuật phát hiện gian lận
AI và Machine Learning: Cách sử dụng AI, ML để phát hiện gian lận trong các giao dịch tài chính.

Phát hiện bất thường (Anomaly Detection): Các phương pháp và thuật toán như Isolation Forest, One-Class SVM, và Autoencoders trong phát hiện giao dịch gian lận.

8. Các tiêu chuẩn và quy định
Quy định về bảo mật và quản lý rủi ro: Các tiêu chuẩn và quy định như GDPR, PCI-DSS, AML/KYC liên quan đến quản lý rủi ro gian lận trong ngành tài chính.

Hệ thống quản lý rủi ro trong ngân hàng: Các phương pháp và công cụ dùng để giảm thiểu và quản lý các loại rủi ro trong ngân hàng.

---
# Quản trị rủi ro gian lận

1. Khái niệm về rủi ro gian lận
Rủi ro gian lận là gì?: Là khả năng xảy ra hành vi lừa đảo, gian lận trong các giao dịch tài chính hoặc các hoạt động kinh doanh, làm ảnh hưởng đến lợi ích của tổ chức, cá nhân hoặc hệ thống tài chính.

Các loại rủi ro gian lận trong lĩnh vực tài chính:

Rủi ro gian lận tài chính: Xảy ra khi có hành vi gian lận trong báo cáo tài chính, lập báo cáo sai lệch hoặc trốn thuế.

Rủi ro gian lận thanh toán: Liên quan đến hành vi gian lận trong các giao dịch thanh toán, như thẻ tín dụng giả mạo, gian lận qua mạng.

Rủi ro gian lận thông tin: Sử dụng thông tin cá nhân, thông tin tài chính giả để thực hiện hành vi gian lận.

2. Các loại hình gian lận phổ biến
Gian lận báo cáo tài chính: Là hành vi làm sai lệch báo cáo tài chính để tạo lợi nhuận giả, giấu giếm thiệt hại hoặc thao túng thị trường.

Gian lận qua mạng: Những hành vi lừa đảo liên quan đến giao dịch điện tử hoặc qua internet, ví dụ như gian lận thẻ tín dụng, gian lận thông qua email lừa đảo (phishing).

Gian lận trong giao dịch: Là các hành vi gian lận trong các giao dịch tài chính, chẳng hạn như việc tạo ra các giao dịch giả, mua bán không hợp lệ, hoặc thông đồng với đối tác để gian lận.

3. Các phương pháp phát hiện gian lận
Phát hiện gian lận qua phân tích dữ liệu (Data Analytics):

Phân tích hành vi: Giám sát hành vi người dùng, so sánh với mẫu hành vi thông thường để phát hiện giao dịch bất thường.

Phân tích thông tin đầu vào: Kiểm tra tính hợp lệ của thông tin khách hàng, giao dịch và các yếu tố liên quan.

Phát hiện gian lận qua học máy (Machine Learning): Sử dụng các thuật toán học máy để xây dựng mô hình dự đoán gian lận, như:

Supervised learning: Dùng các dữ liệu đã gán nhãn (fraud/no fraud) để huấn luyện mô hình.

Unsupervised learning: Sử dụng các thuật toán không giám sát như clustering để phát hiện những mẫu giao dịch bất thường.

4. Các quy trình quản trị rủi ro gian lận
Nhận diện rủi ro gian lận: Xác định các loại gian lận có thể xảy ra trong tổ chức và các lĩnh vực dễ bị tổn thương nhất.

Đánh giá rủi ro gian lận: Phân tích mức độ ảnh hưởng của các gian lận đối với tổ chức, từ đó đưa ra chiến lược phòng ngừa.

Giảm thiểu rủi ro gian lận: Áp dụng các biện pháp như kiểm tra quy trình, đào tạo nhân viên, sử dụng công cụ phát hiện gian lận tự động.

Kiểm soát và theo dõi: Cài đặt các hệ thống theo dõi liên tục các giao dịch, phân tích bất thường và báo cáo kịp thời về các hành vi gian lận.

5. Các công cụ và phương pháp kiểm soát rủi ro gian lận
Xây dựng quy trình kiểm soát nội bộ: Tạo ra các quy trình kiểm soát nội bộ để ngăn chặn hành vi gian lận ngay từ đầu.

Kiểm tra và giám sát giao dịch: Giám sát các giao dịch hàng ngày để phát hiện các giao dịch bất thường.

Xây dựng hệ thống báo cáo rủi ro: Tạo hệ thống báo cáo tự động, theo dõi các dấu hiệu gian lận trong thời gian thực.

6. Các công cụ công nghệ hỗ trợ phát hiện gian lận
Phần mềm phát hiện gian lận: Các công cụ chuyên dụng như SAS Fraud Management, Actimize, hoặc FICO, giúp phân tích và giám sát hành vi gian lận.

Blockchain và công nghệ sổ cái phân tán: Ứng dụng Blockchain để tạo các hệ thống giao dịch minh bạch và khó thay đổi, giúp ngăn chặn gian lận trong giao dịch tài chính.

AI và Machine Learning: Sử dụng AI để phân tích các mẫu hành vi và dự đoán các gian lận có thể xảy ra trong tương lai.

---
# Các thuật ngữ thường gặp
1. ECL (Expected Credit Loss)
ECL là một chỉ số dùng trong tín dụng, mô tả tổn thất tín dụng dự kiến mà một tổ chức có thể phải gánh chịu trong một khoảng thời gian nhất định. Trong việc phân tích gian lận, ECL có thể được tính toán dựa trên các yếu tố như:

Xác suất vỡ nợ (Probability of Default - PD): Xác suất mà người vay sẽ không trả được nợ.

Mức tổn thất trong trường hợp vỡ nợ (Loss Given Default - LGD): Tỷ lệ tổn thất mà ngân hàng sẽ phải gánh chịu nếu người vay vỡ nợ.

Exposure at Default (EAD): Mức độ tín dụng có thể bị mất khi xảy ra vỡ nợ.

Ứng dụng trong gian lận: ECL có thể giúp ước tính mức độ tổn thất có thể xảy ra trong trường hợp giao dịch gian lận được thực hiện. Nó cũng giúp xác định rủi ro trong các giao dịch tín dụng gian lận.

2. PD (Probability of Default)
PD là xác suất mà một người vay hoặc một tổ chức sẽ không thể trả nợ đúng hạn. Khi áp dụng vào mô hình phát hiện gian lận, PD có thể được sử dụng để đo lường khả năng gian lận trong giao dịch tài chính, đặc biệt là trong các hệ thống thẻ tín dụng hoặc cho vay.

Ứng dụng trong phát hiện gian lận: Đánh giá khả năng rủi ro của khách hàng trong việc thực hiện hành vi gian lận hoặc thanh toán giả.

3. LGD (Loss Given Default)
LGD đo lường mức tổn thất mà tổ chức tài chính có thể phải gánh chịu nếu xảy ra vỡ nợ. LGD liên quan đến khả năng phục hồi tài chính sau khi xảy ra sự cố, và trong phát hiện gian lận, LGD giúp đánh giá tổn thất tài chính từ các giao dịch gian lận.

Ứng dụng trong gian lận: Đo lường thiệt hại từ giao dịch gian lận, đặc biệt trong trường hợp tài sản thế chấp bị mất hoặc giá trị của tài sản bị giảm sút.

4. EAD (Exposure at Default)
EAD mô tả mức độ tổn thất mà tổ chức tài chính có thể phải đối mặt khi một khách hàng hoặc một khoản vay gặp phải sự cố vỡ nợ. Trong phát hiện gian lận, EAD giúp xác định mức độ tổn thất tài chính khi phát hiện một giao dịch gian lận.

Ứng dụng trong gian lận: Xác định giá trị tổn thất trong trường hợp giao dịch gian lận bị phát hiện.

5. AUC-ROC (Area Under the Curve - Receiver Operating Characteristic)
Đây là một chỉ số phổ biến trong các bài toán phân loại, đo lường hiệu suất của mô hình phân loại (như phân loại gian lận). AUC-ROC có thể giúp bạn hiểu rõ mức độ chính xác của mô hình phát hiện gian lận.

Ứng dụng trong gian lận: Đo lường độ chính xác của mô hình trong việc phân biệt giao dịch gian lận với giao dịch hợp pháp.

6. Precision, Recall, F1-Score
Precision: Tỷ lệ giao dịch gian lận mà mô hình dự đoán chính xác so với tất cả các giao dịch mà mô hình cho là gian lận.

Recall: Tỷ lệ giao dịch gian lận mà mô hình phát hiện ra so với tổng số giao dịch gian lận thực tế.

F1-Score: Trung bình điều hòa giữa precision và recall, giúp đánh giá khả năng cân bằng giữa việc phát hiện gian lận và tránh bỏ sót gian lận.

Ứng dụng trong gian lận: Trong việc phát hiện gian lận, bạn cần tìm một mô hình có khả năng phát hiện gian lận (recall) cao, nhưng không làm tăng quá nhiều số lượng các cảnh báo sai (precision thấp). F1-score giúp cân bằng hai yếu tố này.

7. Anomaly Score
Anomaly Score là chỉ số giúp đánh giá mức độ "bất thường" của một giao dịch hoặc hành vi so với hành vi thông thường. Các mô hình như Isolation Forest, One-Class SVM, hoặc Autoencoders có thể được sử dụng để tính toán anomaly score trong các giao dịch.

Ứng dụng trong gian lận: Phát hiện những giao dịch "bất thường" so với mô hình hành vi thông thường của khách hàng, giúp xác định khả năng gian lận.

8. Gini Coefficient
Gini Coefficient là một chỉ số đo lường mức độ phân tán của các lớp dự đoán của mô hình. Chỉ số này đặc biệt hữu ích trong việc đánh giá chất lượng của mô hình phân loại trong các bài toán dự đoán rủi ro.

Ứng dụng trong gian lận: Đánh giá mức độ phân biệt giữa các giao dịch gian lận và hợp pháp, giúp cải thiện khả năng phân loại của mô hình.

9. Lift and Gain Chart
Lift và Gain là các chỉ số giúp đánh giá hiệu quả của mô hình trong việc phát hiện gian lận. Lift đo lường tỷ lệ giao dịch gian lận mà mô hình tìm ra so với ngẫu nhiên.

Ứng dụng trong gian lận: Sử dụng để đánh giá sự cải thiện khi áp dụng mô hình phân loại gian lận so với phương pháp ngẫu nhiên.

---
# RMSE, RAE và R²
1. RMSE (Root Mean Squared Error) - Sai số chuẩn bình phương
Định nghĩa: RMSE đo lường độ lệch giữa giá trị dự đoán và giá trị thực tế trong các bài toán hồi quy. Đây là một chỉ số phổ biến để đánh giá mức độ chính xác của mô hình.

Công thức:

RMSE
=
1
𝑛
∑
𝑖
=
1
𝑛
(
𝑦
𝑖
−
𝑦
^
𝑖
)
2
RMSE= 
n
1
​
  
i=1
∑
n
​
 (y 
i
​
 − 
y
^
​
  
i
​
 ) 
2
 
​
 
Trong đó:

𝑦
𝑖
y 
i
​
  là giá trị thực tế.

𝑦
^
𝑖
y
^
​
  
i
​
  là giá trị dự đoán.

𝑛
n là số lượng mẫu trong tập dữ liệu.

Giải thích: RMSE càng nhỏ thì mô hình càng chính xác, vì nó đo lường trung bình bình phương sự sai lệch giữa các giá trị thực tế và giá trị dự đoán. RMSE cho bạn biết sai số trung bình trong cùng một đơn vị với dữ liệu đầu vào.

Ưu điểm: RMSE nhạy cảm với những sai số lớn (outliers) vì sự sai lệch được bình phương, nên nó có thể phản ánh rõ ràng các lỗi dự đoán lớn.

Nhược điểm: RMSE có thể bị ảnh hưởng mạnh mẽ bởi các outliers, điều này có thể làm sai lệch kết quả đánh giá mô hình nếu dữ liệu có nhiều điểm bất thường.

2. RAE (Relative Absolute Error) - Sai số tuyệt đối tương đối
Định nghĩa: RAE đo lường tổng sai số tuyệt đối của mô hình so với tổng sai số tuyệt đối của mô hình dự đoán trung bình. Nó cung cấp một cái nhìn về hiệu quả của mô hình so với một mô hình đơn giản (ví dụ: mô hình chỉ dự đoán giá trị trung bình).

Công thức:

RAE
=
∑
𝑖
=
1
𝑛
∣
𝑦
𝑖
−
𝑦
^
𝑖
∣
∑
𝑖
=
1
𝑛
∣
𝑦
𝑖
−
𝑦
ˉ
∣
RAE= 
∑ 
i=1
n
​
 ∣y 
i
​
 − 
y
ˉ
​
 ∣
∑ 
i=1
n
​
 ∣y 
i
​
 − 
y
^
​
  
i
​
 ∣
​
 
Trong đó:

𝑦
𝑖
y 
i
​
  là giá trị thực tế.

𝑦
^
𝑖
y
^
​
  
i
​
  là giá trị dự đoán.

𝑦
ˉ
y
ˉ
​
  là giá trị trung bình của 
𝑦
𝑖
y 
i
​
 .

𝑛
n là số lượng mẫu.

Giải thích: RAE giúp bạn so sánh hiệu suất của mô hình với một mô hình đơn giản (dự đoán giá trị trung bình của các dữ liệu). Nếu RAE = 1, mô hình của bạn chỉ ngang với việc dự đoán giá trị trung bình của dữ liệu. Nếu RAE < 1, mô hình của bạn hiệu quả hơn mô hình trung bình.

Ưu điểm: RAE không bị ảnh hưởng bởi các outliers như RMSE và nó dễ hiểu vì nó so sánh với một mô hình đơn giản.

Nhược điểm: Trong những tình huống khi giá trị trung bình của dữ liệu có sự phân phối mạnh, RAE có thể không phản ánh đúng mức độ cải thiện của mô hình.

3. R-squared (R²) - Hệ số xác định
Định nghĩa: R² đo lường mức độ phù hợp của mô hình hồi quy với dữ liệu thực tế. Nó cho biết phần trăm biến thiên trong dữ liệu mục tiêu mà mô hình có thể giải thích. R² dao động từ 0 đến 1, với 1 là mô hình hoàn hảo.

Công thức:

𝑅
2
=
1
−
∑
𝑖
=
1
𝑛
(
𝑦
𝑖
−
𝑦
^
𝑖
)
2
∑
𝑖
=
1
𝑛
(
𝑦
𝑖
−
𝑦
ˉ
)
2
R 
2
 =1− 
∑ 
i=1
n
​
 (y 
i
​
 − 
y
ˉ
​
 ) 
2
 
∑ 
i=1
n
​
 (y 
i
​
 − 
y
^
​
  
i
​
 ) 
2
 
​
 
Trong đó:

𝑦
𝑖
y 
i
​
  là giá trị thực tế.

𝑦
^
𝑖
y
^
​
  
i
​
  là giá trị dự đoán.

𝑦
ˉ
y
ˉ
​
  là giá trị trung bình của 
𝑦
𝑖
y 
i
​
 .

𝑛
n là số lượng mẫu.

Giải thích: R² cho biết tỷ lệ phần trăm biến thiên trong dữ liệu thực tế mà mô hình có thể giải thích được.

R² = 0 nghĩa là mô hình không giải thích được bất kỳ sự biến thiên nào trong dữ liệu, và mô hình dự đoán giống như một mô hình đơn giản chỉ dự đoán giá trị trung bình.

R² = 1 có nghĩa là mô hình giải thích hoàn toàn sự biến thiên trong dữ liệu, không có sai số.

Ưu điểm: R² là một chỉ số trực quan và dễ hiểu để đo lường mức độ phù hợp của mô hình với dữ liệu.

Nhược điểm:

R² có thể bị lệch nếu mô hình quá phức tạp (overfitting), vì khi thêm nhiều biến độc lập vào mô hình, R² sẽ luôn tăng hoặc ít nhất không giảm, ngay cả khi mô hình đó không thực sự cải thiện.

Ngoài ra, R² không phải lúc nào cũng phản ánh được chất lượng mô hình nếu dữ liệu không có mối quan hệ tuyến tính rõ ràng.

Tóm tắt sự khác biệt giữa các chỉ số:
RMSE: Đo sai số tuyệt đối trung bình giữa giá trị dự đoán và giá trị thực tế. Thích hợp khi bạn muốn đo lường sai số ở đơn vị dữ liệu gốc.

RAE: So sánh hiệu quả của mô hình với một mô hình đơn giản (dự đoán giá trị trung bình). Thích hợp khi muốn đánh giá mô hình so với mô hình baseline.

R²: Đo lường mức độ phù hợp của mô hình với dữ liệu, cho biết phần trăm biến thiên mà mô hình giải thích được. Thích hợp khi muốn biết mức độ giải thích của mô hình.

---
# Anomaly Detection (phát hiện bất thường)
Anomaly Detection (phát hiện bất thường) là quá trình phát hiện những mẫu dữ liệu khác biệt hoặc "bất thường" trong tập dữ liệu. Các mẫu này có thể là những giá trị lệch so với các mẫu thông thường trong dữ liệu và thường được cho là dấu hiệu của sự kiện bất thường hoặc gian lận. Dưới đây là các phương thức hoạt động chính khi giải quyết bài toán Anomaly Detection:

1. Phương pháp dựa trên thống kê (Statistical Methods)
Giới thiệu: Phương pháp này giả định rằng dữ liệu tuân theo một phân phối xác suất nhất định (thường là phân phối chuẩn, Gaussian). Những điểm dữ liệu khác biệt hoặc lệch xa khỏi phân phối này được xem là bất thường.

Cách thức hoạt động:

Tính toán các thống kê như trung bình và độ lệch chuẩn của dữ liệu.

Xác định khoảng tin cậy (confidence interval) xung quanh trung bình. Những điểm nằm ngoài khoảng tin cậy này được coi là bất thường.

Ví dụ, một điểm nằm ngoài 2 hoặc 3 lần độ lệch chuẩn so với trung bình có thể được xem là bất thường.

Ưu điểm: Phương pháp này đơn giản và dễ hiểu, nhưng chỉ phù hợp với dữ liệu có phân phối chuẩn hoặc gần chuẩn.

Nhược điểm: Không hiệu quả với dữ liệu phức tạp hoặc không tuân theo phân phối chuẩn.

2. Phương pháp dựa trên mật độ (Density-based Methods)
Giới thiệu: Các phương pháp này đánh giá mật độ của các điểm dữ liệu xung quanh một điểm dữ liệu và xác định xem điểm đó có nằm trong khu vực có mật độ cao (tức là các điểm tương tự nhau) hay không.

Các thuật toán phổ biến:

DBSCAN (Density-Based Spatial Clustering of Applications with Noise): DBSCAN phân cụm các điểm dữ liệu và gắn nhãn các điểm ngoại lai (outliers) là những điểm không thuộc về bất kỳ cụm nào. Những điểm không có đủ mật độ xung quanh chúng được coi là bất thường.

LOF (Local Outlier Factor): LOF tính toán mức độ bất thường của một điểm dữ liệu dựa trên mật độ của điểm đó so với các điểm xung quanh. Nếu điểm có mật độ thấp hơn so với những điểm gần nó, nó sẽ được coi là bất thường.

Ưu điểm: Có thể phát hiện được các bất thường trong không gian dữ liệu phức tạp và không yêu cầu dữ liệu phải có phân phối chuẩn.

Nhược điểm: Cần chọn tham số phù hợp (như bán kính tìm kiếm trong DBSCAN), và với dữ liệu rất lớn, tính toán có thể tốn kém.

3. Phương pháp dựa trên mô hình (Model-based Methods)
Giới thiệu: Phương pháp này sử dụng một mô hình để học phân phối hoặc cấu trúc của dữ liệu và xác định những điểm nào không phù hợp với mô hình này.

Các thuật toán phổ biến:

One-Class SVM (Support Vector Machine): One-Class SVM học một mặt phẳng siêu phẳng trong không gian đặc trưng sao cho các điểm dữ liệu bình thường nằm bên trong, và những điểm bất thường nằm bên ngoài. Mô hình này thích hợp cho các bài toán không có nhãn (unsupervised).

Isolation Forest: Thuật toán này xây dựng các cây quyết định để phân tách dữ liệu. Các điểm bất thường sẽ dễ bị phân tách (tức là sẽ có số lượng các bước phân tách ít hơn so với các điểm bình thường).

Ưu điểm: Có thể học và phát hiện các bất thường trong dữ liệu có cấu trúc phức tạp, không yêu cầu dữ liệu có phân phối chuẩn.

Nhược điểm: Có thể bị ảnh hưởng bởi sự lựa chọn tham số, và cần một lượng dữ liệu đủ lớn để mô hình học tốt.

4. Phương pháp dựa trên các mạng nơ-ron (Neural Network-based Methods)
Giới thiệu: Sử dụng mạng nơ-ron để học các đặc trưng của dữ liệu và phát hiện những mẫu bất thường. Các mô hình này đặc biệt hữu ích khi dữ liệu có cấu trúc phức tạp hoặc không tuyến tính.

Các thuật toán phổ biến:

Autoencoders: Autoencoders là một loại mạng nơ-ron học không giám sát, được huấn luyện để tái tạo lại đầu vào của nó. Các điểm dữ liệu bất thường sẽ có lỗi tái tạo lớn, vì chúng không phù hợp với các mẫu dữ liệu học được. Các lỗi tái tạo lớn có thể là chỉ báo cho sự bất thường.

Variational Autoencoders (VAE): VAE là phiên bản mở rộng của Autoencoder, giúp học được các phân phối tiềm ẩn của dữ liệu và phát hiện các bất thường dựa trên độ lệch giữa dữ liệu thực tế và dữ liệu tái tạo.

Ưu điểm: Có thể phát hiện được các bất thường trong các tập dữ liệu phức tạp với cấu trúc không rõ ràng và dữ liệu không gian lớn (high-dimensional).

Nhược điểm: Cần tài nguyên tính toán mạnh mẽ và thời gian huấn luyện lâu dài. Đôi khi, chúng có thể phát hiện ra các điểm bất thường không quan trọng nếu mô hình không được huấn luyện tốt.

5. Phương pháp dựa trên k-nearest neighbors (k-NN)
Giới thiệu: k-NN là một phương pháp đơn giản và phổ biến trong việc phát hiện bất thường. Nó đánh giá độ gần gũi của một điểm dữ liệu với các điểm dữ liệu khác trong không gian đặc trưng.

Cách thức hoạt động:

Tính toán khoảng cách giữa điểm cần kiểm tra và các điểm xung quanh (k-nearest neighbors).

Những điểm có khoảng cách lớn với các điểm còn lại sẽ được xem là bất thường.

Ưu điểm: Phương pháp đơn giản, dễ triển khai và hiểu. Không yêu cầu mô hình phức tạp.

Nhược điểm: Phương pháp này có thể không hiệu quả với dữ liệu có nhiều chiều (high-dimensional), và rất dễ bị ảnh hưởng bởi outliers nếu không được xử lý trước.

6. Phương pháp dựa trên các kỹ thuật giảm chiều (Dimensionality Reduction-based Methods)
Giới thiệu: Các phương pháp giảm chiều như PCA (Principal Component Analysis) và t-SNE có thể giúp giảm số chiều của dữ liệu, giúp dễ dàng phát hiện các bất thường trong không gian giảm chiều.

Cách thức hoạt động:

PCA tìm kiếm các thành phần chính (principal components) để mô hình hóa dữ liệu trong không gian thấp hơn. Sau đó, nó xác định các điểm dữ liệu có sự khác biệt lớn trong không gian giảm chiều như những điểm bất thường.

Ưu điểm: Có thể giảm chiều dữ liệu một cách hiệu quả và phát hiện bất thường trong các không gian nhiều chiều.

Nhược điểm: Kết quả có thể không chính xác nếu dữ liệu không có cấu trúc tuyến tính rõ ràng.
