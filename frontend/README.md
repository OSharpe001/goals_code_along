Goals Setter App: Full-Stack Codealong
Provided By: Traversy Media on YouTube
Starting video of 4-part series: https://www.youtube.com/watch?v=-0exw-9YJBo&list=PLillGF-RfqbbQeVSccR9PGKHzPJSWqcsm

OLD SCRIPTS:
"scripts": {
    "start": "node backend/server.js",
    "server": "nodemon backend/server.js",
    "client": "npm start --prefix frontend",
    "dev": "concurrently \"npm run server\" \"npm run client\"",
    "netlify-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix frontend && npm run build --prefix frontend",
    "build": "npm i"
  },

  OLD PORT (FRONTEND PACKAGE.JSON):
    "proxy": "http://localhost:5009",
  NEXT PROXY:
    "proxy": "https://sharpgoalsbackend.onrender.com",
  
    // "proxy": "https://newsharpgoal.onrender.com",