//TODO: READ: GILSON TENTA ESCREVER O MINIMO DE CODIGO POSSIVEL.

import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()

app.get('/', () => {
	return 'Hello World'
})

app.listen({ port: 8080 }).then(() => {
	console.log('HTTP Server running!')
})
