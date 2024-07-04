import React from "react";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
	{
		icon: <FaGithub />,
		url: "https://github.com/Hamza12398",
	},
	{
		icon: <FaLinkedin />,
		url: "https://www.linkedin.com/in/hamza-cherkaoui-a3a50b237/",
	},
];
const Social = ({ containerStyles, iconsStyles }) => {
	return (
		<div className={containerStyles}>
			{socials.map((social, index) => {
				return (
					<Link
						key={index}
						href={social.url}
						target="_blank"
						className={iconsStyles}
					>
						{social.icon}
					</Link>
				);
			})}
		</div>
	);
};

export default Social;
