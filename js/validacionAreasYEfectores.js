// Objeto de áreas programáticas, áreas operativas y efectores
const areasProgramaticas = [
    {
      nombre: "AREA PROGRAMATICA ESTE",
      areasOperativas: [
        {
          nombre: "AREA OPERATIVA ALDERETES",
          efectores: ["Efector 19", "Efector 20"]
        },
        {
          nombre: "AREA OPERATIVA BANDA RIO SALI",
          efectores: ["Efector 21", "Efector 22"]
        },
        {
          nombre: "AREA OPERATIVA BELLA VISTA",
          efectores: ["Efector 23", "Efector 24"]
        },
        {
          nombre: "AREA OPERATIVA BURRUYACU",
          efectores: ["Efector 25", "Efector 26"]
        },
        {
          nombre: "AREA OPERATIVA EL BRACHO",
          efectores: ["Efector 27", "Efector 28"]
        },
        {
          nombre: "AREA OPERATIVA EL TIMBO",
          efectores: ["Efector 29", "Efector 30"]
        },
        {
          nombre: "AREA OPERATIVA ESTACION ARAOZ",
          efectores: ["Efector 31", "Efector 32"]
        },
        {
          nombre: "AREA OPERATIVA GARMENDIA",
          efectores: ["Efector 33", "Efector 34"]
        },
        {
          nombre: "AREA OPERATIVA LA FLORIDA",
          efectores: ["Efector 35", "Efector 36"]
        },
        {
          nombre: "AREA OPERATIVA LA RAMADA",
          efectores: ["Efector 37", "Efector 38"]
        },
        {
          nombre: "AREA OPERATIVA LEALES",
          efectores: ["Efector 39", "Efector 40"]
        },
        {
          nombre: "AREA OPERATIVA LOS RALOS",
          efectores: ["Efector 41", "Efector 42"]
        },
        {
          nombre: "AREA OPERATIVA RANCHILLOS",
          efectores: ["Efector 43", "Efector 44"]
        }
      ]
    },
    {
      nombre: "AREA PROGRAMATICA SUR",
      areasOperativas: [
        {
          nombre: "AREA OPERATIVA AGUILARES",
          efectores: ["Efector 47", "Efector 48"]
        },
        {
          nombre: "AREA OPERATIVA CONCEPCION",
          efectores: ["Efector 51", "Efector 52"]
        },
        {
          nombre: "AREA OPERATIVA GRANEROS",
          efectores: ["Efector 49", "Efector 50"]
        },
        {
          nombre: "AREA OPERATIVA LA COCHA",
          efectores: ["Efector 59", "Efector 60"]
        },
        {
          nombre: "AREA OPERATIVA LA MADRID",
          efectores: ["Efector 57", "Efector 58"]
        },
        {
          nombre: "AREA OPERATIVA MONTEROS",
          efectores: ["Efector 61", "Efector 62"]
        },
        {
          nombre: "AREA OPERATIVA SANTA ANA",
          efectores: ["Efector 45", "Efector 46"]
        },
        {
          nombre: "AREA OPERATIVA SIMOCA",
          efectores: ["Efector 53", "Efector 54"]
        }
      ]
    },
    {
      nombre: "AREA PROGRAMATICA OESTE",
      areasOperativas: [
        {
          nombre: "AREA OPERATIVA ALTA MONTAÑA",
          efectores: ["Efector 7", "Efector 8"]
        },
        {
          nombre: "AREA OPERATIVA EL CADILLAL",
          efectores: ["Efector 15", "Efector 16"]
        },
        {
          nombre: "AREA OPERATIVA FAMAILLA",
          efectores: ["Efector 11", "Efector 12"]
        },
        {
          nombre: "AREA OPERATIVA LULES",
          efectores: ["Efector 5", "Efector 6"]
        },
        {
          nombre: "AREA OPERATIVA SAN PABLO",
          efectores: ["Efector 9", "Efector 10"]
        },
        {
          nombre: "AREA OPERATIVA TAFI DEL VALLE",
          efectores: ["Efector 13", "Efector 14"]
        },
        {
          nombre: "AREA OPERATIVA TAFI VIEJO",
          efectores: ["Efector 1", "Efector 2"]
        },
        {
          nombre: "AREA OPERATIVA TRANCAS",
          efectores: ["Efector 3", "Efector 4"]
        },
        {
          nombre: "AREA OPERATIVA VALLES CALCHAQUIES",
          efectores: ["Efector 17", "Efector 18"]
        }
      ]
    }
  ];
  
  // Obtener los elementos de los dropdowns
  var areaProgramaticaDropdown = document.getElementById('areaProgramatica');
  var areaOperativaDropdown = document.getElementById('areaOperativa');
  var efectorDropdown = document.getElementById('efector');
  
  // Agregar un evento de cambio al dropdown de areaProgramatica
  areaProgramaticaDropdown.addEventListener('change', function () {
    var selectedAreaProgramatica = areaProgramaticaDropdown.value;
  
    // Reiniciar los dropdowns de areaOperativa y efector
    resetDropdown(areaOperativaDropdown);
    resetDropdown(efectorDropdown);
  
    // Verificar el área programática seleccionada y habilitar las áreas operativas correspondientes en el dropdown de areaOperativa
    var areasOperativas = getAreasOperativas(selectedAreaProgramatica);
    if (areasOperativas) {
      enableOptions(areaOperativaDropdown, areasOperativas.map(areaOperativa => areaOperativa.nombre));
    }
  });
  
  // Agregar un evento de cambio al dropdown de areaOperativa
  areaOperativaDropdown.addEventListener('change', function () {
    var selectedAreaOperativa = areaOperativaDropdown.value;
  
    // Reiniciar el dropdown de efector
    resetDropdown(efectorDropdown);
  
    // Verificar el área operativa seleccionada y habilitar los efectores correspondientes en el dropdown de efector
    var efectores = getEfectores(selectedAreaOperativa);
    if (efectores) {
      enableOptions(efectorDropdown, efectores);
    }
  });
  
  // Función para habilitar opciones en un dropdown
  function enableOptions(dropdown, options) {
    dropdown.innerHTML = '<option value="">Seleccione:</option>';
    options.forEach(function (option) {
      var optionElement = document.createElement('option');
      optionElement.textContent = option;
      dropdown.appendChild(optionElement);
    });
    dropdown.disabled = false;
  }
  
  // Función para reiniciar un dropdown
  function resetDropdown(dropdown) {
    dropdown.innerHTML = '<option value="">Seleccione:</option>';
    dropdown.disabled = true;
  }
  
  // Función para obtener las áreas operativas de un área programática
  function getAreasOperativas(areaProgramatica) {
    var areaProgramaticaObj = areasProgramaticas.find(function (areaProgramaticaObj) {
      return areaProgramaticaObj.nombre === areaProgramatica;
    });
    return areaProgramaticaObj ? areaProgramaticaObj.areasOperativas : null;
  }
  
  // Función para obtener los efectores de un área operativa
  function getEfectores(areaOperativa) {
    var areaOperativaObj = areasProgramaticas.flatMap(function (areaProgramaticaObj) {
      return areaProgramaticaObj.areasOperativas;
    }).find(function (areaOperativaObj) {
      return areaOperativaObj.nombre === areaOperativa;
    });
    return areaOperativaObj ? areaOperativaObj.efectores : null;
  }
  
  console.log(areasProgramaticas);
  