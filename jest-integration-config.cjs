const config = require('./jest.config.cjs')
config.testMatch = ['**/*.test.ts']
process.env.DB_URL = "mysql://root:Melsonbr@1@127.0.0.1:3306/finplan_database_test"
module.exports = config
