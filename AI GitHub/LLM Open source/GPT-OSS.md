# Model gpt-oss-120b & gpt-oss-20b

Link paper: https://arxiv.org/html/2508.10925v1

## Kiến trúc mô hình, dữ liệu, đào tạo và đánh giá
Các mô hình gpt-oss là các bộ chuyển đổi hỗn hợp chuyên gia (MoE) tự hồi quy [1,2,3,4] được xây dựng dựa trên kiến ​​trúc GPT-2 và GPT-3. 
Chúng tôi đang phát hành hai kích thước mô hình: gpt-oss-120b, bao gồm 36 lớp (tổng cộng 116,8 tỷ tham số và 5,1 tỷ tham số "hoạt động" cho mỗi mã thông báo mỗi lần chuyển tiếp), và gpt-oss-20b với 24 lớp (tổng cộng 20,9 tỷ tham số và 3,6 tỷ tham số hoạt động). 

Bảng 1 hiển thị chi tiết đầy đủ về số lượng tham số.
<img width="386" height="256" alt="image" src="https://github.com/user-attachments/assets/e0395f78-9b1c-4659-84fe-cb1a93b9745c" />

## Đào tạo sau đào tạo về lý luận và sử dụng công cụ
<img width="847" height="281" alt="image" src="https://github.com/user-attachments/assets/1bfbc6e4-d900-49cc-98ea-18025887865e" />
<img width="648" height="299" alt="image" src="https://github.com/user-attachments/assets/8cc0bfa9-398e-4cd1-8993-0f60ced0f596" />

---
## Hướng dẫn sử dụng Ollama để tải GPT-OSS trên localhost: 
https://chatgpt.com/share/e/68b1315f-8320-8001-b91f-cdd59cb8ed83

### 0) Yêu cầu phần cứng

* Ưu tiên **VRAM ≥ 16GB** (MXFP4 quan trọng nhưng 20B vẫn nặng). Có thể offload sang RAM/CPU nhưng sẽ chậm. ([Cookbook][1])
* Bản **gpt-oss:20b** trên Ollama \~**14GB**, MoE + **quantization MXFP4**; Ollama hỗ trợ MXFP4 native. ([Ollama][2])
* Quy tắc thực dụng: model size × \~1.2 ≈ VRAM khuyến nghị (để tránh spill ra RAM). ([Windows Central][3])

---

### 1) Cài Ollama

* Tải bản mới nhất cho macOS/Windows/Linux. ([Ollama][2])

```bash
# macOS (brew)
brew install ollama

# Linux (script chính thức)
curl -fsSL https://ollama.com/install.sh | sh

# Windows: tải installer từ trang Download
```

---

### 2) Kéo & chạy gpt-oss:20b

Chỉ cần 2 lệnh, done.

```bash
# Kéo model
ollama pull gpt-oss:20b

# Chạy chat trong terminal
ollama run gpt-oss:20b
```

> Bản thư viện chính thức của Ollama đã publish model này; đừng xài GGUF lạ lúc này (nhiều case lỗi load). ([Ollama][2], [Hugging Face][4], [GitHub][5])

---

### 3) Dùng API local (tương thích Chat Completions)

Ollama mở **HTTP API** tại `http://localhost:11434/v1`. Dùng luôn OpenAI SDK: chỉ đổi `base_url` + fake key. ([Cookbook][1])

**Python**

```python
from openai import OpenAI
client = OpenAI(base_url="http://localhost:11434/v1", api_key="ollama")
resp = client.chat.completions.create(
    model="gpt-oss:20b",
    messages=[
        {"role":"system","content":"You are a helpful AI engineer."},
        {"role":"user","content":"Explain MXFP4 quantization in 3 bullets."}
    ]
)
print(resp.choices[0].message.content)
```

**curl**

```bash
curl http://localhost:11434/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model":"gpt-oss:20b",
    "messages":[{"role":"user","content":"hello"}],
    "stream":false
  }'
```

