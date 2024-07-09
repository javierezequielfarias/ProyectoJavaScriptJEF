// //PROYECTO FINAL JS 

// const materias = ['Literatura' , 'Matematica' , 'Historia' , 'Fisica' , 'Geografia' , 'Biologia' , 'Quimica' , ' Filosofia' , 'Idiomas' , 'Educacion Fisica']
// let alumnos = []
// let i = 0
// function Alumnos(nombre, apellido, materia, nota1, nota2, nota3, promedio) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.materia = materia;
//     this.nota1 = nota1;
//     this.nota2 = nota2;
//     this.nota3 = nota3;
//     this.promedio = promedio;
// }

// console.log("Inicio de programa");

// setTimeout(() => {
//     const titulo = document.getElementById("titulo");
//     titulo.innerHTML = "Bienvenido/a! Comience a cargar las notas de los alumnos";
// }, 0);

// setTimeout(() => {
//     const titulo = document.getElementById("titulo");
//     titulo.innerHTML = "";
//     const contenedorPrincipal = document.getElementById("ppal");
//     const menuCarga = document.createElement("div");
//     menuCarga.className = ("cargaNotas");
//     menuCarga.innerHTML = ` <div class="container-fluid d-flex w-50 g-3 text-black">
//                                 <div class="col">
//                                     <input type="text" id="nombreAlumno" class="form-control" placeholder="Nombre" aria-label="First name">
//                                 </div>
//                                 <div class="col">
//                                     <input type="text" id="apellidoAlumno" class="form-control" placeholder="Apellido" aria-label="Last name">
//                                 </div>
//                             </div>`;
//     contenedorPrincipal.appendChild(menuCarga);
// }, 5000);

// const botonCargarNotas = document.getElementById("cargar");
// botonCargarNotas.addEventListener('click', (e) => {
//     e.preventDefault();
//     const contenedorPrincipal = document.getElementById("contenedorPrincipal");
//     const menuCarga = document.createElement("div");
//     menuCarga.className = ("cargaNotas");
//     menuCarga.innerHTML = `<form class="container column w-50 g-3 text-white" id="formularioNotas">
//                                 <p>Materia:${materias[i]}</p>
//                                 <div class="col-md-6">
//                                      <label for="nota1" class="form-label">Nota 1er trimestre</label>
//                                      <input type="text" id="nota1" class="form-control" name="nota1">
//                                 </div>
//                                 <div class="col-md-6">
//                                      <label for="nota2" class="form-label">Nota 2do trimestre</label>
//                                      <input type="text" id="nota2" class="form-control" name="nota2">
//                                 </div>
//                                 <div class="col-md-6">
//                                      <label for="nota3" class="form-label">Nota 3er trimestre</label>
//                                      <input type="text" id="nota3" class="form-control" name="nota3">
//                                 </div>
//                                 <div class="col-12">
//                                      <button type="submit" class="btn btn-primary">Enviar</button>
//                                 </div>
//                              </form>`;
//     contenedorPrincipal.appendChild(menuCarga);

//     const formularioNotas = document.getElementById("formularioNotas");
//     formularioNotas.addEventListener('submit', (event) => {
//         event.preventDefault(); // Evitar que el formulario se envíe
//         const nombreAlumno = document.getElementById("nombreAlumno").value;
//         const apellidoAlumno = document.getElementById("apellidoAlumno").value;
//         console.log(nombreAlumno , apellidoAlumno)
//         // Obtener los valores de los campos
//         const nota1 = parseFloat(document.getElementById("nota1").value);
//         const nota2 = parseFloat(document.getElementById("nota2").value);
//         const nota3 = parseFloat(document.getElementById("nota3").value);
//         console.log(nota1, nota2, nota3);
//         const promedioAlumno = (nota1+nota2+nota3)/3;
//         console.log("promedio ", promedioAlumno);
//         formularioNotas.reset();
//         const alumno = new Alumnos(nombreAlumno , apellidoAlumno , materias[i] , nota1 , nota2 , nota3 , promedioAlumno);
//         console.log(alumno);
//         // Aquí podrías hacer lo que necesites con los valores de las notas
//         i++;
//     });

// });













const materias = ['Literatura', 'Matematica', 'Historia', 'Fisica', 'Geografia', 'Biologia', 'Quimica', 'Filosofia', 'Idiomas', 'Educacion Fisica'];
let alumnos = [];
let i = 0;
let promedioMaximo = 0;
let materiaMaxProm = [];

function MejorAlumno(nom, apell, mat, promed){
    this.nom = nom;
    this.apell = apell;
    this.mat = mat;
    this.promed = promed;
}

