const increaseA = document.getElementById('increaseSize');
const normalA = document.getElementById('normalSize');
const decreaseA = document.getElementById('decreaseSize');
const btnContraste = document.getElementById('btnContraste');
const backgrounds = document.querySelectorAll('[data-backgrounds]');
const menu = document.getElementById('menu')
const perfil = document.getElementById('perfil')
const menuButton = document.getElementById('menu_button')
const menuSide_back = document.getElementById('menuSide_back')
const menuSide = document.getElementById('menuSide')
const items = document.querySelectorAll('.hidden')
const body = document.querySelector('body')
// const paragraph = document.getElementsByTagName('p');
let text = document.querySelectorAll('.data-font');
const search_space = document.querySelector('#search_space');
const medicine_text = document.getElementsByClassName('medicine_text')
const medicine_img = document.getElementsByClassName('medicine_img')
const medicine_title = document.getElementsByClassName('medicine_title')
const medicine = document.getElementsByClassName('medicine')



// PARTE DA BARRA DE PESQUISA {

const search_text = document.getElementById('search_text')
const mini_search_space = document.getElementById('mini_search_space')


fetch('./searchBar.json')
.then(res=>res.json())
.then((json) =>
{
    json.forEach(item =>
    {
        const div = document.createElement('div')

        div.innerHTML = `
        <a class="mini_search_space_link" href="http://localhost/Trabalho_do_inter/pagina_das_doencas/doencas/index.html?id=${item.id}">
            <div class="mini_search_space_div">
                <span class="mini_search_space_div_span data-font">${item.content.name}</span>
            </div>
        </a>
        `;

        mini_search_space.appendChild(div)
    })
     
    text = document.querySelectorAll('.data-font');
})

// PARTE DA BARRA DE PESQUISA }


var remover = 0;
counter_menu = 0;
var on = 0;
var logado = sessionStorage.getItem('N1');





function increase()
{   
    // for(i = 0; i < titles.length; i++)
    // {
    //     let fontSize_1 = window.getComputedStyle(news_size[i]).getPropertyValue('font-size')

    //     fontSize_1 = parseFloat(fontSize_1);

    //     news_size[i].style.fontSize = (fontSize_1 + 5) + 'px'
    // }
    
    text.forEach(item => 
    {

        let fontSize_1 = window.getComputedStyle(item).getPropertyValue('font-size');

        fontSize_1 = parseFloat(fontSize_1);

        item.style.fontSize = (fontSize_1 + 5) + 'px'
    })

}



function decrease()
{

    // for(i = 0; i < titles.length; i++)
    // {
    //     let fontSize_1 = window.getComputedStyle(news_size[i]).getPropertyValue('font-size')

    //     fontSize_1 = parseFloat(fontSize_1);

    //     news_size[i].style.fontSize = (fontSize_1 - 5) + 'px'

    //     console.log
    // }

    text.forEach(item => 
    {
        let fontSize_1 = window.getComputedStyle(item).getPropertyValue('font-size');
    
        fontSize_1 = parseFloat(fontSize_1);

        item.style.fontSize = (fontSize_1 - 5) + 'px'
    })
}



function normal()
{
    text[0].style.fontSize = fonts[0]
    text[1].style.fontSize = fonts[1]

    for(i = 0; i < text.length; i++)
    {
        text[i].style.setProperty('font-size', `${fonts[0]}`)
    }
}



