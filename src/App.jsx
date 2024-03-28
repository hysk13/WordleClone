import { useState, useEffect } from 'react';
import Board from './Board.jsx';
import Keyboard from './Keyboard.jsx';
import Logo from './Logo.jsx';
import EndGUI from './Stats.jsx'
import Notification from './Notification.jsx';

// https://github.com/Kinkelin/WordleCompetition/blob/main/data/official/combined_wordlist.txt <-- Thanks!
import word_list from '../Assets/Words.json';

import './Styles/App.css';

// https://javascript.plainenglish.io/create-an-array-of-alphabet-characters-in-javascript-with-this-simple-trick-930033079dd3 <- Credit
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));
const answersList = word_list['words_list'];

let charTypable = true;
let charErasable = false;
let charEnterable = false;
let roundOver = false;
let showStats = false;
let win = false;
let notificationShow = false;

let wordTxt = "";
let answerTxt = "";
let notificationTxt = "";

let currentRow = 0;
let currentTries = 0;

let colorProp = [
  ['blank', 'blank', 'blank', 'blank', 'blank'],
  ['blank', 'blank', 'blank', 'blank', 'blank'],
  ['blank', 'blank', 'blank', 'blank', 'blank'],
  ['blank', 'blank', 'blank', 'blank', 'blank'],
  ['blank', 'blank', 'blank', 'blank', 'blank'],
  ['blank', 'blank', 'blank', 'blank', 'blank']
]

let keyColorProp = {
  'q': 'blank',
  'w': 'blank',
  'e': 'blank',
  'r': 'blank',
  't': 'blank',
  'y': 'blank',
  'u': 'blank',
  'i': 'blank',
  'o': 'blank',
  'p': 'blank',
  'a': 'blank',
  's': 'blank',
  'd': 'blank',
  'f': 'blank',
  'g': 'blank',
  'h': 'blank',
  'j': 'blank',
  'k': 'blank',
  'l': 'blank',
  'z': 'blank',
  'x': 'blank',
  'c': 'blank',
  'v': 'blank',
  'b': 'blank',
  'n': 'blank',
  'm': 'blank',
}

