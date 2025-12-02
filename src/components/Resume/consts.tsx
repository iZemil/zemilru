import { differenceInYears } from 'date-fns';

export enum ETech {
	// Common core
	javascript = 'Javascript',
	typescript = 'Typescript',
	nodejs = 'NodeJS',
	graphql = 'GraphQL',
	socketio = 'SocketIO',
	python = 'Python',

	// Backend
	nestjs = 'NestJS',
	express = 'ExpressJS',
	postgres = 'PostgreSQL',
	typeorm = 'TypeORM',
	mongodb = 'MongoDB',
	mongoose = 'Mongoose',
	django = 'Django',
	flask = 'Flask',
	sqlalchemy = 'SQLAlchemy',
	swagger = 'Swagger',
	rabbitmq = 'RabbitMQ',
	k6 = 'Grafana K6',

	// Frontend
	reactjs = 'ReactJS',
	redux = 'ReduxJS',
	mobx = 'Mobx',
	mobx_state_tree = 'Mobx State Tree',
	antd = 'AntD',
	materialui = 'Material UI',
	webrtc = 'WebRTC',
	web3 = 'Web3',
	ethersjs = 'EthersJS',
	dom_api = 'DOM API',
	html = 'HTML',
	pug = 'PUG',
	scss = 'SCSS',
	styled = 'Styled Components',

	// CI
	docker = 'Docker',
	gitlabci = 'Gitlab CI',
	git = 'git',
	aws = 'AWS',
	linux = 'Linux',
	nx_monorepo = 'NX Monorepo',
	unit_tests = 'Unit Tests',
	jest = 'Jest',
	redis = 'Redis',
	kafka = 'kafka',
	nginx = 'Nginx',

	// Misc
	php = 'PHP',
	wordpress = 'Wordpress',
	chrome_extensions = 'Chrome Extensions',
	telegram_bots = 'Telegram Bots',
	phaser3 = 'Phaser 3',
	cordova = 'Cordova',
	react_native = 'React Native',
}

export interface IJob {
	role: string;
	companyName: string;
	projectDesc: string;
	from: Date;
	to: Date;
	achievements: string[];
	stack: ETech[];
}

interface IContact {
	name: string;
	value: string;
}

export interface IResume {
	name: string;
	title: string;
	description: string;
	contacts: IContact[];
	coreStack: { name: ETech; years: number }[];
	hobbies: string[];
	history: IJob[];
}

