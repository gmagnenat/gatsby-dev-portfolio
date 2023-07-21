import React from 'react';
// import { Link } from 'gatsby';

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const footer = () => {
	return (
		<footer className='overflow-hidden'>
			<div className='container px-4 mx-auto'>
				<div className='flex flex-wrap lg:items-center pt-24 pb-12 -mx-4'>
					<div className='w-full md:w-3/4 px-4'>
						{/* <a className='block mb-8 max-w-max' href='#'>
							Gwenaël Magnenat
						</a> */}
						{/* <p className='mb-12 text-base md:text-lg text-coolGray-400 font-medium md:max-w-sm'>
							I don't know the solution but I can move the problem
						</p> */}
						{/* <div className='mb-12 md:mb-0 flex flex-wrap -mx-3 md:-mx-6'>
							<div className='w-full md:w-auto p-3 md:py-0 md:px-6'>
								<Link
									to='/blog'
									className='inline-block text-coolGray-500 hover:text-coolGray-600 font-medium'
								>
									Blog
								</Link>
							</div>
							<div className='w-full md:w-auto p-3 md:py-0 md:px-6'>
								<Link
									to='/tools'
									className='inline-block text-coolGray-500 hover:text-coolGray-600 font-medium'
								>
									Tools
								</Link>
							</div>
						</div> */}
					</div>
				</div>
			</div>
			<div className='border-b border-coolGray-100'></div>
			<div className='container px-4 mx-auto'>
				<div className='flex flex-wrap items-center py-12 md:pb-32'>
					<div className='w-full md:w-1/2 mb-6 md:mb-0'>
						<p className='text-coolGray-400 font-medium'>
							© 2023 gmagnenat.com All rights reserved.
						</p>
					</div>
					<div className='w-full md:w-1/2'>
						<div className='flex flex-wrap md:justify-end -mx-5'>
							<div className='px-5'>
								<a
									aria-label='GitHub'
									href='https://github.com/gmagnenat'
									target='_blank'
									rel='noreferrer'
								>
									<AiFillGithub size='25' />
								</a>
							</div>
							<div className='px-5'>
								<a
									aria-label='LinkedIn'
									href='https://linkedin.com/in/gmagnenat'
									target='_blank'
									rel='noreferrer'
								>
									<AiFillLinkedin size='25' />
								</a>
							</div>
							<div className='px-5'></div>
							<div className='px-5'></div>
							<div className='px-5'></div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default footer;
