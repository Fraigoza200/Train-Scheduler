//Timer
const getNext = (original, rate) => {
    
    const rateInSeconds = rate * 60
​
    const now = moment().unix()
​
    let lapse = original
​
    while (lapse < now) {
      lapse += rateInSeconds
    }
​
    return moment((lapse + rate), 'X').format('MMMM, Do YYYY hh:mm a')
  }