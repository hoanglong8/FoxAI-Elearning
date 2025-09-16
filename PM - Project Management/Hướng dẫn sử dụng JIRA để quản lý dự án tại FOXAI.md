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

<img width="1919" height="737" alt="image" src="https://github.com/user-attachments/assets/a908a95a-7906-42d4-ba96-6505b7663f74" />

---

## 🧰 7. Tạo Issue bằng API
Bộ mẫu JIRA JSON payload đã chuẩn hóa theo cấu trúc FOXAI, dùng để tạo Issue qua REST API cho dự án SHBNB (Chatbot Native cho SHB):

> 🔧 **Lưu ý**: thay các giá trị `<>` bằng giá trị thực tế. Nếu chưa rõ `customfield`, dùng placeholder và nhắc map với JIRA admin.


---
# Hướng Dẫn Cấu Hình Project trên JIRA

## 1. Truy cập tới Cài Đặt Dự Án

<img width="1906" height="949" alt="image" src="https://github.com/user-attachments/assets/8c1b4d97-6798-4aaf-98df-0316e690f9ec" />

1. Trong giao diện JIRA, chọn **Projects → \[Project của bạn]**.
2. Nhấn vào biểu tượng **More actions (•••)** cạnh tên dự án → chọn **Project settings**.
3. Sử dụng thanh bên trái để truy cập nhanh các mục như Project Details, Issue types, Workflows,… ([Atlassian Support][1]).

---

## 2. Chi Tiết Dự Án (Project Details)

* **Tên dự án**, **Project key** (được dùng để tạo issue keys), mô tả, và avatar của dự án có thể được chỉnh sửa tại đây. ([confluence.atlassian.com][2], [Atlassian Support][1]).
* Lưu ý: Việc thay đổi Project key không đơn giản và cần cân nhắc kỹ. ([Atlassian Support][1]).

---

## 3. Loại Dự Án & Template

* Khi tạo project mới: chọn **management type** (Team‑managed hoặc Company‑managed) và **template** (Scrum, Kanban, Software, Service, Work Management,…). ([community.atlassian.com][3], [confluence.atlassian.com][2]).

  * **Team‑managed**: phù hợp cho nhóm nhỏ, dễ cấu hình.
  * **Company‑managed**: phù hợp cho tổ chức lớn, có tính năng chia sẻ scheme. ([community.atlassian.com][3]).
* **Template** xác định cấu hình cơ bản (issue types, workflows, board, backlog). ([confluence.atlassian.com][4], [community.atlassian.com][3]).

---

## 4. Issue Types & Issue Type Schemes

* Trong **Project settings → Issue types**, bạn có thể chọn hoặc thêm mới issue type phù hợp (epic, story, task, bug, v.v.). ([confluence.atlassian.com][5], [Atlassian Support][1]).
* Scheme này kiểm soát loại issue được phép tạo trong project.

---

## 5. Workflow & Workflow Scheme

* **Workflow** xác định luồng trạng thái của issue (ví dụ: To Do → In Progress → Done).
* **Workflow scheme** gán workflow này cho các issue type cụ thể trong project. ([confluence.atlassian.com][6]).
* Quản trị viên có thể:

  * Copy workflow hệ thống → chỉnh sửa.
  * Tạo workflow mới từ đầu.
  * Sử dụng workflow designer để chỉnh sửa trực quan (thêm trạng thái, transitions,…). ([confluence.atlassian.com][6]).
* Khi sửa workflow đang active, JIRA tạo **bản draft** để chỉnh sửa và cho phép **publish** sau khi hoàn tất. ([confluence.atlassian.com][6]).

---

## 6. Screens, Screen Schemes & Field Configuration

* **Screens** xác định các trường hiển thị trên giao diện (create/edit/view).
* **Screen schemes** gán từng screen cho các hành động.
* **Issue type screen schemes** gán các screen scheme cho từng loại issue. ([confluence.atlassian.com][7]).
* Bạn có thể tùy chỉnh fields, vị trí hiển thị để tối ưu thông tin cần capture.

---

## 7. Components

* Trong **Project settings → Components**, bạn có thể:

  * Tạo, chỉnh sửa, xoá component.
  * Gán **Component lead** và **Default assignee** cho component để tự động assign issue khi component được set. ([confluence.atlassian.com][8]).
