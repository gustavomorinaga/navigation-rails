const navLabel = document.querySelector('nav.nav-label ul');

navLabel.addEventListener('click', event => {
	const target = event.target.closest('li');
	if (!target) return;

	const active = navLabel.querySelector('li.active');
	active.classList.remove('active');

	const icon = active.querySelector('i');
	icon.classList.replace('ph-fill', 'ph');

	target.classList.add('active');
	target.querySelector('i').classList.replace('ph', 'ph-fill');

	target.classList.add('active');
});
