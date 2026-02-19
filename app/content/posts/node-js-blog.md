---
postname: "node-js-blog"
title: "Getting Started with Node.js"
excerpt: "A simple blog to explain about Node"
createdAt: "2026-02-18"
published: true
---

## What is Node.js?

Node.js is a JavaScript runtime built on Chrome's V8 engine that allows you to run JavaScript outside the browser. It's designed for building fast, scalable network applications and is particularly useful for server-side development.

## How to Use Node.js

1. **Install Node.js** - Download from [nodejs.org](https://nodejs.org)
2. **Create a project directory** - `mkdir my-project && cd my-project`
3. **Initialize npm** - `npm init -y`
4. **Install packages** - `npm install package-name`
5. **Run your code** - `node app.js`

## Simple Project Example

Create a basic web server:

```javascript
// app.js
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, Node.js!\n');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
```

Run it:
```bash
node app.js
```

Visit `http://localhost:3000/` in your browser.

## Next Steps

- Explore frameworks like **Express.js** for building APIs
- Learn about **npm packages** and dependencies
- Study **async/await** and Promises for asynchronous programming
