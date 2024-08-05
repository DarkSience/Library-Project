const myLibrary = [];

function Book(name, author, pages, isRead) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = isRead ? "Already read" : "Not read yet";
  myLibrary.push(this);
}

function getRandomColorValue() {
  return Math.floor(Math.random() * 256);
}

function createBookElement(info) {
  const book = document.createElement("div");
  book.classList.add("book");

  const nameElement = document.createElement("p");
  nameElement.classList.add("book-name");
  nameElement.textContent = info.name;
  book.appendChild(nameElement);

  const authorElement = document.createElement("p");
  authorElement.classList.add("book-author");
  authorElement.textContent = info.author;
  book.appendChild(authorElement);

  const pagesElement = document.createElement("p");
  pagesElement.classList.add("book-pages");
  pagesElement.textContent = `${info.pages} pages`;
  book.appendChild(pagesElement);

  const readElement = document.createElement("p");
  readElement.classList.add("book-isRead");
  readElement.textContent = info.read;
  book.appendChild(readElement);

  book.style.setProperty("--book-color-r", getRandomColorValue());
  book.style.setProperty("--book-color-g", getRandomColorValue());
  book.style.setProperty("--book-color-b", getRandomColorValue());

  return book;
}

function makeBook(info) {
  const book = createBookElement(info);
  document.querySelector(".container").appendChild(book);
}

function open_menu() {
  document.querySelector(".form").style.display = "flex";
}

document.querySelector(".form").addEventListener("submit", (event) => {
  event.preventDefault();

  document.querySelector(".form").style.display = "none";

  let name = document.querySelector("#form-name").value;
  let author = document.querySelector("#form-author").value;
  let pages = document.querySelector("#form-pages").value;
  let isRead = document.querySelector("#form-isRead").checked;

  if (name && author && pages) {
    let book = new Book(name, author, pages, isRead);
    makeBook(book);
  } else {
    console.error("All fields are required.");
  }

  document.querySelector("#form-name").value = "";
  document.querySelector("#form-author").value = "";
  document.querySelector("#form-pages").value = "";
  document.querySelector("#form-isRead").checked = false;
});
