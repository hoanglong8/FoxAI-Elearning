# KỸ NĂNG TẠO SLIDE BẰNG CÁC CÔNG CỤ AI CHUYÊN NGHIỆP
## MỤC LỤC

* Quy trình 5 bước để tạo slide với **Slide/Poster Agent** (mô tả một câu → agent tự tìm & cấu trúc nội dung → sinh slide → bạn yêu cầu chỉnh → **xuất PDF**; **PPTX sẽ sớm hỗ trợ**). ([docs.z.ai][1])
* Bộ **prompt mẫu** cho 5 tình huống (giới thiệu sản phẩm, báo cáo thị trường, báo cáo tiến độ, đào tạo nội bộ, deck demo).
* **Checklist chất lượng** (nội dung, thiết kế, thương hiệu) + khuyến nghị màu FOXAI.
* **Mẹo tối ưu** (tách nhiệm vụ theo tầng, bắt agent gắn nguồn, giới hạn độ dài dòng/slide…).
* Phần **nâng cao (PO/Dev)**: gọi **GLM-4.6** bằng Chat Completions, dùng **Web Search API** để lấy nguồn đáng tin, gợi ý pipeline tác vụ agent. ([docs.z.ai][2])

---
## Mục tiêu

Giúp mọi nhân viên FOXAI tạo slide/presentation nhanh chóng, đẹp mắt, đủ thông tin và nhất quán thương hiệu bằng Chat.Z.AI – đặc biệt là **GLM‑4.6** và **Slide/Poster Agent**. Tài liệu gồm: quy trình 5 bước, bộ prompt mẫu, checklist chất lượng, mẹo thiết kế, và hướng dẫn nâng cao (API/Agent).

### 1) Giới thiệu về công cụ Chat.Z.AI với Model GLM

* **Chat.Z.AI**: Nền tảng AI của Zhipu AI, hỗ trợ chat, agent, tìm kiếm web, tạo slide/poster tự động.
* **GLM‑4.6**: Mô hình mới (200K context), mạnh về reasoning, coding và **agent**; phù hợp tạo nội dung dài, đa phần đoạn/văn bản, dàn ý chi tiết, và soạn nội dung slide.
* **Slide/Poster Agent** (beta): Agent chuyên tạo slide/poster từ 1 câu mô tả; tự tìm thông tin (web), tóm tắt, cấu trúc nội dung và dàn bố cục/visual cơ bản; xuất **PDF** (PPTX sẽ sớm hỗ trợ). Chi phí tính theo tokens của toàn flow.

* **GLM-4.6** là bản mới của dòng GLM, tăng mạnh ở reasoning/coding/agent, **context 200K**, hỗ trợ công việc dài hơi (soạn dàn ý chi tiết, tài liệu dài, phối hợp công cụ/tìm kiếm). ([docs.z.ai][2])
* Gói **GLM Coding Plan** có sẵn tích hợp trong nhiều coding agent và được quảng bá “từ **$3/tháng**” (thông tin từ trang docs/blog của Z.ai). ([docs.z.ai][2])
* **Slide/Poster Agent (beta)**: nhận mô tả 1 câu → tự **tìm kiếm web, gom & cấu trúc nội dung, dựng bố cục** slide/poster; hiện **xuất PDF**, **PPTX & in-browser editing** ghi chú “coming soon”; **giá: $0.7 mỗi 1M tokens** tính trên toàn flow của agent. ([docs.z.ai][1])
* Nếu muốn tự động hoá trong quy trình nội bộ, có **Tool API – Web Search** để tìm nội dung (lọc domain/độ mới) và **Agent API** để xây pipeline riêng. ([docs.z.ai][3])
* Bạn cũng có thể **chat trực tiếp với GLM-4.6** trong giao diện Z.ai (chọn model GLM-4.6) nếu không cần API. ([z.ai][4])
---

### 2) Quy trình 5 bước – Tạo slide trong 10 phút

**Bước 1 – Xác định brief (1 câu):**

