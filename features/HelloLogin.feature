Feature: 登陆

  Scenario: 正常登陆
    Given 启动浏览器
    And 导航到登陆页面
    When 输入账号密码登陆
    Then  跳转到了首页