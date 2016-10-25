(function (global) {
	var mapArray;

	if (!global.UAM) {
		global.UAM = {};
	}
    
    global.UAM.library = []; 

    // BELOW SAMPLES SHOW STRUCTURE OF CATEGORY OBJECT AND STUCTURE OF BOOKS OBJECT INSIDE CATEGORY 
    //   
    global.UAM.library.push({
        categoryName: 'Kryminał',
        books: []
    });
    
    global.UAM.library[0].books.push({
        title: 'Pan Tadeusz',
        count: 3
    });
    
    //////////////////////////////////////////////////////////////////////////////////////

    // newCategoryName: String
    global.UAM.addCategory = function (newCategoryName) {
        // function should return new category object
		var category = new Object();
        category.categoryName = newCategoryName;
        category.books = [];
        global.UAM.library.push(category);
        return category;
    };

    // categoryObject: Object
    global.UAM.removeCategory = function (categoryObject) {
        // !!!
		for (var i=0; i<global.UAM.library.length; i++){
            if (global.UAM.library[i] === categoryObject){
                global.UAM.library.splice(i,1);
            }
        }
    };

    // categoryObject: Object
    // title: String
    // count: Number 
    global.UAM.addBookToCategory = function(categoryObject, title, count) {
        // !!!
        // function should return new book object
		for (var i=0; i<global.UAM.library.length; i++){
            if (global.UAM.library[i] === categoryObject){
                var book = new Object();
                book.title = title;
                book.count = count;
                categoryObject.books.push(book);
                return book;
            }
        }
    };

    // categoryObject: Object
    // bookObject: Object
    global.UAM.removeBookFromCategory = function(categoryObject, bookObject) {
        // !!!
		for (var i=0; i<global.UAM.library.length; i++){
            if (global.UAM.library[i] === categoryObject){
                for (var j=0; j<global.UAM.library[i].books.length; j++){
					if (global.UAM.library[i].books[j] === bookObject){
						global.UAM.library[i].books[j].count -= 1;
					}
                }
            }
        }
    };

    // categoryName: String
    global.UAM.getCategoryByName = function(categoryName) {
        // !!!
        // function should return category object
		for (var i=0; i<global.UAM.library.length; i++){
			if (global.UAM.library[i].categoryName === categoryName){
				return global.UAM.library[i];
			}
        }
    };

    // title: String
    global.UAM.getBookByTitle = function(title) {
        // !!!
        // function should return book object
		for (var i=0; i<global.UAM.library.length; i++){
            for (var j=0; j<global.UAM.library[i].books.length; j++){
				if (global.UAM.library[i].books[j].title === title){
					return global.UAM.library[i].books[j];
				}
                
            }
         }
    };

    // bookObject: Object
    global.UAM.returnBook = function(bookObject) {
        // !!!
		for (var i=0; i<global.UAM.library.length; i++){
            for (var j=0; j<global.UAM.library[i].books.length; j++){
				if (global.UAM.library[i].books[j] === bookObject){
					global.UAM.library[i].books[j].count += 1;
				}
            }
        }
    };
    
    global.UAM.getBorrowedBooks = function() {
        // !!!
        // return array of book objects
		list = []
        for (var i=0; i<global.UAM.library.length; i++){
            for (var j=0; j<global.UAM.library[i].books.length; j++){
				if (global.UAM.library[i].books[j].count === 0){
					list.push(global.UAM.library[i].books[j]);
				}
            }
        }
        return list;
    };

}(window));



//Przykład użycia:
/*
var newCategory1 = addCategory('Kategoria1');
var newCategory2 = addCategory('Kategoria2');

addBookToCategory(newCategory1, 'Tytul1', 11);
addBookToCategory(newCategory2, 'Tytul2', 13);
reduceTimeToExecute(newAircraft1, 20);

var sxy2a = addWorkToAircraft(newAircraft2, 'serviceXY2a', 130);
var sxy2b = addWorkToAircraft(newAircraft2, 'serviceXY2b', 160);*/
/*reduceTimeToExecute(newAircraft2, 20);

getAircraftsForRepairs(100); // [ newAircraft1 ]

removeAircraft(newAircraft1);

getAircraftsForRepairs(100); // []

reduceTimeToExecute(newAircraft2, 20);

getAircraftsForRepairs(100); // [ newAircraft2 ]*/