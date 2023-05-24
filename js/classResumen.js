export default class Resumen {
  //prop privadas
  #fecha;
  #categoria;
  #areaOperativa;
  #areaProgramatica;
  #descripcion;
  //constructor
  constructor(fecha, categoria, areaOperativa, areaProgramatica, descripcion) {
    this.#fecha = fecha;
    this.#categoria = categoria;
    this.#areaOperativa = areaOperativa;
    this.#areaProgramatica = areaProgramatica;
    this.#descripcion = descripcion;
  }
  //getters
  get fecha() {
    return this.#fecha;
  }
  get categoria() {
    return this.#categoria;
  }
  get areaOperativa() {
    return this.#areaOperativa;
  }
  get areaProgramatica() {
    return this.#areaProgramatica;
  }
  get descripcion(){
    return this.#descripcion;
  }
  //setteres
  set fecha(fecha) {
    this.#fecha = fecha;
  }
  set categoria(categoria) {
    this.#categoria = categoria;
  }
  set areaOperativa(areaOperativa) {
    this.#areaOperativa = areaOperativa;
  }
  set areaProgramatica(areaProgramatica) {
    this.#areaProgramatica = areaProgramatica;
  }
  set descripcion(descripcion) {
    this.#descripcion = descripcion;
  }
}
