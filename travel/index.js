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
const inputPassword = document.querySelector('.pop-up__input-password').value;

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




