const categories = { manyplayer: [{ url: `https://funcardgames.net/pigtail/`, date: `13 Oct 2022`, title: `Pigtail: Japanese Party Hit`},{ url: `https://funcardgames.net/durak/`, date: `12 Oct 2022`, title: `Durak: Gang Up on Opponents and Don't be the Dummy`},{ url: `https://funcardgames.net/blitz/`, date: `09 Oct 2022`, title: `Blitz: an Electrified Upgrade on Blackjack`},],easy: [{ url: `https://funcardgames.net/garbage/`, date: `13 Oct 2022`, title: `Garbage: A Two-Player Easy as Taking Out Trash`},{ url: `https://funcardgames.net/pigtail/`, date: `13 Oct 2022`, title: `Pigtail: Japanese Party Hit`},{ url: `https://funcardgames.net/durak/`, date: `12 Oct 2022`, title: `Durak: Gang Up on Opponents and Don't be the Dummy`},{ url: `https://funcardgames.net/blitz/`, date: `09 Oct 2022`, title: `Blitz: an Electrified Upgrade on Blackjack`},],twoplayer: [{ url: `https://funcardgames.net/strawman_tarot/`, date: `19 Dec 2022`, title: `Straw Man Tarot: Not for Dummies!`},{ url: `https://funcardgames.net/lake_constance_jass/`, date: `10 Dec 2022`, title: `Lake Constance Jass`},{ url: `https://funcardgames.net/garbage/`, date: `13 Oct 2022`, title: `Garbage: A Two-Player Easy as Taking Out Trash`},],jass: [{ url: `https://funcardgames.net/offenbach_molotov/`, date: `11 Dec 2022`, title: `Do Your Worst: Offenbach Molotov!`},{ url: `https://funcardgames.net/lake_constance_jass/`, date: `10 Dec 2022`, title: `Lake Constance Jass`},],threeplayer: [{ url: `https://funcardgames.net/tapp_tarock/`, date: `18 Dec 2022`, title: `Offenbach Tapp: Tarot for Three`},{ url: `https://funcardgames.net/offenbach_molotov/`, date: `11 Dec 2022`, title: `Do Your Worst: Offenbach Molotov!`},],fourplayer: [{ url: `https://funcardgames.net/offenbach_molotov/`, date: `11 Dec 2022`, title: `Do Your Worst: Offenbach Molotov!`},],fiveplayer: [{ url: `https://funcardgames.net/offenbach_molotov/`, date: `11 Dec 2022`, title: `Do Your Worst: Offenbach Molotov!`},],tarot: [{ url: `https://funcardgames.net/strawman_tarot/`, date: `19 Dec 2022`, title: `Straw Man Tarot: Not for Dummies!`},{ url: `https://funcardgames.net/tapp_tarock/`, date: `18 Dec 2022`, title: `Offenbach Tapp: Tarot for Three`},], }

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