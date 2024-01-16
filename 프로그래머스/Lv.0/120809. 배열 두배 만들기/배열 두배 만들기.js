function solution(numbers) {
    var answer = [];
    
    for(i = 0; i < numbers.length; i++){
        var doubleNum = numbers[i] * 2;
        answer.push(doubleNum);
    }
    
    return answer;
}