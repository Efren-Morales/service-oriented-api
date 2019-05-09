import micro from 'micro'
import Routes from './routes'

const PORT = process.env.PORT || 3000

const server = micro(Routes)

server.listen(PORT, () => console.log(`Server started on port ${PORT}`))