const container = document.querySelector('.checkbox-grid');
const message = document.getElementById('message');


const checkboxSize = 40; 
const gap = 5; 
const paddingAndBorder = 20; 


const columns = Math.floor((window.innerWidth - paddingAndBorder) / (checkboxSize + gap));
const rows = Math.floor((window.innerHeight - paddingAndBorder) / (checkboxSize + gap));
container.style.gridTemplateColumns = `repeat(${columns}, ${checkboxSize}px)`;
container.style.gridTemplateRows = `repeat(${rows}, ${checkboxSize}px)`;


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


