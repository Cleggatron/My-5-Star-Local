
const newReviewHandler = async (event) => {
    event.preventDefault();
  
    const reviewText = document.querySelector('#reviewText').value.trim();
    const reviewScore = document.querySelector('#reviewScore').value;

    const id = document.querySelector('#restaurantCard').getAttribute('data-id');

    if (reviewText && reviewScore) {
      const response = await fetch(`/api/restaurant/${id}`, {
        method: 'POST',
        body: JSON.stringify({ text: reviewText, rating: reviewScore}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        document.location.replace(`/restaurant/${id}`);
      } else {
        alert('Failed to post comment');
      }
    }
  };


if(document.querySelector('#reviewForm')){

document
  .querySelector('#reviewForm')
  .addEventListener('submit', newReviewHandler);
}