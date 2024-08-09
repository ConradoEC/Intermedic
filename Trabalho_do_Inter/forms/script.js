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
var logado = sessionStorage.getItem('N1');
const sendInformations = document.getElementById('sendInformations');
const account_name = document.getElementById('account_name')

fonts = 
[
    text[0].style.fontSize,
    text[1].style.fontSize,
]

text = document.querySelectorAll('.data-font')

if(window.innerWidth <= 1100)
{
    remover = 1;

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
    const itemMenu = document.getElementsByTagName('li');

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

        backgrounds.forEach(items =>
        {
            items.classList.add(contraste);
        })

        backgrounds[2].style.setProperty('border-bottom', '2px solid yellow')
        footer.style.setProperty('border-top', '2px solid yellow')

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

        backgrounds[2].style.setProperty('border-bottom', '2px solid black')
        footer.style.setProperty('border-top', 'none')

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





increaseA.addEventListener('click', increase)

decreaseA.addEventListener('click', decrease)

normalA.addEventListener('click', normal)

btnContraste.addEventListener('click', contrastEffect)

function mistake()
{
  const urlMistake = new URLSearchParams(window.location.search);
  const algoEstaErrado = urlMistake.get('indice')
  
  if(algoEstaErrado == 'algoEstaErrado')
  {
    statusLogin.innerText = 'Algo está errado'
  }

  const deslogadoMasLogado = sessionStorage.getItem('N1')
  if(deslogadoMasLogado)
  {
      sessionStorage.removeItem('N1')
      sessionStorage.removeItem('Nome')
      sessionStorage.removeItem('Id')
    //   sessionStorage.removeItem('DataNascimento')
    //   sessionStorage.removeItem('Sobrenome')
  }
}

window.onload = function()
{
    mistake()

    logado = sessionStorage.getItem('N1');

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

// console.log(account_id)

sendInformations.addEventListener('click', function()
{
  const account = `${account_name.value}`
  const urlParams = new URLSearchParams(window.location.search)
  const indice = urlParams.get('indice')

    const deslogado = sessionStorage.getItem('N2')
    if(deslogado)
    {
        sessionStorage.removeItem('N2')
        sessionStorage.setItem('N1', 'Logado')
    }
    else
    {
      sessionStorage.setItem('N1', 'Logado')
    }
    
    sessionStorage.setItem('Nome', `${account}`)
    // sessionStorage.setItem('Id', `${obj_id}`)
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



// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.querySelector("form"); // Seleciona o primeiro formulário na página
//     const nome = document.querySelector('input[placeholder="Nome"]');
//     const email = document.querySelector('input[placeholder="E-mail"]');
//     const senha = document.querySelector('input[placeholder="Senha"]');
//     const senhaConfirmation = document.querySelector('input[placeholder="Confirmação de Senha"]'); // Adicionei a seleção da confirmação de senha
  
    // form.addEventListener("submit", (e) => {
    //   e.preventDefault();
    //   checkInputs();
    // });
  
    // function checkInputs() {
    //   const nomeValue = nome.value;
    //   const emailValue = email.value;
    //   const senhaValue = senha.value;
    //   const senhaConfirmationValue = senhaConfirmation.value; 
  
    //   if (nomeValue === "") {
    //     setErrorFor(nome, "O nome de usuário é obrigatório.");
    //   } else {
    //     setSuccessFor(nome);
    //   }
  
    //   if (emailValue === "") {
    //     setErrorFor(email, "O E-mail é obrigatório.");
    //   } else if (!checkEmail(emailValue)) {
    //     setErrorFor(email, "Por favor, insira um E-mail válido.");
    //   } else {
    //     setSuccessFor(email);
    //   }
  
    //   if (senhaValue === "") {
    //     setErrorFor(senha, "A senha é obrigatória.");
    //   } else if (senhaValue.length < 7) {
    //     setErrorFor(senha, "A senha precisa ter pelo menos 7 caracteres.");
    //   } else {
    //     setSuccessFor(senha);
    //   }
  
    //   if (senhaConfirmationValue === "") {
    //     setErrorFor(senhaConfirmation, "A confirmação de senha é obrigatória.");
    //   } else if (senhaConfirmationValue !== senhaValue) {
    //     setErrorFor(senhaConfirmation, "As senhas não conferem.");
    //   } else {
    //     setSuccessFor(senhaConfirmation);
    //   }
  
    //   const formControls = form.querySelectorAll(".input-box");
  
    //   const formIsValid = [...formControls].every((formControl) => {
    //     return formControl.classList.contains("success");
    //   });
  
    //   if (formIsValid) {
    //     console.log("O formulário está 100% válido!");
    //   }
    // }
  
//     function setErrorFor(input, message) {
//       const formControl = input.parentElement;
//       const small = formControl.querySelector("small");
  
//       // Adiciona a mensagem de erro
//       small.innerText = message;
  
//       // Adiciona a classe de erro
//       formControl.classList.remove("success");
//       formControl.classList.add("error");
//     }
  
//     function setSuccessFor(input) {
//       const formControl = input.parentElement;
  
//       // Adicionar a classe de sucesso
//       formControl.classList.remove("error");
//       formControl.classList.add("success");
//     }
  
//     function checkEmail(email) {
//       return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
//     }
// });