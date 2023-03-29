let array = 
[
    "mele",
    "pomodori",
    "carciofi",
    "latte",
    "pasta",
    "succo",
    "pollo",
    "uova"
]

let i = 0;

while(i < array.length){

    document.getElementById('lista').innerHTML += `<li>${array[i]}</li>`;

    i++
}