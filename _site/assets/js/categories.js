const categories = { many_player: [{ url: `https://funcardgames.net/pigtail/`, date: `13 Oct 2022`, title: `Japanese Party Hit: Pigtail!`},{ url: `https://funcardgames.net/durak/`, date: `12 Oct 2022`, title: `Gang Up on Opponents and Don't be the Dummy: Durak`},{ url: `https://funcardgames.net/blitz/`, date: `09 Oct 2022`, title: `An Electrified Upgrade on Blackjack: Blitz!`},],German: [{ url: `https://funcardgames.net/sixty-six/`, date: `09 Oct 2022`, title: `Get Your Kicks With '66': A Classic German Cardgame`},{ url: `https://funcardgames.net/blitz/`, date: `09 Oct 2022`, title: `An Electrified Upgrade on Blackjack: Blitz!`},],easy: [{ url: `https://funcardgames.net/garbage/`, date: `13 Oct 2022`, title: `A Two-Player Easy as Taking Out Trash: Garbage`},{ url: `https://funcardgames.net/pigtail/`, date: `13 Oct 2022`, title: `Japanese Party Hit: Pigtail!`},{ url: `https://funcardgames.net/durak/`, date: `12 Oct 2022`, title: `Gang Up on Opponents and Don't be the Dummy: Durak`},{ url: `https://funcardgames.net/blitz/`, date: `09 Oct 2022`, title: `An Electrified Upgrade on Blackjack: Blitz!`},],two_player: [{ url: `https://funcardgames.net/lake_constance_jass/`, date: `10 Dec 2022`, title: `Lake Constance Jass`},{ url: `https://funcardgames.net/garbage/`, date: `13 Oct 2022`, title: `A Two-Player Easy as Taking Out Trash: Garbage`},{ url: `https://funcardgames.net/sixty-six/`, date: `09 Oct 2022`, title: `Get Your Kicks With '66': A Classic German Cardgame`},],strategic: [{ url: `https://funcardgames.net/lake_constance_jass/`, date: `10 Dec 2022`, title: `Lake Constance Jass`},{ url: `https://funcardgames.net/sixty-six/`, date: `09 Oct 2022`, title: `Get Your Kicks With '66': A Classic German Cardgame`},],Russian: [{ url: `https://funcardgames.net/durak/`, date: `12 Oct 2022`, title: `Gang Up on Opponents and Don't be the Dummy: Durak`},],party: [{ url: `https://funcardgames.net/pigtail/`, date: `13 Oct 2022`, title: `Japanese Party Hit: Pigtail!`},{ url: `https://funcardgames.net/durak/`, date: `12 Oct 2022`, title: `Gang Up on Opponents and Don't be the Dummy: Durak`},],Japanese: [{ url: `https://funcardgames.net/garbage/`, date: `13 Oct 2022`, title: `A Two-Player Easy as Taking Out Trash: Garbage`},{ url: `https://funcardgames.net/pigtail/`, date: `13 Oct 2022`, title: `Japanese Party Hit: Pigtail!`},],Austrian: [{ url: `https://funcardgames.net/lake_constance_jass/`, date: `10 Dec 2022`, title: `Lake Constance Jass`},], }

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