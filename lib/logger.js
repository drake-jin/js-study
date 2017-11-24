const beautify = require("json-beautify");

module.exports = function(delegate, str){
  str = beautify(str, null, 2, 100)
  switch(delegate){
    case 'd':
      console.log(`=========== ${str} =============`)
      break
    case 'o':
      console.log(`출력값: ${str}`)
      break
    case 'i':
      console.log(`입력값: ${str}`)
      break
    case 'nl':
      console.log()
      break
    default:
      console.log(delegate)
      break
  }
}

