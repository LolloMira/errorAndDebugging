class Parser {
    static csvParse(string) {
        let array = [];
        array = string.split("; ")

for (let i = 0; i < array.length; i++) {
    let element = array[i];
    
    if (element.includes(",")) {
        element =  element.replace(",", ".")
        console.log(element);
    }
}
    }

}