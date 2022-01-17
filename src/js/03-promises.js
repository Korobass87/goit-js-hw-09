import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.2.min.css';
Notiflix.Notify.init({
  timeout: 5000,
   
});

const submit = document.querySelector('button')
const delay = document.querySelector('input[name="delay"]')
const step = document.querySelector('input[name="step"]')
const amount = document.querySelector('input[name="amount"]')

let newDelay 

submit.addEventListener('click', onSubmit)

function onSubmit(event) {
  event.preventDefault()
  
  for (let i = 0; i < Number(amount.value); i += 1) {
    newDelay = Number(delay.value)
    if (i > 0) {
      newDelay = Number(delay.value) + (i * Number(step.value))
    }  
      
    
    createPromise(i + 1, newDelay)
      .then(logSuccess)
      .catch(logError)
 }
}

const logSuccess = (val) => {
  console.log(`✅ Fulfilled promise ${val.position}  in ${val.delay1}ms`);
  Notiflix.Notify.success(`Fulfilled promise ${val.position}  in ${val.delay1}ms`)
};

const logError = (val) => {
  console.warn(`❌ Rejected promise ${val.position} in ${val.delay1}ms`);
  Notiflix.Notify.failure(`Rejected promise ${val.position} in ${val.delay1}ms`)
};



function createPromise(position, delay1) {
  
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
        
        setTimeout(() => {
            if (shouldResolve) {
              resolve({position, delay1})
            } else {
              reject({ position, delay1 })
            }
        }, delay1);
    });
}

