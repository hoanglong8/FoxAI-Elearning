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

```
**Mục tiêu:** Cho phép user đăng nhập qua FaceID để tăng trải nghiệm không cần gõ OTP

### Acceptance Criteria

gherkin
Feature: FaceID Login
  Scenario: Đăng nhập bằng khuôn mặt
    Given thiết bị có đăng ký FaceID
    When user mở app và quét FaceID
    Then hệ thống xác thực và tự động đăng nhập

* DoR: Có wireframe, có API, không blocker
* DoD: Code xong, review, test pass, tài liệu, deploy staging

**Assignee**: Dev A

**Reporter**: PM

**Fix Version**: `1.0.0`

**Labels**: `auth-service`, `faceid-login`

**Components**: `AuthService`

```

---

## 🔄 5. Cách Quản Lý Sprint

### 📆 Sprint Plan (2 tuần)
- Sprint Goal: `Enable FaceID login + NLP integration`
- Capacity: 80 SPs (team 5 người x 8 ngày x 2 SP/ngày)
- Buffer: 20% dành cho support, meeting

**Bảng mapping giữa `Issue Type` và quy tắc đặt tên/`summary`**, áp dụng chuẩn FOXAI cho dự án `SHBNB` — giúp team viết backlog trên JIRA nhất quán, dễ quản lý và lọc báo cáo.

## 🧩 BẢNG QUY ƯỚC ĐẶT TÊN ISSUE (ISSUE NAMING CONVENTION)

| Issue Type     | Prefix & Format                       | Ví dụ thực tế                                | Ghi chú áp dụng                                    |
| -------------- | ------------------------------------- | -------------------------------------------- | -------------------------------------------------- |
| **Initiative** | `[INITIATIVE] Theme — Strategic Goal` | `[INITIATIVE] Tăng trưởng user — App SHB`    | Dùng trong Advanced Roadmaps (Portfolio hierarchy) |
| **Epic**       | `[EPIC] Module — Outcome`             | `[EPIC] Đăng nhập — OTP + FaceID`            | Gắn `Epic Name` để liên kết story                  |
| **Story**      | `US: As a <role>, I want <feature>`   | `US: As a user, I want to login with FaceID` | Luôn viết theo định dạng role-driven (Persona)     |
| **Task**       | `TASK: Verb Object — Qualifier`       | `TASK: Thiết kế API login — OAuth2`          | Task độc lập hoặc dưới Story                       |
| **Sub-task**   | `ST: Component — Action Description`  | `ST: AuthService — Validate FaceID token`    | Gắn dưới `Story` hoặc `Task`                       |
| **Bug**        | `[BUG] Symptom @Env — Component`      | `[BUG] Login fail @iOS 16 — AuthService`     | Đủ rõ để QA/dev biết lỗi gì & ở đâu                |
| **Test Case**  | `TEST: <What is tested> @Env`         | `TEST: Login with FaceID @iOS`               | Nếu tích hợp Zephyr/TestRail                       |
| **Spike**      | `[SPIKE] Investigate — Topic`         | `[SPIKE] Investigate NLP fallback logic`     | Nghiên cứu kỹ thuật, không cần story point         |

---

✅ **Gợi ý label** nên ở dạng `kebab-case`, ví dụ:

* `auth-service`, `chat-ui`, `nlp-engine`, `ios`, `regression`, `hotfix`

✅ **Component** nên viết dạng `PascalCase`:

* `AuthService`, `ConversationEngine`, `UserProfile`, `MobileApp`

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
Bộ mẫu JIRA JSON payload đã chuẩn hóa theo cấu trúc FOXAI, dùng để tạo Issue qua REST API cho dự án SHBNB (Chatbot Native cho SHB):

> 🔧 **Lưu ý**: thay các giá trị `<>` bằng giá trị thực tế. Nếu chưa rõ `customfield`, dùng placeholder và nhắc map với JIRA admin.

### 🟣 7.1. EPIC

```json
{
  "fields": {
    "project": { "key": "SHBNB" },
    "issuetype": { "name": "Epic" },
    "summary": "[EPIC] Đăng nhập — OTP + FaceID",
    "description": "Tập trung phát triển tính năng xác thực 2 lớp (OTP, FaceID)",
    "<customfield_epicName>": "Login with FaceID",
    "labels": ["auth-service"],
    "components": [{ "name": "AuthService" }],
    "priority": { "name": "High" },
    "fixVersions": [{ "name": "1.0.0" }]
  }
}
```

### 🟢 7.2. USER STORY

