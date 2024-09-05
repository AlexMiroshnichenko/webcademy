// toggle sidebar start
const buttonToggle = document.querySelector('.toggle-sidebar');
const sidebar = document.querySelector('.sidebar');

function sidebarToggle() {
	buttonToggle.classList.toggle('is-active');
	sidebar.classList.toggle('is-open');
}
buttonToggle.addEventListener('click', sidebarToggle);
// toggle sidebar end

//При клике на кнопку "Показать еще" появляются три скрытых карточки
const buttonShowMore = document.querySelector('.show-more');
const cardHidden = document.querySelectorAll('.card-hidden');

function showMoreCards() {
	cardHidden.forEach(function (card) {
		card.classList.remove('card-hidden');
	});
	buttonShowMore.remove();
}
buttonShowMore.addEventListener('click', showMoreCards);
//При клике на кнопку "Показать еще" появляются три скрытых карточки

//Показываем и скрываем виджеты сайтбара и меням положение инконки
const widgets = document.querySelectorAll('.widget');

widgets.forEach(function (item) {
	item.addEventListener('click', function (event) {
		if (event.target.classList.contains('widget-title')) {
			event.target.classList.toggle('widget-title--active');
			event.target.nextElementSibling.classList.toggle('widget-body--hidden');
		}
	});
});
//Показываем и скрываем виджеты сайтбара

//Отключение других чекбоксов если выбран чекбок с параметром Любая
const checkBoxAny = document.querySelector('#location-05');
const locationCheckBox = document.querySelectorAll('[data-location-param]');

checkBoxAny.addEventListener('change', function () {
	if (checkBoxAny.checked) {
		locationCheckBox.forEach(function (item) {
			item.checked = false;
		});
	}
});

//Отключение чекбок Любая если выбраны чекбоксы с другими параментрами
locationCheckBox.forEach(function (item) {
	item.addEventListener('change', function () {
		if (checkBoxAny.checked) {
			checkBoxAny.checked = false;
		}
	});
});

// Показываем еще три скрытых чекбокса при нажатии на кнопку Показать еще
const widgetShowMoreBtn = document.querySelector('.widget-show-more');
const widgetCheckboxHidden = document.querySelector('.widget-checkbox-hidden');

function showMoreCheckbox() {
	widgetCheckboxHidden.classList.add('widget-checkbox-hidden--active');
	widgetShowMoreBtn.remove();
}
widgetShowMoreBtn.addEventListener('click', showMoreCheckbox);