export default function App() {

  const [answer, setAnswer] = useState(null);
  const [word, setWord] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [rowIndex, setRowIndex] = useState(0);
  const [board, setBoard] = useState(["", "", "", "", "", ""]);
  const [force, setForce] = useState('');
  const [notifShow, setNotifShow] = useState(false);

  useEffect(() => {
    setAnswer(answersList[Math.floor(Math.random()*answersList.length)-1]);
    document.addEventListener('keydown', detectKeyPress, true);
  }, []);

  useEffect(() => {
    if (answer != undefined) {
      answerTxt = answer;
    } else {
      setAnswer(answersList[Math.floor(Math.random()*answersList.length)-1]);
    }
  }, [answer])

  useEffect(() => {
    let b = [...board];
    b[rowIndex] = word;
    setBoard(b);
    wordTxt = word;
  }, [word]);

  useEffect(() => {
    if (charIndex > 4) {
      charTypable = false;
      charErasable = true;
      charEnterable = true;
    } else if (charIndex < 0) {
      charTypable = true;
      charErasable = false;
      charEnterable = false;
      setCharIndex(0);
    } else {
      charTypable = true;
      charErasable = true;
      charEnterable = false;
    }
  }, [charIndex]);

  useEffect(() => {
    if (rowIndex > 5) {
      roundOver = true;
    }
    currentRow = rowIndex;
  }, [rowIndex]);

  useEffect(() => {
    notificationShow = notifShow;
  }, [notifShow])

  function detectKeyPress(e) {
    if (!roundOver) {
      if ((alphabet.includes(e.key.toUpperCase())) && (charTypable)) {
        setWord(w => w + e.key.toUpperCase());
        setCharIndex(index => index + 1);
      }
      else if ((e.key == 'Backspace') && (charErasable)) {
        setWord(w => w.slice(0, -1));
        setCharIndex(index => index - 1);
      }
      else if ((e.key == 'Enter') && (charEnterable)) {
        if (answersList.includes(wordTxt.toLowerCase())) {
          currentTries++;
          setRowIndex(index => index + 1);
          setWord("");
          setCharIndex(0);
          charTypable = true;
          charErasable = false;
          charEnterable = false;
          let color = formatAnswer();
          let index = 0;
          for (let x of color) {
            colorProp[currentRow][index] = x.toLowerCase();
            index++;
          }
          if (!color.includes('Gray') && !color.includes('Yellow')) {
            win = true;
            showStats = true;
            roundOver = true;
            setForce('Test');
          }
        } else {
          notificationTxt = "Word Not Recognized";
          setNotifShow(true);
          setForce('Test');
          setTimeout(() => {
            notificationTxt = '';
            setNotifShow(false);
            setForce('Test');
          }, 3000)
        }
      }
    } else {
      if (!showStats) {
        win = false;
        showStats = true;
        roundOver = true;
        setForce('Test');
      }
    }
  }

  function formatAnswer() {
    let color = [];
    let copyOfWord = wordTxt.split('');
    let copyOfAnswer = answerTxt.split('');
    let index = 0;
    for (let i of copyOfAnswer) {
      if (copyOfWord[index] == i.toUpperCase()) {
        color.push('Green');
        keyColorProp[copyOfWord[index].toLowerCase] = 'Green';
      } else if (copyOfWord.includes(i.toUpperCase())) {
        color.push('Yellow');
        keyColorProp[copyOfWord[index].toLowerCase()] = 'Yellow';
      } else {
        color.push('Gray')
        keyColorProp[copyOfWord[index].toLowerCase()] = 'Gray';
      }
      index++;
    }
    return color;
  }
  
  function restartRound() {

    roundOver = false;
    currentTries = 0;
    win = false;
    setAnswer(answersList[Math.floor(Math.random()*answersList.length)-1]);
    setCharIndex(0);
    setRowIndex(0);
    setBoard(["", "", "", "", "", "", ""]);
    colorProp = [
      ['blank', 'blank', 'blank', 'blank', 'blank'],
      ['blank', 'blank', 'blank', 'blank', 'blank'],
      ['blank', 'blank', 'blank', 'blank', 'blank'],
      ['blank', 'blank', 'blank', 'blank', 'blank'],
      ['blank', 'blank', 'blank', 'blank', 'blank'],
      ['blank', 'blank', 'blank', 'blank', 'blank']
    ]
    keyColorProp = [{
      'q': 'blank',
      'w': 'blank',
      'e': 'blank',
      'r': 'blank',
      't': 'blank',
      'y': 'blank',
      'u': 'blank',
      'i': 'blank',
      'o': 'blank',
      'p': 'blank',
      'a': 'blank',
      's': 'blank',
      'd': 'blank',
      'f': 'blank',
      'g': 'blank',
      'h': 'blank',
      'j': 'blank',
      'k': 'blank',
      'l': 'blank',
      'z': 'blank',
      'x': 'blank',
      'c': 'blank',
      'v': 'blank',
      'b': 'blank',
      'n': 'blank',
      'm': 'blank',
    }]
    setForce('Test');
  }

  function mobilePress(key) {
    detectKeyPress({
      key: key,
    })
  }

  return (
    <>
      <div className='web-wrap'>
        <Logo className={'logo'} />
        <div className='app-wrap'>
          <Notification txt={ notificationTxt } />
          <Board board={ board } colorProp={ colorProp }/>
          <EndGUI win={ win } tries={ currentTries } word={ answerTxt } show={ roundOver } restartRound={ restartRound } />
        </div>
        <Keyboard className={'keyboard'} onPress={ mobilePress } colorProp={ keyColorProp } />
        <p style={ {display: 'none'} }>{ force }</p>
      </div>
    </>
  )

}