const START_DATE = new Date('2016 Jan');
const YEARS = differenceInYears(Date.now(), START_DATE);
export const RESUME: IResume = {
	name: 'Emil Zaripov',
	title: `Software Engineer`,
	description: `I'm a Senior Javascript Developer with ${YEARS}+ years of experience.
		<br />I have a strong background with both frontend and backend sides.
		Also, I enjoy teamwork, so I can help screen candidates and mentor junior developers.
		<br />I value a job that challenges me to learn and grow in my career.
		Work-life balance is important to me, so I appreciate a job that allows for flexible hours and the ability to work remotely.`,
	coreStack: [
		{ name: ETech.javascript, years: 9 },
		{ name: ETech.typescript, years: 7 },
		{ name: ETech.nodejs, years: 7 },
		{ name: ETech.nestjs, years: 6 },
		{ name: ETech.postgres, years: 6 },
		{ name: ETech.typeorm, years: 6 },
		{ name: ETech.mongodb, years: 3 },
		{ name: ETech.mongoose, years: 3 },
		{ name: ETech.k6, years: 2 },

		{ name: ETech.html, years: 10 },
		{ name: ETech.reactjs, years: 8 },
		{ name: ETech.redux, years: 7 },
		{ name: ETech.mobx, years: 4 },
		{ name: ETech.web3, years: 2 },

		{ name: ETech.git, years: 9 },
		{ name: ETech.linux, years: 7 },
		{ name: ETech.docker, years: 6 },
		{ name: ETech.jest, years: 4 },
		{ name: ETech.python, years: 3 },
		{ name: ETech.nginx, years: 2 },
	],

	history: [
		{
			role: 'Senior Backend - Teamlead',
			companyName: 'haqqex.com',
			projectDesc: `In developing the backend for the new crypto exchange HAQQEX, I led key technical initiatives: from designing core trading mechanisms and ensuring high performance to planning sprints and strengthening the team.`,
			from: new Date('2023 May'),
			to: new Date('2025 Oct'),
			achievements: [
				"Core Trading System Development: Designed and implemented trading order engines, trading pairs, and asset operations (deposit/withdrawal), which formed the foundation for the entire exchange's functionality.",
				'Reliability and Performance Optimization: Enhanced server throughput under high-load conditions (over 4,000 orders per second) and introduced integration testing to minimize deployment risks.',
				'Team Leadership and Development: Managed a team of 5+ developers by coordinating development through technical sprint planning, focusing on product priorities, and participating in the hiring of new backend developers.',
				`Test Automation and Performance Validation: Architected and implemented the testing infrastructure, focusing on integration tests using Jest as core framework, Docker and CI/CD. Conducted regular stress testing sessions to proactively uncover scalability issues, ensuring the trading platform's performance and stability.`,
			],
			stack: [
				ETech.typescript,
				ETech.nodejs,
				ETech.nestjs,
				ETech.postgres,
				ETech.rabbitmq,
				ETech.k6,

				ETech.docker,
				ETech.jest,
			],
		},

		{
			role: 'Teamlead, CTO',
			companyName: 'BLLNG.com',
			projectDesc: `As the key developer, I successfully built and launched the platform's MVP, taking full ownership of both frontend and backend architecture.`,
			from: new Date('2022 Apr'),
			to: new Date('2023 May'),
			achievements: [
				`Successful Platform Launch: Developed and brought to market an MVP web service by building a reliable REST API-based backend core that ensured uninterrupted processing of cryptocurrency payments.`,
				`Quality Culture Implementation: Established unit testing and code review practices, significantly enhancing codebase stability and reducing the number of pre-launch bugs.`,
				`Process Organization and Team Growth: Led a team of 4+ developers and made key contributions to building a strong team by conducting interviews and making hiring decisions for JavaScript developers.`,
			],
			stack: [
				ETech.typescript,
				ETech.nodejs,
				ETech.nestjs,
				ETech.postgres,
				ETech.reactjs,
				ETech.redux,
				ETech.styled,
				ETech.web3,
				ETech.ethersjs,

				ETech.docker,
				ETech.nginx,
				ETech.unit_tests,
				ETech.jest,
			],
		},

		{
			role: 'Senior Backend Developer',
			companyName: 'IBM',
			projectDesc: `For a geological analytics project, I was responsible for backend development, implementing a GraphQL API and a microservices architecture comprising 4 services.`,
			from: new Date('2021 Sep'),
			to: new Date('2022 Apr'),
			achievements: [
				`Architecture and Development: Designed and maintained a microservices ecosystem (including authorization, logging, and API services), and developed the core GraphQL API for complex analytical queries.`,
				`Collaboration and Code Quality: Actively collaborated with analysts and product managers to ensure accurate feature implementation, and upheld high coding standards through regular code reviews within the backend team.`,
				`Team Development: Contributed to team growth by conducting technical interviews and evaluating candidates for Node.js developer positions.`,
			],
			stack: [
				ETech.typescript,
				ETech.nodejs,
				ETech.nestjs,
				ETech.graphql,
				ETech.mongodb,
				ETech.mongoose,
				ETech.socketio,
				ETech.python,
			],
		},

		{
			role: 'Backend Developer',
			companyName: 'IBM',
			projectDesc: `For a drilling company project, I developed and maintained key integration services, which contributed to operational cost optimization through automation.`,
			from: new Date('2019 Jan'),
			to: new Date('2021 Sep'),
			achievements: [
				`Integration Solution Development: Built and maintained a microservice gateway for the Primavera system and a REST API gateway connecting the frontend with Python analytics, enabling efficient data exchange.`,
				`Development Infrastructure Support: Was responsible for supporting internal NPM packages, which standardized and accelerated the company's development processes.`,
				`Business Optimization Contribution: Participated in implementing technical solutions directly aimed at reducing the company's operational expenses.`,
			],
			stack: [ETech.typescript, ETech.nodejs, ETech.nestjs, ETech.postgres, ETech.typeorm],
		},
		{
			role: 'Frontend Developer',
			companyName: 'RobotVera',
			projectDesc: `For the RobotVera project, I worked on the frontend part of the web application (Automation HR-assistant settings).`,
			from: new Date('2018 Jul'),
			to: new Date('2019 Aug'),
			achievements: [
				`Modernization and Refactoring: Conducted a full refactoring of a legacy HTML codebase, migrating it to a modern stack using React, which significantly improved code maintainability and extensibility.`,
				`Internal Tool Development: Developed and maintained a content management system (CMS) for internal use, automating key company business processes.`,
				`Performance and Process Optimization: Actively worked on improving web application performance and participated in planning sessions, collaborating with the team to estimate technical tasks.`,
			],
			stack: [ETech.reactjs, ETech.mobx, ETech.mobx_state_tree, ETech.antd, ETech.django, ETech.html],
		},
		{
			role: 'Frontend Developer',
			companyName: 'Freelance - Dextra - Unit6',
			projectDesc: `Throughout my freelance and agency career, I have successfully delivered numerous end-to-end projects, acquiring a broad range of skills in frontend development, CMS work, and client support.`,
			from: START_DATE,
			to: new Date('2018 Jun'),
			achievements: [
				`Cross-Platform Web Development: Built a large number of responsive and cross-browser compatible web pages for the company's clients, ensuring their correct display across all devices.`,
				`CMS and Enterprise System Development: Developed and maintained functional WordPress sites for clients.`,
				`Paid Solution Development: At the Unit6 development studio, created custom plugins to extend Jira standard functionality.`,
			],
			stack: [
				ETech.javascript,
				ETech.html,
				ETech.dom_api,
				ETech.pug,
				ETech.scss,
				ETech.php,
				ETech.wordpress,

				ETech.reactjs,
				ETech.redux,
			],
		},
	],
	hobbies: [
		'♟ A competitive chess player at a master level, with a passion for complex strategy and problem-solving',
		'🦄 I love exploring new technologies and ideas by working on side projects',
		'🥋 I have a passion for Brazilian jiu-jitsu',
		'🍳 I enjoy cooking and experimenting with different recipes',
	],
	contacts: [
		{ name: 'Email', value: '3zemil🐶gmail.com' },
		{ name: 'Telegram', value: '@emilzar' },
		// { name: 'LinkedIn', value: 'https://www.linkedin.com/in/zemil' },
	],
};
