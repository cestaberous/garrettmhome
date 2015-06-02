var quote = document.getElementById("qotd");
//array of quotes

var quotelist = ['"The reason birds can fly and we cant is simply because they have perfect faith, for to have faith is to have wings." <br/> - J.M. Barrie',
'"We can never know what to want, because, living only one life, we can neither compare it with our previous lives nor perfect it in our lives to come." <br/> - Milan Kundera',
'"How satisfying it is to leave a mark on a blank surface. To make a map of my movement - no matter how temporary." <br/> - Craig Thompson',
'"You can forget that other people carry pieces of your own story around in their heads. Ive always thought--put together all those random pieces from everyone whos ever known you from your parents to the guy who once sat next to you on a bus, and you would probably see a fuller version of your life than you even did while living it." <br/> - Deb Caletti',
'"It wasnt infinity in fact. Infinity itself looks flat and uninteresting. Looking up into the night sky is looking into infinity--distance is incomprehensible and therefore meaningless. The chamber into which the aircar emerged was anything but infinite, it was just very very very big, so big that it gave the impression of infinity far better than infinity itself." <br/> - Douglas Adams',
'"It is a profound and necessary truth that the deep things in science are not found because they are useful; they are found because it was possible to find them." <br/> - J Robert Oppenheimer',
'"All things, even the deepest sorrow or the most profound happiness are all temporary. Hope is fuel for the soul, without hope, forward motion ceases." <br/> - Landon Parham',
'"A story so cherished it has to be dressed in casualness to disguise its significance in case the listener turned out to be unsympathetic." <br/> - Diane Setterfield',
'"Intelligence and war are games, perhaps the only meaningful games left. If any player becomes too proficient, the game is threatened with termination." <br/> - William S. Burroughs',
'"Only two things are infinite, the universe and human stupidity, and Im not sure about the former." <br/> - Albert Einstein',
'"To raise new questions, new possibilities, to regard old problems from a new angle, requires creative imagination and marks real advance in science." <br/> - Albert Einstein',
'"We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology." <br/> - Carl Sagan',
'"Science knows no country, because knowledge belongs to humanity, and is the torch which illuminates the world. Science is the highest personification of the nation because that nation will remain the first which carries the furthest the works of thought and intelligence." <br/> - Louis Pasteur',
'"The distance between insanity and genius is measured only by success." <br/> - Bruce Feirstein',
'"Our greatest glory is not in never falling, but in rising every time we fall." <br/> - Confucius',
'"Few will have the greatness to bend history itself; but each of us can work to change a small portion of events, and in the total; of all those acts will be written the history of this generation." <br/> - Robert Kennedy',
'"A small body of determined spirits fired by an unquenchable faith in their mission can alter the course of history." <br/> - Ghandi',
'"History, despite its wrenching pain, cannot be unlived, but if faced with courage, need not be lived again." <br/> - Maya Angelou',
'"The aim of art is to represent not the outward appearance of things, but their inward significance." <br/> - Aristotle',
'"Excellence is an art won by training and habituation. We do not act rightly because we have virtue or excellence, but we rather have those because we have acted rightly. We are what we repeatedly do. Excellence, then, is not an act but a habit." <br/> - Aristotle',
'"Thats What" <br/> - She',
'"All men dream, but not equally. Those who dream by night in the dusty recesses of their minds, wake in the day to find that it was vanity: but the dreamers of the day are dangerous men, for they may act on their dreams with open eyes, to make them possible." <br/> - T.E. Lawrence',
];

var nextQuote = Math.floor(Math.random() * 22) + 1 - 1;

quote.innerHTML = quotelist[nextQuote];

//Math.floor((Math.random() * 10) + 1)

