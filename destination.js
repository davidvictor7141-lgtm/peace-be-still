(() => {
const DESTINATIONS = {
  canada: {
    name: "Canada",
    tagline: "Snow-capped mountains, vibrant cities and some of the world's most welcoming universities.",
    image: "dest-canada.jpg",
    imageAlt: "Lake and mountains in Canada",
    heroPos: "center 45%",
    tag: "Popular",
    facts: [
      ["Capital", "Ottawa"],
      ["Currency", "Canadian Dollar (CAD)"],
      ["Language", "English & French"],
      ["Best time to visit", "May – October"],
      ["Flight time", "13 – 15 hours from Abuja"],
      ["Visa type", "Study permit / Visitor visa"],
    ],
    overview: [
      "Canada is one of the most popular study and visit destinations for Nigerian travellers. It combines safe, multicultural cities with world-ranked universities and some of the most spectacular scenery on earth.",
      "Whether you are applying for a study permit, planning a family visit or combining both, our team helps you prepare your admission, documents and visa application from start to finish.",
    ],
    highlights: [
      "World-ranked universities and colleges",
      "Safe, multicultural and welcoming cities",
      "Work opportunities for international students",
      "National parks, lakes and mountain escapes",
    ],
    places: [
      { name: "Toronto", type: "City", text: "Canada's largest city, known for its diverse neighbourhoods, universities and lively waterfront.", pos: "center 35%" },
      { name: "Vancouver", type: "Coastal city", text: "Mountains meet the ocean in this relaxed west-coast city with great food and outdoor life.", pos: "center 60%" },
      { name: "Banff National Park", type: "Nature", text: "Turquoise lakes, snowy peaks and wildlife make Banff a bucket-list stop in the Rockies.", pos: "center 25%" },
      { name: "Montreal", type: "Culture", text: "A French-flavoured city of historic streets, festivals, cafés and respected universities.", pos: "center 50%" },
      { name: "Niagara Falls", type: "Landmark", text: "One of the world's most famous waterfalls, a short trip from Toronto and the US border.", pos: "center 70%" },
    ],
    gallery: [
      { caption: "Moraine Lake" },
      { caption: "Old Quebec" },
      { caption: "CN Tower" },
      { caption: "Mount Robson, Canadian Rockies" },
    ],
  },
  france: {
    name: "France",
    tagline: "Art, history and elegant cities, with a world-class education system and easy access to the rest of Europe.",
    image: "dest-france.jpg",
    imageAlt: "Eiffel Tower in Paris, France",
    heroPos: "center 40%",
    tag: "Schengen",
    facts: [
      ["Capital", "Paris"],
      ["Currency", "Euro (EUR)"],
      ["Language", "French"],
      ["Best time to visit", "April – June & September – October"],
      ["Flight time", "6 – 7 hours from Abuja"],
      ["Visa type", "Schengen study or visitor visa"],
    ],
    overview: [
      "France is a favourite for students and travellers alike. Paris and other French cities are home to renowned universities, grandes écoles and a rich cultural scene.",
      "A Schengen visa also opens the door to travel across much of Europe, making France a practical base for study, business and holidays.",
    ],
    highlights: [
      "Renowned universities and grandes écoles",
      "Art, fashion, cuisine and history",
      "Central access to the Schengen area",
      "Affordable public university options",
    ],
    places: [
      { name: "Paris", type: "Capital city", text: "The Eiffel Tower, world-class museums, cafés and universities in one unforgettable city.", pos: "center 35%" },
      { name: "French Riviera", type: "Coast", text: "Sunny beaches, promenades and glamorous towns along the Mediterranean.", pos: "center 70%" },
      { name: "Lyon", type: "Culture", text: "A UNESCO-listed old town and one of France's great food capitals.", pos: "center 50%" },
      { name: "Provence", type: "Countryside", text: "Lavender fields, hilltop villages and slow, sunny days in the south.", pos: "center 60%" },
      { name: "Mont Saint-Michel", type: "Landmark", text: "A dramatic island abbey rising from the tidal flats of Normandy.", pos: "center 30%" },
    ],
    gallery: [
      { caption: "Palace of Versailles" },
      { caption: "Nice" },
      { caption: "Loire Valley" },
      { caption: "French Alps" },
    ],
  },
  italy: {
    name: "Italy",
    tagline: "Ancient history, beautiful coastlines and internationally respected universities.",
    image: "dest-italy.jpg",
    imageAlt: "Coastal village in Italy",
    heroPos: "center 45%",
    tag: "Schengen",
    facts: [
      ["Capital", "Rome"],
      ["Currency", "Euro (EUR)"],
      ["Language", "Italian"],
      ["Best time to visit", "April – June & September – October"],
      ["Flight time", "6 – 7 hours from Abuja"],
      ["Visa type", "Schengen study or visitor visa"],
    ],
    overview: [
      "Italy pairs centuries of art and architecture with modern universities and a famously welcoming food culture. Students choose Italy for affordable study options and the chance to live in one of Europe's most beautiful countries.",
      "Visitors can move between historic cities, coastal towns and countryside escapes, all within easy reach of a Schengen visa.",
    ],
    highlights: [
      "Historic universities and design schools",
      "World-famous art and architecture",
      "Mediterranean food and lifestyle",
      "Schengen travel access",
    ],
    places: [
      { name: "Rome", type: "Capital city", text: "Ancient ruins, Vatican treasures and lively piazzas around every corner.", pos: "center 40%" },
      { name: "Florence", type: "Culture", text: "The birthplace of the Renaissance, packed with galleries and elegant streets.", pos: "center 55%" },
      { name: "Venice", type: "City", text: "Canals, bridges and islands that make this one of the world's most unique cities.", pos: "center 30%" },
      { name: "Amalfi Coast", type: "Coast", text: "Cliffside villages, lemon groves and sparkling blue water in southern Italy.", pos: "center 70%" },
      { name: "Milan", type: "City", text: "Italy's fashion and business hub, with design, shopping and fast rail links.", pos: "center 45%" },
    ],
    gallery: [
      { caption: "The Colosseum" },
      { caption: "Val d'Orcia, Tuscany" },
      { caption: "Lake Como" },
      { caption: "Taormina, Sicily" },
    ],
  },
  belgium: {
    name: "Belgium",
    tagline: "Charming medieval towns, multilingual culture and excellent universities at the heart of Europe.",
    image: "dest-belgium.jpg",
    imageAlt: "Historic street in Belgium",
    heroPos: "center 45%",
    tag: "Schengen",
    facts: [
      ["Capital", "Brussels"],
      ["Currency", "Euro (EUR)"],
      ["Language", "Dutch, French & German"],
      ["Best time to visit", "May – September"],
      ["Flight time", "6 – 7 hours from Abuja"],
      ["Visa type", "Schengen study or visitor visa"],
    ],
    overview: [
      "Belgium offers a high standard of living, respected universities and a central location that makes travel across Europe easy. Brussels is also home to major European institutions.",
      "Its compact cities, historic squares and multilingual culture make Belgium a comfortable and rewarding base for study or a short visit.",
    ],
    highlights: [
      "Top-ranked universities and colleges",
      "Central base for travelling Europe",
      "Multilingual study environment",
      "Medieval architecture and lively squares",
    ],
    places: [
      { name: "Brussels", type: "Capital city", text: "Grand-Place, museums, European institutions and excellent food in one walkable city.", pos: "center 40%" },
      { name: "Bruges", type: "Historic city", text: "Canals, cobbled lanes and chocolate shops in a beautifully preserved medieval town.", pos: "center 55%" },
      { name: "Ghent", type: "Culture", text: "A lively student city with medieval landmarks and a modern creative scene.", pos: "center 50%" },
      { name: "Antwerp", type: "City", text: "A port city known for fashion, diamonds, art and striking architecture.", pos: "center 35%" },
      { name: "Leuven", type: "University town", text: "Home to one of Europe's oldest universities and a buzzing student atmosphere.", pos: "center 65%" },
    ],
    gallery: [
      { caption: "Grand-Place" },
      { caption: "Atomium" },
      { caption: "Belfry of Bruges" },
      { caption: "Dinant" },
    ],
  },
  australia: {
    name: "Australia",
    tagline: "Sunny beaches, friendly cities and globally recognised education in a country built for the outdoors.",
    image: "dest-australia.jpg",
    imageAlt: "Sydney Opera House in Australia",
    heroPos: "center 45%",
    tag: "Study & Visit",
    facts: [
      ["Capital", "Canberra"],
      ["Currency", "Australian Dollar (AUD)"],
      ["Language", "English"],
      ["Best time to visit", "September – November & March – May"],
      ["Flight time", "18 – 20 hours from Abuja"],
      ["Visa type", "Student or visitor visa"],
    ],
    overview: [
      "Australia is a long-standing favourite for international students, offering globally ranked universities, strong post-study work options and a relaxed outdoor lifestyle.",
      "From the beaches of Sydney to the reefs and rainforests further north, there is a huge amount to explore before or after your studies.",
    ],
    highlights: [
      "Globally ranked universities",
      "Strong post-study work options",
      "Safe, multicultural cities",
      "Beaches, reefs and outdoor living",
    ],
    places: [
      { name: "Sydney", type: "City", text: "The Opera House, harbour and beaches make Sydney an iconic introduction to Australia.", pos: "center 40%" },
      { name: "Melbourne", type: "Culture", text: "Laneways, cafés, street art and a lively events calendar in Australia's cultural capital.", pos: "center 55%" },
      { name: "Great Barrier Reef", type: "Nature", text: "The world's largest coral reef system, best explored from Queensland's coast.", pos: "center 25%" },
      { name: "Gold Coast", type: "Coast", text: "Long sandy beaches, theme parks and a laid-back holiday atmosphere.", pos: "center 70%" },
      { name: "Perth", type: "City", text: "A sunny west-coast city with beautiful beaches and easy access to the outback.", pos: "center 50%" },
    ],
    gallery: [
      { caption: "Sydney Opera House" },
      { caption: "Uluru" },
      { caption: "The Twelve Apostles" },
      { caption: "Bondi Beach" },
    ],
  },
  usa: {
    name: "USA",
    tagline: "World-leading universities, diverse cities and endless travel experiences across fifty states.",
    image: "dest-usa.jpg",
    imageAlt: "New York City skyline in the USA",
    heroPos: "center 45%",
    tag: "Study & Visit",
    facts: [
      ["Capital", "Washington, DC"],
      ["Currency", "US Dollar (USD)"],
      ["Language", "English"],
      ["Best time to visit", "Varies by region"],
      ["Flight time", "12 – 15 hours from Abuja"],
      ["Visa type", "F-1 student or B-2 visitor visa"],
    ],
    overview: [
      "The United States offers the widest choice of universities and programmes in the world, along with scholarships, research opportunities and strong career networks.",
      "Visitors can choose from big cities, national parks, beaches and road trips, making the USA a destination that suits almost any travel goal.",
    ],
    highlights: [
      "The largest choice of universities",
      "Scholarship and research opportunities",
      "Diverse cities and landscapes",
      "Strong career and alumni networks",
    ],
    places: [
      { name: "New York City", type: "City", text: "Skyscrapers, museums, Broadway and neighbourhoods from Manhattan to Brooklyn.", pos: "center 40%" },
      { name: "Los Angeles", type: "City", text: "Beaches, film studios and year-round sunshine in southern California.", pos: "center 55%" },
      { name: "Miami", type: "Coast", text: "Cuban culture, art deco streets and warm Atlantic beaches.", pos: "center 70%" },
      { name: "San Francisco", type: "City", text: "The Golden Gate, tech culture and scenic bay views in northern California.", pos: "center 30%" },
      { name: "Chicago", type: "Culture", text: "Architecture, jazz, deep-dish pizza and a beautiful lakefront skyline.", pos: "center 50%" },
    ],
    gallery: [
      { caption: "Statue of Liberty" },
      { caption: "Grand Canyon" },
      { caption: "Golden Gate Bridge" },
      { caption: "Yellowstone National Park" },
    ],
  },
  uk: {
    name: "UK",
    tagline: "Historic universities, lively cities and countryside full of character, all in a compact island.",
    image: "dest-uk.jpg",
    imageAlt: "London skyline in the United Kingdom",
    heroPos: "center 45%",
    tag: "Study & Visit",
    facts: [
      ["Capital", "London"],
      ["Currency", "Pound Sterling (GBP)"],
      ["Language", "English"],
      ["Best time to visit", "May – September"],
      ["Flight time", "6 – 7 hours from Abuja"],
      ["Visa type", "Student or Standard Visitor visa"],
    ],
    overview: [
      "The UK is home to some of the world's oldest and most respected universities, with many one-year master's programmes that appeal to international students.",
      "Beyond London, historic cities, castles, coastlines and countryside make the UK easy and rewarding to explore by train.",
    ],
    highlights: [
      "World-famous universities",
      "One-year master's programmes",
      "Rich history and culture",
      "Excellent transport links",
    ],
    places: [
      { name: "London", type: "Capital city", text: "Royal landmarks, museums, markets and theatre in one of the world's great cities.", pos: "center 40%" },
      { name: "Edinburgh", type: "Historic city", text: "A dramatic castle, medieval streets and the famous summer festivals.", pos: "center 55%" },
      { name: "Manchester", type: "City", text: "Music, sport and a creative, student-friendly atmosphere in northern England.", pos: "center 50%" },
      { name: "Oxford", type: "University town", text: "Dreaming spires, historic colleges and a timeless academic atmosphere.", pos: "center 35%" },
      { name: "Lake District", type: "Nature", text: "Lakes, hills and walking trails in one of England's most beautiful regions.", pos: "center 70%" },
    ],
    gallery: [
      { caption: "Big Ben" },
      { caption: "Stonehenge" },
      { caption: "Scottish Highlands" },
      { caption: "Tower Bridge" },
    ],
  },
};

const PLACE_IMAGES = {
  canada: ["canada-toronto.jpg", "canada-vancouver.jpg", "canada-banff-national-park.jpg", "canada-montreal.jpg", "canada-niagara-falls.jpg"],
  france: ["france-paris.jpg", "france-french-riviera.jpg", "france-lyon.jpg", "france-provence.jpg", "france-mont-saint-michel.jpg"],
  italy: ["italy-rome.jpg", "italy-florence.jpg", "italy-venice.jpg", "italy-amalfi-coast.jpg", "italy-milan.jpg"],
  belgium: ["belgium-brussels.jpg", "belgium-bruges.jpg", "belgium-ghent.jpg", "belgium-antwerp.jpg", "belgium-leuven.jpg"],
  australia: ["australia-sydney.jpg", "australia-melbourne.jpg", "australia-great-barrier-reef.jpg", "australia-gold-coast.jpg", "australia-perth.jpg"],
  usa: ["usa-new-york-city.jpg", "usa-los-angeles.jpg", "usa-miami.jpg", "usa-san-francisco.jpg", "usa-chicago.jpg"],
  uk: ["uk-london.jpeg", "uk-edinburgh.jpg", "uk-manchester.jpg", "uk-oxford.jpg", "uk-lake-district.jpg"],
};

const GALLERY_IMAGES = {
  canada: ["canada-postcard-moraine-lake.jpg", "canada-postcard-old-quebec.jpg", "canada-postcard-cn-tower.jpg", "canada-postcard-canadian-rockies.jpg"],
  france: ["france-postcard-palace-of-versailles.jpg", "france-postcard-nice.jpg", "france-postcard-loire-valley.jpg", "france-postcard-french-alps.jpg"],
  italy: ["italy-postcard-colosseum.jpg", "italy-postcard-tuscany.jpg", "italy-postcard-lake-como.jpg", "italy-postcard-sicily.jpg"],
  belgium: ["belgium-postcard-grand-place.jpg", "belgium-postcard-atomium.jpg", "belgium-postcard-belfry-of-bruges.jpg", "belgium-postcard-dinant.jpg"],
  australia: ["australia-postcard-sydney-opera-house.jpg", "australia-postcard-uluru.jpg", "australia-postcard-great-ocean-road.jpg", "australia-postcard-bondi-beach.jpg"],
  usa: ["usa-postcard-statue-of-liberty.jpg", "usa-postcard-grand-canyon.jpeg", "usa-postcard-golden-gate-bridge.jpg", "usa-postcard-yellowstone-national-park.jpg"],
  uk: ["uk-postcard-big-ben.jpg", "uk-postcard-stonehenge.jpg", "uk-postcard-scottish-highlands.jpg", "uk-postcard-tower-bridge.jpg"],
};

const params = new URLSearchParams(window.location.search);
const requested = (
  document.body.dataset.country ||
  params.get("country") ||
  "canada"
).toLowerCase();
const key = DESTINATIONS[requested] ? requested : "canada";
const dest = DESTINATIONS[key];
const contactLink = `index.html?destination=${key}#contact`;
const whatsappLink = `https://wa.me/2349156432511?text=${encodeURIComponent(
  `Hello Peace Be Still Travels & Consult, I'd like to know more about studying or visiting ${dest.name}.`
)}`;

document.title = `${dest.name} — Study & Visit | Peace Be Still Travels & Consult`;
const metaDescription = document.querySelector('meta[name="description"]');
if (metaDescription) {
  metaDescription.setAttribute(
    "content",
    `Explore ${dest.name} with Peace Be Still Travels & Consult: an overview, quick facts, places to visit and travel support before you enquire.`
  );
}

document.getElementById("destName").textContent = dest.name;
document.getElementById("destTagline").textContent = dest.tagline;
document.getElementById("destCta").href = contactLink;
document.getElementById("destWhatsApp").href = whatsappLink;

const heroImg = document.getElementById("destHeroImg");
heroImg.src = dest.image;
heroImg.alt = dest.imageAlt;
heroImg.style.objectPosition = dest.heroPos;

const chips = [
  { icon: "i-graduation", label: "Study & Visit" },
  { icon: "i-shield", label: "Visa support" },
  { icon: "i-clock", label: dest.facts[3][1] },
];
document.getElementById("destChips").innerHTML = chips
  .map(
    (chip) =>
      `<li><svg class="icon" aria-hidden="true"><use href="#${chip.icon}"/></svg>${chip.label}</li>`
  )
  .join("");

const others = Object.entries(DESTINATIONS)
  .filter(([otherKey]) => otherKey !== key)
  .map(([otherKey, other]) => ({ key: otherKey, href: `${otherKey}.html`, ...other }));

const content = document.getElementById("destContent");
content.innerHTML = `
  <section class="section">
    <div class="container">
      <div class="section-head">
        <div>
          <span class="eyebrow">At a glance</span>
          <h2>Quick facts about ${dest.name}</h2>
          <p>Everything you need to start planning your study or visit trip.</p>
        </div>
        <a href="${contactLink}" class="link-arrow">Talk to an advisor <svg class="icon" aria-hidden="true"><use href="#i-arrow"/></svg></a>
      </div>
      <div class="fact-grid">
        ${dest.facts
          .map(
            ([label, value]) =>
              `<div class="fact-card reveal"><span>${label}</span><strong>${value}</strong></div>`
          )
          .join("")}
      </div>
    </div>
  </section>

  <section class="section section-soft">
    <div class="container overview-grid">
      <div class="overview-copy reveal">
        <span class="eyebrow">Why ${dest.name}</span>
        <h2>Study, visit and explore ${dest.name}</h2>
        ${dest.overview.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        <ul class="overview-highlights">
          ${dest.highlights
            .map(
              (item) =>
                `<li><svg class="icon" aria-hidden="true"><use href="#i-check"/></svg>${item}</li>`
            )
            .join("")}
        </ul>
        <div class="overview-actions">
          <a class="btn btn-primary" href="${contactLink}">Start my enquiry <svg class="icon" aria-hidden="true"><use href="#i-arrow"/></svg></a>
          <a class="link-arrow" href="${whatsappLink}" target="_blank" rel="noopener">Ask a quick question <svg class="icon" aria-hidden="true"><use href="#i-arrow"/></svg></a>
        </div>
      </div>
      <figure class="overview-media reveal">
        <img src="${dest.image}" alt="${dest.imageAlt}" style="object-position:${dest.heroPos}" loading="lazy">
        <figcaption>${dest.name} · Study &amp; Visit</figcaption>
      </figure>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <div>
          <span class="eyebrow">Places to visit</span>
          <h2>Make time for these in ${dest.name}</h2>
          <p>From well-known landmarks to local favourites, here are a few places worth adding to your itinerary.</p>
        </div>
      </div>
      <div class="place-grid">
        ${dest.places
          .map(
            (place, index) => `
          <article class="place-card reveal">
            <div class="place-media">
              <img src="${PLACE_IMAGES[key][index] || dest.image}" alt="${place.name} in ${dest.name}" loading="lazy">
              <span class="place-type">${place.type}</span>
            </div>
            <div class="place-body">
              <h3>${place.name}</h3>
              <p>${place.text}</p>
            </div>
          </article>`
          )
          .join("")}
      </div>
    </div>
  </section>

  <section class="section section-soft">
    <div class="container">
      <div class="section-head">
        <div>
          <span class="eyebrow">Gallery</span>
          <h2>Postcards from ${dest.name}</h2>
          <p>A little inspiration for your study or visit plans.</p>
        </div>
      </div>
      <div class="gallery-grid">
        ${dest.gallery
          .map(
            (shot, index) => `
          <figure class="gallery-item reveal">
            <img src="${GALLERY_IMAGES[key][index] || dest.image}" alt="${shot.caption} in ${dest.name}" loading="lazy">
            <figcaption>${shot.caption}</figcaption>
          </figure>`
          )
          .join("")}
      </div>
      <p class="photo-credit">Place and postcard photos via <a href="https://commons.wikimedia.org/" target="_blank" rel="noopener">Wikimedia Commons</a>.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <div>
          <span class="eyebrow">Keep exploring</span>
          <h2>Other destinations we support</h2>
        </div>
        <a href="index.html#destinations" class="link-arrow">All destinations <svg class="icon" aria-hidden="true"><use href="#i-arrow"/></svg></a>
      </div>
      <div class="dest-grid">
        ${others
          .map(
            (other) => `
          <article class="dest-card reveal">
            <a class="dest-media" href="${other.href}" aria-label="View more about ${other.name}">
              <img src="${other.image}" alt="${other.imageAlt}" loading="lazy">
              <span class="dest-tag">${other.tag}</span>
            </a>
            <div class="dest-body">
              <div class="dest-head">
                <h3>${other.name} <span>Study &amp; Visit</span></h3>
                <span class="dest-badge"><svg class="icon" aria-hidden="true"><use href="#i-shield"/></svg> Visa support</span>
              </div>
              <div class="dest-foot">
                <div class="dest-note"><small>Explore</small><strong>Places to visit</strong></div>
                <a class="round-btn" href="${other.href}" aria-label="View more about ${other.name}"><svg class="icon" aria-hidden="true"><use href="#i-arrow"/></svg></a>
              </div>
            </div>
          </article>`
          )
          .join("")}
      </div>
    </div>
  </section>

  <section class="section dest-cta-section">
    <div class="container">
      <div class="dest-cta reveal">
        <div>
          <span class="eyebrow eyebrow-light">Ready when you are</span>
          <h2>Let's plan your trip to ${dest.name}</h2>
          <p>Tell us whether you want to study, visit or both. We will guide you through the admission, visa and travel process.</p>
        </div>
        <div class="dest-cta-actions">
          <a class="btn btn-accent" href="${contactLink}">Start my enquiry <svg class="icon" aria-hidden="true"><use href="#i-arrow"/></svg></a>
          <a class="btn btn-outline" href="${whatsappLink}" target="_blank" rel="noopener"><svg class="icon" aria-hidden="true"><use href="#i-chat"/></svg> Chat on WhatsApp</a>
        </div>
      </div>
    </div>
  </section>
`;

const revealItems = Array.from(document.querySelectorAll(".reveal"));
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
})();
