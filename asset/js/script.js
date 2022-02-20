const wrapLineInsert = document.querySelectorAll('.wrapLine');
const wrapLineHtml = `
	<div class="leftLine"></div>
	<div class="rightLine"></div>
`;


for(wli of wrapLineInsert){
	wli.innerHTML = wrapLineHtml;
}

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


document.addEventListener("mousemove" , parallax);
function parallax(e){
	this.querySelectorAll('.parallax').forEach(parallax=>{

		const speed = parallax.getAttribute('data-speed');

		const x = (window.innerWidth/45 - e.pageX*speed/50);
		const y = (window.innerHeight/10 - e.pageY*speed/50);
		parallax.style.transform = `translateY(${y}px) translateX(${x}px)`;
		//translateX(${x}px)
	})
}

const personaHSel = document.querySelectorAll('.parallax');

for(let i of personaHSel){

	i.addEventListener('mouseover', function(){
		// console.log(i);
		i.style.fontSize = '5em';
		i.style.color = '#FFDD00';
		document.querySelector('#introduce_1').style.backgroundColor = 'rgba(45, 45, 45, 0.3)'
	}) 
	i.addEventListener('mouseout', function(){
		// console.log(i);
		i.style.fontSize = '3.4em';
		i.style.color = '#212121';
		document.querySelector('#introduce_1').style.backgroundColor = '#E9E9E9'
	}) 
}


// 전체 세로 값
let scrollHeight = document.body.scrollHeight;

//	현재 스크롤 위치 
let scroll = window.scrollY;
const backLine = document.querySelector('.backLine');
const header = document.querySelector('header');
// backLine.style.height = `${scrollHeight}px`

const sectionSel = document.querySelectorAll('#frame > *');
let sectionChk = 0;

for(chk of sectionSel){
	sectionChk += 1;
}
console.log(sectionChk);


let heightN = 0;

heightN = scrollHeight / sectionChk

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
// 		header.classList.add('bcw');
// 	}else if(scroll >= heightSection_4 && scroll <= heightSection_5){
// 		headerClassClear();
// 		headerAtagCwFunc();
// 		header.classList.add('bcb');
// 	}else if(scroll >= heightSection_5 && scroll <= heightSection_6){
// 		headerClassClear();
// 		headerAtagCbFunc();
// 		header.classList.add('bcw');
// 	}else if(scroll >= heightSection_6){
// 		headerClassClear();
// 		header.classList.add('bcb');
// 	}else{
// 		headerClassClear();
// 		headerAtagCwFunc();
// 		header.classList.add('bcb');
// 	}
// }

function headerClassClear(){
	header.classList.remove(...header.classList);
}

let headerHeight = 0;
headerHeight = document.querySelector('header').offsetHeight;

console.log(scrollHeight)

//	리사이즈 이벤트
addEventListener('resize', function(){
	scrollHeightFnc();
	scrollFnc();
	console.log(heightN);
	headerHeight = document.querySelector('header').offsetHeight;
	console.log(headerHeight);
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
let heightSection_3 = heightN * 2 - headerHeight;
let heightSection_4 = heightN * 3 - headerHeight;
let heightSection_5 = heightN * 4 - headerHeight;
let heightSection_6 = heightN * 5 - headerHeight;

// console.log(headerAtag);

// console.log(scroll);

console.log(heightN);

const main = document.querySelector('#main');
const introduce_1 = document.querySelector('#introduce_1');
const introduce_2 = document.querySelector('#introduce_2');
const portfolio_1 = document.querySelector('#portfolio_1');
const portfolio_2 = document.querySelector('#portfolio_2');
const contact = document.querySelector('#contact');

//	스크롤 이벤트
addEventListener('scroll', function(){
	scrollFnc();
	// console.log(scroll);

	// if(scroll >= heightN * 2)
	// console.log(heightN * 2)
	if(scroll <= heightSection_3){
		headerClassClear();
		headerAtagCwFunc();
		header.classList.add('bcb');
		// introduce_1.classList.add('bcb')

	}else if(scroll >= heightSection_3){
		headerClassClear();
		headerAtagCbFunc();
		header.classList.add('bcw');

		if(scroll >= heightSection_4){
			headerClassClear();
			headerAtagCwFunc();
			header.classList.add('bcb');
			if(scroll >= heightSection_5){
				headerClassClear();
				headerAtagCbFunc();
				header.classList.add('bcw');
				if(scroll >= heightSection_6){
					headerClassClear();
					headerAtagCwFunc();
					header.classList.add('bcb');
				}
			}
		}
	}
	
	// console.log(scroll >= heightSection_4 && scroll <= heightSection_5);
});

// import Swiper from '../js/swiper-bundle.min.js';


const swiper = new Swiper(".swiper", {
    // autoplay: true,
    speed: 500,
    spaceBetween: 2000,
    loop: true,
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