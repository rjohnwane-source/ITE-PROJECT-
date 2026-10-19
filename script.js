import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://yoqrjrqhnghdentkqhxs.supabase.co";
const SUPABASE_KEY = "sb_publishable__PJ-SXvQ8Jz2SUF3rqdRTA_hd-DREP-";
const FEEDBACK_EMAIL = "rjohnwane@gmail.com";
const FACEBOOK_URL = "https://www.facebook.com/share/1JsVn22bu1/";

const anime = [
  { id: 1, title: "Kimi ni Todoke", creator: "Karuho Shiina", genre: "Romance", format: "Manga", year: "2005", cover: "cover-01.png", synopsis: "Sawako begins high school with a reputation she never asked for. Patient friendships and a quiet connection with Kazehaya slowly help her find a voice of her own." },
  { id: 2, title: "Horimiya", creator: "HERO · Daisuke Hagiwara", genre: "Romance", format: "Manga", year: "2011", cover: "cover-02.png", synopsis: "At school, Hori and Miyamura seem to have nothing in common. Outside it, they discover the parts of themselves they usually keep hidden." },
  { id: 3, title: "A Sign of Affection", creator: "suu Morishita", genre: "Romance", format: "Manga", year: "2019", cover: "cover-03.png", synopsis: "A university student who is deaf meets a well-travelled classmate. Their growing bond opens a new way of seeing language, distance, and affection." },
  { id: 4, title: "My Love Story with Yamada-kun at Lv999", creator: "Mashiro", genre: "Romance", format: "Manga", year: "2019", cover: "cover-04.png", synopsis: "After a breakup, Akane logs into a game for comfort and meets the famously distant Yamada. A chance partnership begins to change both of their routines." },
  { id: 5, title: "Uzumaki", creator: "Junji Ito", genre: "Horror", format: "Manga", year: "1998", cover: "cover-05.jpg", synopsis: "A coastal town becomes consumed by spirals. As the obsession deepens, ordinary streets and familiar faces turn unnervingly strange." },
  { id: 6, title: "The Summer Hikaru Died", creator: "Mokumokuren", genre: "Horror", format: "Manga", year: "2021", cover: "cover-06.jpg", synopsis: "Yoshiki knows something returned from the mountains wearing his best friend's face. Even so, letting go of that friendship may be impossible." },
  { id: 7, title: "Another", creator: "Yukito Ayatsuji · Hiro Kiyohara", genre: "Horror", format: "Manga", year: "2010", cover: "cover-07.webp", synopsis: "A transfer student enters a class surrounded by an unsettling silence. A hidden rule and a chain of disasters point toward a mystery no one wants to name." },
  { id: 8, title: "Mieruko-chan", creator: "Tomoki Izumi", genre: "Horror", format: "Manga", year: "2018", cover: "cover-08.jpg", synopsis: "Miko can see terrifying spirits everywhere. Her survival strategy is simple: act as though she cannot see a thing." },
  { id: 9, title: "Monster", creator: "Naoki Urasawa", genre: "Mystery", format: "Manga", year: "1994", cover: "cover-09.jpg", synopsis: "A surgeon saves a young boy's life, only to confront the consequences years later when a chilling trail leads back to that operating room." },
  { id: 10, title: "Erased", creator: "Kei Sanbe", genre: "Mystery", format: "Manga", year: "2012", cover: "cover-10.jpg", synopsis: "Satoru is sent back to his childhood with a chance to prevent a tragedy. To change the future, he must face the fear his younger self never understood." },
  { id: 11, title: "The Apothecary Diaries", creator: "Natsu Hyūga · Nekokurage", genre: "Mystery", format: "Manga", year: "2017", cover: "cover-11.jpg", synopsis: "An observant apothecary is drawn into palace intrigues, applying sharp knowledge of medicine and poisons to mysteries inside the imperial court." },
  { id: 12, title: "Ron Kamonohashi’s Forbidden Deductions", creator: "Akira Amano", genre: "Mystery", format: "Manga", year: "2020", cover: "cover-12.jpg", synopsis: "A detective with a peculiar past joins forces with a police officer who needs help solving cases too strange for ordinary methods." },
  { id: 13, title: "Frieren: Beyond Journey’s End", creator: "Kanehito Yamada · Tsukasa Abe", genre: "Fantasy", format: "Manga", year: "2020", cover: "cover-13.jpg", synopsis: "After a hero's party defeats the Demon King, the elf mage Frieren begins a new journey and learns what a human lifetime can mean." },
  { id: 14, title: "Witch Hat Atelier", creator: "Kamome Shirahama", genre: "Fantasy", format: "Manga", year: "2016", cover: "cover-14.jpg", synopsis: "Coco discovers that magic can be drawn into being. Her first step into a workshop of witches also reveals rules that are dangerous to break." },
  { id: 15, title: "Yona of the Dawn", creator: "Mizuho Kusanagi", genre: "Fantasy", format: "Manga", year: "2009", cover: "cover-15.jpg", synopsis: "After losing her home in a coup, sheltered princess Yona sets out across her kingdom and begins to grow into a leader." },
  { id: 16, title: "The Ancient Magus’ Bride", creator: "Kore Yamazaki", genre: "Fantasy", format: "Manga", year: "2013", cover: "cover-16.jpg", synopsis: "Chise enters a world of fae, magic, and ancient bargains after becoming the apprentice and bride of an inhuman mage." },
  { id: 17, title: "Yotsuba&!", creator: "Kiyohiko Azuma", genre: "Slice of Life", format: "Manga", year: "2003", cover: "cover-17.jpg", synopsis: "Everyday life becomes an expedition when curious Yotsuba meets neighbours, new places, and the small surprises of childhood." },
  { id: 18, title: "Barakamon", creator: "Satsuki Yoshino", genre: "Slice of Life", format: "Manga", year: "2009", cover: "cover-18.jpg", synopsis: "A young calligrapher is sent to a remote island, where its lively residents challenge his expectations and reshape his art." },
  { id: 19, title: "Laid-Back Camp", creator: "Afro", genre: "Slice of Life", format: "Manga", year: "2015", cover: "cover-19.jpg", synopsis: "A group of friends finds warmth, food, and memorable views in quiet campsites across Japan." },
  { id: 20, title: "Skip and Loafer", creator: "Misaki Takamatsu", genre: "Slice of Life", format: "Manga", year: "2018", cover: "cover-20.jpg", synopsis: "Mitsumi leaves her rural hometown for high school in Tokyo. New classmates, awkward moments, and unexpected friendships shape each day." },
  { id: 21, title: "Dr. STONE", creator: "Riichiro Inagaki · Boichi", genre: "Sci-Fi", format: "Manga", year: "2017", cover: "cover-21.jpg", synopsis: "Thousands of years after humanity is petrified, Senku wakes and begins rebuilding civilization through science, one discovery at a time." },
  { id: 22, title: "Pluto", creator: "Naoki Urasawa · Osamu Tezuka", genre: "Sci-Fi", format: "Manga", year: "2003", cover: "cover-22.jpg", synopsis: "A detective robot investigates a series of killings targeting the world's most advanced robots and the humans connected to them." },
  { id: 23, title: "Astra Lost in Space", creator: "Kenta Shinohara", genre: "Sci-Fi", format: "Manga", year: "2016", cover: "cover-23.jpg", synopsis: "A school trip becomes a survival journey when a group of students is stranded far from home with only a damaged spaceship." },
  { id: 24, title: "Akira", creator: "Katsuhiro Otomo", genre: "Sci-Fi", format: "Manga", year: "1982", cover: "cover-24.jpg", synopsis: "In Neo-Tokyo, a biker and his friend become entangled in political unrest and psychic power that threatens the city itself." },
  { id: 25, title: "A Silent Voice", creator: "Yoshitoki Ōima", genre: "Drama", format: "Manga", year: "2013", cover: "cover-25.jpg", synopsis: "Years after bullying a deaf classmate, Shoya tries to make amends and learn what connection and forgiveness can require." },
  { id: 26, title: "March Comes in Like a Lion", creator: "Chica Umino", genre: "Drama", format: "Manga", year: "2007", cover: "cover-26.jpg", synopsis: "A young professional shogi player carries loneliness into every match until the warmth of a new household changes his world." },
  { id: 27, title: "Your Lie in April", creator: "Naoshi Arakawa", genre: "Drama", format: "Manga", year: "2011", cover: "cover-27.jpg", synopsis: "A former piano prodigy meets a free-spirited violinist who challenges him to return to music and confront a painful past." },
  { id: 28, title: "Spy × Family", creator: "Tatsuya Endo", genre: "Comedy", format: "Manga", year: "2019", cover: "cover-28.jpg", synopsis: "A master spy builds a make-believe family for a mission, unaware that his new daughter can read minds and his new wife is an assassin." },
  { id: 29, title: "Gintama", creator: "Hideaki Sorachi", genre: "Comedy", format: "Manga", year: "2003", cover: "cover-29.jpg", synopsis: "In an alternate Edo ruled by aliens, a freelance samurai and his odd-jobs crew stumble from absurd comedy into unexpectedly serious trouble." },
  { id: 30, title: "The Disastrous Life of Saiki K.", creator: "Shuichi Asou", genre: "Comedy", format: "Manga", year: "2012", cover: "cover-30.jpg", synopsis: "Psychic high-schooler Kusuo Saiki wants an ordinary, quiet life. His powers and unpredictable classmates make that nearly impossible." }
];

