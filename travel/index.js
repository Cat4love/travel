console.log('Ваша оценка - 85 баллов')
const burgerItem = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
const menuCloseItem = document.querySelector('.header__nav-close');
const menuLinks = document.querySelectorAll('.header__link');
const backDiv = document.querySelector('.back_div');

burgerItem.addEventListener('click', () => {
	menu.classList.add('header__nav-active');
	backDiv.classList.add('dark_mode_on');
});
menuCloseItem.addEventListener('click', () => {
	menu.classList.remove('header__nav-active');
	backDiv.classList.remove('dark_mode_on');
})
for (let i = 0; i < menuLinks.length; i += 1) {
	menuLinks[i].addEventListener('click', () => {
		menu.classList.remove('header__nav-active');
		backDiv.classList.remove('dark_mode_on');
	});
}

backDiv.addEventListener('click', () => {
	menu.classList.remove('header__nav-active');
	backDiv.classList.remove('dark_mode_on');
})



