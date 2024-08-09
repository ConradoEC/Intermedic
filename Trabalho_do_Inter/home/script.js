// CRIANDO ELEMENTOS

var background_slider = document.createElement('div');
var slider = document.createElement('div');
var slider_news = document.createElement('div');
var modals = [document.createElement('div'), document.createElement('div'), document.createElement('div'), document.createElement('div')]
var arrows = document.querySelectorAll('.arrow')
var arrows_box = document.createElement('div')
const newspaper = document.querySelector('#newspaper')
var father = newspaper.parentNode;
var titles = [document.createElement('p'), document.createElement('p'), document.createElement('p'), document.createElement('p')]
var links = [document.createElement('a'), document.createElement('a'), document.createElement('a'), document.createElement('a')]

var titles_text = [document.createTextNode('"Na prática, pode ser considerada uma evolução da cirurgia laparoscópica..."'), document.createTextNode('"Amenizar a dor que os pacientes sentem quando alguns procedimentos são realizados..."'), document.createTextNode('"A IoT na saúde possibilita que dispositivos conectados interajam entre si..."'), document.createTextNode('"Entretanto, especialmente para a bioimpressão 3D, utiliza-se um componente único..."')]
background_slider.classList.add('background_slider')
slider.classList.add('slider')
slider_news.classList.add('slider_news')
modals.forEach(item =>
{
    item.classList.add('modals')
})
links.forEach(item => 
{
    item.classList.add('links')
})
links[0].href = 'https://maislaudo.com.br/blog/robotica-na-medicina/', links[1].href = 'https://telemedicinamorsch.com.br/blog/realidade-virtual-na-medicina', links[2].href = 'https://www.voitto.com.br/blog/artigo/iot-na-medicina', links[3].href = 'https://r-crio.com/blog/impressao-de-orgaos-3d-entenda-tudo-sobre/'
arrows_box.classList.add('arrow_box')







background_slider.appendChild(arrows[0]), background_slider.appendChild(slider), background_slider.appendChild(arrows[1]);
slider.appendChild(slider_news);
slider_news.appendChild(modals[0]), slider_news.appendChild(modals[1]), slider_news.appendChild(modals[2]), slider_news.appendChild(modals[3]);
links[0].appendChild(titles_text[0]), links[1].appendChild(titles_text[1]), links[2].appendChild(titles_text[2]), links[3].appendChild(titles_text[3])
titles[0].appendChild(links[0]), titles[1].appendChild(links[1]), titles[2].appendChild(links[2]), titles[3].appendChild(links[3])
modals[0].appendChild(titles[0]), modals[1].appendChild(titles[1]), modals[2].appendChild(titles[2]), modals[3].appendChild(titles[3]);

// CRIANDO ELEMENTOS

titles.forEach(item => 
{
    item.classList.add('titles')
    item.classList.add('data-font')
})

var text_2 = [titles[0].classList[1], titles[1].classList[1], titles[2].classList[1], titles[3].classList[1]]
let text = document.querySelectorAll('.data-font');

console.log(text_2)

const body = document.querySelector('body');
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
const phrase = document.getElementById('phrase')
const items = document.querySelectorAll('.hidden')
const issue_img = document.querySelectorAll('.issue_img')
const summary = document.querySelectorAll('.summary')
const paragraph = document.getElementsByTagName('p');
var veja_agora = paragraph[1].querySelector('#veja_agora')
var father_2 = summary[1].parentNode
const button_links = document.getElementById('button_links')

var time = 0;
var transition = 'transition';
var transition2 = 'transition2';
var phrases = ['NÃO OS CONSUMA, SEM CONHECÊ-LOS.',
                'PODEMOS AUXILIÁ-LO <BR> COM SEUS SINTOMAS.',
                'JÁ SE CADASTROU? FAÇA AINDA HOJE!',
                'DEIXE SUA CADERNETA ATUALIZADA']
var links_for_button_link = ['http://localhost/Trabalho_do_inter/pagina_dos_remedios',
                            'http://localhost/Trabalho_do_inter/pagina_das_doencas', 
                            'http://localhost/Trabalho_do_inter/forms/forms-cadastro/cadastro.html',
                            'http://localhost/Trabalho_do_inter/vacinacao']
