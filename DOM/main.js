// console.log(window);
//Grab Single element
// const form = document.getElementById('my-form');
// console.log(form);

// console.log(document.querySelector('.container'));
// console.log(document.querySelector('h1'));
// console.log(document.querySelector('#my-form'));

//Select multiple item
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));
// console.log([34, 56, 78]);

//Iterate through
// const nodeItems = document.querySelectorAll('.item');
// const colItems = document.getElementsByClassName('item');

// nodeItems.forEach(item => console.log(item));
// // colItems.forEach(item => console.log(item));
// for(let i=0; i<colItems.length; i++){
//     console.log(colItems[i])
// }

//DOM manipulation
// const ul = document.querySelector('.items');
// // ul.remove();
// const btn = document.querySelector('.btn');

// btn.addEventListener('click', e => {
//     e.preventDefault();
//     // console.log(e.target.value);
//     ul.firstElementChild.textContent = 'HTML';
//     ul.children[1].innerText = 'CSS';
//     ul.lastElementChild.innerHTML = '<h3>JavaScript</h3><p>Language of web</p>';
//     btn.style.backgroundColor = 'blue';
//     btn.style.fontSize = '16px';
//     btn.style.textTransform = 'uppercase';
// })

//Form submit
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

//Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerText = 'Please enter all fields'
        //Remove error after 3 seconds
        setTimeout(() => msg.remove(), 3000)
    } else {
        const li = document.createElement('li');
        li.append(`${nameInput.value} : ${emailInput.value}`);
        userList.append(li);
        nameInput.value = '';
        emailInput.value = '';
    }
}