const genres = ["Romance", "Horror", "Mystery", "Fantasy", "Slice of Life", "Sci-Fi", "Drama", "Comedy"];
const state = { supabase: null, user: null, trackedReads: new Set() };

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const escapeHtml = (value = "") => String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
const params = () => new URLSearchParams(window.location.search);
// Keep Supabase return URLs inside this site when it is hosted in a GitHub Pages project subpath.
const appUrl = path => new URL(path, new URL(".", window.location.href)).href;
const titleFromParams = () => anime.find(item => item.id === Number(params().get("id"))) || anime[0];
const library = () => {
  const saved = state.user?.user_metadata?.pahina_library || {};
  return {
    favourites: Array.isArray(saved.favourites) ? saved.favourites : [],
    reading: saved.reading && typeof saved.reading === "object" ? saved.reading : {}
  };
};
const safeNext = () => {
  const next = params().get("next");
  return next && /^(dashboard|read|anime)\.html(?:\?.*)?$/.test(next) ? next : "dashboard.html";
};
const formatDate = value => value ? new Intl.DateTimeFormat("en", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value)) : "Not opened yet";
const hrefFor = item => `anime.html?id=${item.id}`;
const authHref = next => `account.html?next=${encodeURIComponent(next)}`;

async function initSupabase() {
  try {
    state.supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    const { data } = await state.supabase.auth.getSession();
    state.user = data.session?.user || null;
    state.supabase.auth.onAuthStateChange((_event, session) => {
      state.user = session?.user || null;
      renderChrome();
      renderPage();
    });
  } catch (error) {
    console.error("Pahina account service is unavailable.", error);
  }
}

