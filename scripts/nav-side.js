const navSide = document.querySelector('nav.nav-side ul');

navSide.addEventListener('click', event => {
	const target = event.target.closest('li');
	if (!target) return;

	const active = navSide.querySelector('li.active');
	active.classList.remove('active');

	const icon = active.querySelector('i');
	icon.classList.replace('ph-duotone', 'ph');

	target.classList.add('active');
	target.querySelector('i').classList.replace('ph', 'ph-duotone');

	target.classList.add('active');
});
