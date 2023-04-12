// const openModalButton = document.querySelector('#modal__open-button');
// const overlay = document.querySelector('#overlay');
// const closeButton = document.querySelector('.modal__header__close-button');
// const modal = document.querySelector('#modal');


// openModalButton.addEventListener('click', () => {
//   overlay.className = "active";
//   modal.className = "modal active"
// })

// closeButton.addEventListener('click', () => {
//     overlay.className = "";
//     modal.className = "modal";
// })

// overlay.addEventListener('click', () => {
//     overlay.className = "";
//     modal.className = "modal";
// })




const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.querySelector('#overlay');

openModalButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = document.querySelector(btn.dataset.modalTarget);
      openModal(modal);
    })
})


closeModalButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal')
        closeModal(modal);
    })
})

overlay.addEventListener('click', () => {
    const modal = document.querySelector('.modal.active');
    closeModal(modal)
})

function openModal(modal) {
    if(!modal) return
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if(!modal) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      overlay.classList.remove("active");
      modal.classList.remove("active");
    }
  });