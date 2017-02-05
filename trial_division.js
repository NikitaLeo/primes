function trial_division(k){
	var prime_numbers = []
	for(var n = 2; n <= k; n++){
		var isPrime = true
		var root = Math.sqrt(n)
		for(var i = 0; prime_numbers[i] <= root; i++){
			if(n%prime_numbers[i] == 0){
				isPrime = false
				break;
			}
		}
		if(isPrime == true){
			prime_numbers.push(n)
		}
	}
	return prime_numbers;
}

