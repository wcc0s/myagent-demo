// myagent demo config
module.exports = {
  port: 3000,
  host: 'localhost',
  debug: false,
  database: {
    url: 'postgres://localhost:5432/myagent_demo',
    pool: 5
  },
  api: {
    rateLimit: 100,
    timeout: 30000
  }
}