$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('body,html').animate({
      scrollTop: $(hash).offset().top
      }, 1200, function(){
      window.location.hash = hash;
     });
     } 
    });
});

var width = $(window).width(); 

window.onscroll = function(){
if ((width >= 900)){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#middle").css("background-size","150% auto");
    }else{
        $("#middle").css("background-size","100% auto");        
    }
}
};

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },200);
},300);

document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const idioma = document.getElementById('language').value.trim().toLowerCase();
    const resultContainer = document.getElementById('resultContainer');

    if (!idioma) {
        resultContainer.innerHTML = '<p style="color:red;">Por favor ingrese un idioma válido.</p>';
        return;
    }

    fetch(`https://p-1-streaming.onrender.com/peliculas_idioma/${idioma}`)
        .then(response => response.json())
        .then(data => {
            resultContainer.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch(error => {
            resultContainer.innerHTML = `<p style="color:red;">Error al buscar datos: ${error}</p>`;
        });
});

document.getElementById('formDuracion').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('inputDuracion').value.trim();
  const contenedor = document.getElementById('resultadoDuracion');

  if (!nombre) {
    contenedor.innerHTML = '<p style="color:red;">Por favor ingrese un nombre de película válido.</p>';
    return;
  }

  fetch(`https://p-1-streaming.onrender.com/peliculas_duracion/${encodeURIComponent(nombre)}`)
    .then(resp => resp.json())
    .then(data => {
      contenedor.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch(error => {
      contenedor.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    });
});

document.getElementById('formFranquicia').addEventListener('submit', function(e) {
  e.preventDefault();
  const franquicia = document.getElementById('inputFranquicia').value.trim();
  const contenedor = document.getElementById('resultadoFranquicia');

  if (!franquicia) {
    contenedor.innerHTML = '<p style="color:red;">Por favor ingrese una franquicia válida.</p>';
    return;
  }

  fetch(`https://p-1-streaming.onrender.com/franquicia/${encodeURIComponent(franquicia)}`)
    .then(response => response.json())
    .then(data => {
      contenedor.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch(error => {
      contenedor.innerHTML = `<p style="color:red;">Error al buscar datos: ${error}</p>`;
    });
});

document.getElementById('formPais').addEventListener('submit', function(e) {
  e.preventDefault();
  const pais = document.getElementById('inputPais').value.trim();
  const contenedor = document.getElementById('resultadoPais');

  if (!pais) {
    contenedor.innerHTML = '<p style="color:red;">Por favor ingrese un nombre de país válido.</p>';
    return;
  }

  fetch(`https://p-1-streaming.onrender.com/peliculas_pais/${encodeURIComponent(pais)}`)
    .then(response => response.json())
    .then(data => {
      contenedor.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch(error => {
      contenedor.innerHTML = `<p style="color:red;">Error al buscar datos: ${error}</p>`;
    });
});

document.getElementById('formProductora').addEventListener('submit', function(e) {
  e.preventDefault();
  const productora = document.getElementById('inputProductora').value.trim();
  const contenedor = document.getElementById('resultadoProductora');

  if (!productora) {
    contenedor.innerHTML = '<p style="color:red;">Por favor ingrese un nombre de productora válido.</p>';
    return;
  }

  fetch(`https://p-1-streaming.onrender.com/productoras_exitosas/${encodeURIComponent(productora)}`)
    .then(response => response.json())
    .then(data => {
      contenedor.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch(error => {
      contenedor.innerHTML = `<p style="color:red;">Error al buscar datos: ${error}</p>`;
    });
});

document.getElementById('formDirector').addEventListener('submit', function(e) {
  e.preventDefault();
  const director = document.getElementById('inputDirector').value.trim();
  const contenedor = document.getElementById('resultadoDirector');

  if (!director) {
    contenedor.innerHTML = '<p style="color:red;">Por favor ingrese un nombre de director válido.</p>';
    return;
  }

  fetch(`https://p-1-streaming.onrender.com/get_director/${encodeURIComponent(director)}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Director no encontrado o nombre incorrecto.');
      }
      return response.json();
    })
    .then(data => {
      contenedor.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch(error => {
      contenedor.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    });
});

document.getElementById('formRecomendacion').addEventListener('submit', function(e) {
  e.preventDefault();
  const titulo = document.getElementById('inputRecomendacion').value.trim();
  const contenedor = document.getElementById('resultadoRecomendacion');

  if (!titulo) {
    contenedor.innerHTML = '<p style="color:red;">Por favor ingrese un título de película válido.</p>';
    return;
  }

  fetch(`https://p-1-streaming.onrender.com/recomendacion/${encodeURIComponent(titulo)}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Película no encontrada o nombre incorrecto.');
      }
      return response.json();
    })
    .then(data => {
      contenedor.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch(error => {
      contenedor.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    });
});


async function cargarDatos() {
    const idiomas = ['es', 'en', 'fr', 'de']; // Español, Inglés, Francés, Alemán
    const etiquetas = ['Español', 'Inglés', 'Francés', 'Alemán'];
    const coloresFondo = [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)'
    ];
    const coloresBorde = [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
    ];
    
    const datos = [];

    for (let idioma of idiomas) {
    try {
        const respuesta = await fetch(`https://p-1-streaming.onrender.com/peliculas_idioma/${idioma}`);
        const json = await respuesta.json();

        const cantidad = Number(json['Cantidad']);
        datos.push(isNaN(cantidad) ? 0 : cantidad);

    } catch (error) {
        console.error(`Error al obtener datos para ${idioma}:`, error);
        datos.push(0); 
    }
}
    console.log("Datos cargados:", datos);
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: etiquetas,
            datasets: [{
                label: 'Películas por idioma',
                data: datos,
                backgroundColor: coloresFondo,
                borderColor: coloresBorde,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#000000'
                    }
                },
                title: {
                    display: true,
                    text: 'Películas por Idioma',
                    color: '#000000',
                    font: {
                        size: 18
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#000000'
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#000000'
                    }
                }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', cargarDatos);
