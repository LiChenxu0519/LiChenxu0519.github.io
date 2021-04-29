const wrapper = document.querySelector(".wrapper")
const neck = document.querySelector(".neck")
const wowEl = document.querySelector("#wows")

const largeWowContainer = document.querySelector("#largewowcontainer")
const rainbowWowContainer = document.querySelector("#rainbowwowcontainer")
const dogePrimeContainer = document.querySelector("#dogeprimecontainer")
const secretWowContainer = document.querySelector("#secretwowcontainer")
const fibowowcontainer = document.querySelector("#fibowowcontainer")

const largewowEl = document.querySelector("#largeWows")
const lengthEl = document.querySelector("#length")
const rainbowsEl = document.querySelector("#rainbow")
const dogePrimeEl = document.querySelector("#dogeprime")
const secretWowEl = document.querySelector("#secretwow")
const fiboWowEl = document.querySelector("#fibo")

let wows = 0
let largewows = 0
let rainbowwows = 0
let secretwows = 0
let minidoges = 0
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
  { rootMargin: "0px 0px 200% 0px" }
)

document.addEventListener("click", onBodyClick)

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

function injectWow() {
  wows++
  wowEl.innerText = wows

  const newWow = document.createElement("div")
  newWow.className = "textwow"
  newWow.innerText = "Procrasinating..."
  newWow.style.left = 100 + Math.random() * (window.innerWidth - 300) + "px"
  newWow.style.top = wrapper.offsetHeight - 200 + "px"
  document.body.appendChild(newWow)

  if (isPrime(wows)) {
    primeWows.push(newWow)
  }

  if (isFibonacci(wows)) {
    fibonacciWows.push(newWow)
  }

  if (wows === 10) {
    lengthEl.innerText = "wow wow"
  }

  if (wows === 50) {
    lengthEl.innerText = "wow wow wow"
  }

  if (wows === 100) {
    lengthEl.innerText = "much wow"
  }

  if (wows === 150) {
    lengthEl.innerText = "long much wow"
  }

  if (wows === 250) {
    lengthEl.innerText = "very long much wow"
  }

  if (wows === 500) {
    lengthEl.innerText = "wow very long much wow"
  }

  if (wows === 1000) {
    lengthEl.innerText = "much wow very long much wow!"
  }

  if (wows === 2000) {
    lengthEl.innerText = "much wow very long much wow!!"
  }

  if (wows === 3000) {
    lengthEl.innerText = "much wow very long much wow!!!"
  }

  if (wows === 5000) {
    lengthEl.innerText = "!!much wow very long much wow!!"
  }

  if (wows === 10000) {
    lengthEl.innerText = "many many wow amaze"
  }

  if (wows === 30000) {
    lengthEl.innerText = "amaze wow dont forget to print!"
  }

  if (wows === 50000) {
    lengthEl.innerText = "wowwowowowowowowowowowowwoow"
  }

  if (wows === 80000) {
    lengthEl.innerText = "wowwowowowowowowowowowowwooweeeeeeeeee"
  }

  if (wows > 200 && Math.random() > 0.993) {
    injectLargeWow()
  }
}

function injectLargeWow() {
  largewows++
  largewowEl.innerText = largewows

  largeWowContainer.classList.remove("hidden")

  const newWow = document.createElement("div")
  newWow.className = "largewow"
  newWow.innerText = "PROCRASINATING..."
  newWow.style.left = "50%"
  newWow.style.top = wrapper.offsetHeight - 200 + "px"
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

function onBodyClick(e) {
  if (e.target.className === "textwow" && largewows >= 15) {
    rainbowwows++
    e.target.classList.add("rainbow")
    rainbowwowcontainer.classList.remove("hidden")
    rainbowsEl.innerText = rainbowwows

    // Check if they have achieved dogePrime
    dogePrimeContainer.classList.remove("hidden")
    let isPrime = primeWows.every((wowEl) => {
      return wowEl.classList.contains("rainbow")
    })

    // Activate doge prime
    if (dogePrime === false && isPrime === true) {
      dogePrime = true
      dogePrimeEl.innerText = "ACTIVE"
      setupSecretWows()
    }
  }

  if (e.target.className === "secretwow") {
    e.target.classList.add("found")
    secretwows++
    secretWowEl.innerText = secretwows

    if (secretwows === 100) {
      fibonacciChallengeStarted = true
      fibowowcontainer.classList.remove("hidden")
    }
  }

  if (fibonacciChallengeStarted) {
    if (
      e.target.classList.contains("textwow") ||
      e.target.classList.contains("secretwow")
    ) {
      if (e.target.classList.contains("spinLeft")) {
        e.target.classList.remove("spinLeft")
        e.target.classList.add("spinRight")
      } else if (e.target.classList.contains("spinRight")) {
        e.target.classList.remove("spinRight")
        e.target.classList.add("spinLeft")
      } else {
        e.target.classList.add("spinLeft")
      }

      checkAllFiboWows()
    }
  }
}

function checkAllFiboWows() {
  let successConfirmed = true

  let right = true
  for (let i = 0; i < fibonacciWows.length; i++) {
    if (fibonacciWows[i].classList.contains(right ? "spinRight" : "spinLeft")) {
      right = !right
    } else {
      successConfirmed = false
    }
  }

  right = false
  for (let i = 0; i < fibonacciSecretWows.length; i++) {
    if (
      fibonacciSecretWows[i].classList.contains(
        right ? "spinRight" : "spinLeft"
      )
    ) {
      right = !right
    } else {
      successConfirmed = false
    }
  }

  if (successConfirmed) {
    fibonacciChallengeComplete = true
    fibo.innerText = "COMPLETE"
  }
}

function setupSecretWows() {

  const allnecks = document.querySelectorAll(".neck")
  let allnecksAsArray = Array.apply(null, allnecks)
  allnecksAsArray.shift() // remove first item

  shuffleArray(allnecksAsArray)
  shuffleArray(allnecksAsArray)


}

observer.observe(neck)