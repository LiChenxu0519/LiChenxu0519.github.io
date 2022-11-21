const wrapper = document.querySelector(".wrapper")
const neck = document.querySelector(".neck")
const wowEl = document.querySelector("#wows")

const largeWowContainer = document.querySelector("#largewowcontainer")
/*/const rainbowWowContainer = document.querySelector("#rainbowwowcontainer")
const dogePrimeContainer = document.querySelector("#dogeprimecontainer")
const secretWowContainer = document.querySelector("#secretwowcontainer")
const fibowowcontainer = document.querySelector("#fibowowcontainer")/*/

const largewowEl = document.querySelector("#largeWows")
const lengthEl = document.querySelector("#length")
/*/const rainbowsEl = document.querySelector("#rainbow")
const dogePrimeEl = document.querySelector("#dogeprime")
const secretWowEl = document.querySelector("#secretwow")
const fiboWowEl = document.querySelector("#fibo")/*/

let wows = -1
let largewows = 0
/*/let rainbowwows = 0
let secretwows = 0
let minidoges = 0/*/
const primeWows = []

let fibonacciChallengeStarted = false
let fibonacciChallengeComplete = false
const fibonacciWows = []
const fibonacciSecretWows = []
let dogePrime = false


const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        injectNeck(entry)
      }
    })
  },
  { rootMargin: "0px 0px 100% 0px" }
)

/*/document.addEventListener("click", onBodyClick)/*/

window.onscroll = function(ev) {
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    const lastEl = document.querySelector(".neck:last-child")
    injectNeck({ target: lastEl })
  }
}

function injectNeck(entry) {
  // Stops observing the old neck element
  observer.unobserve(entry.target)

  const clonedNeck = neck.cloneNode(true)
  wrapper.appendChild(clonedNeck)
  observer.observe(clonedNeck)

  injectWow()
}

function clickAlert() {
  alert("Procrastination is the thief of time.");
}

function injectWow() {
  wows++
  wowEl.innerText = wows

  const newWow = document.createElement("div")
  newWow.className = "textwow"
  newWow.id = "textwow"
  newWow.innerText = "Keep going! "
  newWow.style.left = Math.random() * (window.innerWidth - 180) + "px"
  newWow.style.top = wrapper.offsetHeight - 220 + "px"
  document.body.appendChild(newWow)

  if (isPrime(wows)) {
    primeWows.push(newWow)
  }

  if (isFibonacci(wows)) {
    fibonacciWows.push(newWow)
  }

  if (wows === 20) {
    lengthEl.innerText = "good"
  }

  if (wows === 30) {
    lengthEl.innerText = "very good"
  }

  if (wows === 40) {
    lengthEl.innerText = "great"
  }

  if (wows === 50) {
    lengthEl.innerText = "amazing"
  }

  if (wows === 60) {
    lengthEl.innerText = "exceptional"
  }

  if (wows === 70) {
    lengthEl.innerText = "unbelievable"
  }

  if (wows === 80) {
    lengthEl.innerText = "incredible"
  }

  if (wows === 90) {
    lengthEl.innerText = "BEST"
  }

  if (wows > 2 && Math.random() > 0.992) {
    injectLargeWow()
  }
}

const newWow = document.createElement("div");
newWow.addEventListener("click", function () {
    this.textContent = "YOU CLICKED ME";
});

function injectLargeWow() {
  largewows++
  largewowEl.innerText = largewows
 
  largeWowContainer.classList.remove("hidden")

  const newWow = document.createElement("div")
  newWow.className = "largewow"
  newWow.innerText = "You are the best procrastinator!"
  newWow.style.left = "30%"
  newWow.style.top = wrapper.offsetHeight - 10 + "px"
  document.body.appendChild(newWow)
}

function isPrime(n) {
  if (n < 2) return false
  var q = Math.floor(Math.sqrt(n))

  for (var i = 2; i <= q; i++) {
    if (n % i == 0) {
      return false
    }
  }

  return true
}

function isSquare(n) {
  return n > 0 && Math.sqrt(n) % 1 === 0
}

function isFibonacci(numberToCheck) {
  return (
    isSquare(5 * numberToCheck * numberToCheck + 4) ||
    isSquare(5 * numberToCheck * numberToCheck - 4)
  )
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

observer.observe(neck)