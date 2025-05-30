// ハンバーガーメニューの開閉
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// フェードインアニメーション（スクロール時に表示）
const fadeIns = document.querySelectorAll(".fade-in");

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, {
  threshold: 0.1
});

fadeIns.forEach(el => {
  appearOnScroll.observe(el);
});

// フォーム送信後のダミー送信メッセージ（本番ではサーバー側が必要）
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("お問い合わせありがとうございます！内容を確認のうえご連絡いたします。");
    form.reset();
  });
}
