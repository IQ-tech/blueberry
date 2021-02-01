import React from "react"

const FooterMenuLink = ({ title, link, index }) => {
	return (
		<li
			className="footer-menu__list-item"
			data-clicked={`footer-subitem-${index}`}
		>
			<a target="_blank" rel="noopener" href={link}>
				{title}
			</a>
		</li>
	)
}

export default FooterMenuLink
