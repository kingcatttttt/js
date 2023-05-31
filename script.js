let a = "текст"
let b = "и пошла вода"
const truncate = (text, length) => {
  // BEGIN (write your solution here)
  let textt = a.slice(0,3)
  let tex = b.slice(0,5)
  let points = textt + "..."
  let bb = tex +  "..."
  return console.log(`${points}\n${bb}`)
  // END
};
truncate()



