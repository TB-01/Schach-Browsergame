class Game{
    constructor(thisPlayerIsPlayingAsWhite){
        this.thisPlayerIsPlayingAsWhite = thisPlayerIsPlayingAsWhite // boolean
        this.chessBoard = this.makeStartingBoard()
    }

    makeStartingBoard(){
        // make the board orientation for the current Player
        if(this.thisPlayerIsPlayingAsWhite){
            // make chess orientation for white
        }
        else{
            //make chess orientation for black
        }


    }

    movePiece(placeId, to){
        // pieceId: string
        // to: [ x , y ]
    }


}