* Component giúp phân chia rõ phạm vi công việc và tăng tính tự động.

---

## 8. Versions (Fix Versions & Release Management)

* Phiên bản (Versions) dùng để nhóm issue liên quan đến một bản phát hành (release).
* Có thể tạo, chỉnh sửa, xoá version và gán cho issue để theo dõi release. ([confluence.atlassian.com][9], [jirastrategy.com][10]).

---

## 9. Permissions & Permission Schemes

* **Global permissions** áp dụng cho toàn hệ thống.
* **Project permissions** (qua Permission scheme) điều khiển ai được làm gì trong project — như xem issue, tạo, chỉnh sửa, assign,… ([confluence.atlassian.com][11]).
* Project Admin (Administer projects) có thể làm nhiều tác vụ như chỉnh project details, roles, components,… mà không cần Global Admin quyền. ([Atlassian Support][12], [confluence.atlassian.com][13]).

---

## 10. Issue Linking

* Mặc định JIRA hỗ trợ 4 kiểu link: "relates to", "duplicates", "blocks", "clones", v.v.
* Bạn có thể thêm, sửa hoặc xoá kiểu linking để phù hợp với quy trình. ([confluence.atlassian.com][14]).
* Người dùng cần có permission **Link issues** để sử dụng tính năng này.

---

## 11. Priority Schemes

* JIRA cho sẵn các mức ưu tiên: Highest, High, Medium, Low, Lowest.
* Bạn có thể thêm priority mới, chỉnh hoặc gán chúng vào **Priority scheme**, rồi gán scheme này cho project. ([confluence.atlassian.com][15]).

---

## 12. Custom Field Contexts

* Custom fields có thể đặt ở **global context** hoặc **project-specific context**.
* Project‑specific context giúp giới hạn phạm vi field, tối ưu hiệu năng và dễ quản lý. ([confluence.atlassian.com][16]).

---

## 13. Mẹo Chung

* Chỉnh sửa **shared schemes** (workflow, screen, field,...): thay đổi sẽ lan sang nhiều project liên kết.
* Dùng **draft workflow** để thử nghiệm trước khi áp dụng cho project thực tế.
* Theo dõi performance khi thay đổi workflows cho project có nhiều issue — có thể chậm. ([confluence.atlassian.com][6]).

<img width="1908" height="818" alt="image" src="https://github.com/user-attachments/assets/650e7c51-d207-49f3-9c07-c7fbe23f6392" />

---
## 📋 Checklist JIRA cho PM tại FOXAI - rút gọn từ tài liệu *Hướng dẫn thiết lập một số chức năng quan trọng trên JIRA*

## 1️⃣ Khởi tạo Project

* [ ] Vào **Projects → Create Project**.
* [ ] Chọn loại project (*Basic software development* thường dùng).
* [ ] Nhập **Project Name, Key (3–6 ký tự), PM**.
* [ ] Submit (nếu chưa có quyền → liên hệ Admin).

## 2️⃣ Tạo Epic (Chủ đề)

* [ ] Nhấn **Create**, chọn **Issue Type = Epic**.
* [ ] Nhập thông tin, bấm **Create**.

## 3️⃣ Tạo Issue khác (Task/Bug/Feature)

* [ ] Nhấn **Create**, chọn Issue phù hợp:

  * *Improvement* (cải tiến)
  * *Task* (việc)
  * *New Feature* (chức năng mới)
  * *Bug* (lỗi)
* [ ] Nhập **Epic Link** để liên kết với Epic.

## 4️⃣ Thêm Custom Fields (VD: Tester, Developer, Deadline)

* [ ] **⚙️ Settings → Issues → Custom fields → Add field**.
* [ ] Chọn loại dữ liệu → Create.
* [ ] Vào **Screens → Configure Screen → Add field** vào form tạo Issue.
* [ ] Kiểm tra hiển thị khi **Create Issue**.

## 5️⃣ Thiết lập Workflow

* [ ] **⚙️ Settings → Issues → Workflows → Add workflow**.
* [ ] Đặt tên, thêm **Status** (Open, In Progress, Done…).
* [ ] Thêm **Transitions** (luồng hành động giữa các status).
* [ ] Publish & gán Workflow vào Project.

✅ **Kết quả**: PM có thể tạo project chuẩn, quản lý backlog theo *Epic → Issue*, thêm field cần thiết, và theo dõi tiến độ qua workflow.
⏱️ **Thời gian triển khai**: 30 phút–1 giờ cho project mới.

