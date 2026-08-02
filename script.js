// تحديث الساعة كل ثانية
const clockEl = document.getElementById("clock");

function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString("ar-SA", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  clockEl.textContent = time;
}

updateClock();
setInterval(updateClock, 1000);

// تحية عشوائية عند الضغط على الزر
const greetings = [
  "أهلاً بك 🌟",
  "يومك سعيد ☀️",
  "بالتوفيق دائمًا 🚀",
  "سعيد بوجودك هنا 💚",
  "حياك الله 🌿",
  "على بركة الله 🤲",
];

const btn = document.getElementById("greetBtn");
const msg = document.getElementById("msg");
let lastIndex = -1;

btn.addEventListener("click", () => {
  let index;
  do {
    index = Math.floor(Math.random() * greetings.length);
  } while (index === lastIndex && greetings.length > 1);
  lastIndex = index;

  msg.textContent = greetings[index];
  msg.style.animation = "none";
  // إعادة تشغيل التأثير
  void msg.offsetWidth;
  msg.style.animation = "rise 0.4s ease both";
});
