const myLibrary = [
  {
    id: 1,
    name: "The End of the World Volume 1",
    author: "Acumalaka",
    pages: 144,
    read: true,
  },
  {
    id: 2,
    name: "The End of the World Volume 2",
    author: "Acumalaka",
    pages: 384,
    read: false,
  },
];

class Book {
  constructor(name, author, pages, readed) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.readed = readed;
  }
}

class Library {
  constructor(books = []) {
    this.books = books;
  }

  addBook(book) {
    this.books.push(book);
  }

  deleteBook(id) {
    this.books.splice(
      this.books.findIndex((book) => book.id == id),
      1,
    );
  }

  getBooks() {
    return this.books;
  }
}

class Display {
  render(books) {
    const main = document.querySelector("main");
    main.innerHTML = "";

    books.forEach((book) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const id = document.createElement("input");
      id.setAttribute("type", "hidden");
      id.setAttribute("id", "userId");
      id.setAttribute("name", "userId");
      id.setAttribute("value", book.id);
      card.appendChild(id);

      const container1 = document.createElement("div");
      container1.classList.add("container-detail");

      const mark = document.createElement("p");
      mark.classList.add("mark");
      if (book.readed) {
        mark.classList.add("true");
        mark.textContent = "Readed";
      } else {
        mark.classList.add("false");
        mark.textContent = "Unreaded";
      }
      container1.appendChild(mark);

      const name = document.createElement("h2");
      name.textContent = book.name;
      container1.appendChild(name);

      const author = document.createElement("p");
      author.textContent = book.author;
      container1.appendChild(author);

      const pages = document.createElement("p");
      pages.textContent = book.pages + " pages";
      container1.appendChild(pages);

      const container2 = document.createElement("div");

      const removeBtn = document.createElement("button");
      removeBtn.classList.add("remove-btn");
      removeBtn.textContent = "Remove";
      removeBtn.addEventListener("click", removeBookFromLibrary);
      container2.appendChild(removeBtn);

      card.appendChild(container1);
      card.appendChild(container2);
      main.appendChild(card);
    });
  }
}

let library = new Library(myLibrary);
const display = new Display();

const addBookToLibrary = (event) => {
  event.preventDefault();

  const form = event.target;
  const title = form.elements.title.value;
  const author = form.elements.author.value;
  const pages = form.elements.pages.value;
  const readed = form.elements.read.checked;

  const newBook = new Book(title, author, pages, readed);
  library.addBook(newBook);

  form.reset();
  display.render(library.getBooks());
};

const removeBookFromLibrary = (event) => {
  event.preventDefault();

  const card = event.target.closest(".card");
  const id = card.querySelector("#userId").value;

  library.deleteBook(id);
  display.render(library.getBooks());
};

const addBtn = document.querySelector("form");
addBtn.addEventListener("submit", addBookToLibrary);

display.render(library.getBooks());
