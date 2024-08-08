import { IProject } from "../interfaces";

const PATH_IMG = 'src/assets/projects/';
export const project: IProject[] = [
	{
		description: "NDA проект. Разработчик можешь создавать индивидуальные планы развития, компетенции, поиск ревьюера. Менеджер: подтверждение/отклонение компетенций своих разработчиком и просматривать информации о них. Каждый пользователь может изменять личную информации и кастомизацию страницы, просмотр всей необходимой информации в справочниках.",
		briefly_name: "Развитие навыков разработчика",
		name: "Система развития навыков разработчиков внутри компании",
		stack:
			[
				{ name: "React",type: "front" },
				{ name: "Typescript",type: "front" },
				{ name: "Redux/toolkit",type: "front" },
				{ name: "RTK Query",type: "front" },
				{ name: "bootstrap",type: "front" },
				{ name: "Eslint",type: "front" },
				{ name: "Datatables",type: "front" },
				{ name: "axios",type: "front" },
				{ name: "i18next",type: "front" },
			]
	},
	{
		description: "Приложение дает пациентам доказательство и уверенность в неизменности записи и позволит им не зависит от конкретной больницы, все данные необходимые врачам будут 'на руках'. Также МЗ, сохраненные в блокчейне обеспечивают доступ только определенным лицам, которым разрешит пациент, что гарантирует конфиденциальность.",
		briefly_name: "Медицинская платформа",
		name: " Медицинская платформа с использованием смарт-контрактов",
		stack:
			[
				{ name: "React",type: "front" },
				{ name: "Javascript",type: "front" },
				{ name: "Redux",type: "front" },
				{ name: "MySQL",type: "back" },
				{ name: "Express",type: "back" },
				{ name: "Vite",type: "front" },
				{ name: "Datatables",type: "front" },
				{ name: "axios",type: "front" },
				{ name: "Solidity",type: "front" },
				{ name: "TACT",type: "front" }
			],
		link: "https://github.com/StrongerProgrammer7/bridge_ton_eth_through_db",
		img: PATH_IMG + 'Medicine.png'
	},
	{
		description: "Пользователь может создавать, изменять и удалять данные о погоде. Основная часть данных, включая информацию о погоде, заполненных данных и типе погоды, берется с сервера. Реализована функциональность для обеспечения интуитивного взаимодействия пользователей с данными о погоде, включая управление данными в режиме реального времени и обработку ошибок для улучшения пользовательского опыта.",
		name: "Данные о погоде",
		stack:
			[
				{ name: "React",type: "front" },
				{ name: "TypeScript",type: "front" },
				{ name: "MSW",type: "front" },
				{ name: "RTK Query",type: "front" },
				{ name: "Vite",type: "front" },
				{ name: "primereact",type: "front" },
				{ name: "axios",type: "front" },
				{ name: "SCSS",type: "front" },
			],
		link: "https://github.com/StrongerProgrammer7/DataAboutWeather",
		img: PATH_IMG + 'weather.png'
	},
	{
		description: "Форма записывает данные в хранилище, после отправки данные отправляются на сервер. Реализована 'ленивая загрузка' и AuthGuard, предотвращающий повторный доступ к форме после завершения опроса.",
		name: "Сбор обратной связи",
		stack:
			[
				{ name: "React",type: "front" },
				{ name: "TypeScript",type: "front" },
				{ name: "Redux",type: "front" },
				{ name: "Redux/persist",type: "front" },
				{ name: "Vite",type: "front" },
			],
		link: "https://github.com/StrongerProgrammer7/rutube",
		img: PATH_IMG + 'rutube.png'
	},
	{
		description: "Динамическое создание записей в таблице с учетом иерархии, а также редактирование и удаление",
		name: "Динамическая таблица",
		stack:
			[
				{ name: "React",type: "front" },
				{ name: "TypeScript",type: "front" },
				{ name: "SCSS",type: "front" },
				{ name: "Vite",type: "front" },
			],
		link: "https://github.com/StrongerProgrammer7/DynamicTable",
		img: PATH_IMG + 'dynamic.png'
	},
	{
		description: "Набор страницы как лендинг, так и многостраничных",
		name: "Верстка сайтов",
		stack:
			[
				{ name: "HTML",type: "front" },
				{ name: "CSS",type: "front" },
				{ name: "JS",type: "front" },
				{ name: "Wordpress",type: "front" },
			],
		link: "https://github.com/StrongerProgrammer7/setWebSites",
		img: PATH_IMG + 'websites.png'
	},
];