var colors;
var on = 0;
var fonts;
let valor_do_fontSize_1;
var remover = 0;
var position = 0;
var counter = 1;
var news_size = 0;
counter_menu = 0;
var logado = sessionStorage.getItem('N1');
var logado_Id = sessionStorage.getItem('Id');
const id_from_url = new URLSearchParams(window.location.search)
const urlId = id_from_url.get('id')
const urlSobrenome = id_from_url.get('lastName')
const urlNascimento = id_from_url.get('WasBorn')

if(titles[0].classList.contains('data-font'))
{
    var news_size = [links[0], links[1], links[2], links[3]]
    console.log(news_size)
}



function increase()
{   
    for(i = 0; i < titles.length; i++)
    {
        let fontSize_1 = window.getComputedStyle(news_size[i]).getPropertyValue('font-size')

        fontSize_1 = parseFloat(fontSize_1);

        news_size[i].style.fontSize = (fontSize_1 + 5) + 'px'
    }
    
    text.forEach(item => 
    {

        let fontSize_1 = window.getComputedStyle(item).getPropertyValue('font-size');

        fontSize_1 = parseFloat(fontSize_1);

        item.style.fontSize = (fontSize_1 + 5) + 'px'
    })

}



function decrease()
{

    for(i = 0; i < titles.length; i++)
    {
        let fontSize_1 = window.getComputedStyle(news_size[i]).getPropertyValue('font-size')

        fontSize_1 = parseFloat(fontSize_1);

        news_size[i].style.fontSize = (fontSize_1 - 5) + 'px'

        console.log
    }

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
    text[2].style.fontSize = fonts[2]

    console.log(text[1])

    for(i = 0; i < text.length; i++)
    {
        text[i].style.setProperty('font-size', `${fonts[0]}`)
    }

    for(i = 4; i < text.length; i++)
    {
        text[i].style.setProperty('font-size', `${fonts[4]}`)
    }

    for(i = 9; i < text.length; i++)
    {
        text[i].style.setProperty('font-size', `${fonts[9]}`)
        // text[i].style.setProperty('font-size', `${fonts[9]}`)
    }

    for(i = 0; i < titles.length; i++)
    {
        news_size[i].style.setProperty('font-size', `${fonts[5]}`)
    }
}