````json
{
  "fields": {
    "project": { "key": "SHBNB" },
    "issuetype": { "name": "Story" },
    "summary": "US: As a user, I want to login with FaceID, so that I don't need OTP",
    "description": "**Goal:** Đăng nhập bằng FaceID\n\n```gherkin\nFeature: FaceID login\nScenario: Login success\nGiven thiết bị đã đăng ký FaceID\nWhen mở app và quét khuôn mặt\nThen hệ thống xác thực và tự đăng nhập\n```",
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

### 🔵 7.3. TASK

```json
{
  "fields": {
    "project": { "key": "SHBNB" },
    "issuetype": { "name": "Task" },
    "summary": "TASK: Thiết kế API login — OAuth2",
    "description": "Tạo thiết kế chi tiết cho endpoint `/v1/auth/login`, có hỗ trợ OTP và FaceID",
    "labels": ["auth-service", "api-design"],
    "components": [{ "name": "AuthService" }],
    "priority": { "name": "Medium" },
    "fixVersions": [{ "name": "1.0.0" }],
    "assignee": { "accountId": "<Dev B ID>" },
    "reporter": { "accountId": "<PM ID>" }
  }
}
```

### 🟠 7.4. SUB-TASK

```json
{
  "fields": {
    "project": { "key": "SHBNB" },
    "issuetype": { "name": "Sub-task" },
    "summary": "ST: AuthService — Validate FaceID token",
    "description": "Xây dựng logic xác thực token từ Apple FaceID trong middleware",
    "labels": ["auth-service"],
    "components": [{ "name": "AuthService" }],
    "priority": { "name": "High" },
    "parent": { "key": "SHBNB-23" },
    "assignee": { "accountId": "<Dev C ID>" },
    "reporter": { "accountId": "<TechLead ID>" }
  }
}
```

#### 🔴 7.5. BUG

```json
{
  "fields": {
    "project": { "key": "SHBNB" },
    "issuetype": { "name": "Bug" },
    "summary": "[BUG] Login thất bại @iOS 16 — AuthService",
    "description": "Người dùng báo lỗi đăng nhập không phản hồi trên iOS 16. API trả lỗi 500.",
    "labels": ["auth-service", "ios-bug"],
    "components": [{ "name": "AuthService" }],
    "priority": { "name": "Highest" },
    "fixVersions": [{ "name": "1.0.1" }],
    "assignee": { "accountId": "<QA ID>" },
    "reporter": { "accountId": "<PM ID>" }
  }
}
```

### 🔷 7.6. INITIATIVE (nếu dùng Portfolio/Advanced Roadmaps)

```json
{
  "fields": {
    "project": { "key": "SHBNB" },
    "issuetype": { "name": "Initiative" },
    "summary": "[INITIATIVE] Tăng trưởng người dùng App SHB",
    "description": "Tập trung triển khai các tính năng như chatbot, FaceID login, và cá nhân hoá để tăng tỷ lệ active user.",
    "labels": ["growth", "customer-exp"],
    "priority": { "name": "High" },
    "fixVersions": [{ "name": "1.0.0" }],
    "assignee": { "accountId": "<PMO ID>" },
    "reporter": { "accountId": "<PM ID>" }
  }
}
```

### 🧪 7.7. TEST CASE (nếu có test management tool như Zephyr/TestRail tích hợp)

```json
{
  "fields": {
    "project": { "key": "SHBNB" },
    "issuetype": { "name": "Test" },
    "summary": "TEST: Login với FaceID hợp lệ trên iOS",
    "description": "**Pre-condition**: User đã enable FaceID trong cài đặt\n**Test Steps**:\n1. Mở app SHB trên iOS 16\n2. Quét khuôn mặt thành công\n**Expected**: Người dùng được tự động đăng nhập và vào trang chính",
    "labels": ["testcase", "auth-service", "ios"],
    "components": [{ "name": "AuthService" }],
    "priority": { "name": "Medium" },
    "fixVersions": [{ "name": "1.0.0" }],
    "assignee": { "accountId": "<QA ID>" },
    "reporter": { "accountId": "<TestLead ID>" }
  }
}
```

### 🐞 7.8. BUG WITH REPRO STEPS

````json
{
  "fields": {
    "project": { "key": "SHBNB" },
    "issuetype": { "name": "Bug" },
    "summary": "[BUG] Crash khi đăng nhập bằng FaceID @iOS 17 — AuthService",
    "description": "**Môi trường:** iOS 17.0.1, App version 1.0.0\n\n**Bước tái hiện:**\n1. Mở app SHB\n2. Bấm đăng nhập → Quét FaceID\n3. Ứng dụng crash ngay lập tức\n\n**Kỳ vọng:** Đăng nhập thành công hoặc báo lỗi rõ ràng\n**Thực tế:** Crash app\n\n**Ghi log:**\n```\nEXC_BAD_ACCESS at AuthService.swift line 123\n```",
    "labels": ["bug", "faceid", "ios", "auth-service"],
    "components": [{ "name": "AuthService" }],
    "priority": { "name": "Highest" },
    "fixVersions": [{ "name": "1.0.1" }],
    "assignee": { "accountId": "<Dev ID>" },
    "reporter": { "accountId": "<QA ID>" }
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


