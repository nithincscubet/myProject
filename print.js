function printPattern(str) {

    if (!(str.length % 2)) {
        console.log("not an odd number");
        return;
    }

    let strArray = str.split('')
      , length = strArray.length;
    for (index = 0; index < length; index++) {
        let row = new Array(length).fill(' ');
        let head = index;
        let tail = (length - 1) - index;
        if (head == tail) {
            row[head] = strArray[head];
        } else {
            row[head] = strArray[head];
            row[tail] = strArray[tail];
        }
        console.log(row.join(""));
    }
}
printPattern('WORLD');
