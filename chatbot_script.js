let btn = document.querySelector('.talk')
let content = document.querySelector('.content')

function speak(text) 
{
    console.log('in speak')
    let text_speak = new SpeechSynthesisUtterance(text)

    text_speak.rate = 1
    text_speak.volume =1
    text_speak.pitch = 1

    window.speechSynthesis.speak(text_speak)
}

function wishMe() 
{
    let day = new Date()
    let hour = day.getHours()

    if (hour >= 0 && hour < 12) 
    {
        speak("Good Morning ")
    } 

    else if (hour >= 12 && hour < 17) 
    {
        speak("Good Afternoon ")
    } 
     
    {
        speak("Good Evening ")
    }
}

window.addEventListener('load',()=>{
    wishMe()
    setTimeout(() => speak("How can I help you today?"),2000)
})


let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new SpeechRecognition()

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.textContent = transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener('click', () => {
    content.textContent = "Listening..."
    recognition.start()
})

function takeCommand(message) 
{
    message = message.toLowerCase()

    if (message.includes('hi')) 
    {
        speak("Hello, hope you have a nice day. How may I help you?")
    } 

    else if (message.includes('what is your name')) 
    {
        speak("My name is Human Chatbot, I am here to assist you with any query and its solution")
    }

    else if (message.includes("open netflix")) 
    {
        window.open("https://www.netflix.com", "_blank")
        speak("Opening Netflix")
    }

    else if(message.includes("open e-waybill login page"))
    {
        window.open("https://ewaybillgst.gov.in/","_blank")
        speak("Opening E-waybill login page")
    }

    else if (message.includes("open instagram")) 
    {
        window.open("https://www.instagram.com", "_blank")
        speak("Opening Instagram")
    } 

    else if (message.includes("open prime video")) 
    {
        window.open("https://www.primevideo.com", "_blank")
        speak("Opening Prime Video")
    }

    else if (message.includes("open amazon")) 
    {
        window.open("https://www.amazon.in", "_blank")
        speak("Opening Amazon")
    } 

    else if (message.includes("open flipkart")) 
    {
        window.open("https://www.flipkart.com", "_blank")
        speak("Opening Flipkart")
    }

    else if (message.includes("open chat-gpt")) 
    {
        window.open("https://chat.openai.com", "_blank")
        speak("Opening Chat-Gpt")
    }

    else if (message.includes("open spotify")) 
    {
        window.open("https://www.spotify.com", "_blank")
        speak("Opening Spotify")
    } 

    else if (message.includes("open github")) 
    {
        window.open("https://github.com/", "_blank")
        speak("Opening Github")
    } 

    else if (message.includes("open irctc")) 
    {
        window.open("https://www.irctc.co.in", "_blank")
        speak("Opening IRCTC")
    } 

    else if (message.includes("open make-my-trip")) 
    {
        window.open("https://www.makemytrip.com/", "_blank")
        speak("Opening Make My Trip")
    }

    else if (message.includes("open govt of india portal")) 
    {
        window.open("https://www.india.gov.in/", "_blank")
        speak("Opening Government of India Portal")
    } 

    else if (message.includes("who is prime minister of india")) 
    {
        speak("The Prime Minister of India is Narendra Damodardas Modi")
    }

    else if (message.includes("open google")) 
    {
        window.open("https://google.com", "_blank")
        speak("Opening Google...")
    }

    else if (message.includes("open youtube")) 
    {
        window.open("https://youtube.com", "_blank")
        speak("Opening Youtube...")
    }

    else if (message.includes("open facebook")) 
    {
        window.open("https://facebook.com", "_blank")
        speak("Opening Facebook...")
    } 

    else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) 
    {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank")
        let finalText = "This is what I found on the internet regarding " + message
        speak(finalText)
    } 

    else if (message.includes('play')) 
    {
        let song = message.replace("play", "").trim()
        window.open(`https://www.youtube.com/results?search_query=${song.replace(" ", "+")}`, "_blank")
        let finalText = "This is what I found on YouTube regarding " + message
        speak(finalText)
    } 

    else if (message.includes('wikipedia')) 
    {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank")
        let finalText = "This is what I found on Wikipedia regarding " + message
        speak(finalText)
    } 

    else if (message.includes('time')) 
    {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
        let finalText = "The current time is " + time
        speak(finalText)
    }

    else if (message.includes('date')) 
    {
        let date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" })
        let finalText = "Today's date is " + date
        speak(finalText)
    } 

    else if (message.includes('calculator')) 
    {
        window.open('Calculator:///')
        let finalText = "Opening Calculator"
        speak(finalText)
    } 

    else if (message.includes('what is the situation of weather in my city')) 
    {
        let city = message.replace("weather", "").trim()
        window.open(`https://www.google.com/search?q=weather+${city.replace(" ", "+")}`, "_blank")
        let finalText = "This is what I found on the internet regarding the weather in " + city
        speak(finalText)
    }

    else if (message.includes('temperature')) 
    {
        let city = message.replace("temperature", "").trim()
        window.open(`https://www.google.com/search?q=temperature+${city.replace(" ", "+")}`, "_blank")
        let finalText = "This is what I found on the internet regarding the temperature in " + city
        speak(finalText)
    } 

    else if (message.includes('news')) 
    {
        window.open('https://www.google.com/search?q=news', "_blank")
        let finalText = "Here are the latest news"
        speak(finalText)
    } 

    else if (message.includes("tell me a joke")) 
    {
        let jokes = [
            "Why don't scientists trust atoms Because they make up everything",
            "Why did the scarecrow win an award Because he was outstanding in his field",
            "Why don't skeletons fight each other They don't have the guts",
            "Why are snails slow  Because they’re carrying a house on their back",
            "What do you call a fake noodle An impasta",
            "Why did the bicycle fall over Because it was two-tired",
            "How does the ocean say hi? It waves"
        ]
        let joke = jokes[Math.floor(Math.random() * jokes.length)]
        speak(joke)
    } 

    else if (message.includes("quote of the day")) 
    {
        let quotes=[
            "The only way to do great work is to love what you do - Steve Jobs",
            "The journey of a thousand miles begins with one step - Lao Tzu",
            "Believe you can and you're halfway there - Theodore Roosevelt",
            "The best love is the kind that awakens the soul and makes us reach for more - Nicholas Spark",
            "The biggest risk is not taking any risk - Mark Zuckerberg",
            "The greatest happiness you can have is knowing that you do not necessarily require happiness - William Saroyan",
            "The only thing standing between you and your goal is the bogus story you keep telling yourself. - Jordan Belfort",
            "The biggest adventure you can take is to live the life of your dreams - Oprah Winfrey",
            "The best revenge is massive success - Frank Sinatra",
            "Do not go where the path may lead, go instead where there is no path and leave a trail - Ralph Waldo Emerson",
            "You must do the thing you think you cannot do -Eleanor Roosevelt",
            "Out of difficulties grow miracles - Jean de La Bruy",
            "You may not control all the events that happen to you, but you can decide not to be reduced by them - Maya Angelou",
            "Turn your wounds into wisdom - Oprah Winfrey"
        ]
        let quote = quotes[Math.floor(Math.random() * quotes.length)]
        speak(quote)
    } 

    else if (message.includes("give me a fact")) 
    {
        let facts=[
            "Honey never spoils Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still edible",
            "A day on Venus is longer than a year on Venus",
            "Bananas are berries, but strawberries aren't",
            "Elephants are the only animals that can't jump",
            "People say Bless You when you sneeze because when you sneeze,your heart stops for a millisecond",
            "You can't kill yourself by holding your breath",
            "The human nose can detect over 1 trillion different scents",
            "The longest muscle in the body is the tongue",
            "The world's largest waterfall, by volume of water, is actually located underwater",
            "Carbon monoxide can kill a person in less than 15 minutes",
            "The blood of mammals is red, the blood of insects is yellow in colour, and the blood of lobster is blue",
            " Human thigh bones are stronger than concrete",
            "Corn is grown on every continent except antarctica",
            "Rhythm is the longest English word without a vowel",
            "Hearing is the fastest human sense. a person can recognize a sound in as little as 0.05 seconds",
            "The electric chair was invented by a dentist"
        ]
        let fact = facts[Math.floor(Math.random() * facts.length)]
        speak(fact)
    }

    else if (message.includes("what is the capital of") || message.includes("capital of")) 
    {
        let country = message.replace("what is the capital of", "").replace("capital of", "").trim()
        window.open(`https://www.google.com/search?q=capital+of+${country.replace(" ", "+")}`, "_blank")
        let finalText = "This is what I found on the internet regarding the capital of " + country
        speak(finalText)
    }

    else if (message.includes("currency of") || message.includes("what is the currency of")) 
    {
        let country = message.replace("what is the currency of", "").replace("currency of", "").trim()
        window.open(`https://www.google.com/search?q=currency+of+${country.replace(" ", "+")}`, "_blank")
        let finalText = "This is what I found on the internet regarding the currency of " + country
        speak(finalText)
    } 

    else if (message.includes("population of") || message.includes("what is the population of")) 
    {
        let place = message.replace("what is the population of", "").replace("population of", "").trim()
        window.open(`https://www.google.com/search?q=population+of+${place.replace(" ", "+")}`, "_blank")
        let finalText = "This is what I found on the internet regarding the population of " + place
        speak(finalText)
    } 

    else if (message.includes("area of") || message.includes("what is the area of")) 
    {
        let place = message.replace("what is the area of", "").replace("area of", "").trim()
        window.open(`https://www.google.com/search?q=area+of+${place.replace(" ", "+")}`, "_blank")
        let finalText = "This is what I found on the internet regarding the area of " + place
        speak(finalText)
    } 

    else if (message.includes("tell me about") || message.includes("who is") || message.includes("what is") || message.includes("what are")) 
    {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank")
        let finalText = "This is what I found on the internet regarding " + message
        speak(finalText)
    } 

    else if (message.includes("open twitter")) 
    {
        window.open("https://twitter.com", "_blank")
        speak("Opening Twitter")
    }

    else if (message.includes("open linkedin")) 
    {
        window.open("https://linkedin.com", "_blank")
        speak("Opening LinkedIn")
    } 

    else if (message.includes("open reddit")) 
    {
        window.open("https://reddit.com", "_blank")
        speak("Opening Reddit")
    } 

    else if (message.includes("open pinterest")) 
    {
        window.open("https://pinterest.com", "_blank")
        speak("Opening Pinterest")
    } 

    else if (message.includes("open quora")) 
    {
        window.open("https://quora.com", "_blank")
        speak("Opening Quora")
    } 

    else if (message.includes("open telegram")) 
    {
        window.open("https://web.telegram.org", "_blank")
        speak("Opening Telegram")
    } 

    else if (message.includes("open whatsapp")) 
    {
        window.open("https://web.whatsapp.com", "_blank")
        speak("Opening WhatsApp")
    } 

    else if (message.includes("open outlook")) 
    {
        window.open("https://outlook.live.com", "_blank")
        speak("Opening Outlook")
    } 

    else if (message.includes("open yahoo mail")) 
    {
        window.open("https://mail.yahoo.com", "_blank")
        speak("Opening Yahoo Mail")
    } 

    else if (message.includes("open stackoverflow")) 
    {
        window.open("https://stackoverflow.com", "_blank")
        speak("Opening Stack Overflow")
    } 

    else if (message.includes("open medium")) 
    {
        window.open("https://medium.com", "_blank")
        speak("Opening Medium")
    } 

    else if (message.includes("open dev.to")) 
    {
        window.open("https://dev.to", "_blank")
        speak("Opening Dev.to")
    } 

    else if (message.includes("open hackerrank")) 
    {
        window.open("https://hackerrank.com", "_blank")
        speak("Opening HackerRank")
    } 

    else if (message.includes("open hackerearth")) 
    {
        window.open("https://hackerearth.com", "_blank")
        speak("Opening HackerEarth")
    } 

    else if (message.includes("open leetcode")) 
    {
        window.open("https://leetcode.com", "_blank")
        speak("Opening LeetCode")
    }

    else if (message.includes("open codechef")) 
    {
        window.open("https://codechef.com", "_blank")
        speak("Opening CodeChef")
    }

    else if (message.includes("open codeforces")) 
    {
        window.open("https://codeforces.com", "_blank")
        speak("Opening Codeforces")
    } 

    else if (message.includes("open topcoder")) 
    {
        window.open("https://topcoder.com", "_blank")
        speak("Opening Topcoder")
    } 

    else if (message.includes("open kaggle")) 
    {
        window.open("https://kaggle.com", "_blank")
        speak("Opening Kaggle")
    }

    else if (message.includes("open coursera")) 
    {
        window.open("https://coursera.org", "_blank")
        speak("Opening Coursera")
    } 

    else if (message.includes("open udemy")) 
    {
        window.open("https://udemy.com", "_blank")
        speak("Opening Udemy")
    } 

    else if (message.includes("open edx")) 
    {
        window.open("https://edx.org", "_blank")
        speak("Opening edX")
    } 

    else if (message.includes("open khan academy")) 
    {
        window.open("https://khanacademy.org", "_blank")
        speak("Opening Khan Academy")
    } 

    else if (message.includes("open skillshare")) 
    {
        window.open("https://skillshare.com", "_blank")
        speak("Opening Skillshare")
    } 

    else if (message.includes("open pluralsight")) 
    {
        window.open("https://pluralsight.com", "_blank")
        speak("Opening Pluralsight")
    } 

    else if (message.includes("open linkedin learning")) 
    {
        window.open("https://linkedin.com/learning", "_blank")
        speak("Opening LinkedIn Learning")
    } 

    else if (message.includes("open lynda")) 
    {
        window.open("https://lynda.com", "_blank")
        speak("Opening Lynda")
    } 

    else if (message.includes("open futurelearn")) 
    {
        window.open("https://futurelearn.com", "_blank")
        speak("Opening FutureLearn")
    } 

    else if (message.includes("open datacamp")) 
    {
        window.open("https://datacamp.com", "_blank")
        speak("Opening DataCamp")
    } 

    else if (message.includes("open codecademy")) 
    {
        window.open("https://codecademy.com", "_blank")
        speak("Opening Codecademy")
    } 

    else if (message.includes("open brilliant")) 
    {
        window.open("https://brilliant.org", "_blank")
        speak("Opening Brilliant")
    } 

    else if (message.includes("open treehouse")) 
    {
        window.open("https://teamtreehouse.com", "_blank")
        speak("Opening Treehouse")
    } 

    else if (message.includes("open ted")) 
    {
        window.open("https://ted.com", "_blank")
        speak("Opening TED")
    } 

    else if (message.includes("open duolingo")) 
    {
        window.open("https://duolingo.com", "_blank")
        speak("Opening Duolingo")
    }
     
    else if (message.includes("open babbel")) 
    {
        window.open("https://babbel.com", "_blank")
        speak("Opening Babbel")
    }

    else if (message.includes("open rosetta stone")) 
    {
        window.open("https://rosettastone.com", "_blank")
        speak("Opening Rosetta Stone")
    }

    else if (message.includes("open memrise")) 
    {
        window.open("https://memrise.com", "_blank")
        speak("Opening Memrise")
    }

    else if (message.includes("open busuu")) 
    {
        window.open("https://busuu.com", "_blank")
        speak("Opening Busuu")
    } 

    else if (message.includes("open mondly")) 
    {
        window.open("https://mondly.com", "_blank")
        speak("Opening Mondly")
    } 

    else if (message.includes("open italki")) 
    {
        window.open("https://italki.com", "_blank")
        speak("Opening Italki")
    } 

    else if (message.includes("open preply")) 
    {
        window.open("https://preply.com", "_blank")
        speak("Opening Preply")
    } 

    else if (message.includes("open cambly")) 
    {
        window.open("https://cambly.com", "_blank")
        speak("Opening Cambly")
    }

    else if (message.includes("open lingoda")) 
    {
        window.open("https://lingoda.com", "_blank")
        speak("Opening Lingoda")
    }

    else if(message.includes("open sbi"))
    {
        window.open("https://www.onlinesbi.sbi", "_blank")
        speak("Opening State Bank of India")
    }

    else if(message.includes("open axis bank"))
    {
        window.open("https://www.axisbank.com", "_blank")
        speak("Opening Axis Bank")
    }

    else if(message.includes("open bob"))
    {
        window.open("https://www.bankofbaroda.in", "_blank")
        speak("Opening Bank of Baroda")
    }

    else if(message.includes("open rbi"))
    {
        window.open("https://www.rbi.org.in", "_blank")
        speak("Opening Reserve Bank of India")
    }

    else 
    {
        speak("I am sorry, I didn't understand that. Can you please repeat")
    }
}
