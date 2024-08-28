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
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/Components/ui/tooltip";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

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
			Company: "1337 School",
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
	title: "Education",
	items: [
		{
			institution: "1337",
			Duration: "2023",
			Position: "Front-End Developer",
		},
		{
			institution: "Udemy",
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
						{/* EXPERIENCE */}
						<TabsContent value="experience" className="w-full">
							<div className="flex flex-col gap-[20px] text-center xl:text-left">
								<h3 className="text-bold text-4xl">{experience.title}</h3>
								<p className="max-w-[600px] text-white/60 mz-auto xl:mx-0">
									{experience.description}
								</p>

								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{experience.items.map((item, index) => {
											return (
												<li
													key={index}
													className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
												>
													<span className="text-accent">{item.Duration}</span>
													<h3 className="text-xl max-w-[260] min-h-[60px] text-center lg:text-left">
														{item.Position}
													</h3>
													<div className="flex items-center gap-3">
														<span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
														<p className="text-white/60">{item.Company}</p>
													</div>
												</li>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>

						{/* //! EDUCATION*/}
						<TabsContent value="education" className="w-full">
							<div className="flex flex-col gap-[20px] text-center xl:text-left">
								<h3 className="text-bold text-4xl">{education.title}</h3>
								<p className="max-w-[600px] text-white/60 mz-auto xl:mx-0">
									{education.description}
								</p>

								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{education.items.map((item, index) => {
											return (
												<li
													key={index}
													className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
												>
													<span className="text-accent">{item.Duration}</span>
													<h3 className="text-xl max-w-[260] min-h-[60px] text-center lg:text-left">
														{item.Position}
													</h3>
													<div className="flex items-center gap-3">
														<span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
														<p className="text-white/60">{item.institution}</p>
													</div>
												</li>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>

						{/* //! SKILLS */}
						<TabsContent value="skills" className="w-full h-full">
							<div className="flex flex-col gap-[30px]">
								<div className="flex flex-col gap-[30px] text-center xl:text-left">
									<h3 className="text-4xl font-bold">{skills.title}</h3>
									<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
										{skills.description}
									</p>
								</div>

								<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gab-4 xl:gap[30px]">
									{skills.skillsList.map((skill, index) => {
										return (
											<li key={index}>
												<TooltipProvider delayDutation={100}>
													<Tooltip>
														<TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
															<div className="text-6xl group-hover:text-accent transition-all duration-300">
																{skill.icon}
															</div>
														</TooltipTrigger>
														<TooltipContent>
															<div>{skill.name}</div>
														</TooltipContent>
													</Tooltip>
												</TooltipProvider>
											</li>
										);
									})}
								</ul>
							</div>
						</TabsContent>

						{/*//!  ABOUT */}
						<TabsContent value="about" className="w-full">
							<h3>{experience.title}</h3>
							<p>{experience.description}</p>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	);
}

export default Reasume;
