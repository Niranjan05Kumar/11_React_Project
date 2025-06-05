import "./style.css";
import { paragraphs } from "./paragraph.jsx";
import { useState, useEffect, useRef } from "react";

const index = () => {
  const [currentParagraph, setCurrentParagraph] = useState("");
  const maxTime = 60;
  const [leftTime, setLeftTime] = useState(maxTime);
  const [mistake, setMistake] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [cpm, setCpm] = useState(0);
  const inputRef = useRef(null);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const timerRef = useRef(null);

  const randomPara = () => {
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    const spans = paragraphs[randomIndex]
      .split("")
      .map((spanLetter, index) => <span key={index} className="span-letter">{spanLetter}</span>);
    setCurrentParagraph(spans);
  };

  useEffect(() => {
    inputRef.current.focus();
    randomPara();
    document.querySelector(".typing-text").addEventListener("click", () => inputRef.current.focus());
  }, []);

  useEffect(() => {
    if (isTyping && leftTime > 0) {
      timerRef.current = setInterval(() => {
        setLeftTime(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setIsTyping(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isTyping]);

  useEffect(() => {
    if (leftTime > 0) {
      let correctChars = charIndex - mistake;
      let totalTime = maxTime - leftTime;
      let wpm = Math.round((correctChars / 5) / (totalTime / 60));
      wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
      let cpm = Math.round((correctChars) / (totalTime / 60));
      cpm = cpm < 0 || !cpm || cpm === Infinity ? 0 : cpm;
      setWpm(wpm);
      setCpm(cpm);
    }
  }, [leftTime, charIndex, mistake]);

  const intiTyping = (e) => {
    if (!isTyping) {
      setIsTyping(true);
    }

    const inputValue = e.target.value;
    const typedChar = inputValue.slice(-1);
    const characters = document.querySelectorAll(".typing-text span");

    if (charIndex < characters.length && leftTime > 0) {
      if (inputValue.length < charIndex) {
        if (charIndex > 0) {
          const prevChar = characters[charIndex - 1];
          const wasIncorrect = prevChar.classList.contains("incorrect");
          prevChar.classList.remove("correct", "incorrect");

          setCharIndex(prev => prev - 1);
          if (wasIncorrect) {
            setMistake(prev => prev - 1);
          }

          characters.forEach((character) => {
            character.classList.remove("active");
          });
          characters[charIndex - 1].classList.add("active");
        }
        return;
      }

      if (typedChar === characters[charIndex].textContent) {
        characters[charIndex].classList.add("correct");
        setCharIndex(prev => prev + 1);
      } else {
        characters[charIndex].classList.add("incorrect");
        setMistake(prev => prev + 1);
        setCharIndex(prev => prev + 1);
      }

      characters.forEach((character) => {
        character.classList.remove("active");
      });
      if (charIndex + 1 < characters.length) {
        characters[charIndex + 1].classList.add("active");
      }

      if (charIndex === characters.length - 1) {
        setIsTyping(false);
      }
    } else {
      setIsTyping(false);
    }
  };

  const restartTest = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setLeftTime(maxTime);
    setMistake(0);
    setWpm(0);
    setCpm(0);
    setCharIndex(0);
    setIsTyping(false);
    inputRef.current.focus();
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    randomPara();
    setTimeout(() => {
      const characters = document.querySelectorAll(".typing-text span");
      characters.forEach((character) => {
        character.classList.remove("active", "correct", "incorrect");
      });
      if (characters.length > 0) {
        characters[0].classList.add("active");
      }
    }, 0);
  };

  return (
    <div>
      <div className="container">
        <h1>Typing Test</h1>
        <input type="text" id="input-field" ref={inputRef} onInput={intiTyping} />
        <div className="typing-text">
          <p>{currentParagraph}</p>
        </div>
        <div className="result-box">
          <div id="time">
            <h4>Time Left:</h4>
            <span>
              <b>{leftTime}</b>s
            </span>
          </div>
          <div id="Mistakes">
            <h4>Mistakes:</h4>
            <span>{mistake}</span>
          </div>
          <div id="wpm">
            <h4>WPM:</h4>
            <span>{wpm}</span>
          </div>
          <div id="cpm">
            <h4>CPM:</h4>
            <span>{cpm}</span>
          </div>
          <div id="try-again">
            <button onClick={restartTest}>Restart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
