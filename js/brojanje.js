/* global azurirajPoene */

const uporedi = () => [...$('[type=number]')].map((b, i) => parseInt(b.value, 2) === i + 1).reduce((a, b) => a && b)

const proveri = () => {
  const tacno = uporedi()
  $('#poruka').innerHTML = tacno ? 'Bravo, odgovor je tačan!' : 'Nije dobro, proveri još jednom.'
  azurirajPoene(tacno)
}

$('#provera').addEventListener('click', proveri)
