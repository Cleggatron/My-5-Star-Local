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
        form.style.display ="inline"
    } else {
        form.style.display = "none"
    }
}


const updateFormHandler = async (event) => {
    event.preventDefault();
    
    const restaurantName  = document.querySelector('#restaurant-name').value.trim();
    const restaurantLoc = document.querySelector('#restaurant-location').value.trim();
    const restaurantBio = document.querySelector('#restaurant-bio').value.trim();
    const restaurantWebsite = document.querySelector('#restaurant-website').value.trim();


    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
    
    if (restaurantName && restaurantLoc && restaurantWebsite) {
      const response = await fetch(`/api/restaurant/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ name: restaurantName, bio: restaurantBio, location: restaurantLoc, website: restaurantWebsite}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update post');
      }
    } else {
        alert("please enter name, location and website");
    }
  }
  };


  const delButtonHandler = async (event) => {

    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/restaurant/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete post');
      }
    }
  };


if(document
  .querySelector('#restaurant-delete')){

  document
  .querySelector('#restaurant-delete')
  .addEventListener('click', delButtonHandler);

  }

  if (document.querySelector('#restaurant-update')){

    document
  .querySelector('#restaurant-update')
  .addEventListener('submit', updateFormHandler);

  }

if (document.getElementById("new-restaurant-form")){
    const restaurantForm = document.getElementById("new-restaurant-form");
    restaurantForm.addEventListener("submit", createRestaruant);
}

if (document.getElementById("newRestaurantToggle")){
    const formToggleEl = document.getElementById("newRestaurantToggle");
    formToggleEl.addEventListener("click", toggleVisibility);
}


