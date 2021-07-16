export default function controller({ main }) {
	main((_) => [events]);

	const events = ({ on }) => {
		on("click", ".iq-accordion__item", onClickItemHandler);
	};

	function onClickItemHandler(e) {
		const safeEvent = e || {};
		const target = safeEvent.target;
		if (target) {
			const accordionItemClass = "iq-accordion__item";
			const findParent = (element) => {
				const hasClass = element.classList.contains(accordionItemClass);
				return hasClass ? element : findParent(element.parentElement);
			};

			const isRightElement = target.classList.contains(accordionItemClass);
			const rightElm = isRightElement ? target : findParent(target);
			rightElm.classList.toggle("iq-accordion__item--open");
		}
	}
}
