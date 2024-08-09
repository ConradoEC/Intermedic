// ESTA VARIÁVEL ESTÁ AQUI EM CIMA PORQUE COMO É GERADO UMA NOVA DIV CONTENDO O "DATA-CLICK" QUANDO SE ESCOLHE UM ITEM DO MENU, ESSA VARIÁVEL PRECIA RECONHECER O "DATA-CLICK" QUE FOI GERADO JUNTO DA DIV
var data_modal;
var text
// PARTE DA BARRA DE PESQUISA {
const data = new Date()
console.log(data)

var menu_counter = 0;

const newWindow = document.createElement('div')
newWindow.setAttribute('id', 'container_sliders_window2')
newWindow.innerHTML = '<div data-modal="click" data-backgrounds_darkGray="backgrounds_darkGray"></div>'
// const newSlider = document.createElement('div')
const newSlider = newWindow.querySelector('[data-modal]')
const newImg = document.createElement('img')
const newHr = document.createElement('hr')
newHr.setAttribute('data-backgroundsHr', 'backgrounds_hr')
newHr.setAttribute('class', 'slider_hr')
const newText = document.createElement('p')

// const url = 'http://localhost:3000/bd';
const url = 'https://node-api-0bwb.onrender.com/bd';

// fetch('https://fakestoreapi.com/products?limit=5')
fetch('https://api-interdisciplinar-nvn0.onrender.com/bd')
.then(res=>res.json())
.then((json) =>
{
    console.log(json)
    const ul = document.getElementById('section_medicine_ul');
    json.forEach((item) =>
    {
        const li = document.createElement('li')
        li.innerHTML = `
        <div data-backgrounds="backgrounds" class="section_medicine_ul_li_div data-font" id="${item.id - 1}">
            <img data-backgroundImage="backgrounds_image" src="${item.image}" alt="">
            <span class="medicine_span">${item.title}</span>
        </div>
        `;
        // console.log(li.innerHTML)
        ul.appendChild(li);        // li.getElementsByClassName('section_medicine_ul_li_div')[0].getElementsByTagName('span')[0].setAttribute('class', 'data-font')
    })

    text = document.querySelectorAll('.data-font')
})
// .catch(error => console.log("O erro foi: " + error))

function filtrar()
{
    section_medicine.style.setProperty('box-shadow', 'none')

    var medicine_search,
        filter,
        li,
        a,
        i,
        span,
        textValue,
        count = 0

    medicine_search = document.getElementById('medicine_search')
    const ul = document.getElementById('section_medicine_ul')
    ul.style.setProperty('opacity', '1')

    filter = medicine_search.value.toUpperCase();

    li = ul.getElementsByTagName('li');
    for(i = 0; i < li.length; i++)
    {
        div = li[i].getElementsByTagName('div')[0]

        textValue = div.innerText

        if(textValue.toLocaleUpperCase().indexOf(filter) > -1)
        {
            li[i].style.setProperty('display', '')
            count++
            // console.log(count)
        }
        else
        {
            li[i].style.setProperty('display', 'none')
            count--
            // count =0;
            // console.log(count)
        }

        span = li[i].querySelector('.medicine_span')
        // console.log(span)
        if(span)
        {
            span.innerHTML = textValue.replace(new RegExp(filter, 'gi'), (match) => {
                return "<strong>" + match + "</strong>"
            })
        }
        else
        {
            li[i].style.setProperty('display', 'none')
        }

        if(count > 5)
        {
            li[i].style.setProperty('display', 'none')
        }
    }

    ul.style.setProperty('display', 'flex')

    // if(count < -5) //  ÉRA "0" O VALOR DE COMPARAÇÃO
    // {
    //     ul.style.setProperty('display', 'none')
    // }
    // else
    // {
    //     ul.style.setProperty('display', 'flex')
    // }

    ul.addEventListener('click', change)
}


// PARTE DA BARRA DE PESQUISA }

