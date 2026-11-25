
// Search for a place
function searchPlaces() {

    // Get the text typed by the user
    let search = document.getElementById("searchInput").value.toLowerCase();

    // Get all place cards
    let cards = document.getElementsByClassName("place-card");

    // Check every card
    for (let i = 0; i < cards.length; i++) {

        let name = cards[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

        // Show the card if its name matches
        if (name.includes(search)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}


// Filter places by category
function filterPlaces(category) {

    let cards = document.getElementsByClassName("place-card");

    for (let i = 0; i < cards.length; i++) {

        let placeCategory = cards[i].getAttribute("data-category");

        // Show all places
        if (category == "All") {
            cards[i].style.display = "block";
        }

        // Show only matching categories
        else if (placeCategory == category) {
            cards[i].style.display = "block";
        }

        // Hide other categories
        else {
            cards[i].style.display = "none";
        }
    }
}


// Show details when a button is clicked
function viewDetails(placeName) {

    alert("You selected: " + placeName);
}
