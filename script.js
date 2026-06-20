let count = 0 

let btn = document.querySelector('.click')


btn.addEventListener("click" , () =>{
    count++
    btn.textContent = count
})