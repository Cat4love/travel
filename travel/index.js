console.log('Ваша оценка - 110 баллов\n1. Вёрстка валидная\n2. header, main, footer\n3. четыре элемента section (по количеству секций)\n4. только один заголовок h1\n5. три заголовка h2 (количество секций минус одна, у которой может быть заголовок h1)\n6. один элемент nav (панель навигации)\7. два списка ul > li > a (панель навигации, ссылки на соцсети)\n8. четыре кнопки button\n9. блок header \n10. секция preview \n11. секция steps \n12. секция destinations \n13. секция stories  \n14. блок footer \n15. для построения сетки используются флексы или гриды \n16. при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону \n17. фоновый цвет каждого блока и секции тянется на всю ширину страницы \n18. иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления \n19. изображения добавлены в формате .jpg \n20. есть favicon \n21. плавная прокрутка по якорям \n22. иконки соцсетей в футере при нажатии на них ведут на гитхаб автора проекта и на страницу курса (допускается доабвление своих вариантов иконок github или RSSchool) https://rs.school/js-stage0/ \n23. если в макете указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета \n24.обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы \n')
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



