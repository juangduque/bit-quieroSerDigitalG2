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
    for (let index = 0; index < 5; index++) {      
      this.pieces.push(
        new Piece('image ' + index ,  'description ' + index)
      );
    };
  }
}