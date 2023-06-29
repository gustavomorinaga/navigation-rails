const navRounded = document.querySelector('nav.nav-rounded ul');
const rounded = navRounded.querySelector('div.rounded');

/**
 * @param {HTMLElement} previousElement
 * @param {HTMLElement} targetElement
 * @returns {void}
 * */
const flipRounded = (previousElement, targetElement) =>
	requestAnimationFrame(() =>
		rounded.animate(
			[
				{
					transform: `translateY(${previousElement.offsetTop}px)`,
				},
				{
					transform: `translateY(${targetElement.offsetTop}px)`,
				},
			],
			{
				duration: 1000,
				easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
				fill: 'forwards',
			}
		)
	);

navRounded.addEventListener('click', event => {
	const target = event.target.closest('li');

	if (!target) return;

	const active = navRounded.querySelector('li.active');
	active.classList.remove('active');

	const icon = active.querySelector('i');
	icon.classList.replace('ph-duotone', 'ph');

	target.classList.add('active');
	target.querySelector('i').classList.replace('ph', 'ph-duotone');

	flipRounded(active, target);
});
