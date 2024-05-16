/* Mi primer archivo de JS */

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter
    .typeString('Iyari Dueñas Ramirez')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Programadora JR')
    .pauseFor(1500)
    .deleteAll()
    .typeString('<strong>Estudiante</strong>')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Diseñadora')
    .pauseFor(1500)
    
    .start();