const persianUsers = [
  {
    id: 1,
    name: "محمد رضایی",
    birthDate: "۱۳۶۵/۱۲/۰۳",
    age: 38,
    balance: 12500000,
    education: "کارشناسی ارشد",
    accountNumber: "IR620570028180010267147101",
  },
  {
    id: 2,
    name: "فاطمه محمدی",
    birthDate: "۱۳۷۵/۰۸/۲۲",
    age: 28,
    balance: 8500000,
    education: "کارشناسی",
    accountNumber: "IR520570028380010267147102",
  },
  {
    id: 3,
    name: "علی کریمی",
    birthDate: "۱۳۶۰/۱۱/۰۵",
    age: 43,
    balance: 32000000,
    education: "دکتری",
    accountNumber: "IR120570028480010267147103",
  },
  {
    id: 4,
    name: "زهرا احمدی",
    birthDate: "۱۳۷۲/۰۶/۱۸",
    age: 31,
    balance: 15600000,
    education: "کارشناسی ارشد",
    accountNumber: "IR820570028580010267147104",
  },
  {
    id: 5,
    name: "رضا قاسمی",
    birthDate: "۱۳۶۸/۰۵/۳۰",
    age: 35,
    balance: 9800000,
    education: "کارشناسی",
    accountNumber: "IR220570028680010267147105",
  },
  {
    id: 6,
    name: "سارا امینی",
    birthDate: "۱۳۷۸/۰۲/۱۲",
    age: 25,
    balance: 5400000,
    education: "دیپلم",
    accountNumber: "IR320570028780010267147106",
  },
  {
    id: 7,
    name: "حسین نوروزی",
    birthDate: "۱۳۵۸/۱۲/۲۳",
    age: 45,
    balance: 45000000,
    education: "دکتری",
    accountNumber: "IR420570028880010267147107",
  },
  {
    id: 8,
    name: "نرگس جعفری",
    birthDate: "۱۳۷۰/۰۴/۰۸",
    age: 33,
    balance: 17800000,
    education: "کارشناسی ارشد",
    accountNumber: "IR520570028980010267147108",
  },
  {
    id: 9,
    name: "مجتبی رحیمی",
    birthDate: "۱۳۶۹/۰۵/۱۹",
    age: 40,
    balance: 22000000,
    education: "کارشناسی",
    accountNumber: "IR620570029080010267147109",
  },
  {
    id: 10,
    name: "مریم حسینی",
    birthDate: "۱۳۷۴/۱۰/۱۱",
    age: 27,
    balance: 7600000,
    education: "کارشناسی",
    accountNumber: "IR720570029180010267147110",
  },
  {
    id: 11,
    name: "امیرحسین مرادی",
    birthDate: "۱۳۶۹/۰۵/۱۹",
    age: 34,
    balance: 18900000,
    education: "کارشناسی ارشد",
    accountNumber: "IR820570029280010267147111",
  },
  {
    id: 12,
    name: "سپیده قربانی",
    birthDate: "۱۳۷۳/۰۷/۲۲",
    age: 30,
    balance: 9200000,
    education: "کارشناسی",
    accountNumber: "IR920570029380010267147112",
  },
  {
    id: 13,
    name: "کاظم یوسفی",
    birthDate: "۱۳۷۹/۰۹/۰۵",
    age: 44,
    balance: 38500000,
    education: "دکتری",
    accountNumber: "IR030570029480010267147113",
  },
  {
    id: 14,
    name: "ناهید رنجبر",
    birthDate: "۱۳۷۱/۱۱/۱۱",
    age: 32,
    balance: 14500000,
    education: "کارشناسی ارشد",
    accountNumber: "IR130570029580010267147114",
  },
  {
    id: 15,
    name: "مهدی صالحی",
    birthDate: "۱۳۶۷/۰۲/۲۷",
    age: 36,
    balance: 11200000,
    education: "کارشناسی",
    accountNumber: "IR230570029680010267147115",
  },
  {
    id: 16,
    name: "لیلا موسوی",
    birthDate: "۱۳۷۷/۰۴/۰۳",
    age: 26,
    balance: 6800000,
    education: "فوق دیپلم",
    accountNumber: "IR330570029780010267147116",
  },
  {
    id: 17,
    name: "عباس بهرامی",
    birthDate: "۱۳۶۱/۰۶/۱۴",
    age: 42,
    balance: 27500000,
    education: "دکتری",
    accountNumber: "IR430570029880010267147117",
  },
  {
    id: 18,
    name: "نگین علیزاده",
    birthDate: "۱۳۷۴/۰۸/۲۹",
    age: 29,
    balance: 10500000,
    education: "کارشناسی",
    accountNumber: "IR530570029980010267147118",
  },
  {
    id: 19,
    name: "محسن جلالی",
    birthDate: "۱۳۶۴/۱۰/۱۷",
    age: 39,
    balance: 19800000,
    education: "کارشناسی ارشد",
    accountNumber: "IR630570030080010267147119",
  },
  {
    id: 20,
    name: "الهه محمودی",
    birthDate: "۱۳۷۹/۱۲/۰۵",
    age: 24,
    balance: 4900000,
    education: "دیپلم",
    accountNumber: "IR730570030180010267147120",
  },
  {
    id: 21,
    name: "رحمان شفیعی",
    birthDate: "۱۳۶۲/۰۸/۰۵",
    age: 41,
    balance: 23500000,
    education: "کارشناسی",
    accountNumber: "IR830570030280010267147121",
  },
  {
    id: 22,
    name: "پریسا رحمانی",
    birthDate: "۱۳۸۱/۱۲/۱۲",
    age: 31,
    balance: 16200000,
    education: "کارشناسی ارشد",
    accountNumber: "IR930570030380010267147122",
  },
  {
    id: 23,
    name: "جواد امیری",
    birthDate: "۱۳۷۹/۱۱/۱۰",
    age: 37,
    balance: 13200000,
    education: "کارشناسی",
    accountNumber: "IR040570030480010267147123",
  },
  {
    id: 24,
    name: "سمیرا کاظمی",
    birthDate: "۱۳۷۶/۱۱/۰۷",
    age: 23,
    balance: 4100000,
    education: "دیپلم",
    accountNumber: "IR140570030580010267147124",
  },
  {
    id: 25,
    name: "حیدر محمدی",
    birthDate: "۱۳۸۰/۰۵/۱۷",
    age: 46,
    balance: 51000000,
    education: "دکتری",
    accountNumber: "IR240570030680010267147125",
  },
];

