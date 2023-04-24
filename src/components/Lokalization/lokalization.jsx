import { dataWork } from './dateWork';
// !!! УСТАНОВИТЬ ДАТУ НАЧАЛА ПЕРИДА ТЕКУЩЕЙ РАБОТЫ В ДОКУМЕНТУ dateWork.jsx
const PROFESSION = 1; //? 0 = developer 1 = QA engineer
const contact = [
  { isVisible: true, link: '+380 68 890 66 98' }, //format number +380 99 111 22 33
  { isVisible: true, link: 'wolk8506@gmail.com' },
  { isVisible: true, link: 'linkedin.com/in/yuriy-krasyukov' },
  { isVisible: true, link: 'github.com/wolk8506?tab=stars' },
  { isVisible: true, link: 't.me/wolk8506' }, //t.me/nickmame
  { isVisible: true, link: 'join.skype.com/invite/JlBJeLF5ubji' },
];

export const langPage = [
  //
  //    ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! !
  //    ! ! ! ! ! ! ! ! !       E N G L I S H     ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! !
  //    ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! !

  {
    id: 'en-EN', //? не изменяется
    isVisibleAboutMeProfession: PROFESSION,
    aboutMeProfession: ['Front-end Developer', 'QA Engineer'],
    name: 'Krasyukov Yurij',
    isVisibleAbout: PROFESSION, //? Выбор описание о себе в соответствии с выбираемой должностью QA или developer
    about: [
      'I am a novice front-end developer, looking for a position as a junior software developer in an IT company. Graduated from GoIT Front-end Full Stack developer courses. I have the following technical skills: HTML5, CSS3, SASS, JavaScript, React, NodeJS, Git, Jira. I am looking for an interesting job in a good team, where I could improve my skills and use them for interesting tasks. I have experience in developing both group and individual academic projects.',
      `${dataWork(
        2022,
        9,
        'en'
      )}  experience as a software testing engineer in the field of an integrated IoT system for servicing large production processes and smart data retrieval in various fields of activity. I have knowledge of software product quality control procedures. A set of tools such as API testing tool, HTML/CSS/JS knowledge combined with software development and testing process management tools and strong teamwork can ensure quality. Since QA as part of the IT industry is rapidly developing, I am constantly improving my knowledge and skills. Therefore, I am confident that, as a quality assurance engineer, I will bring value and value to the company.`,
    ],
    isVisibleProjects: true, // true - секция активна, false - секция не активна
    projects: 'Projects', //? не изменяется
    workExperience: 'Work Experience', //? не изменяется

    // ***************         W o r k          ***************
    company: [
      // ? #4 место работы
      {
        lebensstellung: 'Tester',
        arbeitsplatz: 'LLC “Unic Lab”',
        time: 'September 2022 - up to now',
        time2: dataWork(2022, 9, 'en'),
        slils: [
          'Analysis and clarification of requirements with analysts',
          'Planning the testing process',
          'Writing test scripts',
          'Bug life cycle tracking',
          'Re-test fixed defects',
          'Test Analysis',
          'Test process optimization',
          'Maintenance of test documentation',
        ],
      },
      // ? #3 место работы
      {
        lebensstellung: 'Department head',
        arbeitsplatz: 'LLC “Libra TK”',
        time: 'September 2019 - up to now',
        time2: dataWork(2019, 9, 'en'),
        slils: [
          'Organization of the work of the branch',
          'Analytical vision of work processes in the department',
          'Document flow in 1C',
          'Operational management of employees, analysis of request and their distribution according to their importance',
          'Implementation of the selection of personnel and their training',
          'Logistics of the department, accounting and timely replenishment of spare parts',
          'Conducting briefings on labor protection, fire safety and industrial sanitation',
          'Statistical accounting of maintenance and repairs',
          'Commissioning of new equipment',
          'Monitoring the technical condition of vehicles',
          'Implementation of registration, fiscalization, operation and repair of electronic cash register systems of gas stations',
          'Development of plans and programs for production and economic activities',
        ],
      },
      // ? #2 место работы
      {
        lebensstellung: 'Electronic engineer',
        arbeitsplatz: 'LLC “Market Service”/LLC “Libra TK”',
        time: 'September 2014 – September 2019',
        time2: '5 years',
        slils: [
          'Technical service of POS terminals and fuel dispensing column',
          'Preparation of computing equipment for work, technical inspection of devices and assemblies, control of parameters and reliability of electronic elements of equipment',
          'Carrying out preventive and current repair of electronic equipment',
          'Ensuring the correct technical operation, uninterrupted high-performance operation of the electronic equipment of the gas station',
        ],
      },
      // ? #1 место работы
      {
        lebensstellung:
          'Fixer of technological equipment CNC machines, rank VIII',
        arbeitsplatz: 'KMP “FED”',
        time: 'August 2008 - August 2014 ',
        time2: '6 years',
        slils: [
          'Adjustment and regulation of special technological equipment',
          'Periodic inspection of the serviced equipment with identification and elimination of malfunctions in units, boards, modules and mechanisms',
          'Performance of works related to the repair and subsequent adjustment of the mechanical and electrical parts of the equipment',
        ],
      },
    ],

    // ***************         E d u c a t i o n          ***************

    еducation: 'Education', //? не изменяется
    university: [
      {
        // ? #1 место учебы

        universityName:
          'Kharkiv National University of Radio and Electronics (KHNURE)',
        specialization:
          'Biomedical electronics (Electronics Engineer), master.',
        certificate: {
          isVisible: true,
          name: 'Diploma',
          link: 'https://drive.google.com/file/d/1juN8KGCL6PwCqYy5lBEPdi-7UhTJC9WQ/view?usp=sharing',
        },
        еducationTime: 'September 2003 - June 2008',
        еducationPeriod: '5 years',
      },
      {
        // ? #2 место учебы

        universityName: 'GoIT',
        specialization: 'Frontend Full Stack Online.',
        certificate: {
          isVisible: true,
          name: 'Certificate',
          link: 'https://drive.google.com/file/d/15muKH3ciQCZ0pOPEv6c0w4V1Gk8VonAj/view?usp=sharing',
        },
        еducationTime: 'September 2021 - October 2022',
        еducationPeriod: '1 year 2 months',
      },
      {
        // ? #3 место учебы

        universityName: 'Stepik',
        specialization: 'The universe of testing, or how to become a tester.',
        certificate: {
          isVisible: true,
          name: 'Certificate',
          link: 'https://drive.google.com/file/d/1OGlHg_HLcBDAqrpbQxme0yWxFfEoPijp/view?usp=sharing',
        },
        еducationTime: 'July 2023',
        еducationPeriod: '1 month',
      },
    ],

    //  ***************         S I D E B A R          ***************

    contacts: 'Contacts', //? не изменяется
    contact: contact, //? не изменяется
    location: {
      isVisible: true,
      link: 'https://www.google.com/maps/place/%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2,+%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C/@49.9945914,36.2858247,11z/data=!3m1!4b1!4m5!3m4!1s0x4127a09f63ab0f8b:0x2d4c18681aa4be0a!8m2!3d49.9935!4d36.230383',
      city: 'Ukraine, Kharkov',
    },

    techSkillsTitle: 'Tech Skills', //? не изменяется
    techSkills: [
      'HTML5',
      'CSS3',
      'GIT',
      'JavaScript',
      'React',
      'Node.js',
      'Figma',
      'Jira, Kiwi',
      'Postman',
      'Python',
    ],
    softSkillsTitle: 'Soft Skills', //? не изменяется
    softSkills: [
      'Agile (Scrum, Kanban)',
      'GTD',
      'Teamwork',
      'Ability to make decisions',
      'Flexible thinking',
      'Desire to improve your professional level',
      'Analytical mind',
      'Critical thinking',
    ],
    languagesTitle: 'Languages', //? не изменяется
    languages: ['English – Basic', 'Russian - Native', 'Ukrainian - Native'],
  },

  //    ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! !
  //    ! ! ! ! ! ! ! ! !       R U S S I A N     ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! !
  //    ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! !

  {
    id: 'ru-RU', //? не изменяется
    isVisibleAboutMeProfession: PROFESSION,
    aboutMeProfession: ['Front-end Developer', 'QA Engineer'],
    name: 'Красюков Юрий',
    isVisibleAbout: PROFESSION, //? Выбор описание о себе в соответствии с выбираемой должностью QA или developer
    about: [
      'Я начинающий фронтенд-разработчик, ищу позицию младшего разработчика программного обеспечения в ИТ-компании. Окончил курсы разработчиков Frontend Full Stack в GoIT. У меня есть следующие технические навыки: HTML5, CSS3, SASS, JavaScript, React, NodeJS, Git, Jira. Ищу интересную работу в хорошем коллективе, где я мог бы совершенствовать свои навыки и использовать их для интересных задач. Имею опыт разработки как групповых, так и индивидуальных академических проектов.',
      `${dataWork(
        2022,
        9,
        'ru'
      )}  опыта работы инженером по тестированию программного обеспечения в сфере комплексной IoT-системы для обслуживания крупных производственных процессов и умного съема данных в различных сферах деятельности. Обладаю знаниями процедур контроля качества программного продукта. Набор инструментов, таких как инструмент тестирования API, HTML/CSS/JS знания в сочетании с разработкой и тестированием программного обеспечения инструменты управления процессами и сильная командная работа могут обеспечить качество. Поскольку QA как часть ИТ-индустрии быстро развивается, я постоянно совершенствую свои знания и навыки. Следовательно, я уверен, что, как инженер по обеспечению качества, я принесу пользу и ценность для компании.`,
    ],

    isVisibleProjects: true, // true - секция активна, false - секция не активна
    projects: 'Проекты', //? не изменяется
    workExperience: 'Опыт работы', //? не изменяется

    // ***************         W o r k          ***************

    company: [
      // ? #4 место работы
      {
        lebensstellung: 'Тестировщик',
        arbeitsplatz: 'ООО “Unic Lab”',
        time: 'Сентябрь 2022 - по настоящее время',
        time2: dataWork(2022, 9, 'ru'),
        slils: [
          'Анализ и уточнение требований с аналитиками',
          'Планирование процесса тестирования',
          'Написание сценариев тестирования',
          'Отслеживание жизненного цикла ошибок',
          'Re-тест починенных дефектов',
          'Анализ тестирования',
          'Оптимизация процесса тестирования',
          'Ведение тестовой документации',
        ],
      },
      // ? #3 место работы
      {
        lebensstellung: 'Начальник отдела',
        arbeitsplatz: 'ООО “Либра ТК”',
        time: 'Сентябрь 2019 - по настоящее время',
        time2: dataWork(2019, 9, 'ru'),
        slils: [
          'Организация работы филиала',
          'Аналитическое ведение рабочих процессов в отделе. Документооборот в 1С',
          'Оперативное управление сотрудниками, анализ заявок и их распределение по степени важности',
          'Осуществление подбора персонала и его обучение',
          'Логистика отдела, учет и своевременное пополнение запасных частей',
          'Проведение инструктажей по охране труда, пожарной безопасности и производственной санитарии',
          'Статистический учет технического обслуживания и ремонтов',
          'Ввод в эксплуатацию нового оборудования. Контроль технического состояния автомобилей',
          'Осуществление регистрации, фискализации, эксплуатации и ремонта электронно-кассовых систем АЗС',
          'Разработка планов и программ производственно-хозяйственной деятельности',
        ],
      },
      // ? #2 место работы
      {
        lebensstellung: 'Инженер-электроник',
        arbeitsplatz: 'ООО “Маркет сервис” / ООО “Либра ТК”',
        time: 'Сентябрь 2014 – Сентябрь 2019',
        time2: '5 лет',
        slils: [
          'Техническое обслуживание POS-терминалов и ТРК',
          'Подготовка вычислительной техники к работе, технический осмотр приборов и агрегатов, контроль параметров и надежности электронных элементов техники',
          'Проведение профилактического и текущего ремонта электронной техники',
          'Обеспечение правильной технической эксплуатации, бесперебойной высокопроизводительной работы электронного оборудования АЗС',
        ],
      },
      // ? #1 место работы
      {
        lebensstellung:
          'Наладчик технологического оборудования станков с ЧПУ, разряд VIII',
        arbeitsplatz: 'ХМЗ “ФЭД”',
        time: 'Август 2008 - Август 2014',
        time2: '6 лет',
        slils: [
          'Наладка и регулирование специального технологического оборудования',
          'Периодический осмотр обслуживаемого оборудования с выявлением и устранением неисправностей в узлах, щитах, модулях и механизмах',
          'Выполнение работ по ремонту и последующей наладке механической и электрической части оборудования',
        ],
      },
    ],

    // ***************         E d u c a t i o n          ***************

    еducation: 'Образование', //? не изменяется
    university: [
      {
        // ? #1 место учебы

        universityName:
          'Харьковский национальный университет радиоэлектроники (ХНУРЭ)',
        specialization:
          'Биомедицинская электроника (инженер-электронщик), магистр.',
        certificate: {
          isVisible: true,
          name: 'Диплом',
          link: 'https://drive.google.com/file/d/1juN8KGCL6PwCqYy5lBEPdi-7UhTJC9WQ/view?usp=sharing',
        },
        еducationTime: 'Сентябрь 2003 - Июнь 2008',
        еducationPeriod: '5 лет',
      },
      {
        // ? #2 место учебы

        universityName: 'GoIT',
        specialization: 'Frontend Full Stack Online.',
        certificate: {
          isVisible: true,
          name: 'Сертификат',
          link: 'https://drive.google.com/file/d/15muKH3ciQCZ0pOPEv6c0w4V1Gk8VonAj/view?usp=sharing',
        },
        еducationTime: 'Сентябрь 2021 - Октябрь 2022',
        еducationPeriod: '1 год 2 месяца',
      },
      {
        // ? #3 место учебы

        universityName: 'Stepik',
        specialization: 'Вселенная тестирования, или Как стать тестировщиком.',
        certificate: {
          isVisible: true,
          name: 'Сертификат',
          link: 'https://drive.google.com/file/d/1OGlHg_HLcBDAqrpbQxme0yWxFfEoPijp/view?usp=sharing',
        },
        еducationTime: 'Июль 2023',
        еducationPeriod: '1 месяц',
      },
    ],

    // ***************         S I D E B A R          ***************

    contacts: 'Контакты', //? не изменяется
    contact: contact, //? не изменяется
    location: {
      isVisible: true,
      link: 'https://www.google.com/maps/place/%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2,+%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C/@49.9945914,36.2858247,11z/data=!3m1!4b1!4m5!3m4!1s0x4127a09f63ab0f8b:0x2d4c18681aa4be0a!8m2!3d49.9935!4d36.230383',
      city: 'Украина, Харьков',
    },
    techSkillsTitle: 'Технические навыки', //? не изменяется
    techSkills: [
      'HTML5',
      'CSS3',
      'GIT',
      'JavaScript',
      'React',
      'Node.js',
      'Figma',
      'Jira, Kiwi',
      'Postman',
      'Python',
    ],
    softSkillsTitle: 'Гибкие навыки', //? не изменяется
    softSkills: [
      'Agile (Scrum, Kanban)',
      'GTD',
      'Командная работа',
      'Способность принимать решения',
      'Гибкое мышление',
      'Желание повышать свой профессиональный уровень',
      'Аналитический склад ума',
      'Критическое мышление',
    ],
    languagesTitle: 'Языки', //? не изменяется
    languages: [
      'Английский – базовый',
      'Русский - родной',
      'Украинский - родной',
    ],
  },

  //    ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! !
  //    ! ! ! ! ! ! ! ! !       U K R A I N I A N     ! ! ! ! ! ! ! ! ! ! ! ! ! ! !
  //    ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! !

  {
    id: 'ua-UA', //? не изменяется
    isVisibleAboutMeProfession: PROFESSION,
    aboutMeProfession: ['Front-end Developer', 'QA Engineer'],
    name: 'Красюков Юрій',
    isVisibleAbout: PROFESSION, //? Выбор описание о себе в соответствии с выбираемой должностью QA или developer
    about: [
      'Я починаю фронтенд-розробник, шукаю позицію молодшого розробника програмного забезпечення в ІТ-компанії. Окончив курси розробників Frontend Full Stack в GoIT. У мене є наступні технічні навики: HTML5, CSS3, SASS, JavaScript, React, NodeJS, Git, Jira. Іщу цікаву роботу в хорошому колективі, де я міг би вдосконалити свої навики та використовувати їх для цікавих завдань. Маю досвід розробки як групових, так і індивідуальних академічних проектів.',
      `${dataWork(
        2022,
        9,
        'ua'
      )}  досвід роботи інженером з тестування програмного забезпечення у сфері комплексної IoT-системи для обслуговування великих виробничих процесів та розумного знімання даних у різних сферах діяльності. Маю знання процедур контролю якості програмного продукту. Набір інструментів, таких як інструмент тестування API, HTML/CSS/JS знання у поєднанні з розробкою та тестуванням програмного забезпечення інструменти управління процесами та сильна командна робота можуть забезпечити якість. Оскільки QA як частина ІТ-індустрії швидко розвивається, я постійно вдосконалюю свої знання та навички. Отже, я впевнений, що, як інженер із забезпечення якості, я принесу користь та цінність для компанії.`,
    ],
    isVisibleProjects: true, // true - секция активна, false - секция не активна
    projects: 'Проекти', //? не изменяется
    workExperience: 'Досвід роботи', //? не изменяется

    // ***************         W o r k          ***************
    company: [
      // ? #4 место работы
      {
        lebensstellung: 'Тестувальник',
        arbeitsplatz: 'ООО “Unic Lab”',
        time: 'Вересень 2022 - по теперішній час',
        time2: dataWork(2022, 9, 'ua'),
        slils: [
          'Аналіз та уточнення вимог з аналітиками',
          'Планування процесу тестування',
          'Написання сценаріїв тестування',
          'Відстеження життєвого циклу помилок',
          'Re-тест полагоджених дефектів',
          'Аналіз тестування',
          'Оптимізація процесу тестування',
          'Ведення тестової документації',
        ],
      },
      // ? #3 место работы
      {
        lebensstellung: 'Начальник відділу',
        arbeitsplatz: 'ТОВ “Лібра ТК”',
        time: 'Вересень 2019 - по теперішній час',
        time2: dataWork(2019, 9, 'ua'),
        slils: [
          'Організація роботи філії',
          'Аналітичне ведення робочих процесів у відділі',
          'Документообіг в 1С',
          'Оперативне управління співробітниками, аналіз заявок та їх розподіл за ступенем важливості',
          'Здійснення підбору персоналу та його навчання',
          'Логістика відділу, облік та своєчасне поповнення запасних частин',
          'Проведення інструктажів з охорони праці, пожежної безпеки та виробничої санітарії',
          'Статистичний облік технічного обслуговування та ремонтів',
          'Введення в експлуатацію нового обладнання',
          'Контроль технічного стану автомобілів',
          'Здійснення реєстрації, фіскалізації, експлуатації та ремонту електронно-касових систем АЗС',
          'Розробка планів та програм виробничо-господарської діяльності',
        ],
      },
      // ? #2 место работы
      {
        lebensstellung: 'Інженер-електронік',
        arbeitsplatz: 'ТОВ “Маркет сервіс” / ТОВ “Лібра ТК”',
        time: 'Вересень 2014 – Вересень 2019',
        time2: '5 років',
        slils: [
          'Технічне обслуговування POS-терміналів та ТРК',
          'Підготовка обчислювальної техніки до роботи, технічний огляд приладів та агрегатів, контроль параметрів та надійності електронних елементів техніки',
          'Проведення профілактичного та поточного ремонту електронної техніки',
          'Забезпечення правильної технічної експлуатації, безперебійної високопродуктивної роботи електронного обладнання АЗС',
        ],
      },
      // ? #1 место работы
      {
        lebensstellung:
          'Налагоджувач технологічного обладнання верстатів з ЧПУ, розряд VIII',
        arbeitsplatz: 'ХМЗ "ФЕД"',
        time: 'Серпень 2008 - Серпень 2014',
        time2: '6 років',
        slils: [
          'Налагодження та регулювання спеціального технологічного обладнання',
          'Періодичний огляд устаткування, що обслуговується, з виявленням та усуненням несправностей у вузлах, щитах, модулях і механізмах',
          'Виконання робіт з ремонту та подальшого налагодження механічної та електричної частини обладнання',
        ],
      },
    ],

    // ***************         E d u c a t i o n          ***************

    еducation: 'Освіта', //? не изменяется
    university: [
      {
        // ? #1 место учебы

        universityName:
          'Харківський національний університет радіоелектроніки (ХНУРЕ)',
        specialization:
          'Біомедична електроніка (інженер-електронник), магістр.',
        certificate: {
          isVisible: true,
          name: 'Диплом',
          link: 'https://drive.google.com/file/d/1juN8KGCL6PwCqYy5lBEPdi-7UhTJC9WQ/view?usp=sharing',
        },
        еducationTime: 'Вересень 2003 - Червень 2008',
        еducationPeriod: '5 років',
      },
      {
        // ? #2 место учебы

        universityName: 'GoIT',
        specialization: 'Frontend Full Stack Online.',
        certificate: {
          isVisible: true,
          name: 'Сертифікат',
          link: 'https://drive.google.com/file/d/15muKH3ciQCZ0pOPEv6c0w4V1Gk8VonAj/view?usp=sharing',
        },
        еducationTime: 'Вересень 2021 - Жовтень 2022',
        еducationPeriod: '1 рік 2 місяці',
      },
      {
        // ? #3 место учебы

        universityName: 'Stepik',
        specialization: 'Всесвіт тестування, або Як стати тестувальником.',
        certificate: {
          isVisible: true,
          name: 'Сертифікат',
          link: 'https://drive.google.com/file/d/1OGlHg_HLcBDAqrpbQxme0yWxFfEoPijp/view?usp=sharing',
        },
        еducationTime: 'Липень 2023',
        еducationPeriod: '1 місяць',
      },
    ],

    // ***************         S I D E B A R          ***************

    contacts: 'Контакти', //? не изменяется
    contact: contact, //? не изменяется
    location: {
      isVisible: true,
      link: 'https://www.google.com/maps/place/%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2,+%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C/@49.9945914,36.2858247,11z/data=!3m1!4b1!4m5!3m4!1s0x4127a09f63ab0f8b:0x2d4c18681aa4be0a!8m2!3d49.9935!4d36.230383',
      city: 'Україна Харків',
    },
    techSkillsTitle: 'Технічні навички', //? не изменяется
    techSkills: [
      'HTML5',
      'CSS3',
      'GIT',
      'JavaScript',
      'React',
      'Node.js',
      'Figma',
      'Jira, Kiwi',
      'Postman',
      'Python',
    ],
    softSkillsTitle: 'Гнучкі навички', //? не изменяется
    softSkills: [
      'Agile (Scrum, Kanban)',
      'GTD',
      'Командна робота',
      'Здатність приймати рішення',
      'Гнучке мислення',
      'Бажання підвищувати свій професійний рівень',
      'Аналітичний склад розуму',
      'Критичне мислення',
    ],
    languagesTitle: 'Мови', //? не изменяется
    languages: [
      'Англійська – базова',
      'Українська - рідна',
      'Російська - рідна',
    ],
  },
];
