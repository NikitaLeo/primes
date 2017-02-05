function atkin2(n){
    var sieve = [];
    var primes = [2,3];
    for(var i = 0; i <= n; i++){
        sieve[i] = 0
    }
    function toggle(k){
        sieve[k] = sieve[k] == 1 ? 0 : 1;
    }
    var x, y, k;


  
    var max = Math.floor(Math.sqrt(n)/2);
    x = 1;
    while(x <= max){
        for(var i = 1; i <= 2; i++){
            var a = 4*x*x;
            y = 1;
            while(true){
                k = a + y*y;
                if (k <= n) toggle(k); else break;
                y += 2;
            }
            x++;
        }
        var a = 4*x*x;
        y = 1;
        while(true){
            k = a + y*y;
            if(k <= n) {toggle(k);} else {break;}
            y += 4;
            k = a + y*y;
            if(k <= n) {toggle(k);} else {break;}
            y += 2;
        }
        x++;  
    }



    max = Math.floor(Math.sqrt(n/3));
    x = 1;
    while(x <= max){
        var a = 3*x*x;
        y = 2;
        while(true){
            k = a + y*y;
            if(k <= n) {toggle(k);} else {break;}
            y += 2;
            k = a + y*y;
            if(k <= n) {toggle(k);} else {break;}
            y += 4;
        }
        x += 2;
    }



    max = Math.floor((Math.sqrt(8*n + 12)-6)/4)
    y = 1;
    while(y <= max){
        var a = -y*y;
        x = y + 1;
        while(true){
            k = a + 3*x*x
            if(k <= n) {toggle(k);} else {break;}
            x += 2;
        }
        y ++;
        a = -y*y;
        x = y + 1;
        while(true){
            k = a + 3*x*x
            if(k <= n) {toggle(k);} else {break;}
            x += 2;
        }
        y += 2;
    }

    max = Math.floor(Math.sqrt(n));
    var s, j, factor;
    for(var i = 0; i <= max; i++){
        if(sieve[i] == 1){
            s = i*i;
            j = s;
            factor = 2;
            for (j = s; j <= n; j += factor * s){
                sieve[j] = 0;
                factor = factor == 2 ? 4 : 2;
            }
        }
        /*if(sieve[i] == 1){
            for(var j = i*i; j < n; j += i*i){
                sieve[j] = 0
            }
        }*/
    }
    for(var i = 0; i < sieve.length; i++){
        if(sieve[i] == 1){
            primes.push(i);
        }
    }
    return primes;
}
