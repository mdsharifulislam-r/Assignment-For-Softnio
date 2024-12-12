const checkBtn = document.getElementById("checkout")
const addBtn = document.getElementById("add")
const cartContainer = document.getElementById('cart')
const shade = document.getElementById("shade")
addBtn.addEventListener("click",()=>{
    checkBtn.classList.toggle("active")
})

checkBtn.addEventListener("click",()=>{
    closeCart()
    checkBtn.classList.toggle("active")
})
shade.addEventListener("click",closeCart)






function closeCart(){
    cartContainer.classList.toggle("active")
    
}
