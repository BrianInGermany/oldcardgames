const categories = { manyplayer: [{ url: `/de/pigtail/`, date: `13 Oct 2022`, title: `Pigtail: Japanese Party Hit`},{ url: `/de/durak/`, date: `12 Oct 2022`, title: `Durak: Gang Up on Opponents and Don't be the Dummy`},{ url: `/de/blitz/`, date: `09 Oct 2022`, title: `Schnauz: Wie Blackjack aber besser`},],easy: [{ url: `/de/garbage/`, date: `13 Oct 2022`, title: `Garbage: A Two-Player Easy as Taking Out Trash`},{ url: `/de/pigtail/`, date: `13 Oct 2022`, title: `Pigtail: Japanese Party Hit`},{ url: `/de/durak/`, date: `12 Oct 2022`, title: `Durak: Gang Up on Opponents and Don't be the Dummy`},{ url: `/de/blitz/`, date: `09 Oct 2022`, title: `Schnauz: Wie Blackjack aber besser`},],twoplayer: [{ url: `/de/strawman_tarot/`, date: `19 Dec 2022`, title: `Strohmann Tarock: Nichts für Dummies!`},{ url: `/de/lake_constance_jass/`, date: `10 Dec 2022`, title: `Lake Constance Jass`},{ url: `/de/garbage/`, date: `13 Oct 2022`, title: `Garbage: A Two-Player Easy as Taking Out Trash`},{ url: `/de/sixty-six/`, date: `09 Oct 2022`, title: `66: Ein Klassiker für zwei`},],jass: [{ url: `/de/offenbach_molotov/`, date: `11 Dec 2022`, title: `Do Your Worst: Offenbach Molotov!`},{ url: `/de/lake_constance_jass/`, date: `10 Dec 2022`, title: `Lake Constance Jass`},],threeplayer: [{ url: `/de/tapp_tarock/`, date: `18 Dec 2022`, title: `Offenbach Tapp: Tarock zu dritt`},{ url: `/de/offenbach_molotov/`, date: `11 Dec 2022`, title: `Do Your Worst: Offenbach Molotov!`},],fourplayer: [{ url: `/de/offenbach_molotov/`, date: `11 Dec 2022`, title: `Do Your Worst: Offenbach Molotov!`},],fiveplayer: [{ url: `/de/offenbach_molotov/`, date: `11 Dec 2022`, title: `Do Your Worst: Offenbach Molotov!`},],tarot: [{ url: `/de/strawman_tarot/`, date: `19 Dec 2022`, title: `Strohmann Tarock: Nichts für Dummies!`},{ url: `/de/tapp_tarock/`, date: `18 Dec 2022`, title: `Offenbach Tapp: Tarock zu dritt`},], }

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