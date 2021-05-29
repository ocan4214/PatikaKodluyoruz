const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
  ];

let buttons = [];
let buttonnames=["All","Korea","Japan","China"]
for(let i=0;i<4;i++)
{
    let button = document.createElement("button");
    button.classList.add("btn-item")
    button.innerHTML=buttonnames[i];
    button.id = buttonnames[i].toLowerCase()+"Button";
    buttons.push(button)
    document.getElementById('filterButtons').insertAdjacentElement('beforeend',button);
}

//document.getElementById("allButton").addEventListener('click',allButton)
//document.getElementById("koreaButton").addEventListener('click',koreaButton)
//document.getElementById("japanButton").addEventListener('click',japanButton)
//document.getElementById("chinaButton").addEventListener('click',chinaButton)
allButton()

document.getElementById("filterButtons").addEventListener('click',function(event){

    let context = document.getElementById("context")
    context.innerHTML="";
    if(event.target.innerHTML=="All")
    {
        let appendElement=allButton()
        appendElement.forEach(item => { context.append(item)})
    }
    else if(event.target.innerHTML=="Korea")
    {
        let appendElement=koreaButton()
        appendElement.forEach(item => { context.append(item)})
    }
    else if(event.target.innerHTML=="Japan")
    {
        let appendElement=japanButton()
        appendElement.forEach(item => { context.append(item)})
    }
    else if(event.target.innerHTML=="China")
    {
        let appendElement=chinaButton()
        appendElement.forEach(item => { context.append(item)})
    }
    else{
        let appendElement=allButton()
        appendElement.forEach(item => { context.append(item)})
    }

})



function createMenuInfo(item)
{
    let menuInfo = document.createElement("div");
    menuInfo.classList.add("menu-info")
    let menuTitle = document.createElement("div");
    menuTitle.classList.add("menu-title")

    menuInfo.append(menuTitle);


    menuTitle.insertAdjacentHTML('afterend',`<h4>${item.title}</h4>`)
    menuTitle.insertAdjacentHTML('afterend',`<h4 class="price">${item.price}</h4>`)

    let menuText = document.createElement("div")
    menuText.classList.add("menu-text");
    menuText.innerHTML=item.desc;
    menuInfo.append(menuText);

    return menuInfo;
}


function parentMenu(item)
{
    let div = document.createElement("div")
    div.classList.add("menu-items", "col-lg-6", "col-sm-12")
    let img = document.createElement("img")
    img.classList.add("photo");
    img.src=item.img;
    img.alt=item.title;
    div.append(img)
    div.append(createMenuInfo(item))
    return div;
}


function allButton()
{
   let list = [];
    menu.forEach(item => {
        list.push(parentMenu(item))
    })
    return list;
}


function koreaButton()
{
    let list = [];
    let koreaMenu = menu.filter(item => item.category=="Korea")
    koreaMenu.forEach(item => {
        list.push(parentMenu(item))
    })
    return list;
}


function japanButton()
{
    let list = [];
    let japanMenu = menu.filter(item => item.category=="Japan")
    japanMenu.forEach(item => {
        list.push(parentMenu(item))
    })
    return list;
}

function chinaButton()
{
    let list = [];
    let chinaMenu = menu.filter(item => item.category=="China")
    chinaMenu.forEach(item => {
        list.push(parentMenu(item))
    })
    return list;
}

