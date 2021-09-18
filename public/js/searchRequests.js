const locationSearchHandler = async (event) => {
    event.preventDefault();
  
    const nameSearch = document.querySelector('#location-searchbox').value.trim();
   
    if (nameSearch) {
      const response = await fetch(`/name/${nameSearch}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        console.log("search good")
      } else {
        alert('failed to search');
      }
    }
  };

  if(document
    .querySelector('#location-searchbox')){
document
  .querySelector('#location-searchbox')
  .addEventListener('submit', locationSearchHandler);
  }