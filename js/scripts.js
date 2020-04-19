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
}
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
let kindOfCrust[0,1,2] = 50
let typeOfTopping[0,1,2,3] = 50



function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.addresses = [];
}
function Address(country, town) {
    this.country = country;
    this.town = town;
}

function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
}

Contact.prototype.fullname = function() {
    return this.firstname + " " + this.lastName;
}

Address.prototype.fullAddress = function() {
    return this.country + " " + this.town;
}

//user interface logic
$(document).ready(function() {

    $("#add-address").click(function() {
        $("#new-addresses").append('div class="new-addresses">' +
                                        '<div class="form-group">' +
                                            '<label for="new-country">Country</label>' +
                                            '<input type="text" class="form-control new-country">' +
                                        '</div>' +
                                        '<div class="form-group">' +
                                            '<label for="new-town">' +
                                            '<input type="text" class="form-control new-town">' +
                                        '</div>' +
                                    '</div>');
    });

    $("form#new-contact").submit(function(event) {
        event.preventDefault();

        var inputtedFirstName = $("input#new-first-name").val();
        var inputtedLastName = $("input#new-last-name").val();

        var newContact = new Contact(inputtedFirstName, inputtedLastName);

        $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

        $("input#new-first-name").val("");
        $("input#new-last-name").val("");
    });
    $(".new-address").each(function() {
        var inputtedCountry = $(this).find("input.new-country").val();
        var inputtedTown = $(this).find("input.new-town").val();
        var newAddress = new Address(inputtedCountry, inputtedTown);
        newContact.addresses.push(newAddresses);
    });

    $(".contact").last().click(function() {
        $("#show-summary").show();
        $("#show-summary h2").text(newContact.firstName);
        $(".first-name").text(newContact.firstName);
        $(".last-name").text(newContact.lastName);
        $("ul#addresses").text("");
        newContact.addresses.forEach(function(address) {
            $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
        });
    });
    $("#yes-button").click(function() {
        $("#address").show();
    });
});

