let newList = document.getElementById("new");
let btn = document.getElementById("btn");
let addList = document.getElementById("addList")

btn.addEventListener("click",function(e){
    let addNotes = newList.value;
    addList.innerHTML += `<span class="flex">
<p class="search">${addNotes}</p>
<i class="fa fa-trash"></i>
</span>
    `;
    newList.value = "";

    let disappear = document.querySelectorAll("i");
    for(let item of disappear){
        item.addEventListener("click",function(e){
            e.target.parentNode.remove();
        })
    }

    let span = document.querySelectorAll("span.flex");
    let para = document.querySelectorAll("p.search");
    let input = document.getElementById("search");

    input.addEventListener('input', function (e) {
        let currentValue = e.target.value;
        for (let i = 0; i < para.length; i++) {
            if (para[i].innerHTML.includes(`${currentValue}`)) {
                span[i].style.display = "flex";
            }
            else {
                span[i].style.display = "none";
            }
        }
    })
})