close_span.addEventListener('click', function() {
    document.getElementById('section_medicine_ul').style.setProperty('display', 'none')
    section_medicine.style.setProperty('box-shadow', 'inset 0px 0px 4px 1px')
    medicine_search.value = ''
})

window.addEventListener('click', function(window)
{
    if(window.target.id == 'close_span')
    {
        close_span.style.setProperty('display', 'block')
    }
    else if(window.target.id == 'medicine_search')
    {
        close_span.style.setProperty('display', 'block')
    }
    else 
    {
        if(section_medicine_ul.style.display != 'flex')
        {
            console.log(window.target.id)
            close_span.style.setProperty('display', 'none')
        }
        else
        {
            close_span.style.setProperty('display', 'block')
        }
    }
})

medicine_search.addEventListener('focus', function() {
    close_span.style.setProperty('display', 'block')
})

const increaseA = document.getElementById('increaseSize');
const normalA = document.getElementById('normalSize');
const decreaseA = document.getElementById('decreaseSize');
const btnContraste = document.getElementById('btnContraste');
const menu = document.getElementById('menu')
const perfil = document.getElementById('perfil')
const menuButton = document.getElementById('menu_button')
const menuSide_back = document.getElementById('menuSide_back')
const menuSide = document.getElementById('menuSide')
const items = document.querySelectorAll('.hidden')
const loading_background = document.getElementById('loading_background')
const body = document.querySelector('body');

const move = document.getElementById('move');
const divButton = document.getElementById('divButton');
const item = document.querySelectorAll('[data-move]');
const comments_box_link = document.getElementsByClassName('comments_box_link')
var content_slidersSize

// PARTE DO MODAL {


const arrows = document.getElementsByClassName('arrow');
const container_sliders_window = document.getElementById('container_sliders_window');
// COLOQUEI ESSA AQUI AGORA, ELE PODE DAR INTERFERÊNCIA EM OUTROS MOMENTOS QUE CHAMAM ELE
const section_medicine = document.getElementById('section_medicine')
var sliders = container_sliders_window.getElementsByTagName('div')
const view_modal = document.getElementById('view_modal');
const modal_background = document.getElementById('modal_background');
const close_modal = document.getElementById('close_modal')
data_modal = document.querySelectorAll('[data-modal]')
const modal = document.getElementById('modal')
const medicine_informations = document.getElementById('medicine_informations')
const medicine = medicine_informations.parentNode
const medicine_img = document.getElementById('medicine_image')
const medicine_diseases = document.getElementById('medicine_diseases')
const medicine_description = document.getElementById('medicine_description')
const medicine_description_p = document.getElementById('medicine_description_p')
const data_name = document.querySelectorAll('[data-name]')
const section3 = document.getElementById('section3')
const horizontalBar = document.getElementById('section3_horizontalBar')
const description = [data_name[0].innerHTML, data_name[1].innerHTML, data_name[2].innerHTML, data_name[3].innerHTML, data_name[4].innerHTML]

// PARTE DO MODAL }


// PARTE DOS COMENTÁRIOS {



const view_comments = document.getElementsByClassName('comments')[0];
const create_comments = document.getElementsByClassName('comments')[1];
const close_comments = document.getElementById('close_comments');
const comment_informations = document.getElementById('comment_informations')

// PARTE DOS COMENTÁRIOS }


console.log(description[1])

var remover = 0;
counter_menu = 0;
var on = 0;
const animationCSS = 'animation1'
const animationCSS2 = 'animation2'
let positionPorcentPx = 200;
counter_modal = 0;
var counter_description = 0;
var logado = sessionStorage.getItem('N1');


function NotScroll()
{
    if(view_modal.style.display != 'none') 
    {
        body.style.overflowY = 'hidden';
    }
    else if(loading_background.style.display != 'none')
    {
        body.style.overflowY = 'hidden';
    }
}

