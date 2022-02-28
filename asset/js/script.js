const opening = document.querySelector('#opening');
const openingHello = document.querySelector('.openingHello');
const openingHelloH1 = document.querySelector('.openingHello h1');
const openingloader = document.querySelector('#opening .loader');
let openingRand = Math.floor(Math.random() * 1501) + 1500;
// console.log(openingRand);
let scrollHeight = document.body.scrollHeight;

//	현재 스크롤 위치 
let scroll = window.scrollY;
const backLine = document.querySelector('.backLine');
const header = document.querySelector('header');
// backLine.style.height = `${scrollHeight}px`

const sectionSel = document.querySelectorAll('#frame > *');
let sectionChk = 0;

for(let chk of sectionSel){
	sectionChk += 1;
}
// console.log(sectionChk);


let heightN = 0;

heightN = scrollHeight / sectionChk

const locationBody = document.querySelector('body').offsetTop;

// console.log(locationBody);



// window.addEventListener('beforeunload', (event) => {
// 	event.preventDefault();

// });




// console.log(locationBody);
//  로딩화면

// setTimeout(() => {
// 	window.scrollTo(0, 0);
	
// 	setTimeout(() => {
// 		window.scrollTo(0, 0);
	
// 		openingHello.querySelector('h1').classList.add('active');
// 		setTimeout(() => {
// 			openingloader.classList.add('active');
// 			frame.classList.add('active');
// 			setTimeout(() => {
// 				opening.classList.add('deActive');
// 				main.querySelector('.wrap').classList.add('active');
// 				document.body.classList.add('active');
// 				header.classList.add('active', 'bgb');
// 			}, openingRand);
// 		}, 1500);
// 	}, 500);
// }, 0);


const frame = document.querySelector('#frame');
const main = document.querySelector('#main');
const introduce_1 = document.querySelector('#introduce_1');
const introduce_2 = document.querySelector('#introduce_2');
const portFolio_1 = document.querySelector('#portFolio_1');
const portFolio_2 = document.querySelector('#portFolio_2');
const contact = document.querySelector('#contact');


const wrapLineInsert = document.querySelectorAll('.wrapLine');
const wrapLineHtml = `
	<div class="leftLine"></div>
	<div class="rightLine"></div>
`;


for(wli of wrapLineInsert){
	wli.innerHTML = wrapLineHtml;
}


// 루프
let loopInt = 0;
const loopDivFrame = document.querySelectorAll('.loopDivFrame');
// console.log(loopDivFrame);

for(let i of loopDivFrame){
	setInterval(function(){
	
		if(loopInt > -50){
			i.style.transform = `translateX(${loopInt}%)`;
			loopInt -= 0.005;
		}else if(loopInt = -50){
			i.style.transition = ``;
			loopInt = 0;
		}
	},0)

}

const portFolioloopDivFrame = document.querySelectorAll('.portFolioLoopDivFrame');
for(let i of portFolioloopDivFrame){
	setInterval(function(){
	
		if(loopInt > -50){
			i.style.transform = `translateX(${loopInt}%)`;
			loopInt -= 0.005;
		}else if(loopInt = -50){
			i.style.transition = ``;
			loopInt = 0;
		}
	},0)

}

let loopDivContact = 0;

const contactLoopDivFrame = document.querySelectorAll('.contactLoopDivFrame');
for(let i of contactLoopDivFrame){
	setInterval(function(){
	
		if(loopDivContact > -30){
			i.style.transform = `translateX(${loopDivContact}%)`;
			loopDivContact -= 0.01;
		}else if(loopDivContact = -30){
			i.style.transition = ``;
			loopDivContact = 0;
		}
	},0)

}


document.addEventListener("mousemove" , parallax);
function parallax(e){
	this.querySelectorAll('.parallax').forEach(parallax=>{

		const speed = parallax.getAttribute('data-speed');

		const x = (introduce_1.offsetWidth/45 - e.pageX*speed/50);
		const y = (introduce_1.offsetHeight/10 - e.pageY*speed/50);
		parallax.style.transform = `translateY(${y}px) translateX(${x}px)`;
		//translateX(${x}px)
	})
}

