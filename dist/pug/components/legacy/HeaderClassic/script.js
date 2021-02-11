export default function HeaderClassicScript() {
	// elements
	const h = document.getElementById("iqHeader");
	const hamb = document.getElementById("hamb");
	const submenuButton = document.getElementById("submenuButton");
	const backButton = document.getElementById("close-menu-submenu");

	//states
	let isMobileMenuOpen = false;
	let submenuOpen = false;

	hamb.addEventListener("click", () => {
		isMobileMenuOpen = !isMobileMenuOpen;

		if (isMobileMenuOpen) {
			h.classList.add("header-classic--menu-mobile-open");
			hamb.classList.add("header-classic__hamburger--close");
		} else {
			h.classList.remove("header-classic--menu-mobile-open");
			hamb.classList.remove("header-classic__hamburger--close");
		}
	});

	submenuButton.addEventListener("click", (e) => {
		e.preventDefault();
		submenuOpen = !submenuOpen;

		if (submenuOpen) {
			h.classList.add("header-classic--submenu-open");
		} else {
			h.classList.remove("header-classic--submenu-open");
		}
	});

	backButton.addEventListener("click", (e) => {
		h.classList.remove("header-classic--submenu-open");
	});
}
