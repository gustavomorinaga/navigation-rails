const navBadge = document.querySelector('nav.nav-badge ul');

navBadge.addEventListener('click', event => {
	const target = event.target.closest('li');
	if (!target) return;

	const active = navBadge.querySelector('li.active');
	active.classList.remove('active');

	target.classList.add('active');
});