export const projectEng: IProject[] = [
	{
		description: "NDA project. Developer can create individual development plans, competencies, search for a reviewer. Manager: confirmation/rejection of competencies of their developers and view information about them. Each user can change personal information and customize the page, view all the necessary information in the directories.",
		briefly_name: "Developing developer skills",
		name: "System for developing developer skills within the company",
		stack:
			[
				{ name: "React",type: "front" },
				{ name: "Typescript",type: "front" },
				{ name: "Redux/toolkit",type: "front" },
				{ name: "RTK Query",type: "front" },
				{ name: "bootstrap",type: "front" },
				{ name: "Eslint",type: "front" },
				{ name: "Datatables",type: "front" },
				{ name: "axios",type: "front" },
				{ name: "i18next",type: "front" },
			]
	},
	{
		description: "The application gives patients proof and confidence in the immutability of the record and will allow them to not depend on a specific hospital, all the data needed by doctors will be 'on hand'. Also, the MZ stored in the blockchain ensures access only to certain persons who are allowed by the patient, which guarantees confidentiality.",
		briefly_name: "Medical platform",
		name: "Medical platform using smart contracts",
		stack:
			[
				{ name: "React",type: "front" },
				{ name: "Javascript",type: "front" },
				{ name: "Redux",type: "front" },
				{ name: "MySQL",type: "back" },
				{ name: "Express",type: "back" },
				{ name: "Vite",type: "front" },
				{ name: "Datatables",type: "front" },
				{ name: "axios",type: "front" },
				{ name: "Solidity",type: "front" },
				{ name: "TACT",type: "front" }
			],
		link: "https://github.com/StrongerProgrammer7/bridge_ton_eth_through_db",
		img: PATH_IMG + 'Medicine.png'
	},
	{
		description: "The user can create, edit and delete weather data. The main part of the data, including weather information, filled data and weather type, is taken from the server. Functionality is implemented to ensure intuitive user interaction with weather data, including real-time data management and error handling to improve user experience.",
		name: "Weather data",
		stack:
			[
				{ name: "React",type: "front" },
				{ name: "TypeScript",type: "front" },
				{ name: "MSW",type: "front" },
				{ name: "RTK Query",type: "front" },
				{ name: "Vite",type: "front" },
				{ name: "primereact",type: "front" },
				{ name: "axios",type: "front" },
				{ name: "SCSS",type: "front" },
			],
		link: "https://github.com/StrongerProgrammer7/DataAboutWeather",
		img: PATH_IMG + 'weather.png'
	},
	{
		description: "The form writes data to storage, after sending the data is sent to the server. Implemented 'lazy loading' and AuthGuard, preventing repeated access to the form after the survey is completed.",
		name: "Collecting feedback",
		stack:
			[
				{ name: "React",type: "front" },
				{ name: "TypeScript",type: "front" },
				{ name: "Redux",type: "front" },
				{ name: "Redux/persist",type: "front" },
				{ name: "Vite",type: "front" },
			],
		link: "https://github.com/StrongerProgrammer7/rutube",
		img: PATH_IMG + 'rutube.png'
	},
	{
		description: "Dynamic creation of records in the table taking into account the hierarchy, as well as editing and deletion",
		name: "Dynamic table",
		stack:
			[
				{ name: "React",type: "front" },
				{ name: "TypeScript",type: "front" },
				{ name: "SCSS",type: "front" },
				{ name: "Vite",type: "front" },
			],
		link: "https://github.com/StrongerProgrammer7/DynamicTable",
		img: PATH_IMG + 'dynamic.png'
	},
	{
		description: "Set of pages both landing and multi-page",
		name: "Website layout",
		stack:
			[
				{ name: "HTML",type: "front" },
				{ name: "CSS",type: "front" },
				{ name: "JS",type: "front" },
				{ name: "Wordpress",type: "front" },
			],
		link: "https://github.com/StrongerProgrammer7/setWebSites",
		img: PATH_IMG + 'websites.png'
	},
];	