---
## Hướng Dẫn Khai Báo Sprint, Backlog và Issue trên Jira cho Dự án [FOXAI Native SHB](http://fox.ai.vn:8080/secure/RapidBoard.jspa?rapidView=2&projectKey=SHBNB&view=planning&issueLimit=100#)

### Bước 1: Chuẩn Bị Dự Án Jira (Project Setup)

Nếu bạn chưa có dự án Jira, hãy tạo một dự án mới với template **Scrum software development**.

1.  **Chọn "Projects"** trên thanh điều hướng trên cùng.
2.  **Nhấn "Create project"**.
3.  **Chọn template "Scrum"** và nhấn "Use template".
4.  **Chọn "Company-managed project"** (thường dùng cho các dự án lớn, nhiều đội).
5.  **Đặt tên dự án:** `FOXAI Native SHB` (hoặc tên tương tự, ví dụ: `SHB-FOXAI-Native`).
6.  **Key:** Tự động tạo hoặc đặt thủ công, ví dụ: `SHBNB`. (Key này sẽ xuất hiện ở đầu các issue, ví dụ: `SHBNB-123`).
7.  **Nhấn "Create project"**.

Bây giờ bạn đã có một dự án Scrum sẵn sàng để làm việc!

### Bước 2: Tạo Epics (Các Tính Năng Lớn)

Epics là những phần công việc lớn, thường kéo dài nhiều Sprint. Chúng ta sẽ tạo các Epic tương ứng với các phần chính của thiết kế.

1.  **Đi tới "Backlog"** trong thanh điều hướng bên trái của dự án.
2.  Ở phía trên cùng bên trái của màn hình Backlog, bạn sẽ thấy mục **"Epics"**. Nhấn vào đó.
3.  **Nhấn "Create epic"**.

Dựa trên tài liệu của bạn, chúng ta có thể định nghĩa các Epic sau:

*   **Epic 1: Quản lý Phân loại Ý định (Intent Classification Management)**
    *   **Epic Name:** `FEAT-CONV-001: Intent Classification Mgmt`
    *   **Summary:** `Cho phép Admin/Trainer cấu hình và huấn luyện mô hình phân loại ý định người dùng cho Conversation Engine (Service 07).`
    *   *(Liên quan đến **PHẦN 1.1** và **PHẦN 2** của tài liệu)*
*   **Epic 2: Quản lý Thu thập Thông tin & Hành động (Slot Filling & Workflow Trigger)**
    *   **Epic Name:** `FEAT-CONV-002/003: Slot Filling & Workflow Trigger Mgmt`
    *   **Summary:** `Cho phép Admin cấu hình luồng thu thập thông tin (slot filling) và ánh xạ/kích hoạt các workflow từ Service 09 thông qua Conversation Engine (Service 07).`
    *   *(Liên quan đến **PHẦN 1.1**, **PHẦN 5** và **PHẦN 6** của tài liệu)*
*   **Epic 3: Database & Core Logic cho Conversation Engine (Service 07)**
    *   **Epic Name:** `SVC07: Conversation Engine Core`
    *   **Summary:** `Triển khai cấu trúc DB và các thành phần cốt lõi của Service 07, bao gồm Intent Classifier, Dialog Manager, Session Context, Configuration Manager.`
    *   *(Liên quan đến **PHẦN 1.3**, **PHẦN 1.4**, **PHẦN 3** của tài liệu)*
*   **Epic 4: Database & Core Logic cho Knowledge QA (Service 03)**
    *   **Epic Name:** `SVC03: Knowledge QA Core`
    *   **Summary:** `Thiết kế và triển khai CSDL cho Service 03 để lưu trữ, quản lý và truy vấn kho tri thức, bao gồm Collections, Documents, Chunks, Access Control.`
    *   *(Liên quan đến **PHẦN 4** của tài liệu)*
*   **Epic 5: Service 04 - Data Ingestion Service (POC Simulation)**
    *   **Epic Name:** `SVC04: Data Ingestion (Core Banking Sim)`
    *   **Summary:** `Xây dựng Service 04 giả lập hệ thống Core Banking/Card Management để hỗ trợ POC cho Service 07 và 09, bao gồm DB giả lập và API tương tác.`
    *   *(Liên quan đến **PHẦN 5** của tài liệu)*
