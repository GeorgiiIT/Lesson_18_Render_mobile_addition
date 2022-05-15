let menu = [
	{
		tab: 'Платежі',
		title: 'Ну де ще ви бачили безкоштовні перекази?',
		description: 'Поповнення картки monobank — безкоштовно! А далі поповнюйте мобільний, сплачуйте комунальні та інші послуги без будь-якої комісії. Навіть за рахунок кредитних коштів! Переказуйте гроші своїм контактам за один клік — це простіше, ніж ви можете собі уявити',
		icon: 'payment'
	},
	{
		tab: 'Виписка',
		title: 'Усі ваші витрати на кінчиках пальців',
		description: 'Завжди хотіли перевірити, який відсоток ваших витрат припадає на нестримні веселощі? Тепер це просто. Користуйтеся карткою monobank, і ви завжди зможете бачити свої витрати в красивому й структурованому вигляді',
		icon: 'extract'
	},
	{
		tab: 'Налаштування картки',
		title: 'Забудьте все, що ви знали про банкінг',
		description: 'Установлюйте самостійно будь-які ліміти, зокрема для запиту PIN-коду, коли купуєте. Не можете знайти картку? Заблокуйте її на якийсь час, далі від гріха. Змінюйте ПІН просто в додатку, без походів до банкомата',
		icon: 'settings'
	}
];
const body = document.querySelector(`body`)

const wrapper = document.createElement(`div`);
wrapper.id = `wrapper`;
wrapper.className = `wrapper__content`

const tabsContent = document.createElement(`div`);
tabsContent.id = `tabsContent`;
tabsContent.className = `tabs__content`;

const tabsContentImgDiv = document.createElement(`div`);
tabsContentImgDiv.className = `tabs__content--img`;

const tabsContentImg = document.createElement(`img`);
tabsContentImg.style.width = `40px`;
tabsContentImg.style.height = `40px`;


tabsContentImgDiv.append(tabsContentImg);

const tabsContentTitle = document.createElement(`h2`);

const tabsContentDescription = document.createElement(`p`);

const renderTabContent = item => {
	tabsContentImg.src = `img/icons/${item.icon}.svg`;
	tabsContentImg.alt = item.tab;
	tabsContentImg.title = item.tab;

	tabsContentTitle.innerHTML = item.title;

	tabsContentDescription.innerHTML = item.description;
}

const tabsBtn = document.createElement(`div`);
tabsBtn.id = `tabsBtn`;
tabsBtn.className = `tabsBtn__content`;

let newBtn = []
menu.forEach((item, index) => {
	let btn = document.createElement(`button`);
	btn.innerHTML = item.tab;

	if (!index) renderTabContent(item);

tabsBtn.append(btn);
btn.classList = `button__content`;

newBtn.push(btn);

newBtn[0].classList.add(`active`);
})

newBtn.forEach((item,index) =>{
	item.addEventListener(`click`, function(){
		renderTabContent(menu[index]);

		newBtn.forEach(function(item){
			item.classList.remove(`active`);
		})
		item.classList.add(`active`);
	})
})

tabsContent.append(tabsContentImgDiv, tabsContentTitle, tabsContentDescription);

wrapper.append(tabsBtn, tabsContent);

body.append(wrapper);












// let menu = [
// 	{
// 		tab: 'Платежі',
// 		title: 'Ну де ще ви бачили безкоштовні перекази?',
// 		description: 'Поповнення картки monobank — безкоштовно! А далі поповнюйте мобільний, сплачуйте комунальні та інші послуги без будь-якої комісії. Навіть за рахунок кредитних коштів! Переказуйте гроші своїм контактам за один клік — це простіше, ніж ви можете собі уявити',
// 		icon: 'payment'
// 	},
// 	{
// 		tab: 'Виписка',
// 		title: 'Усі ваші витрати на кінчиках пальців',
// 		description: 'Завжди хотіли перевірити, який відсоток ваших витрат припадає на нестримні веселощі? Тепер це просто. Користуйтеся карткою monobank, і ви завжди зможете бачити свої витрати в красивому й структурованому вигляді',
// 		icon: 'extract'
// 	},
// 	{
// 		tab: 'Налаштування картки',
// 		title: 'Забудьте все, що ви знали про банкінг',
// 		description: 'Установлюйте самостійно будь-які ліміти, зокрема для запиту PIN-коду, коли купуєте. Не можете знайти картку? Заблокуйте її на якийсь час, далі від гріха. Змінюйте ПІН просто в додатку, без походів до банкомата',
// 		icon: 'settings'
// 	}
// ];
// const body = document.querySelector(`body`)

// const wrapper = document.createElement(`div`);
// wrapper.id = `wrapper`;
// wrapper.className = `wrapper__content`

// const tabsContent = document.createElement(`div`);
// tabsContent.id = `tabsContent`;
// tabsContent.className = `tabs__content`;

// const tabsContentImgDiv = document.createElement(`div`);
// tabsContentImgDiv.className = `tabs__content--img`;

// const tabsContentImg = document.createElement(`img`);
// tabsContentImg.style.width = `40px`;
// tabsContentImg.style.height = `40px`;


// tabsContentImgDiv.append(tabsContentImg);

// const tabsContentTitle = document.createElement(`h2`);

// const tabsContentDescription = document.createElement(`p`);

// const renderTabContent = item => {
// 	tabsContentImg.src = `img/icons/${item.icon}.svg`;
// 	tabsContentImg.alt = item.tab;
// 	tabsContentImg.title = item.tab;

// 	tabsContentTitle.innerHTML = item.title;

// 	tabsContentDescription.innerHTML = item.description;
// }

// const tabsBtn = document.createElement(`div`);
// tabsBtn.id = `tabsBtn`;
// tabsBtn.className = `tabsBtn__content`;



// // const renderButtonWork = () => {
// // 	const tabsBtnButton = document.querySelectorAll(`button`);
// // 	tabsBtnButton.forEach(function (item) {

// // 		item.addEventListener("click", function () {
// // 			let currentBtn = item;
// // 			if (!currentBtn.classList.contains(`active`))
// // 				tabsBtnButton.forEach(function (item) {
// // 					item.classList.remove(`active`)
// // 				})
// // 			currentBtn.classList.add(`active`)

// // 		});

// // 	});
// // }

// menu.forEach((item, index) => {
// 	let btn = document.createElement(`button`);
// 	btn.innerHTML = item.tab;

// 	if (!index) renderTabContent(item);

// 	btn.addEventListener(`click`, () => {
// 		renderTabContent(item);
// 		// renderButtonWork(item);


// 		const tabsBtnButton = document.querySelectorAll(`button`);

		
// 		tabsBtnButton.forEach(item =>{
// 				let currentBtn = item;
// 				if (!currentBtn.classList.contains(`active`))
// 					tabsBtnButton.forEach(function (item) {
// 						item.classList.remove(`active`)
// 					})
// 				currentBtn.classList.add(`active`)


// 		});
// 	});
// 	tabsBtn.append(btn);
// 	btn.classList = `button__content`;
// })

// tabsContent.append(tabsContentImgDiv, tabsContentTitle, tabsContentDescription);

// wrapper.append(tabsBtn, tabsContent);

// body.append(wrapper);














