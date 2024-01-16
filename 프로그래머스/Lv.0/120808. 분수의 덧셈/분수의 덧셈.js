function solution(numer1, denom1, numer2, denom2) {
    var answer = [];

    // 두 분수의 합 계산
    var add = numer1 / denom1 + numer2 / denom2;

    // 두 분수의 곱셈 결과를 구함
    var numer3 = numer1 * denom2 + numer2 * denom1;
    var denom3 = denom1 * denom2;

    // 최대공약수 계산 함수
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

    // 최대공약수 계산 후 약분
    const commonGCD = gcd(numer3, denom3);
    numer3 /= commonGCD;
    denom3 /= commonGCD;

    // 결과 배열에 분자와 분모 추가
    answer.push(numer3, denom3);
    
    return answer;
}