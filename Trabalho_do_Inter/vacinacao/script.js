// PARTE QUE FOI COPIADA {

const increaseA = document.getElementById('increaseSize');
const normalA = document.getElementById('normalSize');
const decreaseA = document.getElementById('decreaseSize');
const btnContraste = document.getElementById('btnContraste');
const background_yellow = document.querySelectorAll('[data-background_yellow]');
const menu = document.getElementById('menu')
const perfil = document.getElementById('perfil')
const menuButton = document.getElementById('menu_button')
const menuSide_back = document.getElementById('menuSide_back')
const menuSide = document.getElementById('menuSide')
const items = document.querySelectorAll('.hidden')
const body = document.querySelector('body')

let text = document.querySelectorAll('.data-font');

var remover = 0;
counter_menu = 0;
var on = 0;
var logado = sessionStorage.getItem('N1');
const userDate = new Date(sessionStorage.getItem('DataNascimento'))
const nowDate = new Date()
const userYear = userDate.getFullYear()
const nowYear = nowDate.getFullYear()
const userAge = nowYear - userYear
var valorX = 0;
var valorY = 0;
var text2

// PARTE QUE FOI COPIADA }


function NotScroll()
{
    if(vaccination_card.style.display != 'none') 
    {
        body.style.overflowY = 'hidden';
    }
    else
    {
        body.style.overflowY = 'scroll';
    }
}



// PARTE PRA CRIAR OS CARDS DA VACINA {

const vaccination_card_close = document.getElementsByClassName('vaccination_card_close')[0]
var ids;
// var json

