import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import {
	container,
	heading,
	navLinks,
	navLinkItem,
	navLinkText,
} from './layout.module.css';

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
		<div>
			<header>{data.site.metadata.title}</header>
		</div>
	);
};

export default Layout;