function Alumnos(nombre, apellido, materia, nota1, nota2, nota3, promedio) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.materia = materia;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.nota3 = nota3;
    this.promedio = promedio;
}

console.log("Inicio de programa");

setTimeout(() => {
    const titulo = document.getElementById("titulo");
    titulo.innerHTML = "Bienvenido/a! Comience a cargar las notas de los alumnos";
}, 0);

setTimeout(() => {
    const titulo = document.getElementById("titulo");
    titulo.innerHTML = "";
    const contenedorPrincipal = document.getElementById("ppal");
    const menuCarga = document.createElement("div");
    menuCarga.className = ("cargaNotas");
    menuCarga.innerHTML = ` <div class="container-fluid d-flex w-50 g-3 text-black">
                                <div class="col">
                                    <input type="text" id="nombreAlumno" class="form-control" placeholder="Nombre" aria-label="First name">
                                </div>
                                <div class="col">
                                    <input type="text" id="apellidoAlumno" class="form-control" placeholder="Apellido" aria-label="Last name">
                                </div>
                            </div>`;
    contenedorPrincipal.appendChild(menuCarga);
}, 5000);

const botonCargarNotas = document.getElementById("cargar");
botonCargarNotas.addEventListener('click', (e) => {
    e.preventDefault();
    const contenedorPrincipal = document.getElementById("contenedorPrincipal");
    const menuCarga = document.createElement("div");
    menuCarga.className = ("cargaNotas");
    menuCarga.innerHTML = `<form class="container column w-50 g-3 text-white" id="formularioNotas">
                                <div class="col-md-6">
                                    <label for="materia" class="form-label">Materia</label>
                                    <select id="materia" class="form-select">
                                    </select>
                                </div>
                                <div class="col-md-6">
                                     <label for="nota1" class="form-label">Nota 1er trimestre</label>
                                     <input type="text" id="nota1" class="form-control" name="nota1">
                                </div>
                                <div class="col-md-6">
                                     <label for="nota2" class="form-label">Nota 2do trimestre</label>
                                     <input type="text" id="nota2" class="form-control" name="nota2">
                                </div>
                                <div class="col-md-6">
                                     <label for="nota3" class="form-label">Nota 3er trimestre</label>
                                     <input type="text" id="nota3" class="form-control" name="nota3">
                                </div>
                                <div class="col-12">
                                     <button type="submit" class="btn btn-primary">Enviar</button>
                                </div>
                             </form>`;
    contenedorPrincipal.appendChild(menuCarga);

    // Agregar opciones de materias al select
    const selectMateria = document.getElementById("materia");
    materias.forEach(materia => {
        const option = document.createElement("option");
        option.text = materia;
        option.value = materia;
        selectMateria.appendChild(option);
    });

    const formularioNotas = document.getElementById("formularioNotas");
    formularioNotas.addEventListener('submit', (event) => {
        event.preventDefault(); // Evitar que el formulario se envíe

        const nombreAlumno = document.getElementById("nombreAlumno").value;
        const apellidoAlumno = document.getElementById("apellidoAlumno").value;

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Notas cargadas",
            showConfirmButton: false,
            timer: 500
            })

        const materiaSeleccionada = document.getElementById("materia").value;
        const nota1 = parseFloat(document.getElementById("nota1").value);
        const nota2 = parseFloat(document.getElementById("nota2").value);
        const nota3 = parseFloat(document.getElementById("nota3").value);
        const promedioAlumno = (nota1 + nota2 + nota3) / 3;
        if( promedioAlumno>promedioMaximo){
            promedioMaximo = promedioAlumno;
            const promedioMaximoNombre = nombreAlumno;
            const promedioMaximoApellido = apellidoAlumno;
            const promedioMaximoMateria = materiaSeleccionada;
            const mejorAlumno = new MejorAlumno(promedioMaximoNombre , promedioMaximoApellido , promedioMaximoMateria ,promedioAlumno);
            materiaMaxProm.push(mejorAlumno);
            console.log("mejor promedio: " , mejorAlumno);
            localStorage.setItem("Mejor Promedio: " , JSON.stringify(mejorAlumno));

            Toastify({

                text: "Nuevo mejor promedio",
                
                duration: 3000
                
                }).showToast();
        }else{
            console.log("no es mejor promedio");
        }
        formularioNotas.reset();

        const alumno = new Alumnos(nombreAlumno, apellidoAlumno, materiaSeleccionada, nota1, nota2, nota3, promedioAlumno);
        alumnos.push(alumno);

        console.log("Alumno registrado:", alumno);
    });

});
