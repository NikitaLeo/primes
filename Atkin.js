function atkin(n){
    var sieve = [];
    var primes = [2,3];
    for(var i = 0; i <= n; i++){
        sieve[i] = 0
    }
    var max = Math.floor(Math.sqrt(n));
    function toggle(k){
        sieve[k] = sieve[k] == 1 ? 0 : 1;
    }
    for(var x = 1; x <= max; x++){
        for(var y = 1; y <= max; y++){
            var k = 4*x*x + y*y;
            if( k < n && (k%12 == 1 || k%12 == 5) ){
                toggle(k);
            }
            k = 3*x*x + y*y;
            if( k < n && k%12 == 7 ){
                toggle(k);
            }
            k = 3*x*x - y*y;
            if( x > y && k < n && k%12 == 11 ){
                toggle(k);
            }
        }
    }
    for(var i = 5; i < max; i++){
        if(sieve[i] == 1){
            for(var j = i*i; j < n; j += i*i){
                sieve[j] = 0
            }
        }
    }
    for(var i = 0; i < sieve.length; i++){
        if(sieve[i] == 1){
            primes.push(i);
        }
    }
    return primes;
}
