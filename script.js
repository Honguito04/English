const flavors = {
  guava: { name: 'Guava & raspberry', description: 'A cheerful combination of tropical guava and raspberry. This fruity duo brings a playful twist to our artisanal ice cream selection.' },
  strawberry: { name: 'Strawberry', description: 'A familiar favorite with a fruity personality. Our strawberry option keeps snack time simple, appealing, and easy to enjoy.' },
  chocolate: { name: 'Choco-banana', description: 'Chocolate and banana come together in a comforting combination. A delicious option for students who love these two classic flavors.' }
};
const dialog = document.querySelector('#flavor-dialog');
const closeDialog = () => dialog.close();
document.querySelectorAll('[data-flavor]').forEach(button => {
  button.addEventListener('click', () => {
    const flavor = flavors[button.dataset.flavor];
    document.querySelector('#dialog-title').textContent = flavor.name;
    document.querySelector('#dialog-description').textContent = flavor.description;
    dialog.showModal();
    document.body.classList.add('modal-open');
  });
});
document.querySelector('.dialog-close').addEventListener('click', closeDialog);
document.querySelector('.dialog-done').addEventListener('click', closeDialog);
dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeDialog();
});
