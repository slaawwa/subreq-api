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
    const filePath = `./backend/${req.url}.json`
    console.log(' - req.url FILE: >', req.method, `${req.url}.json`) // eslint-disable-line no-console
    // options.logFn(req, res)
    // res.emit('next')
    try {
      await delay(500)
      const file = await readFile(filePath)
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
