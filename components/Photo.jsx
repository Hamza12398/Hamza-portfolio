"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
	return (
		<div className="w-full h-full relative ">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: { duration: 0.4, delay: 1, ease: "easeIn" },
				}}
			>
				<motion.div
					className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] absolute"
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { duration: 0.2, delay: 2.4, ease: "easeInOut" },
					}}
				>
					<Image
						className="object-contain"
						src="/hcherkaoui1.png"
						property="true"
						alt="Hamza Photo"
						fill
						quality={100}
					/>
				</motion.div>

				{/* //? circle */}
				<motion.svg
					className="w-[300px] h-[300px] xl:w-[506px] xl:h-[506px]"
					fill="transparent"
					viewBox="0 0 506 506"
					xmlns="http://w3.org/2000/svg"
				>
					<motion.circle
						cx="253"
						cy="253"
						r="250"
						stroke="#00FFff"
						strokeWidth="4"
						strokeLinecap="round"
						strokeLinejoin="round"
						initial={{ strokeDasharray: "24 10 0 0" }}
						animate={{rotate : [120, 360] ,strokeDasharray: ["15 125 15 15", "16 25 92 72", "4 250 22 22" ]}}
						transition={{
							duration: 20,
							repeat: Infinity,
							repeatType: "reverse"
						}}
					/>
				</motion.svg>
			</motion.div>
		</div>
	);
};

export default Photo;
