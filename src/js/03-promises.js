import Notiflix from 'notiflix';
const refs = {
  dataForm: document.querySelector('.form'),
  firstDelayInput: document.querySelector('input[name="delay"]'),
  delayStepInput: document.querySelector('input[name="step"]'),
  amountStep: document.querySelector('input[name="amount"]'),
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.5;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        reject({ position, delay });
      }
      resolve({ position, delay });
    }, delay);
  });
}

function onSubmit(e) {
  e.preventDefault();
  const amount = refs.amountStep.value;
  let delay = Number(refs.firstDelayInput.value);
  let stepDelay = Number(refs.delayStepInput.value);

  for (let index = 1; index <= amount; index += 1) {
    createPromise(index, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
    delay += stepDelay;
  }
}
refs.dataForm.addEventListener('submit', onSubmit, { once: true });
