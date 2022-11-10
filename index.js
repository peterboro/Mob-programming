function birthdayCakeCandles(candles) {
    // Write your code here
    let maxCandle = 0;
    
    for(let i = 1; i < candles.length; i++) {
        if(candles[i] > maxCandle) {
            maxCandle++;
        }
    }
    return maxCandle;
}
