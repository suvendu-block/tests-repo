# todo application

todo application

---

## Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | React + Vite + Express |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Database** | MongoDB + Mongoose |
| **Authentication** | None |
| **Code Quality** | Production-grade (error handling, security, validation) |

## Features

- Standard CRUD operations

## Pages

- Home


## Quick Start

### Prerequisites
- Node.js 18+ and npm
- MongoDB (local or [Atlas](https://www.mongodb.com/atlas))

### 1. Clone & install
```bash
git clone <repo-url>
cd <project-directory>
```

### 2. Environment Variables
Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

| Variable | Description | Required |
|----------|-------------|----------|
| `PORT` | Server port | Yes |
| `NODE_ENV` | Environment (development/production) | Yes |
| `MONGODB_URI` | MongoDB connection string | Yes |

### 3. Run the app

### Server
```bash
cd server
npm install
cp .env.example .env
# Edit .env with your values
npm run dev
```

### Client
```bash
cd client
npm install
npm run dev
```

The app will be available at `http://localhost:5173` (client) and `http://localhost:5000` (API).

---

## Project Structure

```
.
├── client/                  # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/      # Navbar, Footer
│   │   ├── pages/           # Page components
│   │   ├── services/        # Axios API calls
│   │   ├── context/         # AuthContext, etc.
│   │   ├── assets/          # Images, fonts
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
├── server/                  # Express backend
│   ├── config/db.js
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   ├── .env
│   ├── server.js
│   └── package.json
├── .gitignore
└── README.md
```



## Testing

### Backend
```bash
npm test
```

Tests use **Jest + Supertest + mongodb-memory-server** for isolated integration tests. Each test file spins up an in-memory MongoDB, runs tests, and tears down.

### Frontend
```bash
cd frontend && npm test
```

Frontend tests use **Vitest + React Testing Library** with jsdom environment for component tests.

---

## Deployment

This project is configured for deployment on **Vercel**.

### Automatic Deploy
Push to the `main` branch — the CI/CD pipeline handles the rest.

### Manual Deploy
```bash
npm run build
npm run start
```



## Scripts

| Command | Description |
|---------|-------------|
| `cd frontend && npm run dev` | Start frontend dev server |
| `cd frontend && npm run build` | Build frontend for production |
| `cd server && node server.js` | Start backend server |
| `cd frontend && npm run preview` | Preview production build |

---

## License

MIT