async function saveLibrary(nextLibrary) {
  if (!state.supabase || !state.user) return false;
  const metadata = { ...(state.user.user_metadata || {}), pahina_library: nextLibrary };
  const { data, error } = await state.supabase.auth.updateUser({ data: metadata });
  if (error) {
    console.error(error);
    return false;
  }
  state.user = data.user;
  renderChrome();
  return true;
}

function renderChrome() {
  const header = $("[data-site-header]");
  const footer = $("[data-site-footer]");
  const page = document.body.dataset.page;
  const current = page === "anime" || page === "read" ? "shelf" : page;
  const accountLabel = state.user ? escapeHtml(state.user.user_metadata?.display_name || state.user.email?.split("@")[0] || "Your desk") : "Sign in";
  if (header) {
    header.innerHTML = `
      <div class="header-inner">
        <a class="logo" href="index.html" aria-label="Pahina home">Pahina<span>.</span></a>
        <nav class="site-nav" aria-label="Primary navigation">
          <a class="nav-link" href="index.html#shelf" ${current === "shelf" ? 'aria-current="page"' : ""}>The shelf</a>
          <a class="nav-link" href="genres.html" ${current === "genres" ? 'aria-current="page"' : ""}>Genres</a>
          <a class="nav-link" href="creators.html" ${current === "creators" ? 'aria-current="page"' : ""}>Creators</a>
          <a class="nav-link account-nav" href="${state.user ? "dashboard.html" : "account.html"}" ${current === "dashboard" || current === "account" ? 'aria-current="page"' : ""}>${accountLabel}</a>
          <button class="lamp-toggle" type="button" data-theme-toggle>Light</button>
        </nav>
      </div>`;
    $("[data-theme-toggle]", header)?.addEventListener("click", () => {
      const light = document.documentElement.dataset.theme === "light";
      document.documentElement.dataset.theme = light ? "" : "light";
      localStorage.setItem("pahina-theme", light ? "dark" : "light");
      $("[data-theme-toggle]", header).textContent = light ? "Light" : "Dark";
    });
  }
  if (footer) {
    footer.innerHTML = `
      <div class="footer-inner">
        <p class="footer-meta">Pahina. / Owned by John Wane Rivas · Published 2026</p>
        <div class="footer-links">
          <a href="privacy.html">Privacy</a>
          <div class="footer-social" aria-label="Social links">
            <a class="social-icon" href="${FACEBOOK_URL}" target="_blank" rel="noreferrer" aria-label="Pahina on Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8h2.75l.41-3H13.5V8.08c0-.87.24-1.46 1.49-1.46h1.79V3.94c-.31-.04-1.37-.13-2.6-.13-2.58 0-4.35 1.58-4.35 4.47V10H7.1v3h2.73v8h3.67z"/></svg>
            </a>
            <a class="social-icon" href="mailto:${FEEDBACK_EMAIL}" aria-label="Email Pahina">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"/></svg>
            </a>
          </div>
        </div>
      </div>`;
  }
  let mobileDock = $("[data-mobile-dock]");
  if (!mobileDock) {
    document.body.insertAdjacentHTML("beforeend", '<nav class="mobile-dock" data-mobile-dock aria-label="Mobile navigation"></nav>');
    mobileDock = $("[data-mobile-dock]");
  }
  mobileDock.innerHTML = `
    <a href="index.html" ${page === "home" ? 'aria-current="page"' : ""}><span aria-hidden="true">⌂</span><small>Home</small></a>
    <a href="index.html#shelf" ${current === "shelf" ? 'aria-current="page"' : ""}><span aria-hidden="true">▤</span><small>Shelf</small></a>
    <a href="genres.html" ${current === "genres" ? 'aria-current="page"' : ""}><span aria-hidden="true">◌</span><small>Genres</small></a>
    <a href="creators.html" ${current === "creators" ? 'aria-current="page"' : ""}><span aria-hidden="true">✦</span><small>Creators</small></a>
    <a href="${state.user ? "dashboard.html" : "account.html"}" ${current === "dashboard" || current === "account" ? 'aria-current="page"' : ""}><span aria-hidden="true">◒</span><small>${state.user ? "Desk" : "Account"}</small></a>`;
  if (localStorage.getItem("pahina-theme") === "light") {
    document.documentElement.dataset.theme = "light";
    $("[data-theme-toggle]", header).textContent = "Dark";
  }
}