if(logado)
{
    const urlId = sessionStorage.getItem('Id')

    fetch('http://localhost:3000/vaccine')
    .then(res => res.json())
    .then((json) =>
    {
        console.log(json)
        json.forEach(item =>
            {
                if(item.id_vaccines_account == urlId)
                {
                    switch (item.max_dose_vaccine)
                    {
                        case 1:
                            break
                        case item.dose_vaccine:
                            break
                        default:
                            const data = new Date()
                            const day = String(data.getDate()).padStart(2,'0')
                            const month = String(data.getMonth() + 1).padStart(2,'0')
                            const year = data.getFullYear()
                            const dataAtual = `${year}-${month}-${day}`

                            const stringDataPrevista = new Date(item.date_vaccine)
                            const newDataPrevista = `${stringDataPrevista.getFullYear()}-${String(stringDataPrevista.getMonth() + 2).padStart(2,'0')}-${String(stringDataPrevista.getDate() + 1).padStart(2,'0')}`

                            switch (dataAtual)
                            {
                                case newDataPrevista:
                                    item.date_vaccine = ''
                                    break
                                default:
                            }

                            if(dataAtual > newDataPrevista)
                            {
                                item.date_vaccine = ''
                            }
                    }

                    switch (item.dose_vaccine)
                    {
                        case item.max_dose_vaccine:
                            switch (item.reinforc_vaccine)
                            {
                                case 0:
                                    break
                                default:
                                    if(item.counter_reinforc_vaccine != 1)
                                    {
                                        const data = new Date()
                                        const day = String(data.getDate()).padStart(2,'0')
                                        const month = String(data.getMonth() + 1).padStart(2,'0')
                                        const year = data.getFullYear()
                                        const dataAtual = `${year}-${month}-${day}`
                        
                                        const stringDataPrevista = new Date(item.date_vaccine)
                                        const newDataPrevista = `${stringDataPrevista.getFullYear()}-${String(stringDataPrevista.getMonth() + 3).padStart(2,'0')}-${String(stringDataPrevista.getDate() + 1).padStart(2,'0')}`

                                        switch (dataAtual)
                                        {
                                            case newDataPrevista:
                                                item.date_vaccine = ''
                                                break
                                            default:
                                        }

                                        if(dataAtual > newDataPrevista)
                                        {
                                            item.date_vaccine = ''
                                        }
                                    }
                            }
                            break
                        default:
                    }

                    switch (item.everyYear_vaccine)
                    {
                        case 0:
                            break
                        default:
                            const data = new Date()
                            const day = String(data.getDate()).padStart(2,'0')
                            const month = String(data.getMonth() + 1).padStart(2,'0')
                            const year = data.getFullYear()
                            const dataAtual = `${year}-${month}-${day}`

                            const stringDataPrevista = new Date(item.date_vaccine)
                            const newDataPrevista = `${stringDataPrevista.getFullYear() + 1}-${String(stringDataPrevista.getMonth() + 1).padStart(2,'0')}-${String(stringDataPrevista.getDate() + 1).padStart(2,'0')}`

                            // COLOCAR UMA DATA ESPECÍFICA, PORQUE A CAMPANHA É SEMPRE NO MESMO PERÍODO

                            switch (dataAtual)
                            {
                                case newDataPrevista:
                                    item.date_vaccine = ''
                                    break
                                default:
                            }

                            if(dataAtual > newDataPrevista)
                            {
                                item.date_vaccine = ''
                            }
                    }

                    if(item.age_vaccine > userAge)
                    {
                        console.log('Não vai ser gerado')
                    }
                    else
                    {
                        if(item.date_vaccine == '')
                        {
                            const div_grade = document.createElement('div')
                            div_grade.setAttribute('class', 'vaccination_grade_box')
                            div_grade.setAttribute('id', `${item.id_vaccine}`)
                            div_grade.setAttribute('data-backgrounds_darkGray', `backgrounds_darkGray`)
                            div_grade.innerHTML = `
                                <p class="vaccination_grade_box_p data-font">${item.name_vaccine}</p>
                            `;
                            vaccination_grade.appendChild(div_grade)
                            text = document.querySelectorAll('.data-font');
                        }
                        else
                        {
                            var newReinforc;
                            var neweveryYear;

                            switch (item.reinforc_vaccine)
                            {
                                case 0:
                                    newReinforc = 'Não possui'
                                    break
                                case 1:
                                    switch (item.counter_reinforc_vaccine)
                                    {
                                        case 1:
                                            newReinforc = 'Tomou'
                                            break
                                        default:
                                            newReinforc = 'Não tomou'
                                    }
                                    break
                                default:
                                    console.log('Algo está errado')
                            }

                            switch (item.everyYear_vaccine)
                            {
                                case 0:
                                    neweveryYear = 'Não possui'
                                    break
                                case 1:
                                    neweveryYear = 'Possui'
                                    break
                                default:
                                    console.log('Algo está errado')
                            }

                            const div_vaccine = document.createElement('div')
                            div_vaccine.setAttribute('class', 'vaccine_card')
                            div_vaccine.setAttribute('data-backgrounds_darkGray', 'backgrounds_darkGray')
                            div_vaccine.innerHTML = `
                                <label for="vaccine_card_box1" class="vaccine_card_box_label data-font" data-backgrounds_darkGray="backgrounds_darkGray">NOME</label>
                                <input type="text" value="${item.name_vaccine}" id="vaccine_card_box1" class="vaccine_card_box data-font" disabled>
                                <label for="vaccine_card_box2" class="vaccine_card_box_label data-font" data-backgrounds_darkGray="backgrounds_darkGray">DATA DE VACINAÇÃO</label>
                                <input type="text" value="${item.date_vaccine}" id="vaccine_card_box2" class="vaccine_card_box data-font" disabled>
                                <label for="vaccine_card_box3" class="vaccine_card_box_label data-font"  data-backgrounds_darkGray="backgrounds_darkGray">${item.max_dose_vaccine} DOSE/DOSES</label>
                                <input type="text" value="${item.dose_vaccine}" id="vaccine_card_box3" class="vaccine_card_box data-font" disabled>
                                <label for="vaccine_card_box4" class="vaccine_card_box_label data-font" data-backgrounds_darkGray="backgrounds_darkGray">REFORÇO</label>
                                <input type="text" value="${newReinforc}" id="vaccine_card_box4" class="vaccine_card_box data-font" disabled>
                                <label for="vaccine_card_box5" class="vaccine_card_box_label data-font" data-backgrounds_darkGray="backgrounds_darkGray">ANUAL</label>
                                <input type="text" value="${neweveryYear}" id="vaccine_card_box5" class="vaccine_card_box data-font" disabled>
                            `;
                            vaccination_card_view.appendChild(div_vaccine)
                            // text = document.querySelectorAll('.data-font')
                        }
                    }
                }
            })
        
        if(vaccination_grade.innerHTML == '')
        {
            vaccination_grade.innerHTML = '<p class="grade_alert data-font">Não há nenhuma vacina em espera, por enquanto.</p>'
        }

        if(vaccine_card.length > 3)
        {
            vaccination_card_horizontalBar.style.setProperty('display', 'block')
        }

        const vaccination_grade_box = document.getElementsByClassName('vaccination_grade_box')

        function updateGrade()
        {
            console.log(json[ids - 1].counter_reinforc_vaccine)
            console.log('Valor da dose' + json[ids - 1].dose_vaccine)
            var newReinforc;
            var newCounterReinforc = json[ids - 1].counter_reinforc_vaccine
            var doseVaccine_forReinforc = json[ids - 1].dose_vaccine
            var neweveryYear;
            var newMax_dose_vaccine;

            if(json[ids - 1].dose_vaccine < json[ids - 1].max_dose_vaccine)
            {
                newMax_dose_vaccine = json[ids - 1].dose_vaccine + 1
            }
            else
            {
                newMax_dose_vaccine = json[ids - 1].dose_vaccine
            }

            switch (json[ids - 1].reinforc_vaccine)
            {
                case 0:
                    newReinforc = 'Não possui'
                    break
                case 1:
                    if(doseVaccine_forReinforc == json[ids - 1].max_dose_vaccine)
                    {
                        if(newCounterReinforc < 1)
                        {
                            newCounterReinforc = newCounterReinforc + 1
                        }
                    }
                    else
                    {
                        newCounterReinforc = newCounterReinforc
                    }

                    switch (newCounterReinforc)
                        {
                            case 1:
                                newReinforc = 'Tomou'
                                break
                            default:
                                newReinforc = 'Não tomou'
                        }
                    break
                default:
                    console.log('Algo está errado')
            }
            
            switch (json[ids - 1].everyYear_vaccine)
            {
                case 0:
                    neweveryYear = 'Não possui'
                    break
                case 1:
                    neweveryYear = 'Possui'
                    break
                default:
                    console.log('Algo está errado')
            }
            console.log(newCounterReinforc)

            const form_vaccine = document.createElement('form')
            form_vaccine.setAttribute('class', 'vaccine_card_update'), form_vaccine.setAttribute('action', 'http://localhost:3000/vaccine'), form_vaccine.setAttribute('method', 'POST'), form_vaccine.setAttribute('data-backgrounds_darkGray', 'backgrounds_darkGray')
            form_vaccine.innerHTML = `
                <label for="vaccine_card_box1" class="vaccine_card_box_label data-font2" data-backgrounds_darkGray="backgrounds_darkGray">NOME</label>    
                <input type="text" value="${json[ids - 1].name_vaccine}" class="vaccine_card_box_update data-font2" disabled>
                <label for="vaccine_card_box2" class="vaccine_card_box_label data-font2" data-backgrounds_darkGray="backgrounds_darkGray">DATA DE VACINAÇÃO</label>
                <input type="date" value="" class="vaccine_card_box_update data-font2" name="vaccine_date" id="vaccine_date" placeholder="Insira a data da consulta" required>
                <label for="vaccine_card_box3" class="vaccine_card_box_label data-font2" data-backgrounds_darkGray="backgrounds_darkGray">${json[ids - 1].max_dose_vaccine} DOSE/DOSES</label>
                <input type="text" name="vaccine_newMax_dose" id="vaccine_newMax_dose" class="vaccine_card_box_update data-font2" readonly>
                <label for="vaccine_card_box4" class="vaccine_card_box_label data-font2" data-backgrounds_darkGray="backgrounds_darkGray">REFORÇO</label>
                <input type="text" value="${newReinforc}" class="vaccine_card_box_update data-font2" disabled>
                <label for="vaccine_card_box5" class="vaccine_card_box_label data-font2" data-backgrounds_darkGray="backgrounds_darkGray">ANUAL</label>
                <input type="text" value="${neweveryYear}" class="vaccine_card_box_update data-font2" disabled>
                <input name="vaccine_id" id="vaccine_id" class="vaccine_card_box_update disable data-font2" readonly></input>
                <input name="vaccine_reinforc" id="vaccine_reinforc" class="vaccine_card_box_update disable data-font2" readonly></input>
                <input type="submit" value="Enviar" onclick="redirecionar()" class="vaccine_card_box vaccine_card_box_submit data-font2" data-backgrounds_whiteGray="backgrounds_whiteGray">
            `;
            
            vaccination_card.appendChild(form_vaccine)
            vaccine_id.value = ids
            vaccine_newMax_dose = document.getElementById('vaccine_newMax_dose')
            vaccine_newMax_dose.value = newMax_dose_vaccine
            vaccine_reinforc = document.getElementById('vaccine_reinforc')
            vaccine_reinforc.value = newCounterReinforc

            console.log('Valor da dose' + json[ids - 1].dose_vaccine)

            if(on == 1)
            {
                const backgrounds_darkGray = document.querySelectorAll('[data-backgrounds_darkGray]');
                const backgrounds_whiteGray = document.querySelectorAll('[data-backgrounds_whiteGray]');
                const contraste_darkGray = 'contraste_darkGray';
                const contraste_whiteGray = 'contraste_whiteGray';

                backgrounds_whiteGray.forEach(items =>
                {
                    items.classList.add(contraste_whiteGray);
                })
            
                backgrounds_darkGray.forEach(items =>
                {
                    items.classList.add(contraste_darkGray);
                })
            }

            decrease2()
        }

        text = document.querySelectorAll('.data-font');

        vaccination_grade.addEventListener('click', function(vaccination_grade)
        {
            // console.log(vaccination_grade.target.className)

            switch (vaccination_grade.target.className)
            {
                case 'vaccination_grade':
                    if(window.innerWidth >= 500)
                    {
                        alert('Escolha a vacina que você queira atualizar.')
                    }
                    break
                case 'vaccination_grade contraste_whiteGray':
                    if(window.innerWidth >= 500)
                    {
                        alert('Escolha a vacina que você queira atualizar.')
                    }
                    break
                case 'vaccination_grade_box_p data-font':
                    ids = vaccination_grade.target.parentNode.id
                    vaccination_card.style.setProperty('display', 'flex')
                    NotScroll()
                    updateGrade()
                    break
                default:
                    ids = vaccination_grade.target.id
                    vaccination_card.style.setProperty('display', 'flex')
                    NotScroll()
                    updateGrade()
            }
        })
    })
}
else
{
    vaccination_card_view.innerHTML = '<p class="notLogin_alert data-font">Faça login para ter acesso a sua carteira de vacinação digital!</p>'
    
    text = document.querySelectorAll('.data-font');
}