function contrastEffect()
{
    const contraste = 'contraste';
    const contraste_image = 'contraste_image'
    const contraste_darkGray = 'contraste_darkGray'
    const backgroundImage = document.querySelectorAll('[data-backgroundImage]')
    const backgrounds = document.querySelectorAll('[data-backgrounds]');
    const backgrounds_darkGray = document.querySelectorAll('[data-backgrounds_darkGray]');
    const itemMenu = document.getElementsByTagName('li')
    const pages_a = document.getElementsByClassName('pages_a')

    if(on == 0)
    {
        if(itemMenu[0].style.color != 'yellow')
        {
            // colors = [paragraph[0].style.color];

            // for( i = 0; i < paragraph.length; i++)
            // {
            //     paragraph[0].style.color = 'yellow';
            // }
        }

        // for( i = 0; i < paragraph.length; i++)
        // {
        //     paragraph[i].classList.add(contraste)
        // }
    
        for( i = 0; i < itemMenu.length; i++)
        {
            itemMenu[i].classList.add(contraste);
        }

        backgroundImage.forEach(items =>
        {
            items.classList.add(contraste_image);
        })
    
        backgrounds_darkGray.forEach(items =>
        {
            items.classList.add(contraste_darkGray);
        })
        
        backgrounds.forEach(items =>
        {
            items.classList.add(contraste);
        })

        for(i = 0; i < pages_a.length; i++)
        {
            pages_a[i].classList.add(contraste)
        }

        backgrounds[2].style.setProperty('border-bottom', '2px solid yellow')
        footer.style.setProperty('border-top', '2px solid yellow')
        title_text.style.setProperty('color', 'black')
        search_space.style.setProperty('background-color', 'rgb(146, 146, 146)')
        document.getElementsByClassName('search-box')[0].style.setProperty('border-bottom', '2px solid black')

        on = 1;
    }
    else
    {
        // for( i = 0; i < paragraph.length; i++)
        // {
        //     paragraph[i].classList.remove(contraste);
        // }

        for( i = 0; i < itemMenu.length; i++)
        {
            itemMenu[i].classList.remove(contraste);
        }

        backgrounds.forEach(items =>
        {
            items.classList.remove(contraste);
        })
        
        backgroundImage.forEach(items =>
        {
            items.classList.remove(contraste_image);
        })
            
        backgrounds_darkGray.forEach(items =>
        {
            items.classList.remove(contraste_darkGray);
        })
              
        for(i = 0; i < pages_a.length; i++)
        {
            pages_a[i].classList.remove(contraste)
        }

        backgrounds[2].style.setProperty('border-bottom', '2px solid black')
        footer.style.setProperty('border-top', 'none')
        title_text.style.setProperty('color', '#4764ad')
        search_space.style.setProperty('background-color', 'rgb(220, 220, 255)')
        document.getElementsByClassName('search-box')[0].style.setProperty('border-bottom', '2px solid red')

        // paragraph[0].style.setProperty('color', `${colors[0]}`)

        on = 0;
    }
}


function responsivity()
{
    if(window.innerWidth <= 500)
    {
        perfil.style.setProperty('display', 'none')
        menuButton.style.setProperty('display', 'block')
        menuSide.style.setProperty('display', 'flex')
        for(i = 0; i < medicine_img.length; i++)
        {
            medicine_img[i].style.setProperty('display', 'none')
            medicine_title[i].style.setProperty('display', 'none')
        }

        for(i = 0; i < medicine_text.length; i++)
        {
            medicine_text[i].disabled = false
        }
        
        footer_first_ul.style.setProperty('display', 'none')
        footer_second_ul.style.setProperty('display', 'none')
        footer_third_ul.style.setProperty('display', 'none')
    }
    else
    {
        perfil.style.setProperty('display', 'block')
        menuButton.style.setProperty('display', 'none')
        menuSide.style.setProperty('display', 'none')
        for(i = 0; i < medicine_img.length; i++)
        {
            medicine_img[i].style.setProperty('display', 'block')
            medicine_title[i].style.setProperty('display', 'block')
        }
        
        for(i = 0; i < medicine_text.length; i++)
        {
            medicine_text[i].disabled = true
        }

        if(counter_menu == 1)
        {
            body.style.setProperty('overflow-y', 'scroll')
            menuSide.style.setProperty('display', 'none')
            menuSide_back.style.setProperty('display', 'none')
            menu.appendChild(menuButton);
            menuButton.innerText = 'menu';
            menuSide.style.setProperty('right', '-100%')
            menuButton.style.setProperty('position', 'relative')
            menu.style.setProperty('position', 'static')
            menuSide_back.classList.remove('menu_transition')
            menuSide_back.classList.add('menu_transition2')
            counter_menu = 0;
        }
        
        footer_first_ul.style.setProperty('display', 'flex')
        footer_second_ul.style.setProperty('display', 'flex')
        footer_third_ul.style.setProperty('display', 'flex')
    }
}

