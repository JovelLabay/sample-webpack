const BOOKLIST = require("./book.list");
import "./styles/styles.css";

const lala = BOOKLIST.map((data) => {
  return data.bookISBN;
});

console.log(lala);
