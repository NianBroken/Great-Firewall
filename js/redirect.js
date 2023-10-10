// redirect.js

// 定义跳转规则对象
var redirectRules = {
	"https://nianbroken.github.io/Great-Firewall/test1": "https://test1.com",
	"https://nianbroken.github.io/Great-Firewall/test2": "https://test2.com",
	// 添加其他测试用例的规则
	"https://nianbroken.github.io/Great-Firewall/test6": "https://test6.com",
};

window.onload = function () {
	var currentURL = window.location.href;
	var redirectURL = redirectRules[currentURL] || currentURL;

	if (redirectURL !== currentURL) {
		// 执行跳转
		window.open(redirectURL, "_blank");
	}
};
