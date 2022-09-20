const books = [
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg"
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
  },
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
  }
  
];

books.map(bookItem =>{
  const img = bookItem.img;
  const title = bookItem.title;
  const author = bookItem.author;
  const read = bookItem.alreadyRead;
  book (img, title, "", author, read)
})

function book(src, title, text, authorName, read) {
const card = document.createElement("div");
card.style.width = "18rem"
card.style.marginBottom = "2rem"
card.classList.add("card");

const img = document.createElement("img");
img.classList.add("card-img-top")
img.style.height = "24rem";
img.style.border = "5px solid black"

img.src = src;

const cardBody = document.createElement("div");
cardBody.classList.add("card-body")

const h5 = document.createElement("h5");
h5.classList.add("card-title")
h5.innerText = title

const p = document.createElement("p")
p.classList.add("card-text")
p.innerText = text

const author = document.createElement("p");
author.innerText = authorName;
author.style.marginBottom = "2rem"

const a = document.createElement("a");
a.classList.add("btn", "btn-danger");
if(read){
  a.classList.remove("btn-danger")
  a.classList.add("btn-success")
}
a.innerText = read ? "Read" : "To read"
a.style.marginTop = "2rem"
a.style.float = "right"
a.style.borderRadius = "20px"

cardBody.append(h5, p, author, a);
card.append(img, cardBody)

const bookList = document.querySelector('.book-list')
bookList.append(card)

}