function menuBar()
{
    const menuSide_close = document.getElementById('menuSide_close')
    const menuSide_ul = document.getElementById('menuSide_ul')

    if(counter_menu == 0)
    {
        body.style.setProperty('overflow-y', 'hidden')
        menuSide_back.style.setProperty('display', 'flex')
        menuSide_back.classList.remove('menu_transition2')
        menuSide_back.classList.add('menu_transition')
        menuSide.style.setProperty('right', '0%')
        setTimeout(function()
        {
            menuSide_close.appendChild(menuButton, menuSide_ul);
            menuButton.innerText = 'close';
        }, 600)
        menuButton.style.setProperty('position', 'static')
        menu.style.setProperty('position', 'relative')
        counter_menu = 1;
        console.log(counter_menu)
        console.log(menuSide)
    }
    else
    {
        body.style.setProperty('overflow-y', 'scroll')
        menuSide_back.classList.remove('menu_transition')
        menuSide_back.classList.add('menu_transition2')
        setTimeout(function()
        {
            menu.appendChild(menuButton);
            menuButton.innerText = 'menu';
        }, 300)
        setTimeout(function()
        {
            menuSide_back.style.setProperty('display', 'none')
        }, 600)
        menuSide.style.setProperty('right', '-100%')
        menuButton.style.setProperty('position', 'relative')
        menu.style.setProperty('position', 'static')
        counter_menu = 0;
    }
}

function filtrar()
{
    var count = 0
    var filter = search_text.value.toUpperCase();
    const divs = mini_search_space.getElementsByClassName('mini_search_space_div')

    for(i = 0; i < divs.length; i++)
    {
        const spans = divs[i].getElementsByClassName('mini_search_space_div_span')[0]
        textValue = spans.innerText

        if(textValue.toLocaleUpperCase().indexOf(filter) > -1)
        {
            divs[i].style.setProperty('display', 'flex')
            count++
            console.log(count)
        }
        else
        {
            divs[i].style.setProperty('display', 'none')
            count--
        }

        spanText = spans
        // console.log(span)
        if(spanText)
        {
            spanText.innerHTML = textValue.replace(new RegExp(filter, 'gi'), (match) => {
                return "<strong>" + match + "</strong>"
            })
        }
        else
        {
            divs[i].style.setProperty('display', 'none')
        }

        if(count > 5)
        {
            divs[i].style.setProperty('display', 'none')
        }
    }

    // if(count < -5) //  ÉRA "0" O VALOR DE COMPARAÇÃO
    // {
    //     mini_search_space.style.setProperty('display', 'none')
    // }
    // else
    // {
    //     mini_search_space.style.setProperty('display', '')
    // }
}




increaseA.addEventListener('click', increase)

decreaseA.addEventListener('click', decrease)

normalA.addEventListener('click', normal)

btnContraste.addEventListener('click', contrastEffect)

window.onload = function()
{

    fonts = [
    text[0].style.fontSize,
    text[1].style.fontSize,
    ]

    if(window.innerWidth <= 1100)
    {
        remover = 1;
    }

    if(logado)
    {
        perfil.innerText = 'person'
        perfil.parentNode.href = 'http://localhost/Trabalho_do_inter/forms/logout.php'
        Login.innerText = 'Bem vindo, ' + sessionStorage.getItem('Nome') + '!'
        menuSide_span.innerText = sessionStorage.getItem('Nome') + ' ' + sessionStorage.getItem('Sobrenome')
        menuSide_li_login_or_logout.innerText = 'Logout'
        menuSide_li_login_or_logout.parentNode.href = 'http://localhost/Trabalho_do_inter/forms/logout.php'
        menuSide_li_login_or_logout_text.innerText = 'Logout'
    }
    else
    {
        perfil.innerText = 'account_circle'
        perfil.parentNode.href = 'http://localhost/Trabalho_do_inter/forms/index.php'
        menuSide_span.innerText = 'Faça login'
        menuSide_li_login_or_logout.innerText = 'account_circle'
        menuSide_li_login_or_logout.parentNode.href = 'http://localhost/Trabalho_do_inter/forms/index.php'
        menuSide_li_login_or_logout_text.innerText = 'Login'
    }

    responsivity()
}

window.addEventListener('resize', () =>
{
    responsivity()
})

menuButton.addEventListener('click', menuBar)

