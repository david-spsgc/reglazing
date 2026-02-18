async function loadJSON(path) {
  const res = await fetch(path);
  return res.json();
}

function setMeta(name, content, attr = "name") {
  if (!content) return;
  let tag = document.head.querySelector(`meta[${attr}='${name}']`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function injectScriptContainer(target, html) {
  if (!html) return;
  const div = document.createElement("div");
  div.innerHTML = html;
  target.append(...div.childNodes);
}

function buildShareLinks(title, url) {
  return {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    instagram: `https://www.instagram.com/`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(title)}`
  };
}

function renderFAQ(items = []) {
  const wrap = document.getElementById("faq-list");
  if (!wrap) return;
  wrap.innerHTML = items.map((f) => `<div class="faq-item"><strong>${f.question}</strong><p>${f.answer}</p></div>`).join("");
}

function renderTestimonials(items = []) {
  const wrap = document.getElementById("testimonials-list");
  if (!wrap) return;
  wrap.innerHTML = items.map((t) => `<article class="card"><p>“${t.quote}”</p><strong>— ${t.name}</strong></article>`).join("");
}

function renderServiceAreas(items = []) {
  const wrap = document.getElementById("areas-list");
  if (!wrap) return;
  wrap.innerHTML = items.map((a) => `<li>${a}</li>`).join("");
}

function renderGallery(items = []) {
  const wrap = document.getElementById("gallery-list");
  if (!wrap) return;
  wrap.innerHTML = items.map((g) => {
    const page = `${location.origin}${location.pathname}#gallery`;
    const links = buildShareLinks(g.title, page);
    return `
      <article>
        <div class="compare">
          <img src="${g.before}" alt="Before epoxy coating - ${g.title}">
          <div class="after-wrap">
            <img src="${g.after}" alt="After epoxy coating - ${g.title}">
          </div>
          <span class="badge before">Before</span>
          <span class="badge after">After</span>
        </div>
        <h3>${g.title}</h3>
        <p>${g.location}</p>
        <div class="share">
          <a href="${links.facebook}" target="_blank" rel="noopener">Share Facebook</a>
          <a href="${links.instagram}" target="_blank" rel="noopener">Share Instagram</a>
          <a href="${links.pinterest}" target="_blank" rel="noopener">Share Pinterest</a>
        </div>
      </article>`;
  }).join("");
}

async function initSite() {
  const [site, gallery] = await Promise.all([
    loadJSON("/content/site.json"),
    loadJSON("/content/gallery.json")
  ]);

  document.title = site.seo.title;
  setMeta("description", site.seo.description);
  setMeta("keywords", site.seo.keywords);
  setMeta("og:title", site.seo.title, "property");
  setMeta("og:description", site.seo.description, "property");

  injectScriptContainer(document.head, site.scripts.head);
  injectScriptContainer(document.body, site.scripts.body);

  const map = {
    "business-name": site.businessName,
    "phone-number": site.phone,
    "email-address": site.email,
    "cta-message": site.ctaMessage,
    "hero-title": site.heroTitle,
    "hero-subtitle": site.heroSubtitle,
    "about-copy": site.about
  };

  Object.entries(map).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  });

  document.querySelectorAll(".phone-link").forEach((a) => {
    a.href = `tel:${site.phone.replace(/[^\d+]/g, "")}`;
    a.textContent = site.phone;
  });

  renderFAQ(site.faq);
  renderTestimonials(site.testimonials);
  renderServiceAreas(site.serviceAreas);
  renderGallery(Array.isArray(gallery) ? gallery : gallery.items);
}

initSite();