*   **Epic 6: Tích hợp và API (Integration & APIs)**
    *   **Epic Name:** `INTEG: API & Cross-Service Integration`
    *   **Summary:** `Định nghĩa và triển khai các API inbound/outbound cần thiết cho Service 07 và các tích hợp giữa các microservices (07, 09, 15).`
    *   *(Liên quan đến **PHẦN 1.5** của tài liệu)*

Sau khi tạo các Epic, bạn sẽ thấy chúng xuất hiện trong danh sách Epics.

### Bước 3: Tạo User Stories (Yêu Cầu Từ Góc Nhìn Người Dùng) và Technical Tasks

Bây giờ, chúng ta sẽ chia nhỏ các Epic thành các User Story (nếu là tính năng người dùng) hoặc Technical Task (nếu là công việc kỹ thuật backend/cơ sở hạ tầng). Bạn có thể tạo trực tiếp trong màn hình Backlog.

**Cách tạo:**
1.  **Trong phần "Create issue" ở dưới cùng của Backlog**, chọn loại issue là `Story` hoặc `Task`.
2.  **Nhập tiêu đề (Summary).**
3.  **Nhấn Enter.**
4.  **Kéo và thả Story/Task** vào Epic tương ứng (bằng cách kéo lên phần Epics và thả vào Epic mong muốn).

**Ví dụ một số User Stories/Tasks dựa trên tài liệu của bạn:**

**Epic: `FEAT-CONV-001: Intent Classification Mgmt`**

*   **Story:** `SHBNB-S101: Với vai trò Knowledge Admin, tôi muốn tạo Intent mới để mở rộng luồng hội thoại.`
    *   **Description:** `Admin có thể tạo các Intent mới (vd: CUSTOMER_FEEDBACK, PROMOTION_INQUIRY) thông qua giao diện quản trị, với tên định danh, tên hiển thị và mô tả. Các Intent này sẽ được lưu vào bảng tbl_intents.`
    *   **Acceptance Criteria:**
        *   Giao diện "Phân loại Ý định" trong Admin Portal có nút "Thêm Intent mới".
        *   Form tạo Intent cho phép nhập Intent Name (không dấu, SNAKE_CASE), Display Name (có dấu), Description.
        *   Intent được lưu vào DB tbl_intents với `is_system=FALSE`.
        *   `Knowledge Admin` có thể thực hiện thao tác này.
*   **Story:** `SHBNB-S102: Với vai trò Intent Trainer, tôi muốn thêm/sửa/xóa mẫu câu huấn luyện cho các Intent hiện có.`
    *   **Description:** `Trainer có thể chọn một Intent và quản lý danh sách các mẫu câu (utterances) của Intent đó. Các thay đổi được lưu vào bảng tbl_intent_utterances.`
    *   **Acceptance Criteria:**
        *   Giao diện chi tiết Intent hiển thị danh sách Utterances, có nút "Thêm", "Sửa", "Xóa".
        *   Mỗi Utterance được lưu vào tbl_intent_utterances, liên kết với intent_id.
        *   Phân quyền: `Intent Trainer` chỉ có quyền này, không thấy nút tạo/xóa Intent.
*   **Story:** `SHBNB-S103: Với vai trò Knowledge Admin, tôi muốn kích hoạt quá trình huấn luyện lại mô hình NLU sau khi cập nhật Intent/Utterances.`
    *   **Description:** `Admin có thể nhấn nút "Huấn luyện & Áp dụng" để kích hoạt một background job, huấn luyện lại mô hình NLU của Service 07 dựa trên dữ liệu mới và triển khai mô hình mới.`
    *   **Acceptance Criteria:**
        *   Nút "Huấn luyện & Áp dụng" chỉ hiển thị cho `Knowledge Admin`.
        *   Hiển thị thông báo xác nhận và trạng thái quá trình huấn luyện trên UI.
        *   Quá trình huấn luyện cập nhật mô hình NLU trong Service 07.
