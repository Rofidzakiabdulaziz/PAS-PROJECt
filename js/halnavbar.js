async function navbar(){
    const nav = document.getElementById('headerNav')
    nav.classList.add('d-flex', 'justify-content-between', 'align-items-center')

    
    
    const contentLogo = document.createElement('div')
    contentLogo.classList.add('mx-4')
    const headerLogo = document.createElement('img')
    headerLogo.src = 'https://alkademi-development.github.io/cdn/static/assets/img/logos/smkcoding-dark.webp'
    headerLogo.style.cursor = 'pointer'
    
    const headerUl = document.createElement('ul')
    headerUl.classList.add('d-flex', 'mx-4', 'my-2', 'align-items-center')
    headerUl.style.gap = '30px'
    
    nav.appendChild(contentLogo)
    nav.appendChild(headerUl)
    contentLogo.appendChild(headerLogo)
    
    const menuBar = [`<i class='fa-solid fa-magnifying-glass'></i>`, `Home`, 'Class', 'Contact', 'Sign in', `<i class='fa-solid fa-bars'></i>`]
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
           
    
        } else {
            headerLi.classList.add('d-none', 'd-sm-none', 'd-md-block')
            headerLi.style.fontSize = '18px'
            headerLi.textContent += nameMenu
    
        }
    
        headerUl.appendChild(headerLi)
    })
    
    
}