const personaHSel = document.querySelectorAll('.parallax');

for(let i of personaHSel){

	i.addEventListener('mouseover', function(){
		// console.log(i);
		i.style.fontSize = '6em';
		i.style.color = '#F2CD02';
		document.querySelector('#introduce_1').style.backgroundColor = 'rgba(45, 45, 45, 0.9)'
	}) 
	i.addEventListener('mouseout', function(){
		// console.log(i);
		i.style.fontSize = '3.4em';
		i.style.color = '#2D2D2D';
		document.querySelector('#introduce_1').style.backgroundColor = '#EBEEF7'
	}) 
}

// const persona


// 전체 세로 값
// let scrollHeight = document.body.scrollHeight;

// console.log(scrollHeight);




function scrollHeightFnc(){
	scrollHeight = document.body.scrollHeight;
	heightN = scrollHeight / sectionChk;
}
function scrollFnc(){
	scroll = window.scrollY;
	heightN = scrollHeight / sectionChk;
}
// function scrollHeaderColorFnc(){
// 	if(scroll >= heightSection_3){
// 		headerClassClear();
// 		headerAtagCbFunc();
// 		header.classList.add('bgw');
// 	}else if(scroll >= heightSection_4 && scroll <= heightSection_5){
// 		headerClassClear();
// 		headerAtagCwFunc();
// 		header.classList.add('bgb');
// 	}else if(scroll >= heightSection_5 && scroll <= heightSection_6){
// 		headerClassClear();
// 		headerAtagCbFunc();
// 		header.classList.add('bgw');
// 	}else if(scroll >= heightSection_6){
// 		headerClassClear();
// 		header.classList.add('bgb');
// 	}else{
// 		headerClassClear();
// 		headerAtagCwFunc();
// 		header.classList.add('bgb');
// 	}
// }


let offsetWidthLet = document.body.offsetWidth;


function modifySwiperPort(){

	if(offsetWidthLet > 1200){
		swiperFolio = new Swiper(".swiperFolio", {
			slidesPerView: 3,
			// spaceBetween: 200,
			slidesPerGroup: 3,
			// loop: true,
			loopFillGroupWithBlank: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			
		});
		
	}else if(offsetWidthLet <= 768){
		swiperFolio = new Swiper(".swiperFolio", {
			slidesPerView: 2,
			// spaceBetween: 200,
			slidesPerGroup: 2,
			// loop: true,
			loopFillGroupWithBlank: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			
		});
		if(offsetWidthLet <= 425){
			swiperFolio = new Swiper(".swiperFolio", {
				slidesPerView: 1,
				// spaceBetween: 200,
				slidesPerGroup: 1,
				// loop: true,
				loopFillGroupWithBlank: true,
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				},
				
			});
		}
	}


}

modifySwiperPort();

function headerClassClear(){
	header.classList.remove('bgb','bgw');
}

let headerHeight = 0;
headerHeight = document.querySelector('header').offsetHeight;

// console.log(scrollHeight)

//	리사이즈 이벤트
addEventListener('resize', function(){
	scrollHeightFnc();
	scrollFnc();
	// console.log(heightN);
	headerHeight = document.querySelector('header').offsetHeight;
	offsetWidthLet = document.body.offsetWidth;
	modifySwiperPort()
	// console.log(offsetWidthLet);
});

const headerAtagAll = document.querySelectorAll('header a');
let headerAtag;

for(let ha of headerAtagAll){
	headerAtag += ha;

	
};


function headerAtagCbFunc(){
	for(let ha of headerAtagAll){
		ha.classList.remove('cw')
		ha.classList.add('cb')
	};
}
function headerAtagCwFunc(){
	for(let ha of headerAtagAll){
		ha.classList.remove('cb')
		ha.classList.add('cw')
	};
}
function headerAtagCwFunc(){
	for(let ha of headerAtagAll){
		ha.classList.remove('cb')
		ha.classList.add('cw')
	};
}

