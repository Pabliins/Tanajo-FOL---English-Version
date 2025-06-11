document.getElementById('form-registro').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const horaEntrada = document.getElementById('horaEntrada').value;
    const horaSalida = document.getElementById('horaSalida').value;

    if (nombre && horaEntrada && horaSalida) {
        const tabla = document.querySelector('#tabla-registro tbody');
        const fila = document.createElement('tr');

        fila.innerHTML = `
            <td>${nombre}</td>
            <td>${horaEntrada}</td>
            <td>${horaSalida}</td>
        `;

        tabla.appendChild(fila);
        this.reset();
    }
});
