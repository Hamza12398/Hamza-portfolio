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
	FaNext,
} from "react-icons/fa";

import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

import { TabsTrigger } from "@/components/ui/tabs";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";

import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

const about = {
	title: "about me",
	description:
		"I am a dedicated front-end developer with a passion for creating engaging, user-friendly interfaces. My coding journey began at 1337 School of Coding, where I developed a solid foundation through immersive, project-based learning. Over the past two years, I’ve further enhanced my skills through peer learning at home, collaborating with fellow developers to refine my expertise in front-end technologies. This experience has equipped me with a deep understanding of modern web development and the ability to deliver responsive, intuitive web applications.",

	info: [
		{
			fieldName: "Name",
			fieldValue: "Hamza Cherkaoui",
		},
		{
			fieldName: "Phone Number",
			fieldValue: "+212 6 93 91 84 67",
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
			fieldValue: "Available",
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
		"I have one year of freelancing experience as a front-end developer, during which I worked with various clients to create responsive, visually appealing websites and web applications. Through these projects, I gained valuable experience in translating client requirements into functional, well-designed interfaces, while honing my skills in HTML, CSS, JavaScript, and React. Freelancing has also strengthened my ability to manage deadlines, communicate effectively, and adapt to diverse project needs, ensuring high-quality deliverables for each client.",
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
		"I completed one year of online study at a private school, where I developed a solid foundation in web development and programming. Alongside this formal education, I have consistently pursued online courses to expand my knowledge in key areas such as front-end development, JavaScript frameworks, and UX/UI design. This combination of structured learning and self-driven education has enabled me to stay up-to-date with industry trends and continuously improve my skills as a developer.",
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

function Resume() {
	const skills = {
		title: "My Skills",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatum blanditiis at voluptatibus rem officiis asperiores laborum, expedita odio maiores, aliquid provident fugit earum, inventore reiciendis temporibus dicta est non?",
		skillsList: [
			{
				icons: <FaHtml5 />,
				name: "HTML",
			},
			{
				icons: <FaCss3 />,
				name: "CSS",
			},
			{
				icons: <FaJs />,
				name: "JavaScript",
			},
			{
				icons: <FaReact />,
				name: "React-Js",
			},
			{
				icons: <FaNodeJs />,
				names: "Node",
			},
			{
				icons: <FaGit />,
				name: "Git",
			},
			{
				icons: <RiNextjsFill />,
				name: "Next Js",
			},
			{
				icons: <RiTailwindCssFill />,
				name: "Tailwind CSS",
			},
		],
	};

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
					eee
					className="flex flex-col xl:flex-row gap-[60px] "
				>
					<TabsList className="gap-6 flex-col w-full max-w-[380px] mx-auto xl:mx-0 ">
						<TabsTrigger value="experience">Experience</TabsTrigger>
						<TabsTrigger value="education">Education</TabsTrigger>
						<TabsTrigger value="skills">Skills</TabsTrigger>
						<TabsTrigger value="about">About Me</TabsTrigger>
					</TabsList>

					{/* //! Content */}
					<div className="min-h-[70vh] w-full h-full">
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

								<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
									{skills.skillsList.map((skill, index) => {
										return (
											<li key={index}>
												<TooltipProvider delayDuration={100}>
													<Tooltip>
														<TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center">
															<div className="text-6xl group-hover:text-accent transition-all duration-300">
																{skill.icons}
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
						<TabsContent
							value="about"
							className="w-vbfull text-center xl:text-left h-full"
						>
							<div className="flex flex-col gap-[30px]">
								<h3 className="font-bold text-4xl">{about.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{about.description}
								</p>
								<ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
									{about.info.map((item, index) => {
										return (
											<li
												key={index}
												className="flex items-center justify-center xl:justify-start gap-4"
											>
												<span className="text-white/60">{item.fieldName}</span>
												<span className="textl">{item.fieldValue}</span>
											</li>
										);
									})}
								</ul>
							</div>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	);
}

export default Resume;
