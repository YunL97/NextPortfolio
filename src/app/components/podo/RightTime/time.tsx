let count = 0

const incrementCounter = () => {
  count += 1
  postMessage(count)
}

setInterval(incrementCounter, 1000)
