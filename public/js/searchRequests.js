const nameSearchHandler = async (event) => {
    event.preventDefault();
  
    const nameSearch = document.querySelector('#nameSearch').value.trim();
   
    if (nameSearch) {
      const response = await fetch(`/name/${nameSearch}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        console.log("search good");
        document.location.replace(`/name/${nameSearch}`);

      } else {
        alert('failed to search');
      }
    }
  };

  const locationSearchHandler = async (event) => {
    event.preventDefault();
  
    const locSearch = document.querySelector('#locationSearch').value.trim();
   
    if (locSearch) {
      const response = await fetch(`/location/${locSearch}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        console.log("search good");
        document.location.replace(`/location/${locSearch}`);
      } else {
        alert('failed to search');
      }
    }
  };


document
  .querySelector('#locSearchForm')
  .addEventListener('submit', locationSearchHandler);




document
  .querySelector('#nameSearchForm')
  .addEventListener('submit', nameSearchHandler);
  