> "Tạo deck 12–15 trang về *[chủ đề]* cho *[đối tượng]*, mục tiêu *[kết quả]*. Ngôn ngữ: *[vi/eng]*."

**Bước 2 – Gõ prompt cho Slide/Poster Agent:**

* Mẫu (dán thẳng):

  ```
  Chủ đề: …
  Đối tượng: … (ban giám đốc / khách hàng / nội bộ)
  Mục tiêu: … (thuyết phục, cập nhật, đào tạo)
  Phạm vi & nguồn: ưu tiên số liệu 24 tháng gần nhất, kèm link nguồn ở cuối slide.
  Giọng điệu: rõ ràng, súc tích, chuyên nghiệp.
  Độ dài: 12–15 trang; tỉ lệ text/visual cân bằng.
  Thương hiệu: dùng gam màu FOXAI (Xanh #0D6EFD, Đen #111827, Ghi #6B7280, Trắng #FFFFFF), font gợi ý Inter/Roboto.
  Các phần bắt buộc: Cover, Agenda, Tóm tắt điều hành (1 trang), Bối cảnh, Vấn đề, Giải pháp, Lợi ích/ROI, Case study, Lộ trình/Timeline, Kêu gọi hành động.
  ```

**Bước 3 – Kiểm duyệt & lặp:**

* Yêu cầu Agent **giải thích nguồn** cho số liệu chính; thêm trang “Nguồn tham khảo”.
* Nhắc Agent: “giảm text, tăng bullet/visual”, “thêm biểu đồ cột/timeline”, “mẫu câu ngắn, dưới 14 từ/dòng”.

**Bước 4 – Điều chỉnh brand & bố cục:**

* Nhắc Agent “áp dụng palette FOXAI” và “tránh nhiều màu trên 1 trang (>3)”.
* Ưu tiên: tiêu đề 24–28pt, body 14–18pt; khoảng trắng rộng; hình minh hoạ nhất quán.

**Bước 5 – Xuất bản:**

* Xuất **PDF** (dùng ngay). Nếu cần **PPTX** để chỉnh sâu, dùng export khi khả dụng hoặc nhập PDF vào PowerPoint/Google Slides để tinh chỉnh nhanh.

---

### 3) Bộ prompt mẫu (copy & dùng)

**A. Deck giới thiệu sản phẩm (12–15 trang)**

```
Tạo deck 12–15 trang giới thiệu sản phẩm FOXAI Native cho khách hàng doanh nghiệp (vai trò CIO/CTO/CFO). Mục tiêu: hiểu giá trị & đăng ký demo.
Yêu cầu: có 1 trang executive summary; so sánh trước/sau; ROI định lượng (giả định hợp lý + nêu rõ giả định); lộ trình triển khai 8 tuần; 2 case study ngắn; CTA rõ ràng.
Brand: màu FOXAI, font Inter/Roboto, bố cục hiện đại. Ngôn ngữ: Tiếng Việt. Thêm trang nguồn tham khảo (link).
```

**B. Báo cáo thị trường (15–20 trang)**

```
Tạo báo cáo thị trường GenAI tại Việt Nam 2023–2025, cho Ban lãnh đạo.
Yêu cầu: timeline sự kiện chính; phân khúc người chơi; ma trận cạnh tranh; xu hướng 12 tháng tới; rủi ro/pháp lý; khuyến nghị chiến lược.
Chèn biểu đồ cột/đường khi phù hợp; kèm link nguồn mỗi số liệu.
```

**C. Báo cáo tiến độ dự án (8–10 trang)**

```
Tạo deck cập nhật tiến độ dự án A (Sprint n). Bao gồm: mục tiêu sprint, KPI, tiến độ %/burn‑down, blocker & phương án, rủi ro, quyết định cần phê duyệt.
Giọng văn ngắn gọn, bullet‑point, có 1 slide Tóm tắt cho lãnh đạo.
```

**D. Đào tạo nội bộ (10–12 trang)**

