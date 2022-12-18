const houseMap =  document.querySelector('.houses')

const flatMap = document.querySelector('.flat')
const childMap =   document.querySelector('.housesid')


const houseId = localStorage.getItem('id')
console.log(houseId)
let houseArray = [
    {
        id: 1 ,
        img: '/assets/houses pics/ajah.webp',
        title: '130 million,Magodo Phase 1',
        description: 'A fully Detatched duplex'
    },
    {
        id: 2 ,
        img: '/assets/houses pics/ajah2.jpg',
        title: '200 milion, VI',
        description: 'Mansion duplex'

    },
    {
        id: 3,
        img: '/assets/houses pics/ikeja.jpeg',
        title: '150 Million,Ajah',
        description: 'A Duplex'

    },
    {   id: 4,
        img: '/assets/houses pics/lekki.png',
        title: '90 million, Osapa London ',
        description: 'A half duplex'

    },
    {   id: 5,
        img: '/assets/houses pics/Vi.jpg',
        title: '150 Million, Lekki phase1',
        description: 'A duplex'

    },
    {   id: 6,
        img: '/assets/houses pics/VI2.jpg',
        title: '70 Million, Ajah Badoro',
        description: 'A Mansion Duplex'

    },
]


let flatArray = [
    {
        id: 1 ,
        img: '/assets/house.jpeg',
        title: 'This is another house',
        description: 'this is a description'
    },
    {
        id: 2 ,
        img: '/assets/house.jpeg',
        title: 'This is another house',
        description: 'this is a description'

    },
    {
        id: 3,
        img: '/assets/house.jpeg',
        title: 'This is another house',
        description: 'this is a description'

    },
    {   id: 4,
        img: '/assets/house.jpeg',
        title: 'This is another house',
        description: 'this is a description'

    },
    {   id: 5,
        img: '/assets/house.jpeg',
        title: 'This is another house',
        description: 'this is a description'

    },
    {   id: 6,
        img: '/assets/house.jpeg',
        title: '70 Million, Ajah Badoro',
        description: 'A mansion Duplex'

    }, 
]

// get house id
const oneHouse =(house)=>{
    localStorage.setItem('id' , house)
    console.log(house)
}



houseArray.map((val)=>{

    houseMap.innerHTML += `
         <div class="houses-box"  >
            <img src="${val.img}" alt="">
            <div class="description">
                <h3>${val.title}</h3>
            </div>
            <div class="description-text">
                <p>${val.description}</p>
            </div>
            <a href="./Land/Land.html" >  <button class="signup-btn" onclick="oneHouse(${val.id})" >Read More </button> </a>
        </div>
    `
})





flatArray.map((val)=>{

    flatMap.innerHTML += `
         <div class="houses-box"  >
            <img src="${val.img}" alt="">
            <div class="description">
                <h3>${val.title}</h3>
            </div>
            <div class="description-text">
                <p>${val.description}</p>
            </div>
            <a href="./Land/Land.html"  >  <button class="signup-btn" onclick="oneHouse(${val.id})" >Read More </button> </a>
        </div>
    `
})



houseArray.filter((val)=>{
    return val.id === +houseId
}).map((val)=>{
    childMap.innerHTML += `
    <div class="houses-box" onclick="oneHouse(${val.id})" >
       <img src="" alt="">
       <div class="description">
           <h3>${val.title}</h3>
       </div>
       <div class="description-text">
           <p>${val.description}</p>
       </div>
       <button class="signup-btn"> <a href="./Land/Land.html" >Read More</a> </button>
   </div>

`
})







