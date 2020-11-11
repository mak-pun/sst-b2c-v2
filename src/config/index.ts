import _ from 'lodash'
import globalConfig from './config.global.json'

var envConfig; // let doesn't seem to work here
if (process.env.NODE_ENV === 'development') {
    envConfig = require('./config.development.json')
} else {
    envConfig = require('./config.production.json')
}

export default _.merge(globalConfig, envConfig)