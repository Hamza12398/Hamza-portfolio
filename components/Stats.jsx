"use client";

import CountUp from "react-countup";

const status = [
	{
		num: 15,
		title: "Projexts Completed",
	},
	{
		num: 2,
		title: "Two Years Experience Coding",
	},
  {
		num: 3,
		title: " Online Courses",
	},
  {
		num: 1,
		title: "1337 School ",
	},

];

function Stats() {
	return (
		<section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
			<div className="container mx-auto">
				<div className="flex gap-8 flex-wrap max-w-[80vw] mx-auto xl:max-w-none">
					{status.map((item, index) => {
						return (
							<div key={index} className="flex-1 flex gap-4 justify-center items-center xl:justify-items-start">
								<CountUp
									end={item.num}
									duration={5}
									delay={2}
									className="text-4xl xl:text-6xl font-extrabold"
								/>
                <p className={`{item.title.lenght < 15 ? "max-w-[200px]" : "max-w-[250px]" "text-white/80 loading-snug from-bold font-bold text-lg`}>{item.title}</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Stats;
