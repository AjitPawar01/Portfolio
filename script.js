const SITE = {
    email: "pawarajit0724@gmail.com",
    whatsapp: "919130861778",
    links: {
        linkedin: "https://www.linkedin.com/in/ajit-pawar-3a1854257",
        github: "https://github.com/AjitPawar01",
        resume: "https://drive.google.com/file/d/1gmDIjNLaBAJebvBe17UrGyqUoKApqJH4/view?usp=sharing"
    },
    projects: [
        {
            id: "hailo", title: "hailO: Rides & Deliveries", category: "Mobile App", year: "",
            summary: "Cross-platform ride-booking and delivery app, live on Google Play and the App Store.",
            description: "I built the complete frontend of hailO in React Native, from a single codebase published on both Google Play and the Apple App Store. It has secure phone-based sign-in with OTP verification, plus trip booking and management flows connected to backend REST APIs. I integrated live ride tracking with maps and added a remotely configurable promo banner with native-driven animations, so campaigns update without an app release. I also handled the full production release: signing and build configuration, Google Play Data Safety compliance and an in-app account deletion flow.",
            tools: ["React Native", "REST APIs", "Maps"], liveUrl: "", sourceUrl: ""
        },
        {
            id: "expenses", title: "Company Expenses Tracker", category: "Android App", year: "2024–2025",
            summary: "Cloud-backed Android app for recording and reviewing company expenses.",
            description: "An Android application that simplifies company expense tracking. The front end is built in Java with Google Firebase as the backend, giving real-time data synchronisation, secure authentication and cloud data storage, so companies can record, calculate and view financial data securely.",
            tools: ["Java", "Firebase"], liveUrl: "", sourceUrl: ""
        },
        {
            id: "iot-scan", title: "Auto Temperature Scan Entry System", category: "IoT", year: "2023–2024",
            summary: "IoT entry system that screens temperature before granting access.",
            description: "An IoT-based system for automated temperature screening and access control. It monitors and records temperatures in real time so only people within a safe range are granted entry, supporting safety and health protocols in different environments.",
            tools: [], liveUrl: "", sourceUrl: ""
        },
        {
            id: "spiral", title: "Grid-Based Position Identification", category: "Algorithms", year: "2023–2024",
            summary: "Spiral-exploration approach to locating markers on a grid in fewer steps.",
            description: "The goal was to minimise the steps a subject needs to locate markers on a grid, while handling edge cases and keeping the computation efficient. The project strengthened my problem-solving, algorithm design and spatial reasoning.",
            tools: [], liveUrl: "", sourceUrl: ""
        },
        {
            id: "tour", title: "Tour Expenses Tracker", category: "Android App", year: "",
            summary: "Travel expense app with categories, live totals and trip summary reports.",
            description: "A travel-focused expense management app with categorized expense entry, real-time total calculations and detailed summary reports for trip budgeting. I focused on clean UI design, smooth navigation flows and efficient local data handling to make tracking reliable and easy to use.",
            tools: [], liveUrl: "", sourceUrl: ""
        },
        {
            id: "mern-jobs", title: "Job Portal & Resume Builder", category: "Web App", year: "",
            summary: "MERN-stack job search website and dynamic resume builder from a virtual internship.",
            description: "Built during my Software Development Internship at Infotact Solutions, Bengaluru (virtual program). The projects included a job portal and a dynamic resume builder, with a focus on responsive interfaces, application functionality and efficient data management.",
            tools: ["MongoDB", "Express.js", "React.js", "Node.js"], liveUrl: "", sourceUrl: ""
        }
    ],
    education: [
        [
            "Junior Mobile Application Developer",
            "Aug 2026 – Present",
            "Surve Infotech Pvt. Ltd., Kolhapur, Maharashtra. Developed and delivered the complete frontend of the hailO mobile application using React Native, implementing key features including user authentication, OTP verification, trip booking, and real-time ride tracking. Successfully launched the application on both Google Play and the Apple App Store. Diagnosed and resolved production issues across Android and iOS, designed an FCM-based push notification architecture, and implemented remotely configurable promotional banners using hosted JSON configurations, enabling campaign updates without requiring new app releases."
        ],
        [
            "Mobile Application Developer Intern",
            "Sep 2025 – Jul 2026",
            "Surve Infotech Pvt. Ltd., Kolhapur, Maharashtra. Worked alongside senior developers to understand scalable mobile application architecture, industry-standard development practices, and real-world project workflows. Contributed to the development and maintenance of 3+ production Android features as part of a 5-member development team. Improved application quality through debugging, bug fixing, code reviews, Git-based version control, and collaborative development practices."
        ],
        ["Software Development Intern", "Nov 2024 – Mar 2025", "Infotact Solutions, Bengaluru. Hands-on full-stack work with the MERN stack (MongoDB, Express.js, React.js, Node.js), building a job portal and a dynamic resume builder. Gained experience in debugging, testing, project development and collaborative workflows, alongside Java and Python."],
        ["B.Tech, Computer Science Engineering", "2022 – 2026", "D.Y. Patil Agriculture and Technical University, Talsande. Completed a Bachelor of Technology in Computer Science Engineering with a CGPA of 7.62. Developed a strong foundation in computer science fundamentals, programming languages, object-oriented programming, data structures, algorithms, database management, and system design. Explored various areas of software development and modern computing technologies, including Artificial Intelligence and cloud computing. Gained theoretical knowledge and practical problem-solving experience through academic assignments, technical projects, and programming activities. Built an understanding of software engineering principles, application development, and emerging technologies."],
        ["HSC", "2021 – 2022", "S. M. Lohia Jr. College, Kolhapur. Completed Higher Secondary Education with 72%, focusing primarily on Mathematics and Physics. Developed analytical thinking, logical reasoning, and quantitative problem-solving abilities through academic coursework. Built a foundation in scientific concepts and mathematical principles while improving critical thinking, time management, and independent learning skills. This academic experience helped strengthen my interest in technology, engineering, and computer science."],
        ["SSC", "2019 – 2020", "Madhyamik Vidhyalay, Nagaon. Completed Secondary School Education with 84%, establishing a strong academic foundation in Mathematics, Science, English, and other core subjects. Developed essential skills in logical thinking, communication, analytical reasoning, and problem-solving. Participated in academic learning activities that encouraged curiosity, discipline, consistency, and independent thinking. Built the educational foundation that motivated me to pursue higher studies in Computer Science Engineering."]
    ]
};
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* Motion toggle (persisted) */
const mo = true; // animations are always on

