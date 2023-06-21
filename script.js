let userLocationEl = document.querySelector('.user-location');
let mylocationBtnEl = document.querySelector('.myLocationBtn');


mylocationBtnEl.addEventListener('click', () => {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getLocation)
  }
  else {
    userLocationEl.innerText = 'geolocation not support';
  }

});


const getLocation = async (position) => {
 let response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`);

 let data = await response.json();

 console.log(data);
 userLocationEl.innerText = `${data.address.state_district}, ${data.address.state}, ${data.address.country} `
}