/* global azuriraj */

const resenje = `
11111111
10000001
10000001
10000001
10000001
10000001
10000001
11111111
`

function crtaj(polje, platno) {
  const niz = polje.value.trim().split('\n')
  const sirina = niz[0].length
  const visina = niz.length
  const sirinaKocke = Math.floor(platno.width / sirina)
  const visinaKocke = Math.floor(platno.height / visina)
  const ctx = platno.getContext('2d')
  ctx.clearRect(0, 0, platno.width, platno.height)

  niz.map((bajt, i) => {
    Array.from(bajt, Number).map((bit, j) => {
      if (bit) ctx.fillRect(j * sirinaKocke, i * visinaKocke, sirinaKocke, visinaKocke)
    })
  })
}

crtaj($('#primer'), $('#platno1'))

$('#primer').on('keyup', () => crtaj($('#primer'), $('#platno1')))

$('#unos').on('keyup', () => crtaj($('#unos'), $('#platno2')))

$('#provera').on('click', function proveri() {
  azuriraj($('#unos').value.trim() == resenje.trim())
})
