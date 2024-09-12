"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import "swiper/css";
// import { IncrementalCache } from "next/dist/server/lib/incremental-cache";

const projects = [
	{
		num: "01",
		category: "Front-end",
		title: "Project-1",
		description: "loeeam lorem lorem lorem lorem",
		stack: [
			{ name: "React.js" },
			{ name: "Javascript" },
			{ name: "Material Ui" },
		],
		image: "/todo.png",
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
		image: "/weather.jpg",
		live: "",
		github: "",
	},
	{
		num: "03",
		category: "Front-end",
		title: "Project-3",
		description:
			"A responsive and customizable portfolio website built using Next.js, React, and Tailwind CSS.",
		stack: [
			{ name: "Next,js" },
			{ name: "Javascript.js" },
			{ name: "React" },
			,
			{ name: "Typescript" },
		],
		image: "/product.jpg",
		live: "",
		github: "",
	},
];
function Work() {
	const [project, setproject] = useState(projects[0]);

	const handleSlideChange = (swiper) => {
		const currentindex = swiper.activeIndex;
		setproject(projects[currentindex]);
	};

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className="min-h-[80vh] flex flex-col justify-center xl:px-0"
		>
			<div className="container mx-auto ">
				<div className="flex flex-col xl:flex-row xl:gap-[30px]">
					<div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between border-2 xl: border-none">
						<div className="flex flex-col gap-[30px] h-[50%]">
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

							{/* //? Projects Border */}
							<div className="border border-white/20"></div>
							<div className="flex items-center gap-5">
								{/* //? BUTTON LIVE CONTENT */}
								<Link href={project.live}>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="bg-white/5 rounded-full flex justify-end items-center group w-[70px] h-[70px]">
												<BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
											</TooltipTrigger>
											<TooltipContent>Live content</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</Link>

								{/* //? GITHUB SOURCE CODE*/}
								<Link href={project.live}>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="bg-white/5 rounded-full flex justify-end items-center group w-[70px] h-[70px]">
												<BsGithub className="text-white text-3xl group-hover:text-accent justify-center items-center flex" />
											</TooltipTrigger>
											<TooltipContent>github Source Code</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</Link>
							</div>
						</div>
					</div>

					{/* //! Slider  */}
					<div className="w-full xl:w-[50%]">
						<Swiper
							spaceBetween={30}
							slidesPerView={1}
							className="xl:h-[520px] mb-12"
							onSlideChange={handleSlideChange}
						>
							{projects.map((item, index) => {
								return (
									<SwiperSlide key={index} className="w-full">
										<div className="relative h-[400px] justify-center flex items-center bg-pink-50/20">
											{/* //* overlay */}
											<div></div>
											{/* //* Image */}
											<div className="relative w-full h-full">
												<Image
													src={project.image}
													fill
													alt={project.title}
													className="object-cover"
												/>
											</div>
										</div>
									</SwiperSlide>
								);
							})}
						</Swiper>
					</div>
				</div>
			</div>
		</motion.section>
	);
}

export default Work;
