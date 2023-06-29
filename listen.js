window.addEventListener("message", (event) => {
  let setAgeGroup
  if (event.data === 'above-24') {
    setAgeGroup = 'above-24'
  } else if (event.data === '24-or-below') {
    setAgeGroup = 'under-24'
  } else if (event.data === 'unknown') {
    setAgeGroup = 'under-24'
  } else {
    console.warn('Received unknown message', event)
  }

  if (setAgeGroup) {
    window.localStorage.setItem('adsAgeGroup', setAgeGroup)
  }
})
