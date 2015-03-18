var myStepDefinitionsWrapper = function () {
    var Given=When=Then=this.defineStep;
    this.World = require('../support/world').World;

    this.Given(/^启动浏览器$/, function (callback) {
        callback();
    });

    this.Given(/^导航到登陆页面$/, function (callback) {
        this.driver.get('http://cmstest.nfsq.com.cn:8388/xplatform/');
        callback();
    });
};
module.exports = myStepDefinitionsWrapper;
