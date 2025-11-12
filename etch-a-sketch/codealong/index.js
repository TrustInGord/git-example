const $root = document.querySelector("#root");

const DEFAULT_GRID_SIZE = 16;


//Use $ for html tags

// console.log($root);

function createSquare() {
    const $square = document.createElement("div");

    $square.classList.add('square');

    $root.appendChild($square);

    $root.addEventListener('mouseover', listener);

    console.log($square);
}

function clickEvent(window) {
    window.addEventListener("click", function() {
        $square.classList.add('hovered');
    });
}

clickEvent($root);

for (let i = 0; i < DEFAULT_GRID_SIZE * DEFAULT_GRID_SIZE; i++) {
    createSquare();
}


const $userForm = document.createElement('form');
const $formSubmit = document.createElement('input');

$formSubmit.type = submit;
$formSubmit.value = "submit";

const $userPrompt = document.createElement('input');
$userPrompt.type = 'text';
$userPrompt.name = 'grid-number';

$userPrompt.required = true;
const $userPromptLabel = document.createElement('label');
const $labelDescript = document.createElement('span');

$labelDescription.textContent = "Enter the number of grid items";
$userPromptLabel.appendChild($labelDescription);


$userPromptLabel.appendChild($userPrompt);

$userForm.appendChild($userPromptLabel);
$userForm.appendChild($formSubmit);

$root.parentNode.prepend($userForm);

console.log($root.parentNode);

$userForm.addEventListener('submit', function(event) {
    console.log(event.target);
    event.preventDefeault();

    const data = new FormData(event.target);
    
    if (data.has('grid-number')) {
        console.log(data.get('grid-number'));

        const values = data.get('grid-number').split('x');

        const WIDTH = parseInt(values[0]);
        const HEIGHT = parseInt(values[1]);

        const SQUARE_WIDTH = $root.clientWidth / WIDTH;

        const SQUARE_HEIGHT = $root.clientHeight / HEIGHT;

        const MAX_SIZE = 41;
        
        if (WIDTH >= MAX_SIZE || HEIGHT >= MAX_SIZE) {
            $userPrompt.setCustomValidity('Grid width or height must be equal to or less than 40');
            $userPrompt.reportValidity();
            $userPrompt.setCustomValidity("");
            return;
        }


        $root.innerHTML = '';

        for (let i = 0; i < WIDTH * HEIGHT; i++) {
            const $square = document.createElement("div");
            $square.textContent = i + 1;

            $square.classList.add("square");

//            $square.style.height = `40px`;
        $square.style.width = `${Math.floor(SQUARE_WIDTH)}px`;
        $square.style.height = `${Math.floor(SQUARE_HEIGHT)}px`;

        $root.appendChild($square);

            $square.addEventListener('mouseover', function () {
                $square.style.backgroundColor = 'beige';
            });
        
            $square.addEventListener('mouseout', function () {
                $square.style.backgroundColor = 'red';
            });


        }




        console.log(values);
    }

})



