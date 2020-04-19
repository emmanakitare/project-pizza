// business logic
var pizza = {
    size: ["small", "medium", "large"]
    kindOfCrust: ["crisped", "stuffed", "gluten-free"]
    typeOfTopping: ["pepperoni", "mushrooms", "onions", "extra-cheese"]
}

function getInput() {
    size = parseInt (document.getElementById("small").value);
    kindOfCrust = parseInt (document.getElementById("medium").value);
    typeOfTopping = parseInt (document.getElementById("large").value);

if (size==="") {
    alert ("choose size of pizza");
    return false;
} elseif (kindOfCrust==="") {
    alert ("choose the kind of crust you would like on your pizza");
    return false;
} else {
    alert ("choose the type of topping you would like");
}
function calculatePrice() {
    getInput();
    totalPrice = (size + kindOfCrust + typeOfTopping)
    let (totalPrice);
    return (Math.floor(totalPrice));
    
}

let size[0] = 500
let size[1] = 700
let size[2] = 900
let kindOfCrust[""] = 50
let typeOfTopping[""] = 50

}