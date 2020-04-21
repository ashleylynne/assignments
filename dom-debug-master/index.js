const colors = ["red", "blue", "green"]

// the button function

// document.getElementById("add").addEventListener("click", function(e){
//     const subItem = createSubItem(e)
//     var list = document.getElementById("list")
//     list.append(subItem)
    
// })

var list = document.getElementById("list")

document.getElementById("add").addEventListener("submit", function(event) {
    event.preventDefault()
    const items = document.getElementById("input").value
    console.log(items)
    list.appendChild(items)
})


    

function createDropDown(){
    const dropDown = document.createElement("select")
    for (let i = 0; i < colors; i++){
        const option = createElement("option") 
        option.innerHTML = colors[i]
        option.value = colors[i]
        dropDown.append(option)
    }
    dropDown.addEventListener("onchange", function(e){
        e.target.parent.backgroundColor = e.target.value;
        return dropDown;
    })
    
}

function createSubItem(e){
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input")
    subItem.textContent = subItemValue
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem  
}

 


//goal: figure out why this man's shitty code doesn't work