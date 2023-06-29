const navChip = document.querySelector('nav.nav-chip ul');
const chip = navChip.querySelector('div.chip');

/**
 * @param {HTMLElement} previousElement
 * @param {HTMLElement} targetElement
 * @returns {void}
 * */
const flipChip = (previousElement, targetElement) =>
	requestAnimationFrame(() =>
		chip.animate(
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

navChip.addEventListener('click', event => {
	const target = event.target.closest('li');
	if (!target) return;

	const active = navChip.querySelector('li.active');
	active.classList.remove('active');

	const icon = active.querySelector('i');
	icon.classList.replace('ph-duotone', 'ph');

	target.classList.add('active');
	target.querySelector('i').classList.replace('ph', 'ph-duotone');

	flipChip(active, target);
});
