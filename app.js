
let firstName = document.getElementById('firstname');
let lastName = document.getElementById('lastname');
let city = document.getElementById('city');
let state = document.getElementById('state');
let zipCode = document.getElementById('zipcode');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let Qualifications = document.getElementById('Qualifications');
let temp_one = document.getElementById('temp-one');
let temp_two = document.getElementById('temp-two');
let temp_three = document.getElementById('temp-three');
let savedata = document.getElementById('savedata');
let buttonsCon = document.querySelector('.buttons');

savedata.addEventListener('click',function(){
    if(!firstName.value|| !lastName.value ||!city.value ||!state.value || !phone.value || !email.value ||!Qualifications.value){
        alert('please fill data')
    }else{
    localStorage.clear()
    let object = {
        firstName : firstName.value,
        lastName : lastName.value,
        city : city.value,
        state : state.value,
        zipCode : zipCode.value,
        phone : phone.value,
        email : email.value,
        Qualifications : Qualifications.value
    }
    localStorage.setItem('userdata',JSON.stringify(object))
    getitem();
    savedata.disabled = true    
    if(savedata.disabled){
        buttonsCon.style.display = 'block'

    }
}
})
function getitem (){
    var user = JSON.parse(localStorage.getItem('userdata'))||[];
    console.log(user)
}
window.onload= function(){
    localStorage.clear();
}
temp_one.addEventListener('click',()=>{
    window.location.replace('template1.html')
})
temp_two.addEventListener('click',()=>{
    window.location.href='template2.html'
})
temp_three.addEventListener('click',()=>{
    window.location.href = 'template3.html'
})