const express = require('express')

const app = express()

app.use(express.static('app'))

app.get('/api/data', (req, res) => {
  res.json([
    { id: 1 },
    { id: 2 },
  ])
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  process.stdout.write(`> Ready on http://localhost:${port}\n`)
})
