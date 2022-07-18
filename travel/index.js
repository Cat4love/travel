console.log('Ваша оценка - 85 баллов')
const burgerItem = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
const menuCloseItem = document.querySelector('.header__nav-close');
const menuLinks = document.querySelectorAll('.header__link');
const backDiv = document.querySelector('.back_div');
const loginButton = document.querySelector('.header__submit');
const popup = document.querySelector('.pop-up');
const popupContent = document.querySelector('.pop-up__content');
const signInButton = document.querySelector('.pop-up__signin');
const registerButton = document.querySelector('.pop-up__register');
const facebookButton = document.querySelector('.pop-up__facebook-button');
const googleButton = document.querySelector('.pop-up__google-button ');
const popupLine1 = document.querySelector('.pop-up__line1');
const popupLine2 = document.querySelector('.pop-up__line2');
const forgotText = document.querySelector('.pop-up__forgot-text');
const popupTitle = document.querySelector('.pop-up__title');
const promtText = document.querySelector('.pop-up__footer-promt');
const registerText = document.querySelector('.pop-up__footer-register');
const accountLink = document.querySelector('.account');




burgerItem.addEventListener('click', () => {
	menu.classList.add('header__nav-active');
	backDiv.classList.add('dark_mode_on');
	backDiv.classList.add('back_div_on');
});
menuCloseItem.addEventListener('click', () => {
	menu.classList.remove('header__nav-active');
	backDiv.classList.remove('dark_mode_on');
	backDiv.classList.remove('back_div_on');
})
for (let i = 0; i < menuLinks.length; i += 1) {
	menuLinks[i].addEventListener('click', () => {
		menu.classList.remove('header__nav-active');
		backDiv.classList.remove('dark_mode_on');
		backDiv.classList.remove('back_div_on');
	});
}
backDiv.addEventListener('click', () => {
	menu.classList.remove('header__nav-active');
	backDiv.classList.remove('dark_mode_on');
	backDiv.classList.remove('back_div_on');
})

loginButton.addEventListener('click', () => {
	popup.classList.toggle('hidden');
	popupContent.classList.toggle('pop-up__content-on');
})
accountLink.addEventListener('click', () => {
	popup.classList.toggle('hidden');
	popupContent.classList.toggle('pop-up__content-on');
})

popup.addEventListener('click', (event) => {
	if (event.target.classList.contains('pop-up')) {
		popup.classList.toggle('hidden');
		popupContent.classList.toggle('pop-up__content-on');
	}
})

signInButton.addEventListener('click', () => {
	const inputEmail = document.querySelector('.pop-up__input-email').value;
	const inputPassword = document.querySelector('.pop-up__input-password').value;
	alert(`E-mail: ${inputEmail}\nPassword: ${inputPassword}`);
})

registerButton.addEventListener('click', () => {
	facebookButton.classList.toggle('off');
	googleButton.classList.toggle('off');
	popupLine1.classList.toggle('off');
	forgotText .classList.toggle('off');
	popupTitle.classList.toggle('add_margin-title');
	signInButton.classList.toggle('add_margin-signin');
	popupLine2.classList.toggle('add_margin-line2');
	popupContent.classList.toggle('add_heigth');
	let check = (popupTitle.innerHTML === 'Log in to your account') ? popupTitle.innerHTML = 'Create account' : popupTitle.innerHTML = 'Log in to your account';
	let check1 = (promtText.innerHTML === 'Don’t have an account?') ? promtText.innerHTML = 'Already have an account?' : promtText.innerHTML = 'Don’t have an account?';
	let check2 = (registerText.innerHTML === 'Register') ? registerText.innerHTML = 'Log in' : registerText.innerHTML = 'Register';
	let check3 = (signInButton.innerHTML === 'Sign In') ? signInButton.innerHTML = 'Sign Up' : signInButton.innerHTML = 'Sign In';
})





