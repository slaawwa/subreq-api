import httpServer from 'http-server'

const fs = require('fs')
const util = require('util')

const readFile = util.promisify(fs.readFile)

const PORT = 8070

const server = httpServer.createServer({
  root: '/backend',
  // ext: 'json',
  before: [async (req, res) => {
    const filePath = `./backend/${req.url}.json`
    console.log(' - req.url FILE: >', req.method, `${req.url}.json`); // eslint-disable-line no-console
    // options.logFn(req, res);
    // res.emit('next');
    try {
      const file = await readFile(filePath);
      res.write(file);
    } catch (e) {
      res.write(`ERROR: ${e}`);
    }
    res.end();
  }],
})

server.listen(PORT, () => {
  console.log(' - START:20 >', PORT); // eslint-disable-line no-console
})
