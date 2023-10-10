// 定义重定向规则
const redirects = {
	"/Soul-cloud": "https://www.linghunyun.com/",
	"/test2": "https://teacat.cloud",
};

// 检查当前访问的路径
const currentPath = window.location.pathname;

// 如果路径在重定向规则中，则进行重定向
if (redirects[currentPath]) {
	window.location.href = redirects[currentPath];
}