/* Reveal on scroll */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); const t = e.target; setTimeout(() => t.style.transitionDelay = "", 1300) } }), { threshold: .12 });
$$(".rv").forEach(el => io.observe(el));

/* Links from config */
$$("[data-link]").forEach(a => a.href = SITE.links[a.dataset.link]);
$("#mail").href = "mailto:" + SITE.email; $("#mail").textContent = SITE.email;
$("#wa").href = "https://wa.me/" + SITE.whatsapp + "?text=" + encodeURIComponent("Hello Ajit,");
$("#yr").textContent = new Date().getFullYear();

/* Education */
$("#edu").innerHTML = SITE.education.map((d, i) => `<details${i === 0 ? " open" : ""}><summary>${esc(d[0])}<small>${esc(d[1])}</small></summary><p>${esc(d[2])}</p></details>`).join("");

/* Projects: filter, search, detail dialog */
const P = SITE.projects; let cat = "All", q = "";
const cats = ["All", ...new Set(P.map(p => p.category))];
$("#chips").innerHTML = cats.map(c => `<button class="chip" type="button" aria-pressed="${c === cat}">${esc(c)}</button>`).join("") + `<input id="q" type="search" placeholder="Search projects" aria-label="Search projects">`;
function draw() {
    const list = P.filter(p => (cat === "All" || p.category === cat) && (p.title + " " + p.summary + " " + p.category + " " + p.tools.join(" ")).toLowerCase().includes(q));
    $("#grid").innerHTML = list.map((p, i) => `<button class="card rv" style="transition-delay:${i * 90}ms" type="button" data-id="${p.id}"><span class="num">0${i + 1}</span><span class="tag">${esc(p.category)}${p.year ? " · " + esc(p.year) : ""}</span><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p><span class="more">View details →</span></button>`).join("");
    $("#empty").hidden = list.length > 0;
    $$("#grid .rv").forEach(el => io.observe(el));
    dispatchEvent(new Event("redraw"));
}
$("#chips").onclick = e => { const b = e.target.closest(".chip"); if (!b) return; cat = b.textContent; $$(".chip").forEach(c => c.setAttribute("aria-pressed", c === b)); draw() };
$("#q").oninput = e => { q = e.target.value.trim().toLowerCase(); draw() };
draw();

const dlg = $("#dlg"); let opener;
$("#grid").onclick = e => {
    const c = e.target.closest(".card"); if (!c) return; opener = c;
    const p = P.find(x => x.id === c.dataset.id);
    $("#dbody").innerHTML = `<span class="tag">${esc(p.category)}${p.year ? " · " + esc(p.year) : ""}</span><h3 id="dt">${esc(p.title)}</h3><p>${esc(p.description)}</p>`
        + (p.tools.length ? `<ul class="tags">${p.tools.map(t => `<li>${esc(t)}</li>`).join("")}</ul>` : "")
        + (p.liveUrl ? `<p><a href="${esc(p.liveUrl)}" target="_blank" rel="noopener noreferrer">Live demo</a></p>` : "")
        + (p.sourceUrl ? `<p><a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener noreferrer">Source code</a></p>` : "");
    dlg.showModal();
};
dlg.addEventListener("close", () => opener && opener.focus());
dlg.addEventListener("click", e => { const r = dlg.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dlg.close() });
$("#dx").onclick = () => dlg.close();

