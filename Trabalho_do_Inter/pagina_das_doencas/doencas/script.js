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

var remover = 0;
counter_menu = 0;
var on = 0;
counter_replace_advices_icons = 0;

// PARTE COPIADA }

const urlParams = new URLSearchParams(window.location.search);
const ids = urlParams.get('id');
const disease_img = document.getElementById('disease_img');
const disease_advices_divs_id = document.getElementById('disease_advices_divs');
const advice_icons = document.getElementsByClassName('advice_icon');
const advice_text = document.getElementsByClassName('advice_text');
const container_advice_icons = document.getElementById('container_advice_icons');
var logado = sessionStorage.getItem('N1');

fetch('./diseaseContent.json')
.then(res=>res.json())
.then((json) =>
{
    disease_img.src = `${json[ids - 1].content.image}`
    disease_description.innerHTML = `${json[ids - 1].content.description}`

    json[ids - 1].content.symptoms.forEach(item =>
    {
        const issueLi = document.createElement('li')
        issueLi.innerHTML = `<li class="disease_symptoms_li data-font">${item}</li>`

        disease_symptoms.appendChild(issueLi)
    })

    disease_h1.innerText = `Relacionados com ${json[ids - 1].content.name}`

    for(i = 0; i < json[ids - 1].content.news.length; i++)
    {
        const div = document.createElement('div')
        div.setAttribute('class', 'disease_related_newspaper_news')

        if(i % 2 != 0 )
        {
            div.innerHTML = `
            <p class="news_text data-font">${json[ids - 1].content.news[i].new[0]}</p>
            <a href="${json[ids - 1].content.news[i].new[2]}" target="blanck"><div class="news_img" data-backgroundImage="backgrounds_image"></div></a>
            `
            div.getElementsByClassName('news_img')[0].style.backgroundImage = `url(${json[ids - 1].content.news[i].new[1]})`
        }
        else
        {
            div.innerHTML = `
            <a href="${json[ids - 1].content.news[i].new[2]}" target="blanck"><div class="news_img" data-backgroundImage="backgrounds_image"></div></a>
            <p class="news_text data-font">${json[ids - 1].content.news[i].new[0]}</p>
            `

            div.getElementsByClassName('news_img')[0].style.backgroundImage = `url(${json[ids - 1].content.news[i].new[1]})`
        }

        disease_related_newspaper.appendChild(div)
    }

    for(i = 0; i < json[ids - 1].content.advices.length; i++)
    {
        const div = document.createElement('div')
        div.setAttribute('class', 'disease_advices_div')
        div.setAttribute('id', 'disease_advices_div')
        
        div.innerHTML = `
        <span id="advice_title" class="advice_title data-font">${json[ids - 1].content.advices[i].title}</span>
        <img src="${json[ids - 1].content.advices[i].icon}" id="advice_icon" class="advice_icon"></img>
        <p class="advice_text data-font">${json[ids - 1].content.advices[i].text}</p>
        `        
        disease_advices_divs.appendChild(div)
    }

    if(counter_replace_advices_icons == 0)
    {
        if(window.innerWidth <= 800)
        {
            container_advice_icons.style.setProperty('display', 'flex')
            for(i = 0; i < 3; i++)
            {
                container_advice_icons.appendChild(advice_icons[i])
                disease_advices_div[i].style.setProperty('display', 'none')
            }
            counter_replace_advices_icons = 1
        }
    }
    
    text = document.querySelectorAll('.data-font');
})


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
    const contraste_image = 'contraste_image';
    const contraste_whiteGray = 'contraste_whiteGray';
    const contraste_darkGray = 'contraste_darkGray';
    const backgroundImage = document.querySelectorAll('[data-backgroundImage]')
    const backgrounds_darkGray = document.querySelectorAll('[data-backgrounds_darkGray]')
    const backgrounds_whiteGray = document.querySelectorAll('[data-backgrounds_whiteGray]')
    const itemMenu = document.getElementsByTagName('li');
    const pages_a = document.getElementsByClassName('pages_a')
    const disease_related_newspaper_news = document.getElementsByClassName('disease_related_newspaper_news')
    const disease_advices_div = document.getElementsByClassName('disease_advices_div') 

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

        for( i = 0; i < itemMenu.length; i++)
        {
            itemMenu[i].classList.add(contraste);
        }
                
        for(i = 0; i < pages_a.length; i++)
        {
            pages_a[i].classList.add(contraste)
        }

        backgrounds.forEach(items =>
        {
            items.classList.add(contraste);
        })

        backgrounds_darkGray.forEach(items =>
        {
            items.classList.add(contraste_darkGray);
        })
    
        backgrounds_whiteGray.forEach(items =>
        {
            items.classList.add(contraste_whiteGray);
        })
    
        backgroundImage.forEach(items =>
        {
            items.classList.add(contraste_image);
        })
        backgrounds[2].style.setProperty('border-bottom', '2px solid yellow')
        footer.style.setProperty('border-top', '2px solid yellow')

        for(i = 0; i < disease_related_newspaper_news.length; i++)
        {
            disease_related_newspaper_news[i].style.setProperty('border', '2px solid yellow')
        }

        for(i = 0; i < disease_advices_div.length; i++)
        {
            disease_advices_div[i].style.setProperty('border', '2px solid yellow')
        }

        on = 1;
    }
    else
    {
        for( i = 0; i < itemMenu.length; i++)
        {
            itemMenu[i].classList.remove(contraste);
        }
                
        for(i = 0; i < pages_a.length; i++)
        {
            pages_a[i].classList.remove(contraste)
        }

        backgrounds.forEach(items =>
        {
            items.classList.remove(contraste);
        })
        
        backgrounds_darkGray.forEach(items =>
        {
            items.classList.remove(contraste_darkGray);
        })
        
        backgrounds_whiteGray.forEach(items =>
        {
            items.classList.remove(contraste_whiteGray);
        })
    
        backgroundImage.forEach(items =>
        {
            items.classList.remove(contraste_image);
        })

        backgrounds[2].style.setProperty('border-bottom', '2px solid black')
        footer.style.setProperty('border-top', 'none')

        for(i = 0; i < disease_related_newspaper_news.length; i++)
        {
            disease_related_newspaper_news[i].style.setProperty('border', '2px solid red')
        }

        for(i = 0; i < disease_advices_div.length; i++)
        {
            disease_advices_div[i].style.setProperty('border', '2px solid rgba(78, 78, 255, 1)')
        }
        
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
        
        footer_first_ul.style.setProperty('display', 'none')
        footer_second_ul.style.setProperty('display', 'none')
        footer_third_ul.style.setProperty('display', 'none')
    }
    else
    {
        perfil.style.setProperty('display', 'block')
        menuButton.style.setProperty('display', 'none')

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

    if(counter_replace_advices_icons == 0)
    {
        if(window.innerWidth <= 800)
        {
            container_advice_icons.style.setProperty('display', 'flex')
            for(i = 0; i < 3; i++)
            {
                container_advice_icons.appendChild(advice_icons[i])
                disease_advices_div[i].style.setProperty('display', 'none')
                console.log('Valor do i: ' + i)
            }
            disease_advices_divs_id.style.setProperty('height', 'auto')
            counter_replace_advices_icons = 1
        }
    }
    else
    {
        if(window.innerWidth > 800)
        {
            container_advice_icons.style.setProperty('display', 'none')
            for(i = 0; i < 3; i++)
            {
                disease_advices_div[i].insertBefore(advice_icons[0], advice_text[i])
                disease_advices_div[i].style.setProperty('display', 'flex')
            }
            disease_advices_divs_id.style.setProperty('height', '70vh')
            counter_replace_advices_icons = 0
        }
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

function showAdvices(disease_advices_divs)
{
    if(window.innerWidth <= 800)
    {
        if(disease_advices_divs.target.id == 'advice_icon')
        {
            disease_advices_divs_id.style.setProperty('height', '55vh')
            switch(disease_advices_divs.target)
            {
                case advice_icons[0]:
                    disease_advices_div[0].style.setProperty('display', 'flex')
                    disease_advices_div[1].style.setProperty('display', 'none')
                    disease_advices_div[2].style.setProperty('display', 'none')
                    break
                case advice_icons[1]:
                    disease_advices_div[1].style.setProperty('display', 'flex')
                    disease_advices_div[2].style.setProperty('display', 'none')
                    disease_advices_div[0].style.setProperty('display', 'none')
                    break
                case advice_icons[2]:
                    disease_advices_div[2].style.setProperty('display', 'flex')
                    disease_advices_div[1].style.setProperty('display', 'none')
                    disease_advices_div[0].style.setProperty('display', 'none')
                    break
            }
        }
    }
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
        perfil.parentNode.href = 'https://intermedic.vercel.app/forms/logout.php'
        Login.innerText = 'Bem vindo, ' + sessionStorage.getItem('Nome') + '!'
        menuSide_span.innerText = sessionStorage.getItem('Nome') + ' ' + sessionStorage.getItem('Sobrenome')
        menuSide_li_login_or_logout.innerText = 'Logout'
        menuSide_li_login_or_logout.parentNode.href = 'https://intermedic.vercel.app/forms/logout.php'
        menuSide_li_login_or_logout_text.innerText = 'Logout'
    }
    else
    {
        perfil.innerText = 'account_circle'
        perfil.parentNode.href = 'https://intermedic.vercel.app/forms/index.php'
        menuSide_span.innerText = 'Faça login'
        menuSide_li_login_or_logout.innerText = 'account_circle'
        menuSide_li_login_or_logout.parentNode.href = 'https://intermedic.vercel.app/forms/index.php'
        menuSide_li_login_or_logout_text.innerText = 'Login'
    }

    responsivity()
}

window.addEventListener('resize', () =>
{
    responsivity()
})

menuButton.addEventListener('click', menuBar)

disease_advices_divs.addEventListener('click', showAdvices)

perfil.addEventListener('click', function()
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
