function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
   if (support == true) {
      document.querySelector('body').classList.add('webp');
   }
});


const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}

$(document).ready(function() {
	$('.image-right1').click(function (event) {
		$('.bridge-content1').addClass('is-active');
	});
});

$(document).ready(function() {
	$('.image-left2').click(function (event) {
      $('.bridge-content1, .bridge-content2, .bridge-content3, .bridge-content4, .bridge-content5, .bridge-content6, .bridge-content7, .bridge-content8, .bridge-content9, .bridge-content10').removeClass('is-active');
		$('.bridge-content2').addClass('is-active');
	});
});

$(document).ready(function() {
	$('.image-right3').click(function (event) {
      $('.bridge-content1, .bridge-content2, .bridge-content3, .bridge-content4, .bridge-content5, .bridge-content6, .bridge-content7, .bridge-content8, .bridge-content9, .bridge-content10').removeClass('is-active');
		$('.bridge-content3').addClass('is-active');
	});
});

$(document).ready(function() {
	$('.image-left4').click(function (event) {
      $('.bridge-content1, .bridge-content2, .bridge-content3, .bridge-content4, .bridge-content5, .bridge-content6, .bridge-content7, .bridge-content8, .bridge-content9, .bridge-content10').removeClass('is-active');
		$('.bridge-content4').addClass('is-active');
	});
});

$(document).ready(function() {
	$('.image-right5').click(function (event) {
      $('.bridge-content1, .bridge-content2, .bridge-content3, .bridge-content4, .bridge-content5, .bridge-content6, .bridge-content7, .bridge-content8, .bridge-content9, .bridge-content10').removeClass('is-active');
		$('.bridge-content5').addClass('is-active');
	});
});

$(document).ready(function() {
	$('.image-left6').click(function (event) {
      $('.bridge-content1, .bridge-content2, .bridge-content3, .bridge-content4, .bridge-content5, .bridge-content6, .bridge-content7, .bridge-content8, .bridge-content9, .bridge-content10').removeClass('is-active');
		$('.bridge-content6').addClass('is-active');
	});
});

$(document).ready(function() {
	$('.image-right7').click(function (event) {
      $('.bridge-content1, .bridge-content2, .bridge-content3, .bridge-content4, .bridge-content5, .bridge-content6, .bridge-content7, .bridge-content8, .bridge-content9, .bridge-content10').removeClass('is-active');
		$('.bridge-content7').addClass('is-active');
	});
});

$(document).ready(function() {
	$('.image-left8').click(function (event) {
      $('.bridge-content1, .bridge-content2, .bridge-content3, .bridge-content4, .bridge-content5, .bridge-content6, .bridge-content7, .bridge-content8, .bridge-content9, .bridge-content10').removeClass('is-active');
		$('.bridge-content8').addClass('is-active');
	});
});

$(document).ready(function() {
	$('.image-right9').click(function (event) {
      $('.bridge-content1, .bridge-content2, .bridge-content3, .bridge-content4, .bridge-content5, .bridge-content6, .bridge-content7, .bridge-content8, .bridge-content9, .bridge-content10').removeClass('is-active');
		$('.bridge-content9').addClass('is-active');
	});
});

$(document).ready(function() {
	$('.image-left10').click(function (event) {
      $('.bridge-content1, .bridge-content2, .bridge-content3, .bridge-content4, .bridge-content5, .bridge-content6, .bridge-content7, .bridge-content8, .bridge-content9, .bridge-content10').removeClass('is-active');
		$('.bridge-content10').addClass('is-active');
	});
});

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		$('.bridge-content1, .bridge-content2, .bridge-content3, .bridge-content4, .bridge-content5, .bridge-content6, .bridge-content7, .bridge-content8, .bridge-content9, .bridge-content10').removeClass('is-active');
	}
});

const popupCloseIcon = document.querySelectorAll('.close-bridge');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			$('.bridge-content1, .bridge-content2, .bridge-content3, .bridge-content4, .bridge-content5, .bridge-content6, .bridge-content7, .bridge-content8, .bridge-content9, .bridge-content10').removeClass('is-active');
			e.preventDefault();
		});
	}
}

function changeItem1() {
	document.getElementById('fishki').style.display = 'block';
}// функция, которая сработает при наведении.
 //она означает - выбрать элемент к Id у которого надо что-то изменить.
 // когда в скобки где написано one-two добавите Id своего элемента
function rechangeItem1() {
	document.getElementById('fishki').style.display = 'none';
}// тут всё также. но наоборот. процесс происходящий про отводе курсора.

/*
function changeItem2() {
	document.getElementById('quote2').style.left = "50vw";
}
function rechangeItem2() {
	document.getElementById('quote2').style.left = "50vw";
}
*/

