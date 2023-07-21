import * as React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ pageTitle, children }) => {
	return (
		<div className='h-[100%] min-h-[100vh] w-full bg-[#232129] text-white'>
			<Header />
			<main className='container px-4 mx-auto'>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
