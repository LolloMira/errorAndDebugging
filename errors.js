class EmptyStringError extends Error{
    constructor(message){
        super(message);
    }
}

class InvalidStringError extends Error{
    constructor(message){
        super(message);
    }
}


class PartialInvalidStringError extends Error{
constructor(message, array){
    super(message)
    this.array = array;
}

}