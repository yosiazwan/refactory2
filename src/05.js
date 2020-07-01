const bilanganPrima = (n) => {
    let max = Math.sqrt(n);
    for( let i = 2;  i <= max;  i++ ) {
        if( n % i == 0 )
            return false;
    }
    return true;
}

module.exports = bilanganPrima;