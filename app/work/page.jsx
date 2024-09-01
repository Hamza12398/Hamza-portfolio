"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import { swiper, swiperSlider } from "swiper";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";

import "swiper/css";
// import { IncrementalCache } from "next/dist/server/lib/incremental-cache";

const projects = [
	{
		num: "01",
		category: "Front-end",
		title: "Project-1",
		description: "loeeam lorem lorem lorem lorem",
		stack: [
			{ name: "React,js" },
			{ name: "javascript.js" },
			{ name: "materialUi" },
		],
		image: "/public/Weather App.png",
		live: "",
		github: "",
	},
	{
		num: "02",
		category: "Front-end",
		title: "Project-2",
		description:
			"A responsive and customizable portfolio website built using Next.js, React, and Tailwind CSS.",
		stack: [
			{ name: "React,js" },
			{ name: "javascript.js" },
			{ name: "tailwind CSS" },
		],
		image: "/public/TodoList.png",
		live: "",
		github: "",
	},
	{
		num: "03",
		category: "Front-end",
		title: "Project-3",
		description:
			"A responsive and customizable portfolio website built using Next.js, React, and Tailwind CSS.",
		stack: [{ name: "Next,js" }, { name: "javascript.js" }, { name: "react" }],
		image: "/public/product.png",
		live: "",
		github: "",
	},
];
function Work() {
	const [project, setproject] = useState(projects[0]);
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="min-h-[80vh] flex flex-col justify-center xl:px-0"
		>
			<div className="container mx-auto ">
				<div className="flex flex-col xl:flex-row xl:gap-[30px]">
					<div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between border-2 xl: border-none">
						<div>
							{/* //! Projects Number */}
							<div className="text-8xl leading-none font-extrabold text-accent text-outline">
								{project.num}
							</div>

							{/* //! Projects category */}
							<h2 className="font-bold text-[40px] leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
								{project.category} project
							</h2>

							{/* //! Projects details */}
							<p className="text-white/60">{project.description}</p>
							<ul classnmae="flex gap-4">
								{project.stack.map((item, index) => {
									return (
										<li key={index} className="text-accent text-xl">
											{item.name}
											{index !== project.stack.length - 1 && ","}
										</li>
									);
								})}
							</ul>

							{/* Projects Border */}
							<div className="border border-white/20"></div>
							<div>
								<Link href={project.live}>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="bg-white/5 rounded-full flex justify-end items-center group w-[70px] h-[70px]">
												<BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
											</TooltipTrigger>
                      <TooltipContent>
                        Live content
                      </TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</Link>
							</div>
						</div>
					</div>
					<div className="w-full">slider</div>
				</div>
			</div>
		</motion.div>
	);
}

export default Work;
