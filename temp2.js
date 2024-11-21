let firstName = document.getElementById('firstname');
let lastName = document.getElementById('lastname');
let city = document.getElementById('city');
let state = document.getElementById('state');
let zipCode = document.getElementById('zipcode');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let Qualifications = document.getElementById('Qualifications');
let temp_one = document.getElementById('temp-one');
let temp_three = document.getElementById('temp-three');
let mainpage = document.getElementById('mainpage');


function getitem () {
    let user = JSON.parse(localStorage.getItem('userdata'))|| []
    fetchuserdata(user)
}

function fetchuserdata (object){
    firstName.innerText =`FIRST NAME : ${object.firstName}`;
    lastName.innerText = `LASTNAME : ${object.lastName}`;
    city.innerText = `CITY : ${object.city}`;
    state.innerText =  `STATE : ${object.state}`;
    zipCode.innerText = `ZIPCODE : ${object.zipCode}`;
    phone.innerText = `PHONENUMBER : ${object.phone}`;
    email.innerText = `EMAIL : ${object.email}`;
    Qualifications.innerText = `QUALIFICATIONS : ${object.Qualifications}`
}

getitem()
temp_one.addEventListener('click',()=>{
    window.location.href='template1.html'
})
temp_three.addEventListener('click',()=>{
    window.location.href = 'template3.html'
})
mainpage.addEventListener('click',()=>{
    window.location.href = `index.html`
})