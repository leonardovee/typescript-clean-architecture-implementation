export default {
  port: process.env.PORT ?? 5050,
  mongoUrl: process.env.MONGO_URL ?? 'mongodb://localhost:27017/typescript-clean-architecture-implementation',
  jwtSecret: process.env.JWT_SECRET ?? 'tj670@!ka'
}
