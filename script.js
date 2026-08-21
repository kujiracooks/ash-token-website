const archives = [
  {
    id:"016", date:"AUG 2026", label:"CROSSOVER EPISODE", title:"JUST TRISH #303: TRISHA X ASH",
    desc:"Trisha Paytas and the Just Trish crew discuss Ash Trevino's response to Stephanie Soo. Another corner of the internet gets pulled into the lore.",
    url:"https://youtu.be/pcY9JFXEJNs?si=S99LYYgdGGqJJLtj", cats:["fresh","video"], fresh:true
  },
  {
    id:"015", date:"AUG 2026", label:"NETFLIX FILE", title:"THE ROTTEN FILES WITH STEPHANIE SOO",
    desc:"Stephanie Soo's Netflix series launched with Ash Trevino in the first-episode conversation, pushing the saga onto another major platform.",
    url:"https://www.netflix.com/ca/title/82814173", cats:["fresh","video","deep-dive"], fresh:true
  },
  {
    id:"014", date:"AUG 2026", label:"NATIONAL HEADLINE", title:"PEOPLE: THE $16K+ PLEA DEAL",
    desc:"People reports Trevino's guilty plea, two years of community supervision, 120 hours of community service and $16,799.95 restitution.",
    url:"https://people.com/controversial-influencer-ash-trevino-enters-guilty-plea-for-fraud-charges-12036944", cats:["fresh","legal"], fresh:true
  },
  {
    id:"013", date:"AUG 2026", label:"COURT + CULTURE", title:"COMPLEX: FRAUD PLEA, NO JAIL",
    desc:"Complex breaks down the welfare-fraud plea, sentence and the internet persona surrounding the case.",
    url:"https://www.complex.com/pop-culture/a/bernadette-giacomazzo/ash-trevino-fraud-guilty-restitution", cats:["fresh","legal"]
  },
  {
    id:"012", date:"AUG 2026", label:"PROSECUTORS CLAIM", title:"THE 50–75 INMATES HEADLINE",
    desc:"Complex reports prosecutors' allegation that Trevino had romantic relationships with 50–75 inmates. The claim remains explicitly attributed to prosecutors.",
    url:"https://www.complex.com/pop-culture/a/jaelaniturnerwilliams/ash-trevino-relationships-75-inmates", cats:["fresh","legal"]
  },
  {
    id:"011", date:"AUG 2026", label:"COURT FILE", title:"THE GUILTY PLEA: DALLAS MORNING NEWS",
    desc:"Dallas Morning News coverage of Trevino's August guilty plea and case resolution. The article may require a subscription.",
    url:"https://www.dallasnews.com/news/courts/article/north-texas-influencer-ash-trevino-guilty-plea-22385193.php", cats:["fresh","legal"]
  },
  {
    id:"010", date:"MAR 2026", label:"BOND FILE", title:"TMZ: BACK IN JAIL OVER ALLEGED BOND VIOLATION",
    desc:"TMZ reports Trevino's March booking after prosecutors alleged she violated bond conditions involving alcohol; her defense disputed the alleged violations.",
    url:"https://www.tmz.com/2026/03/06/influencer-ash-trevino-arrested-violating-bail-rules/", cats:["legal"]
  },
  {
    id:"009", date:"DEC 2025", label:"ARREST FILE", title:"PEOPLE: THE FELONY-WARRANT ARREST",
    desc:"People coverage of Trevino's December 2025 arrest on outstanding felony warrants and release on bond.",
    url:"https://people.com/influencer-ash-trevino-arrested-on-felony-warrants-11872526", cats:["legal"]
  },
  {
    id:"008", date:"TUBI", label:"FULL EPISODE", title:"ASH TREVINO: THE TIKTOK LIVE HUMAN DISASTER",
    desc:"A full-length Tubi episode centered on Ash Trevino and the online spectacle surrounding her.",
    url:"https://tubitv.com/tv-shows/200311837/s02-e01-ash-trevino-the-tiktok-live-human-disaster", cats:["video","deep-dive"]
  },
  {
    id:"007", date:"VIDEO", label:"DEEP DIVE", title:"THE YOUTUBE RABBIT HOLE",
    desc:"A long-form YouTube deep dive preserved as a reference point for people who somehow have hours to spare.",
    url:"https://youtu.be/6S3SWw3JSWk?si=uG-FzP2E42CXKwDW", cats:["video","deep-dive"]
  },
  {
    id:"006", date:"PODCAST", label:"LONG-FORM LORE", title:"THE SERIALOUSLY FILE",
    desc:"A podcast transcript containing Ashley Trevino discussion among several internet stories and true-crime topics.",
    url:"https://podscripts.co/podcasts/serialously/230-tiktoks-ashley-trevino-gf-found-decapitated-lively-vs-baldoni-stabbed-over-a-sandwich-new-orleans-attack", cats:["deep-dive"]
  },
  {
    id:"005", date:"VIDEO", label:"TIMELINE FILE", title:"THE TIKTOK CLIP",
    desc:"A short-form clip preserved as part of the living archive. Context stays linked to the original post.",
    url:"https://vt.tiktok.com/ZSVjnb32e/", cats:["video","og-lore"]
  },
  {
    id:"004", date:"REFERENCE", label:"WIKI FILE", title:"THE ASH TREVINO WIKI",
    desc:"A community-maintained reference page collecting names, events and background from the broader Ash Trevino internet universe.",
    url:"https://aj-dallas.fandom.com/wiki/Ash_Trevino", cats:["deep-dive","og-lore"]
  },
  {
    id:"003", date:"ARCHIVE", label:"THE FAME FILE", title:"HOW ASHLEY TREVINO GOT FAMOUS",
    desc:"A newcomer explainer for understanding how Ashley Trevino became a recurring online spectacle.",
    url:"https://fhsphoenix.org/ashley-trevino-fame/", cats:["deep-dive","og-lore"]
  },
  {
    id:"002", date:"ARCHIVE", label:"THE RABBIT HOLE", title:"THE DARK SIDE OF INTERNET MOMS",
    desc:"A background feature collecting earlier Ashley Trevino internet lore and its source material.",
    url:"https://thetigernews.org/10944/entertainment/the-dark-side-of-internet-moms-ash-trevinos-story/", cats:["deep-dive","og-lore"]
  },
  {
    id:"001", date:"DEC 2024", label:"VINTAGE ASH TEA", title:"THEY MADE A PETITION 😭",
    desc:"A Change.org petition called for Ash Trevino to be removed from social media. Claims in the petition remain attributed to its authors.",
    url:"https://www.change.org/p/ban-ash-trevino-remove-from-social-media", cats:["og-lore"]
  }
];

