// Prerequisitos para los cursos
const prerequisitos = {
    1: [],  // Fundamentos para el Cálculo (No prerequisito)
    2: [],  // Comprensión y Producción de Lenguaje I
    3: [],  // Ética y Ciudadanía
    4: [1, 2],  // Introduction to International Business necesita MA384, HU625
    5: [4],  // International Management necesita AN172
    6: [],  // Cálculo (No prerequisito)
    7: [2],  // Comprensión y Producción de Lenguaje II necesita HU625
    8: [6],  // Fundamentos de las Finanzas necesita MA459
    9: [4],  // Macroeconomía necesita AF133
    10: [9],  // Inteligencia Comercial Internacional necesita AN172
    // Continúa para el resto de los cursos
};

// Función para "aprobar" el curso y desbloquear los requisitos
function toggleCourse(cursoId) {
    const curso = document.getElementById(`curso${cursoId}`);
    
    if (!curso.classList.contains('aprobado')) {
        curso.classList.add('aprobado');
        desbloquearRequisitos(cursoId);
    }
}

// Función para desbloquear cursos cuando se aprueban los prerequisitos
function desbloquearRequisitos(cursoId) {
    if (prerequisitos[cursoId]) {
        prerequisitos[cursoId].forEach(prerequisitoId => {
            const prerequisito = document.getElementById(`curso${prerequisitoId}`);
            if (!prerequisito.classList.contains('aprobado')) {
                prerequisito.classList.remove('desbloqueado');
            }
        });
    }
}

// Se inicia la página con los cursos bloqueados
document.addEventListener('DOMContentLoaded', function() {
    const allCursos = document.querySelectorAll('.curso');
    allCursos.forEach(curso => {
        curso.classList.add('desbloqueado');
    });
});
