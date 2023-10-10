// 配置信息
var redirectConfig = {
	"/Great-Firewall/test1/": "https://test1.com",
	"/Great-Firewall/test2/": "https://test2.com",
	// 添加更多的路径和对应的目标URL
};

// 获取当前访问的URL
var currentURL = window.location.pathname;

// 检查是否有匹配的路径，并执行跳转
for (var path in redirectConfig) {
	if (currentURL.includes(path)) {
		var targetURL = redirectConfig[path];
		window.open(targetURL, "_blank");
		break; // 找到匹配的路径后停止检查
	}
}
