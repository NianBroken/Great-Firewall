// 获取当前网址的路径
var currentPath = window.location.pathname;

// 创建一个对象来映射路径到目标URL
var redirectMap = {
	"/test1": "https://www.test1.com/",
	"/test2": "https://www.test2.com/",
	// 添加其他路径和目标URL的映射
	"/test3": "https://www.test3.com/",
	"/test4": "https://www.test4.com/",
	"/test5": "https://www.test5.com/",
	"/test6": "https://www.test6.com/",
	"/test7": "https://www.test7.com/",
	"/test8": "https://www.test8.com/",
	"/test9": "https://www.test9.com/",
	"/test10": "https://www.test10.com/",
};

// 检查当前路径是否在映射中
if (redirectMap[currentPath]) {
	// 执行跳转到映射的URL，在新标签中打开
	window.open(redirectMap[currentPath], "_blank");
}
