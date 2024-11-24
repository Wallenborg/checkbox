
const container = document.querySelector('.checkbox-grid');
const message = document.getElementById('message');


const columns = Math.ceil(window.innerWidth / 55);
const rows = Math.ceil(window.innerHeight / 55);
const totalCheckboxes = columns * rows;


for (let i = 0; i < totalCheckboxes; i++) {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('checkbox');
  container.appendChild(checkbox);
}


function checkAllCheckboxes() {
  const allCheckboxes = document.querySelectorAll('.checkbox');
  const allChecked = Array.from(allCheckboxes).every(checkbox => checkbox.checked);

  if (allChecked) {
    message.classList.add('show'); 
  } else {
    message.classList.remove('show'); 
  }
}


container.addEventListener('change', checkAllCheckboxes);

