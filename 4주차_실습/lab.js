const booklist = [
    {
      id : 1,
      title : "불변의 법칙",
      img : "https://image.yes24.com/goods/124999476/L",
      price : 22500,
      author : "모건 하우절",
    },
    {
      id : 2,
      title : "나는 읽고 쓰고 버린다 ",
      img : "https://image.yes24.com/goods/126010792/L",
      price : 15000,
      author : "손웅정",
    },
    {
      id : 3,
      title : "빨모쌤의 라이브 영어회화",
      img : "https://image.yes24.com/goods/125992096/L",
      price : 19800,
      author : "신용하",
    },
    {
      id : 4,
      title : "일류의 조건",
      img : "https://image.yes24.com/goods/125491624/L",
      price : 17820,
      author : "사이토 다카시",
    },
    {
      id : 5,
      title : "삼체 1~3",
      img : "https://image.yes24.com/goods/90926731/L",
      price : 60300,
      author : "류츠신",
    }]

const container = document.querySelector(".container")
const book= document.createElement("div")
const author= document.createElement("div")
const price= document.createElement("div")

book.className="book"
author.className="author"
price.className="price"

book.innerText="title" 
author.innerText="author"
price.innerText="price"

container.append(book)
container.append(author)
container.append(price)


for(prop in booklist){
    document.write()

}
    




