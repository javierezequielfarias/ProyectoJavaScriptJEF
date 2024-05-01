let continuar = 'Si'
let promediomax = 0
let alumnomax

do {
    let alumno = prompt('Ingrese nombre del alumno')
    let nota1 = parseFloat(prompt('Ingrese nota 1er trimestre'))
    let nota2 = parseFloat(prompt('Ingrese nota 2do trimestre'))
    let nota3 = parseFloat(prompt('Ingrese nota 3er trimestre'))
    let promedio = parseFloat((nota1+nota2+nota3)/3)
    console.log(alumno,nota1,nota2,nota3,promedio)
    if(nota1<4 || nota2<4 || nota3<4){
        console.log('El alumno '+ alumno + ' se lleva la materia y debe rendir en diciembre por estar aplazado en uno o varios trimestres.Sin embargo , su promedio es: '+ promedio)
        alert(alumno + " esta desaprobado y rendira la metria en diciembre")
    }
    if(promedio>promediomax && alumno!=null){
        promediomax = promedio
        alumnomax = alumno
        alert(alumno + " por ahora es el mejor promedio")
    }
    continuar = prompt('Desea continuar: Si / No')
} while (continuar == 'Si');

alert('El alumno con mayor promedio es '+ alumnomax +' y su nota final es:'+ promediomax)