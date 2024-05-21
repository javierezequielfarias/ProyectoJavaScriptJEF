//PROYECTO FINAL JS PREENTREGA2 

let cantidad_alumnos

let nombre_alumno

let curso_alumno

let materia_alumno

let nota_alumno

let nota1_alumno

let nota2_alumno

let nota3_alumno

let suma = 0

let promedio_alumno

let acumulador = 0

let datos_alumnos = []

let max_alumno

let max_promedio = 0

let max_materia

let alumnos_ap = []

let alumnos_desap = []

let materias = ['Literatura' , 'Matematica' , 'Historia' , 'Fisica' , 'Geografia' , 'Biologia' , 'Quimica' , ' Filosofia' , 'Idiomas' , 'Educacion Fisica']

let acumulador_ap = 0

let acumulador_desap = 0

cantidad_alumnos = Number(prompt('Ingrese cantidad de alumnos del curso'))

class Alumno{

constructor (nombre , curso , materia , nota1 , nota2 , nota3 , promedio){

this.nombre = nombre

this.curso = curso

this.materia = materia

this.nota1 = nota1

this.nota2 = nota2

this.nota3 = nota3

this.promedio = promedio

}

}

do{

nombre_alumno = prompt('Ingrese nombre del alumno')

curso_alumno = prompt('Ingrese curso del alumno')

//materia_alumno = prompt('Ingrese materia del alumno')

//materia_alumno = Number(prompt('Ingrese una materia del listado para cargar las notas:')

for (let materia of materias){

nota1_alumno = Number(prompt('Ingrese nota 1 de: ' + nombre_alumno + ' en la materia: ' + materia))

nota2_alumno = Number(prompt('Ingrese nota 2 de: ' + nombre_alumno + ' en la materia: ' + materia))

nota3_alumno = Number(prompt('Ingrese nota 3 de: ' + nombre_alumno + ' en la materia: ' + materia))

/*pedir_datos(nombre_alumno , curso_alumno , materia_alumno , nota1_alumno , nota2_alumno , nota3_alumno)*/

suma = nota1_alumno + nota2_alumno + nota3_alumno

promedio_alumno = suma/3

materia_alumno = materia

datos_alumnos.push(new Alumno(nombre_alumno , curso_alumno , materia_alumno , nota1_alumno , nota2_alumno , nota3_alumno , promedio_alumno))

suma = 0

if (promedio_alumno>=7){

console.log(nombre_alumno + ':' + materia_alumno + ' aprobado')

acumulador_ap++

}

else {

console.log(nombre_alumno + ':' + materia_alumno + ' desaprobado')

acumulador_desap++

}

if (acumulador_ap == 10 && materia_alumno === 'Educacion Fisica' ){

alumnos_ap.push(nombre_alumno)

acumulador_ap = 0

acumulador_desap = 0

}

if (acumulador_desap>=1 && materia_alumno === 'Educacion Fisica'){

alumnos_desap.push(nombre_alumno)

acumulador_ap = 0

acumulador_desap = 0

}

}

//console.log(datos_alumnos)

acumulador++

//acumulador_ap = 0

//acumulador_desap = 0

if(promedio_alumno>max_promedio){

max_alumno = nombre_alumno

max_materia = materia_alumno

max_promedio = promedio_alumno

}

}while(acumulador!=cantidad_alumnos)

for(let dato of datos_alumnos){

console.log(dato)

}

console.log('Aprobados en todas las materias: \n')

console.log(alumnos_ap.join(","))

console.log('Desaprobados en al menos una materia: \n')

console.log(alumnos_desap.join(","))

console.log('El alumno: ' , max_alumno , ' tiene un promedio de: ' , max_promedio , ' en la materia: ' , max_materia)

alert('El alumno: ' + max_alumno + ' tiene un promedio de: ' + max_promedio + ' en la materia: ' + max_materia)




//PRIMER ENTREGA PROYECTO JS

/*let continuar = 'Si'
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

alert('El alumno con mayor promedio es '+ alumnomax +' y su nota final es:'+ promediomax)*/