---

### 4) Tool calling / function calling (native)

Ollama + gpt-oss hỗ trợ function calling; trong app còn có **browser tool** tùy chọn. Mẫu Python (rút gọn): ([Cookbook][1])

```python
tools=[{
 "type":"function",
 "function":{"name":"get_weather","description":"Get weather","parameters":{"type":"object","properties":{"city":{"type":"string"}},"required":["city"]}}
}]
resp = client.chat.completions.create(
  model="gpt-oss:20b",
  messages=[{"role":"user","content":"Weather in Tokyo?"}],
  tools=tools
)
print(resp.choices[0].message)
```

> Lưu ý: mô hình có thể “suy luận công cụ” trong chain-of-thought; bạn cần **feed lại reasoning/tool call** ở vòng kế tiếp để đi đến final answer. ([Cookbook][1])

---

### 5) Tuỳ chỉnh hành vi (nhiệt độ, system prompt, template)

* Ollama đã gắn sẵn **chat template “harmony-like”**; bạn cứ set `system`/`temperature` trong API là đủ. ([Cookbook][1])
* Model card + thông số MXFP4/param ở trang library. ([Ollama][2])

---

### 6) Kết nối Agents SDK (khi build agent nội bộ)

Bạn có thể trỏ **Agents SDK** sang Ollama thông qua LiteLLM (Python) hoặc AI SDK adapter (TS). ([Cookbook][1])

---

### 7) Troubleshooting kiểu “không drama”

* **Lỗi load GGUF của bên thứ ba** (unsloth/bartowski…) trong Ollama: hiện tại **không ổn định**, khuyến nghị xài **bản official `gpt-oss:20b` từ Ollama library** cho đến khi họ update. ([Hugging Face][4])
* **Thiếu VRAM** → giảm context, bật CPU offload, hoặc nâng GPU (ưu tiên VRAM cao thay vì chỉ TFLOPS). ([Windows Central][3])
* **Phiên bản Ollama cũ** → update; MXFP4 yêu cầu engine mới. ([Ollama][2])

---

### 8) Nguồn tài liệu tham khảo

* **Ollama Library – gpt-oss:20b** (kích thước \~14GB, MXFP4, lệnh `ollama run/pull`) ([Ollama][2])
* **OpenAI Cookbook – Run gpt-oss với Ollama** (end-to-end: install, API, tools, Agents) ([Cookbook][1])
* **OpenAI model page** (mô tả gpt-oss-20b: open-weight, dùng local/specialized) ([platform.openai.com][6])

* file **.http** cho VS Code REST Client,
* mẫu **docker-compose** map cổng 11434,
* và **Modelfile** custom system/prompt/parameters cho gpt-oss:20b (dev & prod).
  
[1]: https://cookbook.openai.com/articles/gpt-oss/run-locally-ollama "How to run gpt-oss locally with Ollama"
[2]: https://ollama.com/library/gpt-oss%3A20b "gpt-oss:20b"
[3]: https://www.windowscentral.com/artificial-intelligence/just-what-sort-of-gpu-do-you-need-to-run-local-ai-with-ollama-the-answer-isnt-as-expensive-as-you-might-think?utm_source=chatgpt.com "Just what sort of GPU do you need to run local AI with Ollama? - The answer isn't as expensive as you might think"
[4]: https://huggingface.co/unsloth/gpt-oss-20b-GGUF/discussions/17?utm_source=chatgpt.com "unsloth/gpt-oss-20b-GGUF · ollama load error - Hugging Face"
[5]: https://github.com/ollama/ollama/issues/11714?utm_source=chatgpt.com "gpt-oss 20b gguf model fail to run · Issue #11714 · ollama/ollama"
[6]: https://platform.openai.com/docs/models/gpt-oss-20b?utm_source=chatgpt.com "Model - OpenAI API"
