var isHappy = function(n) {

    let slowPointer = calculateNextNumber(n)
    let fastPointer = calculateNextNumber(slowPointer)

    if(n === 1 || slowPointer === 1 || fastPointer === 1) {
        return true
    }

    while(slowPointer !== fastPointer) {
        slowPointer = calculateNextNumber(slowPointer)
        fastPointer = calculateNextNumber(fastPointer)
        fastPointer = calculateNextNumber(fastPointer)

        if(slowPointer === 1 || fastPointer === 1) {
            return true
        }
    }

    return false

};

const calculateNextNumber = x => Array.from(x + "", Number).reduce((accumulator, currentValue) => accumulator + currentValue ** 2, 0)