const ReactIconTemplate = (componentName, iconSvg) => `
// This is a generated file, do not modify manually
import React from "react";

export default function ${componentName}({width = '100%', height = '100%', style = {}}){
	const componentStyles = {
		...style,
		...(!!width ? {width} : {}),
		...(!!height ? {height} : {})
	};

	return (
		<div 
			className="iq-icon iq-icon--${componentName}" 
			style={componentStyles} 
			dangerouslySetInnerHTML={{__html:'${iconSvg}'}} 
		/>
	)
}
`;

module.exports = ReactIconTemplate;
