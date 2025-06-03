import { useState, useEffect } from "react";
import "./style.css";
import { FaCopy, FaXTwitter, FaQuoteLeft, FaQuoteRight, FaCheck } from "react-icons/fa6";
import { IoVolumeHigh } from "react-icons/io5";

const index = () => {
  const [quote, setQuote] = useState({
    quoteText: "Find your best Quote of the Day. Have a good day.............",
    author: "@mr. hello",
  });

  let quotes = "";
  async function randomQuote() {
    const res = await fetch(`https://dummyjson.com/quotes/random`);
    quotes = await res.json();
    setQuote({
      quoteText: quotes.quote,
      author: quotes.author,
    });
  }

  const twitter = () => {
    let tweetUrl = `https://x.com/intent/tweet?url=${quote.quoteText} --By ${quote.author}`;
    window.open(tweetUrl, "_blank");
  };

  const copy = () => {
    navigator.clipboard.writeText(quote.quoteText);

    const copied = document.getElementById("copied-successfully");
    copied.style.display = "block";
    copied.classList.add("copied-success");

    setTimeout(() => {
      copied.style.display = "none";
      copied.classList.remove("copied-success");
    }, "2500");
  };

  const sound = () => {
    let utterance = new SpeechSynthesisUtterance(
      `${quote.quoteText} by ${quote.author}`
    );
    speechSynthesis.speak(utterance);
  };
  
  useEffect(() => {
    randomQuote();
  }, []);

  return (
    <div>
      <div className="container">
        <h1>Quote of the Day</h1>
        <div className="content">
          <span>
            <FaQuoteLeft color="royalblue" />
          </span>
          <span id="quote">{quote.quoteText}</span>
          <span>
            <FaQuoteRight color="royalblue" />
          </span>
        </div>
        <h4 className="author">
          <span>--</span>
          <span id="name">{quote.author}</span>
        </h4>
        <div className="buttons">
          <ul>
            <li id="sound" onClick={sound}>
              <IoVolumeHigh size={22} />
            </li>
            <li id="copy" onClick={copy}>
              <FaCopy size={20} />
            </li>
            <li id="twitter" onClick={twitter}>
              <FaXTwitter size={22} />
            </li>
          </ul>
          <button id="new-quote" onClick={randomQuote}>
            New Quote
          </button>
        </div>
        <div id="copied-successfully">
          <FaCheck className="check" /> Quote Copied
        </div>
      </div>
    </div>
  );
};

export default index;
