const { expect, assert } = require('chai');
const wrap = require('./wrap');

const teststring = "Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula."
const output= wrap(teststring, 20);

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('Make sure return is a string', ()=>{
    assert(typeof (wrap('',10))==='string', 'Is a string')
  })
  it('Doesnt split in the middle of the word', () =>{
     const rows = output.split("\n")
     let arrayresult = teststring.split(' ')
     rows.forEach((cur)=>{
       let curarray = cur.split(" ")
       let last = curarray[curarray.length-1]
       expect(arrayresult.includes(last)).to.equal(true)
     })
  })
  it('Each column length is less than the the column number given', () =>{
    output.split('\n').forEach((el)=>{
      expect(el.length<=20).to.equal(true)
    })
  })
});