function contrastEffect()
{
    const contraste = 'contraste';
    const contraste_image = 'contraste_image'
    const contraste_darkGray = 'contraste_darkGray'
    const contraste_whiteGray = 'contraste_whiteGray'
    const itemMenu = document.getElementsByTagName('li');
    const buttons = document.querySelectorAll('[data-buttons]');
    const backgroundImage = document.querySelectorAll('[data-backgroundImage]');
    const backgrounds_darkGray = document.querySelectorAll('[data-backgrounds_darkGray]');
    const backgrounds_whiteGray = document.querySelectorAll('[data-backgrounds_whiteGray]');
    const pages_a = document.getElementsByClassName('pages_a')


    if(on == 0)
    {
        if(paragraph[0].style.color != 'yellow')
        {
            colors = [paragraph[0].style.color, paragraph[1].style.color, veja_agora.style.color, buttons[0].style.color, buttons[2].style.color, buttons[0].style.backgroundColor, buttons[2].style.backgroundColor, links[0].style.color];

            // if(window.innerWidth > 1100)
            // {
            //     colors.splice(2, 0, veja_agora.style.color)
            // }
            // else
            // {
            //     colors.splice(2, 1)
            // }
            

            console.log(colors)

            for(i = 0; i < links.length; i++)
            {
                links[i].style.setProperty('color', 'yellow')
            }

            for(i = 0; i < paragraph.length; i++)
            {
                // paragraph[0].style.color = 'yellow';
                paragraph[1].style.color = 'yellow';

                veja_agora.style.color = 'yellow'

                buttons[0].style.color = 'yellow'
                buttons[2].style.color = 'yellow'
                buttons[0].style.backgroundColor = 'black'
                buttons[2].style.backgroundColor = 'black'
            }
        }

        for(i = 0; i < paragraph.length; i++)
        {
            paragraph[i].classList.add(contraste)
        }

        for(i = 0; i < itemMenu.length; i++)
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
        
        backgroundImage.forEach(items =>
        {
            items.classList.add(contraste_image);
        })
        
        backgrounds_darkGray.forEach(items =>
        {
            items.classList.add(contraste_darkGray);
        })
            
        backgrounds_whiteGray.forEach(items =>
        {
            items.classList.add(contraste_whiteGray);
        })
                
        backgrounds[2].style.setProperty('border-bottom', '2px solid yellow')
        footer.style.setProperty('border-top', '2px solid yellow')
        
        buttons.forEach(items =>
        {
            items.classList.add(contraste);
        })

        on = 1;
    }
    else
    {
        for( i = 0; i < paragraph.length; i++)
        {
            paragraph[i].classList.remove(contraste);
        }

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
        
        backgroundImage.forEach(items =>
        {
            items.classList.remove(contraste_image);
        })
        
        backgrounds_darkGray.forEach(items =>
        {
            items.classList.remove(contraste_darkGray);
        })
            
        backgrounds_whiteGray.forEach(items =>
        {
            items.classList.remove(contraste_whiteGray);
        })
            
        buttons.forEach(items =>
        {
            items.classList.remove(contraste);
        }) 

        // if(window.innerWidth <= 1100)
        // {
            
        //     for(i = 0; i < links.length; i++)
        //     {
        //         links[i].style.setProperty('color', `${colors[6]}`)
        //     }

        //     paragraph[0].style.setProperty('color', `${colors[0]}`)
        //     paragraph[1].style.setProperty('color', `${colors[1]}`)
        //     buttons[0].style.setProperty('color', `${colors[2]}`)
        //     buttons[2].style.setProperty('color', `${colors[3]}`)
        //     buttons[0].style.setProperty('background-color', `${colors[4]}`)
        //     buttons[2].style.setProperty('background-color', `${colors[5]}`)
        // }

        backgrounds[2].style.setProperty('border-bottom', '2px solid black')
        footer.style.setProperty('border-top', 'none')

        // if(window.innerWidth > 1100)
        // {
            for(i = 0; i < links.length; i++)
            {
                links[i].style.setProperty('color', `${colors[7]}`)
            }

            paragraph[0].style.setProperty('color', `${colors[0]}`)
            paragraph[1].style.setProperty('color', `${colors[1]}`)
            buttons[0].style.setProperty('color', `${colors[3]}`)
            buttons[2].style.setProperty('color', `${colors[4]}`)
            buttons[0].style.setProperty('background-color', `${colors[5]}`)
            buttons[2].style.setProperty('background-color', `${colors[6]}`)
            veja_agora.style.setProperty('color', `${colors[2]}`)
        

        on = 0;
    }
}




function changePhrase()
{
    phrase.innerHTML = phrases[time]
    button_links.href = links_for_button_link[time]
}



