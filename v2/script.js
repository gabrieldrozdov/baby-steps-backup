// Explanations
function openExplanation(id) {
	const section = document.querySelector(`#${id}`);
	section.dataset.explanation = 1;
}
function closeExplanation(id) {
	const section = document.querySelector(`#${id}`);
	section.dataset.explanation = 0;
}

// Title
const colors = ['pink', 'green', 'blue', 'yellow', 'purple', 'red'];
const title = document.querySelector('.header-title');
let temp = '';
let delay = 0;
for (let letter of title.innerText) {
	if (letter == " ") {
		letter = "&nbsp;";
	} else {
		delay++;
	}
	temp += `<span style="animation-delay: ${delay*20}ms; color: var(--${colors[delay%6]});">${letter}</span>`;
}
title.innerHTML = temp;

// Steps
for (let step of document.querySelectorAll('.step')) {
	const stepHeading = step.querySelector('.step-heading');
	stepHeading.addEventListener('click', () => {
		if (parseInt(step.dataset.content) == 1) {
			step.dataset.content = 0;
		} else {
			step.dataset.content = 1;
		}
	})
}

// Nav
function expandAll() {
	for (let step of document.querySelectorAll('.step')) {
		step.dataset.content = 1;
	}
}
function collapseAll() {
	for (let step of document.querySelectorAll('.step')) {
		step.dataset.content = 0;
	}
}

// Slideshows
function slideshowLeft(id) {
	const step = document.querySelector(`#${id}`);
	const slideshowContent = step.querySelector('.slideshow-content');
	slideshowContent.scrollLeft -= slideshowContent.offsetWidth;
}
function slideshowRight(id) {
	const step = document.querySelector(`#${id}`);
	const slideshowContent = step.querySelector('.slideshow-content');
	slideshowContent.scrollLeft += slideshowContent.offsetWidth;
}