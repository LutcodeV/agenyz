// MASK
const inputsTypeTel = document.querySelectorAll('input[type="tel"]');
if (inputsTypeTel.length > 0) {
	inputsTypeTel.forEach((input) => {
		new Inputmask({
			mask: "+7 999 999 99 99",
			placeholder: "+7 XXX XXX XX XX",
		}).mask(input);
	});
}

// DRY: SPRITE LOADER
fetch("../assets/img/icons-sprite.svg")
	.then((res) => res.text())
	.then((svg) => {
		document.getElementById("svg-sprite").innerHTML = svg;
	});

// BODY SCROLL
const body = document.querySelector("body");
const bodyScrollLock = () => {
	body.classList.add("scroll-lock");
};
const bodyScrollUnlock = () => {
	body.classList.remove("scroll-lock");
};

// HEADER
const headerBurger = document.querySelector(".js-header-burger");
const headerNav = document.querySelector(".js-header-nav");
if (headerBurger && headerNav) {
	headerBurger.addEventListener("click", () => {
		headerBurger.classList.toggle("is-active");
		headerNav.classList.toggle("is-open");
		headerBurger.setAttribute(
			"aria-expanded",
			headerBurger.classList.contains("is-active") ? "true" : "false"
		);
	});
}

const navExpandableLinks = document.querySelectorAll(".js-nav-expandable-link");
if (navExpandableLinks.length) {
	const closeExpandableLinks = (item) => {
		item.classList.remove("is-open");
		item
			.querySelector(".header-nav__list-item-button")
			.setAttribute("aria-expanded", "false");
	};
	const openExpandableLink = (link, button) => {
		navExpandableLinks.forEach((item) => {
			if (item !== link) closeExpandableLinks(item);
		});
		link.classList.toggle("is-open");
		button.setAttribute(
			"aria-expanded",
			link.classList.contains("is-open") ? "true" : "false"
		);
	};

	navExpandableLinks.forEach((link) => {
		const button = link.querySelector(".header-nav__list-item-button");
		button.addEventListener("click", () => openExpandableLink(link, button));
	});
}

// SWIPERS
const heroSwiper = new Swiper(".js-hero-swiper", {
	slidesPerView: "auto",
	spaceBetween: 10,
	pagination: {
		el: ".js-hero-swiper-pagination",
	},
});
const resultSwiper = new Swiper(".js-result-swiper", {
	slidesPerView: "auto",
	spaceBetween: 10,
	pagination: {
		el: ".js-result-swiper-pagination",
	},
});
const technologiesSwiper = new Swiper(".js-technologies-swiper", {
	slidesPerView: "auto",
	spaceBetween: 10,
	pagination: {
		el: ".js-technologies-swiper-pagination",
	},
});
const partnersSwiper = new Swiper(".js-partners-swiper", {
	slidesPerView: "auto",
	spaceBetween: 10,
	pagination: {
		el: ".js-partners-swiper-pagination",
	},
});
const benefitsSwiper = new Swiper(".js-benefits-swiper", {
	slidesPerView: 1,
	spaceBetween: 10,
	pagination: {
		el: ".js-benefits-swiper-pagination",
	},
});
const baseBiohackSwiper = new Swiper(".js-base-biohack-swiper", {
	slidesPerView: 1,
	spaceBetween: 10,
	pagination: {
		el: ".js-base-biohack-swiper-pagination",
	},
});
const biohackProductsColumns = document.querySelectorAll(
	".biohack-products__column"
);
if (biohackProductsColumns.length) {
	biohackProductsColumns.forEach((item) => {
		const swiper = new Swiper(
			item.querySelector(".js-biohack-products-swiper"),
			{
				slidesPerView: 1,
				spaceBetween: 10,
				pagination: {
					el: item.querySelector(".js-biohack-products-swiper-pagination"),
				},
			}
		);
	});
}

// HISTORY-SWITCHER
const historySwitchers = document.querySelectorAll("[data-history-switcher]");
const historyPages = document.querySelectorAll(".history-page");

