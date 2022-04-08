portFolio_main = [
    {
        title : "traver music",
        desc : "PHP를 이용하여 DB를 구축하고 음악 서비스를 즐길수 있는 웹 서비스를 제작 중 입니다.",
        previewImg : "Traver Music.png",
        link : "https://beomseok.synology.me:7000",
        used : "html, css, js, php",
    },
    {
        title : "hanwha e&c",
        desc : "한화 건설 웹을 모방한 웹 입니다. 바닐라 js 사용과 반응형을 구현 했습니다.",
        previewImg : "Hanwha.png",
        link : "https://beomco.github.io/hanwha_web/",
        used : "html, css, js",
    }
]


portFolio_fixed = [
    {
        title : "B&O",
        desc : "뱅앤올룹슨 고정형",
        previewImg : "BO Play.png",
        link : "https://beomco.github.io/B-O_web/",
        used : "html, css"
    },
    {
        title : "National Geographic",
        desc : "네셔널 지오그래픽 고정형",
        previewImg : "National Geographic.png",
        link : "https://beomco.github.io/national_geographic_web_2022/",
        used : "html, css, js"
    },
    {
        title : "Cashmere",
        desc : "패션 고정형 웹",
        previewImg : "Cashmere.png",
        link : "https://beomco.github.io/cashmere_web/",
        used : "html, css"
    },
    {
        title : "Kuliner",
        desc : "wow.js, map api 사용 고정형 웹",
        previewImg : "kuliner_web.png",
        link : "https://beomco.github.io/kuliner_web/",
        used : "html, css, js"
    },
    {
        title : "Cake House",
        desc : "베이커리 고정형 웹",
        previewImg : "Cake House.png",
        link : "https://beomco.github.io/cakehouse_web/",
        used : "html, css"
    },
    {
        title : "Sejong Hospital",
        desc : "병원 고정형 웹",
        previewImg : "세종병원.png",
        link : "https://beomco.github.io/hospital_web/",
        used : "html, css"
    },
];

portFolio_responsive = [
    {
        title : "Aurelie",
        desc : "Vue를 이용해 마크업한 반응형 웹",
        previewImg : "01_vue_spa.png",
        link : "https://github.com/BeomCo/vue_spa_Aurelie",
        used : "html, css, js, vue"
    },
    {
        title : "puma",
        desc : "퓨마 웹",
        previewImg : "PUMA.png",
        link : "https://beomco.github.io/B-O_web/",
        used : "html, css, js"
    },
    {
        title : "Origin",
        desc : "반응형 웹",
        previewImg : "Origin.png",
        link : "https://beomco.github.io/origin_web/",
        used : "html, css, js"
    },
    
];

portFolio_code = [
    {
        title : "Weather App",
        desc : "openweather api 를 이용해서 날씨 정보를 확인 할수 있는 웹 입니다.",
        previewImg : "WeatherApp_intro.png",
        link : "https://beomco.github.io/Weather_Web/",
        used : "html, css, js"
    },
    {
        title : "Chatting App",
        desc : "jquery, firebase, db 를 이용해서 채팅 할수 있는 웹 입니다.",
        previewImg : "My Chat.png",
        link : "https://beomseok.synology.me:7004",
        used : "html, css, js, jquery, firebase, php"
    },
    
];


const fixedSel = document.querySelector('.portFolioMiddleFixed .swiper-wrapper');
let fixedArr = "";
portFolio_fixed.forEach(fixed => {
      
    fixedArr += `
    <div class="swiper-slide df df_ac df_jc">
        <div class="portFolioCard">
            <div class="portFolioCardImg ova">
                <img src="./asset/img/${fixed.previewImg}" class="card-img-top" alt="${fixed.title}">
            </div>
            <div class="portFolioCardBody df df_dc df_jb bgw cb pd5">
                <div class="portFolioCardBodyHead">
                    <h5 class="card-title">${fixed.title}</h5>
                    <p class="card-text">${fixed.desc}</p>
                </div>
                <div class="portFolioCardBodyInfo">
                    <div class="used">
                        <img src="./asset/img/367627_html_html5_icon.svg" alt="html5">
                        <img src="./asset/img/7422531_css3_css_file_development_icon.svg" alt="css3">
                    </div>
                    <div class="link">
                        <a target="_blank" href="${fixed.link}" class="">web ></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    `
    
});

fixedSel.innerHTML = fixedArr;

const responsiveSel = document.querySelector('.portFolioMiddleResponsive .swiper-wrapper');
let responsiveArr = "";
portFolio_responsive.forEach(responsive => {
      
    responsiveArr += `
    <div class="swiper-slide df df_ac df_jc">
        <div class="portFolioCard">
            <div class="portFolioCardImg ova">
                <img src="./asset/img/${responsive.previewImg}" class="card-img-top" alt="${responsive.title}">
            </div>
            <div class="portFolioCardBody df df_dc df_jb bgw cb pd5">
                <div class="portFolioCardBodyHead">
                    <h5 class="card-title">${responsive.title}</h5>
                    <p class="card-text">${responsive.desc}</p>
                </div>
                <div class="portFolioCardBodyInfo">
                    <div class="used">
                        <img src="./asset/img/367627_html_html5_icon.svg" alt="html5">
                        <img src="./asset/img/7422531_css3_css_file_development_icon.svg" alt="css3">
                    </div>
                    <div class="link">
                        <a target="_blank" href="${responsive.link}" class="">web ></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
    
});

responsiveSel.innerHTML = responsiveArr;

const codeSel = document.querySelector('.portFolioMiddleCode .swiper-wrapper');
let codeArr = "";
portFolio_code.forEach(code => {
      
    codeArr += `
    <div class="swiper-slide df df_ac df_jc">
        <div class="portFolioCard">
            <div class="portFolioCardImg ova">
                <img src="./asset/img/${code.previewImg}" class="card-img-top" alt="${code.title}">
            </div>
            <div class="portFolioCardBody df df_dc df_jb bgw cb pd5">
                <div class="portFolioCardBodyHead">
                    <h5 class="card-title">${code.title}</h5>
                    <p class="card-text">${code.desc}</p>
                </div>
                <div class="portFolioCardBodyInfo">
                    <div class="used">
                        <img src="./asset/img/367627_html_html5_icon.svg" alt="html5">
                        <img src="./asset/img/7422531_css3_css_file_development_icon.svg" alt="css3">
                    </div>
                    <div class="link">
                        <a target="_blank" href="${code.link}" class="">web ></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    `
    
});

codeSel.innerHTML = codeArr;