/* Nav: mobile menu, active section, progress */
const nav = $("#nav"), mb = $("#menu");
function menu(o) { nav.classList.toggle("open", o); mb.setAttribute("aria-expanded", o); mb.textContent = o ? "Close" : "Menu"; document.body.style.overflow = o ? "hidden" : "" }
mb.onclick = () => menu(!nav.classList.contains("open"));
nav.onclick = e => { if (e.target.closest("a")) menu(false) };
addEventListener("keydown", e => { if (e.key === "Escape") menu(false) });
const links = $$("nav a");
const so = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id)) }), { rootMargin: "-45% 0px -50% 0px" });
$$("main section[id]").forEach(s => so.observe(s));
addEventListener("scroll", () => { const h = document.documentElement; $("#bar").style.width = (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight) * 100) + "%" }, { passive: true });

/* Contact form: opens the visitor's own email app (nothing is sent from here) */
$("#f").onsubmit = e => {
    e.preventDefault(); const f = e.target;
    location.href = "mailto:" + SITE.email + "?subject=" + encodeURIComponent("Portfolio enquiry from " + f.n.value.trim()) + "&body=" + encodeURIComponent(f.m.value.trim() + "\n\n" + f.n.value.trim() + " (" + f.e.value.trim() + ")");
    $("#st").textContent = "Opening your email app. Nothing is sent until you press send there.";
};

/* ===== Animations (all respect the Motion toggle) ===== */
const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;
const wait = ms => new Promise(r => setTimeout(r, ms));

/* Hero title: letters rise one by one */
(function (el) {
    let i = 0; el.setAttribute("aria-label", el.textContent);
    const walk = n => [...n.childNodes].forEach(c => {
        if (c.nodeType === 3) {
            const f = document.createDocumentFragment();
            [...c.textContent].forEach(ch => { const s = document.createElement("span"); s.className = "ch"; s.setAttribute("aria-hidden", "true"); s.style.setProperty("--i", i++); s.textContent = ch === " " ? "\u00a0" : ch; f.appendChild(s) });
            c.replaceWith(f)
        }
        else if (c.nodeType === 1) walk(c)
    });
    walk(el);
})($("h1"));

/* Hero entrance stagger */
$$(".hero .rv").forEach((el, i) => el.style.transitionDelay = (.5 + i * .12) + "s");

/* Typing line */
const phrases = ["mobile apps, built with care", "React Native · Java · Kotlin", "open to collaborations"], hand = $("#hand");
(async () => {
    let i = 0;
    while (true) {
        const t = phrases[i++ % phrases.length];
        hand.classList.toggle("caret", mo);
        if (!mo) { hand.textContent = t; await wait(2500); continue }
        for (let k = 1; k <= t.length && mo; k++) { hand.textContent = t.slice(0, k); await wait(55) }
        await wait(1800);
        for (let k = t.length; k > 0 && mo; k--) { hand.textContent = t.slice(0, k); await wait(28) }
    }
})();

/* Skills marquee */
const row = ["Android", "React Native", "Kotlin", "Java", "Dart", "Python", "Firebase", "MERN", "IoT"].map(x => `<span>${x}</span><b>✦</b>`).join("");
$("#mq").innerHTML = row + row;

/* Staggered tag pop-in */
$$(".tags li").forEach((li, i) => li.style.setProperty("--k", i % 8));

