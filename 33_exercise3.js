//EXERCISE 3

/*
elem.innerHTML is used to populate a div with html search online about this method
and create a website wtih a div tag can show a random joke given an array of jikes use
Math.random and fetch jokes from the internet (use any website to create the array)
Your website should show a random joke on every reload mix length of your jokes array
should be 10.
*/

{/* <div id = "joke">This is a sample joke</div> */}

let jokes = [
    {
      "category": "Programming",
      "type": "single",
      "joke": "Eight bytes walk into a bar.\nThe bartender asks, \"Can I get you anything?\"\n\"Yeah,\" reply the bytes.\n\"Make us a double.\"",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 34,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "A byte walks into a bar looking miserable.\nThe bartender asks it: \"What's wrong buddy?\"\n\"Parity error.\" it replies. \n\"Ah that makes sense, I thought you looked a bit off.\"",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 24,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "Have a great weekend!\nI hope your code behaves the same on Monday as it did on Friday.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 44,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "Saying that Java is nice because it works on every OS is like saying that anal sex is nice because it works on every gender.",
      "flags": {
        "nsfw": true,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": true
      },
      "id": 30,
      "safe": false,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "// This line doesn't actually do anything, but the code stops working when I delete it.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 12,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "The glass is neither half-full nor half-empty, the glass is twice as big as it needs to be.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 23,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "\"We messed up the keming again guys.\"",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 20,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 37,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "I have a joke about Stack Overflow, but you would say it's a duplicate.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "safe": true,
      "id": 301,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "A guy walks into a bar and asks for 1.4 root beers.\nThe bartender says \"I'll have to charge you extra, that's a root beer float\".\nThe guy says \"In that case, better make it a double.\"",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 2,
      "safe": true,
      "lang": "en"
    }
  ]
  
  let index = Math.floor(Math.random() * jokes.length - 1);
  console.log(index);
  joke.innerHTML = jokes[index].joke
  
  
  /*
  show on website
  index on console
  */