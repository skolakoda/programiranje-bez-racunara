/* global azuriraj */

const uporedi = () => [...$('[type=number]')].map((b, i) => parseInt(b.value, 2) === i + 1).reduce((a, b) => a && b)

const proveri = () => azuriraj(uporedi())

$('#provera').addEventListener('click', proveri)
