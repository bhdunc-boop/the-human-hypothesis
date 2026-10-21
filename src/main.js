const form = document.querySelector('#join-form');
const toast = document.querySelector('.toast');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
  toast.hidden = false;
  window.setTimeout(() => {
    toast.hidden = true;
  }, 3500);
});