body.addEventListener('click', function(body)
{
    searchBarTarget = body.target.id

    if(searchBarTarget != 'search_text' && searchBarTarget != 'search_space' && searchBarTarget != 'search-box' && searchBarTarget != 'loupe-red')
    {
        search_text.value = ''
        search_space.style.setProperty('background-color', 'transparent')
        const divs = mini_search_space.getElementsByClassName('mini_search_space_div')
        searchBarTarget = ''

        for(i = 0; i < divs.length; i++)
        {
            search_space.style.setProperty('transition', 'background 0s')
            divs[i].style.setProperty('display', 'none')
        }
    }
})

search_space.addEventListener('focusin', function() 
{
    search_space.style.setProperty('transition', 'background 0.3s')
    if(on == 1)
    {
        search_space.style.setProperty('background-color', 'rgb(146, 146, 146)')
    }
    else
    {
        search_space.style.setProperty('background-color', 'rgb(220, 220, 255)')
    }
})

medicine_text[0].addEventListener('click', function()
{
    if(window.innerWidth <= 500)
    {
        medicine[0].classList.add('openAnimation')
        medicine_img[0].style.setProperty('display', 'block')
        medicine_title[0].style.setProperty('display', 'block')
        medicine_img[1].style.setProperty('display', 'none')
        medicine_title[1].style.setProperty('display', 'none')
        medicine_img[2].style.setProperty('display', 'none')
        medicine_title[2].style.setProperty('display', 'none')
        medicine[0].addEventListener('animationend', function()
        {
            medicine[0].classList.remove('openAnimation')
        })
    }
})

medicine_text[1].addEventListener('click', function()
{
    if(window.innerWidth <= 500)
    {
        medicine[1].classList.add('openAnimation')
        medicine_img[1].style.setProperty('display', 'block')
        medicine_title[1].style.setProperty('display', 'block')
        medicine_img[2].style.setProperty('display', 'none')
        medicine_title[2].style.setProperty('display', 'none')
        medicine_img[0].style.setProperty('display', 'none')
        medicine_title[0].style.setProperty('display', 'none')
        medicine[1].addEventListener('animationend', function()
        {
            medicine[1].classList.remove('openAnimation')
        })
    }
})

medicine_text[2].addEventListener('click', function()
{
    if(window.innerWidth <= 500)
    {
        medicine[2].classList.add('openAnimation')
        medicine_img[2].style.setProperty('display', 'block')
        medicine_title[2].style.setProperty('display', 'block')
        medicine_img[1].style.setProperty('display', 'none')
        medicine_title[1].style.setProperty('display', 'none')
        medicine_img[0].style.setProperty('display', 'none')
        medicine_title[0].style.setProperty('display', 'none')
        medicine[2].addEventListener('animationend', function()
        {
            medicine[2].classList.remove('openAnimation')
        })
    }
})

perfil.addEventListener('click', function()
{
    
    if(logado)
    {
        sessionStorage.removeItem('N1')
        sessionStorage.removeItem('Nome')
        sessionStorage.removeItem('Id')
        sessionStorage.removeItem('Sobrenome')
        sessionStorage.removeItem('DataNascimento')
    }
    else
    {
        sessionStorage.setItem('N2', 'Deslogado')
    }
})

menuSide_li_login_or_logout.parentNode.addEventListener('click', function()
{
    
    if(logado)
    {
        sessionStorage.removeItem('N1')
        sessionStorage.removeItem('Nome')
        sessionStorage.removeItem('Id')
        sessionStorage.removeItem('Sobrenome')
    }
    else
    {
        sessionStorage.setItem('N2', 'Deslogado')
    }
})

footer_first_span.addEventListener('click', function()
{
    if(window.innerWidth <= 500)
    {
        footer_first_ul.style.setProperty('display', 'flex')
        footer_second_ul.style.setProperty('display', 'none')
        footer_third_ul.style.setProperty('display', 'none')
    }
})

footer_second_span.addEventListener('click', function()
{
    if(window.innerWidth <= 500)
    {
        footer_second_ul.style.setProperty('display', 'flex')
        footer_third_ul.style.setProperty('display', 'none')
        footer_first_ul.style.setProperty('display', 'none')
    }
})

footer_third_span.addEventListener('click', function()
{
    if(window.innerWidth <= 500)
    {
        footer_third_ul.style.setProperty('display', 'flex')
        footer_second_ul.style.setProperty('display', 'none')
        footer_first_ul.style.setProperty('display', 'none')
    }
})

/* SLIDER */

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);