// PARTE PRA CRIAR OS CARDS DA VACINA }



const radio_btns = document.getElementsByName('radio_btn')
const inputs = document.querySelectorAll('.vaccine_card_box')
const vaccine_card = document.getElementsByClassName('vaccine_card')
const vaccination_selector = document.getElementById('vaccination_selector')
const vaccination_card_horizontalBar = document.querySelectorAll('.vaccination_card_horizontalBar')[0]

countLeft = 0;


function increase2()
{
    text2 = document.querySelectorAll('.data-font2')
    text2.forEach(item => 
    {
        let fontSize_1 = window.getComputedStyle(item).getPropertyValue('font-size');
    
        fontSize_1 = parseFloat(fontSize_1);
    
        item.style.fontSize = (fontSize_1 + (5 * valorX)) + 'px'
    })
}

function decrease2()
{
    text2 = document.querySelectorAll('.data-font2')
    text2.forEach(item => 
    {
        let fontSize_1 = window.getComputedStyle(item).getPropertyValue('font-size');
        fontSize_1 = parseFloat(fontSize_1);
        
        if(valorY == 0)
        {
            item.style.fontSize == '16px'
        }
            
        item.style.fontSize = (fontSize_1 - (5 * valorY)) + 'px'

        console.log((fontSize_1 - (5 * valorY)))
    })

    console.log(valorY)
}

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

    valorX++
    valorY--
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
    
    valorX--
    valorY++
}



