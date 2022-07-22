console.log('Ваша оценка - 100 баллов')


// burger
const burgerItem = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
const menuCloseItem = document.querySelector('.header__nav-close');
const menuLinks = document.querySelectorAll('.header__link');
const backDiv = document.querySelector('.back_div');
const loginButton = document.querySelector('.header__submit');

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
//burger


//pop-up
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


loginButton.addEventListener('click', () => {
	popup.classList.remove('hidden');
	popupContent.classList.add('pop-up__content-on');
	if (popupContent.classList.contains('add_heigth')) {
		changePopup(); 
	};
})

accountLink.addEventListener('click', () => {
	popup.classList.remove('hidden');
	popupContent.classList.add('pop-up__content-on');
	if (popupContent.classList.contains('add_heigth')) {
		changePopup(); 
	};
})

popup.addEventListener('click', (event) => {
	if (event.target.classList.contains('pop-up')) {
		popup.classList.add('hidden');
		popupContent.classList.remove('pop-up__content-on');
	}
})


signInButton.addEventListener('click', () => {
	const inputEmail = document.querySelector('.pop-up__input-email').value;
	const inputPassword = document.querySelector('.pop-up__input-password').value;
	alert(`E-mail: ${inputEmail}\nPassword: ${inputPassword}`);
})



function changePopup() {
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
};

registerButton.addEventListener('click', changePopup);

//pop-up


//slider
const sliderLine = document.querySelector('.destinations__countrys');
const sliderNext = document.querySelector('.slider-next');
const sliderPrev = document.querySelector('.slider-prev');
const sliderDot1 = document.querySelector('.destination__scroll-ellipse-1');
const sliderDot2 = document.querySelector('.destination__scroll-ellipse-2');
const sliderDot3 = document.querySelector('.destination__scroll-ellipse-3');
const sliderArrow1 = document.querySelector('.slider__arrow1');
const sliderArrow2 = document.querySelector('.slider__arrow2');
const sliderArrow3 = document.querySelector('.slider__arrow3');
const sliderArrow4 = document.querySelector('.slider__arrow4');


let offset = 860;
	if (document.documentElement.clientWidth < 391) {
		offset = 375;
		sliderArrow1.classList.add('arrow-on');
		sliderArrow2.classList.add('arrow-on');
};





sliderNext.addEventListener('click', () => {
	if (document.documentElement.clientWidth < 391) {
		offset += 375;
		if (offset > 750) {
			offset = 750;
		};
		sliderLine.style.left = -offset + 'px';
		if (offset == 0) {
			sliderDot1.style.order = 0;
			sliderDot2.style.order = 1;
			sliderDot3.style.order = 2;
			sliderArrow1.classList.remove('arrow-on');
			sliderArrow2.classList.add('arrow-on');
			sliderArrow3.classList.add('arrow-on');
			sliderArrow4.classList.remove('arrow-on');
		} else if (offset == 375) {
			sliderDot1.style.order = 1;
			sliderDot2.style.order = 0;
			sliderDot3.style.order = 2;
			sliderArrow1.classList.add('arrow-on');
			sliderArrow2.classList.add('arrow-on');
			sliderArrow3.classList.remove('arrow-on');
			sliderArrow4.classList.remove('arrow-on');

		} else {
			sliderDot1.style.order = 2;
			sliderDot2.style.order = 0;
			sliderDot3.style.order = 1;
			sliderArrow1.classList.add('arrow-on');
			sliderArrow2.classList.remove('arrow-on');
			sliderArrow3.classList.remove('arrow-on');
			sliderArrow4.classList.add('arrow-on');
		};
	} else {
		offset += 860;
		if (offset > 1720) {
			offset = 1720;
		};
		sliderLine.style.left = -offset + 'px';
		if (offset == 0) {
			sliderDot1.style.order = 0;
			sliderDot2.style.order = 1;
			sliderDot3.style.order = 2;
		} else if (offset == 860) {
			sliderDot1.style.order = 1;
			sliderDot2.style.order = 0;
			sliderDot3.style.order = 2;
		} else {
			sliderDot1.style.order = 2;
			sliderDot2.style.order = 0;
			sliderDot3.style.order = 1;
		};
	};
});
	
sliderPrev.addEventListener('click', () => {
	if (document.documentElement.clientWidth < 391) {
		offset -= 375;
		if (offset < 0) {
			offset = 0;
		};
		sliderLine.style.left = -offset + 'px';
		if (offset == 0) {
			sliderDot1.style.order = 0;
			sliderDot2.style.order = 1;
			sliderDot3.style.order = 2;
			sliderArrow1.classList.remove('arrow-on');
			sliderArrow2.classList.add('arrow-on');
			sliderArrow3.classList.add('arrow-on');
			sliderArrow4.classList.remove('arrow-on');
		} else if (offset == 375) {
			sliderDot1.style.order = 1;
			sliderDot2.style.order = 0;
			sliderDot3.style.order = 2;
			sliderArrow1.classList.add('arrow-on');
			sliderArrow2.classList.add('arrow-on');
			sliderArrow3.classList.remove('arrow-on');
			sliderArrow4.classList.remove('arrow-on');
		} else {
			sliderDot1.style.order = 2;
			sliderDot2.style.order = 0;
			sliderDot3.style.order = 1;
			sliderArrow1.classList.add('arrow-on');
			sliderArrow2.classList.remove('arrow-on');
			sliderArrow3.classList.remove('arrow-on');
			sliderArrow4.classList.add('arrow-on');
		};
	} else {
		offset -= 860;
		if (offset < 0) {
			offset = 0;
		};
		sliderLine.style.left = -offset + 'px';
		if (offset == 0) {
			sliderDot1.style.order = 0;
			sliderDot2.style.order = 1;
			sliderDot3.style.order = 2;
		} else if (offset == 860) {
			sliderDot1.style.order = 1;
			sliderDot2.style.order = 0;
			sliderDot3.style.order = 2;
		} else {
			sliderDot1.style.order = 2;
			sliderDot2.style.order = 0;
			sliderDot3.style.order = 1;
		};
	};
});

//slider









