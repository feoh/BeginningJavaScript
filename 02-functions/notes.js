// your notes here!
console.log("hello world!");
console.log("Zizzy Balooba");


var greet = function(name) {
    return "hello " + name;
}

var toCardString = function(rank, suit) {
    return rank + " of " + suit;
}

var aceOfSpaces = toCardString("ace","spaces");

var makeHTMLParagraph = function(content) {
    var openParagraphTag = "<p>";
    var closeParagraphTag = "</p>";
    var htmlParagraph = openParagraphTag + content + closeParagraphTag
    return htmlParagraph
}