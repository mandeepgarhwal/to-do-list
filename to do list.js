x = document.getElementById("addicon")
console.log(x)
console.log("this is js file")
y = document.getElementById("addbutton")
addsound = document.createElement("audio")
addsound.src = "./add.mp3"
document.body.appendChild(addsound)
completesound = document.createElement("audio")
completesound.src = "./complete.mp3"
document.body.appendChild(completesound)
deletesound = document.createElement("audio")
deletesound.src = "./delete.mp3"
document.body.appendChild(deletesound)
function addition() {
    addsound.play()
    console.log(1)
    n = document.createElement("li")
    // n.innerText = "this is new entry"
    n1 = document.createElement("h2")
    n1.style.backgroundColor = "white"
    n1.style.width = "150px"
    n1.style.height = "30px"
    n1.style.marginTop = "auto"
    console.log(document.getElementById("textinput").value)
    n1.innerHTML = document.getElementById("textinput").value
    document.getElementById("textinput").value = ""


    
    cmpltbutton = document.createElement("i")
    cmpltbutton.classList.add("fa")
    cmpltbutton.classList.add("fa-check")
    cmpltbutton.style.ariaHidden
    // cmpltbutton.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>'
    cmpltbutton.style.fontSize = "30px"
    dltbutton = document.createElement("i")
    dltbutton.classList.add("fa")
    dltbutton.classList.add("fa-trash")
    dltbutton.style.ariaHidden
    // dltbutton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'
    dltbutton.style.fontSize = "27px"
    cmpltbutton.style.backgroundColor = "red"
    dltbutton.style.backgroundColor = "green"
    cmpltbutton.style.color = "white"
    dltbutton.style.color = "white"
    dltbutton.style.width = "30px"
    n.style.padding = "5px"

    // dltbutton.aria-hiden

    z = document.getElementById("listcontainer")
    z.appendChild(n)
    n.appendChild(n1)
    n.appendChild(cmpltbutton)
    n.appendChild(dltbutton)
    number = z.children.length
    n.classList.add(number)
    n.classList.add("task")
    n1.classList.add(number)
    n1.classList.add("newentry")
    cmpltbutton.classList.add(number)
    cmpltbutton.classList.add("cmplt")
    cmpltbutton.addEventListener('click', complete, false)
    dltbutton.classList.add(number)
    dltbutton.classList.add("dlt")
    dltbutton.addEventListener('click', dlt, false)
    console.log(cmpltbutton.classList[0])
    console.log(document.querySelectorAll('.cmplt'))


}
x.addEventListener("click", addition)
function complete(bclicked){
    completesound.play()
    console.log(5)
    // console.log(bclicked)
    // console.log(currententry = bclicked.target)
    console.log(bclicked.target.classList)
    currententry = bclicked.target.classList[2]
    console.log(currententry)
    text = document.querySelectorAll(".newentry")[currententry - 1]
    console.log(text)
    text.style.textDecoration= "underline"
    text.style.backgroundColor = "red"
}
function dlt(bclicked){
    deletesound.play()
    console.log(5)
    // console.log(bclicked)
    // console.log(currententry = bclicked.target)
    console.log(bclicked.target.classList)
    currententry = bclicked.target.classList[2]
    console.log(currententry)
    text = document.querySelectorAll(".task")[currententry - 1]
    console.log(text)
    text.style.display = "none"
}
// document.querySelectorAll('.cmplt').forEach((el) => {
//     el.addEventListener('click', complete)
//   })
// document.querySelector(".cmplt .1").addEventListener('click', complete)
