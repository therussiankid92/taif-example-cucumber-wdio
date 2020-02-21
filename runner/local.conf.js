const path = require('path')

/** this is the configuration file needed to run wdio **/

const frameworkImplementationLocation = path.join('./','');
const frameworkGeneratedFilesLocation = path.join(frameworkImplementationLocation,'target')

exports.config = {
  port: 9515,
  path: '/',
  maxInstances: 1,
  specs: [path.join(frameworkImplementationLocation, 'features/*.feature')],
  capabilities: [
    {
      browserName: 'chrome',
      "goog:chromeOptions": {

        args: ['headless', 'disable-gpu'],

      },
    }
  ],
  logLevel: 'trace',
  outputDir: path.join(frameworkGeneratedFilesLocation, 'test-report/output'),
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'cucumber',
  reporters: ['spec'],
  cucumberOpts: {
    requireModule: ['@babel/register'],
    require: [path.join(frameworkImplementationLocation, 'steps/Definitions.steps.js')],
    backtrace: false,
    compiler: [],
    dryRun: false,
    failFast: false,
    format: ['pretty'],
    colors: true,
    snippets: true,
    source: true,
    profile: [],
    strict: false,
    tags: [],
    timeout: 60000,
    ignoreUndefinedDefinitions: false
  },
  services: ['intercept', 'chromedriver'],
  beforeSession: function beforeSession(config, capabilities, specs) {},
  before() {
    browser.reloadSession()
    browser.setWindowSize(1920, 1080)
  }
}