/* Magnetic buttons */
$$(".cta .btn,.links .btn").forEach(b => {
    b.addEventListener("pointermove", e => { if (!mo || !fine) return; const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .25}px,${(e.clientY - r.top - r.height / 2) * .35}px)` });
    b.addEventListener("pointerleave", () => b.style.transform = "");
});

/* Card tilt */
const gr = $("#grid");
gr.addEventListener("pointermove", e => {
    const c = e.target.closest(".card"); if (!c || !mo || !fine) return; const r = c.getBoundingClientRect();
    c.style.setProperty("--ry", ((e.clientX - r.left) / r.width - .5) * 10 + "deg"); c.style.setProperty("--rx", -((e.clientY - r.top) / r.height - .5) * 10 + "deg")
});
gr.addEventListener("pointerout", e => { const c = e.target.closest(".card"); if (c && !c.contains(e.relatedTarget)) { c.style.removeProperty("--rx"); c.style.removeProperty("--ry") } });

/* Portrait parallax + header hides while scrolling down */
let ly = 0;
addEventListener("scroll", () => {
    const y = scrollY, p = $(".pic");
    if (p) p.style.transform = mo ? `translateY(${Math.min(y, 700) * .08}px)` : "";
    $("header").classList.toggle("hide", mo && y > ly && y > 300 && !nav.classList.contains("open"));
    ly = y;
}, { passive: true });

/* ===== Loader + statement words ===== */
(function () {
    const L = document.createElement("div"); L.id = "load"; L.setAttribute("aria-hidden", "true");
    L.innerHTML = '<span>Loading Ajit</span><b id="pct">0</b>'; document.body.appendChild(L);
    const go = () => { L.classList.add("done"); document.documentElement.classList.add("ready"); setTimeout(() => L.remove(), 1100) };
    if (!mo) { go(); return }
    let n = 0; const t = setInterval(() => { n = Math.min(69, n + Math.ceil(Math.random() * 9)); $("#pct").textContent = n; if (n === 69) { clearInterval(t); setTimeout(go, 250) } }, 70);
})();
(function (el) {
    let i = 0;
    const walk = n => [...n.childNodes].forEach(c => {
        if (c.nodeType === 3) {
            const f = document.createDocumentFragment();
            c.textContent.split(/(\s+)/).forEach(t => {
                if (!t) return;
                if (/^\s+$/.test(t)) { f.appendChild(document.createTextNode(" ")); return }
                const s = document.createElement("span"); s.className = "w"; s.style.setProperty("--i", i++); s.textContent = t; f.appendChild(s)
            });
            c.replaceWith(f)
        }
        else if (c.nodeType === 1) walk(c)
    });
    walk(el); io.observe(el);
})($("#stm"));

/* ===== Scroll-driven motion (all off when Motion is off) ===== */
$$("#edu details").forEach((d, i) => d.style.setProperty("--k", i));
$("#mq2").innerHTML = ["Open to collaborations", "Let’s build something"].map(x => `<span>${x}</span><b>✦</b>`).join("").repeat(4);
$$("h2,.big").filter(e => !e.closest("#work")).forEach(e => e.dataset.p = ".1");
$(".hero h1").dataset.p = "-.12";
const sw = $$("#stm .w"), hw = $(".hero .wrap"), mqs = $$(".marquee");
let tick = false, lastY = scrollY, sk = 0;
const req = () => { if (!tick) { tick = true; requestAnimationFrame(frame) } };
function frame() {
    tick = false;
    const vh = innerHeight, y = scrollY, v = y - lastY; lastY = y;
    if (!mo) {
        $$("[data-p],.card").forEach(e => e.style.translate = "");
        sw.forEach(w => w.classList.add("lit")); hw.style.opacity = ""; mqs.forEach(m => m.style.transform = ""); sk = 0; return;
    }
    /* depth: headings and the closing line drift against the scroll; the project strip scrolls sideways */
    $$("[data-p]").forEach(e => {
        const r = e.getBoundingClientRect(); if (r.bottom < -300 || r.top > vh + 300) return;
        e.style.translate = "0 " + ((r.top + r.height / 2 - vh / 2) * parseFloat(e.dataset.p)).toFixed(1) + "px"
    });
    if (hs.classList.contains("pin")) {
        const r = hs.getBoundingClientRect(), pr = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - vh)));
        track.style.transform = "translateX(" + (-pr * maxX).toFixed(1) + "px)"; hsb.style.width = (pr * 100).toFixed(1) + "%";
    }
    /* statement words light up as you scroll through it */
    const s = $("#stm").getBoundingClientRect(), pr = Math.min(1, Math.max(0, (vh * .85 - s.top) / (s.height + vh * .3))), n = Math.round(pr * sw.length);
    sw.forEach((w, k) => w.classList.toggle("lit", k < n));
    /* marquees lean into the scroll direction */
    sk += (Math.max(-12, Math.min(12, v * -.3)) - sk) * .2;
    mqs.forEach(m => m.style.transform = "skewX(" + sk.toFixed(2) + "deg)");
    if (Math.abs(sk) > .05) req();
}
addEventListener("scroll", req, { passive: true }); addEventListener("resize", req);
req();

/* ===== Horizontal project strip: the section is pinned and scroll moves the cards sideways ===== */
const hs = $("#work"), track = $("#grid"), hsb = $("#hsb");
let maxX = 0;
function layoutHS() {
    if (!mo) { hs.classList.remove("pin"); hs.style.removeProperty("--hh"); track.style.transform = ""; maxX = 0; return }
    hs.classList.add("pin"); track.style.transform = "";
    maxX = Math.max(0, track.scrollWidth + innerWidth * .08 - innerWidth);
    hs.style.setProperty("--hh", (innerHeight + maxX) + "px");
    req();
}
addEventListener("redraw", layoutHS);
addEventListener("resize", layoutHS);
addEventListener("load", layoutHS);
layoutHS();
