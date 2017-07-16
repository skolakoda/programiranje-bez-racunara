/* HELPERS */
const azurirajPoene = tacno => {
  $('#poeni').innerHTML = localStorage.decjiPoeni = Number(localStorage.decjiPoeni) + (tacno ? 1 : 0)
  if (tacno) $('#provera').style.display = 'none'
}

const dodajPoruku = tacno => {
  $('#poruka').innerHTML = tacno ? 'Bravo, odgovor je tačan!' : 'Nije dobro, proveri još jednom.'
}

const azuriraj = tacno => {
  dodajPoruku(tacno)
  azurirajPoene(tacno)
}

/* INIT */

$('#poeni').innerHTML = localStorage.decjiPoeni = !Number(localStorage.decjiPoeni) ? 0 : Number(localStorage.decjiPoeni)
