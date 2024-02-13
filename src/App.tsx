import { useState } from "react";
import "./App.css";
import JSConfetti from 'js-confetti'

const noPhrases = [
  "No",
  "Are you sure?",
  "Like, are you really sure?",
  "T-T",
  "Are you really really really sure?",
  "Pleeeeeeeeeease",
  ":(",
];

const peachPicSources = [
  "https://media.tenor.com/qSGlyWc8uv8AAAAi/peach-goma-kiss-peach-and-goma.gif",
  "https://media.tenor.com/-FI5WRxJ23kAAAAi/peach-goma-love.gif",
  "https://media.tenor.com/I7KdFaMzUq4AAAAi/peach-goma.gif",
  "https://c.tenor.com/VmvykNbcTdkAAAAC/tenor.gif",
  "https://c.tenor.com/gvrNb7dNKFQAAAAC/tenor.gif",
  "https://gifdb.com/images/high/peach-and-goma-498-x-498-gif-in0q3jxq9f93uab0.gif",
];

const catPicSources = [
  "https://i.imgflip.com/24rolu.jpg?a474096",
  "https://www.icegif.com/wp-content/uploads/2022/10/icegif-819.gif",
  "https://media1.tenor.com/m/aZ1PR9DpnOYAAAAC/annoyed-disappointed.gif",
];

const lastPhrases = [
  "don't be shy, say yes",
  "pookie whyyyyyyy",
  "no more no button priveleges",
];

const jsConfetti = new JSConfetti();

function App() {
  const [noCount, setNoCount] = useState(1);
  const [noPic, setNoPic] = useState(0);
  const [yesPress, setYesPress] = useState(false);
  const [lastChance, setLastChance] = useState(false);
  const [catPic, setCatPic] = useState(0);
  const [lastPhrase, setLastPhrase] = useState(0);
  const [veryLastChance, setVeryLastChance] = useState(false);

  const yesSize = noCount == 1 ? 16 : noCount * 10 + 16;

  return (
    <div className="valentines-container">
      {lastChance ? (
        <>
          <img alt="last-cat" src={catPicSources[catPic]} />
          <div className="last-text"> {lastPhrases[lastPhrase]} </div>
          <div className="buttons">
            <button
              className="yes-btn-last"
              onClick={() => {
                setYesPress(true);
                setLastChance(false);
              }}
            >
              Yes
            </button>
            {!veryLastChance && (
              <button
                className="no-btn-last"
                onClick={() => {
                  catPic + 1 < catPicSources.length && setCatPic(catPic + 1);
                  lastPhrase + 1 < lastPhrases.length &&
                    setLastPhrase(lastPhrase + 1);
                  setVeryLastChance(lastPhrase + 1 >= lastPhrases.length - 1);
                }}
              >
                No
              </button>
            )}
          </div>
        </>
      ) : yesPress ? (
        <>
          <img
            alt="falling"
            src="https://i.pinimg.com/originals/76/01/19/760119f64707096c0debac3216ec04d2.gif"
          />
          <button
            className="heart-btn"
            onClick={() => {
              // jsConfetti.addConfetti();
              jsConfetti.addConfetti({
                emojis: ["🩷", "❤️", "🩵", "💜", "🤍"],
                emojiSize: 15,
                confettiNumber: 150,
              });
            }}
          >
            yay!
          </button>
        </>
      ) : (
        <>
          <img alt="cartoon-peach" src={peachPicSources[noPic]} />
          <div className="valentines-text">Will you be my valentine?</div>
          <div className="buttons">
            <button
              className="yes-btn"
              onClick={() => setYesPress(true)}
              style={{ fontSize: `${yesSize}px` }}
            >
              Yes
            </button>
            <button
              className="no-btn"
              onClick={() => {
                noPic + 1 < peachPicSources.length && setNoPic(noPic + 1);
                noCount + 1 < noPhrases.length && setNoCount(noCount + 1);
                setLastChance(noCount >= noPhrases.length - 1);
              }}
            >
              {noPhrases[noCount - 1]}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
