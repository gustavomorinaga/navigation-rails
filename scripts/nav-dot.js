const navDot = document.querySelector('nav.nav-dot ul');

navDot.addEventListener('click', event => {
	const target = event.target.closest('li');
	if (!target) return;

	const active = navDot.querySelector('li.active');
	active.classList.remove('active');

	target.classList.add('active');
});