if (historySwitchers.length) {
	historySwitchers.forEach((switcher) => {
		const year = switcher.getAttribute("data-history-switcher");
		const historyPage = document.querySelector(`[data-history-year="${year}"]`);
		if (!historyPage) return;

		switcher.addEventListener("click", () => {
			historySwitchers.forEach((item) => {
				item.setAttribute("aria-checked", "false");
			});
			switcher.setAttribute("aria-checked", "true");

			historyPages.forEach((page) => {
				page.setAttribute("aria-hidden", "true");
				page.classList.add("hidden");
			});
			historyPage.setAttribute("aria-hidden", "false");
			// page.classList.remove('hidden');
		});
	});
}

// CONCEPT-MODALS
const conceptModalButtons = document.querySelectorAll("[data-concept-modal]");
if (conceptModalButtons.length) {
	const modals = document.querySelectorAll("[data-concept]");
	modals.forEach((item) => {
		const modalClose = item.querySelector(".concept-modal__close");
		modalClose.addEventListener("click", () => {
			item.setAttribute("aria-hidden", "true");
			bodyScrollUnlock();
		});
	});

	conceptModalButtons.forEach((button) => {
		const modalData = button.getAttribute("data-concept-modal");
		const modal = document.querySelector(`[data-concept="${modalData}"]`);

		button.addEventListener("click", () => {
			modals.forEach((item) => {
				if (item !== modal) item.setAttribute("aria-hidden", "true");
			});
			conceptModalButtons.forEach((item) => {
				if (item !== button) item.setAttribute("aria-expanded", "false");
			});
			if (modal.getAttribute("aria-hidden") === "false") {
				bodyScrollUnlock();
				button.setAttribute("aria-expanded", "false");
				modal.setAttribute("aria-hidden", "true");
			} else {
				button.setAttribute("aria-expanded", "true");
				modal.setAttribute("aria-hidden", "false");
				if (window.innerWidth < 1320) bodyScrollLock();
			}
		});
	});
}

// PRODUCTION-TECHNOLOGIES-MODALS
const productionModalButtons = document.querySelectorAll(
	"[data-production-technologies-modal]"
);
if (productionModalButtons.length) {
	const modals = document.querySelectorAll("[data-production-technologies]");
	modals.forEach((item) => {
		const modalClose = item.querySelector(
			".production-technologies-modal__close"
		);
		modalClose.addEventListener("click", () => {
			item.setAttribute("aria-hidden", "true");
			bodyScrollUnlock();
		});
	});

	productionModalButtons.forEach((button) => {
		const modalData = button.getAttribute("data-production-technologies-modal");
		const modal = document.querySelector(
			`[data-production-technologies="${modalData}"]`
		);

		button.addEventListener("click", () => {
			modals.forEach((item) => {
				if (item !== modal) item.setAttribute("aria-hidden", "true");
			});
			productionModalButtons.forEach((item) => {
				if (item !== button) item.setAttribute("aria-expanded", "false");
			});
			if (modal.getAttribute("aria-hidden") === "false") {
				bodyScrollUnlock();
				button.setAttribute("aria-expanded", "false");
				modal.setAttribute("aria-hidden", "true");
			} else {
				button.setAttribute("aria-expanded", "true");
				modal.setAttribute("aria-hidden", "false");
				if (window.innerWidth < 1320) bodyScrollLock();
			}
		});
		if (window.innerWidth >= 1320) {
			productionModalButtons[0].click();
		}
	});
}

// PARTNER-PRINCIPLES
const partnerPrinciples = document.querySelectorAll(".partner-principles");
if (partnerPrinciples.length) {
	partnerPrinciples.forEach((item) => {
		const button = item.querySelector(".partner-principles__button");
		const wrapperContent = item.querySelector(
			".partner-principles__wrapper-content"
		);
		button.addEventListener("click", () => {
			const state = button.getAttribute("aria-expanded") === "true";
			button.setAttribute("aria-expanded", state ? "false" : "true");
			wrapperContent.setAttribute("aria-hidden", state ? "true" : "false");
		});
	});
}

