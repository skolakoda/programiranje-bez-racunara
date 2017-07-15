/* global azurirajPoene */

const sredi = poruka => poruka.toLowerCase().trim()
const uporedi = p => p == 'upomoć ovde sam' || p == 'upomoc ovde sam'
const proveri = poruka => uporedi(sredi(poruka))

$('#provera').addEventListener('click', function() {
  const tacno = proveri($('#unos').value)
  $('#poruka').innerHTML = tacno ? 'Bravo, odgovor je tačan :)' : 'Nije dobro, proveri još jednom :('
  azurirajPoene(tacno)
})