*   **Task:** `SHBNB-T101: Thiết kế và triển khai Database cho Intent Classification (tbl_intents, tbl_intent_utterances).`
    *   **Description:** `Triển khai các bảng tbl_intents và tbl_intent_utterances theo đặc tả ở PHẦN 3. Đảm bảo ràng buộc, index, và dữ liệu khởi tạo (seed data) cho 4 Intent mặc định.`
    *   **Sub-tasks (ví dụ):**
        *   `SHBNB-T101a: Tạo migration script cho tbl_intents.`
        *   `SHBNB-T101b: Tạo migration script cho tbl_intent_utterances.`
        *   `SHBNB-T101c: Viết seed data script cho 4 Intent mặc định.`
        *   `SHBNB-T101d: Cấu hình ON DELETE CASCADE cho intent_utterances.`

**Epic: `FEAT-CONV-002/003: Slot Filling & Workflow Trigger Mgmt`**

*   **Story:** `SHBNB-S201: Với vai trò Knowledge Admin, tôi muốn cấu hình các câu hỏi làm rõ (prompts) cho tham số của một Tool.`
    *   **Description:** `Admin có thể định nghĩa các tham số cần thiết cho một Tool (vd: so sánh tài liệu, kích hoạt workflow) và các câu hỏi mà chatbot sẽ hỏi người dùng nếu tham số đó còn thiếu. Thông tin này được lưu trong trường 'configuration' của tbl_tools.`
    *   **Acceptance Criteria:**
        *   Trong giao diện Tool Management (Service 07), khi tạo/sửa Tool loại `RAG` hoặc `WORKFLOW`, có khu vực "Parameters & Prompts Configuration".
        *   Cho phép thêm/sửa/xóa Parameter (Name, Required, Prompt).
        *   Dữ liệu được lưu dưới dạng JSONB trong cột `configuration` của `tbl_tools`.
*   **Task:** `SHBNB-T201: Phát triển Dialog Manager trong Service 07 để thu thập thông tin còn thiếu.`
    *   **Description:** `Triển khai module Dialog Manager để quản lý trạng thái hội thoại, kiểm tra các slot bắt buộc, hỏi người dùng các prompt đã cấu hình và lưu thông tin vào Session Cache (Redis).`
    *   **Sub-tasks:**
        *   `SHBNB-T201a: Tích hợp Redis cho Session Cache.`
        *   `SHBNB-T201b: Phát triển logic kiểm tra tham số và hỏi lại.`
        *   `SHBNB-T201c: Cập nhật Session Cache với dữ liệu người dùng.`
*   **Task:** `SHBNB-T202: Phát triển cơ chế giao tiếp Service 07 với Service 09 (Workflow Discovery API).`
    *   **Description:** `Service 07 cần có khả năng gọi API của Service 09 để lấy danh sách các tham số của một Workflow cụ thể, phục vụ cho việc cấu hình Slot Filling.`
    *   **Acceptance Criteria:**
        *   Service 09 có endpoint `GET /api/v1/workflows/{workflow_definition_id}/parameters`.
        *   Service 07 có logic gọi API này khi Admin cấu hình Tool loại WORKFLOW.
        *   UI của Service 07 tự động hiển thị các tham số từ Service 09.

**Epic: `SVC07: Conversation Engine Core`**

*   **Task:** `SHBNB-T301: Triển khai các thành phần cốt lõi của Service 07 (Intent Classifier, Dialog Manager, Configuration Manager).`
    *   **Description:** `Xây dựng khung sườn cho Service 07, tích hợp NLU model, quản lý trạng thái hội thoại và đọc cấu hình từ DB.`

**Epic: `SVC03: Knowledge QA Core`**

*   **Task:** `SHBNB-T401: Thiết kế và triển khai Database cho Knowledge Base (tbl_collections, tbl_documents, tbl_document_chunks, tbl_document_access_control).`
    *   **Description:** `Triển khai các bảng CSDL theo đặc tả ở PHẦN 4, bao gồm hỗ trợ kiểu dữ liệu VECTOR và các ràng buộc.`
    *   **Sub-tasks:** (Tương tự như Task DB ở trên, chia nhỏ cho từng bảng và các yêu cầu phụ như indexing, cross-service keys, v.v.)
*   **Task:** `SHBNB-T402: Triển khai API cho Service 03 để quản lý Collections và Documents.`
*   **Task:** `SHBNB-T403: Cấu hình môi trường CSDL để hỗ trợ pgvector (nếu dùng PostgreSQL).`

**Epic: `SVC04: Data Ingestion (Core Banking Sim)`**

