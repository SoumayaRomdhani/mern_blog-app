# AI Hub Blog

**AI Hub Blog** is a sophisticated MERN stack application tailored for showcasing and interacting with AI research content. Leveraging modern web technologies, this application provides robust features for user management, content interaction, and search functionality. The app is deployed on Render and offers a full-stack solution with both client-side and server-side implementations.

## 🚀 Live Demo

Explore the live application on [Render](https://your-deployed-app-url) to see the AI Hub Blog in action.

## 🌟 Features

- **Authentication**: Utilizes JWT (JSON Web Token) for secure user authentication. The server handles user sessions and token management, ensuring protected routes and actions.
- **Design**: Implemented with Tailwind CSS, providing a responsive and customizable user interface. The Tailwind utility-first approach ensures a clean and maintainable CSS codebase.
- **Content Interaction**: Users can like and comment on posts. The server manages these interactions through RESTful APIs, with CRUD operations for comments and like counts.
- **Admin Dashboard**: Built with role-based access control (RBAC), the dashboard allows admins to manage posts, users, and comments. It provides endpoints for creating, updating, and deleting resources.
- **Search Functionality**: Integrated with a search feature that supports querying posts by category, keyword, or title. This functionality is powered by efficient indexing and querying techniques on the MongoDB database.
- **Dynamic Content Management**: Allows for the creation, updating, and deletion of posts. Implemented using Express.js for REST API endpoints and MongoDB for data storage.

## 📥 Installation

### Prerequisites

- **Node.js**: A JavaScript runtime for server-side development.
- **MongoDB**: NoSQL database for storing user and post data.
- **Git**: Version control for managing the source code.

### Setup

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/ai-hub-blog.git
    cd ai-hub-blog
    ```

2. **Install dependencies**:

    Navigate to the client and server directories to install the necessary Node.js packages:

    ```bash
    cd client
    npm install
    ```

    ```bash
    cd ../server
    npm install
    ```

3. **Configure environment variables**:

    Create a `.env` file in the `server` directory with the following configurations:

    ```bash
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

4. **Run the application**:

    Start the client-side React application and server-side Node.js application:

    ```bash
    cd client
    npm run dev
    ```

    ```bash
    cd ../server
    npm run dev
    ```

    Access the application at `http://localhost:3000`.

###🤝 Contributing
Contributions are encouraged! To contribute:

** Fork the repository.
** Create a new branch for your changes.
** Make your modifications and test thoroughly.
** Submit a pull request with a clear description of your changes.
