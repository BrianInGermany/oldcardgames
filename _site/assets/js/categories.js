const categories = { manyplayer: [{ url: `http://localhost:4000/pigtail/`, date: `13 Oct 2022`, title: `Pigtail: Japanese Party Hit`},{ url: `http://localhost:4000/durak/`, date: `12 Oct 2022`, title: `Durak: Gang Up on Opponents and Don't be the Dummy`},{ url: `http://localhost:4000/blitz/`, date: `09 Oct 2022`, title: `Blitz: an Electrified Upgrade on Blackjack`},],easy: [{ url: `http://localhost:4000/garbage/`, date: `13 Oct 2022`, title: `Garbage: A Two-Player Easy as Taking Out Trash`},{ url: `http://localhost:4000/pigtail/`, date: `13 Oct 2022`, title: `Pigtail: Japanese Party Hit`},{ url: `http://localhost:4000/durak/`, date: `12 Oct 2022`, title: `Durak: Gang Up on Opponents and Don't be the Dummy`},{ url: `http://localhost:4000/blitz/`, date: `09 Oct 2022`, title: `Blitz: an Electrified Upgrade on Blackjack`},],twoplayer: [{ url: `http://localhost:4000/strawman_tarot/`, date: `19 Dec 2022`, title: `Straw Man Tarot: Not for Dummies!`},{ url: `http://localhost:4000/lake_constance_jass/`, date: `10 Dec 2022`, title: `Lake Constance Jass`},{ url: `http://localhost:4000/garbage/`, date: `13 Oct 2022`, title: `Garbage: A Two-Player Easy as Taking Out Trash`},],jass: [{ url: `http://localhost:4000/offenbach_molotov/`, date: `11 Dec 2022`, title: `Do Your Worst: Offenbach Molotov!`},{ url: `http://localhost:4000/lake_constance_jass/`, date: `10 Dec 2022`, title: `Lake Constance Jass`},],threeplayer: [{ url: `http://localhost:4000/tapp_tarock/`, date: `18 Dec 2022`, title: `Offenbach Tapp: Tarot for Three`},{ url: `http://localhost:4000/offenbach_molotov/`, date: `11 Dec 2022`, title: `Do Your Worst: Offenbach Molotov!`},],fourplayer: [{ url: `http://localhost:4000/offenbach_molotov/`, date: `11 Dec 2022`, title: `Do Your Worst: Offenbach Molotov!`},],fiveplayer: [{ url: `http://localhost:4000/offenbach_molotov/`, date: `11 Dec 2022`, title: `Do Your Worst: Offenbach Molotov!`},],tarot: [{ url: `http://localhost:4000/strawman_tarot/`, date: `19 Dec 2022`, title: `Straw Man Tarot: Not for Dummies!`},{ url: `http://localhost:4000/tapp_tarock/`, date: `18 Dec 2022`, title: `Offenbach Tapp: Tarot for Three`},], }

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