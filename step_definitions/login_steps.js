var myStepDefinitionsWrapper = function () {
    this.Given(/^启动浏览器$/, function (callback) {
        callback.pending();
    });

};
module.exports = myStepDefinitionsWrapper;