// let scrollHeightMin = 
let heightSection_1 = heightN - headerHeight;
let heightSection_2 = heightN * 1 - headerHeight;
let heightSection_3 = heightN * 2 - headerHeight;
let heightSection_4 = heightN * 3 - headerHeight;
let heightSection_5 = heightN * 4 - headerHeight;
let heightSection_6 = heightN * 5 - headerHeight;

// console.log(headerAtag);

// console.log(scroll);

// console.log(heightN);


function sectionWrapClear(){
	introduce_1.querySelector('.wrap').classList.remove('active');
	introduce_2.querySelector('.wrap').classList.remove('active');
	portFolio_1.querySelector('.wrap').classList.remove('active');
	portFolio_2.querySelector('.wrap').classList.remove('active');
	contact.querySelector('.wrap').classList.remove('active');
}



//	스크롤 이벤트
addEventListener('scroll', function(){
	scrollFnc();
	// for(let sectionWrap of sectionSel){
	// 	console.log(sectionWrap)
	// }

	// console.log(scroll);

	// if(scroll >= heightN * 2)
	// console.log(heightN * 2)
	// console.log(scroll >= heightSection_2);
	if(scroll >= heightSection_2){
		headerClassClear();
		headerAtagCwFunc();
		// sectionWrapClear();
		header.classList.add('bgb');
		introduce_1.querySelector('.wrap').classList.add('active');
		// introduce_1.classList.add('bgb')

		if(scroll >= heightSection_3){
			headerClassClear();
			headerAtagCbFunc();
			// sectionWrapClear();
			header.classList.add('bgw');
			introduce_2.querySelector('.wrap').classList.add('active');
			// console.log(scroll >= heightSection_3);

			if(scroll >= heightSection_4){
				headerClassClear();
				headerAtagCwFunc();
				// sectionWrapClear();
				header.classList.add('bgb');
				portFolio_1.querySelector('.wrap').classList.add('active');
				if(scroll >= heightSection_5){
					headerClassClear();
					headerAtagCbFunc();
					// sectionWrapClear();
					header.classList.add('bgw');
					portFolio_2.querySelector('.wrap').classList.add('active');
					if(scroll >= heightSection_6){
						headerClassClear();
						headerAtagCwFunc();
						// sectionWrapClear();
						header.classList.add('bgb');
						contact.querySelector('.wrap').classList.add('active');
					}
				}
			}
		}
	}
	
	// console.log(scroll >= heightSection_4 && scroll <= heightSection_5);
});



const portFolioTypeFixed = document.querySelector('.portFolioType.fixed');
const portFolioTypeResponsive = document.querySelector('.portFolioType.responsive');
const portFolioTypeCode = document.querySelector('.portFolioType.code');

const portFolioTypeH = document.querySelector('.portFolioTypeH h3');
const portFolioTypeHDefault = document.querySelector('.portFolioTypeH .default');
const portFolioTypeHFixed = document.querySelector('.portFolioTypeH .fixed');
const portFolioTypeHResponsive = document.querySelector('.portFolioTypeH .responsive');
const portFolioTypeHCode = document.querySelector('.portFolioTypeH .code');
const returnDefault = document.querySelector('.returnDefault');

const portFolioMiddleFixed = document.querySelector('.portFolioMiddleFixed')
const portFolioMiddleResponsive = document.querySelector('.portFolioMiddleResponsive')
const portFolioMiddleCode = document.querySelector('.portFolioMiddleCode')
const portFolioMiddleDefault = document.querySelector('.portFolioMiddleDefault')


function portFolioMiddleDeault(){
	portFolioMiddleFixed.classList.remove('active');
	portFolioMiddleResponsive.classList.remove('active');
	portFolioMiddleCode.classList.remove('active')
	returnDefault.classList.remove('active');
	portFolioMiddleDefault.classList.add('active');
}

