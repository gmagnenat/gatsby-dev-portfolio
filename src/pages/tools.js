import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import { Seo } from '../components/seo';

const ToolsPage = ({ data }) => {
	return (
		<Layout pageTitle='My Blog Posts'>
			<section class='py-16 md:py-24 lg:pb-52'>
				<div class='container px-4 mx-auto'>
					<div class='flex flex-wrap items-center mb-16'>
						<div class='w-full md:w-3/4 mb-8 md:mb-0'>
							<h3 class='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-600 text-3xl md:text-5xl md:leading-12 lg:text-6xl leading-12 font-bold tracking-tight py-4'>
								Tools
							</h3>
							<p class='text-lg md:text-xl text-coolGray-500 font-medium'>
								This is a collection of tools and links I often use or refer to.
							</p>
						</div>
					</div>
					{/* One post */}

					<div class='flex flex-wrap -mx-4'>
						{data.allMdx.nodes.map((node) => (
							<div class='w-full md:w-1/2 lg:w-1/3 px-4 mb-8'>
								<p class='mb-2 text-coolGray-500 font-medium'>
									{node.frontmatter.date}
								</p>
								<Link
									to={`/blog/${node.frontmatter.slug}`}
									class='inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline'
								>
									{node.frontmatter.title}
								</Link>
								<p class='mb-4 text-base md:text-lg text-coolGray-400 font-medium'>
									{node.frontmatter.exerpt}
								</p>
								<span class='inline-block py-1 px-3 text-xs leading-5 border-2 border-purple-500 font-medium uppercase rounded-full'>
									{`# Technology`}
								</span>
							</div>
							// <article key={node.id}>
							// 	<h2>
							// 		<Link
							// 			className='text-blue-600 hover:text-blue-400'
							// 			to={`/blog/${node.frontmatter.slug}`}
							// 		>
							// 			{node.frontmatter.title}
							// 		</Link>
							// 	</h2>
							// 	<p>Posted: {node.frontmatter.date}</p>
							// </article>
						))}
					</div>
				</div>
			</section>
		</Layout>
	);
};

export const query = graphql`
	query {
		allMdx {
			nodes {
				frontmatter {
					date(formatString: "MMMM D, YYYY")
					title
					slug
				}
				id
			}
		}
	}
`;

export const Head = () => (
	<>
		<Seo title='My Blog Posts' />
	</>
);

export default ToolsPage;
