export interface Skill {
  name: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  year: number;
  techStack: string[];
  description: string;
  highlights: string[];
}

export interface Hackathon {
  id: string;
  name: string;
  status: string;
  project: string;
  location?: string;
}

export interface Achievement {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  teamContributions?: string;
  context: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'internship' | 'position' | 'volunteering' | 'coordinator';
}

export const personalInfo = {
  name: 'Shivakumar R',
  role: 'MERN STACK DEVELOPER',
  tagline: 'Java Programmer & Aspiring AI-Driven Developer',
};

export const vision = {
  quote: 'To build impactful applications that merge technology with purpose across mental wellness, mechanical systems, and artificial intelligence, creating solutions that matter.',
};

export const skills: Skill[] = [
  { name: 'React', icon: 'react' },
  { name: 'MongoDB', icon: 'database' },
  { name: 'Node.js', icon: 'server' },
  { name: 'Express.js', icon: 'workflow' },
  { name: 'JavaScript', icon: 'code' },
  { name: 'Java', icon: 'coffee' },
  { name: 'Bootstrap', icon: 'layout' },
  { name: 'Git', icon: 'git-branch' },
  { name: 'IoT/ESP32', icon: 'cpu' },
];

export const projects: Project[] = [
  {
    id: 'lonelyless',
    title: 'LonelyLess – AI Mental Wellness Chatbot',
    year: 2025,
    techStack: ['React', 'Node.js', 'MongoDB', 'AI', 'Tailwind CSS'],
    description: 'Developed an AI-powered chatbot acting as a virtual companion for users experiencing loneliness.',
    highlights: [
      'Focused on empathetic interaction and real-time conversation',
      'Enhanced user engagement with supportive conversational experience',
      'Designed to provide a safe environment for emotional support',
    ],
  },
  {
    id: 'learning-platform',
    title: 'Centralized Learning Platform',
    year: 2024,
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    description: 'Built a full-stack platform for Students, Tutors, and Admins using MongoDB, Express.js, Node.js, React.js.',
    highlights: [
      'Implemented role-based authentication and RESTful APIs',
      'Created separate dashboards for different user roles',
      'Enabled class scheduling and course allocation features',
      'Secured data flow with responsive UI design',
    ],
  },
  {
    id: 'iot-intruder',
    title: 'IoT-Enabled Smart Intruder Detection System',
    year: 2024,
    techStack: ['ESP32', 'IoT', 'Sensors', 'ThingSpeak'],
    description: 'Built an IoT-based system using ESP32 and sensors for anomaly detection.',
    highlights: [
      'Enabled real-time alerts via buzzer and cloud notifications',
      'Integrated with ThingSpeak for remote monitoring',
      'Implemented efficient sensor-based anomaly detection',
    ],
  },
  {
    id: 'task-manager',
    title: 'Task Priority Manager',
    year: 2024,
    techStack: ['React.js', 'Tailwind CSS'],
    description: 'Developed a task management application using React.js and Tailwind CSS.',
    highlights: [
      'Implemented task CRUD operations with priority-based filtering',
      'Used efficient state management for real-time UI updates',
      'Created intuitive interface for task organization',
    ],
  },
];

export const hackathons: Hackathon[] = [
  {
    id: 'sih-2025',
    name: 'SIH Hackathon 2025',
    status: 'Internal Selection',
    project: 'AI mental wellness chatbot',
  },
  {
    id: 'gdg-kolhapur',
    name: 'Google Developer Groups Hackathon',
    status: 'Finalist',
    project: 'Tag-based file organizer',
    location: 'Kolhapur',
  },
  {
    id: 'ai-good-fest',
    name: 'AI for Good Fest',
    status: 'Finalist',
    project: 'AI mental wellness chatbot',
    location: 'New Delhi',
  },
];