function portFolioMiddleClear(){
	portFolioMiddleFixed.classList.remove('active');
	portFolioMiddleResponsive.classList.remove('active');
	portFolioMiddleCode.classList.remove('active');
	portFolioMiddleDefault.classList.remove('active');
	portFolioTypeHFixed.classList.remove('active');
	portFolioTypeHResponsive.classList.remove('active');
	portFolioTypeHCode.classList.remove('active');
	portFolioTypeH.classList.remove('active');

}
// console.log(portFolioTypeResponsive);

returnDefault.addEventListener('click', function(){
	portFolioMiddleDeault();
	portFolioMiddleClear();
	portFolioMiddleDefault.classList.add('active')
	portFolioTypeH.classList.add('active');
})

portFolioTypeFixed.addEventListener('click', function(){
	portFolioMiddleClear();
	portFolioMiddleFixed.classList.add('active');
	
	portFolioTypeHFixed.classList.add('active');
	returnDefault.classList.add('active');
})
portFolioTypeResponsive.addEventListener('click', function(){
	portFolioMiddleClear();
	portFolioMiddleResponsive.classList.add('active');
	portFolioTypeHResponsive.classList.add('active');
	returnDefault.classList.add('active');
})
portFolioTypeCode.addEventListener('click', function(){
	portFolioMiddleClear();
	portFolioMiddleCode.classList.add('active');
	portFolioTypeHCode.classList.add('active');
	returnDefault.classList.add('active');
})



// 헤더 버튼 이동
const scrollIntroY = document.querySelector('#introduce_1').getBoundingClientRect().top + window.pageYOffset
const scrollPortY = document.querySelector('#portFolio_1').getBoundingClientRect().top + window.pageYOffset
const scrollContactY = document.querySelector('#contact').getBoundingClientRect().top + window.pageYOffset


document.querySelector('.headerIntro').addEventListener('click', function(e){
	e.preventDefault();
	window.scrollTo({top:scrollIntroY, behavior:'smooth'});
});
document.querySelector('.headerPort').addEventListener('click', function(e){
	e.preventDefault();
	window.scrollTo({top:scrollPortY, behavior:'smooth'});
});
document.querySelector('.headerContact').addEventListener('click', function(e){
	e.preventDefault();
	window.scrollTo({top:scrollContactY, behavior:'smooth'});
});
document.querySelector('.headerHome').addEventListener('click', function(e){
	e.preventDefault();
	window.scrollTo(0, 0);
});



// import Swiper from '../js/swiper-bundle.min.js';


const swiper = new Swiper(".swiper", {
    // autoplay: true,
    speed: 500,
    spaceBetween: 2000,
    // loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
	// grabCursor: true,
        effect: "creative",
        creativeEffect: {
		prev: {
		translate: ["-120%", 0, -500],
		},
		next: {
		translate: ["120%", 0, -500],
		},
	},

});




// const wrapperEl = document.querySelector('.anime');
//     const numberOfEls = 90;
//     const duration = 6000;
//     const delay = duration / numberOfEls;

//     let tl = anime.timeline({
//       duration: delay,
//       complete: function() { tl.restart(); }
//     });

//     function createEl(i) {
// 		let el = document.createElement('div');
// 		const rotate = (360 / numberOfEls) * i;
// 		const translateY = -50;
// 		const hue = Math.round(360 / numberOfEls * i);
// 		el.classList.add('el');
// 		el.style.backgroundColor = 'hsl(' + hue + ', 10%, 30%)';
// 		el.style.transform = 'rotate(' + rotate + 'deg) translateY(' + translateY + '%)';
// 		tl.add({
// 		begin: function() {
// 			anime({
// 			targets: el,
// 			backgroundColor: ['hsl(' + hue + ', 40%, 60%)', 'hsl(' + hue + ', 60%, 80%)'],
// 			rotate: [rotate + 'deg', rotate + 10 +'deg'],
// 			translateY: [translateY + '%', translateY + 10 + '%'],
// 			scale: [1, 1.25],
// 			easing: 'easeInOutSine',
// 			direction: 'alternate',
// 			duration: duration * .1
// 			});
// 		}
// 		});
// 		wrapperEl.appendChild(el);
//     };

//     for (let i = 0; i < numberOfEls; i++) createEl(i);

