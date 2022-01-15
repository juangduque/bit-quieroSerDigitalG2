class Museum{
  constructor(){
    this.pieces = [];
  }
  getPieces(){
    return this.pieces
  }
  setPieces( pieces ){
    this.pieces = pieces;
  }
  initializeGallery(){
    let piece1 = new Piece("./img/gioconda.jpg", "El Retrato de Lisa Gherardini, esposa de Francesco del Giocondo,1​ más conocido como La Gioconda (La Joconde en francés) o Monna Lisa, es una obra pictórica del polímata renacentista italiano Leonardo da Vinci. Fue adquirida por el rey Francisco I de Francia a comienzos del siglo XVI y desde entonces es propiedad del Estado francés. Se halla expuesta en el Museo del Louvre de París, siendo, sin duda, la «joya» de sus colecciones.");
    this.pieces.push( piece1 );
  }
}