function renderConsent() {
  const holder = $("[data-cookie-consent]");
  if (!holder || localStorage.getItem("pahina-cookie-choice")) return;
  holder.innerHTML = `
    <aside class="consent-card" data-consent-card aria-label="Cookie choices">
      <h2>Your Data. Your Choice.</h2>
      <p>We collect and process personal data using online tracking technologies, including cookies. Essential cookies keep account features working. Optional cookies can be chosen below. Read our <a href="privacy.html"><u>Privacy Policy</u></a> for details.</p>
      <div class="consent-settings"><label><input type="checkbox" checked disabled> Essential site functionality — always on</label><label><input type="checkbox" data-optional-cookie> Optional analytics and personalised advertising</label></div>
      <div class="consent-actions">
        <button type="button" data-consent="all">Accept all</button>
        <button type="button" data-consent="essential">Decline optional</button>
        <button type="button" data-consent-preferences>Change preferences</button>
      </div>
    </aside>`;
}

function cardMarkup(item, compact = false) {
  if (compact) {
    return `<a class="mini-anime" href="${hrefFor(item)}"><img src="${item.cover}" alt="${escapeHtml(item.title)} cover"><span><p class="meta">${escapeHtml(item.genre)}</p><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.creator)}</p></span></a>`;
  }
  return `<a class="anime-shelf-card" href="${hrefFor(item)}" data-shelf-card data-genre="${escapeHtml(item.genre)}"><img src="${item.cover}" alt="${escapeHtml(item.title)} cover" loading="lazy" decoding="async"><span class="anime-card-copy"><span class="meta">${escapeHtml(item.genre)} / ${item.year}</span><h3>${escapeHtml(item.title)}</h3></span></a>`;
}

function renderHome() {
  const featured = $("#featured-title");
  const shelf = $("#shelf");
  const spy = anime.find(item => item.id === 28);
  if (featured) {
    featured.innerHTML = `<p class="meta-line meta"><span>Featured reading</span><span>Chapter one</span></p><img class="featured-cover" src="${spy.cover}" alt="Spy × Family cover"><h2>${spy.title}</h2><p class="featured-author">By ${spy.creator}</p><p class="featured-synopsis">${spy.synopsis}</p><a class="button-dark" href="read.html?id=28">Open reading overview <span aria-hidden="true">↗</span></a>`;
  }
  if (shelf) shelf.innerHTML = anime.map(item => cardMarkup(item)).join("");
}

function renderGenres() {
  const area = $("#genre-index");
  if (!area) return;
  area.innerHTML = genres.map((genre, index) => {
    const items = anime.filter(item => item.genre === genre);
    return `<article class="genre-index-item"><button class="genre-row" type="button" data-genre-row="${genre}" aria-expanded="false" aria-controls="genre-${index}"><span class="genre-number meta">${String(index + 1).padStart(2, "0")}</span><span class="genre-name">${genre}</span><span class="genre-next">Open selection</span><span class="genre-count meta">${items.length} titles</span></button><div class="genre-expand" id="genre-${index}" hidden><div class="story-card-grid">${items.map(item => `<a class="story-card" href="${hrefFor(item)}"><img class="image-cover" src="${item.cover}" alt="${escapeHtml(item.title)} cover"><span class="story-card-content"><span class="meta">${item.format} / ${item.year}</span><h3>${escapeHtml(item.title)}</h3><p class="story-card-author">${escapeHtml(item.creator)}</p><span class="button-outline">Story information</span></span></a>`).join("")}</div></div></article>`;
  }).join("");
}

