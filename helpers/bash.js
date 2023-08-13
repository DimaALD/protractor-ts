const { exec } = require("shelljs");

function killChromedriver() {
  exec("taskkill /IM chromedriver* /F /T", { silent: true });
}

function killGeckoDriver() {
  exec("taskkill /F /IM geckodriver.exe /T")
}

module.exports = {
  killChromedriver,
  killGeckoDriver
}
