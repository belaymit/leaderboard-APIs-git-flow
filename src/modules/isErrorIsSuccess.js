export const close = () => {
  const closeBtn = document.querySelector('.close-btn');
  const notify = document.querySelector('.alert');
  closeBtn.addEventListener('click', () => {
    notify.style.display = 'none';
  });
};

export const isSuccess = () => {
  const notify = document.querySelector('.alert');
  const msg = document.querySelector('.msg');
  notify.style.display = 'flex';
  msg.textContent = 'Score Added Successfully!';
  setTimeout(() => {
    notify.style.display = 'none';
  }, 3000);
};