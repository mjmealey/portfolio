let homePage = document.getElementById("homePage")
let blog  = document.getElementById("blog")

homePage.addEventListener("click", (e) => {
    if(e.target.id === "homePage"){
       window.location.href = "https://mjmealey.github.io/portfolio/" 
    }
})

blog.addEventListener("click", (e) => {
    if(e.target.id === "blog"){
        window.location.href = "https://mjmealey.github.io/portfolio/blog.html"
    }
})
