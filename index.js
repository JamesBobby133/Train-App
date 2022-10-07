//document.getElementById("count-el").innerText = 0
let countEl = document.getElementById("count-el")
var saveEl = document.querySelector("#save-el")
console.log(countEl)
console.log(saveEl)

let count = 0
function increment() {
    count += 1
    countEl.textContent = count
    console.log(count)   
}
function save() {
     let display = count + " - "
     saveEl.textContent += display
     console.log(count);
     countEl.textContent = 0
     count = 0
    
}

