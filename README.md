# **Basic Informational Site**

## **Description**

A simple informational website with three pages: a home page, an about page and a contact page. The site also includes a custom 404 page for requests to unknown URLs.

Built using Node.js without a web framework. The server handles incoming HTTP requests, determines which page to serve based on the requested URL, reads the corresponding HTML file and sends it back to the browser.

Built as part of The Odin Project's [curriculum](https://www.theodinproject.com/lessons/nodejs-basic-informational-site).

## Built With
- Node.js
- JavaScript (ES Modules)
- HTML
- Node.js built-in HTTP, File System and Path modules

## Run Locally

1. Clone the repository:

```bash
git clone <repository-url>
cd basic-informational-site
```

2. Start the server:

```bash
node index.js
```

3. Open `http://127.0.0.1:8080` in your browser.

## What I Learned

- How to create a basic HTTP server using Node.js and the built-in `http` module
- How to handle incoming HTTP requests and access the requested URL through `req.url`
- How to use conditional logic and switch statements to map URLs to specific HTML files
- How to read files asynchronously using the File System module (`node:fs`) and `readFile()`
- How to construct absolute file paths using the Path module (`node:path`), `path.join()` and `process.cwd()`
- How to handle errors when reading files and use early returns to prevent further execution
- How to send HTTP responses using `res.end()` and set response status codes
- The difference between HTTP status codes such as 200, 404 and 500
- How to set response headers using `res.setHeader()`, including the `Content-Type` header
- How a browser and a server communicate through the HTTP request-response cycle