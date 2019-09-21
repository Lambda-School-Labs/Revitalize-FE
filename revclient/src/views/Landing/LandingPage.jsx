/**
 * * Description of component
 * TODO: things to do
 * @props description
 */
import React from 'react';

import Nav from '../../components/Layout/Nav.jsx';
import Footer from '../../components/Layout/Footer.jsx';

import Header from './Header/Header';
import ProjectSpotlight from './ProjectSpotlight/ProjectSpotlight';
import SearchProjects from './SearchProjects/SearchProjects';
import FeaturedProjects from './FeaturedProjects/FeaturedProjects';
import CrowdFunding from './CrowdFunding/CrowdFunding';
// import OurPurpose from './OurPurpose/OurPurpose';
// import OnTheJob from './OnTheJob/OnTheJob';
// import Testimonials from './Testimonials/Testimonials';
// import FullScaleApp from './FullScaleApp/FullScaleApp';

export default function LandingPage() {
	return (
		<>
			<Nav />
			<Header />
			<CrowdFunding />
			<ProjectSpotlight />
			<FeaturedProjects />
			<SearchProjects />
			<Footer />
			{/* <OurPurpose /> */}
			{/* <OnTheJob /> */}
			{/* <FullScaleApp /> */}
			{/* <Testimonials /> */}
		</>
	);
}