```
Tạo slide đào tạo “Prompt Engineering cơ bản cho nhân viên non‑tech”. Mỗi khái niệm có ví dụ 1‑2 câu.
Tạo 1 trang “Cheat‑sheet 10 mẹo” ở cuối.
```

**E. Demo thuyết phục (6–8 trang)**

```
Tạo mini‑deck demo AI Agent tạo slide. Nhấn mạnh: tốc độ, độ chính xác nguồn, tiết kiệm chi phí & thời gian, ví dụ thực tế.
```

---

### 4) Checklist chất lượng trước khi gửi

**Nội dung**

* [ ] Có trang Executive Summary (1 trang, 3–5 gạch đầu dòng)
* [ ] Mỗi số liệu có **link nguồn** (trang cuối hoặc footnote ngắn)
* [ ] Mỗi slide ≤ 6 bullet; mỗi bullet ≤ 14 từ
* [ ] Dùng động từ mạnh; tránh bị động

**Thiết kế**

* [ ] 1–2 font tối đa; cỡ chữ nhất quán (Title 24–28pt, Body 14–18pt)
* [ ] 2–3 màu chủ đạo; đủ tương phản (WCAG AA ~ tỷ lệ ≥ 4.5:1)
* [ ] Lề và khoảng trắng thoáng; không dàn kín 4 cạnh
* [ ] Biểu đồ có tiêu đề, đơn vị, nguồn

**Thương hiệu**

* [ ] Màu FOXAI: Xanh #0D6EFD, Đen #111827, Ghi #6B7280, Trắng #FFFFFF
* [ ] Tone: chuyên nghiệp, tích cực, cụ thể
* [ ] Logo không biến dạng; khoảng đệm ≥ chiều cao logo x0.5

---

### 5) Mẹo tăng “đẹp & đầy đủ”

* **Giao nhiệm vụ tầng‑bậc**: (1) Xin outline, (2) duyệt outline, (3) yêu cầu soạn nội dung từng mục, (4) yêu cầu thêm visual/biểu đồ.
* **Bắt Agent "gắn nguồn"**: “Với mỗi số liệu, thêm link nguồn dạng [Tên, Năm].”
* **Giới hạn độ dài**: “Tối đa 40 từ/slide; nếu dài hơn tách thành 2 slide.”
* **Bảo toàn thương hiệu**: “Tuân thủ palette & khoảng trắng; tránh quá 3 màu/slide.”
* **Tạo hình minh họa**: Có thể yêu cầu gợi ý ảnh miễn phí (Unsplash/Pexels) hoặc icon; Agent sẽ gợi ý, sau đó bạn chèn tay để kiểm soát bản quyền.

---

### 6) Nâng cao – Dùng API/Agent (cho PO/Dev)

**A. Gọi GLM‑4.6 (chat completions)**

```bash
curl -X POST "https://api.z.ai/api/paas/v4/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $ZAI_API_KEY" \
  -d '{
    "model": "glm-4.6",
    "messages": [
      {"role": "system", "content": "Bạn là trợ lý tạo slide tuân thủ brand FOXAI."},
      {"role": "user", "content": "Tạo dàn ý 12–15 trang cho deck giới thiệu FOXAI Native."}
    ],
    "thinking": {"type": "enabled"},
    "temperature": 0.6,
    "max_tokens": 4096
  }'
```

**B. Web Search API (lấy nguồn đáng tin)**

```bash
curl -X POST https://api.z.ai/api/paas/v4/web_search \
  -H "Authorization: Bearer $ZAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "search_engine": "search-prime",
    "search_query": "GenAI Vietnam market size 2024 site:gov.vn OR site:reuters.com",
    "count": 10,
    "search_recency_filter": "oneYear"
  }'
```

**C. Agent API (kịch bản Slide/Poster hoặc pipeline riêng)**

