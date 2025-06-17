export const MENU = [
	{ title: 'О компании', href: '/about', hiddenOnMobile: true },
	{ title: 'Продукция', href: '/products', hiddenOnMobile: true },
	{ title: 'Производство', href: '/production', hiddenOnMobile: true },
	{ title: 'Биохакинг', href: '/biohacking', hiddenOnMobile: true },
	{
		title: 'Каталог',
		href: '/',
		submenu: [
			{ title: 'О компании', href: '/about' },
			{ title: 'Продукция', href: '/products' },
			{ title: 'Производство', href: '/production' },
			{ title: 'Биохакинг', href: '/biohacking' }
		],
	},
	{
		title: 'О компании',
		href: '/about',
		submenu: [
			{ title: 'О компании', href: '/about' },
			{ title: 'Продукция', href: '/products' },
			{ title: 'Производство', href: '/production' },
			{ title: 'Биохакинг', href: '/biohacking' }
		],
	},
	{ title: 'Пункты выдачи', href: '/pickup', },
	{ title: 'Новости', href: '/news', },
	{ title: 'Политика конфиденциальности', href: '/privacy', },
	{ title: 'Контакты', href: '/contacts', },
	{ title: 'Реквизиты', href: '/details', },
	{ title: 'Условия оплаты и доставки', href: '/shipping', },
	{ title: 'Оферта', href: '/offer', }
]
