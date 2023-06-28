const navRounded = document.querySelector('nav.nav-rounded ul');

const flipRounded = (lastElement, currentElement) => {
	const first = lastElement.getBoundingClientRect();

	currentElement.classList.add('active');
	currentElement.querySelector('i').classList.replace('ph', 'ph-duotone');

	requestAnimationFrame(() => {
		const last = currentElement.getBoundingClientRect();

		const invert = first.top - last.top;

		currentElement.animate(
			[
				{
					opacity: 1,
					transform: `translateY(${invert}px)`,
				},
				{
					opacity: 1,
					transform: 'translateY(0)',
				},
			],
			{
				duration: 1000,
				easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
				fill: 'forwards',
			}
		);
	});
};

navRounded.addEventListener('click', event => {
	const target = event.target.closest('li');

	if (!target) return;

	const active = navRounded.querySelector('li.active');
	active.classList.remove('active');

	const icon = active.querySelector('i');
	icon.classList.replace('ph-duotone', 'ph');

	flipRounded(active, target);
});