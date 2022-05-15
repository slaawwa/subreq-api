import { createServer } from 'http-server'
import { readFile as readFileFS } from 'fs'
import { promisify } from 'util'

const PORT = 8070

const readFile = promisify(readFileFS)

const delay = time => new Promise(resolve => setTimeout(resolve, time))

const server = createServer({
  root: '/backend',
  // ext: 'json',
  before: [async (req, res) => {
    let filePath = `./backend/${req.url}.json`
    console.log(res.method);
    if (res.method === 'DELETE' && /\/topic\//.test(req.url)) {
      filePath = `./backend/api/topicDeleteID.json`
    }
    console.log(' - req.url FILE: >', req.method, `${req.url}.json`) // eslint-disable-line no-console
    // options.logFn(req, res)
    // res.emit('next')
    try {
      await delay(500)
      const file = await readFile(filePath)
      res.setHeader('Content-Type', 'application/json');
      if (/Error/.test(req.url)) {
        // res.writeHead(1001)
        const jsonContent = JSON.parse(file)
        res.writeHead(400, `${jsonContent.status} ${jsonContent.message}`);
      }
      res.write(file)
    } catch (e) {
      res.write(`ERROR: ${e}`)
    }
    res.end()
  }],
})

server.listen(PORT, () => {
  console.log(' - START:20 >', PORT) // eslint-disable-line no-console
})