let currentPage = 1;
const rowsPerPage = 10;
let isSearching = false;
let searchResults = [];

document.addEventListener("DOMContentLoaded", ()=> {
  loadTableData();
  setupSearch();
  setupModalEvents();
});

function loadTableData() {
  const tbody = document.getElementById("table-body");
  if (!tbody) return;

  const usersToShow = isSearching ? searchResults : persianUsers;
  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const paginatedUsers = usersToShow.slice(start, end);

  tbody.innerHTML = "";

  if (paginatedUsers.length === 0) {
    tbody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 20px; color: #666;">
                    ${isSearching ? "نتیجه‌ای برای جستجوی شما یافت نشد." : "هیچ داده‌ای یافت نشد."}
                </td>
            </tr>
        `;
    return;
  }

  paginatedUsers.forEach((user, index) => {
    const actualIndex = start + index;
    const row = document.createElement("tr");

    row.style.backgroundColor = "white";

    row.innerHTML = `
            <td>${actualIndex + 1}</td>
            <td style=" font-weight: 500;">${user.name}</td>
            <td style=" direction: ltr;">${user.birthDate.toLocaleString("fa-IR")}</td>
            <td style=" direction: ltr;">${user.age.toLocaleString("fa-IR")}</td>
            <td style=" direction: ltr;">${user.balance.toLocaleString("fa-IR")}</td>
            <td style=" direction: ltr;">${user.education}</td>
            <td style=" direction: ltr;">${user.accountNumber}</td>
        `;

    row.addEventListener("click", function () {
      openCardModal(user);
    });

    row.onmouseenter = function () {
      this.style.backgroundColor = "#f9f9f9";
      this.style.cursor = "pointer";
    };

    row.onmouseleave = function () {
      this.style.backgroundColor = "white";
    };

    tbody.appendChild(row);
  });

  createPagination();
}
function createPagination() {
  const tableSection2 = document.querySelector(".table-section-2");
  if (!tableSection2) return;

  const oldPagination = document.getElementById("pagination");
  if (oldPagination) {
    oldPagination.remove();
  }

  const usersToShow = isSearching ? searchResults : persianUsers;
  const totalPages = Math.ceil(usersToShow.length / rowsPerPage);

  if (totalPages <= 0) return;

  const paginationHTML = `
        <div class="pagination" id="pagination">
            <!-- فلش راست برای "قبلی" -->
            <button class="pagination-btn prev-btn" id="prev-btn" ${currentPage === 1 ? "disabled" : ""} title="صفحه قبلی">
                <svg class="arrow-icon" width="20" height="20" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="currentColor"/>
                </svg>
            </button>
            
            <div class="page-numbers" id="page-numbers">
                ${Array.from({ length: totalPages }, (_, i) => i + 1)
                  .map(
                    (page) => `
                        <button class="page-btn ${page === currentPage ? "active" : ""}" 
                                data-page="${page}"
                                onclick="changePage(${page})"
                                title="صفحه ${page.toLocaleString("fa-IR")}">
                            ${page.toLocaleString("fa-IR")}
                        </button>
                    `,
                  )
                  .join("")}
            </div>
            
            <!-- فلش چپ برای "بعدی" -->
            <button class="pagination-btn next-btn" id="next-btn" ${currentPage === totalPages ? "disabled" : ""} title="صفحه بعدی">
                <svg class="arrow-icon" width="20" height="20" viewBox="0 0 24 24">
                    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" fill="currentColor"/>
                </svg>
            </button>
        </div>
    `;

  tableSection2.insertAdjacentHTML("beforeend", paginationHTML);

  document.getElementById("prev-btn").addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--;
      loadTableData();
    }
  });

  document.getElementById("next-btn").addEventListener("click", function () {
    if (currentPage < totalPages) {
      currentPage++;
      loadTableData();
    }
  });
}

window.changePage = function (page) {
  currentPage = page;
  loadTableData();
};

function setupSearch() {
  const searchInput = document.getElementById("searchinput");
  if (!searchInput) return;

  let searchTimeout;

  searchInput.addEventListener("input", function (e) {
    const searchTerm = e.target.value.trim();

    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
      performRealTimeSearch(searchTerm);
    }, 250);
  });

  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      searchInput.value = "";
      performRealTimeSearch("");
    }
  });
}

function performRealTimeSearch(searchTerm) {
  if (searchTerm === "") {
    isSearching = false;
    searchResults = [];
    currentPage = 1;
  } else {
    const term = searchTerm.toLowerCase();
    searchResults = persianUsers.filter((user) =>
      user.name.toLowerCase().includes(term),
    );
    isSearching = true;
    currentPage = 1;
  }

  loadTableData();
}

function openCardModal(user) {
  const modal = document.getElementById("cardModal");
  const modalTitle = document.querySelector(".modal-title");
  const cardList = document.querySelector(".card-list");

  modalTitle.textContent = `شماره حساب های ${user.name}`;

  const cardNumbers = [
    "5892" + user.id.toString().padStart(4, "0") + "12345678",
    "6037" + (user.id * 123).toString().padStart(12, "0").slice(0, 12),
    "5022" + (user.id * 456).toString().padStart(12, "0").slice(0, 12),
  ];

  cardList.innerHTML = "";

  cardNumbers.forEach((cardNumber) => {
    const formattedCard = cardNumber.replace(/(\d{4})(?=\d)/g, "$1 ");

    const cardItem = document.createElement("div");
    cardItem.className = "card-item";
    cardItem.setAttribute("data-card", cardNumber);
    cardItem.innerHTML = `
            <span class="card-number">${formattedCard}</span>
            <button class="copy-btn">📋</button>
        `;

    cardItem.addEventListener("click", function (e) {
      if (!e.target.classList.contains("copy-btn")) {
        copyToClipboard(cardNumber);
      }
    });

    const copyBtn = cardItem.querySelector(".copy-btn");
    copyBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      copyToClipboard(cardNumber);
    });

    cardList.appendChild(cardItem);
  });

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      showCopiedMessage(" شماره کارت کپی شد");
    })
    .catch((err) => {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      showCopiedMessage(" شماره کارت کپی شد");
    });
}

function showCopiedMessage(message) {
  const oldMessage = document.querySelector(".copied-message");
  if (oldMessage) oldMessage.remove();

  const messageDiv = document.createElement("div");
  messageDiv.className = "copied-message";
  messageDiv.textContent = message;
  document.body.appendChild(messageDiv);

  setTimeout(() => {
    if (messageDiv.parentNode) {
      messageDiv.style.opacity = "0";
      setTimeout(() => {
        if (messageDiv.parentNode) {
          messageDiv.parentNode.removeChild(messageDiv);
        }
      }, 500);
    }
  }, 2000);
}

function closeCardModal() {
  const modal = document.getElementById("cardModal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

function setupModalEvents() {
  const closeBtn = document.querySelector(".close-modal");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeCardModal);
  }

  const confirmBtn = document.getElementById("confirmModal");
  if (confirmBtn) {
    confirmBtn.addEventListener("click", closeCardModal);
  }

  const modal = document.getElementById("cardModal");
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === this) {
        closeCardModal();
      }
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeCardModal();
    }
  });
}

window.addEventListener("load", function () {
  const exitButton = document.querySelector(".exit");

  if (exitButton) {
    exitButton.addEventListener("click", function () {
      if (confirm("آیا از خارج شدن اطمینان دارید؟")) {
        window.location.href = "index.html";
      }
    });
  }
});

window.showPage = function (page) {
  const totalPages = Math.ceil(persianUsers.length / rowsPerPage);
  if (page >= 1 && page <= totalPages) {
    currentPage = page;
    loadTableData();
  }
};

window.showAll = function () {
  currentPage = 1;
  isSearching = false;
  searchResults = [];
  const searchInput = document.getElementById("username");
  if (searchInput) searchInput.value = "";
  loadTableData();
};

window.getPageInfo = function () {
  const usersToShow = isSearching ? searchResults : persianUsers;
  const totalPages = Math.ceil(usersToShow.length / rowsPerPage);
  return {
    currentPage,
    totalPages,
    isSearching,
    totalUsers: usersToShow.length,
  };
};
