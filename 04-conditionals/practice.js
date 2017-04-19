// We'll consider a password's strength to be "strong" if it is at least 10
// characters long. If it's between 7 and 10 characters long, we'll consider it to
// have "medium" strength, and if it's less than 7 characters, we'll say it is a
// "weak" password. Write a function that accepts as input a potential password and
// returns either "weak", "medium" or "strong" depending on its length.
//
//     passwordStrength("hello");
//     //=> weak
//
//     passwordStrength("longerpassword");
//     //=> strong
//
//     passwordStrength("helloone");
//     //=> medium
var passwordStrength = function (newPassword) {
    if (newPassword.length >= 10) {
        return "strong";
    }
    else if (newPassword.length >= 8) {
        return "medium";
    }
    else if (newPassword.length < 7) {
        return "weak"
    }
};


// A year is a leap year if it is divisible by 4, unless it is also divisible by
// 100 in which case it is not a leap year unless it is also divisible by
// 400. Phew. Got that? Good. Write a function that accepts a number and outputs
// true if the number is a leap year, false if not.
//
//      isLeapYear(1988);
//      //=> true
//
//      isLeapYear(2001);
//      //=> false
//
//      isLeapYear(1800);
//      //=> false
//
//      isLeapYear(2000);
//      //=> true
//
// It should also throw an error if the input is not a number.
//
//      isLeapYear("hello");
//      //=> THAT'S NOT A NUMBER!
var isLeapYear = function (year) {
    if (typeof year !== "number") {
        throw("THAT'S NOT A NUMBER!");
    }

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            }
            return false;
        }
        
        return true
    }
    console.log("before return false");
    return false;
};


// Write a function that accepts three strings and input, and returns the one
// that would come earliest in the dictionary.
//
//      firstInDictionary("rhino", "aardvark", "zebra");
//      //=> aardvark
//
//      firstInDictionary("whale", "zebra", "yak");
//      //=> whale
//
//      firstInDictionary("whale", "zebra", "aardvark");
//      //=> aardvark
//
// It should throw an error string if any of the arguments are not strings.
//
//      firstInDictionary("whale", 5, 10);
//      //=> ALL THREE ARGS MUST BE STRINGS!
var firstInDictionary = function (first, second, third) {
    if (typeof first !== "string" || typeof second !== "string" || typeof third !== "string") {
        throw("All three must be strings!");
    }
    if (first < second && first < third) {
        return first;
    }

    if (second < first && second < third) {
        return second;
    }

    if (third < first && third < second) {
        return third;
    }
};


// Write a function that extracts a tag from a string representing an HTML
// element, but throws an error if the string is not an HTML element. You may reuse
// one of your functions from the previous section (or, better yet, see if you can
// remember how to re-write it).
//
//     getTagName("<p>this is a paragraph</p>");
//     //=> p
//
//     getTagName("<p>this is wrong</div>");
//     //=> Error: Not an HTML Element!
var getTagName = function (page) {
    openTagStart = page.indexOf('<')
    openTagEnd = page.indexOf('>', openTagStart)

    openTag = page.slice(openTagStart + 1, openTagEnd)

    bodyEnd = page.indexOf('<', openTagEnd + 1)
    body = page.slice(openTagEnd + 1, bodyEnd)

    closeTagStart = page.indexOf('<', bodyEnd)
    closeTagEnd = page.indexOf('>', closeTagStart)
    closeTag = page.slice(closeTagStart + 1, closeTagEnd)
    closeTagMinusSlash = closeTag.slice(1, closeTagEnd)

    if (openTag != closeTagMinusSlash)
    {
        throw("Error: Not an HTML Element!");
    }

    return openTag;
};


// Re-implement our improveTweet function so it can generate any of lol, omg,
// lmao, and rofl.
var improveTweet = function (tweet) {
    choice = Math.round(Math.random() * 3)

    switch (choice) {
        case 0:
            return tweet + " lol";
            break;
        case 1:
            return tweet + " lmao";
            break;
        case 2:
            return tweet + " omg";
            break;
        case 3:
            return tweet + " rofl";
            break;
    }
};


// Write a function called `isQuestion` that returns true if the input is a
// string and it ends in a question mark. We'll use this function in the next
// practice problem.
var isQuestion = function (str) {
    return (str.charAt(str.length - 1) === '?');
};


