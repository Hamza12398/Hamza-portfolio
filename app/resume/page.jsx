"use client";

import { LucideOrigami } from "lucide-react";
import React from "react";
import {
	FaJs,
	FaCss3,
	FaReact,
	FaHtml5,
	FaTypo3,
	FaNodeJs,
	FaGit,
	FaTailwindCss,
} from "react-icons/fa";

import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

import { TabsTrigger } from "@/components/ui/tabs";
import { Tabs, TabsContent, TabsList } from "@/Components/ui/tabs";
import { Tooltip } from "@/Components/ui/tooltip";
import { motion } from "framer-motion";

const about = {
	title: "about me",
	description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatum blanditiis at voluptatibus rem officiis asperiores laborum, expedita odio maiores, aliquid provident fugit earum, inventore reiciendis temporibus dicta est non?",

	info: [
		{
			fieldName: "Name",
			fieldValue: "Hamza Cherkaoui",
		},
		{
			fieldName: "Phone",
			fieldValue: "(+212) 6 93918467",
		},
		{
			fieldName: "Experience",
			fieldValue: "+2 Years",
		},
		{
			fieldName: "Nationality",
			fieldValue: "Morroccan",
		},
		{
			fieldName: "Email",
			fieldValue: "hamzacherkaoui806@gmail.com",
		},

		{
			fieldName: "Freelancing",
			fieldValue: "available",
		},
		{
			fieldName: "Languages",
			fieldValue: "French, English, Arabic, Spanish",
		},
	],
};

const experience = {
	icon: "",
	description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatum blanditiis at voluptatibus rem officiis asperiores laborum, expedita odio maiores, aliquid provident fugit earum, inventore reiciendis temporibus dicta est non?",
	title: "My Experience",
	items: [
		{
			Company: "1337",
			Duration: "2023-Present",
			Position: "Front-End Developer",
		},
		{
			Company: "Home",
			Duration: "2023-2024",
			Position: "Freelance Front-End Developer",
		},
		{
			Company: "Online-Courses",
			Duration: "2020-2022",
			Position: "Web Developer",
		},
	],
};

const education = {
	icon: "",
	description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatum blanditiis at voluptatibus rem officiis asperiores laborum, expedita odio maiores, aliquid provident fugit earum, inventore reiciendis temporibus dicta est non?",
	title: "My Experience",
	items: [
		{
			institution: "1337",
			Duration: "2023-Present",
			Position: "Front-End Developer",
		},
		{
			institution: "Online-Courses",
			Duration: "2020-2022",
			Position: "Web Developer",
		},
	],
};

const skills = {
	title: "My Skills",
	description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatum blanditiis at voluptatibus rem officiis asperiores laborum, expedita odio maiores, aliquid provident fugit earum, inventore reiciendis temporibus dicta est non?",
	skillsList: [
		{
			icon: <FaHtml5 />,
			name: "HTML",
		},
		{
			icon: <FaCss3 />,
			name: "CSS",
		},
		{
			icon: <FaJs />,
			name: "javaScript",
		},
		{
			icon: <FaReact />,
			name: "React-Js",
		},
		{
			icon: <FaNodeJs />,
			name: "Node Js",
		},
		{
			icon: <FaGit />,
			name: "Git",
		},
		{
			icon: <FaTailwindCss />,
			name: "Tailwind",
		},
	],
};

function Reasume() {
	return (
		<motion.div
			className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
		>
			<div className="container mx-auto">
				<Tabs
					defaultValue="experience"
					className="flex flex-col xl:flex-row gap-[60px] "
				>
					<TabsList className="gap-6 flex-col w-full max-w-[380px] mx-auto xl:mx-0 ">
						<TabsTrigger value="experience">Experience</TabsTrigger>
						<TabsTrigger value="education">Education</TabsTrigger>
						<TabsTrigger value="skills">Skills</TabsTrigger>
						<TabsTrigger value="about">About Me</TabsTrigger>
					</TabsList>

					{/* //! Content */}
					<div className="min-h-[70vh] w-full">
						<TabsContent value="experience" className="w-full">
							experience
						</TabsContent>
						<TabsContent value="education" className="w-full">
						education
						</TabsContent>
						<TabsContent value="skills" className="w-full">
						skills
						</TabsContent>
						<TabsContent value="about" className="w-full">
						about-me
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	);
}

export default Reasume;
