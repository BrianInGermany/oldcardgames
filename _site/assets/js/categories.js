const categories = { manyplayer: [{ url: `https://pubgames.club/offenbach_molotov/`, date: `11 Dec 2022`, title: `Offenbach Molotov: Do Your Worst!`},{ url: `https://pubgames.club/pigtail/`, date: `13 Oct 2022`, title: `Pigtail: Japanese Party Hit`},{ url: `https://pubgames.club/durak/`, date: `12 Oct 2022`, title: `Durak: Gang Up on Opponents and Don't be the Dummy`},{ url: `https://pubgames.club/blitz/`, date: `09 Oct 2022`, title: `Blitz: an Electrified Upgrade on Blackjack`},],easy: [{ url: `https://pubgames.club/garbage/`, date: `13 Oct 2022`, title: `Garbage: A Two-Player Easy as Taking Out Trash`},{ url: `https://pubgames.club/pigtail/`, date: `13 Oct 2022`, title: `Pigtail: Japanese Party Hit`},{ url: `https://pubgames.club/durak/`, date: `12 Oct 2022`, title: `Durak: Gang Up on Opponents and Don't be the Dummy`},{ url: `https://pubgames.club/blitz/`, date: `09 Oct 2022`, title: `Blitz: an Electrified Upgrade on Blackjack`},],twoplayer: [{ url: `https://pubgames.club/strawman_tarot/`, date: `19 Dec 2022`, title: `Straw Man Tarot: Not for 'Dummies'!`},{ url: `https://pubgames.club/lake_constance_jass/`, date: `10 Dec 2022`, title: `Lake Constance Jass`},{ url: `https://pubgames.club/garbage/`, date: `13 Oct 2022`, title: `Garbage: A Two-Player Easy as Taking Out Trash`},{ url: `https://pubgames.club/sixtysix/`, date: `09 Oct 2022`, title: `66: A Classic German Two-Player`},],jass: [{ url: `https://pubgames.club/offenbach_molotov/`, date: `11 Dec 2022`, title: `Offenbach Molotov: Do Your Worst!`},{ url: `https://pubgames.club/lake_constance_jass/`, date: `10 Dec 2022`, title: `Lake Constance Jass`},],dreispieler: [{ url: `https://pubgames.club/de/tapp_tarock/`, date: `18 Dec 2022`, title: `Offenbacher Tapp: Tarock zu dritt`},],tarock: [{ url: `https://pubgames.club/de/strawman_tarot/`, date: `19 Dec 2022`, title: `Strohmann-Tarock: Nichts für 'Dummys'!`},{ url: `https://pubgames.club/de/tapp_tarock/`, date: `18 Dec 2022`, title: `Offenbacher Tapp: Tarock zu dritt`},],threeplayer: [{ url: `https://pubgames.club/skat/`, date: `26 Dec 2022`, title: `Skat: The Three-Player Classic`},{ url: `https://pubgames.club/tapp_tarock/`, date: `18 Dec 2022`, title: `Offenbach Tapp: Tarot for Three`},],tarot: [{ url: `https://pubgames.club/strawman_tarot/`, date: `19 Dec 2022`, title: `Straw Man Tarot: Not for 'Dummies'!`},{ url: `https://pubgames.club/tapp_tarock/`, date: `18 Dec 2022`, title: `Offenbach Tapp: Tarot for Three`},],zweispieler: [{ url: `https://pubgames.club/de/strawman_tarot/`, date: `19 Dec 2022`, title: `Strohmann-Tarock: Nichts für 'Dummys'!`},],solitaire: [{ url: `https://pubgames.club/pyramid_solitaire/`, date: `26 Dec 2022`, title: `Pyramid Solitaire: Ready Your Reflexes`},], }

console.log(categories);

window.onload = function () {
  document.querySelectorAll(".article-category").forEach((category) => {
    category.addEventListener("click", function (e) {
      const posts = categories[e.target.innerText.replace(" ","_")];
      console.log(posts);
      let html = ``
      posts.forEach(post=>{
        html += `
        <a class="modal-article" href="${post.url}">
          <h4>${post.title}</h4>
          <small class="modal-article-date">${post.date}</small>
        </a>
        `
      })
      document.querySelector("#category-modal-title").innerText = e.target.innerText;
      document.querySelector("#category-modal-content").innerHTML = html;
      document.querySelector("#category-modal-bg").classList.toggle("open");
      document.querySelector("#category-modal").classList.toggle("open");
    });
  });

  document.querySelector("#category-modal-bg").addEventListener("click", function(){
    document.querySelector("#category-modal-title").innerText = "";
    document.querySelector("#category-modal-content").innerHTML = "";
    document.querySelector("#category-modal-bg").classList.toggle("open");
    document.querySelector("#category-modal").classList.toggle("open");
  })
};