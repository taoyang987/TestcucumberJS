var fs = require('fs');
var webdriver = require("selenium-webdriver");

var buildChromeDriver = function() {
    return new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();
};

var driver = buildChromeDriver();

var getDriver = function() {
    return driver;
};

var World = function World(callback) {
    var defaultTimeout=2000;
    var screanshotPath = "screenshots";

    this.webdriver = webdriver;
    this.driver = driver;

    if(!fs.existsSync(screanshotPath))
    {
        fs.mkdirSync(screanshotPath);
    }

    //noinspection JSUnusedGlobalSymbols
    this.waitFor = function (locator, timeout) {
        var waitTimeout = timeout || defaultTimeout;
        return driver.wait(function () {
            return driver.isElementPresent({css: locator});
        }, waitTimeout);
    };
    callback();
};

//module.exports = World;
//module.exports = getDriver();
module.exports.World = World;
module.exports.getDriver = getDriver;