// The Magic 8 Ball is a classic toy that allows you to ask a yes/no
// question and it responds with a random answer. Most of the time (at least half)
// it responds with a "positive" answer, about a quarter of the time it responds
// with a "neutral" answer, and about a quarter of the time it responds with a
// "negative" answer. You can read more about the Magic 8 Ball toy (and see it's
// actual responses) on Wikipedia.
//
// Write a function that simulates the Magic 8 Ball by generating a random
// number. Try to make it match the probabilities of the real toy.
//
//     magic8Ball("Will people like this problem?");
//     //=> Very doubtful
//
//     magic8Ball("Do people like these videos?");
//     //=> My reply is no
//
//     // throw an error if there's no question mark at the end
//     // use your isQuestion function from the previous question
//     magic8Ball("you suck");
//     //=> THAT DOESN'T SOUND LIKE A QUESTION!
//
//     magic8Ball("Is this a question?");
//     //=> Signs point to yes

// Begin botch attempt!
// var magic8Ball = function (question) {
//     if (! isQuestion(question)) 
//     {
//         throw("THAT DOESN'T SOUND LIKE A QUESTION!")
//     }

//     guess = Math.round(Math.random() * 100);

//     console.log("guess = " + guess);

//     switch (guess) 
//     {
//         case (guess <= 50):
//             console.log("Signs point to yes");
//             return("Signs point to yes");
//             break;
//         case (guess <= 75):
//             return("Very doubtful");
//             break;
//         case (guess > 75):
//             return("My reply is no");
//             break;
//     }

var magic8Ball = function (question) {
    if (! isQuestion(question)) 
    {
        throw("THAT DOESN'T SOUND LIKE A QUESTION!")
    }

    guess = Math.round(Math.random() * 100);

    console.log("guess = " + guess);

    if (guess <= 50)
    {
        return("Signs point to yes");
    }
    else if (guess <= 75)
    {
        return("My reply is no");
    }
    else if (guess > 75)
    {
        return("Very doubtful");
    }
};


// Suppose we wanted to randomly interject "-lol-" or "-omg-" into a random
// place in a string. For example:
//
//     randomInterject("this is a tweet");
//     //=> this is -omg- a tweet
//
// Notice that it may break into the middle of words as well.
//
//     randomInterject("hilarious, I'm having a great day");
//     //=> hil-lol-arious, I'm having a great day");
//
// This is a little tricky, so here are some tips. It may be helpful to break down
// this problem into two steps. First, you may want to write a function called
// interjection that accepts a number and two strings -- the interjection and the
// actual string.
//
//     interjectAt("interjection", 5, "hello world!");
//     //=> hello-interjection- world!
//
//     interjectAt("lol", 0, "this is a tweet");
//     //=> -lol-this is a tweet
//
//     interjectAt("omg", 15, "hello");
//     //=> the string doesn't have that many letters!
//
//     interjectAt(5, "omg", "hello");
//     //=> expected first arg to be a string, second arg to be a number and third arg to be a string
//
// You can interject by using two slices. For instance:
//
//     var str = "hello world!";
//     var beginning = str.slice(0,5);
//     var end = str.slice(5,str.length);
//     var strWithInterjection = beginning + "-lol-" + end;
//
// You just have to generalize this to an arbitrary index and wrap it in a function.
var interjectAt = function (interjection, position, str) {
    var dashedInterjection = "-" + interjection + "-";
    var beginning = str.slice(0,position);
    var end = str.slice(position, end);

    if (typeof(position) !== 'number')
    {
        throw("Position must be an integer!");
    }

    console.log("interjection: " + interjection)
    if (typeof(interjection) !== 'string')
    {
        throw("interjection must be a string!")
    }

    if (typeof(str) !== 'string')
    {
        throw("str must be a string!")
    }

    if (position > str.length)
    {
        throw("You can't interject outside of the string!");
    }

    return beginning + dashedInterjection + end
};


// Now that you have a robust function to do your interjection, your actual
// `randomInterjection` function consists of generating a random message and a
// random location within the string, and then calling into the `interjectAt`
// function with the appropriate arguments.
var randomInterject = function (tweet) {
    var pos = Math.round(Math.random() * (tweet.length - 1));
    console.log("pos: " + pos);
    var choices = ['lol','omg'];

    var whichInterjection = Math.round(Math.random() * (choices.length - 1));
    console.log("whichInterjection: " + whichInterjection)
    return interjectAt(choices[whichInterjection], pos, tweet);
};







