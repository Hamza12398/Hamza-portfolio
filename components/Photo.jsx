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
					className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]"
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { duration: 0.2, delay: 2.4, ease: "easeInOut" },
					}}
				>
					<Image
						className="object-contain"
						src="/hcherkaoui1.png"
						property= "true"
						alt="Hamza Photo"
						fill
						quality={100}
					/>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Photo;
