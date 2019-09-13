import React from 'react';

const ProjectsHome = () => {
	return (
		<div className="projects-home">
			<section className="top">
				<div className="cta-container">
					<div className="cta">
						<h2 className="cta-title">Project Experiences</h2>
						<p>
							No missed opportunities!
							<br />
							Explore our trade pathways and <br /> choose one that best fits you.
						</p>
						<button>Create a Project</button>
					</div>                    
					<img src="../../static/assets/ProjectPage/top issue.png" />
				</div>
			</section>
			{/* featured trades */}
			<section className="ft-container">
				<h3 className="ft-title">Featured Trades</h3>
				<p>Learn next to master trade professionals that are available during the day and after hours.</p>
				<p href="">Show More Trades &rsaquo;</p>
				<div className="featured-trades">
					<div className="ft-box">
						<img src="" />
						<p>Electronics</p>
					</div>
					<div className="ft-box">
						<img src="" />
						<p>Construction</p>
					</div>
					<div className="ft-box">
						<img src="" />
						<p>Mechanics</p>
					</div>
					<div className="ft-box">
						<img src="" />
						<p>Welding</p>
					</div>
				</div>
			</section>
			{/* curvy part/thing */}
			{/* featured projects */}

			{/* top trending trades */}
			{/* featured trades */}
			{/* recommended projects */}
		</div>
	);
};

export default ProjectsHome;
