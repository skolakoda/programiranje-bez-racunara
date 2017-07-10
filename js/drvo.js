const canvas = document.getElementById('drvo')
canvas.width = 300
canvas.height = 270
const context = canvas.getContext('2d')

const dubina = 9 // osnova za sirinu i boju
const pocetnaDuzina = 60
const ugaoRacvanja = Math.PI / 10

function crtajLiniju(x1, y1, x2, y2, sirina, boja) {
  context.lineWidth = sirina
  context.strokeStyle = boja
  context.beginPath()
  context.moveTo(x1, y1)
  context.lineTo(x2, y2)
  context.closePath()
  context.stroke()
}

function crtajRekurzivno(x1, y1, dubina, ugao, duzina) {
  if (dubina === 0) return
  const x2 = x1 + Math.cos(ugao) * duzina
  const y2 = y1 + Math.sin(ugao) * duzina
  const boja = `rgb(0, ${Math.round(250 / dubina)}, 0)`
  crtajLiniju(x1, y1, x2, y2, dubina * 2, boja)
  crtajRekurzivno(x2, y2, dubina - 1, ugao - ugaoRacvanja, duzina * 0.8)
  crtajRekurzivno(x2, y2, dubina - 1, ugao + ugaoRacvanja, duzina * 0.8)
}

crtajRekurzivno(canvas.width/2, canvas.height, dubina, -Math.PI/2, pocetnaDuzina)
