const Projects = () => {
	const projects = [
		{
			title: 'Electronic Health Record Dashboard',
			role: 'Senior Full-Stack Developer in CareFirst',
			description:
				'A interactive dashboard designed for Doctors, Admin, Nurses, and Patients.',
			image: '/EHRDashboard.jpg',
			tech: [
				'HTML5',
				'CSS3',
				'React',
				'JavaScript',
				'Redux',
				'Axios',
				'Spring Boot',
				'OAuth2',
				'WebSocket',
				'Jest',
				'Hibernate',
				'JUnit',
				'Cypress',
				'MongoDB',
				'AWS',
			],
		},
		{
			title: 'Smart Loan Tracker',
			role: 'Full-Stack Developer in Amalgamated Bank',
			description:
				'Implemented User-friendly interface for loan applying, tracking, and receives real-time updates.',
			image:
				'https://cdn.dribbble.com/userupload/37293931/file/original-a32e186ecb0ac7d49d7699e5d6790ddb.jpg?resize=732x549&vertical=center',
			tech: [
				'Angular',
				'TypeScript',
				'RXJS',
				'JQuery',
				'AJAX',
				'JSP',
				'OAuth2',
				'JDBC',
				'JWT',
				'Axios',
				'ASP.Net',
				'Jenkins',
				'SQL',
				'JIRA',
				'GIT',
			],
		},
		{
			title: 'Graphical User Interface',
			description:
				'With this interface Users can login and find near resources and evaluate accessibility choices',
			role: 'Full-Stack Developer in TCS',
			image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643',
			tech: [
				'React',
				'Babel',
				'Hooks',
				'Context API',
				'Redux',
				'Axios',
				'JavaScript',
				'SCSS',
				'GIT',
				'Jest',
				'Jira',
				'Python',
				'Flask',
				'Numpy',
			],
		},
		{
			title: 'Field Programmable Gate Arrays Dashboard',
			description:
				'Developed Dashboard thats allow users to perform initiating reconfiguration, adjusting parameters and triggering actions.',
			role: 'Full-Stack Developer in Xilinx',
			image:
				'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpIVJdaeOvpoMAZNyMBAmyWOdwucViVF_9dM59hrlQ0zxf4rE6lOWQZEi0gcMsl4gNkxGSEyi-oCfFCD7JtkSKSUNT8OB6D3jMbMs2QJ-rgudqxjPjV9n1T61rKMTdsm0s1cugEbW3id0a/w1200-h630-p-k-no-nu/fpgaspartan3a.jpg',
			tech: [
				'React',
				'Angular',
				'Redux',
				'Axios',
				'JavaScript',
				'Bootstrap',
				'Eclipse',
				'java',
				'SpringBoot',
				'WebSocket',
				'Hibernate',
				'Jest',
				'Agile',
				'GIT',
				'Jira',
			],
		},
		{
			title: 'Product Request Management Portal',
			description:
				'A dashboard enabling clients to create, schedule, and track engineering orders in real-time.',
			role: 'Software Engineer in Tech Mahindra',
			image:
				'https://elements-resized.envatousercontent.com/elements-cover-images/a5354366-63a3-4c38-9b6b-a7e124d20a27?w=1370&cf_fit=scale-down&q=85&format=auto&s=878bf6d603c998357d5bed4ab046e056ec9847e6d586c43d2c123dbefb8ccda1',
			tech: [
				'HTML5',
				'CSS3',
				'React',
				'Visual Studio',
				'MongoDB',
				'Axios',
				'JavaScript',
				'React Router',
				'JSX',
				'ES6',
				'Babel',
			],
		},
	]

	return (
		<section
			id='projects'
			className='py-20 bg-gray-200'>
			<div className='container mx-auto px-6'>
				<h2 className='text-4xl font-bold text-center mb-12'>Projects</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{projects.map((project) => (
						<div
							key={project.title}
							className='bg-gray-900 rounded-lg shadow-lg overflow-hidden'>
							<h1 className='text-xl bg-gray-900 text-center text-gray-200'>
								{project.role}
							</h1>
							<img
								src={project.image}
								alt={project.title}
								className='w-full h-48 object-cover'
							/>
							<div className='p-6'>
								<h3 className='text-xl font-semibold  text-white mb-2'>
									{project.title}
								</h3>
								<p className='text-gray-500 mb-4'>{project.description}</p>
								<br></br>
								<div className='flex flex-wrap gap-2 mb-4'>
									{project.tech.map((tech) => (
										<span
											key={tech}
											className='px-3 py-1 bg-gray-400 text-sm rounded-full'>
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Projects
