let notas = [1,6,7,9]

//let media = (notas.reduce((sum,n)=>sum+n))/notas.length

//console.log(media)

let sum = 0
for (let i =0; i<notas.length;i++){
    sum += notas[i]
    console.log(sum)
}

let media = sum/notas.length
console.log(`A média final do aluno é de ${media}`)
