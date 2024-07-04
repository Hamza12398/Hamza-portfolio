import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
	return (
		<section className="h-full">
			<div className="container mx-auto h-full">
				<div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-22">
					{/* Text */}
					<div className="text-center xl:text-left">
						<span className="text-xl">Front-End Developer</span>
						<h1 className="h1">
							Hello I'm <span className="text-accent">Hamza</span>
						</h1>
						<p className="max-w-[480px] mb-9 text-white/70">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
							dolorem quaerat, consequatur reiciendis aliquam saepe consectetur,
							eveniet illo rerum dolor, quod suscipit dolore beatae quam ea
							consequuntur ut ducimus recusandae?
						</p>

						{/*Buttons and Social Media  */}
						<div className="flex gap-8 flex-col xl:flex-row items-center">
							<Button
								variant="outline"
								size="lg"
								className="flex items-center gap-2 uppercase"
							>
								<span>Download CV</span>
								<FiDownload className="text-xl" />
							</Button>
							<div className="mb-8 xl:mb-0">
								<Social containerStyles={"flex gap-6"} iconsStyles={"text-accent hover:text-primary h-9 w-9 border border-accent rounded-full flex justify-center items-center text-base hover:bg-accent hover:transition-all duration-500"}/>
							</div>
						</div>

						{/* Image */}
						<div>cherkaoui</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
