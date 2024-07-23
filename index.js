const toggleBtn = document.querySelector('.toggle')
const toggleIcon = document.querySelector('.toggle i')
const dropDownMenu = document.querySelector('.dropdown')

toggleBtn.onclick = function() {
	dropDownMenu.classList.toggle('open')
	const isOpen = dropDownMenu.classList.contains('open')

	toggleIcon.classList = isOpen
	? 'fa-solid fa-circle-xmark'
	: 'fa-solid fa-bars';
};
