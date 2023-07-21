import * as React from 'react';
import { Seo } from '../components/seo';
import Layout from '../components/layout';

const AboutPage = () => {
	return (
		<Layout pageTitle='About Me'>
			<p>Hi there! I'm a senior web developer from Switzerland</p>
		</Layout>
	);
};

export const Head = () => (
	<>
		<Seo />
	</>
);

export default AboutPage;
