/* HELPERS */
const azurirajPoene = tacno => {
  $('#poeni').innerHTML = localStorage.decjiPoeni = Number(localStorage.decjiPoeni) + (tacno ? 1 : 0)
  $('#provera').style.display = 'none'
}

/* INIT */

$('#poeni').innerHTML = localStorage.decjiPoeni = !Number(localStorage.decjiPoeni) ? 0 : Number(localStorage.decjiPoeni)
