const config = require('./jest.config.js')
config.testMatch = ['**/*.test.ts']
process.env.DB_URL = "mysql://root:@localhost:3306/rk_boilerplate_test"
module.exports = config
