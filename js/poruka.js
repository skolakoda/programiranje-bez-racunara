/* global azuriraj */

const normalizuj = poruka => poruka.toLowerCase().trim()
const uporedi = p => p == 'упомоћ овде сам' || p == 'upomoć ovde sam' || p == 'upomoc ovde sam'
const proveri = poruka => uporedi(normalizuj(poruka))

$('#provera').addEventListener('click', function() {
  azuriraj(proveri($('#unos').value))
})
