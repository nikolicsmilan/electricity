# Electricity

Project Objective
The Electricity project aims to process and showcase the information I acquire as a web developer during my electrical engineering training. This project is not only intended to enhance my professional portfolio but also to serve as a valuable resource for others seeking to gain knowledge in the field of electrical engineering. The application seeks to create an interactive and user-friendly environment that assists users in understanding the principles, techniques, and best practices of electrical work.

This project incorporates the latest web development technologies, such as React and Vite, while integrating educational materials, interactive examples, and visual tools. It provides users with opportunities to apply what they have learned in practice, fostering a deeper understanding of the electrical field.

Through this project, I aim not only to further my professional development but also to contribute to the advancement of education related to electricity. The application is designed to provide future electricians with useful knowledge and resources, enabling them to build successful careers.

## Directory Structure

├── public/ // Static resources served by the application <br>
│   ├── index.html // The main HTML file of the application <br>
├── build/ // Static resources served by the application <br>
│   ├── index.html // The main HTML file of the application <br>
├── src/ <br>
│   ├── assets/ // Static resources used by the application <br>
│   │   ├── images/ // Directory for images <br>
│   │   ├── video/ // Directory for videos <br>
│   │   └── sound/ // Directory for sound files <br>
│   ├── context/ <br>
│   │   ├── GeneralContext.jsx // Context for audio-related functionalities <br>
│   ├── components/ // Reusable components used throughout the application <br>
│   ├── hooks/ // Directory for custom hooks <br>
│   │   ├── use-windowsize.js // Hook for getting dynamic information about the screen size <br>
│   ├── layouts/ // Components for application layouts <br>
│   │   ├── LayoutHome.jsx // Default layout for the home page <br>
│   ├── locales/ <br>
│   │   └── localdata.js // Static data for menus, testing, and more <br>
│   ├── utils/ <br>
│   │   ├── motion.js // Static data for animations using Framer Motion <br>
│   ├── pages/ // Components for individual pages <br>
│   │   ├── Home/ // Main page component and its sub-components <br>
│   │   │   ├── Home.jsx // Main component for the Home page <br>
│   │   │   └── components/ // Sub-components of the main page component <br>
│   │   ├── Error/ // Error page components <br>
│   │   │   └── Error.jsx // Main error component <br>
│   ├── firebase/ // Firebase-related files <br>
│   ├── utils/ // Helper functions and classes <br>
│   ├── App.jsx // Main component of the application <br>
│   ├── App.css // CSS file for the main component <br>
│   ├── main.js // Main JavaScript file <br>
│   ├── index.css // CSS file for index.html <br>
│   ├── firebase.js // Firebase configuration <br>
│   ├── tailwind.css // Tailwind CSS file <br>
├── index.html // The main HTML file <br>
├── .gitignore // Git ignore settings file <br>
├── package.json // Project metadata and dependencies <br>
├── package-lock.json // Dependency lock file <br>
├── postcss.config.js // PostCSS configuration <br>
├── vite.config.js // Vite configuration <br>
└── README.md // Project README file <br>

## Getting Started

### Prerequisites

- Node.js
- npm 

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>

cd Electricity
npm install

### Running the Application
npm run dev
Your application should now be running at http://localhost:5174


### Features
Responsive design using Tailwind CSS.
Context API for global state management.
Custom hooks for reusable logic.
Modular structure with reusable components.
Contributing
If you want to contribute to this project, please fork the repository and submit a pull request.

### License
This project is licensed under the MIT License.
This README.md contains the project description, folder structure, installation steps, run instructions, features, troubleshooting, contribution guide, and license. If there is any additional information or changes you would like to add, please let me know!