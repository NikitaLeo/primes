function eratosthenes235(N){
	var sieve = [];
	var primes = [];
	for(var i = 0; i <= N; i++){
		sieve[i] = 0;	
	}
	var root = Math.sqrt(N)
	sieve[2] = 1;
	sieve[3] = 1;
	sieve[5] = 1;
	var d = [6, 4, 2, 4, 2, 4, 6, 2];
	var a = 0;
	var l = d.length;
	for(var n = 7; n <= N; n += d[a]){
		sieve[n] = 1
		a++
		if(a == l){a = 0}
	}
	for(var i = 7; i <= root; i++){
		if(sieve[i] == 1){
			for(var j = i*i; j <= N; j += i){
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
