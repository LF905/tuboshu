window.addEventListener('DOMContentLoaded', () => {
    window.myApi.getGroupMenus().then(config => {
        updateMenu(config.openMenus, 'nav-box');
        updateMenu(config.setMenus, 'set-box');

        const navWrapper = document.getElementById('nav-wrapper');
        navWrapper.addEventListener('click', handleNavItemClick);
        navWrapper.addEventListener('mouseover', handleMouseOverOrOut);
        navWrapper.addEventListener('mouseout', handleMouseOverOrOut);
    });
    window.myApi.autoClick(autoNavItemClick);
    new ScrollHide('#nav-box', {speed: 100,smooth: true});
})

function updateMenu(menu, pid) {
    const navBox = document.getElementById(pid);
    navBox.innerHTML="";
    menu.forEach(item => {
        const navItem = `           
            <div class="nav-item" data-url="${item.url}" data-name="${item.name}" data-tag="${item.tag}">
                <div class="logo">
                    <span><img src="${item.img}" alt="${item.tag}"></span>
                </div>
            </div>
        `;
        navBox.innerHTML += navItem;
    });
}

function handleNavItemClick(event) {
    const isItemClicked = event.target.closest(".nav-item");
    if (!isItemClicked) return;

    const highlightedItems = event.currentTarget.querySelectorAll(".highlighted");
    highlightedItems.forEach(item => item.classList.remove('highlighted'));

    let element = event.target;
    const site = {};
    while (element && element !== event.currentTarget) {
        if (element.classList.contains('nav-item')) {
            element.classList.add('highlighted');
            site.url = element.dataset.url;
            site.name = element.dataset.name;
            break;
        }
        element = element.parentNode;
    }

    if(event.ctrlKey || event.metaKey){
        site.multi = true;
    }else{
        site.multi = false;
    }
    window.myApi.openUrl(site);
}

function handleMouseOverOrOut(event) {
    const isItemClicked = event.target.closest(".nav-item");
    if (!isItemClicked) return;
    if (event.type === 'mouseover') {
        window.myApi.resetTitle(isItemClicked.dataset.tag);
    }else{
        window.myApi.resetTitle("");
    }
}

function autoNavItemClick(data) {
    const navBox = document.getElementById('nav-wrapper');
    const navItems = navBox.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        if (item.dataset.name === data.name) {
            item.classList.add('highlighted');
        } else {
            item.classList.remove('highlighted');
        }
    });
}

