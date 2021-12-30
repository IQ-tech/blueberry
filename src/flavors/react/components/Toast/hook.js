import React from "react";
import {
	OutlineMessageDanger,
	OutlineMessageInfo,
	OutlineMessageSuccess,
	OutlineMessageWarning,
} from "./../icons/generated/outline";

const useToast = () => {
	const icons = {
		success: () => <OutlineMessageSuccess />,
		info: () => <OutlineMessageInfo />,
		error: () => <OutlineMessageDanger />,
		warning: () => <OutlineMessageWarning />,
	};

	return {
		icons,
	};
};

export default useToast;
