const navGhost = document.querySelector('nav.nav-ghost ul');

navGhost.addEventListener('click', event => {
	const target = event.target.closest('li');
	if (!target) return;

	const active = navGhost.querySelector('li.active');
	active.classList.remove('active');

	target.classList.add('active');
});
