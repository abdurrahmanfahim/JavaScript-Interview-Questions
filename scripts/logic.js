// App State
let state = {
  currentPage: 1,
  questionsPerPage: 10,
  searchQuery: "",
  filter: "all",
  bookmarks: JSON.parse(localStorage.getItem("bookmarks") || "[]"),
  completed: JSON.parse(localStorage.getItem("completed") || "[]"),
  lastRead: JSON.parse(localStorage.getItem("lastRead") || "null"),
  expandedQuestions: new Set(),
  quizMode: false,
};

// Get filtered questions
function getFilteredQuestions() {
  let filtered = [...questionsData];

  // Apply search filter
  if (state.searchQuery) {
    const query = state.searchQuery.toLowerCase();
    filtered = filtered.filter(
      (q) =>
        q.title.toLowerCase().includes(query) ||
        q.content.toLowerCase().includes(query) ||
        q.tags.some((tag) => tag.toLowerCase().includes(query)),
    );
  }

  // Apply category filter
  switch (state.filter) {
    case "bookmarked":
      filtered = filtered.filter((q) => state.bookmarks.includes(q.id));
      break;
    case "completed":
      filtered = filtered.filter((q) => state.completed.includes(q.id));
      break;
    case "uncompleted":
      filtered = filtered.filter((q) => !state.completed.includes(q.id));
      break;
  }

  return filtered;
}

// Get total pages
function getTotalPages() {
  if (state.questionsPerPage === "all") return 1;
  const filtered = getFilteredQuestions();
  return Math.ceil(filtered.length / state.questionsPerPage);
}

