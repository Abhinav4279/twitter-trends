const cronJob = require('./lib/cronjob')
const http = require('http')
const fs = require('fs/promises')

cronJob();

const port = process.env.PORT || 3000

const server = http.createServer(async (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  const content = await fs.readFile('./db.json');
  res.end(content)
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})