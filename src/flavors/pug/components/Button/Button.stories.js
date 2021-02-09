import Button from "./index.pug";
import "core/components/Button.styl";

export default {
	title: "Componentes/button",
};

export const Primary = () => Button({ text: "Primary button" });

export const PrimaryInverted = () =>
	Button({ text: "Primary inverted button", color: "inverted" });

export const PrimaryDanger = () =>
	Button({ text: "Primary danger button", color: "danger" });

export const PrimaryDisabled = () =>
	Button({ text: "Primary disabled button", disabled: true });

export const PrimaryLoading = () =>
	Button({ text: "Primary loading button", loading: true });

export const Secondary = () =>
	Button({ text: "Secondary button", type: "secondary" });

export const SecondaryInverted = () =>
	Button({
		text: "Secondary inverted button",
		type: "secondary",
		color: "inverted",
	});

export const SecondaryDisabled = () =>
	Button({
		text: "Secondary disabled button",
		type: "secondary",
		disabled: true,
	});

export const TextButton = () => Button({ text: "Text Button", type: "text" });

export const TextButtonInverted = () =>
	Button({ text: "Text Button inverted", type: "text", color: "inverted" });

export const SmallButton = () =>
	Button({ text: "Small button", size: "small" });

export const MediumButton = () =>
	Button({ text: "Medium button", size: "medium" });

export const LargeButton = () =>
	Button({ text: "Large button", size: "large" });
