import React from 'react';
import experienceData from '../data-experience';

import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';
import { BiLogoFirebase, BiLogoReact } from 'react-icons/bi';
import { DiLinux, DiJsBadge, DiLaravel, DiSass } from 'react-icons/di';
import { CgMonday } from 'react-icons/cg';
import {
	SiAnsible,
	SiGatsby,
	SiMysql,
	SiVirtualbox,
	SiPhp,
} from 'react-icons/si';
import { BsWordpress } from 'react-icons/bs';

const experience = () => {
	return (
		<section className='py-24 bg-coolGray-900'>
			<div className='container px-4 mx-auto'>
				<div className='flex flex-wrap -mx-4'>
					<div className='w-full md:w-1/3 px-4 mb-16 lg:mb-0'>
						<div className='mb-12'>
							<h2 className='mb-4 text-3xl md:text-4xl leading-tight text-white font-medium font-bold tracking-tighter'>
								Job experiences
							</h2>
							<p className='text-lg md:text-xl text-coolGray-400 font-medium'>
								These experiences have allowed me to develop a wide range of
								skills and expertise, both technical and soft.
							</p>
						</div>
						<div className='mb-12'>
							<h2 className='mb-4 text-3xl md:text-4xl leading-tight text-white font-medium font-bold tracking-tighter'>
								Tech I worked with
							</h2>
							<div className='flex flex-wrap gap-2'>
								<AiFillHtml5 size='40' />
								<IoLogoCss3 size='40' />
								<DiSass size={40} />
								<DiJsBadge size={40} />
								<AiFillGithub size='40' />
								<BiLogoReact size={40} />
								<SiGatsby size={40} />
								<SiVirtualbox size={40} />
								<BiLogoFirebase size='40' />
								<DiLinux size='40' />
								<SiAnsible size={40} />
								<BsWordpress size={40} />
								<SiMysql size={40} />
								<SiPhp size={40} />
								<DiLaravel size={40} />
								<CgMonday size={40} />
							</div>
						</div>
						<div className='mb-12'>
							<h2 className='mb-4 text-3xl md:text-4xl leading-tight text-white font-medium font-bold tracking-tighter'>
								Side projects
							</h2>
							<p>Isolated Lines - Electronic music project</p>
							<p>Limites - Music composition</p>
							<p>Creaked Records - Website developement</p>
							<p>Sbire music - Record Label</p>
						</div>
						<div>
							<h2 className='mb-4 text-3xl md:text-4xl leading-tight text-white font-medium font-bold tracking-tighter'>
								Studies
							</h2>
							<p className='border-b border-purple-200/50 pb-2 mb-2'>
								Bachelor of Science HES-SO in Media Engineering - HEIG-VD
							</p>
							<p className='border-b border-purple-200/50 pb-2 mb-2'>
								Professional Baccalaureate - CPNV
							</p>
							<p className='border-b border-purple-200/50 pb-2 mb-2'>
								Swiss Federal Certificate of Proficiency, Electronics - CPNV
							</p>
						</div>
					</div>
					<div className='w-full md:w-2/3 px-4'>
						{experienceData.map((experience) => (
							<div
								className='block border-b-purple-100/50 mb-8 pb-8 bg-coolGray-800 hover:bg-coolGray-700 hover:border-coolGray-600 border border-transparent rounded-md shadow-md transition duration-200'
								href='#'
							>
								<span className='inline-block px-4 mb-2 font-medium text-purple-900 bg-purple-100 font-medium rounded-full'>
									{experience.company}
								</span>
								<p className='font-light py-4'>{experience.when}</p>
								<h2 className='mb-2 text-lg md:text-xl text-white font-bold'>
									{experience.title}
								</h2>
								<div></div>

								{experience.description.map((line) => (
									<p className='mb-4 max-w-lg text-coolGray-400 font-normal'>
										{line}
									</p>
								))}
								<div className='flex flex-wrap gap-2 max-w-lg'>
									{experience.skills.map((skill) => (
										<span className='text-white font-medium border-2 border-purple-500/50 rounded-full px-4'>
											{`# ${skill}`}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default experience;
