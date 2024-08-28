# Bijoy 2024
Bijoy 2024 is a frontend project built using Next.js and Tailwind CSS. The project includes the following key features:

1. Login Page with Google Sign-In (SSO): A simple login page that integrates Google Sign-In functionality.
2. User Data Table: Fetches a list of dummy user data from an external API and displays it in a table format.
3. Signup Form with Validation: A signup form designed with specific fields and validation logic, focusing on UI implementation without API integration.

# Getting Started
To set up, run, and test the application, follow these steps:

# Prerequisites
1. Node.js (recommended version: 18.x)
2. npm or yarn

# Installation
1. Clone the repository: git clone https://github.com/AnikaTahsin06/Bijoy-2024
2. Navigate to the project directory: cd bijoy-2024
3. Install dependencies: Using npm: npm install
                         Using yarn: yarn install

# Configuration
1. Create a .env.local file in the root directory of the project.
2. Add your environment variables. You can use the following template and replace the placeholders with your actual values:
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=<your-secret>
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>

# Running the Application
1. Start the development server: Using npm:npm run dev
                                 Using yarn:yarn dev
2. Open your browser and go to http://localhost:3000 to view the application.

# Linting
To run ESLint and check for code issues: Using npm: npm run lint
                                         Using yarn: yarn lint

# Tools Used
1. Next.js: Framework for server-rendered React applications.
2. React: JavaScript library for building user interfaces.
3. Tailwind CSS: Utility-first CSS framework for styling.
4. NextAuth.js: Authentication library for Next.js applications.
5. ESLint: Tool for identifying and fixing problems in JavaScript code.

# Assumptions
1. Node.js and npm/yarn are installed on your machine.
2. Google credentials for OAuth are set up and ready to use.

# License
This project is licensed under the MIT License - see the LICENSE file for details.