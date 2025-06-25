# [Coop-Translator: Tự động hóa việc dịch tài liệu giáo dục một cách dễ dàng](https://github.com/hoanglong8/Azure_Coop-Translator/blob/main/translations/vi/README.md)

![image](https://github.com/user-attachments/assets/21ad1b91-0f79-4d71-93a6-7abfe060bbcc)

Link nguồn: https://github.com/hoanglong8/Azure_Coop-Translator/blob/main/translations/vi/README.md

## Tổng quan: Đơn giản hóa việc dịch nội dung giáo dục của bạn

Rào cản ngôn ngữ gây khó khăn lớn trong việc tiếp cận các tài nguyên giáo dục giá trị và kiến thức kỹ thuật cho người học và nhà phát triển trên toàn thế giới. Điều này giới hạn sự tham gia và làm chậm tiến độ đổi mới và học hỏi toàn cầu.

**Co-op Translator** ra đời nhằm giải quyết quy trình dịch thủ công kém hiệu quả cho các chuỗi giáo dục quy mô lớn của Microsoft (như các hướng dẫn "For Beginners"). Công cụ này đã phát triển thành một giải pháp mạnh mẽ, dễ sử dụng, giúp phá bỏ rào cản ngôn ngữ cho mọi người. Bằng cách cung cấp bản dịch tự động chất lượng cao qua CLI và GitHub Actions, Co-op Translator giúp các nhà giáo dục, sinh viên, nhà nghiên cứu và nhà phát triển trên toàn cầu chia sẻ và tiếp cận kiến thức mà không bị giới hạn bởi ngôn ngữ.

Xem cách Co-op Translator tổ chức nội dung giáo dục đã được dịch:

![Example](../../translated_images/translation-ex.e97fcdf09d27f56060939080a0b3e491e92b67e047ca005826cb3de11399907c.vi.png)

Các file Markdown và văn bản trong hình ảnh được dịch tự động và sắp xếp gọn gàng vào các thư mục theo từng ngôn ngữ.

**Hãy mở rộng quyền truy cập toàn cầu cho nội dung giáo dục của bạn với Co-op Translator ngay hôm nay!**

## Hỗ trợ truy cập toàn cầu cho tài nguyên học tập của Microsoft

Co-op Translator giúp thu hẹp khoảng cách ngôn ngữ cho các sáng kiến giáo dục quan trọng của Microsoft, tự động hóa quá trình dịch cho các kho lưu trữ phục vụ cộng đồng nhà phát triển toàn cầu. Một số ví dụ đang sử dụng Co-op Translator bao gồm:

[![Generative-AI-for-beginners](https://github-readme-stats.vercel.app/api/pin/?username=microsoft&repo=Generative-AI-for-beginners&bg_color=ffffff&title_color=0078D4&text_color=333333&border_color=c0d8f0&border_radius=10)](https://github.com/microsoft/Generative-AI-for-beginners)
[![ML-For-Beginners](https://github-readme-stats.vercel.app/api/pin/?username=microsoft&repo=ML-For-Beginners&bg_color=ffffff&title_color=0078D4&text_color=333333&border_color=c0d8f0&border_radius=10)](https://github.com/microsoft/ML-For-Beginners)
[![AI-For-Beginners](https://github-readme-stats.vercel.app/api/pin/?username=microsoft&repo=AI-For-Beginners&bg_color=ffffff&title_color=0078D4&text_color=333333&border_color=c0d8f0&border_radius=10)](https://github.com/microsoft/AI-For-Beginners)
[![ai-agents-for-beginners](https://github-readme-stats.vercel.app/api/pin/?username=microsoft&repo=ai-agents-for-beginners&bg_color=ffffff&title_color=0078D4&text_color=333333&border_color=c0d8f0&border_radius=10)](https://github.com/microsoft/ai-agents-for-beginners)
[![PhiCookBook](https://github-readme-stats.vercel.app/api/pin/?username=microsoft&repo=PhiCookBook&bg_color=ffffff&title_color=0078D4&text_color=333333&border_color=c0d8f0&border_radius=10)](https://github.com/microsoft/PhiCookBook)
[![Generative-AI-for-beginners-dotnet](https://github-readme-stats.vercel.app/api/pin/?username=microsoft&repo=Generative-AI-for-beginners-dotnet&bg_color=ffffff&title_color=0078D4&text_color=333333&border_color=c0d8f0&border_radius=10)](https://github.com/microsoft/Generative-AI-for-beginners-dotnet)

## Các tính năng chính

- **Dịch tự động**: Dịch văn bản sang nhiều ngôn ngữ một cách dễ dàng.
- **Tích hợp GitHub Actions**: Tự động hóa việc dịch trong quy trình CI/CD của bạn.
- **Giữ nguyên định dạng Markdown**: Bảo toàn cú pháp Markdown chính xác trong quá trình dịch.
- **Dịch văn bản trong hình ảnh**: Trích xuất và dịch văn bản có trong hình ảnh.
- **Công nghệ LLM tiên tiến**: Sử dụng các mô hình ngôn ngữ hiện đại để có bản dịch chất lượng cao.
- **Dễ dàng tích hợp**: Kết nối mượt mà với cấu hình dự án hiện có của bạn.
- **Đơn giản hóa bản địa hóa**: Tinh gọn quy trình bản địa hóa dự án cho thị trường quốc tế.

## Cách thức hoạt động

![Architecture](../../translated_images/architecture_241019.15de09d63bf3f7065d5da8ac1e08948c9d3bf795aae3b7f6f8d3cce53c95d00b.vi.png)

Co-op Translator lấy các file Markdown và hình ảnh từ thư mục dự án của bạn và xử lý như sau:

1. **Trích xuất văn bản**: Lấy văn bản từ các file Markdown và, nếu được cấu hình (ví dụ với Azure AI Vision), văn bản trong hình ảnh.
1. **Dịch AI**: Gửi văn bản đã trích xuất đến LLM được cấu hình (Azure OpenAI, OpenAI, v.v.) để dịch.
1. **Lưu kết quả**: Lưu các file Markdown và hình ảnh đã dịch vào các thư mục theo ngôn ngữ, đồng thời giữ nguyên định dạng ban đầu.

## Bắt đầu

Bắt đầu nhanh với CLI hoặc thiết lập tự động hóa đầy đủ bằng GitHub Actions. Chọn cách phù hợp nhất với quy trình làm việc của bạn:

1. **Command Line (CLI)** - Dịch một lần hoặc điều khiển thủ công
2. **GitHub Actions** - Tự động dịch mỗi khi có thay đổi đẩy lên

> [!NOTE]
> Mặc dù hướng dẫn này tập trung vào tài nguyên Azure, bạn có thể dùng bất kỳ mô hình ngôn ngữ nào được hỗ trợ.

### Hỗ trợ ngôn ngữ

Co-op Translator hỗ trợ nhiều ngôn ngữ để giúp bạn tiếp cận khán giả toàn cầu. Dưới đây là những điều bạn cần biết:

#### Tham khảo nhanh

| Ngôn ngữ | Mã | Ngôn ngữ | Mã | Ngôn ngữ | Mã |
|----------|----|----------|----|----------|----|
| Arabic | ar | Bengali | bn | Bulgarian | bg |
| Burmese (Myanmar) | my | Chinese (Simplified) | zh | Chinese (Traditional, HK) | hk |
| Chinese (Traditional, Macau) | mo | Chinese (Traditional, TW) | tw | Croatian | hr |
| Czech | cs | Danish | da | Dutch | nl |
| Finnish | fi | French | fr | German | de |
| Greek | el | Hebrew | he | Hindi | hi |
| Hungarian | hu | Indonesian | id | Italian | it |
| Japanese | ja | Korean | ko | Malay | ms |
| Marathi | mr | Nepali | ne | Norwegian | no |
| Persian (Farsi) | fa | Polish | pl | Portuguese (Brazil) | br |
| Portuguese (Portugal) | pt | Punjabi (Gurmukhi) | pa | Romanian | ro |
| Russian | ru | Serbian (Cyrillic) | sr | Slovak | sk |
| Slovenian | sl | Spanish | es | Swahili | sw |
| Swedish | sv | Tagalog (Filipino) | tl | Thai | th |
| Turkish | tr | Ukrainian | uk | Urdu | ur |
| Vietnamese | vi | — | — | — | — |

#### Cách dùng mã ngôn ngữ

Khi sử dụng Co-op Translator, bạn cần chỉ định ngôn ngữ bằng mã tương ứng. Ví dụ:

```bash
# Translate to French, Spanish, and German
translate -l "fr es de"

# Translate to Chinese (Simplified) and Japanese
translate -l "zh ja"
```

> [!NOTE]
> Để biết thông tin kỹ thuật chi tiết về hỗ trợ ngôn ngữ, bao gồm:
>
> - Đặc tả font chữ cho từng ngôn ngữ
> - Các vấn đề đã biết
> - Cách thêm ngôn ngữ mới
>
> Hãy xem [Supported Languages Documentation](./getting_started/supported-languages.md).

### Mô hình và dịch vụ được hỗ trợ

| Loại                  | Tên                           |
|-----------------------|--------------------------------|
| Language Model        | ![Azure OpenAI](https://img.shields.io/badge/Azure_OpenAI-blue?style=flat-square) ![OpenAI](https://img.shields.io/badge/OpenAI-green?style=flat-square&logo=openai) |
| AI Vision       | ![Azure AI Vision](https://img.shields.io/badge/Azure_AI_Vision-blue?style=flat-square) |

> [!NOTE]
> Nếu dịch vụ AI vision không có sẵn, co-op translator sẽ chuyển sang [Markdown-only mode](./getting_started/markdown-only-mode.md).

### Thiết lập ban đầu

Trước khi bắt đầu, bạn cần chuẩn bị các tài nguyên sau:

1. Language Model Resource (Bắt buộc):
   - Azure OpenAI (Khuyến nghị) - Cung cấp bản dịch chất lượng cao với độ tin cậy doanh nghiệp
   - OpenAI - Lựa chọn thay thế nếu bạn không có quyền truy cập Azure
   - Để biết chi tiết về các mô hình được hỗ trợ, xem [Supported Models and Services](../..)

1. AI Vision Resource (Tùy chọn):
   - Azure AI Vision - Cho phép dịch văn bản trong hình ảnh
   - Nếu không cấu hình, công cụ sẽ tự động dùng [Markdown-only mode](./getting_started/markdown-only-mode.md)
   - Khuyến nghị cho các dự án có hình ảnh chứa văn bản cần dịch

1. Các bước cấu hình:
   - Làm theo [hướng dẫn thiết lập Azure AI](./getting_started/set-up-azure-ai.md) để biết chi tiết
   - Tạo file `.env` chứa khóa API và endpoint (xem phần [Quick Start](../..))
   - Đảm bảo bạn có quyền và hạn mức phù hợp cho các dịch vụ đã chọn

### Chuẩn bị dự án trước khi dịch

Trước khi bắt đầu quá trình dịch, làm theo các bước sau để chuẩn bị dự án:

1. Chuẩn bị README của bạn:
   - Thêm bảng dịch trong README.md để liên kết đến các phiên bản dịch
   - Ví dụ định dạng:

     ```markdown

     ### 🌐 Multi-Language Support
     
     [French](../fr/README.md) | [Spanish](../es/README.md) | [German](../de/README.md) | [Russian](../ru/README.md) | [Arabic](../ar/README.md) | [Persian (Farsi)](../fa/README.md) | [Urdu](../ur/README.md) | [Chinese (Simplified)](../zh/README.md) | [Chinese (Traditional, Macau)](../mo/README.md) | [Chinese (Traditional, Hong Kong)](../hk/README.md) | [Chinese (Traditional, Taiwan)](../tw/README.md) | [Japanese](../ja/README.md) | [Korean](../ko/README.md) | [Hindi](../hi/README.md) | [Bengali](../bn/README.md) | [Marathi](../mr/README.md) | [Nepali](../ne/README.md) | [Punjabi (Gurmukhi)](../pa/README.md) | [Portuguese (Portugal)](../pt/README.md) | [Portuguese (Brazil)](../br/README.md) | [Italian](../it/README.md) | [Polish](../pl/README.md) | [Turkish](../tr/README.md) | [Greek](../el/README.md) | [Thai](../th/README.md) | [Swedish](../sv/README.md) | [Danish](../da/README.md) | [Norwegian](../no/README.md) | [Finnish](../fi/README.md) | [Dutch](../nl/README.md) | [Hebrew](../he/README.md) | [Vietnamese](./README.md) | [Indonesian](../id/README.md) | [Malay](../ms/README.md) | [Tagalog (Filipino)](../tl/README.md) | [Swahili](../sw/README.md) | [Hungarian](../hu/README.md) | [Czech](../cs/README.md) | [Slovak](../sk/README.md) | [Romanian](../ro/README.md) | [Bulgarian](../bg/README.md) | [Serbian (Cyrillic)](../sr/README.md) | [Croatian](../hr/README.md) | [Slovenian](../sl/README.md) | [Ukrainian](../uk/README.md) | [Burmese (Myanmar)](../my/README.md) 
    
     ```

1. Dọn dẹp các bản dịch hiện có (nếu cần):
   - Xóa các thư mục dịch hiện có (ví dụ `translations/`)
   - Xóa các file dịch cũ để bắt đầu mới
   - Điều này giúp tránh xung đột với quy trình dịch mới

### Bắt đầu nhanh: Dòng lệnh

Để khởi động nhanh qua dòng lệnh:

1. Tạo môi trường ảo:

    ```bash
    python -m venv .venv
    ```

1. Kích hoạt môi trường ảo:

    - Trên Windows:

    ```bash
    .venv\scripts\activate
    ```

    - Trên Linux/macOS:

    ```bash
    source .venv/bin/activate
    ```

1. Cài đặt gói:

    ```bash
    pip install co-op-translator
    ```

1. Cấu hình thông tin đăng nhập:

    - Tạo file `.env` file in your project's root directory.
    - Copy the contents from the [.env.template](../../.env.template) file into your new `.env` file.
    - Fill in the required API keys and endpoint information in your `.env` file.

1. Run Translation:
    - Navigate to your project's root directory in your terminal.
    - Execute the translate command, specifying target languages with the `-l` với cờ:

    ```bash
    translate -l "ko ja fr"
    ```

    _(Thay thế `"ko ja fr"` with your desired space-separated language codes)_

### Detailed Usage Guides

Choose the approach that best fits your workflow:

#### 1. Using the Command Line (CLI)

- Best for: One-time translations, manual control, or integration into custom scripts.
- Requires: Local installation of Python and the `co-op-translator` package.
- Guide: [Command Line Guide](./getting_started/command-line-guide/command-line-guide.md)

#### 2. Using GitHub Actions (Automation)

- Best for: Automatically translating content whenever changes are pushed to your repository. Keeps translations consistently up-to-date.
- Requires: Setting up a workflow file (`.github/workflows`) trong kho lưu trữ của bạn. Không cần cài đặt cục bộ.
- Hướng dẫn:
  - [GitHub Actions Guide (Public Repositories & Standard Secrets)](./getting_started/github-actions-guide/github-actions-guide-public.md) - Dùng cho hầu hết kho công khai hoặc cá nhân dựa trên secrets tiêu chuẩn.
  - [GitHub Actions Guide (Microsoft Organization Repos & Org-Level Setups)](./getting_started/github-actions-guide/github-actions-guide-org.md) - Dùng nếu bạn làm việc trong tổ chức Microsoft GitHub hoặc cần dùng secrets/cơ sở hạ tầng ở cấp tổ chức.

