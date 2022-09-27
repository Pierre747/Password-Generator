//^ My default values :

const dataLowercase = 'qwertyuiopasdfghjklzxcvbnm';
const dataUppercase = 'QWERTYUIOPASDFGHJKLZXCVBNM'; // or dataLowercase.toUppercase();
const dataNumbers = '1234567890';
const dataSymbols = '!@#$%^&""*()_+éèïâáàó-={}[]:;\'\',.?/|<>';
const rangeValue = document.getElementById('password-length'); // it gives me a number that will be used as multiplier
const passwordOutput = document.getElementById('password-output');

const mouses = document.querySelectorAll('.mouse');

window.addEventListener('mousemove', (e) => {
	mouses.forEach((mouse) => {
		mouse.style.top = e.y + 'px';
		mouse.style.left = e.x + 'px';
	});
});

//^ My app :

const generatePassword = () => {
	let data = [];
	let password = '';

	lowercase.checked
		? data.push(...dataLowercase) // I use the spread operator to insert the value in the existing array
		: console.log('lowercase not selected');

	uppercase.checked
		? data.push(...dataUppercase)
		: console.log('uppercase not selected');

	numbers.checked
		? data.push(...dataNumbers)
		: console.log('numbers not selected');

	symbols.checked
		? data.push(...dataSymbols)
		: console.log('symbols not selected');

	if (data.length === 0) {
		alert('veuillez sélectionner des critères');
		return;
	}

	for (i = 0; i < rangeValue.value; i++) {
		password += data[Math.floor(Math.random() * data.length)]; // each random pick generated is added into password because of the += it's not erased at every loop
		//console.log(password);
	}

	passwordOutput.value = password; // it displays the value of the freshly generated password into my top input
};

//^ Copy function :

const copyPassword = () => {
	passwordOutput.select();
	passwordOutput.setSelectionRange(0, 99999); // It allows mobile users to use the copy function
	document.execCommand('copy');
	copied.style.visibility = 'visible';
	copied.classList.add = '.transition';

	setTimeout(() => {
		copied.style.visibility = 'hidden';
	}, 3000);
};

const displayCopyButton = () => {
	copy.style.visibility = 'visible';
	copy.addEventListener('click', copyPassword);
};

generateButton.addEventListener('click', () => {
	generatePassword();
	displayCopyButton();
}); // Execute the app
