import { useState, useEffect } from 'react';
import '../styles/components/QuoteSlider.css';

const quotes = [
  {
    text: "Success doesn't come from what you do occasionally, it comes from what you do consistently.",
    author: "Marie Forleo",
    source: "Motivational Speaker"
  },
  {
    text: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
    source: "Author & Humorist"
  },
  {
    text: "Push yourself, because no one else is going to do it for you.",
    author: "Anonymous",
    source: "UPSC Spirit"
  },
  {
    text: "Doubt kills more dreams than failure ever will.",
    author: "Suzy Kassem",
    source: "Rise Up and Salute the Sun"
  },
  {
    text: "You're gonna carry that weight.",
    author: "Cowboy Bebop",
    source: "See You Space Cowboy..."
  },
  {
    text: "Wake up, Samurai. We have a city to burn.",
    author: "Johnny Silverhand",
    source: "Cyberpunk 2077"
  },
  {
    text: "Dream is not that which you see while sleeping, it is something that does not let you sleep.",
    author: "Dr. A.P.J. Abdul Kalam",
    source: "Wings of Fire"
  },
  {
    text: "Hard work beats talent when talent doesn’t work hard.",
    author: "Tim Notke",
    source: "Coach"
  },
  {
    text: "You don’t have to be great to start, but you have to start to be great.",
    author: "Zig Ziglar",
    source: "Motivational Speaker"
  },
  {
    text: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing.",
    author: "Pelé",
    source: "Football Legend"
  },
  {
    text: "Stay away from those people who try to disparage your ambitions.",
    author: "Mark Twain",
    source: "Author"
  },
  {
    text: "Study while others are sleeping; work while others are loafing; prepare while others are playing; and dream while others are wishing.",
    author: "William Arthur Ward",
    source: "Inspirational Author"
  },
  {
    text: "The pain you feel today will be the strength you feel tomorrow.",
    author: "Anonymous",
    source: "UPSC Mindset"
  },
  {
    text: "Success isn’t always about greatness. It’s about consistency. Consistent hard work leads to success.",
    author: "Dwayne Johnson",
    source: "Actor & Former Wrestler"
  },
  {
    text: "Perseverance is not a long race; it is many short races one after the other.",
    author: "Walter Elliot",
    source: "Politician"
  }
];


const QuoteSlider = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransition(true);
      setTimeout(() => {
        setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
        setTransition(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentQuote = quotes[currentQuoteIndex];

  return (
    <div className="cyberpunk-slider">
      <div className={`quote-container ${transition ? 'fade-out' : 'fade-in'}`}>
        <div className="quote-text glitched" data-text={currentQuote.text}>
          "{currentQuote.text}"
        </div>
        <div className="quote-author">
          — {currentQuote.author}, <span className="quote-source">{currentQuote.source}</span>
        </div>
      </div>
      <div className="slider-controls">
        {quotes.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === currentQuoteIndex ? 'active' : ''}`}
            onClick={() => {
              setTransition(true);
              setTimeout(() => {
                setCurrentQuoteIndex(index);
                setTransition(false);
              }, 500);
            }}
            aria-label={`View quote ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default QuoteSlider;