*   **Task:** `SHBNB-T501: Thiết kế và triển khai Database giả lập cho Service 04 (dummy_customers, dummy_cards).`
    *   **Description:** `Triển khai các bảng dummy_customers và dummy_cards theo đặc tả ở PHẦN 5.2.`
    *   **Sub-tasks:**
        *   `SHBNB-T501a: Tạo migration scripts.`
        *   `SHBNB-T501b: Viết seed data script với 10 khách hàng và 20 thẻ theo ví dụ.`
*   **Task:** `SHBNB-T502: Phát triển API mô phỏng của Service 04 (verify-customer, unlock-card).`
    *   **Description:** `Triển khai các API /api/v1/poc/verify-customer và /api/v1/poc/unlock-card theo đặc tả ở PHẦN 5.4, với logic truy vấn DB giả lập.`

**Epic: `INTEG: API & Cross-Service Integration`**

*   **Task:** `SHBNB-T601: Thiết kế và triển khai API Inbound cho Service 07 (POST /api/v1/conversation/chat).`
*   **Task:** `SHBNB-T602: Thiết kế và triển khai API Outbound từ Service 07 đến Service 15 (POST /api/v1/reasoning/query).`
*   **Task:** `SHBNB-T603: Thiết kế và triển khai API Outbound từ Service 07 đến Service 09 (POST /api/v1/workflows/trigger).`
*   **Task:** `SHBNB-T604: Thiết kế và triển khai API Cấu hình cho Service 07 (Admin Portal APIs).`

**Lưu ý quan trọng khi tạo Issue:**
*   **Link Issue:** Sau khi tạo, hãy link các Task/Story liên quan đến nhau. Ví dụ: `SHBNB-S101` "is implemented by" `SHBNB-T101`.
*   **Add Comments:** Thêm các ghi chú, câu hỏi, hoặc quyết định vào phần comment của từng issue.
*   **Assignee:** Gán issue cho người phụ trách.
*   **Estimates:** Ước lượng thời gian hoặc điểm (Story Points) cho mỗi Story/Task.

### Bước 4: Tạo và Lên Kế Hoạch Sprints

Sau khi đã có một lượng kha khá các Epic, Story và Task trong Backlog, bạn có thể bắt đầu lên kế hoạch cho các Sprint.

1.  **Trong màn hình Backlog, kéo xuống cuối cùng**, bạn sẽ thấy nút **"Create sprint"**.
2.  **Nhấn "Create sprint"**. Một Sprint mới sẽ xuất hiện.
3.  **Đặt tên cho Sprint:** Ví dụ: `Sprint 1 - Conversation Engine Core`
4.  **Kéo và thả các Story/Task** từ Backlog chưa được gán vào một Sprint cụ thể vào Sprint mới này. Hãy nhớ nguyên tắc "làm đầy" Sprint dựa trên năng lực của đội (team velocity).
5.  **Sau khi đã kéo đủ số lượng công việc cho Sprint, nhấn nút "Start sprint"** ở góc trên bên phải của Sprint.
6.  **Cấu hình Sprint:**
    *   **Sprint name:** (Đã đặt)
    *   **Duration:** Chọn thời gian cho Sprint (ví dụ: 1 tuần, 2 tuần).
    *   **Start date / End date:** Tự động điền hoặc chỉnh sửa.
    *   **Sprint Goal:** Viết mục tiêu chính của Sprint này. Ví dụ: *"Hoàn thành cấu trúc DB và API cơ bản cho Service 07, cho phép tạo Intent mới và huấn luyện mô hình NLU."*
7.  **Nhấn "Start".**

Sau khi Sprint bắt đầu, các Issue sẽ chuyển sang màn hình "Active Sprints" (hoặc "Board"), nơi đội có thể kéo các Issue qua các cột (To Do, In Progress, Review, Done) để cập nhật trạng thái công việc.

### Bước 5: Theo Dõi và Báo Cáo

Jira cung cấp nhiều công cụ để theo dõi tiến độ:

*   **Active Sprints (Board):** Hiển thị trực quan trạng thái các Issue trong Sprint hiện tại.
*   **Reports:**
    *   **Burndown Chart:** Theo dõi tiến độ hoàn thành công việc trong Sprint.
    *   **Velocity Chart:** Đo lường năng lực hoàn thành Story Points của đội qua các Sprint.
    *   **Epic Report:** Theo dõi tiến độ của từng Epic.

