/* =====================
   FIREBASE CONFIG
   ===================== */

const firebaseConfig = {
  apiKey: "AIzaSyC1lbZdSvmLjvGd-F4R5PYh1GM_ZuIh5pk",
  authDomain: "agapi-web.firebaseapp.com",
  databaseURL: "https://agapi-web-default-rtdb.firebaseio.com/",
  projectId: "agapi-web",
  storageBucket: "agapi-web.firebasestorage.app",
  messagingSenderId: "136289681212",
  appId: "1:136289681212:web:b2aa6677e1c11b1ca5e839",
  measurementId: "G-FF343LXJC6"
};

firebase.initializeApp(firebaseConfig);

const wishlistRef = firebase.database().ref("wishlist");

/* =====================
   THEME MODE
   ===================== */

const toggleThemeButton = document.getElementById("toggle-theme");
const themeStatus = document.getElementById("theme-status");

function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark");
    if (toggleThemeButton) toggleThemeButton.textContent = "☀️";
    if (themeStatus) themeStatus.textContent = "Dark";
  } else {
    document.body.classList.remove("dark");
    if (toggleThemeButton) toggleThemeButton.textContent = "🌙";
    if (themeStatus) themeStatus.textContent = "Light";
  }
}

const savedTheme = localStorage.getItem("agapi-theme") || "light";
applyTheme(savedTheme);

if (toggleThemeButton) {
  toggleThemeButton.addEventListener("click", () => {
    const nowDark = !document.body.classList.contains("dark");
    const newTheme = nowDark ? "dark" : "light";
    applyTheme(newTheme);
    localStorage.setItem("agapi-theme", newTheme);
  });
}

/* =====================
   HITUNG HARI JADIAN
   ===================== */

const hariBersamaEl = document.getElementById("hari-bersama");

if (hariBersamaEl) {
  const tanggalJadian = new Date("2025-06-08");
  const hariIni = new Date();

  tanggalJadian.setHours(0, 0, 0, 0);
  hariIni.setHours(0, 0, 0, 0);

  const bedaMs = hariIni - tanggalJadian;
  const bedaHari = Math.max(0, Math.floor(bedaMs / (1000 * 60 * 60 * 24)));

  hariBersamaEl.textContent = bedaHari;
}

/* =====================
   FORM KONTAK SIMULASI
   ===================== */

const contactForm = document.getElementById("contact-form");
const statusPesan = document.getElementById("status-pesan");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const pesan = document.getElementById("pesan").value.trim();

    if (!nama || !pesan) {
      statusPesan.textContent = "Isi dulu nama dan pesan ya 🙂";
      return;
    }

    statusPesan.textContent =
      `Makasih, ${nama}! Pesan kamu: "${pesan}" sudah masuk (simulasi).`;

    contactForm.reset();
  });
}

/* =====================
   RANDOM QUOTES
   ===================== */

const quoteEl = document.getElementById("random-quote");
if (quoteEl) {
  const quotes = [
    "Kamu itu rumah, tempat paling nyaman buat pulang.",
    "Aku nggak nyari yang sempurna, cuma yang pas. Dan itu kamu.",
    "Kalau senyum kamu bisa dijadiin lagu, bakal aku replay tiap malam.",
    "Dunia tetap ribut, tapi kalau ngobrol sama kamu rasanya lebih pelan.",
    "Kamu itu favoritku, tiap hari."
  ];

  quoteEl.textContent = quotes[Math.floor(Math.random() * quotes.length)];
}

/* =====================
   RANDOM ALASAN SAYANG
   ===================== */

const tombolAlasan = document.getElementById("btn-alasan");
const alasanTeks = document.getElementById("alasan-teks");

if (tombolAlasan && alasanTeks) {
  const alasanList = [
    "Kamu bikin aku ketawa bahkan pas lagi capek.",
    "Aku merasa didengerin beneran sama kamu.",
    "Versi paling jujur dari aku keluarnya kalau lagi ngobrol sama kamu.",
    "Kamu bisa marah tapi tetap peduli diam-diam.",
    "Kamu bikin hal receh jadi terasa spesial."
  ];

  tombolAlasan.addEventListener("click", () => {
    const idx = Math.floor(Math.random() * alasanList.length);
    alasanTeks.textContent = alasanList[idx];
  });
}

/* =====================
   FLOATING HEARTS
   ===================== */

setInterval(() => {
  const hearts = document.getElementById("floating-hearts");
  if (!hearts) return;

  const h = document.createElement("div");
  h.classList.add("heart");
  h.textContent = "❤";
  h.style.left = Math.random() * 100 + "%";
  h.style.fontSize = (14 + Math.random() * 10) + "px";

  hearts.appendChild(h);
  setTimeout(() => h.remove(), 4000);
}, 700);

/* =====================
   NOTIF RANDOM
   ===================== */

const notif = document.getElementById("notif-cute");
if (notif) {
  const notifList = [
    "Lagi mikirin kamu tiba-tiba.",
    "Minum air dulu!",
    "Kangen itu suka muncul random.",
    "Kamu udah senyum hari ini?",
    "Semoga harimu ringan ya."
  ];

  setInterval(() => {
    notif.textContent = notifList[Math.floor(Math.random() * notifList.length)];
    notif.style.display = "block";
    setTimeout(() => {
      notif.style.display = "none";
    }, 3500);
  }, 12000);
}

