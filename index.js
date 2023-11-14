// Двама овчари трябвало да си разделят по равно 14 литра мляко, което било в съд от 16 литра.
// Те разполагали само с още два празни съда - единият от 8 литра, а другият от 5 литра.
// Как могат да си разделят по равно млякото двамата овчари, като използват само тези три съда?

function divideMilkEqually() {
  let container16 = 14
  let container8 = 0
  let container5 = 0
  logState(1)

  container5 += 5
  container16 -= 5
  logState(2)

  container8 += 5
  container5 -= 5
  logState(3)

  container5 += 5
  container16 -= 5
  logState(4)

  container5 -= 3
  container8 += 3
  logState(5)

  container16 += 8
  container8 = 0
  logState(6)

  container8 += 2
  container5 = 0
  logState(7)

  container5 += 5
  container16 -= 5
  logState(8)

  container5 -= 5
  container8 += 5
  logState(9)

  function logState(step) {
    if (step === 1) console.log("|-----------------|")

    console.log(` СТЪПКА: ${step}`)
    console.log("")
    console.log(` 16 литров съд съдържа: ${container16} литра мляко.`)
    console.log(` 8 литров съд съдържа:  ${container8} литра мляко.`)
    console.log(` 5 литров съд съдържа:  ${container5} литра мляко.`)
    console.log("|-----------------|")

    if (step === 9) {
        console.log(" РЕЗУЛТАТ:")
        console.log("")
        console.log(` Овчар 1 взима 16 литров съд, съдържащ:    ${container16} литра мляко.`)
        console.log(` Овчар 2 взе 8 литров съд, съдържащ:       ${container8} литра мляко.`)
        console.log(` Останалият 5 литров съд съдържа:          ${container5} литра мляко.`)
        console.log("|-----------------|")
    }
  }
}

divideMilkEqually()
