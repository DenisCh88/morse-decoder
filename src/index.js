const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '     ':  ' ',
};

function decode(expr) {
    let arrExpr = expr.split(''),
     size = 2,
     dotsArr = [],
     pointsArr = [],  
     size2 = 5,
     dotOrSlashArr = [],
     lettersArr = [],
     wordsArr = [],
     codeArr = [];
 
  
  for (let i= 0; i < arrExpr.length/size; i++){
      dotsArr[i] = arrExpr.slice((i*size), (i*size) + size )
      pointsArr[i] = dotsArr[i].join('');
  }
  
  pointsArr.forEach(item => {
     if (item === '00') {
         dotOrSlashArr.push('');        
      } else if (item === '10') {
         dotOrSlashArr.push('.');
      } else if ( item === '11') {
         dotOrSlashArr.push('-');
      } else {
        dotOrSlashArr.push(' ');
      }
  })
 
  for (let i = 0; i <dotOrSlashArr.length/size2; i++){
    lettersArr[i] = dotOrSlashArr.slice((i*size2), (i*size2) + size2 );
  }
  lettersArr.forEach( item => {
    wordsArr.push((item.join('')));
  })
  wordsArr.forEach(item => {
    codeArr.push(MORSE_TABLE[item])
  })
return codeArr.join('');
}

module.exports = {
    decode
}