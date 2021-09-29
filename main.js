let books = [[1,'Start with why','Simon Sinek',80.0, 13],[2,'But how do it know','J. Clark Scott',59.9, 22],[3,'Clean Code','Robert Cecil Martin',50.0, 5]]


//stor the book index form find_book function
let book_inde;


function find_book(id, title, author){
    for (let i = 0; i < books.length; i++) {
        for (let j = 0; j < books[i].length; j++) {
            if (books[i][j] == id || books[i][j] == title || books[i][j] == author) {
                book_inde = i
                return books[i]
            }
        }
    }
}


// this function processes the payment 
function sell_a_book(title ,quantity, wallet){
    let book = find_book(title)
    let final_price = book[3] * quantity

    // if the book doesn't exist
    if (book == undefined) {
        return `Sorry we don't have this book (${title})`
    }


    if (quantity <= book[book.length - 1] && final_price <= wallet) {
        book[book.length - 1] -= quantity
        books[book_inde] = book
        console.log(books);
        return `you have to pay $${final_price} the one book price is $${book[3]}`
    }else if(final_price > wallet){
        return `Sorry you don't have enough money the final price is $${final_price}`
    }
}
console.log(sell_a_book('But how do it know', 3, 190))