// HEADER-LANGS
const headerLangs = document.querySelectorAll(".js-header-lang");
if (headerLangs.length) {
	headerLangs.forEach((item) => {
		const button = item.querySelector("button.header-lang__button");
		button.addEventListener("click", () => {
			item.classList.toggle("is-active");
		});
	});
}

// BIOHACK-PRODUCTS
const biohackProductsCategories = document.querySelectorAll(
	".biohack-products__category"
);
const biohackProductsCategoriesPlaceholed = document.querySelector(
	".biohack-products__categories-placeholder"
);
if (biohackProductsCategories.length) {
	biohackProductsCategories.forEach((item) => {
		const biohackProductsColumns = document.querySelectorAll(
			".biohack-products__column"
		);
		const category = item.getAttribute("data-category-handler");
		item.addEventListener("click", () => {
			if (item.getAttribute("aria-expanded") === "true") {
				biohackProductsCategoriesPlaceholed.classList.toggle("is-active");
				return;
			}
			biohackProductsColumns.forEach((column) => {
				column.setAttribute("aria-hidden", "true");
			});
			biohackProductsCategories.forEach((category) => {
				category.setAttribute("aria-expanded", "false");
			});
			item.setAttribute("aria-expanded", "true");
			document
				.querySelector(`[data-category="${category}"]`)
				.setAttribute("aria-hidden", "false");
			biohackProductsCategoriesPlaceholed.classList.remove("is-active");
		});
	});
}

// HISTORY-ANIMATION

function debounce(func, delay) {
	let timeoutId;
	return function (...args) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			func.apply(this, args);
		}, delay);
	};
}

function throttle(func, delay) {
	let lastCall = 0;
	return function (...args) {
		const now = Date.now();
		if (now - lastCall >= delay) {
			func.apply(this, args);
			lastCall = now;
		}
	};
}

const historyBlock = document.querySelector(".history");
const historyScrollerBlock = document.querySelector(".history-page__scroller");
const historyWrapperBlock = document.querySelector(".history-page__wrapper");

if (historyBlock && window.innerWidth >= 1320) {
	historySwitchers.forEach((item, index) => {
		item.addEventListener("click", () => {
			const year = item.getAttribute("data-history-switcher");
			const historyPage = document.querySelector(
				`[data-history-year="${year}"]`
			);

			if (historyPage && historyWrapperBlock) {
				const wrapperLeft = historyWrapperBlock.getBoundingClientRect().left;
				const pageLeft = historyPage.getBoundingClientRect().left;
				const scrollOffset =
					pageLeft - wrapperLeft + historyWrapperBlock.scrollLeft;

				historyWrapperBlock.scrollTo({
					left: scrollOffset,
					behavior: "smooth",
				});
			}
		});
		if (index === historySwitchers.length - 1) item.click();
	});

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const year = entry.target.getAttribute("data-history-year");
					historySwitchers.forEach((switcher) => {
						const isMatch =
							switcher.getAttribute("data-history-switcher") === year;
						switcher.setAttribute("aria-checked", isMatch ? "true" : "false");
					});
				}
			});
		},
		{
			root: historyWrapperBlock,
			threshold: 0.6, // активируется, если хотя бы 60% блока в зоне видимости
		}
	);

	document
		.querySelectorAll("[data-history-year]")
		.forEach((el) => observer.observe(el));
}

// BIOHACK-MODALS
const biohackModalButton = document.querySelectorAll(
	".biohack-person-card[data-card-modal]"
);

if (biohackModalButton.length) {
	biohackModalButton.forEach((button) => {
		const modalData = button.dataset.cardModal;
		const modal = document.querySelector(
			`.biohack-person-card-modal[data-card-modal="${modalData}"]`
		);
		const modalClose = modal.querySelector(
			".biohack-person-card-modal__button"
		);

		modalClose.addEventListener("click", () => {
			modal.setAttribute("aria-hidden", "true");
		});

		button.addEventListener("click", () => {
			modal.setAttribute("aria-hidden", "false");
		});
	});
}
