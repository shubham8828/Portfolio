document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('certificate-modal');
  const modalImg = document.getElementById('certificate-img');
  const closeBtn = document.querySelector('.close');
  const body = document.body;

  document.querySelectorAll('.certificate-item a').forEach(item => {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      const imgSrc = this.getAttribute('data-img-src');
      modalImg.src = imgSrc;
      modal.style.display = 'block';
      body.classList.add('modal-open'); // Disable background scroll
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    body.classList.remove('modal-open'); // Re-enable background scroll
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
      body.classList.remove('modal-open'); // Re-enable background scroll
    }
  });
});
