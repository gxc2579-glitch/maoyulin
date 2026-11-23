import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
	// 头像
	// 图片路径支持三种格式：
	// 1. public 目录（以 "/" 开头，不优化）："/assets/images/avatar.webp"
	// 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间，推荐）："assets/images/avatar.webp"
	// 3. 远程 URL："https://example.com/avatar.jpg"
	avatar: "assets/images/maoyulin/avatar.webp",

	// 名字
	name: "猫羽霖",

	// 个人签名
	bio: "住在蓝色星光里的猫耳少女，喜欢牛奶、软枕头和写代码。",

	// 链接配置
	// 已经预装的图标集：fa7-brands，fa7-regular，fa7-solid，material-symbols，simple-icons
	// 访问https://icones.js.org/ 获取图标代码，
	// 如果想使用尚未包含相应的图标集，则需要安装它
	// `pnpm add @iconify-json/<icon-set-name>`
	// showName: true 时显示图标和名称，false 时只显示图标
	links: [
		{
			name: "Bilibili 图集",
			icon: "fa7-brands:bilibili",
			url: "https://www.bilibili.com/opus/686449259839488019",
			showName: false,
		},
		{
			name: "Pixiv",
			icon: "simple-icons:pixiv",
			url: "https://www.pixiv.net/tags/猫羽雫",
			showName: false,
		},
		{
			name: "萌娘百科",
			icon: "material-symbols:menu-book",
			url: "https://zh.moegirl.org.cn/猫羽雫",
			showName: false,
		},
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss/",
			showName: false,
		},
		{
			name: "Atom",
			icon: "fa7-solid:atom",
			url: "/atom/",
			showName: false,
		},
	],
};