function animation()
{
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 3.5)

    if((windowTop) > move.offsetTop)
    {
        move.classList.add(animationCSS);
        divButton.classList.add(animationCSS);
    }

    item.forEach(function(element) {
        if((windowTop) > element.offsetTop)
            {
                console.log('simm')
                element.classList.add(animationCSS2);
            }
    })
}


function increase()
{   
    console.log(menu_counter)
    text = document.querySelectorAll('.data-font')

    text.forEach(item => 
    {

        let fontSize_1 = window.getComputedStyle(item).getPropertyValue('font-size');

        fontSize_1 = parseFloat(fontSize_1);

        item.style.fontSize = (fontSize_1 + 5) + 'px'
    })

    var exem;
    var exemResult;
    
    // console.log(sliders[0])
    if(menu_counter == 1)
    {
        exem = parseFloat(window.getComputedStyle(sliders[0]).getPropertyValue('height')) - parseFloat(window.getComputedStyle(document.getElementById('container_sliders')).getPropertyValue('height'))
    }
    else
    {
        exem = parseFloat(window.getComputedStyle(sliders[1]).getPropertyValue('height')) - parseFloat(window.getComputedStyle(document.getElementById('container_sliders')).getPropertyValue('height'))
    }
    exemResult = parseFloat(window.getComputedStyle(document.getElementById('container_sliders')).getPropertyValue('height')) + exem

    document.getElementById('container_sliders').style.setProperty('min-height', `${exemResult}px`)
    document.getElementById('container_sliders').style.setProperty('max-height', `${exemResult}px`)
    // console.log(sliders[4].getElementsByTagName('p')[0].innerText)
    // console.log(sliders[4].getElementsByTagName('p')[0].innerText.length)
}

function decrease()
{
    text = document.querySelectorAll('.data-font')

    text.forEach(item => 
    {
        let fontSize_1 = window.getComputedStyle(item).getPropertyValue('font-size');
    
        fontSize_1 = parseFloat(fontSize_1);

        item.style.fontSize = (fontSize_1 - 5) + 'px'
    })

    var exem;

    if(menu_counter == 1)
    {
        exem = parseFloat(window.getComputedStyle(sliders[0]).getPropertyValue('height'))
    }
    else
    {
        exem = parseFloat(window.getComputedStyle(sliders[1]).getPropertyValue('height'))
    }

    console.log(exem)
    console.log(parseFloat(window.getComputedStyle(document.getElementById('container_sliders')).getPropertyValue('max-height')))

    document.getElementById('container_sliders').style.setProperty('max-height', `${exem}px`)
    document.getElementById('container_sliders').style.setProperty('min-height', `${exem}px`)
}

function normal()
{
    text = document.querySelectorAll('.data-font')

    text[0].style.fontSize = fonts[0]
    text[1].style.fontSize = fonts[1]

    document.getElementById('container_sliders').style.setProperty('min-height', `${content_slidersSize}px`)

    for(i = 0; i < text.length; i++)
    {
        text[i].style.setProperty('font-size', `${fonts[0]}`)
    }

    // console.log(parseFloat(window.getComputedStyle(sliders[0]).getPropertyValue('height')))
}

