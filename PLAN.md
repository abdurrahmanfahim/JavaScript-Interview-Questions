# JS Interview Questions — Project Plan

## Project Overview

একটি static web app যেখানে বিভিন্ন topic এর interview questions পড়া যায়। Goal হলো system টাকে এমনভাবে তৈরি করা যেন নতুন topic যোগ করতে কোনো logic file এ হাত দিতে না হয় — শুধু data file আর একটা config entry যথেষ্ট।

---

## Current State (Done)

### Files
| File | Description |
|------|-------------|
| `index.html` | Main UI — header, dropdown, stats, toolbar, questions container, pagination |
| `css/styles.css` | Full theme system (light/dark), responsive design, table styles |
| `scripts/logic.js` | App logic — render, pagination, search, filter, bookmark, quiz mode, keyboard shortcuts |
| `scripts/questionsData.js` | JS V1 questions (69 questions, `questionsDataV1`) |
| `scripts/questionsDataV2.js` | JS V2 questions — Bangla + English (`questionsDataV2`, `questionsDataV2En`) |
| `scripts/reactQuestionsData.js` | React questions — Bangla (89 questions, `reactQuestionsData`) |

### Features
- [x] Light / Dark theme toggle
- [x] Multi-version dropdown (V1, V2 Bangla, V2 English, React)
- [x] Search questions
- [x] Filter — All / Bookmarked / Completed / Not Completed
- [x] Bookmark questions (localStorage)
- [x] Mark as completed (localStorage)
- [x] Pagination
- [x] Expand / Collapse all
- [x] Quiz mode (blur answers)
- [x] Random question
- [x] Jump to question
- [x] Resume reading (last read position)
- [x] Export progress (JSON)
- [x] Keyboard shortcuts
- [x] Progress bar (scroll)
- [x] Stats bar (total, completed, bookmarked, progress %)
- [x] Mobile responsive + mobile app bar
- [x] Back to top button
- [x] Copy code button
- [x] Table styles (theme-aware)
- [x] Download APK

### Data Structure (per question)
```js
{
  id: number,
  title: string,
  content: string  // HTML string
}
```

> V2 তে `tags` array ও আছে।

---

## Planned: Data-Driven Topic System

### Problem
এখন নতুন topic যোগ করতে হলে:
1. `index.html` এ manually `<option>` যোগ করতে হয় — দুটো dropdown এ
2. `index.html` এ `<script>` tag যোগ করতে হয়
3. `logic.js` এ `handleVersionChange()` এ নতুন `else if` লিখতে হয়
4. `logic.js` এ `init()` এ dropdown sync logic আপডেট করতে হয়

### Solution
একটা central config file — `scripts/topicsConfig.js`:

```js
const topics = [
  {
    id: "js-v1",
    label: "JS V1",
    dataVar: "questionsDataV1",
    src: "scripts/questionsData.js"
  },
  {
    id: "js-v2-bn",
    label: "JS V2 (বাংলা)",
    dataVar: "questionsDataV2",
    src: "scripts/questionsDataV2.js"
  },
  {
    id: "js-v2-en",
    label: "JS V2 (English)",
    dataVar: "questionsDataV2En",
    src: "scripts/questionsDataV2.js"
  },
  {
    id: "react",
    label: "React",
    dataVar: "reactQuestionsData",
    src: "scripts/reactQuestionsData.js"
  }
];
```

### নতুন topic যোগ করার steps (future)
1. `scripts/` এ data file রাখো (যেমন `nextQuestionsData.js`)
2. `topicsConfig.js` এ একটা object যোগ করো
3. `index.html` এ শুধু `<script src="...">` tag যোগ করো

**Logic file এ হাত দিতে হবে না।**

### Changes Required
| File | Change |
|------|--------|
| `scripts/topicsConfig.js` | নতুন file — topic config array |
| `scripts/logic.js` | `handleVersionChange()` config loop করবে, `init()` dropdown auto-generate করবে |
| `index.html` | Dropdown options auto-generate হবে JS থেকে, static `<option>` সরবে। `topicsConfig.js` script tag যোগ হবে |

---

## Future Topics (Planned)
- [ ] Next.js Interview Questions
- [ ] TypeScript Interview Questions
- [ ] Node.js Interview Questions

---

## Changelog

### Session 2 — Data-Driven Topic System
- `scripts/topicsConfig.js` তৈরি — central config array, প্রতিটা topic এ `id`, `label`, `mobileLabel`, `dataVar`, optional `default` flag
- `logic.js` আপডেট:
  - `handleVersionChange()` — config loop করে, hardcoded `if/else` সরানো হয়েছে
  - `init()` — dropdown options config থেকে auto-generate হয়
  - `getFilteredQuestions()` — `q.tags` এর বদলে `q.tags || []` ব্যবহার করা হয়েছে (tags নেই এমন data তেও crash হবে না)
  - localStorage key পরিবর্তন: `version` + `language` → `topicId` (single key, cleaner)
- `index.html` আপডেট:
  - দুটো dropdown থেকে static `<option>` সরানো হয়েছে — JS থেকে auto-generate হয়
  - `topicsConfig.js` script tag যোগ করা হয়েছে (data files এর আগে)

### নতুন topic যোগ করার steps (এখন থেকে)
1. `scripts/` এ data file রাখো
2. `topicsConfig.js` এ একটা object যোগ করো
3. `index.html` এ `<script src="scripts/yourData.js">` যোগ করো

---

### Session 1
- `questionsData.js` থেকে সব `difficulty` এবং empty `tags: []` fields remove করা হয়েছে (PowerShell regex)
- `questionsDataV2.js` থেকে `difficulty` fields remove করা হয়েছে
- `reactQuestionsData.js` তৈরি — `ref/React Interview Questions.html` parse করে 89টা unique question extract করা হয়েছে
  - Notion wrapper `<div style="display:contents">` এবং `</div>` strip করা হয়েছে
  - `id`, `class` attributes remove করা হয়েছে
  - `<strong>` tags remove করা হয়েছে
  - Duplicate questions (`Redux Flow Explain`, `Error Handling কীভাবে করা হয়?`) remove করা হয়েছে
  - Prism CDN script/link tags remove করা হয়েছে
- Dropdown এ React option যোগ করা হয়েছে (desktop + mobile উভয়তে)
- `index.html` এ `reactQuestionsData.js` script tag যোগ করা হয়েছে
- `logic.js` এ React version support যোগ করা হয়েছে (version `3` হিসেবে localStorage এ save হয়)
- `css/styles.css` এ theme-aware table styles যোগ করা হয়েছে
  - `thead` — accent gradient background, white text
  - `tbody tr:nth-child(even)` — zebra striping
  - `tbody tr:hover` — accent color highlight
  - Mobile responsive table padding
