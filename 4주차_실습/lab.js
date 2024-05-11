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
  }
];

const container = document.querySelector(".container");
const cartList = document.getElementById("cart-list");

booklist.forEach(book => {
    // 책 카드를 생성
    const bookDiv = document.createElement("div");
    bookDiv.className = "book";

    // 이미지 요소 생성
    const img = document.createElement("img");
    img.src = book.img;
    img.alt = book.title;
    img.style.width = "100%";  // 이미지 크기 조정
    bookDiv.appendChild(img);

    // 제목 표시
    const title = document.createElement("div");
    title.innerText = book.title;
    title.className = "title";
    bookDiv.appendChild(title);

    // 저자 표시
    const author = document.createElement("div");
    author.innerText = book.author;
    author.className = "author";
    bookDiv.appendChild(author);

    // 가격 표시
    const price = document.createElement("div");
    price.innerText = `${book.price}원`;
    price.className = "price";
    bookDiv.appendChild(price);

    const addToCartButton=document.createElement("button");
    addToCartButton.innerText="장바구니에 추가"
    addToCartButton.className="button";
    addToCartButton.onclick=()=>addToCart(book);
    bookDiv.appendChild(addToCartButton);

   
    container.appendChild(bookDiv);
});


function addToCart(book){
  const cartItem=document.createElement("li");
  cartItem.innerText= book.title;
  const deleteButton=document.createElement("button");
  deleteButton.innerText="삭제";
  deleteButton.className="button";
  deleteButton.style.backgroundColor="red"
  deleteButton.onclick=()=>cartItem.remove();
  cartItem.appendChild(deleteButton);
  cartList.appendChild(cartItem);
}