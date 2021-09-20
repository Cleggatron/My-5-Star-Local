const commentFormEl = document.getElementById("review-form")

const addComment = async (event) => {
    event.preventDefault();
    
    const reviewTextEl = document.getElementById("reviewText")
    const reviewRatingEl = document.getElementById("reviewRating")

    const text = reviewTextEl.value
    const rating = reviewRatingEl.value

    //get our restaurant id for the current location
    let pathName = document.location.pathname;
    const restaurant_id = pathName.replace("/restaurant/", "");

    if(!text || !rating){
        alert("You have not entered either a score or a review!\n Please try again!");
        return;
    } else {
        const response = await fetch("/api/review", {
            method: "POST",
            body: JSON.stringify({text, rating, restaurant_id}),
            headers: ({"Content=Type" : "application/json"})
        })

        if(response.ok){
            document.location.reload();
        } else {
            alert("Failed to add review!\n Please try again!")
        }
    }

}

commentFormEl.addEventListener("submit", addComment);