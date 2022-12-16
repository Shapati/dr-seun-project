const parentMap =  document.querySelector('.houses')
const childMap =   document.querySelector('.housesid')


const houseId = localStorage.getItem('id')
console.log(houseId)
let houseArray = [
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
        title: 'This is another house',
        description: 'this is a descriptiasdsdaon'

    },
]

// get house id
const oneHouse =(house)=>{
    localStorage.setItem('id' , house)
    console.log(house)
}



houseArray.map((val)=>{

    parentMap.innerHTML += `
         <div class="houses-box"  >
            <img src="${val.img}" alt="">
            <div class="description">
                <h3>${val.title}</h3>
            </div>
            <div class="description-text">
                <p>${val.description}</p>
            </div>
            <a href="./detail.html" >  <button class="signup-btn" onclick="oneHouse(${val.id})" >Read More </button> </a>
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
       <button class="signup-btn"> <a href="./detail.html" >Read More</a> </button>
   </div>

`
})







