const archives=[
["001","DEC 2024","VINTAGE ASH TEA","THEY MADE A PETITION 😭","A Change.org petition called for Ash Trevino to be removed from social media. Claims in the petition remain attributed to its authors.","https://www.change.org/p/ban-ash-trevino-remove-from-social-media"],

["002","ARCHIVE","THE RABBIT HOLE","THE DARK SIDE OF INTERNET MOMS","A background feature collecting earlier Ashley Trevino internet lore and its own source material.","https://thetigernews.org/10944/entertainment/the-dark-side-of-internet-moms-ash-trevinos-story/"],

["003","ARCHIVE","THE FAME FILE","HOW ASHLEY TREVINO GOT FAMOUS","An explainer for newcomers trying to understand how the Ashley Trevino story became a recurring online spectacle.","https://fhsphoenix.org/ashley-trevino-fame/"],

["004","AUG 2026","PROSECUTORS CLAIM","THE 50–75 INMATES HEADLINE","Complex reported prosecutors' allegation that Trevino had been romantically linked to 50–75 inmates. The claim remains explicitly attributed.","https://www.complex.com/pop-culture/a/jaelaniturnerwilliams/ash-trevino-relationships-75-inmates"],

["005","AUG 2026","COURT FILE","THE GUILTY PLEA","A Dallas Morning News report covering Trevino's guilty plea. The linked article may require a subscription.","https://www.dallasnews.com/news/courts/article/north-texas-influencer-ash-trevino-guilty-plea-22385193.php"],

["006","VIDEO","TIMELINE FILE","THE TIKTOK CLIP","A short-form clip preserved as part of the living archive. Context stays linked to the original post.","https://vt.tiktok.com/ZSVjnb32e/"],

["007","PODCAST","LONG-FORM LORE","THE SERIALOUSLY FILE","A podcast transcript containing Ashley Trevino discussion among several internet stories.","https://podscripts.co/podcasts/serialously/230-tiktoks-ashley-trevino-gf-found-decapitated-lively-vs-baldoni-stabbed-over-a-sandwich-new-orleans-attack"],

["008","WIKI","REFERENCE FILE","THE ASH TREVINO WIKI","A community-maintained reference page collecting Ash Trevino lore and background in one place.","https://aj-dallas.fandom.com/wiki/Ash_Trevino"],

["009","VIDEO","DEEP DIVE","THE YOUTUBE FILE","A long-form YouTube deep dive into the Ashley Trevino internet rabbit hole.","https://youtu.be/6S3SWw3JSWk?si=uG-FzP2E42CXKwDW"],

["010","TUBI","FULL EPISODE","THE TUBI FILE","A full-length episode focused on Ash Trevino and the online spectacle surrounding her.","https://tubitv.com/tv-shows/200311837/s02-e01-ash-trevino-the-tiktok-live-human-disaster"]
];

document.getElementById("grid").innerHTML=archives.map(x=>`
<article class="card">
  <div class="thumb">ARCHIVE #${x[0]}</div>
  <div class="meta">
    <span>${x[2]}</span>
    <span>${x[1]}</span>
  </div>
  <h3>${x[3]}</h3>
  <p>${x[4]}</p>
  <a href="${x[5]}" target="_blank" rel="noopener">VIEW THE RECEIPT →</a>
</article>
`).join("");