* Thiết kế pipeline: *web_search → tổng hợp → soạn outline → soạn nội dung → tạo bullet/visual → kiểm nguồn → sinh PDF*.
* Với Slide/Poster Agent (beta), hiện dùng giao diện web là nhanh nhất. Nếu tự xây, gom các bước trên bằng Agent API, lưu **id** và dùng **Retrieve Result** để lấy kết quả.

**D. Tích hợp trong quy trình nội bộ**

* Kết hợp Git/Drive: commit phiên bản deck (PDF) + file prompt sử dụng.
* Thêm stage QA: 1 người soát nguồn + 1 người soát brand trước khi gửi khách hàng.

---

### 7) Câu hỏi thường gặp (FAQ)

**1. Export định dạng nào?** Đã hỗ trợ xuất ra **PDF** và **PPTX**. Có link để trình chiếu trực tiếp.

**2. Chi phí dùng Slide/Poster Agent?** Tính **$0.7 mỗi 1M tokens** của toàn bộ pipeline (tìm kiếm + sinh nội dung + dàn trang). Với deck 12–15 trang thường < vài chục nghìn tokens.

**3. GLM‑4.6 khác gì các bản trước?** Context 200K, reasoning/agent tốt hơn; tối ưu tạo nội dung dài, làm việc với tool/search; coding thực chiến tốt hơn.

**4. Làm sao đảm bảo “đủ ý và đúng”?** Bắt buộc gắn link nguồn; ưu tiên nguồn chính thống; yêu cầu Agent tóm tắt nguồn ở phần “Nguồn tham khảo”.

**5. Có thể dùng hoàn toàn tiếng Việt?** Được. Nhắc cấu hình tiếng Việt và thuật ngữ Việt hoá nhất quán.

---

### 8) Phụ lục

**A. Khung Outline chuẩn cho deck giải pháp**

1. Cover  2) Agenda  3) Tóm tắt điều hành  4) Bối cảnh  5) Vấn đề  6) Giải pháp  7) Kiến trúc/Flow  8) Lợi ích/ROI  9) Case study  10) Triển khai/TL;  11) Pricing (nếu có)  12) FAQ  13) CTA.

**B. Quy ước style**

* Title: 24–28pt; H2: 18–22pt; Body: 14–18pt.
* Dòng ≤ 14 từ; slide ≤ 6 bullet.
* Palette: Xanh #0D6EFD; Đen #111827; Ghi #6B7280; Trắng #FFFFFF.

**C. Bộ câu nhắc (micro‑prompts) hữu ích**

* “Rút gọn slide này xuống 4 bullet, mỗi bullet ≤ 12 từ.”
* “Thêm 1 biểu đồ cột so sánh trước/sau, gợi ý tiêu đề và nhãn trục.”
* “Viết lại theo tone business, tránh buzzword.”
* “Thêm dòng footnote: Nguồn: [Tên, năm], link ở cuối deck.”

> **Gợi ý:** Lưu lại prompt dùng thành **template FOXAI** để tái sử dụng theo từng loại tài liệu (giới thiệu SP, báo cáo thị trường, cập nhật sprint…).

---
### 9) Tài liệu tham khảo
* Trang hướng dẫn **GLM Slide/Poster Agent (beta)**: tính năng, quy trình, export & giá. ([docs.z.ai][1])
* Trang **GLM-4.6** trên tài liệu nhà phát triển: context 200K, các nâng cấp & ví dụ gọi API. ([docs.z.ai][2])
* Bài blog công bố **GLM-4.6** (2025-09-30): tổng quan cải tiến, khả năng sử dụng trong chat/coding agents, truy cập model. ([z.ai][4])
* **Web Search API** – cách để agent tìm & trích xuất kết quả web có metadata (tiêu đề, tóm tắt, link, ngày đăng). ([docs.z.ai][3])
* **Agent API** – khung gọi agent/pipeline (tham khảo khi muốn tự xây flow tạo slide). ([docs.z.ai][5])

