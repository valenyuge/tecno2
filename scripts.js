document.addEventListener('DOMContentLoaded', function() {

    const buscadorForm = document.querySelector('.buscador');
    
    if (buscadorForm) {
        const inputBusqueda = buscadorForm.querySelector('.input-busqueda');
        buscadorForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const terminoDeBusqueda = inputBusqueda.value.trim();
            if (terminoDeBusqueda) {
                alert('Has buscado: ' + terminoDeBusqueda);
            } else {
                console.log("El campo de búsqueda está vacío.");
            }
        });
    }

    const stepButtons = document.querySelectorAll('[data-target]');
    const portadaContenido = document.querySelector('.portada-contenido');
    
    // Al cargar la página, muestra el primer paso
    if(portadaContenido) { // Asegurarnos de que estamos en la página correcta
        const initialStep = document.querySelector('#step-1');
        if (initialStep) {
            initialStep.classList.add('visible');
        }

        stepButtons.forEach(button => {
            button.addEventListener('click', function(event) {
                event.preventDefault();

                // Encuentra el paso actualmente visible y lo oculta
                const currentVisibleStep = portadaContenido.querySelector('.step-container.visible');
                if (currentVisibleStep) {
                    currentVisibleStep.classList.remove('visible');
                }
                
                // Muestra el nuevo paso
                const targetId = this.dataset.target;
                const targetStep = document.querySelector(targetId);

                if (targetStep) {
                    targetStep.classList.add('visible');
                }
            });
        });
    }
});