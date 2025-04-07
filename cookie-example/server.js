const http = require("http");
const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname);

http
	.createServer((req, res) => {
		const filePath = path.join(
			baseDir,
			req.url === "/" ? "index.html" : req.url
		);

		fs.readFile(filePath, (err, data) => {
			if (err) {
				res.writeHead(404, { "Content-Type": "text/plain" });
				res.end("File not found");
				return;
			}

			const ext = path.extname(filePath);
			const contentType = ext === ".js" ? "text/javascript" : "text/html";

			res.writeHead(200, { "Content-Type": contentType });
			res.end(data);
		});
	})
	.listen(8080, () => console.log("Server running at http://localhost:8080"));