### Tổng kết và Lời khuyên cho PM

*   **Bắt đầu nhỏ:** Đừng cố gắng tạo tất cả mọi thứ ngay lập tức. Tập trung vào Sprint đầu tiên với các công việc quan trọng nhất.
*   **Sử dụng mô tả chi tiết:** Hãy tận dụng tối đa phần mô tả của Story/Task để dán các đoạn trích từ tài liệu đặc tả của bạn, điều này giúp Dev dễ hiểu và tham chiếu.
*   **Tận dụng Sub-tasks:** Đối với các Task lớn (như triển khai DB), hãy chia nhỏ thành các Sub-task để dễ quản lý và gán cho các thành viên khác nhau.
*   **Ước lượng liên tục:** Việc ước lượng ban đầu có thể chưa chính xác, hãy điều chỉnh trong các buổi lập kế hoạch Sprint và các buổi Daily Scrum.
*   **Review định kỳ:** Luôn có các buổi Review Sprint và Retrospective để cải thiện quy trình.

---
## Ví dụ các trường thông tin cho Epic 1:"Quản lý Phân loại Ý định (Intent Classification Management)"

<img width="1919" height="942" alt="image" src="https://github.com/user-attachments/assets/59451f78-335f-4bed-aaac-9014c1f56cdb" />

Khi bạn tạo một Epic, bản thân nó đã là cấp cao nhất trong hệ thống phân cấp của Jira (ngoại trừ Initiative/Program nếu có). Vì vậy, bạn sẽ không thể gán một Epic cho một Epic Link khác. Trường "Epic Link" dùng để gán các Story/Task/Bug vào một Epic cha. Khi bạn đang tạo *chính nó là Epic*, trường này sẽ không được sử dụng hoặc sẽ có thông báo như vậy.

Hãy chọn **Loại Issue (Issue Type)** là **`Epic`**.

1.  **Summary (Tóm tắt/Tiêu đề):**
    *   **Điền:** `FEAT-CONV-001: Intent Classification Mgmt`
    *   *Giải thích:* Đây là tên ngắn gọn, dễ hiểu, theo quy tắc đã thống nhất (`Mã Tính Năng: Tên Tính Năng`).

2.  **Description (Mô tả):**
    *   **Điền:**
        ```
        **Mô tả tổng quan:**
        Tính năng này cho phép Quản trị viên (Admin) và Người huấn luyện (Trainer) của SHB có thể chủ động "dạy" cho Chatbot cách nhận biết các loại ý định khác nhau từ người dùng. Mục tiêu là xây dựng một hệ thống linh hoạt, có khả năng mở rộng các luồng hội thoại trong tương lai mà không cần can thiệp vào mã nguồn, đảm bảo tính chủ động cho phía nghiệp vụ của ngân hàng.

        **Các yêu cầu chính:**
        *   Cung cấp giao diện quản lý Intent trong Admin Portal của Service 07.
        *   Cho phép Knowledge Admin tạo, sửa, xóa các Intent mới (ngoài 4 Intent hệ thống mặc định).
        *   Cho phép Knowledge Admin và Intent Trainer thêm, sửa, xóa các mẫu câu huấn luyện (training utterances) cho từng Intent.
        *   Cơ chế để Knowledge Admin kích hoạt quá trình huấn luyện lại mô hình NLU.
        *   Phân quyền chi tiết cho Knowledge Admin và Intent Trainer.

        **Liên quan đến:**
        *   Service 07. Conversation Engine
        *   Service 01. IAM (cho phân quyền)
        *   PHẦN 1.1, PHẦN 1.3, PHẦN 1.4, PHẦN 2, PHẦN 3 của tài liệu thiết kế.
        ```
    *   *Giải thích:* Đây là phần rất quan trọng. Bạn nên tóm tắt mục tiêu, các yêu cầu chính và các thành phần/tài liệu liên quan để bất kỳ ai đọc Epic này cũng hiểu được phạm vi công việc.

3.  **Labels:**
    *   **Điền:** `Service_07`, `FEAT-CONV-001`, `Admin_Portal`, `NLU`
    *   *Giải thích:* Labels giúp bạn phân loại và lọc các Issue một cách nhanh chóng.
        *   `Service_07`: Cho biết Epic này thuộc về Service 07.
        *   `FEAT-CONV-001`: Mã tính năng (giúp liên kết trực tiếp với tài liệu đặc tả).
        *   `Admin_Portal`: Cho biết có liên quan đến giao diện quản trị.
        *   `NLU`: Liên quan đến công nghệ xử lý ngôn ngữ tự nhiên.