function renderAnime() {
  const area = $("[data-anime-area]");
  if (!area) return;
  const item = titleFromParams();
  const saved = library().favourites.includes(item.id);
  const readAction = item.id === 28
    ? `<a class="button" href="read.html?id=28">Read the overview <span aria-hidden="true">↗</span></a>`
    : "";
  const availability = item.id === 28
    ? `<div class="unavailable-panel"><strong>One reading preview is available.</strong><span>Spy × Family is the featured readable title on this student shelf.</span></div>`
    : `<div class="unavailable-panel"><strong>Chapters are not available yet.</strong><span>You can still explore this title’s information and save it to your dashboard.</span></div>`;
  area.innerHTML = `<a class="back-link" href="index.html#shelf">← Back to the shelf</a><section class="anime-detail"><div class="anime-detail-cover"><img src="${item.cover}" alt="${escapeHtml(item.title)} cover"></div><div><p class="eyebrow">${item.genre} / ${item.format}</p><h1 class="anime-detail-title">${escapeHtml(item.title)}</h1><p class="anime-detail-author">Created by ${escapeHtml(item.creator)}</p><p class="anime-detail-synopsis">${escapeHtml(item.synopsis)}</p><div class="detail-facts"><div class="detail-fact"><span class="meta">Format</span><strong>${item.format}</strong></div><div class="detail-fact"><span class="meta">Original run</span><strong>${item.year}</strong></div><div class="detail-fact"><span class="meta">Shelf genre</span><strong>${item.genre}</strong></div></div><div class="detail-actions">${readAction}<button class="button-outline favourite-button ${saved ? "is-saved" : ""}" type="button" data-favourite="${item.id}">${saved ? "Saved to favourites" : "Save to favourites"}</button></div>${availability}</div></section>`;
}

function renderReader() {
  const area = $("[data-reader-area]");
  if (!area) return;
  const item = anime.find(entry => entry.id === 28);
  if (!state.user) {
    area.innerHTML = `<section class="story-paper"><p class="eyebrow">Reader access</p><h1 class="story-title">Sign in to continue.</h1><p class="story-synopsis">Create an account or sign in before opening this reading preview. Your progress can then be saved to your desk.</p><p class="official-read"><a class="button-dark" href="${authHref("read.html?id=28")}">Sign in or create an account</a></p><a class="back-link" href="anime.html?id=28">← Back to story information</a></section>`;
    return;
  }
  area.innerHTML = `<a class="back-link" href="anime.html?id=28">← Back to story information</a><article class="story-paper"><p class="eyebrow">Spy × Family / featured reader</p><h1 class="story-title">${item.title}</h1><p class="story-byline">Created by ${item.creator}</p><p class="reader-notice">This page contains an original overview only. It does not reproduce the manga chapter. Read the official Chapter 1 through VIZ below.</p><figure class="story-figure"><img class="image-cover" src="${item.cover}" alt="Spy × Family cover"><figcaption>Featured title / progress saves to your account</figcaption></figure><section class="story-content"><h2 class="chapter-title">Chapter 1 — overview</h2><p>Agent Twilight is given a mission that requires a convincing family life. He takes the name Loid Forger and, under a deadline, adopts a little girl named Anya to help create the appearance of an ordinary home.</p><p>What Loid does not know is that Anya can read minds. The gap between his careful planning and what Anya understands makes their first steps as a family both tense and funny.</p><p>Their arrangement begins as a mission, but the chapter establishes the secret-filled dynamic at the centre of the series. Continue with the authorised edition for the full original chapter.</p></section><div class="story-end"><a class="text-link" href="https://www.viz.com/shonenjump/chapters/spy-x-family" target="_blank" rel="noreferrer">Read official Chapter 1 on VIZ ↗</a><button class="button-dark finish-story" type="button" data-finish-reading>Mark overview complete</button></div></article>`;
  markReading(item.id, 35);
}

