import React, { useState } from "react";
import "./codeb.css";
import Nato from "../nato.webp";
import Bina from "../binary.jpg";

const natoAlphabet = {
  a: "Alpha",
  b: "Bravo",
  c: "Charlie",
  d: "Delta",
  e: "Echo",
  f: "Foxtrot",
  g: "Golf",
  h: "Hotel",
  i: "India",
  j: "Juliett",
  k: "Kilo",
  l: "Lima",
  m: "Mike",
  n: "November",
  o: "Oscar",
  p: "Papa",
  q: "Quebec",
  r: "Romeo",
  s: "Sierra",
  t: "Tango",
  u: "Uniform",
  v: "Victor",
  w: "Whiskey",
  x: "X-ray",
  y: "Yankee",
  z: "Zulu",
  0: "Zero",
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
  "!": "Exclamation Mark",
  '"': "Double Quote",
  "#": "Hash",
  $: "Dollar Sign",
  "%": "Percent Sign",
  "&": "Ampersand",
  "'": "Apostrophe",
  "(": "Left Parenthesis",
  ")": "Right Parenthesis",
  "*": "Asterisk",
  "+": "Plus Sign",
  ",": "Comma",
  "-": "Hyphen",
  ".": "Period",
  "/": "Slash",
  ":": "Colon",
  ";": "Semicolon",
  "<": "Less Than",
  "=": "Equals Sign",
  ">": "Greater Than",
  "?": "Question Mark",
  "@": "At Symbol",
  "[": "Left Square Bracket",
  "\\": "Backslash",
  "]": "Right Square Bracket",
  "^": "Caret",
  _: "Underscore",
  "`": "Grave Accent",
  "{": "Left Curly Brace",
  "|": "Vertical Bar",
  "}": "Right Curly Brace",
  "~": "Tilde",
};

const NatoPhonetic = () => {
  const [inputText, setInputText] = useState("");

  const translateToNato = (text) => {
    return text
      .split("")
      .map((char) => natoAlphabet[char.toLowerCase()] || char)
      .join(" ");
  };

  return (
    <div className="main">
      <div className="natoContainer">
        <div className="imgContainer">
          <img src={Nato} alt="natolog" />
        </div>
        <div className="natoMiniCont">
        <h1>NATO Phonetic Alphabet Breaker</h1>
          <input
            type="text"
            className="natoInput"
            placeholder="Type the word here.."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
          
        <div className="imgContainer">
          <img src={Bina} alt="binaryimg" />
        </div>
      </div>
      <div className="natoOutput">
        <h3>CODE:</h3>
        <p>{translateToNato(inputText)}</p>
      </div>
    </div>
  );
};

export default NatoPhonetic;
