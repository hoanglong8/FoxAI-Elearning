Nội dung video trên YouTube qua đường dẫn sau:
[Video Buổi 4 - SAP Business One TB1100](https://youtu.be/BUU33QLnIX8?si=XfeQTfKcxiCMejby)

Hoặc ở trên [Sharepoint](https://foxai.sharepoint.com/:f:/s/TaiLieuTTSXFoxAI/ErmZyUSLwINOnMl07xPugOUBXEf8v3Gdq4_OtyKs-3lJcQ?e=lAmQcF)

![Hình](https://i.ytimg.com/vi/BUU33QLnIX8/maxresdefault.jpg)

---
## Overview
Tổng quan về quản lý thu chi trên SAP: Trình bày cấu trúc phiếu thu, phiếu chi. Giải thích khái niệm thu/chi tiền mặt, chuyển khoản. Hướng dẫn chọn đối tượng thu/chi (khách hàng, nhà cung cấp). Thực hành nhập phiếu thu với nhiều hóa đơn, điều chỉnh số tiền thanh toán.
Nhập liệu và xử lý tình huống thực tế: Hướng dẫn nhập payment mean (tiền mặt, chuyển khoản). Xử lý trường hợp thu/chi một phần, quá hạn thanh toán. Kiểm tra số dư công nợ sau thanh toán. Trình bày các nghiệp vụ thu chi: ứng trước hợp đồng, giao dịch ngoại tệ.
Báo cáo thu chi và chuẩn hóa theo VAS: Giới thiệu báo cáo SAP như Payment Draft Report, Banking Report. Sử dụng chức năng Set as Draft để lưu phiếu nháp. So sánh báo cáo SAP và báo cáo VAS về trình bày, ngôn ngữ. Khuyến nghị kiểm tra số liệu giữa các báo cáo đảm bảo chính xác.

## Notes

📚 Giới thiệu tổng quan về quản lý thu chi trên SAP Business One (00:00:02 - 00:10:08) (00:02 - 10:08)
Trình bày cấu trúc phiếu thu (Incoming Payment) và phiếu chi (Outgoing Payment) trên SAP.
Giải thích các khái niệm: thu/chi tiền mặt, chuyển khoản ngân hàng, công nợ khách hàng (131), công nợ nhà cung cấp (331).
Hướng dẫn cách chọn đối tượng thu/chi (customer, vendor, account).
Mô tả chi tiết các phần của phiếu: thông tin chung, nội dung các hóa đơn còn open, tổng tiền thanh toán, payment mean (phương thức thanh toán).
Giới thiệu cách thực hành nhập phiếu thu cho khách hàng với nhiều hóa đơn, điều chỉnh số tiền thanh toán từng hóa đơn.

💡 Thực hành nhập liệu và xử lý các tình huống thu chi thực tế (00:10:08 - 00:21:35) (10:08 - 21:35)
Hướng dẫn cách chọn và nhập payment mean (tiền mặt, chuyển khoản, kết hợp cả hai).
Giải thích cách xử lý các trường hợp thu/chi một phần, nhiều hóa đơn, hoặc quá hạn thanh toán.
Thực hành nhập phiếu thu cho khách hàng, kiểm tra lại số dư công nợ sau khi thanh toán.
Trình bày các loại nghiệp vụ thu chi: giao dịch với đối tượng công nợ, ứng trước cho hợp đồng, giao dịch với tài khoản control account, chuyển tiền nội bộ, giao dịch ngoại tệ.
Giới thiệu các bước nhập phiếu chi ứng trước cho nhà cung cấp, vừa thanh toán hóa đơn cũ vừa ứng trước cho hợp đồng mới.

📝 Xử lý các nghiệp vụ chi phí, chuyển tiền nội bộ và giao dịch ngoại tệ (00:21:35 - 00:35:39) (21:35 - 35:39)
Hướng dẫn nhập phiếu chi cho các khoản chi phí trực tiếp (điện, nước) không qua công nợ nhà cung cấp.
Cách khai báo thông tin hóa đơn, thuế, tên công ty, mã số thuế khi không có đối tượng công nợ trên hệ thống.
Thực hành chuyển tiền giữa các tài khoản tiền mặt, ngân hàng, rút/gửi tiền nội bộ.
Giải thích cách loại trừ các nghiệp vụ chuyển tiền nội bộ khỏi báo cáo lưu chuyển tiền tệ.
Hướng dẫn nhập phiếu chi bằng ngoại tệ, sử dụng tỷ giá trung bình (moving average) và cách tính tỷ giá trung bình trên hệ thống.
Xử lý chênh lệch tỷ giá khi thanh toán, hệ thống tự động hạch toán lãi/lỗ tỷ giá vào tài khoản liên quan.

📊 Báo cáo thu chi, kiểm tra sổ sách và chuẩn hóa theo VAS (00:35:39 - 00:42:22) (35:39 - 42:22)
Giới thiệu các báo cáo chuẩn của SAP: Payment Draft Report, Banking Report, General Ledger.
Hướng dẫn sử dụng chức năng Set as Draft để lưu phiếu nháp và tra cứu lại trên báo cáo.
Trình bày các báo cáo tài chính theo chuẩn Việt Nam (VAS, Thông tư 200): sổ quỹ tiền mặt, sổ tiền gửi ngân hàng, báo cáo chi tiết tài khoản.
So sánh báo cáo chuẩn SAP và báo cáo theo VAS về mặt trình bày, ngôn ngữ và tiện ích sử dụng.
Khuyến nghị kiểm tra, đối chiếu số liệu giữa các báo cáo để đảm bảo tính chính xác khi thực hiện nghiệp vụ thu chi.

---
Script
Chào các bạn! Ngày hôm nay chúng ta sẽ học tiếp đến bài Quản lý thu chi trên sát Big Hit One. 
S
Speaker 2
00:18
Và trong bài hàng hôm nay chúng ta sẽ có một số nội dung chính như sau. Thứ nhất, mình sẽ giới thiệu cho các bạn về cấu trúc của một chứng tử thu hoặc chi ở trên SAP thì sẽ có những nội dung gì. Và thứ hai là mình sẽ giới thiệu cho các bạn về các tình huống thực tế trong nhiệm vụ thu chi của Việt Nam thì ở trên SAP chúng ta sẽ làm thực hành như thế nào. Và cuối cùng thì mình sẽ giới thiệu cho các bạn về các báo cáo chuẩn của SAP và VAS hiện tại đang có ở trên SAP. Và với nội dung đầu tiên liên quan tới cấu trúc của một phiếu thu hoặc phiếu tri ở trên SAP thì mình có một số lưu ý như sau. 
S
Speaker 2
00:50
Thứ nhất là mình có hai cái khái nghiệm là Incoming Payment, đây là chức năng để thu tiền. Và Outgoing Payment, đây là chức năng để tri tiền. Và hai cái chức năng này thì sử dụng để thu và tri cho cả tiền mặt hoặc tiền gửi ngân hàng, chứ không riêng gì một loại nào. 
S
Speaker 1
00:55
Cả. 
S
Speaker 2
01:16
Các bạn đang nhìn ở trên màn hình là một tình huống khi mà mình thu tiền. Bạn có thể thấy rằng là ở các chức năng trước, ở các phần hệ trước, chúng ta đã học chức năng AI Invoice để ghi nhận công nợ phải thu đối với khách hàng. Vậy thì sau khi ghi nhận công nợ phải thu với khách hàng xong thì ở trên hệ thống chúng ta có thể làm ngay một phiếu lại Incoming Payment để thanh toán, để thu tiền của khách hàng dựa trên cái hóa đơn mà mình đã xuất cho khách hàng như vậy. Với cái Incoming Payment này bạn có thể chọn cash để thu tiền bằng tiền mặt hoặc là bank transfer để nhận tiền này bằng chuyển khoảng. Và mình có thể nhìn thấy những nhiệm vụ có thể sẽ diễn ra như sau. 
S
Speaker 2
01:49
Nợ tài khoản ngân hàng 112 hoặc là tiền mặt 111 và có tài khoản 131 của chính xác cái khách hàng ở đấy là đối tượng công nợ phải thu nào. Và đối với trong quy trình liên quan tới chi tiền thì chúng ta cũng có một tình huống rất là kích điển. Đấy là khi mà các bạn nhận được hóa đơn từ nhà cung cấp, các bạn ghi nhận bằng phiếu AP Invoice ở trên hệ thống. Vậy thì sau khi ghi nhận công nợ này rồi thì chúng ta có thể ghi nhận luôn một phiếu là phiếu Outward Payment để ghi nhận việc mình chi trả tiền cho nhà cung cấp bằng tiền mặt và tiền gửi nhân hàng. Và cái nhiệm vụ của lúc đấy của chúng ta, của cái nhiệm vụ Outward Payment này. 
S
Speaker 1
02:45
Sẽ. 
S
Speaker 2
02:45
Là nợ 31 của chính xác cái nhà cung cấp đấy và có tài khoản tiền hoặc tài khoản tiền gửi ngân hàng Vậy thì như các bạn cũng đang nhìn thấy trên một màn hình như thế này để làm được 2 cái nhiệm vụ mà mình vừa mình ví dụ vừa xong thì chúng ta sẽ phải làm 1 cái phiếu gọi là phiếu Income Inpayment hoặc Argo Inpayment. 
S
Speaker 3
02:51
Và 2 cái phiếu này thì có cấu trúc tương tự nhau Ở đây mình có thể nhìn thấy là cái cấu trúc của 1. 
S
Speaker 2
02:53
Phiếu thanh toán nó sẽ có 3 phần Phần thứ nhất là thông tin chung Payment No Common Header. Bạn sẽ nhìn thấy ở khu vực bên trên này sẽ có một số thông tin. Ví dụ như là bạn sẽ thu hoặc chi của ai. Chính là ở phần code và name ở chỗ này. Tùy tình huống là customer hay vendor và tùy tình huống là thu hoặc chi để mình điển thấy thông tin này cho đúng. Và ở trên tay phải bạn sẽ nhìn thấy một số thông tin ví dụ như số phiếu là 5M là số bao nhiêu. Rồi Posting date là ngày mà các bạn hạch toán cái phiếu đấy vào hệ thống, cái phiếu thu của phiếu tri đấy vào hệ thống. Rồi là thêm một số các thông tin than chiếu khác. Thì đấy là khu vực bên trên. 
S
Speaker 2
03:44
Và ở giữa thì các bạn sẽ nhìn thấy cái phần nội dung là Content. Tùy thuộc và tùy từng tình huống thì các bạn sẽ nhìn thấy là ở đây hệ thống sẽ liệt kê ra các cái hòa đơn hoặc cái phiếu ghi nhận công nợ mà còn đang Open. Open ở đây có nghĩa là chưa được thanh toán. Ví dụ như bạn có một cái hóa đơn 100 triệu và bạn đã thanh toán được 40 triệu rồi, thế thì hệ thống sẽ hiển thị ở đây là cái hóa đơn đấy vẫn là còn đang open và cái phần mà cần. 
S
Speaker 3
04:14
Còn phải thanh toán sẽ là 60 triệu. 
S
Speaker 2
04:14
Thì toàn bộ những cái thông tin như thế sẽ nằm ở trong cái phần giữa này, phần content ở giữa. Và ở phần cuối thì các bạn sẽ có một cái khu thông tin nội dung về số tiền tổng cộng mà các bạn sẽ thanh toán và các cái nội dung diễn giải nếu. 
S
Speaker 1
04:19
Có. 
S
Speaker 2
04:40
Thì cấu trúc 3 cái phần này là như thế. Tuy nhiên thì chúng ta sẽ còn 1 cái khu vực thông tin nữa mà phải khai báo. 
S
Speaker 3
04:42
Khi mà các bạn làm tiểu thu hay. 
S
Speaker 2
04:42
Tiểu Tri. Đấy là thông tin gọi là Payment mean. Payment mean thì các bạn có thể để ý rằng nó sẽ là cái hình đúng tiền hoặc là lát nữa mình sẽ chỉ cái đấy trên thường mềm để các bạn dạy rõ hơn. Thì ở cái khu vực Payment mean nó sẽ định nghĩa rằng cái giá trị mà bạn cần thu hoặc là cần tri như thế thì sẽ được sử dụng phương thức thanh tán nào. Có thể là tiền mạng, có thể là tiền gửi nhân hàng, hoặc là cả hai. Cái chỗ đấy thì thân payment means sẽ làm cái việc đấy cho mình. Và bây giờ mình sẽ sang các tính nghiệp thực tế. Các bạn có thể nhìn thấy rằng là vừa nãy thì mình nói về cấu trúc của một nghiệp vụ thu chi. 
S
Speaker 2
05:14
Thì kẻ nghiệp vụ thu hay là chi thì các bạn đều có thể tìm kiếm được chức năng này ở trong mô đồ banking. Bạn có thể xem ở trong Income Payment hoặc Hourly Payment ở đây. 
S
Speaker 1
05:38
Là. 
S
Speaker 2
05:38
Tiểu Thu và tiểu tri. Mình sẽ lấy một ví dụ liên quan tới tiểu thu. Cấu trúc thu tin vẫn giống như mình vừa giới thiệu cho các bạn. Trong trường hợp ở đây là mình thu tiền từ một khách hàng thì các bạn sẽ. 
S
Speaker 3
05:42
Chọn ở đây là customer. Nếu sẽ có những tình huống có thể là ít hơn, bạn. 
S
Speaker 1
05:44
Ít gặp hơn nhưng vẫn có thể gặp. 
S
Speaker 3
05:44
Đấy là bạn thu tiền từ nhà. 
S
Speaker 2
05:45
Phương Cấp. Có thể sẽ gặp những tình huống như thế. Hoặc có thể là mình sẽ thu tiền mà không phải của khách hàng hay nhà phương cấp nào. Nó là cái việc mà mình thu chi trực tiếp ở một account nào đấy, một tài khoản kể toán nào đấy. Có lẽ là mình chi trả cho một cái loại chi phí trực tiếp là 642 hay 7 chẳng hạn, mà không muốn đi qua công nợ của một nhà phương cấp nào thì mình có thể dùng cái account này. Tuy nhiên trước hết là mình sẽ giới thiệu kỹ về cái việc là mình thu tiền cho một khách hàng thì mình sẽ làm như sau. Thứ nhất là bạn sẽ phải chọn ở đây là Income Invement và chọn đấy là Customer. 
S
Speaker 2
06:17
Sau đó thì ở phía bên này bạn sẽ chọn đến Mã khách hàng hoặc là tên khách hàng có trong danh sách. Ở đây mình sẽ chọn công ty C1 này. Và ở phía bên phải trên này bạn sẽ nhập cho mình cái Posting Date, đây là. 
S
Speaker 3
06:39
Ngày mà các bạn hạch toán. Đôi khi là các bạn có thể nhập. 
S
Speaker 2
06:40
Vào thông nghề trong quá khứ trước. Thì đấy là tùy từng cái điều kiện setup ở. 
S
Speaker 3
06:42
Từng công ty. Và ở bên dưới này. 
S
Speaker 2
06:42
Các bạn sẽ nhìn thấy một số thông tin. Đấy là toàn bộ các cái phiếu công nợ mà bạn đã ghi nhận cho khách hàng này mà bây giờ vẫn còn chưa được thanh toán hết. Bạn có thể nhìn thấy ở đây có một số thông tin chính như sau. Thứ nhất là thông tin liên quan tới phiếu, số phiếu và loại phiếu. Thì để muốn biết chi tiết được là phiếu này là phiếu gì thì các. 
S
Speaker 3
07:12
Bạn có thể click vào cái tên vàng ở đầu phiếu để mở ra. 
S
Speaker 1
07:13
Cái phiếu chi tiết của nó để xem. 
S
Speaker 2
07:13
Nội Dung là gì. Ngoài ra thì bạn có thể xem là ví dụ như ngày hạch toán của phiếu đấy rồi tổng tiền của phiếu đấy. 
S
Speaker 1
07:36
Và. 
S
Speaker 2
07:36
Ở đây mình có một cái cột là cột balance view. Cột balance view ý nghĩa của nó đấy là số tiền còn lại cần phải thanh toán cho công nợ đấy là bao nhiêu. Đôi khi là tổng giá trị hoạt đơn là 100 triệu như vừa nãy mình nói nhưng mà bạn đã thu đổi 40 triệu của khách hàng rồi vậy thì cái phần balance view ở đây lúc này sẽ thể hiện là còn 60 triệu cần phải thu. Thế thì đấy là một cái nội dung khá là dữ ích để cho các bạn cần biết để khi mà làm thanh toán. Và bạn có thể nhìn thấy ở đây là. 
S
Speaker 1
08:05
Còn. 
S
Speaker 2
08:05
Quan Trọng nữa là của Total Payment Đây là số tiền mà bạn muốn thanh toán, mà khách hàng đã thanh toán cho bạn trong lần này của cái hòa đơn cốc nợ này Đôi khi là cái tổng Total Payment này bằng luôn cái balance deal, đấy là số tiền còn lại để thanh toán Nhưng đôi khi mà khách hàng, mình thu được của khách hàng ít hơn thì các bạn có thể điều chỉnh cái số giá trị mà mình thu được của khách hàng là bao nhiêu ở đây Ví dụ ở đây. 
S
Speaker 3
08:14
Mình thu được 100 triệu của cái. 
S
Speaker 2
08:15
Hòa đơn này Và ở đây ngoài ra mình sẽ còn nhìn thấy 2 cái cột là Overdue Date và cột giấu sao như thế này. Thì các bạn có thể hiểu được rằng là những cái dòng nào mà được đánh giấu sao thì tức là những cái hóa đơn đó đã bị vượt qua cái ngày trả. Có thể là khách hàng đã trả quá chậm và số bảy chậm đang ra. Ví dụ như ví dụ này. 
S
Speaker 3
08:41
Sẽ là 202 ngày. 
S
Speaker 2
08:57
Thì đây gần như là một cái alert, một cái báo động để cho nghe thêm nhà hình thu tiền để mình biết được là những cái hòa đơn nào mà đang tổ động lâu như thế. Và ngoài ra thì các bạn có thể nhìn thấy rằng là ở đây chúng ta có rất nhiều các dòng hòa đơn và đồng khi khách hàng thì có thể thu tiền từ nhiều hòa đơn của khách hàng. Thế thì đối với những tình huống như thế bạn hoàn toàn có thể click vào đầu dòng của những tiết phiếu mà khách hàng thanh toán cho mình. Giả sử như thế này. Mình đang check vào 3 phiếu và với 2 cái phiếu cuối thì là mình thanh tám toàn bộ và cái phiếu đầu tiên thì mình chỉ thanh tám 1 phần thôi. 
S
Speaker 2
09:28
Đấy là ở cái nội dung ở giữa là mình dùng để chọn những cái nhiệm hòa đơn hoặc là phiếu nhận công nợ để làm thanh tám. Ngoài ra thì các bạn có thể điền thêm thông tin remark ở đây. Đây là thông tin giữ giải và những cái giữ giải này sẽ được đi lên báo cáo của. 
S
Speaker 1
09:34
Mình. 
S
Speaker 2
10:06
Thì mình nên là biển đầy đủ dữ dãi để đến lúc mà khi mà xem lại các bài báo, ví dụ như nhật ký chung, ví dụ chi tiết thì nội dung nó nên đầy đủ. Và như vừa nãy mình có trao đổi là màn hình này là chưa đủ để khai báo một phiếu thu hoặc là phiếu tri mà các bạn còn phải chọn thêm một cái phần nữa là phần payment mean. Bạn có thể click vào cái phần tứ tiền ở đây. Hoặc ở đây mình click chuột phải và chọn payment mean. 
S
Speaker 2
10:14
Cái việc lựa chọn này là để định nghĩa xem là bạn như cái giá trị tổng cộng số tiền là 268 triệu 533 nghìn mà khách hàng mà thu được của khách hàng là thu được bằng phương thức gì Ở đây sẽ có 2 trường hợp thông thường nhất mà các bạn sẽ dùng đấy là thu qua tiền mặt và thu qua tiền gửi nhân hàng Nếu mà thu qua tiền mặt thì bạn sẽ sử dụng podcast ở đây và zlcao mình sẽ chọn là một tài khoản tiền bên dưới này sẽ có một cái ô chống để bạn điền cái số tiền mà được. 
S
Speaker 1
10:42
Nhận. 
S
Speaker 2
11:03
Qua cái phương thức là phương thức cash. Nếu mà trong trường hợp là toàn bộ cái số tiền này bạn đều nhận qua tiền mặt thì bạn để chuột trên cái màn hình này và nhấn phím button B. B ở đây là trong chữ balance. Để hệ thống đưa toàn bộ cái số tiền này từ màn hình incoming payment vào cái package này. Sẽ có những cái tình huống khác có thể là hiếm khi xảy ra nhưng mà có thể dùng được. Ví dụ như Tổng số tiền là tổng này nhưng mà họ chỉ thanh toán 20 triệu qua tiền mặt thôi và phần còn lại qua tiền gửi dân hàng. Với cái tình huống như thế thì mình sẽ làm như sau. Ở cái package này bạn sẽ nhập 50 triệu và sang tab bank transfer bạn vẫn nhập tài khoản dân hàng. 
S
Speaker 2
11:54
Và ở cái màn hình trắng ở bên banh chan phơ này bạn sử dụng tính Ctrl-B ở đây bên banh chan này mình xóa đi đã bạn dùng tính Ctrl-B thì bạn sẽ thấy rằng là 50 triệu đã được qua tiền mặt rồi thì phần còn lại là 268 triệu trừ 50 triệu sẽ đổi chuyển sang balance ở bên cái tab banh chan phơ và Đến đây thì sẽ còn một cái thông tin nữa mà các bạn cần để khai báo. Đấy là thông tin liên quan tới cash flow. Bởi vì một bất cứ một nghiệp vụ chi tiền ra hoặc là thu tiền về thì mình đều có thể chọn cái việc nó là nội dung nào liên quan tới báo cáo di chuyển tiền tệ. 
S
Speaker 2
12:27
Và chính cái thông tin này nếu mình tiền chính xác thì sau này khi lên báo cáo di chuyển tiền tệ của mình là mọi thứ nó đều tự động nó lên. Ở đây giả sử mình để là tiền thu từ bán hàng và phương cấp dịch vụ. 
S
Speaker 1
12:53
Ok. 
S
Speaker 2
12:53
Thì đến đây là mình đã điền. 
S
Speaker 3
12:53
Coi như là xong một cái phiếu. 
S
Speaker 2
12:54
Liên Quan tới thu tiển cho một vài hóa đơn. Và mình có thể view cái bút toán của nó bằng chết năng trang là MG Preview. Bạn sẽ thấy nhiệm vụ lên như thế này. Nậu tài khoản tiền Việt Nam và tài khoản ngân hàng và có cho phần 131 của công ty AA. Và đến đây khi mà mình thấy bước toán của mình đúng rồi thì có thể ép phiếu vào hệ thống và hệ thống báo rằng đã lưu phiếu thành công. Thì đây là một cái tình huống đơn giản nhất khi mình làm một cái phiếu thu trong một. 
S
Speaker 3
13:25
Cái khách hàng với những cái hóa đơn xác định. Bạn có thể nhìn thấy là sau khi mình mở lại cái hóa đơn này thì với 2 cái hóa đơn bên. 
S
Speaker 2
13:28
Dưới thì bởi vì mình đã thanh toán toàn bộ nên value của nó bây giờ về bằng. 
S
Speaker 3
13:29
0. 
S
Speaker 2
13:50
Tuy nhiên với cái hóa đơn đầu thì balance deal vẫn còn là 251 triệu bởi vì mình mới chỉ thiên toán 100 triệu thôi. Vẫn còn một số tiền vẫn còn dư để lần sau mình thu đổi tiếp của khách hàng. Và đây là phần income in payment. Đối với annual in payment màn hình cũng tương tự. Tuy nhiên màn hình này thì chủ yếu chúng ta làm việc với phía nhà hung cấp nhiều hơn. Và đến đây thì mình sẽ. 
S
Speaker 3
13:57
Điểm qua. 
S
Speaker 2
14:17
Một Số tình huống thực tế trong nhiệm vụ thu chi mà các bạn có thể gặp phải. Đối với khi mà làm về các nhiệm vụ thu chi thì mình có thể tách các nhiệm vụ nó thành 3 loại. Thứ nhất là mình giao dịch với đối tượng công nợ hay còn gọi là đối tượng công nợ ở đây có nghĩa là hạch toán thu chi và đối ứng với các tài khoản ví dụ như 131 hay là 331 các tài khoản gọi là đối tượng. 
S
Speaker 2
14:24
Với những nhiệm vụ giao dịch với đối tượng công nợ như thế này thì mình sẽ có một là cái tình huống là thu chi công nợ theo hóa đơn như vừa rồi mình mới làm, đấy là mình thu tiền cho một số cái hóa đơn của khách hàng rồi mình sẽ có một cái tình huống nữa là thu chi tương ứng trước cho các hợp đồng có thể là bây giờ chưa có hóa đơn nhưng mà khi mà mình ký hợp đồng với phía nhà phương cấp hoặc là khách hàng ký hợp đồng với mình chẳng hạn thì mình sẽ cần phải chi ra hoặc là thu nhận được một cái khoản ứng trước nào đó mà không đi theo một cái phá đơn nào thì lát nữa mình sẽ thực hành cái tình huống này cho các bạn Sau đấy mình sẽ có một cái loại nhiệm vụ nữa Đấy là gọi là giao dịch với các tài khoản control account Với cái tình huống này thì như vừa nãy mình. 
S
Speaker 3
15:22
Có giới thiệu Đấy là khi. 
S
Speaker 2
15:22
Các bạn thanh toán cho một phẩn chi trực tiếp mà không đi qua công nợ của một đối tượng nào cả Ví dụ như mình có một cái nhiệm vụ là nợ 642 chi phí bằng tiền bắn khác chẳng hạn Rồi có tài khoản 111, những loại chi phí lẻ điện nước hoặc là những hóa đơn khách sạn khi đi công tác ở đâu đó mình không mong muốn phải ghi nhận một đối tượng công nợ mà mình chỉ cần ghi trực tiếp thôi. Thế thì hoàn toàn mình sẽ làm bằng việc chi trực tiếp bằng phiếu chi và ghi thẳng và đối ứng với tài khoản chi phí luôn chứ không qua công nợ 311 nữa. 
S
Speaker 2
15:53
Rồi sẽ có những loại nhiệm vụ, đấy là khi mình gửi tiền hoặc là rút tiền mạng về nhập quý hoặc là đôi khi là bạn chuyển khoản giữa các tài khoản dân hàm của nhau thì với cái tình huống đấy thì nó đơn giản là cái mũi, ví dụ như hôm nập mùa 1, mùa 1 và có. 
S
Speaker 3
16:19
Mùa 1, mùa 2, những cái mũi. 
S
Speaker 2
16:20
Như Thế thì chúng ta sẽ có cái thực hiện luôn ở trên tiểu thù ở biểu trì luôn. Lát nữa thì mình sẽ đề cập về cái tình huống này. Và ngoài ra thì mình sẽ giới thiệu cho các bạn về các cái bước khi mà làm giao dịch bằng ngoại tệ. Thực ra khi mà mình giao dịch bằng ngoại tệ thì mình có thể thực hiện với các đối tượng công nợ. 
S
Speaker 3
16:44
Hoặc. 
S
Speaker 2
16:45
Đối Với các tài khoản non-controller account. Chỉ có khác là tỷ giá trị mà mình viết vào trên hệ thống nó không phải là 5 đồng mà bằng các ngoại tệ khác thôi. Tuy nhiên sẽ có một số điểm lưu ý liên quan tới giao dịch bằng ngoại tệ. Đấy là đối với Việt Nam thì đôi khi trong một số hiệu vụ các bạn mong muốn được áp dụng tỷ giá trưng bình trong cái giao dịch chi ra. Vậy thì làm thế nào để xác định được tỷ giá trưng bình tại một thời điểm ở trên hệ thống thì mình sẽ chỉ cho các bạn cái việc đó. Và ngoài ra thì mình sẽ giới thiệu cho các bạn là cái việc là chênh lệch tỷ giá đã thực hiện. 
S
Speaker 2
17:14
Khi mà tại thời điểm ghi nhận công nợ và thời điểm thách tám có các cái tỷ giá khác nhau thì cái việc ghi nhận chênh lệch tỷ giá sẽ thực hiện như thế nào? Thì đây là những cái nội dung chính mà mình sẽ thực hiện, thực hành với các bạn. Thì đối với cái tình huống đầu tiên liên quan tới thu chi công nợ theo phái hơn thì mình đã trao đổi rồi. Và bây giờ mình sẽ thực hành tiếp đến cái việc là thu chi để ứng trước cho hợp đồng và lần này mình sẽ chuyển sang làm bằng thử tri. Giả sử như bây giờ bạn nhận được bạn cần phải ứng trước cho nhà cung cấp 20 triệu chẳng hạn. Giả sử như là khách hàng là V1 này. 
S
Speaker 2
17:46
Bạn sẽ nhìn thấy rằng là ở đây mình đang còn dư nợ của nhà cung cấp này một bốn cái hóa đơn chưa thanh toán. Tuy nhiên lần này bạn thanh toán cho nhà cung cấp này không phải là cho bốn cái hóa đơn này mà là một khoản không liên quan, nó phản ứng trước cho một hợp đồng mới. Thế thì bạn sẽ click vào nút Payment On Account ở đây và điền cái số tiền mà bạn ứng trước cho nhà phương cấp. Ví dụ 10 triệu. Và ở bên dưới này, thông tin diễn giải bạn sẽ vẫn điền giống như vừa nãy mình có giới thiệu. Và quan trọng nhất. 
S
Speaker 3
18:16
Là bạn sẽ nhìn thấy một cái. 
S
Speaker 2
18:17
Thông Tin. Đấy là Control On Account, cái thông tin ở dưới cùng này. Đang để là sẽ lia nhận vào 331. Tức là nếu nghiệp vụ này xảy ra, hệ thống sẽ nợ tài khoản 331 và có một tài khoản tiền nào đấy. Nếu trong trùng hợp cái việc ứng. 
S
Speaker 3
18:44
Trước này vẫn là của nhà cung cấp là. 
S
Speaker 2
18:45
FPT, nhưng cái tài khoản mà bạn mướn nó không phải là 331 mà có thể là 338 hay là 341 hay bất cứ một tài khoản Controller Account nào bạn có thì bạn hoàn toàn có thể sửa cái thông tin này ở đây. Và hệ thống chỉ liện kê ra tất cả các cái tài khoản gọi là control account thôi. Như là tình huống này thì mình vẫn cho vào 311. Và phía bên này thì bạn luôn luôn phải làm một cái bước là payment mean. 
S
Speaker 3
19:12
Để xác định được phương thức thanh toán cho doanh lịch. 
S
Speaker 2
19:13
Này là phương thức gì. Ví dụ mình được tiêu bằng tiền mặt. Mình nhớ là ở đây là control B, B trong chữ balance. Và mình sẽ chọn cái. 
S
Speaker 3
19:16
Chỉ Tiêu thương trưởng tiền tệ cho chính xác. 
S
Speaker 2
19:38
Bạn ấn OK ở đây và khi mà mình view bút toán lên thì bút toán sẽ như thế này nợ tài khoản 331 và có tài khoản tiền mặt và cái việc nợ có này là không gắn với bất cứ bút hóa đơn nào mình sẽ add tiếu vào hệ thống sẽ có những cái tình huống đấy là bạn vừa thanh toán cho một số hóa đơn cũ mà. 
S
Speaker 3
19:44
Vừa ứng trước cho một cái hợp đồng mới. 
S
Speaker 2
20:07
Và bạn sẽ chỉ cần làm 1 phiếu ăn quanh bên phần thôi chứ không cần phải tách ra thành 2 phiếu. Và với cái tình huống như thế thì bạn sẽ làm như sau. Giả sử vẫn là ứng trước cho nhà cung cấp là cộng ty V1 này. Bạn sẽ nhìn thấy là lần này bạn muốn thanh toán hòa đơn này và hòa đơn này. Ngoài ra bạn sẽ ứng trước cho nhà cung cấp này thêm 5 triệu nữa. Thế thì có nghĩa là ở đây bạn vừa trách vào. 
S
Speaker 3
20:15
Các cái hòa đơn. 
S
Speaker 2
20:37
Ghi nhận công nợ mà mình chưa thanh toán và vừa check vào payment on account và điền cái thông tin giá trị mà bạn trả thước là bao nhiêu ở đây. Và ở đây thì mình lại tiếp tục chọn payment mean. Đủ như tiền khoản của mân hàng chẳng hạn. Thế thì bút toán thì vẫn chỉ đơn giản tới là cỡ nợ tài khoản 331 và có tài khoản tiền thôi. Tuy nhiên là về trại ngầm ở bên trong ý thì cái giá trị này có 5 triệu là chơi vơi, chưa gắn với một cái hóa đơn nào. Và phần còn lại thì đang là thanh toán cho một số cái hóa đơn cũ của các bạn. Mình ép phiếu vào. Vậy là thành công. 
S
Speaker 2
21:08
Đấy là cái tình huống mà mình ứng trước cho khách hàng hoặc là nhận ứng trước từ nhà cung cấp, à ngược lại. 
S
Speaker 1
21:31
Ứng. 
S
Speaker 2
21:31
Trước cho nhà cung cấp và nhận ứng trước từ khách hàng. Với tình huống tiếp theo, khi mà các bạn giao dịch với tài khoản non-contractor account, mình sẽ hướng dẫn các bạn làm một tình huống như. 
S
Speaker 3
21:35
Sau, bạn chi trả chi phí. 
S
Speaker 2
21:36
Tiền điện đi. Và cái lần này mình không, bởi vì chi phí điện nước này của các bạn có thể là chi phí nhỏ và các bạn không lưu giữ nhà cung cấp cấp phí điện lược này vào hệ thống như một đối tượng công nợ, nào là chi trả trực tiếp. Và lúc đấy thì mình sẽ sử dụng cái phần là Accounting Payment và thuộc loại là Account như thế này. Và lúc đấy thì ở phía màn hình bên dưới này, hệ thống. 
S
Speaker 3
22:05
Sẽ liệt kê ra không phải là các. 
S
Speaker 2
22:05
Đối Tượng mà không phải là những kế hoạch đơn tuần đặng nữa mà là một màn hình trắng ở chỗ đấy để các bạn liền cái thông tin bài khoản vào. Lúc này bạn sẽ điền, ví dụ như tài khoản đối ứng là 642, ý định là 642, khi đi mắc tiền khác có thể ở đây, và mình sẽ có đắp lên mắp là cái chỗ đi dưới giải. Nếu mà đây là một cái hòa đơn mà có thuế giá trị gia tăng chẳng hạn thì các bạn cũng. 
S
Speaker 3
22:31
Nhớ để điền đủ cái thông tin này. Và. 
S
Speaker 2
22:32
Số tiền trước thuế ở đây là 22 triệu. Rồi khi kê khai, mình sẽ kê khai luôn trong tháng này. Loại hóa đơn, mình sẽ gọi là dùng chung. Ngày hóa đơn là ngày hôm nay luôn. Mẫu số hóa đơn. 
S
Speaker 3
23:00
Ký Hiệu hóa đơn, số hóa đơn thì đây. 
S
Speaker 2
23:01
Là hoặc toàn là những thông tin. 
S
Speaker 3
23:01
Thông Cực ở trên phiếu hoặc là trên. 
S
Speaker 2
23:02
Chứng Từ mà các bạn có thì các bạn điền hết ra. Và quan trọng nhất là mình nhớ điền tên công ty và. 
S
Speaker 3
23:04
Mạng số thuế. 
S
Speaker 2
23:25
Bởi vì đây không phải là đối tượng cũng nợ có sẵn trên hệ thống nên là cái thông tin này hoàn toàn là hệ thống chưa biết và các bạn cần phải điền thêm vào. Ngoài ra thì trong một cái tiểu chi như thế này các bạn có thể viết thành nhiều dòng chi khác nhau. Có thể dòng trên là chi phí tiền viện, dòng dưới là chi phí tiền nước hay là các. 
S
Speaker 3
23:32
Loại chi phí khác thì các bạn có thể điền rất nhiều dòng ở. 
S
Speaker 1
23:33
Dưới này. 
S
Speaker 2
23:53
Và đến lúc thanh phá là mình chỉ thành phán số tổng thôi. Và tổng này cả thuế đang là 2 triệu 2. Các bạn. 
S
Speaker 3
23:55
Nhớ thêm nữa là. 
S
Speaker 2
23:56
Mình sẽ tận kiện cả cái remark bên dưới này. Bởi vì remark bên dưới này mới là cả hãy để lên các báo cáo, báo cáo kế toán của mình. Còn cái quần đăng remark trên này mình sẽ chỉ hiển thị và nhìn ở trên tiếu thôi. Các bạn nhớ là ở đây tiếp tục mình chọn tên mình đi. Bạn sẽ thấy là lúc này khi mà khai báo xong mục tiêu như thế này thì bước táo của bạn sẽ như thế này. Nợ tài khoản chi phí, nợ tài khoản thuế. 
S
Speaker 3
24:27
Và có tài khoản tiền thì làm như. 
S
Speaker 2
24:27
Thế Này thì sẽ đối với những tiết khoản chi phí lạc bạc và không có một đối tượng nhà cung cấp truyền thống nào đó thì cái việc là mình khai báo luôn trên Always Payment thì nó sẽ tiện và nó nhanh hơn cho các bạn rất là nhiều. Và các bạn vẫn có thể điệt khai đầy đủ các thông tin hóa đơn. Mỗi một vòng này là một hóa đơn, không vấn đề gì cả. Nó rất là nhanh. Đỡ phải qua một cái bước là 18 Voice. Và mình sẽ add cái tiếu này vào hệ thống. Đấy là khi mà mình có, mình vừa mới ví dụ về cái tình huống liên quan tới chi ra cho một đầu chi tí trực tiếp. 
S
Speaker 2
24:59
Vậy thì bây giờ trường hợp tiếp theo là khi mà mình thu hoặc là mình rút tiền giúp tiền mặt về nhập quỹ, giúp tiền gửi nhân hàng về nhập quỹ, hoặc là gửi tiền mặt vào tài khoản tiền tử nhân hàng, hoặc đôi khi là chuyển tiền từ tài khoản nhân hàng này sang tài khoản nhân hàng khác. Thế thì với tình huống như vậy thì mình sẽ sử dụng chức măng là account ở đây. Và lúc này thì bởi vì là 2 đầu nợ và đầu có của các bạn đều là các tài khoản tiền thì hoàn toàn các bạn có thể sử dụng phiếu thu hay phiếu chi tùy các bạn. Và các bạn có thể coi. 
S
Speaker 1
25:32
Như. 
S
Speaker 2
25:53
Lấy ví dụ như trong trường hợp mình lấy ví dụ là giúp tiền gửi ngân hàng về nhập quỹ số tiền là 100 triệu. Thế thì nếu mà giả sử mình dùng phiếu chi là phiếu Alwayn Payment. Thế thì tài khoản bị chi ra sẽ là tài khoản ngân hàng và tài khoản nhận về là tài khoản tiền mặt. Thế thì ở đây trong phiếu chi này mình sẽ ghi cái tài khoản ở cao ở đây là 111 và tài khoản nhận tiền về. Không có thông tin thuế. Chỉ còn tiền. 
S
Speaker 3
26:23
Như thế này thôi. 
S
Speaker 1
26:51
Và. 
S
Speaker 2
26:51
Dĩa dài ở phía dưới nữa. Ở đây các bạn nhớ quay cùng Facebook me để nghe nhận thông tin. 
S
Speaker 3
26:53
Là tài khoản. Tao tiền ra, ví dụ tài khoản. 
S
Speaker 1
26:53
Này. Tiền 500 triệu. Các bạn có thể điền những thông tin này ở tab bánh tráng phô. Và. 
S
Speaker 2
27:24
Đến đây mình sẽ có một nội dung là lên báo cáo chuyển tiền tệ. Thì các bạn cũng hiểu rằng đối với những nhiệm vụ như thế này thì sẽ không được lên báo cáo chuyển tiền tệ bởi vì đơn giản là nó chỉ lẫn chuyển qua lại giữa các tài khoản tiền thôi. Thế thì ở đây đối với giải pháp VHS của AppZone thì các bạn sẽ sử dụng nhiệm vụ. Mình sẽ chọn cái là nhiệm vụ chuyển tiền nội bộ. Thế thì những nhiệm vụ này bọn mình sẽ loại ra khỏi báo cáo chuyển tiền tệ. Và mình sẽ view vút toán. Xoán như sau, tăng tiền mầm và dạo tiền. 
S
Speaker 3
27:55
Hưởng thêm. 
S
Speaker 2
28:04
Tình huống tiếp theo mà mình sẽ giới thiệu với các bạn là liên quan tới việc mình sẽ giao dịch bằng các ngoại tệ. Vậy thì với cái nhu cầu là giả sử như khi mà các bạn muốn chi ra bằng ngoại tệ ở trong tài khoản tiền, ví dụ như tiền USD chẳng hạn. Thế thì bây giờ mình sẽ sử dụng tỷ giá để làm cái phiếu này. Nếu mà trong trường hợp là bạn sử dụng tỷ giá trung bình của cái tài khoản nhân hàng mà bạn chút chi. 
S
Speaker 3
28:12
Tiền ra. 
S
Speaker 2
28:33
Thế thì làm thế nào để mình làm được cái nhiệm vụ như vậy? 
S
Speaker 2
28:34
Thì ở đây mình có tóm tách thành 2 bước để mình làm Đấy là bước thứ nhất là bạn sẽ cần phải tính được ra giá trung bình theo moving average của cái tỷ giá của tiền USB tại thời điểm bạn làm cái bút toán phiếu tri này thì đang là bao nhiêu Và sau khi bạn viết cái tỷ giá trung bình này rồi thì bạn sẽ nhập cái tỷ giá này vào trong phiếu tri để làm các cái bút toán chi vào ngoại tệ thì với 2 cái bức này ở trên hệ thống thì mình sẽ làm như sau ở đây mình sẽ lấy ví dụ là 1 tiếng chi cho 1 nhà cung cấp giữ như ở đây và mình mong muốn là chi 2.000 đô cho nhà cung cấp này vậy thì ở đây mình sẽ trên cái màn hình tiếng chi cho nhà cung cấp này mình sẽ. 
S
Speaker 3
29:08
Chọn luôn papermin. 
S
Speaker 2
29:33
Và cái đồng tiền mà mình chi ra sẽ là đồng USD. Và khi bạn chọn đồng USD ở đây thì. 
S
Speaker 3
29:35
Cái tỷ giá bạn đang xem ở. 
S
Speaker 2
29:35
Đây là cái tỷ giá mà bạn đã khai báo hàng ngày ở trên hệ thống liên quan với đồng USD. Tuy nhiên, với kinh nghiệm của thiếu chi này, nếu mà bạn không muốn dùng cái tỷ giá này mà bạn muốn dùng tỷ giá trung bình, thế thì bây giờ bạn sẽ phải khắc định như sau. Một, đó là bạn sẽ nhập cái số tiền là tiền đô ở đây, ví dụ như 2000 đô và cái tài khoản ngân hàng mà mình chi ra cái số tiền này giả sử là ngân hàng D và cái tỷ giá mà mình sử dụng cho cái nhiệm vụ này mình sẽ cần phải tìm kiếm bằng cách làm như sau bạn có thể click vào luôn cái tài khoản USD ở đây bạn. 
S
Speaker 3
30:09
Sẽ nhìn thấy rằng là mình sẽ. 
S
Speaker 2
30:09
Nhận ra cái màn hình trạng vớt cao với tài khoản USD tại ngân hàng D. 
S
Speaker 1
30:32
Và. 
S
Speaker 2
30:32
Cái số dư hiện tại của cái tài khoản này là 190.000 đô và bạn click mũi đen vàng ở đây bạn sẽ ra được OkaBalance của cái tài khoản tiền đô này ở cái màn hình OkaBalance bạn sẽ có 2 cái thông tin đấy là số dư cuối kỷ bằng tiền Việt là bao nhiêu và số dư cuối kỷ bằng tiền đô là cuối đến thời điểm này, vĩ kế đến thời điểm này là bao nhiêu Và dựa vào 2 con số này bạn có thể chia ra để lấy được ra cái tỷ giá trung bình tại thời điểm này. Mình có thể mang cái thông tin này ra Excel. Nhớ là dùng 2 cái cột Cumulative Balance LC và Cumulative Balance FC. 
S
Speaker 1
31:51
Và. 
S
Speaker 2
31:51
Bạn sẽ thấy ở đây sẽ là tỷ giá trung bình đến thời điểm hiện tại ở cái tài khoản tiền gửi, tiền USD của bản hàng B. Và mình sẽ copy cái thông tin tỷ giá này. Và đưa lên cái platform chi tiền của mình thay thế cho cái tỷ giá. Ví dụ như thế này. Và. 
S
Speaker 3
31:56
Bạn ấn OK. Vậy thì. 
S
Speaker 2
31:57
Khi mà làm như thế này thì cái bút toán viu. 
S
Speaker 3
31:58
Lên của mình sẽ như sau. 
S
Speaker 2
32:24
Mình đang hành toán là chi ra 2.000 đô với cái tỷ giá trung bình vừa nãy cho cái vendor là vendor số 3 và chỉ cần như thế này thôi là bạn đã có thể ad được phiếu rộn. Thế là mình đã thành công làm xong cái việc là làm phiếu chi bằng ngoại tệ cho một nhà cung cấp. Với các tình huống là chi khác cho khách hàng. 
S
Speaker 3
32:30
Hay chi cho các tài khoản ở cao. 
S
Speaker 1
32:31
Khác. 
S
Speaker 2
32:53
Thì mình cũng làm tương tự để lấy ra cái tỷ giá trung bình. Nếu mà với cái xét đoán tỷ giá của các bạn phải dùng tỷ giá trung bình thì mình sẽ làm như thế. Tiếp theo đến một cái tình huống nữa liên quan tới phần giao dịch với ngoại tệ. Đấy là tình huống khi mà mình có phát hiện trách mệnh tỷ giá khi mà thanh toán. Đầu tiên là lúc trước mình làm ví dụ như nghi nhận công nợ. 
S
Speaker 1
33:23
Với. 
S
Speaker 2
33:23
Một tỷ giá là 22.000 chẳng hạn, rồi sau này đến lúc thanh toán một tỷ giá trở thành là 23.000. Thế thì lúc đấy chúng ta sẽ xuất hiện lại một lộ khi đánh giá trình tỷ giá đã thực hiện. Thế thì cái việc này trên hệ thống sẽ được tự động hạch toán luôn vào năm 1 năm và 6-3 năm. Chúng mình không cần phải làm những bút toán nào khác cả. Với cái tình huống này, mình sẽ lấy ví dụ một nhà cung cấp mà mình có giao dịch bằng ngoại tệ, Giả sử như với nhiệm vụ này, giá đang là 20. Và bây giờ khi mà mình thanh toán, mình sẽ thanh toán bằng tiền. 
S
Speaker 3
34:04
Lúc đi. Với giả sử hôm nay thì giá không phải là 20 nữa, mà là. 
S
Speaker 2
34:05
22. Thì bạn có thể xem cái bút toán sau khi F thì sẽ như thế này. Hoành toán ghi nhận là thanh toán cho khoảng công nợ 1.000 USD và ngoài ra chúng ta sẽ xuất hiện thêm lỗ trinh vực tỷ giá là 2 triệu nữa. Thì có nghĩa là cái việc là lỗ trinh vực tỷ giá khi mà thanh toán. 
S
Speaker 3
34:46
Đã được cái. 
S
Speaker 2
34:46
Phần Incoming Payment là Alimento Payment làm tổ thì không cần làm thêm bút toán nào nữa. Thì làm như đây xong chúng ta có thể điền thêm dưỡng tảng và F tiếu vào. Vì thế là chúng ta đã hoàn thành việc làm các bước đoán có liên quan với ngoại tệ và phát sinh gia trình lệch tỷ giá. Phần cuối của bài đạo ngày hôm nay thì mình sẽ giới thiệu cho các bạn về các báo cáo liên quan tới thu tiền và tri tiền. Với các báo cáo ở phần thu tiền tri tiền thì chúng ta sẽ xem trong mục banking. Và ở đây sẽ có phần banking report. 
S
Speaker 2
35:36
Trong phần banking report này là báo cáo gọi là báo cáo chuẩn của SAP có sẵn dành cho phần thu chi thì với phần banking này chúng ta sẽ nhìn thấy là có một báo cáo là payment draft report. Báo cáo này sẽ hỗ trợ cho các bạn trong cái việc là tra cứu lại những cái phiếu thu hoặc phiếu chi mà mình đã làm dạng nhát mà mình chưa ad hình phiếu thận thì sẽ thể hiện hết ở trên cái báo cáo. 
S
Speaker 1
35:43
Này. 
S
Speaker 2
36:02
Bạn có thể nhìn thấy rằng là ở trong bất cứ một màn hình 2G hay là một màn hình document nào thì chúng ta luôn có một cái chức năng đấy là SET AS DRAFT như thế này mình click chuột phải và chọn SET AS DRAFT vậy thì khi mà mình làm cái thao đắc này có thể là trong tình huống là mình đang bận làm được điều gì đó khi mà phiếu này mình đang làm giờ ở hè mình cần phải confirm một số thông tin chứ chắc chắn thì mình cứ tạm SET DRAFT và sau. 
S
Speaker 3
36:11
Đấy khi nào mình có một thông tin đầy đủ. 
S
Speaker 2
36:30
Thì mình sẽ mở lại phiếu và nhập tiếp. Thế thì khi mà mình đã làm phiếu Set Grab như thế thì trên màn hình Payment Grab Report cũng sẽ thể hiện cái phiếu này. Bạn có thể nhìn thấy là mình đang có một phiếu Outward Payment và một phiếu Incoming Payment dạng Grab. Và dạng đang là của user là Manager làm. Ngoài ra thì mình sẽ xem đợt của từng user khác nếu có làm thì mình có thể lọc ra ở đây. Rồi các cái phiếu này mình cũng có thể lọc và chỉ lấy xem những phiếu income payment hoặc là chỉ xem our payment là do mình check vào một trong hai cái nút này và check cả hai. 
S
Speaker 2
37:02
Rồi bạn cũng có thể xem là những cái phiếu mà đã được chỉ xem những phiếu chưa được add vào hệ thống thôi thì mình sẽ check vào open only. Còn nếu mà mình bỏ check vào nút này thì có nghĩa là hệ thống sẽ hiện trên là toàn bộ những cái phiếu mà đã từng xếp address bất kể là đã được ad thật vào hệ thống ngày trước. Thì đây là một cái màn hình báo cáo phiếu Grab dành cho phần banking. Tuy nhiên là các bạn cũng biết rồi là trong phần kế toán Việt Nam chúng ta còn có rất nhiều cái thu cầu liên quan tới báo cáo thu chi, ví dụ báo cáo số chi tiết, tài khoản, tiền mặt hàng hạn, tiền lượng nhân hạn. 
S
Speaker 2
37:33
Những báo cáo đấy thì tất nhiên là có, tuy nhiên là nó lại không nằm ở. 
S
Speaker 3
37:35
Trong phần banking này, mà lại nằm ở. 
S
Speaker 2
37:35
Trong phần finance của kế toán. Và báo cáo đấy thì các bạn có thể xem ở trong phần Financial Report và ở gục ở Accounting. Trong đấy thì mình thấy là thường hay sử dụng nhiều là báo cáo General Ledger ở đây. Với cái báo cáo này, bạn. 
S
Speaker 3
38:01
Có Thể xem được số chi tiết của một hoặc nhiều tài khoản tiền và các xem. 
S
Speaker 2
38:02
Sẽ như sau. Thứ nhất là bạn bỏ trách với mình cái phần Business Partner và mình sẽ chỉ trách vào phần Account. 
S
Speaker 3
38:05
Thôi. Trong cái phần chọn tài khoản kế toán. 
S
Speaker 1
38:05
Này. 
S
Speaker 2
38:27
Bạn có thể chọn một hoặc nhiều tài khoản liên quan đến tiền và tiền gửi ngân hàng. Và bạn có thể xem theo một khoảng thời gian, ví dụ từ ngày nào đến. 
S
Speaker 3
38:30
Ngày nào. Và có thể lọc hay filter. 
S
Speaker 2
38:31
Như Thế Nào đấy bằng cách soft and soft wire ở đây. Và cái báo cáo này hiển thị ra cho các bạn sẽ có dạng. 
S
Speaker 3
38:33
Như sau. Thực ra là báo cáo này là. 
S
Speaker 2
38:34
Để xem tất cả các tài khoản tiền toán, chứ không riêng gì tài khoản tiền tiền gửi ngân hàng. Cái cấu trúc của báo cáo này như mình đã từng giới thiệu, nó sẽ có những thông tin, ví dụ như ngày tháng cụ phiếu, số phiếu, phát sinh nộ, phát sinh có và số dung vi kế sau phát sinh đấy là Gimple Edit Balance. Đây là một cái báo cáo mà mình nghĩ là sẽ rất hay sử dụng khi mà mình muốn kiểm tra số, kiểm tra chi tiết nhiệm vụ. Ngoài ra, đến hiện nay mới là báo cáo chuẩn của SAP thôi. Ngoài ra, đồng với bộ báo cáo VSS của AppZone, thì Quảng Bình cũng thiết kế ra những phòng báo cáo theo chuẩn thông tư 200. 
S
Speaker 2
39:26
Thực tế là các báo cáo thì sẽ thông tin nó sẽ giống nhau, chỉ khác nhau về mặt trình bày thôi. Và đương nhiên là báo cáo theo thông tư 200. 
S
Speaker 3
39:28
Thì sẽ bằng tiếng. 
S
Speaker 2
39:29
Việt nên là sẽ dễ để xem hơn. Và đối với báo cáo của thông tư 200, bạn có thể nhìn ở trong mục Financial Report và chọn vào một sổ sách. Trong mục sổ sách này, các bạn sẽ nhìn thấy có 4 báo cáo liên quan tới. 
S
Speaker 1
39:33
Tiền. 
S
Speaker 2
39:52
Đấy là sổ quỹ tiền mặt theo nguồn tệ, sổ quỹ tiền mặt, sổ tiền gửi nhân hàng theo nguồn tệ và sổ tiền gửi nhân hàng. Thì ví dụ như với sổ quỹ tiền mặt, mình có thể xem một báo cáo như thế này. Mình sẽ điền thông tin ở trọng tài khoản này, rồi khoảng thời gian từ ngày đến ngày. Và mình có thể lấy lên báo cáo này giữ giải nào mà mình muốn. Ví dụ như lấy Journal Remarks hoặc là Local Remarks, đem báo cáo theo đồng Việt Nam. Mình sẽ tìm một khoảng thời gian dài hơn để có nhiều ý hiệu. Bạn sẽ thấy rằng, thứ nhất là về mặt phong biểu thì sẽ giống với yêu cầu theo thông tin 200. 
S
Speaker 2
40:52
Rồi các thông tin ngày thứ tư, số địa thứ tư và số tiền rất là dễ để xem. Và nếu bạn báo cáo có nhiều trang thì bạn sẽ phải lệnh để sang trang tiếp theo để xem. Và ngoài ra là khi bạn nhìn ấn thì cái khổ giấy để in ra của báo báo này sẽ là của A4. Thì đây là báo cáo sổ quỹ tiền mặt liên quan tới các cái sổ theo nguyên tệ. Thật sự mình sẽ xem Ví dụ sổ tiền gửi văn hào thư ngôn vệ chẳng hạn Bạn cũng sẽ chọn các cung tin từ trên xuống dưới Ví dụ tài khoản tiền đâu Thư ngôn vệ ở đây. 
S
Speaker 3
41:23
Mình muốn xem theo đồng đô la 1 tháng. 
S
Speaker 2
41:24
1 đến bây giờ Các bạn sẽ thấy là ở báo cáo này thì cũng là theo phong biểu của thông tin 200. Và ngoài thông tin chi tiết từ nhiệm vụ đến tiền viện thì mình còn xem các thông tin cả theo một đồng nguyên tệ của nó nữa. Và tỉ giá tại các nhiệm vụ này là bao nhiêu thì mình sẽ nhìn với các thông tin ở đây. Thì đây là một cái báo cáo khác theo thông tin 200 thì mình đã trình bày như thế này. Với các báo cáo này thì mình nghĩ cũng là đã tương đối đầy đủ trong cái nhu cầu mà mình. 
S
Speaker 1
42:18
Cần. 
S
Speaker 2
42:18
Theo Dõi khi mà làm tuyến vu, tuyến tri. Đến đây thì là bài học của tuần 3 đã hết rồi. Và mình hy vọng sẽ gặp lại các bạn ở những bài học tiếp theo, quan trọng tổng hợp với các bài học nơi cao khác. Xin chào và hẹn gặp lại các bạn. 
00:0042:42
