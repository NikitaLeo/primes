function eratosthenes(m){
	var sieve = [];
	var primes = [];
	for(var i = 2; i <= m; i++){
		sieve[i] = 1;	
	}
	var mroot = Math.sqrt(m)
	for(var i = 2; i <= mroot; i++){
		if(sieve[i] == 1){
			for(var j = i*i; j <= m; j += i){
				sieve[j] = 0;
			}
	    }
    }
	for(var i = 0; i < sieve.length; i++){
		if(sieve[i] == 1){
			primes.push(i)
		} 
	}
	return primes;
}
