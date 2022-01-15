let museum = new Museum();
museum.initializeGallery();

const artPieces = museum.getPieces();

function showInfoByClickButton(){
  alert( artPieces[0].getDescription() )
};

//this is an example of the use of the setter in the description
/*function changeInfo(){
  artPieces[0].setDescription("esta es la nueva descripción");
} */