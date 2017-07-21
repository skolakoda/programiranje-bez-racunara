/* HELPERS */
const azurirajPoene = tacno => {
  $('#poeni').innerHTML = localStorage.decjiPoeni = Number(localStorage.decjiPoeni) + (tacno ? 1 : 0)
  if (tacno) $('#provera').style.display = 'none'
}

const dodajPoruku = tacno => {
  $('#poruka').innerHTML = tacno ? 'Браво, одговор је тачан :)' : 'Није добро, провери још једном :('
}

const azuriraj = tacno => {
  dodajPoruku(tacno)
  azurirajPoene(tacno)
}

/* INIT */

$('#poeni').innerHTML = localStorage.decjiPoeni = !Number(localStorage.decjiPoeni) ? 0 : Number(localStorage.decjiPoeni)
