console.log("test")

let divWrapper = document.querySelectorAll(".section__wrapper")
let header2 = document.querySelectorAll("h2")

header2.forEach((h2)=> {
    h2.addEventListener('click', () => {
    h2.nextElementSibling.classList.toggle('hidden')
      
    divWrapper.forEach((div) =>{
    div.addEventListener("click", () => {
    div.classList.add('hidden')
        })
    })
    })
  })


  



/* 
let sections = document.querySelectorAll(".job")
console.log(sections)
let divWrapper = document.querySelectorAll(".job__wrapper")
console.log(divWrapper)

sections.forEach((section) => {
 section.addEventListener("click", () => {
       console.log("funguju")
        if(){
            console.log("JE to hidden")
        }




})
})



me.addEventListener("click", () => {
    if(jobContent.classList.contains("hidden")){
    jobContent.classList.remove("hidden")
    }else {
        jobContent.classList.add("hidden")
    }})

*/