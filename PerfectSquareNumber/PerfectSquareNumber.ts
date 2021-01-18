/**
 * 무식하게 홀수의 합 구하기
 * 이걸 한번 더 N까지 반복시켜야 하기때문에 O(n^2)
 * */
export const isOddDivisorCount = (num: number): boolean => {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) count++;
  }
  return count % 2 === 0 ? false : true;
};

/**
 * 완전제곱수인지를 체크
 */
export const isPerfectSquareNumber = (num: number): boolean =>
  Number.isInteger(Math.sqrt(num));

export const forLoopIsPerfectSquareNumber = (num: number): void => {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (isPerfectSquareNumber(i)) count++;
  }
  console.log(num, count);
};

export const isPerfectSquare = (num: number): void => {
  let count = 0;
  let i = 1;
  let d = 1;
  while (i <= num) {
    count++;
    i = i + 3 + (d - 1);
    d = d + 2;
  }

  console.log(num, count);
};

export const getCountPerfectSquare = (num: number): number =>
  Math.floor(Math.sqrt(num));

// forLoopIsPerfectSquareNumber(655923321);
// isPerfectSquare(655923321);

console.log(getCountPerfectSquare(655923323));
