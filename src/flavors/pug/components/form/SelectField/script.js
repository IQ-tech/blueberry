export default function SelectFieldScript() {
	// Elements
	const selectWrapper = document.getElementById("iq-select-wrapper");
	const selectElm = document.getElementById("iq-select-field");

	// Event Listeners
	selectElm.addEventListener("change", () => {
		if (selectElm.value == "") return;

		selectWrapper.classList.remove("iq-select-field--empty");
	});
}
