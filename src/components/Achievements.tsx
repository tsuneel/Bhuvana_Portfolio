import React from 'react'

export const Achievements = () => {
	const certificates = [
		{
			title: 'React Developer Certification',
			issuer: 'Hacker Rank',
			date: '04-Apr-2025',
			image: '/react.jpg',
			link: 'https://www.hackerrank.com/certificates/46dc82ee047a',
		},
		{
			title: 'JavaScript Developer Certification',
			issuer: 'Hacker Rank',
			date: '23-Apr-2025',
			image: '/javascript.jpg',
			link: 'https://www.hackerrank.com/certificates/24abff06e3d9',
		},
		{
			title: 'Java Developer Certification',
			issuer: 'Hacker Rank',
			date: '26-Feb-2025',
			image: '/java.jpg',
			link: 'https://www.hackerrank.com/certificates/f2f7ef584888',
		},
		{
			title: 'Rest API Developer Certification',
			issuer: 'Hacker Rank',
			date: '22-Apr-2025',
			image: '/rest_api.jpg',
			link: 'https://www.hackerrank.com/certificates/4a4bceb56ef4',
		},
		{
			title: 'Software Engineer Certification',
			issuer: 'Hacker Rank',
			date: '05-Feb-2025',
			image: '/software_engineer.jpg',
			link: 'https://www.hackerrank.com/certificates/c7f860042842',
		},
	]

	return (
		<section
			className='py-12 px-4 bg-gray-900'
			id='achievements'>
			<div className='max-w-6xl mx-auto'>
				<h2 className='text-3xl font-bold mb-8 text-center text-white'>
					📜 Certifications
				</h2>
				<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
					{certificates.map((cert, index) => (
						<div
							key={index}
							className='bg-gray-200 rounded-2xl shadow-md p-4 hover:shadow-lg transition-all w-full max-w-sm'>
							<img
								src={cert.image}
								alt={cert.title}
								className='rounded-md mb-3 h-40 object-cover w-full'
							/>
							<h3 className='text-xl font-semibold'>{cert.title}</h3>
							<p className='text-sm text-gray-500'>{cert.issuer}</p>
							<p className='text-xs text-gray-400'>{cert.date}</p>
							{cert.link && (
								<a
									href={cert.link}
									target='_blank'
									rel='noopener noreferrer'
									className='text-blue-500 text-sm mt-2 inline-block'>
									View Certificate →
								</a>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
