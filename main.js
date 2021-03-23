/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/

const meanD6 = document.querySelector('#d6-rolls-mean')
meanD6.innerText = "NA"
const medianD6 = document.querySelector('#d6-rolls-median')
medianD6.innerText = "NA"
const modeD6 = document.querySelector('#d6-rolls-mode')
modeD6.innerText = "NA"
const meanDoubler = document.querySelector('#double-d6-rolls-mean')
meanDoubler.innerText = "NA"
const medianDoubler = document.querySelector('#double-d6-rolls-median')
medianDoubler.innerText = "NA"
const modeDoubler = document.querySelector('#double-d6-rolls-mode')
modeDoubler.innerText = "NA"
const meanD12 = document.querySelector('#d12-rolls-mean')
meanD12.innerText = "NA"
const medianD12 = document.querySelector('#d12-rolls-median')
medianD12.innerText = "NA"
const modeD12 = document.querySelector('#d12-rolls-mode')
modeD12.innerText = "NA"
const meanD20 = document.querySelector('#d20-rolls-mean')
meanD20.innerText = "NA"
const medianD20 = document.querySelector('#d20-rolls-median')
medianD20.innerText = "NA"
const modeD20 = document.querySelector('#d20-rolls-mode')
modeD20.innerText = "NA"

const dice1 = document.querySelector('#d6-roll')
dice1.src =`./images/start/d6.png`
const dice2and3 = document.querySelector('#double-d6-buttons img')
const dice2 = document.querySelector('#double-d6-roll-1')
const dice3 = document.querySelector('#double-d6-roll-2')
dice2.src = `./images/start/d6.png`
dice3.src = `./images/start/d6.png`
const dice4 = document.querySelector('#d12-roll')
dice4.src = `./images/start/d12.jpeg`
const dice5 = document.querySelector('#d20-roll')
dice5.src = `./images/start/d20.jpg`


/*******************
 * EVENT LISTENERS *
 *******************/

dice1.addEventListener('click', ()=>{
const random = getRandomNumber(6)
sixes.push(random)
dice1.src = `./images/d6/${random}.png`
const numMean = mean(sixes)
meanD6.innerText = numMean
const numMedian = median(sixes)
medianD6.innerText = numMedian
const numMode = mode(sixes)
modeD6.innerText = numMode
}
)

dice2and3.addEventListener('click',()=>{
const random1 = getRandomNumber(6)
const random2 = getRandomNumber(6)
doubleSixes.push(random1+random2)
dice2.src = `./images/d6/${random1}.png`
dice3.src = `./images/d6/${random2}.png`
const num = mean(doubleSixes)
meanDoubler.innerText = num
const numMedian = median(doubleSixes)
medianDoubler.innerText = numMedian
const numMode = mode(doubleSixes)
modeDoubler.innerText = numMode
  }
  )

dice4.addEventListener('click', ()=>{
const random = getRandomNumber(12)
twelves.push(random)
dice4.src = `./images/numbers/${random}.png`
const num = mean(twelves)
meanD12.innerText = num
const numMedian = median(twelves)
medianD12.innerText = numMedian
const numMode = mode(twelves)
modeD12.innerText = numMode
  }
  )

dice5.addEventListener('click', ()=>{
const random = getRandomNumber(20)
twenties.push(random)
dice5.src = `./images/numbers/${random}.png`
const num = mean(twenties)
meanD20.innerText = num
const numMedian = median(twenties)
medianD20.innerText = numMedian
const numMode = mode(twenties)
modeD20.innerText = numMode
  }
  )




/******************
 * RESET FUNCTION *
 ******************/

const reset = document.querySelector('#reset-button')
reset.addEventListener('click', ()=>{
dice1.src =`./images/start/d6.png`
dice2.src = `./images/start/d6.png`
dice3.src = `./images/start/d6.png`
dice4.src = `./images/start/d12.jpeg`
dice5.src = `./images/start/d20.jpg`
meanD6.innerText = "NA"
medianD6.innerText = "NA"
modeD6.innerText = "NA"
meanDoubler.innerText = "NA"
medianDoubler.innerText = "NA"
modeDoubler.innerText = "NA"
meanD12.innerText = "NA"
medianD12.innerText = "NA"
modeD12.innerText = "NA"
meanD20.innerText = "NA"
medianD20.innerText = "NA"
modeD20.innerText = "NA"
sixes = [];
doubleSixes = [];
twelves = [];
twenties = [];

})


/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/

/****************
 * MATH SECTION *
 ****************/

function mean(arr){
  let number = 0
  for (const num of arr){
    number+=num
  }
  number = number/(arr.length)
  return number.toFixed(2)
}

function median(arr){
  const arrSorted = sortByNumber(arr)
  let middle = Math.floor(arrSorted.length/2)
  if (arrSorted.length %2===0){
    middle = (arrSorted[middle]+arrSorted[Math.floor(arrSorted.length/2-1)])/2
  } else {
    middle = arrSorted[middle]
  }
  return middle.toFixed(2)
}

function mode (arr){
  const arrSorted = sortByNumber(arr)
  let newArr  = {}
  let modeN = 0;
  for (const num of arrSorted){
    if (num in newArr){
      newArr[num]++
    } else{
      newArr[num] =1
    } 
    if (newArr[modeN] === undefined || newArr[num]>newArr[modeN]){
      modeN = num
    }
  } 
  return modeN
} 