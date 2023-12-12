async function navbar(){
    const nav = document.getElementById('headerNav')
    nav.classList.add('d-flex', 'justify-content-between', 'align-items-center')

    
    
    const contentLogo = document.createElement('div')
    contentLogo.classList.add('mx-4')
    // const ahref = document.getElementById('div')
    // ahref.createElement("a")
    const headerLogo = document.createElement('img')
    headerLogo.src = 'img/smkcoding-dark.png'
    headerLogo.style.cursor = 'pointer'
    headerLogo.addEventListener('click', backPage)

    function backPage() {
        window.open('index.html', '_self')
    }
    
    const headerUl = document.createElement('ul')
    headerUl.classList.add('d-flex', 'mx-4', 'my-2', 'align-items-center')
    headerUl.style.gap = '30px'
    
    nav.appendChild(contentLogo)
    nav.appendChild(headerUl)
    contentLogo.appendChild(headerLogo)
    
    const menuBar = [`<i class='fa-solid fa-magnifying-glass'></i>`, `Home`, 'Guru', 'Contact', 'Sign in', `<i class='fa-solid fa-bars'></i>`]




    menuBar.forEach(nameMenu => {
        const headerLi = document.createElement('li')
        headerLi.style.listStyle = 'none'
        headerLi.style.cursor = 'pointer'
    
        if(nameMenu === `<i class='fa-solid fa-magnifying-glass'></i>`) {
            headerLi.innerHTML = nameMenu
            headerLi.setAttribute('onclick', 'openMenu()')
    
        } else if(nameMenu === `<i class='fa-solid fa-bars'></i>`) {
            headerLi.innerHTML = nameMenu
            headerLi.style.fontSize = '30px'
            headerLi.classList.add( 'd-sm-block', 'd-lg-none', 'd-md-none') 
    
        } else if(nameMenu.toLowerCase() === 'sign in') {  
            headerLi.classList.add('btn', 'btn-outline-primary', 'd-none', 'd-sm-none', 'd-md-block')
            headerLi.textContent = nameMenu

        }else if(nameMenu === 'Home'){
            headerLi.classList.add('d-none', 'd-sm-none', 'd-md-block')
            headerLi.style.fontSize = '18px'
            headerLi.textContent += nameMenu
            
            headerLi.addEventListener('click', () => {
                window.open('index.html', '_self')
            })
        }else if(nameMenu === 'Guru') {
            headerLi.classList.add('d-none', 'd-sm-none', 'd-md-block')
            headerLi.style.fontSize = '18px'
            headerLi.textContent += nameMenu
            
            headerLi.addEventListener('click', () => {
                window.open('guru.html', '_self')
            })

        } else {
            headerLi.classList.add('d-none', 'd-sm-none', 'd-md-block')
            headerLi.style.fontSize = '18px'
            headerLi.textContent += nameMenu
    
        }
    
        headerUl.appendChild(headerLi)
    })
    
    
}