> Ghi chú: Thông tin “PPTX/biên tập trong trình duyệt sắp có” và **$0.7/1M tokens** đều lấy từ trang tài liệu Slide/Poster Agent tại thời điểm hôm nay (08/10/2025, Asia/Bangkok). Nếu có thay đổi từ phía Z.ai, bạn chỉ cần nhắc mình để cập nhật. ([docs.z.ai][1])

[1]: https://docs.z.ai/guides/agents/slide "GLM Slide/Poster Agent(beta) - Z.AI DEVELOPER DOCUMENT"
[2]: https://docs.z.ai/guides/llm/glm-4.6 "GLM-4.6 - Z.AI DEVELOPER DOCUMENT"
[3]: https://docs.z.ai/api-reference/tools/web-search "Web Search - Z.AI DEVELOPER DOCUMENT"
[4]: https://z.ai/blog/glm-4.6 "GLM-4.6: Advanced Agentic, Reasoning and Coding Capabilities"
[5]: https://docs.z.ai/api-reference/agents/agent "Agent Chat - Z.AI DEVELOPER DOCUMENT"

---
# PHẦN 2 - THỰC HÀNH

## Bước 1 - Sử dụng ChatGPT để tạo outline slide

```prompt
Bạn là một chuyên gia thiết kế đào tạo nội bộ của FOXAI, có nhiệm vụ giúp Product Owner tạo outline chi tiết cho bộ slide đào tạo với chủ đề: “Kỹ năng sử dụng Chat.Z.AI để tạo slide nhanh chóng”.

Yêu cầu đầu ra:

1. **Cấu trúc tổng thể:**
   - 1 slide mở đầu (giới thiệu & mục tiêu)
   - 3–5 slide nội dung chính (theo logic học tập: Nhận thức → Thực hành → Ứng dụng)
   - 1 slide tổng kết / lời kêu gọi hành động
   - 1 slide template tham chiếu để PO chỉnh sửa khi cần

2. **Cấu trúc cho từng slide (bắt buộc):**
   - **Title**: ngắn gọn, thu hút, ≤ 12 từ
   - **Nội dung chính (bullet)**: 3–5 ý quan trọng, mỗi ý ≤ 15 từ
   - **Hình ảnh minh họa (gợi ý)**: mô tả nội dung hình minh họa phù hợp (không tạo ảnh)
   - **Lời dẫn/ghi chú của giảng viên**: hướng dẫn cách nói, nhấn mạnh, hoặc ví dụ thực tế
   - **Câu chuyển tiếp sang slide kế tiếp**: 1 câu logic, tự nhiên, gắn mạch nội dung

3. **Yêu cầu thẩm mỹ & thương hiệu:**
   - Template thống nhất: khung bố cục gồm *Title – Content – Visual – Note – Transition*
   - Gợi ý khu vực đặt *brand color palette* và *logo đối tác* (nếu có)
   - Phong cách: chuyên nghiệp, năng động, trực quan, thân thiện với nhân viên văn phòng

4. **Đầu ra mong muốn:**
   - Dạng bảng (markdown table hoặc JSON) gồm các cột:
     `Slide # | Title | Nội dung chính | Hình ảnh minh họa | Lời dẫn ghi chú | Câu chuyển tiếp`
   - Cuối cùng, thêm phần: **“Gợi ý thiết kế Template chung”** mô tả:
     - Bố cục
     - Bảng màu (primary/secondary)
     - Font đề xuất
     - Kiểu biểu tượng minh họa (icon/photo/vector)
     - Gợi ý sử dụng trong Chat.Z.AI (prompt mẫu sinh slide)

Ngữ cảnh:
- Đối tượng học: nhân viên FOXAI (không chuyên kỹ thuật)
- Thời lượng buổi đào tạo: 45–60 phút
- Ngôn ngữ: Tiếng Việt
- Giọng điệu: Tự tin, truyền cảm hứng, dễ áp dụng

Mục tiêu cuối cùng: PO có thể lấy ngay output này để gửi cho designer/Chat.Z.AI tạo bộ slide hoàn chỉnh.
```

