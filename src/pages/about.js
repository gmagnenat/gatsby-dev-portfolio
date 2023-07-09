import * as React from 'react';
import { Seo } from '../components/seo';

const AboutPage = () => {
	return (
		<main>
			<h1>About Me</h1>
			<p>Hi there! I'm a senior web developer from Switzerland</p>
		</main>
	);
};

export const Head = () => (
	<>
		<Seo />
	</>
);

export default AboutPage;