const select = document.querySelector('select');
const allLang = ['ru', 'ua'];
const langArr = {
	"1": {
		"ru": "Приглашения на свадьбу",
		"ua": "Запрошення на весілля",
	},
	"2": {
		"ru": "Свадьба безусловно считается одним из важнейших событий в жизни каждого человека, включающем в себя особые традиции и обряды, хранившиеся и передававшиеся из поколения в поколение в каждой семье.",
		"ua": "Весілля безумовно вважається однією з найважливіших подій у житті кожної людини. Воно включає в себе особливі традиції і обряди, які зберігалися і передавалися з покоління в покоління в кожній родині.",
	},
	"3": {
		"ru": "К соблюдению свадебных традиций относились очень серьёзно, считалось, что прочность семейных отношений обязательно будет зависеть от того, как прошло венчание, от высоты подъёма свадебного каравая и от исполнения многих других обязательных атрибутов.",
		"ua": "До дотримання весільних традицій ставилися дуже серйозно, вважалося, що міцність сімейних відносин обов'язково буде залежати від того, як пройшло вінчання, від висоти підйому весільної паляниці та від виконання багатьох інших обов'язкових атрибутів.",
	},
	"4": {
		"ru": "Многие девушки с самых юных лет представляют каждую мелочь в своем будущем торжестве. Но когда наступает их час, дата свадьбы определена, неизбежно появляются панические настроения: как всё успеть?!!",
		"ua": "Багато дівчат з малих літ представляють кожну дрібницю в своєму майбутньому весіллі. Але коли настає їхній час, дата весілля визначена, неминуче з'являються панічні настрої: як все встигнути?!!",
	},
	"5": {
		"ru": "Кого пригласить, где отметить, в каком стиле провести, каким организаторам, ведущим, музыкантам, оформителям, фотографам отдать предпочтение, какое платье купить и какую машину выбрать для молодых?",
		"ua": "Кого запросити, де відгуляти, в якому стилі провести, яким організаторам, ведучим, музикантам, оформлювачам, фотографам віддати перевагу, яку сукню купити і яку машину вибрати для молодих?",
	},
	"6": {
		"ru": "Неизменной частью предсвадебной суеты являются пригласительные на свадьбу. Согласно традициям, текст свадебных приглашений составляют родители невесты, которые имеют честь просить о присутствии на свадьбе их дочери с её избранником.",
		"ua": "Незмінною частиною передвесільної метушні є запрошення на весілля. Згідно з традиціями, текст весільних запрошень складають батьки нареченої, які мають гідність просити про присутність на весіллі їх доньки з її обранцем.",
	},
	"7": {
		"ru": "В современном варианте текст пригласительных исходит от жениха и невесты. Пригласительные следует отправлять за 8 недель до намеченного торжества или не позднее, чем за две недели до свадьбы.",
		"ua": "У сучасному варіанті текст запрошень складають молоді. Запрошення слід відправляти за 8 тижнів до наміченої події або не пізніше, ніж за два тижні до весілля.",
	},
	"8": {
		"ru": "В нашей стране традиция рассылки свадебных приглашений появилась в девятнадцатом веке. Тогда жизненный уклад был строго регламентирован, и свадебный распорядок лишь стал тому подтверждением. В обязательном порядке письма со свадебными пригласительными рассылались всем родственникам и знакомым. Печатались они на изящной белой, розовой или салатовой бумаге, по краям украшались каймой золотого цвета. Отправляли свадебные пригласительные в закрытых конвертах.",
		"ua": "У нашій країні традиція розсилки весільних запрошень з'явилася в дев'ятнадцятому столітті. Тоді життєвий розклад був суворо регламентований, і весільний розпорядок лише став тому підтвердженням. Листи з весільними запрошеннями розсилалися обов'язково  усім родичам і знайомим. Друкувалися вони на витонченому білому, рожевому або салатовому папері, по боках прикрашалися каймою золотого кольору. Відправляли весільні запрошення в закритих конвертах.",
	},
	"9": {
		"ru": "В последние годы существенно изменился подход к внешнему виду свадебных пригласительных. Молодожёны всё чаще устраивают тематические свадьбы, которые, в свою очередь, диктуют новую моду на визуальные решения свадебных пригласительных.",
		"ua": "В останні роки істотно змінився підхід до зовнішнього вигляду весільних запрошень. Молодята все частіше влаштовують тематичні весілля, які, в свою чергу, диктують нову моду на візуальні рішення весільних запрошень.",
	},
	"10": {
		"ru": "Тема свадьбы, стиль, цветовая гамма декора современных свадеб напрямую влияют на внешний вид свадебных приглашений, которые в наши дни выполняют не только информационную функцию, но и подчеркивают оригинальность и чувство стиля молодожёнов. Такие свадебные пригласительные зачастую делают сами невесты, либо их дизайн заказывают у специализированных компаний.",
		"ua": "Тема весілля, стиль, кольорова гамма декору сучасних весіль безпосередньо впливають на зовнішній вигляд весільних запрошень, які в наші дні виконують не тільки інформаційну функцію, а й підкреслюють оригінальність і почуття стилю молодят. Такі весільні запрошення часто роблять самі наречені, або їх дизайн замовляють у спеціалізованих компаній.",
	},
	"11": {
		"ru": "Отличным решением в наш век повсеместного использования интернет-гаджетов будет создание собственного сайта-приглашения. Отправив ссылку на такой сайт каждому желанному гостю по электронной почте, смс, вайберу или любому другому интернет-мессенджеру, молодожены могут быть уверены в скорости доставки, получат возможность обратной связи с приглашенными. Ну а гости непременно будут приятно удивлены оригинальным и современным подходом молодых к этой традиции.",
		"ua": "Відмінним рішенням в наш час повсюдного використання інтернет-гаджетів буде створення власного сайту-запрошення. Відправивши посилання на такий сайт кожному бажаному гостю по електронній пошті, смс, вайберу або за допомогою будь-якого іншого інтернет-месенджеру, молодята можуть бути впевнені в швидкості доставки, отримають можливість зворотного зв'язку з запрошеними. Ну а гості неодмінно будуть приємно здивовані оригінальним і сучасним підходом молодих до цієї традиції.",
	},
	"12": {
		"ru": "Ниже представлены несколько вариантов таких сайтов-пригласительных, которые могут быть персонализированы под любого заказчика в кратчайшие сроки. Наиболее ярко работы можно оценить на большом экране, под мобильные устройства сайты также адаптированы.",
		"ua": "Нижче представлені кілька варіантів таких сайтів-запрошень, які можуть бути персоналізовані під будь-якого замовника в найкоротші терміни. Найбільш яскраво роботи можна оцінити на великому екрані, під мобільні пристрої сайти також адаптовані.",
	},
	"13": {
		"ru": "Вариант № 1. На сайте представлено много скрытых анимаций, что можно рассматривать как своеобразный дополнительный квест для внимательных, как одна из прелюдий свадебных конкурсов:",
		"ua": "Варіант № 1. На сайті представлено багато прихованих анімацій, що можна розглядати як своєрідний додатковий квест для уважних, як одна з прелюдій весільних конкурсів:",
	},
	"14": {
		"ru": "два щелчка в голубя в левом верхнем углу заставят его вспорхнуть и качаться занавески по сторонам;",
		"ua": "два натискання в голуба в лівому верхньому кутку змусять його злетіти, фіранки по боках почнуть гойдатися;",
	},
	"15": {
		"ru": "на втором развороте если нажать два раза на левый диск с нотами - все элементы придут в движение;",
		"ua": "на другому розвороті якщо натиснути два рази на лівий диск з нотами - всі елементи почнуть рухатися;",
	},
	"16": {
		"ru": "брэйк-дансеры также анимируются при простом на них наведении;",
		"ua": "брейк-дансери також анімуються при простому на них наведенні;",
	},
	"17": {
		"ru": "на последней страничке клик на бокалы вернет на первую страницу;",
		"ua": "на останній сторінці клік на келихи поверне на першу сторінку;",
	},
	"18": {
		"ru": "на мониторах реализовано очень красивое круговое меню с Купидоном с анимацией и переходами между страницами.",
		"ua": "на моніторах реалізовано дуже гарне кругове меню з Купідоном з анімацією і переходами між сторінками.",
	},
	"19": {
		"ru": "Вариант № 1",
		"ua": "Варіант № 1",
	},
	"20": {
		"ru": "Вариант № 2",
		"ua": "Варіант № 2",
	},
	"21": {
		"ru": "Вариант № 3",
		"ua": "Варіант № 3",
	},
	"22": {
		"ru": "Ваш сайт-приглашение будет находиться в интернет-сети всё время от дня создания до самой свадьбы. <p>Срок выполнения – в день заказа.",
		"ua": "Ваш сайт-запрошення буде перебувати в інтернет-мережі весь час від дня створення до самого весілля. <p> Термін виконання - в день замовлення.",
	},
	"23": {
		"ru": "Андрей",
		"ua": "Андрій",
	},

	"title": {
		"ru": "Приглашения на свадьбу",
		"ua": "Запрошення на весілля",
	},
};
select.addEventListener('change', changeURLLanguage);

// перенаправить на url с указанием языка
function changeURLLanguage() {
   let lang = select.value;
   location.href = window.location.pathname + '#' + lang;
   location.reload();
};

function changeLanguage() {
	let hash = window.location.hash;
	hash = hash.substr(1);
	if (!allLang.includes(hash)) {
		location.href = window.location.pathname + '#ru';
		location.reload();
	}
	select.value = hash;
	document.querySelector('title').innerHTML = langArr['title'][hash];
	for (let key in langArr) {
		let elem = document.querySelector('.lng-' + key);
		if (elem) {
			elem.innerHTML = langArr[key][hash];
		}

   }
}
changeLanguage();