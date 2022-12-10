const categories = { two-player: [{ url: `https://thejunkyard.cc/oldcardgames/posts/garbage_cardgame/`, date: `13 Oct 2022`, title: `A Two-Player Easy as Taking Out Trash: Garbage`},{ url: `https://thejunkyard.cc/oldcardgames/posts/sixty-six_cardgame/`, date: `09 Oct 2022`, title: `Get Your Kicks With '66': A Classic German Cardgame`},{ url: `https://thejunkyard.cc/oldcardgames/posts/blitz_cardgame/`, date: `09 Oct 2022`, title: `An Electrified Upgrade on Blackjack: Blitz!`},],German: [{ url: `https://thejunkyard.cc/oldcardgames/posts/sixty-six_cardgame/`, date: `09 Oct 2022`, title: `Get Your Kicks With '66': A Classic German Cardgame`},{ url: `https://thejunkyard.cc/oldcardgames/posts/blitz_cardgame/`, date: `09 Oct 2022`, title: `An Electrified Upgrade on Blackjack: Blitz!`},],many-player: [{ url: `https://thejunkyard.cc/oldcardgames/posts/pigtail_cardgame/`, date: `13 Oct 2022`, title: `Japanese Party Hit: Pigtail!`},{ url: `https://thejunkyard.cc/oldcardgames/posts/durak_cardgame/`, date: `12 Oct 2022`, title: `Gang Up on Opponents and Don't be the Dummy: Durak`},],Eastern-European: [{ url: `https://thejunkyard.cc/oldcardgames/posts/durak_cardgame/`, date: `12 Oct 2022`, title: `Gang Up on Opponents and Don't be the Dummy: Durak`},],Japanese: [{ url: `https://thejunkyard.cc/oldcardgames/posts/garbage_cardgame/`, date: `13 Oct 2022`, title: `A Two-Player Easy as Taking Out Trash: Garbage`},{ url: `https://thejunkyard.cc/oldcardgames/posts/pigtail_cardgame/`, date: `13 Oct 2022`, title: `Japanese Party Hit: Pigtail!`},], }

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