function accountMarkup() {
  const confirmation = params().get("confirmed") === "1" ? "Your email is confirmed. You can now sign in." : "";
  const notice = params().get("notice") === "signin" ? "Sign in to save your reading progress." : "";
  return `<section class="auth-wrap"><div class="auth-intro"><div><p class="eyebrow">Your reading desk</p><h1>Keep your place.</h1></div><p>Sign in to save favourites, remember your latest reading activity, and send feedback.</p></div><div class="auth-book" data-auth-book data-view="login">
    <article class="auth-face auth-login"><aside class="auth-side"><span class="meta">Pahina account</span><h2>Your shelf,<br>kept close.</h2><p>Return whenever you want. Your saved titles and reading activity stay on your desk.</p><a class="text-link" href="index.html">← Back to home</a></aside><section class="auth-form-panel"><h2>Sign in</h2><p>Use the email and password registered to your account.</p><form class="auth-form" data-auth-form="login"><span class="auth-field"><label for="login-email">Email</label><input id="login-email" type="email" name="email" required autocomplete="email"></span><span class="auth-field"><label for="login-password">Password</label><input id="login-password" type="password" name="password" required autocomplete="current-password"></span><button class="button-dark" type="submit">Continue to your desk</button></form><button class="auth-switch" type="button" data-auth-view="forgot">Forgot password?</button><div class="oauth-line">or continue with</div><div class="oauth-buttons"><button class="oauth-button" type="button" data-oauth="google">Google</button><button class="oauth-button" type="button" data-oauth="facebook">Facebook</button></div><button class="auth-switch" type="button" data-auth-view="signup">Don’t have an account? Sign up</button><p class="auth-status ${confirmation || notice ? "success" : ""}" data-auth-status>${escapeHtml(confirmation || notice)}</p></section></article>
    <article class="auth-face auth-signup"><aside class="auth-side"><span class="meta">New account</span><h2>Start a<br>new chapter.</h2><p>Create your desk to save titles and continue where you left off.</p><a class="text-link" href="index.html">← Back to home</a></aside><section class="auth-form-panel"><h2>Create an account</h2><p>Use an email you can access for confirmation and recovery.</p><form class="auth-form" data-auth-form="signup"><span class="auth-field"><label for="signup-name">Your name</label><input id="signup-name" type="text" name="name" autocomplete="name"></span><span class="auth-field"><label for="signup-email">Email</label><input id="signup-email" type="email" name="email" required autocomplete="email"></span><span class="auth-field"><label for="signup-password">Password</label><input id="signup-password" type="password" name="password" required minlength="6" autocomplete="new-password"></span><button class="button-dark" type="submit">Create account</button></form><div class="oauth-line">or continue with</div><div class="oauth-buttons"><button class="oauth-button" type="button" data-oauth="google">Google</button><button class="oauth-button" type="button" data-oauth="facebook">Facebook</button></div><button class="auth-switch" type="button" data-auth-view="login">Already have an account? Sign in</button><p class="auth-status" data-auth-status></p></section></article>
    <article class="auth-face auth-forgot"><aside class="auth-side"><span class="meta">Password recovery</span><h2>Find your<br>way back.</h2><p>We will send password recovery instructions to your registered email.</p><a class="text-link" href="index.html">← Back to home</a></aside><section class="auth-form-panel"><h2>Forgot password?</h2><p>Enter the address connected to your Pahina account.</p><form class="auth-form" data-auth-form="forgot"><span class="auth-field"><label for="forgot-email">Email</label><input id="forgot-email" type="email" name="email" required autocomplete="email"></span><button class="button-dark" type="submit">Send recovery email</button></form><button class="auth-switch" type="button" data-auth-view="login">Back to sign in</button><p class="auth-status" data-auth-status></p></section></article>
    <article class="auth-face auth-reset"><aside class="auth-side"><span class="meta">New password</span><h2>Turn the<br>page.</h2><p>Choose a new password for your account.</p><a class="text-link" href="index.html">← Back to home</a></aside><section class="auth-form-panel"><h2>Set a new password</h2><p>Use at least six characters.</p><form class="auth-form" data-auth-form="reset"><span class="auth-field"><label for="reset-password">New password</label><input id="reset-password" type="password" name="password" required minlength="6" autocomplete="new-password"></span><button class="button-dark" type="submit">Update password</button></form><p class="auth-status" data-auth-status></p></section></article>
  </div></section>`;
}

function renderAccount() {
  const area = $("[data-account-area]");
  if (!area) return;
  if (state.user) {
    window.location.replace(safeNext());
    return;
  }
  area.innerHTML = accountMarkup();
  const hash = window.location.hash;
  if (hash.includes("type=recovery")) $("[data-auth-book]", area).dataset.view = "reset";
}

function dashboardCard(item, detail) {
  const progressText = detail ? `Last opened ${formatDate(detail.lastReadAt)}` : "Saved title";
  return `<a class="mini-anime" href="${hrefFor(item)}"><img src="${item.cover}" alt="${escapeHtml(item.title)} cover"><span><p class="meta">${progressText}</p><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.creator)}</p></span></a>`;
}