// Render questions
function renderQuestions() {
  const container = document.getElementById("questionsContainer");
  const filtered = getFilteredQuestions();

  let questions;
  if (state.questionsPerPage === "all") {
    questions = filtered;
  } else {
    const startIndex = (state.currentPage - 1) * state.questionsPerPage;
    questions = filtered.slice(startIndex, startIndex + state.questionsPerPage);
  }

  if (questions.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-search"></i>
        <h3>No questions found</h3>
        <p>Try adjusting your search or filter criteria</p>
      </div>
    `;
    return;
  }

  container.innerHTML = questions
    .map((q) => {
      const isBookmarked = state.bookmarks.includes(q.id);
      const isCompleted = state.completed.includes(q.id);
      const isExpanded = state.expandedQuestions.has(q.id);

      return `
      <div class="question-card ${isBookmarked ? " bookmarked" : "" } ${isCompleted ? "completed" : "" } ${isExpanded
  ? "expanded" : "" }" data-id="${q.id}">
  <div class="question-header" onclick="toggleQuestion(${q.id})">
    <div class="question-number">${q.id.toString().padStart(2, "0")}</div>
    <h3 class="question-title">${q.title}</h3>
    <div class="question-actions" onclick="event.stopPropagation()">

      <div class="expand-icon">
        <i class="fas fa-chevron-down"></i>
      </div>

      
    </div>

  </div>
  <div class="question-content">
    <div class="question-body">
      ${q.content}
      <div class="bottom-actions">
        <button class="action-btn ${isBookmarked ? " bookmarked" : "" }" onclick="toggleBookmark(${q.id})"
        title="Bookmark">
        <i class="fa${isBookmarked ? " s" : "r" } fa-bookmark"></i>
      </button>
      <button class="action-btn ${isCompleted ? " completed" : "" }" onclick="toggleCompleted(${q.id})"
        title="Mark as completed">
        <i class="fa${isCompleted ? " s" : "r" } fa-check-circle"></i>
      </button>
      </div>
    </div>
  </div>
</div>
    `;
    })
    .join("");

  // Add copy buttons to code blocks
  container.querySelectorAll("pre").forEach((pre) => {
    const copyBtn = document.createElement("button");
    copyBtn.className = "copy-btn";
    copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
    copyBtn.onclick = () => copyCode(pre);
    pre.style.position = "relative";
    pre.appendChild(copyBtn);
  });

  renderPagination();
  updateStats();

  // Save last read position
  if (questions.length > 0) {
    const lastQuestion = questions[questions.length - 1];
    saveLastRead(lastQuestion.id, state.currentPage);
  }
}

// Render pagination
function renderPagination() {
  const totalPages = getTotalPages();
  const pagination = document.getElementById("pagination");

  if (totalPages <= 1) {
    pagination.innerHTML = "";
    return;
  }

  let html = "";

  // Previous button
  html += `<button class="page-btn" onclick="changePage(${state.currentPage - 1})" ${state.currentPage === 1 ? "disabled" : ""}>
    <i class="fas fa-chevron-left"></i>
  </button>`;

  // Page numbers
  const maxVisible = 5;
  let startPage = Math.max(1, state.currentPage - Math.floor(maxVisible / 2));
  let endPage = Math.min(totalPages, startPage + maxVisible - 1);

  if (endPage - startPage < maxVisible - 1) {
    startPage = Math.max(1, endPage - maxVisible + 1);
  }

  if (startPage > 1) {
    html += `<button class="page-btn" onclick="changePage(1)">1</button>`;
    if (startPage > 2) html += `<span class="page-ellipsis">...</span>`;
  }

  for (let i = startPage; i <= endPage; i++) {
    html += `<button class="page-btn ${i === state.currentPage ? "active" : ""}" onclick="changePage(${i})">${i}</button>`;
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1)
      html += `<span class="page-ellipsis">...</span>`;
    html += `<button class="page-btn" onclick="changePage(${totalPages})">${totalPages}</button>`;
  }

  // Next button
  html += `<button class="page-btn" onclick="changePage(${state.currentPage + 1})" ${state.currentPage === totalPages ? "disabled" : ""}>
    <i class="fas fa-chevron-right"></i>
  </button>`;

  pagination.innerHTML = html;
}

// Change page
function changePage(page) {
  const totalPages = getTotalPages();
  if (page >= 1 && page <= totalPages) {
    state.currentPage = page;
    renderQuestions();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// Toggle question expand/collapse
function toggleQuestion(id) {
  if (state.expandedQuestions.has(id)) {
    state.expandedQuestions.delete(id);
  } else {
    state.expandedQuestions.add(id);
  }
  renderQuestions();
}

// Toggle bookmark
function toggleBookmark(id) {
  const index = state.bookmarks.indexOf(id);
  if (index === -1) {
    state.bookmarks.push(id);
    showToast("Question bookmarked!", "success");
  } else {
    state.bookmarks.splice(index, 1);
    showToast("Bookmark removed", "warning");
  }
  localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
  renderQuestions();
}

// Toggle completed
function toggleCompleted(id) {
  const index = state.completed.indexOf(id);
  if (index === -1) {
    state.completed.push(id);
    showToast("Question marked as completed!", "success");
  } else {
    state.completed.splice(index, 1);
    showToast("Marked as incomplete", "warning");
  }
  localStorage.setItem("completed", JSON.stringify(state.completed));
  renderQuestions();
}

// Save last read position
function saveLastRead(questionId, page) {
  state.lastRead = { questionId, page, timestamp: Date.now() };
  localStorage.setItem("lastRead", JSON.stringify(state.lastRead));
}

// Check and show resume banner
function checkResume() {
  const lastRead = JSON.parse(localStorage.getItem("lastRead"));
  if (lastRead && lastRead.questionId) {
    const banner = document.getElementById("resumeBanner");
    const question = questionsData.find((q) => q.id === lastRead.questionId);
    if (question) {
      document.getElementById("resumeText").textContent =
        `Continue from Q${lastRead.questionId}: "${question.title.substring(0, 40)}..."`;
      banner.style.display = "flex";
    }
  }
}

// Resume reading
function resumeReading() {
  const lastRead = JSON.parse(localStorage.getItem("lastRead"));
  if (lastRead) {
    state.currentPage = lastRead.page || 1;
    renderQuestions();
    setTimeout(() => {
      const card = document.querySelector(`[data-id="${lastRead.questionId}"]`);
      if (card) {
        card.scrollIntoView({ behavior: "smooth", block: "center" });
        state.expandedQuestions.add(lastRead.questionId);
        renderQuestions();
      }
    }, 100);
  }
  dismissResume();
}

// Dismiss resume banner
function dismissResume() {
  document.getElementById("resumeBanner").style.display = "none";
}

// Update stats
function updateStats() {
  document.getElementById("totalQuestions").textContent = questionsData.length;
  document.getElementById("completedCount").textContent =
    state.completed.length;
  document.getElementById("bookmarkedCount").textContent =
    state.bookmarks.length;
  const progress = Math.round(
    (state.completed.length / questionsData.length) * 100,
  );
  document.getElementById("progressPercent").textContent = `${progress}%`;
  document.getElementById("progressBar").style.width = `${progress}%`;
}

// Search handler
function handleSearch() {
  state.searchQuery = document.getElementById("searchInput").value;
  state.currentPage = 1;
  renderQuestions();
}

// Filter handler
function handleFilter() {
  state.filter = document.getElementById("filterSelect").value;
  state.currentPage = 1;
  renderQuestions();
}

// Change questions per page
function changeQuestionsPerPage() {
  const value = document.getElementById("questionsPerPage").value;
  state.questionsPerPage = value === "all" ? "all" : parseInt(value);
  state.currentPage = 1;
  renderQuestions();
}

// Expand all
function expandAll() {
  const filtered = getFilteredQuestions();
  filtered.forEach((q) => state.expandedQuestions.add(q.id));
  renderQuestions();
  showToast("All questions expanded", "success");
}

// Collapse all
function collapseAll() {
  state.expandedQuestions.clear();
  renderQuestions();
  showToast("All questions collapsed", "success");
}

// Toggle expand
const toggleBtn = document.getElementById("toggleExpand");
const icon = document.getElementById("expandIcon");

function updateExpandIcon() {
  if (!icon) return;

  icon.className =
    state.expandedQuestions.size > 0
      ? "fas fa-compress-alt"
      : "fas fa-expand-alt";
}

toggleBtn.addEventListener("click", () => {
  if (state.expandedQuestions.size > 0) {
    collapseAll();
  } else {
    expandAll();
  }

  updateExpandIcon();
});

// initial sync
updateExpandIcon();

function updateExpandIcon() {
  const icon = document.querySelector("#toggleExpand i");
  if (!icon) return;

  icon.outerHTML =
    state.expandedQuestions.size > 0
      ? '<i class="fas fa-compress-alt"></i>'
      : '<i class="fas fa-expand-alt"></i>';
}


// Clear all progress
function clearAllProgress() {
  if (
    confirm(
      "Are you sure you want to reset all progress? This will clear bookmarks, completed status, and last read position.",
    )
  ) {
    state.bookmarks = [];
    state.completed = [];
    state.lastRead = null;
    localStorage.removeItem("bookmarks");
    localStorage.removeItem("completed");
    localStorage.removeItem("lastRead");
    renderQuestions();
    showToast("Progress reset successfully", "warning");
  }
}

// Random question
function randomQuestion() {
  const randomIndex = Math.floor(Math.random() * questionsData.length);
  const question = questionsData[randomIndex];

  // Find which page this question is on
  state.searchQuery = "";
  state.filter = "all";
  document.getElementById("searchInput").value = "";
  document.getElementById("filterSelect").value = "all";

  const pageIndex = Math.ceil(question.id / state.questionsPerPage);
  state.currentPage = state.questionsPerPage === "all" ? 1 : pageIndex;

  renderQuestions();

  setTimeout(() => {
    const card = document.querySelector(`[data-id="${question.id}"]`);
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "center" });
      state.expandedQuestions.add(question.id);
      renderQuestions();
    }
  }, 100);

  showToast(`Random: Question ${question.id}`, "success");
}

// Toggle quiz mode
function toggleQuizMode() {
  state.quizMode = !state.quizMode;
  document
    .getElementById("questionsContainer")
    .classList.toggle("quiz-mode", state.quizMode);
  showToast(
    state.quizMode
      ? "Quiz mode enabled - hover to reveal answers"
      : "Quiz mode disabled",
    "success",
  );
}

// Copy code
function copyCode(pre) {
  const code = pre.querySelector("code").textContent;
  navigator.clipboard.writeText(code).then(() => {
    showToast("Code copied to clipboard!", "success");
  });
}

// Export progress
function exportProgress() {
  const data = {
    bookmarks: state.bookmarks,
    completed: state.completed,
    lastRead: state.lastRead,
    exportDate: new Date().toISOString(),
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "js-interview-progress.json";
  a.click();
  URL.revokeObjectURL(url);

  showToast("Progress exported!", "success");
}

// Download APK
async function downloadApk() {
  try {
    showToast("Preparing download...", "info");
    
    const response = await fetch("../apk/JsQsns.apk");
    
    if (!response.ok) {
      throw new Error("Failed to fetch APK file");
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "JsQsns.apk";
    a.click();
    URL.revokeObjectURL(url);

    showToast("APK downloaded successfully!", "success");
  } catch (error) {
    console.error("Download failed:", error);
    showToast("Download failed. Please try again.", "error");
  }
}

// Theme toggle
function toggleTheme() {
  const html = document.documentElement;
  const icon = document.getElementById("theme-icon");
  const mobileIcon = document.getElementById("mobile-theme-icon");
  const currentTheme = html.getAttribute("data-theme");

  if (currentTheme === "dark") {
    html.removeAttribute("data-theme");
    icon.innerHTML = '<i class="fa-light fa-sun-bright"></i>';
    if (mobileIcon)
      mobileIcon.innerHTML = '<i class="fa-light fa-sun-bright"></i>';
    localStorage.setItem("theme", "light");
  } else {
    html.setAttribute("data-theme", "dark");
    icon.innerHTML = '<i class="fa-thin fa-moon"></i>';
    if (mobileIcon) mobileIcon.innerHTML = '<i class="fa-thin fa-moon"></i>';
    localStorage.setItem("theme", "dark");
  }
}

// Expand/Collapse state tracker
let isExpanded = false;

function toggleExpandCollapse() {
  if (isExpanded) {
    collapseAll();
    isExpanded = false;
  } else {
    expandAll();
    isExpanded = true;
  }
}

// Toggle mobile menu
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("active");
}

// Close mobile menu when clicking outside
document.addEventListener("click", function (event) {
  const mobileMenu = document.getElementById("mobileMenu");
  const appbar = document.querySelector(".mobile-appbar");
  if (
    !appbar.contains(event.target) &&
    mobileMenu.classList.contains("active")
  ) {
    mobileMenu.classList.remove("active");
  }
});

// Show toast notification
function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <i class="fas fa-${type === "success" ? "check-circle" : type === "warning" ? "exclamation-circle" : type === "error" ? "times-circle" : "info-circle"}"></i>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "toastIn 0.3s ease reverse";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Modal functions
function openModal(type) {
  const overlay = document.getElementById("modalOverlay");
  const title = document.getElementById("modalTitle");
  const body = document.getElementById("modalBody");

  switch (type) {
    case "shortcuts":
      title.textContent = "Keyboard Shortcuts";
      body.innerHTML = `
        <div class="shortcuts-list">
          <div class="shortcut-item">
            <span>Search</span>
            <div class="shortcut-keys"><span class="key">Ctrl</span><span class="key">/</span></div>
          </div>
          <div class="shortcut-item">
            <span>Previous Page</span>
            <div class="shortcut-keys"><span class="key">←</span></div>
          </div>
          <div class="shortcut-item">
            <span>Next Page</span>
            <div class="shortcut-keys"><span class="key">→</span></div>
          </div>
          <div class="shortcut-item">
            <span>Random Question</span>
            <div class="shortcut-keys"><span class="key">R</span></div>
          </div>
          <div class="shortcut-item">
            <span>Toggle Theme</span>
            <div class="shortcut-keys"><span class="key">T</span></div>
          </div>
          <div class="shortcut-item">
            <span>Toggle Expand All / Collapse All</span>
            <div class="shortcut-keys"><span class="key">E</span></div>
          </div>
          <div class="shortcut-item">
            <span>Quiz Mode</span>
            <div class="shortcut-keys"><span class="key">Q</span></div>
          </div>
        </div>
      `;
      break;
    case "jump":
      title.textContent = "Jump to Question";
      body.innerHTML = `
        <p>Enter question number (1-${questionsData.length}):</p>
        <div class="jump-input-group">
          <input type="number" id="jumpInput" min="1" max="${questionsData.length}" placeholder="e.g., 15" autofocus>
          <button class="btn btn-primary" onclick="jumpToQuestion()">
            <i class="fas fa-arrow-right"></i> Go
          </button>
        </div>
      `;
      setTimeout(() => document.getElementById("jumpInput")?.focus(), 100);
      break;
  }

  overlay.classList.add("active");
}

function closeModal(event) {
  if (!event || event.target.id === "modalOverlay") {
    document.getElementById("modalOverlay").classList.remove("active");
  }
}

function jumpToQuestion() {
  const input = document.getElementById("jumpInput");
  const id = parseInt(input.value);

  if (id >= 1 && id <= questionsData.length) {
    closeModal();

    state.searchQuery = "";
    state.filter = "all";
    document.getElementById("searchInput").value = "";
    document.getElementById("filterSelect").value = "all";

    const pageIndex =
      state.questionsPerPage === "all"
        ? 1
        : Math.ceil(id / state.questionsPerPage);
    state.currentPage = pageIndex;

    renderQuestions();

    setTimeout(() => {
      const card = document.querySelector(`[data-id="${id}"]`);
      if (card) {
        card.scrollIntoView({ behavior: "smooth", block: "center" });
        state.expandedQuestions.add(id);
        renderQuestions();
      }
    }, 100);
  } else {
    showToast("Invalid question number", "error");
  }
}

// Back to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Scroll handler
window.addEventListener("scroll", () => {
  const backToTop = document.getElementById("backToTop");
  if (window.scrollY > 300) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }

  // Update reading progress
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const progress = (window.scrollY / scrollHeight) * 100;
  document.getElementById("progressBar").style.width =
    `${Math.min(progress, 100)}%`;
});

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  // Don't trigger if typing in input
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
    if (e.key === "Escape") {
      e.target.blur();
      closeModal();
    }
    return;
  }

// Updated keyboard handler
switch (e.key) {
  case "/":
    if (e.ctrlKey) {
      e.preventDefault();
      document.getElementById("searchInput").focus();
    }
    break;
  case "ArrowLeft":
    changePage(state.currentPage - 1);
    break;
  case "ArrowRight":
    changePage(state.currentPage + 1);
    break;
  case "r":
  case "R":
    randomQuestion();
    break;
  case "t":
  case "T":
    toggleTheme();
    break;
  case "e":
  case "E":
    if (e.ctrlKey) {
      e.preventDefault();
      toggleExpandCollapse();
    }
    break;
  case "q":
  case "Q":
    toggleQuizMode();
    break;
  case "Escape":
    closeModal();
    break;
}
});

// Initialize
function init() {
  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    document.getElementById("theme-icon").innerHTML =
      '<i class="fa-thin fa-moon"></i>';
    const mobileIcon = document.getElementById("mobile-theme-icon");
    if (mobileIcon) mobileIcon.innerHTML = '<i class="fa-thin fa-moon"></i>';
  } else {
    document.getElementById("theme-icon").innerHTML =
      '<i class="fa-light fa-sun-bright"></i>';
    const mobileIcon = document.getElementById("mobile-theme-icon");
    if (mobileIcon)
      mobileIcon.innerHTML = '<i class="fa-light fa-sun-bright"></i>';
  }

  // Render questions
  renderQuestions();

  // Check for resume
  checkResume();

  // Show welcome toast
  showToast("Welcome! Press ? for keyboard shortcuts", "info");
}

init();