4.  **Linked Issues:**
    *   Trong ảnh bạn gửi, bạn đã chọn `blocks`. Tuy nhiên, vì đây là một Epic, nó **ít khi `blocks` (chặn) trực tiếp các Issue khác ở cấp thấp hơn**. Thông thường, các Story/Task mới là thứ bị chặn bởi các Bug hoặc các Story khác.
    *   **Để trống trường "Issue"** nếu Epic này không trực tiếp chặn một Issue cụ thể nào ở cấp độ tương đương.
    *   *Giải thích:* Trường này dùng để thể hiện mối quan hệ giữa các Issue (ví dụ: một bug "blocks" một story, một story "relates to" một task). Một Epic thường là cha của nhiều Story/Task, chứ không phải là một Issue bị chặn hay chặn cái khác.

5.  **Assignee (Người được giao):**
    *   **Điền:** `Nguyen Hoang Long` (hoặc tên người chịu trách nhiệm chính cho Epic này)
    *   *Giải thích:* Người này là người chịu trách nhiệm tổng thể về Epic, thường là Product Owner, hoặc một Lead Dev/Tech Lead phụ trách mảng này.

6.  **Epic Link:**
    *   **Đây là lý do bạn thấy lỗi:** "An epic cannot have another epic linked to it."
    *   **Để trống trường này.** Khi bạn đang tạo một Issue có loại là `Epic`, trường "Epic Link" này sẽ không áp dụng vì bản thân nó đã là Epic rồi, không thể gán nó vào một Epic cha khác.
    *   *Giải thích:* Trường "Epic Link" chỉ xuất hiện và cần điền khi bạn tạo các Issue loại `Story`, `Task`, `Bug` và muốn gán chúng vào một Epic cụ thể.

7.  **Sprint:**
    *   **Điền:** (Để trống)
    *   *Giải thích:* Một Epic thường kéo dài qua nhiều Sprint. Bạn sẽ gán các Story/Task (con của Epic này) vào các Sprint cụ thể, chứ không gán bản thân Epic vào một Sprint duy nhất.

### Minh họa sau khi điền:

**Issue Type:** `Epic`

**Summary:** `FEAT-CONV-001: Intent Classification Mgmt`

**Description:**
```
**Mô tả tổng quan:**
Tính năng này cho phép Quản trị viên (Admin) và Người huấn luyện (Trainer) của SHB có thể chủ động "dạy" cho Chatbot cách nhận biết các loại ý định khác nhau từ người dùng. Mục tiêu là xây dựng một hệ thống linh hoạt, có khả năng mở rộng các luồng hội thoại trong tương lai mà không cần can thiệp vào mã nguồn, đảm bảo tính chủ động cho phía nghiệp vụ của ngân hàng.

**Các yêu cầu chính:**
*   Cung cấp giao diện quản lý Intent trong Admin Portal của Service 07.
*   Cho phép Knowledge Admin tạo, sửa, xóa các Intent mới (ngoài 4 Intent hệ thống mặc định).
*   Cho phép Knowledge Admin và Intent Trainer thêm, sửa, xóa các mẫu câu huấn luyện (training utterances) cho từng Intent.
*   Cơ chế để Knowledge Admin kích hoạt quá trình huấn luyện lại mô hình NLU.
*   Phân quyền chi tiết cho Knowledge Admin và Intent Trainer.

**Liên quan đến:**
*   Service 07. Conversation Engine
*   Service 01. IAM (cho phân quyền)
*   PHẦN 1.1, PHẦN 1.3, PHẦN 1.4, PHẦN 2, PHẦN 3 của tài liệu thiết kế.
```

**Labels:** `Service_07`, `FEAT-CONV-001`, `Admin_Portal`, `NLU`

**Linked Issues:** (Để trống hoặc điền nếu thực sự có mối quan hệ chặn ở cấp Epic, nhưng rất hiếm)

**Assignee:** `Nguyen Hoang Long`

**Epic Link:** (Để trống, vì đây là Epic)

**Sprint:** (Để trống)

---

