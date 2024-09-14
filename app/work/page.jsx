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
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";
// import { IncrementalCache } from "next/dist/server/lib/incremental-cache";

const projects = [
	{
		num: "01",
		category: "Front-end CRUD",
		title: "Project-1",
		description: "ToDo List App",
		stack: [
			{ name: "React.js" },
			{ name: "Javascript" },
			{ name: "Material Ui" },
		],
		image: "/todo.png",
		live: "https://stupendous-eclair-7ee237.netlify.app/",
		github: "https://github.com/Hamza12398/React-ToDoList-APP?tab=readme-ov-file",
	},
	{
		num: "02",
		category: "Front-end",
		title: "Project-2",
		description: "Weather App of KHOURIBGA City",
		stack: [
			{ name: "React,js" },
			{ name: "javascript.js" },
			{ name: "tailwind CSS" },
		],
		image: "/weather.jpg",
		live: "https://sparkling-cendol-145187.netlify.app/",
		github: "https://github.com/Hamza12398/Weather-App",
	},
	{
		num: "03",
		category: "Front-end",
		title: "Project-3",
		description: "Small E-commerce Website",
		stack: [
			{ name: "Next.js" },
			{ name: "Javascript.js" },
			{ name: "React" },
			{ name: "Typescript" },
		],
		image: "/product.jpg",
		live: "https://taupe-melba-11c604.netlify.app/",
		github: "https://github.com/Hamza12398/products-card",
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
			<div className="container mx-auto">
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

							{/* //! Projects Border */}
							<div className="border border-white/20"></div>
							<div className="flex items-center gap-4">
								{/* //! BUTTON LIVE CONTENT */}
								<Link href={project.live}>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="bg-white/5 rounded-full flex justify-center items-center w-[70px] h-[70px]">
												<BsArrowUpRight
													className="text-white text-3xl group-hover:text-accent"
												/>
											</TooltipTrigger>
											<TooltipContent>Live content</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</Link>

								{/* //? GITHUB SOURCE CODE*/}
								<Link href={project.github}>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="bg-white/5 rounded-full flex justify-center items-center group w-[70px] h-[70px]">
												<BsGithub
													className="text-white text-3xl group-hover:text-accent justify-center items-center flex"
												/>
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
											<div className="absolute top-0 buttom-0 h-full w-full bg-black/10 z-10"></div>
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
							{/* //! Slider Buttons  */}
							<WorkSliderBtns
								containerStyle="flex gap-4 absolute right-0 justify-between buttom-[calc(50%_-_20px)] xl:bottom-0 z-20 w-full xl: w-max xl:justify-none"
								btnStyle="bg-white/5 rounded-full flex justify-center items-center group w-[70px] h-[70px]"
								iconsStyle="text-white text-3xl group-hover:text-accent justify-center items-center flex"
							/>
						</Swiper>
					</div>
				</div>
			</div>
		</motion.section>
	);
}

export default Work;
