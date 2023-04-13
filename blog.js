let back = document.getElementById("back")
let about = document.getElementById("about")

back.addEventListener("click", (e) => {
    if(e.target.id === "back"){
        window.location.href = "https://mjmealey.github.io/frontpage/"
       }   })


about.addEventListener("click", (e) => {
    if(e.target.id === "about"){
      window.location.href ="https://mjmealey.github.io/aboutme/"
    }
})