export const achievements: Achievement[] = [
  {
    id: 'icaitsc-best-paper',
    title: 'Best Paper Award - ICAITSC 2026',
    shortDescription: 'Best Paper Award at International Conference on AI Techniques & Smart Computing',
    description: 'Paper titled "Smart Agricultural Weed Management Using Image Classification and Automated Actuation" received the Best Paper Award at the International Conference on Artificial Intelligence Techniques & Smart Computing (ICAITSC 2026).',
    teamContributions: 'Dr. P.S. Sampath served as mentor and corresponding author, consistently pushing limits through challenging tasks. Co-authors Abisheik M and Jaivikas worked as a team to proceed the paper at the international conference.',
    context: 'The paper focused on innovative AI applications in agricultural automation, demonstrating significant impact potential in smart farming and weed management systems.',
  },
  {
    id: 'paper-kit-first',
    title: 'First Prize - Paper Presentation at Knowledge Institute of Technology',
    shortDescription: 'Won first prize in technical paper presentation',
    description: 'Secured first prize in a paper presentation competition at Knowledge Institute of Technology, demonstrating excellent research communication and presentation skills.',
    teamContributions: 'Team members Ms. Vijayalakshmi Devaraj and Ms. Nabishka Murugesan played a vital role in this immense achievement.',
    context: 'The presentation showcased cutting-edge research and effective team collaboration.',
  },
  {
    id: 'paper-excel-third',
    title: 'Third Prize - Paper Presentation at Excel College of Engineering',
    shortDescription: 'Third place in technical paper presentation',
    description: 'Achieved third position in a paper presentation event at Excel College of Engineering.',
    teamContributions: 'Team mate Ms. Vijayalakshmi always gave strong support during the presentation phase. Her communication along with mine helped to grasp the prize in the event.',
    context: 'The event demonstrated the power of collaborative presentation and strong teamwork.',
  },
  {
    id: 'blind-coding',
    title: 'First Prize - Blind Coding at Knowledge Institute of Technology',
    shortDescription: 'Won first place in blind coding competition',
    description: 'Secured first prize in blind coding competition, solving problems using C programming language.',
    context: 'The competition tested programming skills under challenging conditions without visual aids.',
  },
  {
    id: 'mirror-web',
    title: 'Second Prize - Mirror the Web at Coimbatore Institute of Technology',
    shortDescription: 'Runner-up in web development technical event',
    description: 'Won second prize at Mirror the Web technical event, establishing development skills and expanding professional network.',
    context: 'This event provided opportunities to showcase web development capabilities and connect with industry professionals.',
  },
  {
    id: 'sae-india',
    title: 'SAEINDIA Bicycle Design Challenge - Overall Second Prize & Best Dynamic Performance',
    shortDescription: 'Overall second prize and first in dynamic performance at national competition',
    description: 'Won overall second prize at SAEINDIA Bicycle Design Challenge and first prize in best dynamic performance team, competing with 34 different teams around southern part of India.',
    teamContributions: 'Contributed in material selection, presentation, report preparation, and material purchase.',
    context: 'The competition brought together engineering students to solve real-world mechanical design challenges.',
  },
  {
    id: 'tech-quiz',
    title: 'Second Prize - Technical Quiz at Vellalar College of Engineering and Technology',
    shortDescription: 'Runner-up in technical quiz competition',
    description: 'Secured second prize in technical quiz competition, demonstrating strong technical knowledge and quick thinking.',
    context: 'The quiz tested comprehensive understanding of engineering and technology concepts.',
  },
  {
    id: 'one-day-ceo',
    title: 'Second Prize - One Day CEO Event at Knowledge Institute of Technology',
    shortDescription: 'Second place in leadership and communication event',
    description: 'Won second prize at One Day CEO event, which tested communication skills and people handling abilities. Gained new networks through this event.',
    context: 'The event simulated real-world business scenarios and evaluated leadership qualities.',
  },
  {
    id: 'mr-mrs-communication',
    title: 'Second Prize - Mr & Mrs Communication Event at Karphagam College of Engineering',
    shortDescription: 'Second place in men\'s category at communication event',
    description: 'Secured second prize at men\'s category in Mr and Mrs communication-based event, enabling strong expression of thoughts towards people without fear.',
    context: 'The event focused on building confidence and effective communication in public speaking scenarios.',
  },
  {
    id: 'readers-club',
    title: 'Best Reader\'s Club Member Award',
    shortDescription: 'Awarded as best reader\'s club member',
    description: 'Awarded as best reader\'s club member, gaining recognition for efforts and contributions to the club. Contributed in various events conducted by readers club, acting as event coordinator.',
    context: 'The recognition was awarded for promoting reading culture and active participation in literary activities on campus.',
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: 'hertzwork',
    title: 'Software Development Intern',
    organization: 'Hertzwork Private Limited',
    period: '2024',
    description: 'Developed dynamic user interfaces using React.js and styled with Tailwind CSS. Built and integrated backend APIs for efficient data handling and application logic. Collaborated with team members to deliver responsive and user-friendly applications.',
    type: 'internship',
  },
  {
    id: 'best-engineers',
    title: 'Quality Control Intern',
    organization: 'Best Engineers Pumps Pvt Limited',
    period: '2023',
    description: 'Gained exposure to various types of pumps available in industry. Worked in quality control unit and learned how each pump is tested and quality assurance processes are conducted.',
    type: 'internship',
  },
  {
    id: 'yi-yuva',
    title: 'YI Yuva Road Safety Co-Chair',
    organization: 'YI Yuva (Erode Chapter)',
    period: '2024 - Present',
    description: 'Gained position to think about necessary measures towards road safety. Working with higher officials of Yuva to implement ideas in real world. Acted as coordinator for Emergency Responders Training Programme for drivers and students.',
    type: 'position',
  },
  {
    id: 'hospitality',
    title: 'Hospitality Coordinator',
    organization: 'Department of Mechanical (SPACKS Association)',
    period: '2024',
    description: 'Acted as hospitality coordinator along with Ms. Vijayalakshmi Devaraj, managing event arrangements and guest relations.',
    type: 'position',
  },
  {
    id: 'class-rep',
    title: 'Former Class Representative',
    organization: 'First Year Batch',
    period: '2022 - 2023',
    description: 'Performed as class representative for the batch along with Mr. Ravindra and Ms. Harini, serving as liaison between students and faculty.',
    type: 'position',
  },
  {
    id: 'sip-volunteer',
    title: 'Volunteer - SIP Program',
    organization: 'Student Induction Program',
    period: '2024',
    description: 'Volunteered for both batches of juniors. Explained about Department of Mechanical Engineering to juniors and made them feel comfortable about college resources and facilities.',
    type: 'volunteering',
  },
  {
    id: 'graduation-volunteer',
    title: 'Volunteer - Graduation Day',
    organization: 'Graduation Day Committee',
    period: '2024',
    description: 'During graduation day of seniors, contributed to the event by distributing food throughout. Gained happy memories and emotional moments through this event.',
    type: 'volunteering',
  },
  {
    id: 'vituku-coordinator',
    title: 'Overall Coordinator',
    organization: 'Vituku Oru Vigyani Event by Puthaya Thalaimurai',
    period: '2024',
    description: 'One of the famous events conducted by this television show with our college as host. Coordinated students assembly in allotted spots and ensured all students gained essential goods to make their project work without trouble.',
    type: 'coordinator',
  },
  {
    id: 'ict-coordinator',
    title: 'Coordinator',
    organization: 'ICT Academy BRIDGE 24 TamilNadu - The Global Skill Capital',
    period: '2024',
    description: 'Coordinated this event which provided slightly uncomfortable situations but gave new perspectives about technology adoption.',
    type: 'coordinator',
  },
  {
    id: 'dakshaa-coordinator',
    title: 'Coordinator',
    organization: 'Project Presentation - DAKSHAA 2025',
    period: '2025',
    description: 'After a long gap, coordinated along with Ms. Vijayalakshmi Devaraj. Faced lots of dynamic problems in coordination and learned during the process of this event.',
    type: 'coordinator',
  },
  {
    id: 'science-expo-coordinator',
    title: 'Coordinator',
    organization: 'Science Expo at K.S. Rangasamy College of Technology',
    period: '2024',
    description: 'Acted as coordinator for science expo in our college. Participants were school students, providing them exposure to engineering and technology.',
    type: 'coordinator',
  },
];

export const navLinks = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'vision', label: 'Vision', href: '#vision' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'hackathons', label: 'Hackathons', href: '#hackathons' },
  { id: 'achievements', label: 'Achievements', href: '#achievements' },
  { id: 'experience', label: 'Experience', href: '#experience' },
];