function contrastEffect()
{
    const contraste = 'contraste';
    const contraste_image = 'contraste_image'
    const contraste_hr = 'contraste_hr';
    const contraste_darkGray = 'contraste_darkGray';
    const contraste_whiteGray = 'contraste_whiteGray';
    const medicine_list_li = document.querySelectorAll('.medicine_list_li')
    const itemMenu = document.getElementsByTagName('li');
    const backgrounds = document.querySelectorAll('[data-backgrounds]');
    const backgrounds_darkGray = document.querySelectorAll('[data-backgrounds_darkGray]');
    const backgrounds_hr = document.querySelectorAll('[data-backgroundsHr]');
    const backgroundImage = document.querySelectorAll('[data-backgroundImage]')
    const backgrounds_whiteGray = document.querySelectorAll('[data-backgrounds_whiteGray]');
    const pages_a = document.getElementsByClassName('pages_a');
    data_modal = document.querySelectorAll('[data-modal]')

    console.log(backgrounds)

    if(on == 0)
        {
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

            backgrounds_hr.forEach(items =>
            {
                items.classList.add(contraste_hr);
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
                
            medicine_list_li.forEach(item => 
            {
                item.style.setProperty('color', 'black')
            })

            backgrounds[3].style.setProperty('border-bottom', '2px solid yellow')
            footer.style.setProperty('border-top', '2px solid yellow')
            medicine_informations.style.setProperty('color', 'black')
            medicine_image.style.setProperty('border', '2px solid black')

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

        for(i = 0; i < pages_a.length; i++)
        {
            pages_a[i].classList.remove(contraste)
        }
    
        backgrounds.forEach(items =>
        {
            items.classList.remove(contraste);
        })

        backgrounds_hr.forEach(items =>
        {
            items.classList.remove(contraste_hr);
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
          
        medicine_list_li.forEach(item => 
        {
            item.style.setProperty('color', 'none')
        })

        backgrounds[3].style.setProperty('border-bottom', '2px solid black')
        footer.style.setProperty('border-top', 'none')
        medicine_informations.style.setProperty('color', 'none')
        medicine_image.style.setProperty('border', '2px solid red')

        // paragraph[0].style.setProperty('color', `${colors[0]}`)

        on = 0;
    }
}


function responsivity()
{
    if(window.innerWidth <= 1100)
    {
        // if(counter_menu == 0)
        // {
            // medicine.insertBefore(medicine_informations, medicine_img)
            medicine.appendChild(medicine_diseases)
            medicine_informations.insertBefore(
                medicine_img, medicine_description
            )
            medicine.classList.add('responsivity1')
            medicine_informations.classList.add('responsivity2')
            console.log(counter_menu  + 'depois')
        // }
    }
    else if(window.innerWidth >= 1100)
    {
        // if(counter_menu == 0)
        // {
            medicine.insertBefore(medicine_img, medicine_informations)
            medicine_informations.appendChild(medicine_diseases)
            medicine.classList.remove('responsivity1')
            medicine_informations.classList.remove('responsivity2')
            counter_menu = 0;
        // }
    }

    if(window.innerWidth <= 600)
    {
        data_name[0].innerHTML = 'Dipirona';
        data_name[1].innerHTML = 'Paracetamol';
        data_name[2].innerHTML = 'Ibuprofeno';
        data_name[3].innerHTML = 'Dorflex';
        data_name[4].innerHTML = 'Novalgina';
        counter_description = 1;
    }
    else
    {
        for(i = 0; i < data_name.length; i++)
        {
            data_name[i].innerHTML = description[i]
        }
        counter_description = 0;
    }

    if(window.innerWidth <= 500)
    {
        perfil.style.setProperty('display', 'none')
        menuButton.style.setProperty('display', 'block')
        menuSide.style.setProperty('display', 'flex')

        horizontalBar.appendChild(document.getElementById('container_sliders'))
        container_sliders_window.style.setProperty('left', '0')
        positionPorcentPx = 0;
        view_comments.innerHTML = 'Visualizar <span class="material-symbols-outlined">comment</span>'
        create_comments.innerHTML = 'Criar <span class="material-symbols-outlined">comment</span>'
    
        footer_first_ul.style.setProperty('display', 'none')
        footer_second_ul.style.setProperty('display', 'none')
        footer_third_ul.style.setProperty('display', 'none')
    }
    else
    {
        perfil.style.setProperty('display', 'block')
        menuButton.style.setProperty('display', 'none')
        menuSide.style.setProperty('display', 'none')

        section3.insertBefore(document.getElementById('container_sliders'), arrows[0])

        view_comments.innerHTML = 'Visualizar comentários'
        create_comments.innerHTML = 'Criar comentários'

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
    console.log(counter_menu)
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

function nextSlider()
{

    if(positionPorcentPx >= 400)
    {
        positionPorcentPx = positionPorcentPx;
    }
    else
    {
        positionPorcentPx = positionPorcentPx + 100;
    }
    // container_sliders.style.setProperty('left', '30%')
    container_sliders_window.style.setProperty('left', `calc(-${positionPorcentPx + '%'} - ${positionPorcentPx + 'px'})`)

    console.log('deuc certo')
}

function backSlider()
{
    if(positionPorcentPx <= 0)
    {
        positionPorcentPx = positionPorcentPx;
    }
    else
    {
        positionPorcentPx = positionPorcentPx - 100;
    }
    // container_sliders.style.setProperty('left', '30%')
    container_sliders_window.style.setProperty('left', `calc(-${positionPorcentPx + '%'} - ${positionPorcentPx + 'px'})`)
}

function menu_modal(container_sliders_window)
{
    var ids = container_sliders_window.target.id

    if(container_sliders_window.target.id != 'container_sliders_window')
    {
        container_loading.style.setProperty('display', 'flex');
        NotScroll()

        fetch('https://api-interdisciplinar-nvn0.onrender.com/bd')
        .then(res=>res.json())
        .then((json) =>
        {   
            var ids = container_sliders_window.target.id
            console.log(container_sliders_window.target)

            const url_post = 'https://api-interdisciplinar-nvn0.onrender.com/form'
            comments_box_link[0].setAttribute('id', `${ids}`)
            
            if(!sessionStorage.getItem('Id'))
            {
                comments_box_link[0].setAttribute('href', 'javascript:void(0)')
            }
            else
            {
                comments_box_link[0].setAttribute('href', `${url_post}?id_image=${ids}&id_usuario=${sessionStorage.getItem('Id')}&nome_usuario=${sessionStorage.getItem('Nome')}&sobrenome_usuario=${sessionStorage.getItem('Sobrenome')}`)
            }

            medicine_description_p.innerText = json[ids].mediText
            
            medicine_img.style.backgroundImage = `url(${json[ids].image})`
            const medicine_list1 = document.getElementsByClassName('medicine_list')
            const medicine_list1_li1 = medicine_list1[0].getElementsByTagName('ul')[0].getElementsByTagName('li')
            const medicine_list1_li2 = medicine_list1[1].getElementsByTagName('ul')[0].getElementsByTagName('li')
                    
            medicine_list1_li1[0].innerText = json[ids].indItem0
            medicine_list1_li1[1].innerText = json[ids].indItem1
            medicine_list1_li1[2].innerText = json[ids].indItem2

            medicine_list1_li2[0].innerText = json[ids].nIndItem3
            medicine_list1_li2[1].innerText = json[ids].nIndItem4
            medicine_list1_li2[2].innerText = json[ids].nIndItem5

            view_modal.style.setProperty('display', 'flex')
            modal.classList.add('show_up')
            modal_background.style.setProperty('display', 'block')
            container_loading.style.setProperty('display', 'none');
        })

        if(container_sliders_window.target.tagName != 'DIV')
        {
            container_sliders_window.target.id = container_sliders_window.target.parentNode.id;
        }

        view_comments.setAttribute('id', `${container_sliders_window.target.id}`)
    }
}

function takeComments(view_comments)
{
    const comment_content2 = comment_informations.getElementsByClassName('comment_content')
    
    container_loading.style.setProperty('display', 'flex');
    NotScroll()
    
    ids = view_comments.target.id
    console.log(ids + 'No inicio')

    var indicator = 1

    fetch('https://api-interdisciplinar-nvn0.onrender.com/form/takeData')
    .then(res=>res.json())
    .then((json) =>
    {
        for(i = 0; i < comment_content2.length; i++)
        {
            if(comment_content2[i].id == ids)
            {
                console.log('Os novos comentários não foram adicionados')
                indicator = 1
            }
            else
            {
                console.log('Os novos comentários foram adicionados')
                indicator = 1
            }
        }
        
        if(indicator == 0)
        {
            indicator = 0
        }
        else
        {
            comment_informations.innerHTML = 
                `<div class="comment_image" id="comment_image">
                    <img data-backgroundImage="backgrounds_image" id="comment_image_img" src="" alt="">
                </div>`

            const comment_image_img = document.getElementById('comment_image_img')

            fetch('https://api-interdisciplinar-nvn0.onrender.com/bd')
            .then(res=>res.json())
            .then((json) =>
            {
                comment_image_img.setAttribute('src', `${json[ids].image}`)
                console.log(comment_image_img)
                comment.style.setProperty('z-index', '1')
                
                teste_comment.style.setProperty('display', 'flex')
                comment_background.style.setProperty('display', 'block')
                if(teste_comment.style.display != 'none')
                {
                    body.style.overflowY = 'hidden';
                }

                container_loading.style.setProperty('display', 'none');
            })

            var sla2 = ''
            var sla = json.forEach(item =>
            {
                if(item.comment_id == ids)
                {
                    const comment_content = document.createElement('div')
                    comment_content.classList.add('comment_content')
                    comment_content.setAttribute('id', `${item.comment_id}`)
                    comment_content.innerHTML =
                        `<div id="comment_content_informations" class="comment_content_informations">
                            <p id="comment_content_informations_p" class="data-font">${item.comment_name}</p>
                            <div id="comment_content_informations_numbers" class="comment_content_informations_numbers">
    
                                <div id="identificador" class="identificador data-font">${item.id_user}</div>
                                <div id="data" class="data data-font">${item.comment_date}</div>
    
                            </div>
                        </div>
    
                        <div id="real_comment" class="real_comment">
                            <p class="data-font">${item.comment_text}</p>
                        </div>`
    
                    comment_informations.appendChild(comment_content)
    
                    sla2 = item.comment_text
                }
            })
            text = document.querySelectorAll('.data-font')
        }
    })

    console.log(ids + 'No final')
}

increaseA.addEventListener('click', increase)

decreaseA.addEventListener('click', decrease)

normalA.addEventListener('click', normal)

btnContraste.addEventListener('click', contrastEffect)

menuButton.addEventListener('click', menuBar)

arrows[0].addEventListener('click', backSlider)

arrows[1].addEventListener('click', nextSlider)

window.onload = function()
{
    text = document.querySelectorAll('.data-font')

    fonts = [
        text[0].style.fontSize,
        text[1].style.fontSize,
    ]

    content_slidersSize = parseFloat(window.getComputedStyle(document.getElementById('container_sliders')).getPropertyValue('min-height'))

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
    data_modal = document.querySelectorAll('[data-modal]')
})

window.addEventListener('scroll', function()
{
    animation();
})

container_sliders_window.addEventListener('click', menu_modal)

newWindow.addEventListener('click', menu_modal)

close_modal.addEventListener('click', function()
{
    view_modal.style.setProperty('display', 'none')
    modal.classList.remove('show_up')
    modal_background.style.setProperty('display', 'none')
    body.style.overflowY = 'scroll';
})

section_medicine.addEventListener('click', () =>
{
    medicine_search.focus()
})

view_comments.addEventListener('click', (view_comments) =>
{
    if(view_comments.target.id == 'view_comments')
    {
        alert('Você escolheu nenhum remédio ainda')
    }
    else
    {
        takeComments(view_comments)
    }
})

close_comments.addEventListener('click', () => 
{
    comment.style.setProperty('z-index', '-1')
    teste_comment.style.setProperty('display', 'none')
    comment_background.style.setProperty('display', 'none')
    body.style.overflowY = 'scroll';
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

comments_box_link[0].addEventListener('click', function()
{
    if(comments_box_link[0].getAttribute('href') == 'javascript:void(0)')
    {
        if(!sessionStorage.getItem('Id'))
        {
            alert('Faça login para poder fazer um comentário')
        }
        else
        {
            alert('Escolha o remédio que você deseja comentar sobre.')
        }
    }
})

function change(li)
{
    console.log(li.target)
    var alvo = li.target
    const contraste_image = 'contraste_image'

    if(li.target.tagName == 'UL')
    {
        medicine_search.focus()
        alert('Escolha um remédio para ver seus comentários')
    }
    else
    {
        if(li.target.tagName == 'STRONG')
        {
            var father =  li.target.parentNode;
            li.target.id = father.parentNode.id;
        }else if(li.target.tagName != 'DIV')
        {
            li.target.id = li.target.parentNode.id;
            // console.log(li.target)
        }

        var ids = li.target.id
        
        document.getElementById('section_medicine_ul').style.setProperty('display', 'none')
        section_medicine.style.setProperty('box-shadow', 'inset 0px 0px 4px 1px')
        medicine_search.value = ''

        const url_post = 'http://localhost:3000/form'
        comments_box_link[0].setAttribute('id', `${ids}`)

        if(!sessionStorage.getItem('Id'))
        {
            comments_box_link[0].setAttribute('href', 'javascript:void(0)')
        }
        else
        {
            comments_box_link[0].setAttribute('href', `${url_post}?id_image=${ids}&id_usuario=${sessionStorage.getItem('Id')}&nome_usuario=${sessionStorage.getItem('Nome')}&sobrenome_usuario=${sessionStorage.getItem('Sobrenome')}`)
        }

        view_comments.setAttribute('id', `${ids}`)
        console.log(view_comments)

        newWindow.classList.add('container_sliders_window')
        newSlider.setAttribute('id', `${ids}`)

        newSlider.classList.add('slider')
        newWindow.style.setProperty('width', '100%'), newWindow.style.setProperty('gap', '0px'), newWindow.style.setProperty('left', '0')
        newSlider.style.setProperty('width', '100%')

        newText.setAttribute('class', 'slider_p data-font')
        newImg.setAttribute('data-backgroundImage', 'backgrounds_image')

        if(on == 1)
        {
            newImg.classList.add(contraste_image)
        }
        else
        {
            newImg.classList.remove(contraste_image)
        }
        // newImg.classList.add('')
        // newText.classList.add('')

        if(menu_counter == 0)
        {   
            // newWindow.appendChild(newSlider)
            newSlider.appendChild(newImg)
            newSlider.appendChild(newHr)
            newSlider.appendChild(newText)
            document.getElementById('container_sliders').replaceChild(newWindow, container_sliders_window);
            
            sliders = document.getElementById('container_sliders_window2').getElementsByTagName('div')
            
            for(i = 0; i < arrows.length; i++)
            {
                console.log('deu certo')
                arrows[i].style.setProperty('display', 'none')
            }
            menu_counter = 1
        }
    
        fetch('https://api-interdisciplinar-nvn0.onrender.com/bd')
        .then(res=>res.json())
        .then((json) =>
        {
            if(window.innerWidth <= 600)
            {
                newText.innerHTML = json[ids].title
            }
            else
            {
                newText.innerHTML = json[ids].summary + '<span class="material-symbols-outlined plus data-font" data-backgrounds="backgrounds" id="plus_id">add</span>'
            }

            window.addEventListener('resize', () =>
            {
                if(window.innerWidth <= 600)
                {
                    newText.innerHTML = json[ids].title
                }
                else
                {
                    newText.innerHTML = json[ids].summary + '<span class="material-symbols-outlined plus" id="plus_id">add</span>'
                }
            })

            horizontalBar.style.setProperty('overflow-x', 'hidden'), horizontalBar.style.setProperty('justify-content', 'center') 
            
            newImg.src = json[ids].image
            
            if(on == 1)
            {
                const contraste_darkGray = 'contraste_darkGray';
                const contraste = 'contraste';
                newSlider.classList.add(contraste_darkGray)
                
                document.getElementById('plus_id').classList.add('contraste')
            }
        })
    }

    text = document.querySelectorAll('.data-font')
    normal()
}