const grid = document.getElementById('archiveGrid');
const search = document.getElementById('archiveSearch');
const filterRow = document.getElementById('filterRow');
const noResults = document.getElementById('noResults');
let activeFilter = 'all';

function renderArchives(){
  const q = (search?.value || '').trim().toLowerCase();
  const shown = archives.filter(item => {
    const categoryMatch = activeFilter === 'all' || item.cats.includes(activeFilter);
    const haystack = `${item.id} ${item.date} ${item.label} ${item.title} ${item.desc}`.toLowerCase();
    return categoryMatch && (!q || haystack.includes(q));
  });

  grid.innerHTML = shown.map(item => `
    <article class="archive-card ${item.fresh ? 'fresh-card' : ''}">
      ${item.fresh ? '<span class="new-sticker">NEW!</span>' : ''}
      <div class="archive-number">#${item.id}</div>
      <div class="archive-meta"><span>${item.label}</span><span>${item.date}</span></div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <a href="${item.url}" target="_blank" rel="noopener">VIEW THE RECEIPT →</a>
    </article>
  `).join('');
  noResults.hidden = shown.length !== 0;
}

search?.addEventListener('input', renderArchives);
filterRow?.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-filter]');
  if(!btn) return;
  activeFilter = btn.dataset.filter;
  document.querySelectorAll('.filter').forEach(b => b.classList.toggle('active', b === btn));
  renderArchives();
});

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click',()=>{
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded','false');
}));

const copyButton = document.getElementById('copyCA');
const toast = document.getElementById('toast');
copyButton?.addEventListener('click', async () => {
  const ca = document.getElementById('contract').textContent.trim();
  try { await navigator.clipboard.writeText(ca); }
  catch { const ta=document.createElement('textarea');ta.value=ca;document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove(); }
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'),1600);
});

renderArchives();
