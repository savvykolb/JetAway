const bookingFormHandler = async (event) => {
    event.preventDefault();
  
    const firstName = document.querySelector('#inputFname').value.trim();
    const lastName = document.querySelector('#inputLname').value.trim();
    const email = document.querySelector('#inputEmail').value.trim();
    const phoneNumber = document.querySelector('#inputPhone').value.trim();
    const address = document.querySelector('#inputAddress').value.trim();
    const cityTown = document.querySelector('#inputCity').value.trim();
    const state = document.querySelector('#inputState').value.trim();
    const zipcode = document.querySelector('#inputZip').value.trim();
    const Bday = document.querySelector('#inputBday').value.trim();
    const destination = document.querySelector('#destination').value.trim();
  
    if (firstName && lastName && email && phoneNumber && address && cityTown && state && zipcode && Bday && destination) {
        const response = await fetch('/api/booking/book', {
            method: 'POST',
            body: JSON.stringify({ firstName, lastName, email, phoneNumber, address, cityTown, state, zipcode, Bday, destination }),
            headers: { 'Content-Type': 'application/json' }
        });
        console.log('response:', response)
    }};
  
    //   if (response.ok) {
    //     const requestOptions = {
    //       method: 'POST',
    //       redirect: 'follow'
    //     };

document
.querySelector('.booknow')
.addEventListener('click', bookingFormHandler)