function responsivity()
{
    if(window.innerWidth <= 1100)
    {
        if(remover == 1)
        {
            remover = 0;
            console.log(remover)
            arrows.forEach(item => 
            {
                item.style.setProperty('display', 'flex')
            })
            father.replaceChild(background_slider, newspaper)
        }
    }
    else
    {
        if(remover == 0)
        {
            remover = 1;
            console.log(remover)
            father.replaceChild(newspaper, background_slider)
            // THIS CODE´S PART HAS A ERROR, BUT IT DOESN´T AFFECT THE WEBSITE
        }
    }
    

    if(window.innerWidth <= 500)
    {
        perfil.style.setProperty('display', 'none')
        menuButton.style.setProperty('display', 'block')
        arrows_box.appendChild(arrows[0]), arrows_box.appendChild(arrows[1])
        background_slider.appendChild(arrows_box);
        arrows_box.style.setProperty('display', 'flex')
        paragraph[1].innerText = 'Últimas notícias'
        menuSide.style.setProperty('display', 'flex')

        footer_first_ul.style.setProperty('display', 'none')
        footer_second_ul.style.setProperty('display', 'none')
        footer_third_ul.style.setProperty('display', 'none')
    }
    else
    {
        perfil.style.setProperty('display', 'block')
        menuButton.style.setProperty('display', 'none')
        background_slider.insertBefore(arrows[0], slider), background_slider.appendChild(arrows[1]);
        arrows_box.style.setProperty('display', 'none')
        background_slider.style.setProperty('display', 'flex')
        paragraph[1].innerText = 'Fique por dentro das últimas notícias do mundo da Medicina...'
        paragraph[1].appendChild(veja_agora)


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


function hidden_titles()
{
    if(counter == 0)
    {
        titles.forEach(item => 
        {
            item.classList.remove('show')
            item.classList.add('hidden')
        })
        counter = 1;        
    }
    else
    {
        titles.forEach(item => 
        {
            item.classList.remove('hidden')
            item.classList.add('show')
        })
    
        counter = 0;
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



window.onload = function()
{
    fonts = [
        text[0].style.fontSize, 
        text[1].style.fontSize,
        text[2].style.fontSize,
        text[4].style.fontSize,
        text[9].style.fontSize,
        links[0].style.fontSize
    ]

    phrase.innerHTML = phrases[time]

    if(window.innerWidth <= 1100)
    {
        remover = 1;
    }

    if(logado)
    {
        perfil.innerText = 'person'
        perfil.parentNode.href = './forms/logout.php'
        Login.innerText = 'Bem vindo, ' + sessionStorage.getItem('Nome') + '!'
        if(!logado_Id)
        {
            sessionStorage.setItem('Id', `${urlId}`)
            sessionStorage.setItem('Sobrenome', `${urlSobrenome}`)
            sessionStorage.setItem('DataNascimento', `${urlNascimento}`)
        }
        menuSide_span.innerText = sessionStorage.getItem('Nome') + ' ' + sessionStorage.getItem('Sobrenome')
        menuSide_li_login_or_logout.innerText = 'Logout'
        menuSide_li_login_or_logout.parentNode.href = 'http://localhost/Trabalho_do_inter/forms/logout.php'
        menuSide_li_login_or_logout_text.innerHTML = 'Logout'
    }
    else if(!logado)
    {
        perfil.innerText = 'account_circle'
        perfil.parentNode.href = './forms/index.php'
        menuSide_span.innerText = 'Faça login'
        menuSide_li_login_or_logout.innerText = 'account_circle'
        menuSide_li_login_or_logout.parentNode.href = 'http://localhost/Trabalho_do_inter/forms/index.php'
        menuSide_li_login_or_logout_text.innerHTML = 'Login'
    }

    responsivity()

    // 13 E 14 SÃO OS DA SEÇÃO QUE APARECEM SÓ DEPOIS 
}



increaseA.addEventListener('click', increase)

decreaseA.addEventListener('click', decrease)

normalA.addEventListener('click', normal)

btnContraste.addEventListener('click', () => 
{
    contrastEffect();

    console.log(on)
})

window.addEventListener('resize', () =>
{
    responsivity()
})

arrows[0].addEventListener('click', function()
{
    titles.forEach(item => 
    {
        item.classList.remove('show')
        item.classList.remove('hidden')
    })

    counter = 1;        

    if(position < 0)
    {
        position = position + 25;

        modals.forEach(item => 
        {
            item.style.setProperty('left', `${position}%`);
        })
        console.log(position)
    }
    else if(position >= 0)
    {
        position = -75;
        modals.forEach(item => 
        {
            item.style.setProperty('left', `${position}%`);
        })
        console.log(position)
    }
})

arrows[1].addEventListener('click', function()
{
    titles.forEach(item => 
    {
        item.classList.remove('show')
        item.classList.remove('hidden')
    })

    counter = 1;        

    if(position > -75)
    {
        position = position - 25;

        modals.forEach(item => 
        {
            item.style.setProperty('left', `${position}%`);
        })
        console.log(position)
    }
    else if(position = -75)
    {
        position = 0;
        modals.forEach(item => 
        {
            item.style.setProperty('left', `${position}%`);
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

menuButton.addEventListener('click', menuBar)

modals[0].addEventListener('click', hidden_titles), modals[1].addEventListener('click', hidden_titles), modals[2].addEventListener('click', hidden_titles), modals[3].addEventListener('click', hidden_titles);

setInterval(function()
{
    phrase.classList.add(transition2)
    phrase.classList.add(transition)

    if(time === phrases.length -1)
    {
        time = 0;
    }
    else
    {
        time++
    }

    changePhrase()

    phrase.addEventListener('animationend', () =>
    {
        phrase.classList.remove(transition2)
        phrase.classList.remove(transition)
    })
}, 4000)
