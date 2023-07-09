import * as React from 'react';
import { Seo } from '../components/seo';

import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
	return (
		<Layout pageTitle='Home page'>
			<div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
					maiores exercitationem corporis esse, eius unde ipsum in. Quas
					blanditiis, numquam temporibus doloremque, eius est repellat inventore
					voluptates corporis eveniet atque earum aliquid, consectetur maiores
					similique autem obcaecati quia. Iste consequuntur dolores odit?
					Consequatur perferendis illum natus molestiae explicabo doloribus
					obcaecati.
				</p>
				<StaticImage
					alt='Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera'
					src='../images/computer_code.jpg'
				/>
			</div>
		</Layout>
	);
};

export const Head = () => (
	<>
		<Seo />
	</>
);

export default IndexPage;
