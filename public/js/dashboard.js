//Hannde all our requests here

const createRestaruant = async (event) => {
    event.preventDefault();

    const nameEl = document.getElementById("restaurant-name");
    const bioEl = document.getElementById("restaurant-bio");
    const locationEl = document.getElementById("restaurant-location");
    const websiteEl = document.getElementById("restaurant-website");

    const name = nameEl.value;
    const bio = bioEl.value;
    const location = locationEl.value;
    const website = websiteEl.value;

    if(!name || !bio || !location || !website){
        alert("Please make sure you have entered all the necessary data!")
        return;
    }else{
        const response = await fetch("/api/restaurant",{
            method: "POST",
            body: JSON.stringify({name, bio, location, website}),
            headers: ({"Content-Type": "application/json"})
        })

        if(response.ok){
            document.location.replace(`/dashboard`);
        }else{
            alert("Failed to create a new restaurant!")
        }
    }
}

const toggleVisibility = (event) => {
    event.preventDefault();
    const form = document.getElementById("new-restaurant-form");

    if(form.style.display === "none"){
        form.style.display ="block"
    } else {
        form.style.display = "none"
    }
}

if (document.getElementById("new-restaurant-form")){
    const restaurantForm = document.getElementById("new-restaurant-form");
    restaurantForm.addEventListener("submit", createRestaruant);
}

if (document.getElementById("newRestaurantToggle")){
    const formToggleEl = document.getElementById("newRestaurantToggle");
    formToggleEl.addEventListener("click", toggleVisibility);
}
