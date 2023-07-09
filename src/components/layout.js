import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

const Layout = ({ pageTitle, children }) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);
	return (
		<div className='container'>
			<nav className='nav__container px-4 mx-auto'>
				<ul className='nav__list flex flex-row gap-4'>
					<li className='nav__item'>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
				</ul>
			</nav>
			<main className='px-4 mx-auto max-w-[500px]'>
				<h1 className='text-2xl font-bold'>{pageTitle}</h1>
				{children}
			</main>
		</div>
	);
};

export default Layout;
