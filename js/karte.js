/* global azurirajPoene */

const unos = $('#unos')
const poruka = $('#poruka')
const provera = $('#provera')
const sledeci = $('#sledeci')
const prekidaci = $('[type=checkbox]')

/* FUNKCIJE */

const random = () => [...prekidaci].map(p => p.checked = Math.round(Math.random()))

const binarno = () => [...prekidaci].map(p => p.checked ? '1' : '0').reduce((a, b) => a + b)

const decimalno = () => parseInt(binarno(), 2)

const proveri = () => {
  if (unos.value === '') return
  const tacno = unos.value == decimalno()
  poruka.innerHTML = tacno ? 'Tačno, samo napred!' : 'Netačno, proveri još jednom.'
  azurirajPoene(tacno)
  if (tacno) {
    provera.style.display = 'none'
    sledeci.style.display = 'inline'
  }
}

const azurirajPolja = () => {
  $('#binarni').innerHTML = Number(binarno())
  unos.value = poruka.innerHTML = ''
}

const postavi = () => {
  random()
  azurirajPolja()
  provera.style.display = 'inline'
  sledeci.style.display = 'none'
}

/* DOGAĐAJI */

provera.addEventListener('click', proveri)
sledeci.addEventListener('click', postavi)
;[...prekidaci].map(p => p.addEventListener('change', azurirajPolja))

/* INIT */

postavi()
