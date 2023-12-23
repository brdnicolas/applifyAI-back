require('module-alias').addAlias('@', __dirname)

import { createApp } from './app'
import { startServer } from './server'

const app = createApp()
startServer(app)
