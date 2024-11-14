const button = document.querySelector('#btn');
button.addEventListener('click',  function(e){
    console.log('the button works')
    console.log(e.type);
    console.log(e.target)
});

// Register a submit event listener on a form
const form = document.getElementById('myForm');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const nameInput = document.getElementById('name');
    const name = nameInput.value;
    console.log(`Submitted name: ${name}`);
    nameInput.value = '';
});