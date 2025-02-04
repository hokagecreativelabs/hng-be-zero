
# HNG12 Stage 0 Backend Task

## Project Description
This project is a simple public API built for the HNG12 Stage 0 Backend task. The API returns basic information in JSON format, including:
- The registered email address used for the HNG12 Slack workspace.
- The current date and time in ISO 8601 format (UTC).
- The GitHub URL of the project's codebase.

## Technology Stack
- **Node.js** with **Express.js** for the backend.
- **CORS** enabled to handle cross-origin requests.
- **Deployed on:** [Railway/Render/Vercel] (choose your deployment platform).

## API Documentation

### **Base URL**
\`\`\`
<your-deployed-url>
\`\`\`

### **Endpoint**
#### \`GET /\`

##### **Response Format (200 OK)**
\`\`\`json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
\`\`\`

## Setup Instructions

### **1. Clone the Repository**
\`\`\`sh
git clone https://github.com/yourusername/your-repo.git
cd hng12-stage0-backend
\`\`\`

### **2. Install Dependencies**
\`\`\`sh
npm install
\`\`\`

### **3. Create a \`.env\` File**
\`\`\`sh
PORT=3000
\`\`\`

### **4. Start the Server**
\`\`\`sh
npm start
\`\`\`
The API will be running at \`http://localhost:3000\`

## Deployment
- The API is deployed at: \`<your-deployed-url>\`.
- Hosted on: **[Railway/Render/Vercel]**.

## Additional Resources
For more information on Node.js development, check out:
[Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)