function renderDashboard() {
  const area = $("[data-dashboard-area]");
  if (!area) return;
  if (!state.user) {
    area.innerHTML = `<section class="story-paper"><p class="eyebrow">Your reading desk</p><h1 class="story-title">Sign in first.</h1><p class="story-synopsis">A Pahina account keeps your favourites, last-read activity, and feedback in one place.</p><p><a class="button-dark" href="${authHref("dashboard.html")}">Sign in or create an account</a></p></section>`;
    return;
  }
  const saved = library();
  const favourites = saved.favourites.map(id => anime.find(item => item.id === id)).filter(Boolean);
  const recentlyRead = Object.entries(saved.reading).map(([id, detail]) => ({ item: anime.find(entry => entry.id === Number(id)), detail })).filter(entry => entry.item).sort((a, b) => new Date(b.detail.lastReadAt) - new Date(a.detail.lastReadAt));
  const name = escapeHtml(state.user.user_metadata?.display_name || state.user.email?.split("@")[0] || "Reader");
  area.innerHTML = `<section class="dashboard-head"><div><p class="eyebrow">Account dashboard</p><h1>Hello, ${name}.</h1><p>Your shelf updates as you save and read.</p></div><button class="button-outline" type="button" data-sign-out>Sign out</button></section><section class="dashboard-grid"><div><section class="dashboard-section"><h2>Continue reading</h2><div class="dashboard-cards">${recentlyRead.length ? recentlyRead.map(({ item, detail }) => dashboardCard(item, detail)).join("") : `<p class="empty-library">Your latest reading activity will appear here. Spy × Family is ready when you are.</p>`}</div></section><section class="dashboard-section"><h2>Favourite stories</h2><div class="dashboard-cards">${favourites.length ? favourites.map(item => dashboardCard(item)).join("") : `<p class="empty-library">Save a title from its story page to keep it on your desk.</p>`}</div></section></div><aside class="feedback-panel"><p class="eyebrow">Share a note</p><h3>Send feedback</h3><p>Your message is sent directly to the Pahina creator without leaving this page.</p><form class="feedback-form" data-feedback-form><label class="auth-field">Your feedback<textarea name="message" required placeholder="Write your feedback here"></textarea></label><button class="button-dark" type="submit">Send feedback</button><p class="auth-status" data-feedback-status aria-live="polite"></p></form></aside></section>`;
}

function renderCreators() {
  const area = $("[data-creators-area]");
  if (!area) return;
  area.innerHTML = `<section class="creators-hero"><div><p class="eyebrow">The people behind the pages</p><h1>Creators.</h1></div><p>Every title on this shelf credits its original manga creator or credited creator team. Select a title to view its information page.</p></section><section class="creator-index">${anime.map(item => `<a class="creator-row" href="${hrefFor(item)}"><span class="meta">${String(item.id).padStart(2, "0")}</span><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.creator)}</span><span class="meta">${item.genre} ↗</span></a>`).join("")}</section>`;
}

function renderPage() {
  renderHome();
  renderGenres();
  renderAnime();
  renderReader();
  renderAccount();
  renderDashboard();
  renderCreators();
}

async function markReading(id, progress, force = false) {
  if (!state.user) return;
  const readKey = `${state.user.id}:${id}`;
  if (!force && state.trackedReads.has(readKey)) return;
  state.trackedReads.add(readKey);
  const current = library();
  current.reading[id] = { progress, lastReadAt: new Date().toISOString() };
  await saveLibrary(current);
}

function setAuthStatus(form, message, type = "success") {
  const status = $("[data-auth-status]", form.closest(".auth-face") || document);
  if (!status) return;
  status.textContent = message;
  status.className = `auth-status ${type}`;
}

async function handleAuth(form) {
  const type = form.dataset.authForm;
  const values = Object.fromEntries(new FormData(form).entries());
  if (!state.supabase) return setAuthStatus(form, "Account service is unavailable. Refresh and try again.", "error");
  try {
    if (type === "login") {
      const { error } = await state.supabase.auth.signInWithPassword({ email: values.email, password: values.password });
      if (error) throw error;
      window.location.href = safeNext();
    }
    if (type === "signup") {
      const { data, error } = await state.supabase.auth.signUp({ email: values.email, password: values.password, options: { data: { display_name: values.name || "" }, emailRedirectTo: appUrl("account.html?confirmed=1") } });
      if (error) throw error;
      if (data.session) window.location.href = safeNext();
      else setAuthStatus(form, "Check your email to confirm your account, then sign in.");
    }
    if (type === "forgot") {
      const { error } = await state.supabase.auth.resetPasswordForEmail(values.email, { redirectTo: appUrl("account.html") });
      if (error) throw error;
      setAuthStatus(form, "Recovery email sent. Open its link to set a new password.");
    }
    if (type === "reset") {
      const { error } = await state.supabase.auth.updateUser({ password: values.password });
      if (error) throw error;
      setAuthStatus(form, "Password updated. You can now sign in.");
    }
  } catch (error) {
    setAuthStatus(form, error.message || "Something went wrong. Please try again.", "error");
  }
}