/* =====================
   SCROLL KE ATAS
   ===================== */

const scrollBtn = document.getElementById("scroll-top");
if (scrollBtn) {
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* =====================
   MODAL PESAN RAHASIA
   ===================== */

const modal = document.getElementById("secret-modal");
const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");

if (modal && openModal && closeModal) {
  openModal.onclick = () => modal.style.display = "flex";
  closeModal.onclick = () => modal.style.display = "none";

  modal.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
  };
}

/* =====================
   FAQ (KENAPA KAMU)
   ===================== */

const faqItems = document.querySelectorAll(".faq-item");
if (faqItems) {
  faqItems.forEach((item) => {
    const btn = item.querySelector(".faq-question");
    if (!btn) return;
    btn.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
}

/* =====================
   RELATIONSHIP PROGRESS
   ===================== */

const progressFill = document.getElementById("progress-fill");
const progressNote = document.getElementById("progress-note");

if (progressFill && progressNote && hariBersamaEl) {
  const days = parseInt(hariBersamaEl.textContent || "0", 10);
  const capped = Math.min(days, 365);     // anggap 365 hari = 100%
  const percent = Math.round((capped / 365) * 100);

  setTimeout(() => {
    progressFill.style.width = percent + "%";
  }, 500);

  progressNote.textContent = `Kurang lebih kita sudah jalan bareng sekitar ${days} hari (≈ ${percent}% dari satu tahun bareng).`;
}

/* =============================
   MOOD SECTION
   ============================= */

const moodSelect = document.getElementById("mood-select");
const moodResult = document.getElementById("mood-result");

if (moodSelect && moodResult) {
  moodSelect.addEventListener("change", () => {
    const mood = moodSelect.value;
    let text = "Belum pilih mood, tapi semoga harimu baik-baik saja.";

    if (mood === "happy") {
      text = "Seneng liat kamu happy. Semoga perasaan itu nggak cuma numpang lewat.";
    } else if (mood === "tired") {
      text = "Kalau capek, istirahat sebentar nggak apa-apa. Aku tetap di sini.";
    } else if (mood === "overthinking") {
      text = "Overthinking boleh sebentar, tapi jangan tinggal di sana lama-lama. Kamu nggak sendirian.";
    } else if (mood === "grateful") {
      text = "Kalau kamu lagi bersyukur, aku juga ikut bersyukur karena masih bisa sama kamu.";
    }

    moodResult.textContent = text;
  });
}

/* =============================
   PESAN HARIAN
   ============================= */

const pesanHarianEl = document.getElementById("pesan-harian");
const btnPesanHarian = document.getElementById("btn-pesan-harian");

if (pesanHarianEl && btnPesanHarian) {
  const pesanList = [
    "Hari ini nggak harus sempurna, yang penting kamu masih coba.",
    "Kalau lagi berat, pelan-pelan aja. Nggak apa-apa istirahat dulu.",
    "Kamu lebih kuat dari yang kamu pikirin selama ini.",
    "Kalau gak ada yang banggain kamu hari ini, anggap aja aku yang bangga.",
    "Terima kasih sudah bertahan sejauh ini."
  ];

  btnPesanHarian.addEventListener("click", () => {
    const idx = Math.floor(Math.random() * pesanList.length);
    pesanHarianEl.textContent = pesanList[idx];
  });
}

/* =============================
   WISHLIST (FIREBASE SYNC)
   ============================= */

const wishlistInput = document.getElementById("wishlist-input");
const wishlistName = document.getElementById("wishlist-name");
const wishlistAdd = document.getElementById("wishlist-add");
const wishlistList = document.getElementById("wishlist-list");
const wishlistCount = document.getElementById("wishlist-count");

function renderWishlist(snapshot) {
  if (!wishlistList) return;

  wishlistList.innerHTML = "";

  const data = snapshot.val();
  if (!data) {
    if (wishlistCount) wishlistCount.textContent = "0 hal";
    return;
  }

  const items = Object.entries(data)
    .sort((a, b) => (a[1].createdAt || 0) - (b[1].createdAt || 0));

  if (wishlistCount) wishlistCount.textContent = items.length + " hal";

  for (const [id, item] of items) {
    const li = document.createElement("li");

    const textWrap = document.createElement("div");
    textWrap.className = "wishlist-text";

    const mainText = document.createElement("span");
    mainText.textContent = item.text || "";

    const byText = document.createElement("span");
    byText.className = "wishlist-by";
    const author = item.by || "Anon";
    byText.textContent = `Ditambah oleh: ${author}`;

    textWrap.appendChild(mainText);
    textWrap.appendChild(byText);

    const del = document.createElement("button");
    del.textContent = "hapus";
    del.className = "wishlist-remove";
    del.onclick = () => wishlistRef.child(id).remove();

    li.appendChild(textWrap);
    li.appendChild(del);
    wishlistList.appendChild(li);
  }
}

if (wishlistRef && wishlistList) {
  wishlistRef.on("value", renderWishlist);
}

if (wishlistAdd && wishlistInput && wishlistName) {
  wishlistAdd.onclick = () => {
    const text = wishlistInput.value.trim();
    const by = wishlistName.value.trim() || "Anon";

    if (!text) return;

    wishlistRef.push({
      text: text,
      by: by,
      createdAt: Date.now()
    });

    wishlistInput.value = "";
  };

  wishlistInput.onkeydown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      wishlistAdd.click();
    }
  };
}
