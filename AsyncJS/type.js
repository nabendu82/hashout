//Promise.all
const promise1 = Promise.resolve('Eat');
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 3000, ' Code'));
const promise3 = Promise.resolve(' Sleep');
const promise4 = new Promise((resolve, reject) => setTimeout(resolve, 2000, ' Repeat'));

Promise.all([promise1, promise2, promise3, promise4]).then(values => document.body.innerHTML = `${values}`)