//Open a new js file and start by declaring an array that contains 10 strings. These strings should be of book titles
// you have read (or made up) and be lowercase without spaces or special characters so that you can use these later
// as Id's. (Example: Harry Potter's - The Chamber of Secrets -> harry_potter_chamber_secrets).


const booksBestSeller = ["don_quixote","a_tale_of_two_cities","the_lord_of_the_rings","the_little_prince","harry_potter_and_the_Sorcerer_stone","and_then_there_were_none","the_dream_of_the_red_chamber","the_hobbit","she_a_history_of_adventure","the_lion_the_witch_and_the_wardrobe"]
console.log(booksBestSeller);


//Create a basic html file called index.html and use it to load the js file, confirm the console.log show the array.
// (This is for debugging and making sure everything is in order. Delete it later when you're done :))

//Make a function (or functions) that generate a ul with li elements for each book ID in the array using a for loop.

let newElement1 = document.createElement("ul")
document.body.appendChild(newElement1);
function myFunction(){
    for (let i=0; i< 10; i++){
        let newElement2 = document.createElement("li")
        newElement2.innerHTML = booksBestSeller[i];
        newElement1.appendChild(newElement2);
    }
}
// myFunction(booksBestSeller);     //function  that generate a ul with li elements for each book 


//Make an object containing information for each book. Each item (object) in this object should have the book 
//ID you thought up in point 1 as a key, and it should have at least the following fields: title, language and author.
let newElement3 = document.createElement("p");
newElement3.innerHTML = ("This page includes a list of the 10 best-selling books of all-time. Best-selling books are ranked by number of copies sold, not my personal ratings.")
document.body.appendChild(newElement3);

function Book(bookId,title, author, language,copiesSold,bookLink){
    this.bookId = bookId;
    this.title = title;
    this.author = author;
    this.language = language;
    this.copiesSold = copiesSold;
    this.bookLink = bookLink;
    this.ShowBook = ShowBook;
}

// function ShowBook(){
//     document.write("Book id :" + this.bookId + "<br>");
//     document.write("Title :" +this.title+"<br>");
//     document.write("Author :" + this.author + "<br>");
//     document.write("Language :" + this.language + "<br>");
//     document.write("Number of copies sold :" + this.copiesSold+"<br>");
//     let newElement6 = document.createElement("img");
//     newElement6.setAttribute("scr",this.bookLink);
//     document.body.appendChild(newElement6);
// }

function ShowBook(){
    let newElement10 = document.createElement("div");
    newElement10.setAttribute("id","myBook");
    document.body.appendChild(newElement10);

    let newElement11 = document.createElement("h2");
    newElement11.innerHTML= this.title;
    newElement10.appendChild(newElement11);

    let newElement12 = document.createElement("img");
    newElement12.setAttribute("src",this.bookLink, "Alt","Book's cover image", "class", "image");
    newElement12.setAttribute("Alt","Book's cover image");
    newElement12.setAttribute("class", "image");
    newElement10.appendChild(newElement12);

    let newElement13 = document.createElement("p");
    newElement13.innerHTML = "Book's id :" + this.bookId + "<br>" + "Author :" + this.author + "<br>" + "Language :" + this.language + "<br>" + "Number of copies sold :" + this.copiesSold+"<br>" +"<hr>";
    newElement10.appendChild(newElement13);
    
}


let Book1 = new Book("don_quixote"," Don Quixote ", " Miguel de Cervantes", "English", "500.000.000" ,"https://images-na.ssl-images-amazon.com/images/I/41f%2BsbE608L._SX304_BO1,204,203,200_.jpg") ;
let Book2 = new Book("a_tale_of_two_cities"," A Tale of Two Cities ", " Charles Dickens", "English", "200.000.000" , "https://images-na.ssl-images-amazon.com/images/I/51irtb5ENpL._SX315_BO1,204,203,200_.jpg") ;
let Book3 = new Book("the_lord_of_the_rings"," The Lord of the Rings  ", " J.R.R. Tolkien", "English", "142.000.000", "https://images-na.ssl-images-amazon.com/images/I/51eq24cRtRL._SX331_BO1,204,203,200_.jpg" ) ;
let Book4 = new Book("the_little_prince","The Little Prince", " Antoine de Saint-Exupery", "English", "500.0000.00" , "https://images-na.ssl-images-amazon.com/images/I/41cI98inMmL._SX331_BO1,204,203,200_.jpg") ;
let Book5 = new Book("harry_potter_and_the_Sorcerer_stone"," Harry Potter and the Sorcerer's Stone ", " J.K. Rowling", "English", "107.000.000","https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg" ) ;
let Book6 = new Book("and_then_there_were_none"," And Then There Were None ", " Agatha Christie", "English", "100.000.000","https://images-na.ssl-images-amazon.com/images/I/51MlxNgCsyL._SX308_BO1,204,203,200_.jpg" ) ;
let Book7 = new Book("the_dream_of_the_red_chamber"," The Dream of the Red Chamber ", " Cao Xueqin", "English", "100.000.000","https://images-na.ssl-images-amazon.com/images/I/41TCQH9ENcL._SX319_BO1,204,203,200_.jpg" ) ;
let Book8 = new Book("the_hobbit"," The Hobbit ", " J.R.R. Tolkien", "English", "100.000.000" ,"https://images-na.ssl-images-amazon.com/images/I/51e5yIs332L._SX284_BO1,204,203,200_.jpg") ;
let Book9 = new Book("she_a_history_of_adventure"," She: A History of Adventure ", " H. Rider Haggard", "English", "100.000.000","https://images-na.ssl-images-amazon.com/images/I/51sZG-rk3IL._SX327_BO1,204,203,200_.jpg" ) ;
let Book10 = new Book("the_lion_the_witch_and_the_wardrobe"," The Lion, the Witch and the Wardrobe ", "C.S. Lewis", "English", "85.000.000","https://images-na.ssl-images-amazon.com/images/I/51erHMLhIzL._SX334_BO1,204,203,200_.jpg" ) ;


Book1.ShowBook();
Book2.ShowBook();
Book3.ShowBook();
Book4.ShowBook();
Book5.ShowBook();
Book6.ShowBook();
Book7.ShowBook();
Book8.ShowBook();
Book9.ShowBook();
Book10.ShowBook();










