import * as React from 'react';
import { Seo } from '../components/seo';

import Layout from '../components/layout';
import Experience from '../components/experience';

const IndexPage = () => {
	return (
		<Layout pageTitle='Home page'>
			<div className=''>
				<section className='hero-section pt-40 pb-28'>
					<h1 className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-600 text-3xl md:text-5xl md:leading-12 lg:text-6xl leading-12 font-bold tracking-tight py-4'>
						Nice to meet you! <br />
						I'm Gwenaël Magnenat
					</h1>
					<p className='mb-8 text-s md:text-xl text-gray-500 font-medium max-w-[40ch]'>
						I am a web developer based in Switzerland, dedicated to building web
						applications that are accessible to all. With a wide range of
						experience in various web technologies, I am a team player and
						excellent communicator.
					</p>
					<div className='flex flex-wrap'>
						<div className='w-full md:w-auto py-1 md:py-0 md:mr-4'>
							<a
								className='inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-white font-medium text-center hover:bg-purple-600 focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 border border-purple-500 rounded-md shadow-sm'
								href='mailto:g.magnenat@gmail.com'
							>
								Contact me
							</a>
						</div>
					</div>
				</section>
				<Experience />
				<section className='skills'></section>
				<section className='relative py-20 md:py-28 bg-coolGray-900 overflow-hidden'>
					<div className='relative container px-4 mx-auto'>
						<div className='xl:max-w-4xl mx-auto text-center'>
							<h2 className='mb-4 text-3xl md:text-4xl font-heading font-bold text-white'>
								Projects
							</h2>
							<p className='mb-6 text-lg md:text-xl font-heading font-medium text-coolGray-400'>
								Please get in touch for more informations on projects I have
								worked on.
							</p>
							<a
								className='inline-block py-3 px-7 w-full md:w-auto text-lg leading-7 text-white border-purple-500 hover:bg-purple-600 font-medium text-center focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 border border-purple-500 rounded-md shadow-sm'
								href='mailto:g.magnenat@gmail.com'
							>
								Contact me
							</a>
						</div>
					</div>
				</section>
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
