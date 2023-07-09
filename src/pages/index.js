import * as React from 'react';
import { Seo } from '../components/seo';

const IndexPage = () => {
	return (
		<main>
			<h1 className='text-2xl'>Gwenaël Magnenat</h1>
			<p>This website is built with Gatsby and hosted on Netlify</p>
		</main>
	);
};

export const Head = () => <Seo />;

export default IndexPage;
