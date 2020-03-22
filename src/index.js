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
};


function decode(str) {
    let arr = Array.from(str);
    let newArr = [];
    for (let i = 0; i < arr.length; i += 10){
     newArr.push(arr.slice(i, i + 10));      
    }
    let t = newArr.map((item) => {
      let result = ''
      for (let i = 0; i < item.length; i++){
       if (item[i] === '1') {
         if(item[i + 1] === '1'){
           result += '-';
           i+=1;
         } else result += '.'
       }
      }
      return result
    })
    let a = t.map((item) => {
      if(item === '') {
        return ' ';
      } else return MORSE_TABLE[item];
    })   
   return a.join('')
}
module.exports = {
    decode
}
