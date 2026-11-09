const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

const pad = (value) => String(value).padStart(2, "0");

$("#year").textContent = new Date().getFullYear();

const siteHeader = $("#siteHeader");
const navToggle = $("#navToggle");
const mainNav = $("#mainNav");

const setNavOpen = (open) => {
  navToggle.setAttribute("aria-expanded", String(open));
  mainNav.classList.toggle("is-open", open);
  document.body.classList.toggle("nav-open", open);
};

navToggle.addEventListener("click", () => {
  setNavOpen(navToggle.getAttribute("aria-expanded") !== "true");
});

$$("a", mainNav).forEach((link) => {
  link.addEventListener("click", () => setNavOpen(false));
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) setNavOpen(false);
});

const onScroll = () => siteHeader.classList.toggle("scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (navToggle.getAttribute("aria-expanded") === "true") {
    setNavOpen(false);
    navToggle.focus();
  }
});

const toast = $("#toast");
let toastTimer = null;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
    toastTimer = null;
  }, 4200);
}

const countdown = $("#countdown");
if (countdown) {
  const units = {
    days: $('[data-unit="days"]', countdown),
    hours: $('[data-unit="hours"]', countdown),
    minutes: $('[data-unit="minutes"]', countdown),
    seconds: $('[data-unit="seconds"]', countdown),
  };
  const deadline = Date.now() + (2 * 86400 + 6 * 3600 + 42 * 60 + 18) * 1000;

  const tick = () => {
    let remaining = Math.max(0, Math.floor((deadline - Date.now()) / 1000));
    const days = Math.floor(remaining / 86400);
    remaining %= 86400;
    const hours = Math.floor(remaining / 3600);
    remaining %= 3600;
    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;
    units.days.textContent = pad(days);
    units.hours.textContent = pad(hours);
    units.minutes.textContent = pad(minutes);
    units.seconds.textContent = pad(seconds);
  };

  tick();
  setInterval(tick, 1000);
}

const contactForm = $("#contactForm");
const contactName = $("#cName");
const contactContact = $("#cContact");
const contactService = $("#cService");
const contactMessage = $("#cMessage");
const contactNote = $("#contactNote");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = contactName.value.trim();
  const contact = contactContact.value.trim();

  if (!name) {
    contactNote.textContent = "Please enter your full name.";
    contactNote.classList.remove("success");
    contactName.focus();
    return;
  }

  if (!contact) {
    contactNote.textContent = "Please add a phone number or email so we can reach you.";
    contactNote.classList.remove("success");
    contactContact.focus();
    return;
  }

  const lines = [
    "Hello Peace Be Still Travels & Consult,",
    "",
    `Name: ${name}`,
    `Contact: ${contact}`,
    `Service: ${contactService.value}`,
  ];
  const message = contactMessage.value.trim();
  if (message) lines.push(`Message: ${message}`);

  const url = `https://wa.me/2349156432511?text=${encodeURIComponent(lines.join("\n"))}`;
  window.open(url, "_blank", "noopener");
  contactNote.textContent = "Opening WhatsApp with your enquiry. You can also call 0915 643 2511.";
  contactNote.classList.add("success");
});

const newsletterForm = $("#newsletterForm");
const newsletterNote = $("#newsletterNote");
const emailInput = $("#email");

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = emailInput.value.trim();
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
  if (!valid) {
    newsletterNote.textContent = "Please enter a valid email address.";
    newsletterNote.classList.remove("success");
    emailInput.focus();
    return;
  }
  newsletterNote.textContent = "You're on the list! Check your inbox to confirm your subscription.";
  newsletterNote.classList.add("success");
  emailInput.value = "";
  showToast("Subscribed — travel updates are on their way.");
});

const revealItems = $$(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("in-view"));
}
