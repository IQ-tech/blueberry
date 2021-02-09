export default function FooterClassicScript() {
	const footerMenus = document.querySelectorAll("[data-menu]");

	footerMenus.forEach((element) => {
		element.addEventListener("click", () => {
			if (
				element.parentElement.classList.contains(
					"footer-classic__links-group--open"
				)
			) {
				element.parentElement.classList.remove(
					"footer-classic__links-group--open"
				);
			} else {
				element.parentElement.classList.add(
					"footer-classic__links-group--open"
				);
			}
		});
	});
}
