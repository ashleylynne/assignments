const form = document.travelForm

const formData = form.firstName.value + form.lastName.value + form.gender.value + form.diet.value + form.location.value

form.addEventListener("submit", function(event) {
    event.preventDefault()
    alert("hi")
}

// Got everything but the alert button to work


// First name (text input)
// Last name (text input)
// Age (number input)
// Gender (radio buttons with 2 or more options)
// Location they're traveling to (select box with at least 3 options. You're an airline that doesn't fly to many places...)
// Whether they have any dietary restrictions (check boxes for vegetarian, kosher, lactose free, etc. Include at least 3 options)
// Each element of the form should be given a name attribute so you can access the data in JavaScript and do stuff with it.

// There should also be a button at the end of the form to submit it. Upon pressing the button, an alert should pop up that looks like this:
