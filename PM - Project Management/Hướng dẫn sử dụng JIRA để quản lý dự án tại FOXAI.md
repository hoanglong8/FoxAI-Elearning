## Thông tin đăng nhập

Truy cập: http://fox.ai.vn:8080/

Username: Chính là user trên email (ví dụ: `longnh`, `thangln`...)

Mật khẩu: `P@ssword123`

<img width="1919" height="748" alt="image" src="https://github.com/user-attachments/assets/992ab0e8-04e9-4163-9965-6f605c0525d0" />

---

# 📘 Hướng Dẫn Sử Dụng JIRA cho PM – Ví dụ `Dự Án FOXAI Native cho ngân hàng SHB`

## 📌 1. Mục tiêu tài liệu

Cung cấp hướng dẫn thực tiễn giúp PM quản lý dự án Agile/Scrum trên JIRA một cách chuẩn hóa và hiệu quả:

* Cách đặt tên và cấu hình project, issue
* Cách tạo/giao việc cho dev/QA/BA
* Cách theo dõi tiến độ, xem báo cáo
* Mẫu cấu trúc backlog, quy ước đặt tên, gán label

---

## 🏗️ 2. Thiết lập Project

### 🎯 2.1 Quy ước đặt tên

* **Project Name**: `SHB Chatbot Native`
* **Project Key**: `SHBNB` (viết hoa, 2–6 ký tự)
* **Board Type**: Scrum (vì sử dụng sprint)

### 🧩 2.2 Cấu trúc Issue

| Epic                              | Story                                        | Task/Sub-task                                                        |
| --------------------------------- | -------------------------------------------- | -------------------------------------------------------------------- |
| `[EPIC] Đăng nhập — OTP + FaceID` | `US: As a user, I want to login with FaceID` | `TASK: Thiết kế API đăng nhập`<br>`ST: AuthService — Validate token` |

---

## 🧾 3. Quy chuẩn đặt tên và cấu hình

### 🔖 Naming Convention

| Loại Issue | Mẫu Summary                                            |
| ---------- | ------------------------------------------------------ |
| Epic       | `[EPIC] Module — Outcome`                              |
| Story      | `US: As a <role>, I want <feature>, so that <benefit>` |
| Task       | `TASK: Verb Object — Qualifier`                        |
| Sub-task   | `ST: Component — Action`                               |
| Bug        | `[BUG] Symptom @Env — Component`                       |

### 🏷️ Labels & Components

* **Labels**: `kebab-case`, ví dụ: `auth-service`, `nlp-engine`
* **Components**: PascalCase, ví dụ: `AuthService`, `ConversationEngine`

### 🧮 Ước lượng

* **Story Point**: Fibonacci (1, 2, 3, 5, 8,…)
* **Priority**: P1 (Critical) → P4 (Low)

---

## 📋 4. Mẫu Giao Việc (Story + Sub-task)

### 🧾 Mô tả Story (Markdown + Gherkin)

````md
**Mục tiêu:** Cho phép user đăng nhập qua FaceID để tăng trải nghiệm không cần gõ OTP

### Acceptance Criteria
```gherkin
Feature: FaceID Login
  Scenario: Đăng nhập bằng khuôn mặt
    Given thiết bị có đăng ký FaceID
    When user mở app và quét FaceID
    Then hệ thống xác thực và tự động đăng nhập
````

* DoR: Có wireframe, có API, không blocker
* DoD: Code xong, review, test pass, tài liệu, deploy staging

**Assignee**: Dev A
**Reporter**: PM
**Fix Version**: `1.0.0`
**Labels**: `auth-service`, `faceid-login`
**Components**: `AuthService`

````

---

## 🔄 5. Cách Quản Lý Sprint

### 📆 Sprint Plan (2 tuần)
- Sprint Goal: `Enable FaceID login + NLP integration`
- Capacity: 80 SPs (team 5 người x 8 ngày x 2 SP/ngày)
- Buffer: 20% dành cho support, meeting

---

## 📊 6. Báo cáo thường dùng

| Mục đích | JQL mẫu | Báo cáo |
|----------|---------|---------|
| Backlog | `project=SHBNB AND sprint is EMPTY AND status in ("To Do")` | Product backlog |
| Story trong Epic | `"Epic Link"=SHBNB-12` | Cấu trúc feature |
| Bug P1 trong sprint | `project=SHBNB AND issuetype=Bug AND priority=Highest AND sprint in openSprints()` | Kiểm soát chất lượng |
| Burndown | N/A | Biểu đồ tự động trong board |

---

## 🧰 7. Tạo Issue bằng API

```json
// Ví dụ payload tạo Story
{
  "fields": {
    "project": { "key": "SHBNB" },
    "issuetype": { "name": "Story" },
    "summary": "US: As a user, I want to login with FaceID",
    "description": "<Markdown+Gherkin>",
    "labels": ["auth-service", "faceid-login"],
    "components": [{ "name": "AuthService" }],
    "priority": { "name": "Medium" },
    "<customfield_storyPoints>": 5,
    "<customfield_epicLink>": "SHBNB-10",
    "assignee": { "accountId": "<Dev A ID>" },
    "reporter": { "accountId": "<PM ID>" }
  }
}
````

---

## ⚠️ 8. Rủi ro & Biện pháp

| Rủi ro               | Mức độ     | Biện pháp                           |
| -------------------- | ---------- | ----------------------------------- |
| NLP lỗi tiếng Việt   | Cao        | Kiểm thử ngữ cảnh + fallback intent |
| FaceID không ổn định | Trung bình | Cho phép fallback OTP               |

---

## 📣 9. Truyền thông & Phê duyệt

* Kênh: Slack `#shb-chatbot`, Email `dự án@shb.com.vn`
* Thời gian cập nhật: Daily 9h sáng
* Người phê duyệt: SHB PM + Product Owner

---

## 🧾 10. Phiên bản rút gọn

| Thông tin   | Giá trị                                  |
| ----------- | ---------------------------------------- |
| Project Key | `SHBNB`                                  |
| Naming      | Epic `[EPIC]`; Story `US:`; Task `TASK:` |
| Estimation  | Story Point (1–13), P1–P4                |
| Sprint      | 2 tuần                                   |
| Báo cáo     | Burndown, Velocity, Bugs P1              |

---


