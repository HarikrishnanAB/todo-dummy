
const additem=()=>{
    //   step1.read user input from textbox
    let userinput=document.querySelector("#inp").value

    // console.log(userinput)
    // step2 create list item
    let listitem=document.createElement("li")
    listitem.textContent=userinput
    let list=document.querySelector("#todo")
    list.appendChild(listitem)
    console.log(listitem);


}
let btn=document.querySelector("#btn")
btn.addEventListener("click",additem)