"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

const StairTransition = () => {
	const path = usePathname();
	return (
		<>
			<AnimatePresence mode="wait">
				<div key={path}>
					<div className="w-screen h-screen fixed right-0 left-0 z-40 flex top-0 pointer-events-none">
						<Stairs />
					</div>

					<motion.div
						initial={{ opacity: 1}}
						animate={{ opacity: 0 }}
						exit={{ opacity: 0, y: 100 }}
						transition={{ duration: 0.4,  ease:"easeInOut" , delay: 1}}
						className="h-full w-full fixed top-0 bg-primary pointer-events-none"
					/>
				</div>
			</AnimatePresence>
		</>
	);
};

export default StairTransition;
