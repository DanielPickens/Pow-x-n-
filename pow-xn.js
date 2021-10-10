  var myPow = function(x, n) {
     let ans = 0;
        let minus = (n < 0);
        if (minus) {
            if (n == Number.MIN_VALUE) return 1.0 / calPow(x, -(n+1)) / x; // Special case to deal with, the possible overflow of -n
            return 1.0 / calPow(x, -n);
        }
        return calPow(x, n);
    }
    
    let calPow = function( x,  n) {
        if (n == 0) return 1.0;
        if (n == 1) return x;
        if (n % 2 == 1) return x * calPow(x, n - 1);
        return calPow(x * x, n / 2);
    }

    
    
    /*
    Success
Details 
Runtime: 72 ms, faster than 88.70% of JavaScript online submissions for Pow(x, n).
Memory Usage: 40 MB, less than 35.07% of JavaScript online submissions for Pow(x, n).
*/