function normal()
{
    text[0].style.fontSize = fonts[0]
    text[1].style.fontSize = fonts[1]

    for(i = 0; i < text.length; i++)
    {
        text[i].style.setProperty('font-size', `${fonts[0]}`)
    }
    
    valorX = 0
    valorY = 0
}



function contrastEffect()
{
    const contraste = 'contraste';
    const contraste_image = 'contraste_image'
    const contraste_input = 'contraste_input';
    const contraste_darkGray = 'contraste_darkGray';
    const contraste_whiteGray = 'contraste_whiteGray';
    const itemMenu = document.getElementsByTagName('li');
    const backgrounds = document.querySelectorAll('[data-backgrounds]');
    const backgroundImage = document.querySelectorAll('[data-backgroundImage]')
    const backgrounds_darkGray = document.querySelectorAll('[data-backgrounds_darkGray]');
    const backgrounds_whiteGray = document.querySelectorAll('[data-backgrounds_whiteGray]');
    const img_border = document.getElementsByClassName('img_border')
    const pages_a = document.getElementsByClassName('pages_a')

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

        background_yellow.forEach(items =>
        {
            items.classList.add(contraste_input);
        })

        backgrounds_whiteGray.forEach(items =>
        {
            items.classList.add(contraste_whiteGray);
        })

        backgrounds_darkGray.forEach(items =>
        {
            items.classList.add(contraste_darkGray);
        })
        
        backgroundImage.forEach(items =>
        {
            items.classList.add(contraste_image);
        })
    
        backgrounds[3].style.setProperty('border-bottom', '2px solid yellow')
        footer.style.setProperty('border-top', '2px solid yellow')
        titles_p_link.style.setProperty('color', 'yellow')

        on = 1;

        for(i = 0; i < img_border.length; i++)
        {
            img_border[i].style.setProperty('border', '2px solid yellow')
        }

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

        background_yellow.forEach(items =>
        {
            items.classList.remove(contraste_input);
        })

        backgrounds_whiteGray.forEach(items =>
        {
            items.classList.remove(contraste_whiteGray);
        })

        backgrounds_darkGray.forEach(items =>
        {
            items.classList.remove(contraste_darkGray);
        })
        
        backgroundImage.forEach(items =>
        {
            items.classList.remove(contraste_image);
        })
    
        backgrounds[3].style.setProperty('border-bottom', '2px solid black')
        footer.style.setProperty('border-top', 'none')
        titles_p_link.style.setProperty('color', 'rgb(85,26,139)')

        for(i = 0; i < img_border.length; i++)
        {
            img_border[i].style.setProperty('border', '2px solid rgb(53, 204, 217)')
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

        document.getElementsByClassName('img_border')[1].src = 'data:image/webp;base64,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'
        // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJu2fOwYWG4WoctJIfxVb9qbrnxYbvWKhYfg&usqp=CAU'
    
        footer_first_ul.style.setProperty('display', 'none')
        footer_second_ul.style.setProperty('display', 'none')
        footer_third_ul.style.setProperty('display', 'none')
    }
    else
    {
        perfil.style.setProperty('display', 'block')
        menuButton.style.setProperty('display', 'none')
        document.getElementsByClassName('img_border')[1].src = 'https://i.im.ge/2023/08/19/m2MOhK.image.png'

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

function moveLetf(manual_navigation)
{
    if(manual_navigation.target.id == 'radio_btn1')
    {
        slider_container.style.setProperty('left', '0%')
        countLeft = 0
    }
    else if(manual_navigation.target.id == 'radio_btn2')
    {
        slider_container.style.setProperty('left', '-100%')
        countLeft = 1
    }
    else if(manual_navigation.target.id == 'radio_btn3')
    {
        slider_container.style.setProperty('left', '-200%')
        countLeft = 2
    }
    else if(manual_navigation.target.id == 'radio_btn4')
    {
        slider_container.style.setProperty('left', '-300%')
        countLeft = 3
    }
    else if(manual_navigation.target.id == 'radio_btn5')
    {
        slider_container.style.setProperty('left', '-400%')
        countLeft = 4
    }
}

function redirecionar()
{
    if(vaccine_date.value == '')
    {

    }
    else
    {
       setTimeout((() =>
        {
            // COLOCAR O LINK DA MESMA PAGINA
            window.location = 'http://localhost/Trabalho_do_inter/Vacinacao/index.html'
        }), 150) 
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

    inputs.forEach(itens =>
    {
        itens.disabled
    })

    if(logado)
    {
        perfil.innerText = 'person'
        perfil.parentNode.href = 'http://localhost/Trabalho_do_inter/forms/logout.php'
        Login.innerText = 'Bem vindo, ' + sessionStorage.getItem('Nome') + '!'
        menuSide_span.innerText = sessionStorage.getItem('Nome') + ' ' + sessionStorage.getItem('Sobrenome')
        menuSide_li_login_or_logout.innerText = 'Logout'
        menuSide_li_login_or_logout.parentNode.href = 'http://localhost/Trabalho_do_inter/forms/logout.php'
        menuSide_li_login_or_logout_text.innerText = 'Logout'
        faixaEtaria.innerText = userAge
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

manual_navigation.addEventListener('click', moveLetf)

vaccination_selector.addEventListener('input', function()
{
    for(i = 0; i < vaccine_card.length; i++)
    {
        const vaccine_card_max_vaccine = vaccine_card[i].getElementsByTagName('label')[2].innerText[0]
        console.log(vaccine_card_max_vaccine)

        switch(vaccination_selector.value)
        {
            case 'Dose':
                if(vaccine_card_max_vaccine != '1')
                {
                    vaccine_card[i].style.setProperty('display', 'none')
                }
                else
                {
                    vaccine_card[i].style.setProperty('display', 'flex')
                }
            break
            case 'Doses':
                if(vaccine_card_max_vaccine == '1')
                {
                    vaccine_card[i].style.setProperty('display', 'none')
                }
                else
                {
                    vaccine_card[i].style.setProperty('display', 'flex')
                }
            break
            case 'Reforço':
                if(vaccine_card[i].querySelector('#vaccine_card_box4').value == 'Não possui')
                {
                    vaccine_card[i].style.setProperty('display', 'none')
                }
                else
                {
                    vaccine_card[i].style.setProperty('display', 'flex')
                }
            break
            case 'Anual':
                if(vaccine_card[i].querySelector('#vaccine_card_box5').value == 'Não possui')
                {
                    vaccine_card[i].style.setProperty('display', 'none')
                }
                else
                {
                    vaccine_card[i].style.setProperty('display', 'flex')
                }
            break
            default:
                vaccine_card[i].style.setProperty('display', 'flex')
        }
    }
})

vaccination_card_close.addEventListener('click', function()
{
    vaccination_card.style.setProperty('display', 'none')
    NotScroll()
    const vaccine_card_update = vaccination_card.getElementsByClassName('vaccine_card_update')[0]
    vaccination_card.removeChild(vaccine_card_update)
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

var timer = setInterval( function()
{
    if(countLeft > 3)
    {
        countLeft = 0;
    }
    else
    {
        countLeft++
    }
    document.getElementById('radio_btn' + (countLeft + 1)).checked = true
    // var testando = document.getElementById('radio_btn' + (countLeft + 1))
    // testando.checked = true
    // if(testando.id == 'radio_btn' + (countLeft + 1))
    // {
    //     document.getElementById('radio_label' + (countLeft + 1)).style.setProperty('background-color', 'white')
    //     document.getElementById('radio_label' + (countLeft)).style.setProperty('background-color', 'transparent')
    // }
    var leftValue = (-100 * countLeft);
    slider_container.style.setProperty('left', `${leftValue}%`)
}, 6000)