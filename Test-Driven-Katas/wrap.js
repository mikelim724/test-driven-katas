// import { builtinModules } from "module"


function wrap(string, colnum) {
  if(string==='') {return ''}
  let finaloutput = ''
  // for(let i=0; i<string.length; i++){
  //   if(i%colnum===0){
  //     finaloutput+= '\n'
  //   }
  //   let cur = string[i]
  //   finaloutput+=cur
  // }
  // return finaloutput
  let wordsArray = string.split(' ')
  let counter = 1
  wordsArray.forEach((word)=>{
    console.log(finaloutput.length)
    if(finaloutput.length+word.length+ " "<= colnum*counter){
      finaloutput+= (word + " ")
    }
    else{
      finaloutput= finaloutput.slice(0,finaloutput.length-1) +`\n${word}` + ' '
      counter++
    }
  })
  return finaloutput.slice(0,-1)
}

module.exports = wrap

// console.log(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20))

