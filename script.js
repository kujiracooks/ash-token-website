// THE ASHLEY ARCHIVES — easy-edit launch config
const CONFIG = {
  // 1:00 PM Eastern Daylight Time on Aug 19, 2026 = 17:00 UTC.
  launchTimeUTC: "2026-08-19T17:00:00Z",

  // Paste the real CA here shortly before launch.
  contractAddress: "",

  // Paste the final Pump.fun URL here after deployment.
  pumpFunUrl: "",

  // Replace these with the real social links.
  xUrl: "https://x.com/",
  telegramUrl: "https://t.me/"
};

// Archive cards: replace placeholder content with sourced entries.
// "source" can be a news article, video, public post, podcast, etc.
const ARCHIVES = [
  {
    number: "001",
    date: "ADD DATE",
    label: "START HERE",
    title: "THE LORE BEGINS",
    summary: "Use this as the cleanest entry point for somebody who has somehow avoided the Ashley rabbit hole.",
    source: "#",
    sourceLabel: "ADD SOURCE →"
  },
  {
    number: "002",
    date: "ADD DATE",
    label: "CAUGHT ON LIVE",
    title: "THE TIMELINE STOPPED SCROLLING",
    summary: "Drop one of the classic public clips here, with enough context that a newcomer understands why everybody was talking.",
    source: "#",
    sourceLabel: "ADD SOURCE →"
  },
  {
    number: "003",
    date: "ADD DATE",
    label: "LONG-FORM LORE",
    title: "THE DEEP DIVE",
    summary: "Use this slot for major long-form coverage, commentary, documentary episodes, or a thorough explainer.",
    source: "#",
    sourceLabel: "ADD SOURCE →"
  },
  {
    number: "004",
    date: "ADD DATE",
    label: "RECEIPTS",
    title: "THE DOCUMENTED CHAPTER",
    summary: "For serious developments, summarize only what the linked source establishes and clearly distinguish allegations from confirmed facts.",
    source: "#",
    sourceLabel: "ADD SOURCE →"
  },
  {
    number: "005",
    date: "ADD DATE",
    label: "ARCHIVE DROP",
    title: "YES, THERE WAS MORE",
    summary: "Your next numbered archive entry goes here. Keep the format consistent so the site grows like a real magazine archive.",
    source: "#",
    sourceLabel: "ADD SOURCE →"
  },
  {
    number: "006",
    date: "ONGOING",
    label: "DEVELOPING",
    title: "THE LORE CONTINUES",
    summary: "Leave one card ready for whatever the internet hands you next. Because apparently it always does.",
    source: "#",
    sourceLabel: "SOURCE PENDING"
  }
];

function pad(value) {
  return String(Math.max(0, value)).padStart(2, "0");
}

function updateCountdown() {
  const launch = new Date(CONFIG.launchTimeUTC).getTime();
  const now = Date.now();
  let diff = launch - now;

  if (diff <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    revealLaunch();
    return;
  }

  const days = Math.floor(diff / 86400000);
  diff %= 86400000;
  const hours = Math.floor(diff / 3600000);
  diff %= 3600000;
  const minutes = Math.floor(diff / 60000);
  diff %= 60000;
  const seconds = Math.floor(diff / 1000);

  document.getElementById("days").textContent = pad(days);
  document.getElementById("hours").textContent = pad(hours);
  document.getElementById("minutes").textContent = pad(minutes);
  document.getElementById("seconds").textContent = pad(seconds);
}

function revealLaunch() {
  const caText = document.getElementById("caText");
  const tokenCa = document.getElementById("tokenCa");
  const pumpButton = document.getElementById("pumpButton");

  if (CONFIG.contractAddress.trim()) {
    caText.textContent = CONFIG.contractAddress.trim();
    tokenCa.textContent = CONFIG.contractAddress.trim();
  } else {
    caText.textContent = "[ PASTE CA INTO script.js ]";
    tokenCa.textContent = "PASTE CA INTO script.js";
  }

  if (CONFIG.pumpFunUrl.trim()) {
    pumpButton.href = CONFIG.pumpFunUrl;
    pumpButton.textContent = "VIEW ON PUMP.FUN →";
    pumpButton.classList.remove("disabled");
    pumpButton.removeAttribute("aria-disabled");
  } else {
    pumpButton.textContent = "PUMP.FUN LINK PENDING";
  }
}

function renderArchives() {
  const grid = document.getElementById("archiveGrid");
  grid.innerHTML = ARCHIVES.map(item => `
    <article class="archive-card">
      <div class="archive-image">ARCHIVE IMAGE / CLIP THUMBNAIL</div>
      <div class="archive-meta">
        <span>ARCHIVE #${item.number}</span>
        <span>${item.date}</span>
      </div>
      <p class="category">${item.label}</p>
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
      <a href="${item.source}" ${item.source === "#" ? "" : 'target="_blank" rel="noopener"'}>${item.sourceLabel}</a>
    </article>
  `).join("");
}

function applySocialLinks() {
  const links = [...document.querySelectorAll(".join-buttons a")];
  if (links[0]) links[0].href = CONFIG.xUrl;
  if (links[1]) links[1].href = CONFIG.telegramUrl;
}

renderArchives();
applySocialLinks();
updateCountdown();
setInterval(updateCountdown, 1000);