async function startOAuth(provider, trigger) {
  if (!state.supabase) return;
  trigger.disabled = true;
  try {
    const { error } = await state.supabase.auth.signInWithOAuth({ provider, options: { redirectTo: appUrl("dashboard.html") } });
    if (error) throw error;
  } catch (error) {
    trigger.disabled = false;
    const face = trigger.closest(".auth-face");
    const status = $("[data-auth-status]", face);
    if (status) {
      status.textContent = error.message || "This sign-in option is not ready yet.";
      status.className = "auth-status error";
    }
  }
}

async function toggleFavourite(id, button) {
  if (!state.user) {
    window.location.href = authHref(`anime.html?id=${id}`);
    return;
  }
  const current = library();
  current.favourites = current.favourites.includes(id) ? current.favourites.filter(item => item !== id) : [...current.favourites, id];
  if (await saveLibrary(current)) {
    const saved = current.favourites.includes(id);
    button.classList.toggle("is-saved", saved);
    button.textContent = saved ? "Saved to favourites" : "Save to favourites";
  }
}

async function handleFeedback(form) {
  const message = new FormData(form).get("message")?.trim();
  if (!message || !state.user) return;
  const button = form.querySelector("button[type='submit']");
  const status = form.querySelector("[data-feedback-status]");
  const originalLabel = button?.textContent;
  if (button) {
    button.disabled = true;
    button.textContent = "Sending…";
  }
  if (status) {
    status.textContent = "";
    status.classList.remove("success");
  }
  try {
    const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(FEEDBACK_EMAIL)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: state.user.user_metadata?.display_name || "Pahina reader",
        email: state.user.email || "",
        message,
        _subject: "New Pahina feedback",
        _template: "table",
        _replyto: state.user.email || ""
      })
    });
    const result = await response.json().catch(() => null);
    if (!response.ok || result?.success === false || result?.success === "false") throw new Error("Feedback could not be sent.");
    form.reset();
    if (status) {
      status.textContent = "Feedback sent. Thank you for helping improve Pahina.";
      status.classList.add("success");
    }
  } catch (error) {
    if (status) status.textContent = "We could not send your feedback. Please try again.";
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = originalLabel;
    }
  }
}

function bindEvents() {
  document.addEventListener("click", async event => {
    const filter = event.target.closest("[data-genre-filter]");
    if (filter) {
      const selected = filter.dataset.genreFilter;
      $$("[data-genre-filter]").forEach(button => button.setAttribute("aria-pressed", String(button === filter)));
      $$("[data-shelf-card]").forEach(card => card.classList.toggle("is-filtered", selected !== "All" && card.dataset.genre !== selected));
      return;
    }
    const row = event.target.closest("[data-genre-row]");
    if (row) {
      const panel = $(`#${row.getAttribute("aria-controls")}`);
      const open = row.getAttribute("aria-expanded") === "true";
      row.setAttribute("aria-expanded", String(!open));
      panel.hidden = open;
      return;
    }
    const preference = event.target.closest("[data-consent-preferences]");
    if (preference) {
      $("[data-consent-card]")?.classList.toggle("show-settings");
      return;
    }
    const consent = event.target.closest("[data-consent]");
    if (consent) {
      localStorage.setItem("pahina-cookie-choice", consent.dataset.consent);
      $("[data-cookie-consent]").innerHTML = "";
      return;
    }
    const favourite = event.target.closest("[data-favourite]");
    if (favourite) {
      await toggleFavourite(Number(favourite.dataset.favourite), favourite);
      return;
    }
    const view = event.target.closest("[data-auth-view]");
    if (view) {
      const book = $("[data-auth-book]");
      if (book) book.dataset.view = view.dataset.authView;
      return;
    }
    const oauth = event.target.closest("[data-oauth]");
    if (oauth) {
      await startOAuth(oauth.dataset.oauth, oauth);
      return;
    }
    const signOut = event.target.closest("[data-sign-out]");
    if (signOut && state.supabase) {
      await state.supabase.auth.signOut();
      window.location.href = "index.html";
      return;
    }
    const finish = event.target.closest("[data-finish-reading]");
    if (finish) {
      await markReading(28, 100, true);
      finish.textContent = "Overview complete";
      finish.classList.add("is-finished");
    }
  });
  document.addEventListener("submit", async event => {
    const authForm = event.target.closest("[data-auth-form]");
    if (authForm) {
      event.preventDefault();
      await handleAuth(authForm);
      return;
    }
    const feedback = event.target.closest("[data-feedback-form]");
    if (feedback) {
      event.preventDefault();
      await handleFeedback(feedback);
    }
  });
}

async function init() {
  bindEvents();
  await initSupabase();
  renderChrome();
  renderConsent();
  renderPage();
}

init();
