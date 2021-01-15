/**
 * 연산자 종류
 */
const OPERATORS: Object = {
  "+": (a: number, b: number): number => a + b,
  "-": (a: number, b: number): number => a - b,
  "*": (a: number, b: number): number => a * b,
  "/": (a: number, b: number): number => a / b,
  "(": (): void => {},
  ")": (): void => {},
};

/**
 * 우선순위
 * *,/ > +,- > (
 * */
const getOperatorPriority = (operator: string): number => {
  switch (operator) {
    case "(":
      return 0;
    case "+":
    case "-":
      return 1;
    case "*":
    case "/":
      return 2;
    default:
      return 0;
  }
};

export const createPostNoation = (exp: string): string => {
  let output: string = "";
  let stack: Array<string> = [];

  for (let i: number = 0; i < exp.length; i++) {
    /**
     * 연산자
     */
    if (Object.keys(OPERATORS).includes(exp[i])) {
      while (true) {
        /**
         * ( 는 무조건 연산스택에 push
         * ) 는 무조건 ( 만날때까지 output으로 pop
         */
        if (exp[i] === "(") {
          stack.push(exp[i]);
          break;
        }
        if (exp[i] === ")") {
          while (true) {
            const operator = stack.pop();
            if (operator === "(") break;
            else output += operator;
          }
          break;
        }
        /** 연산 스택 비어있으면 push */
        if (stack.length === 0) {
          stack.push(exp[i]);
          break;
        }

        /**
         * 식의 연산자가 스택의 연산자 보다 높을 경우 push
         * 같거나 낮을 경우 높을때까지 pop
         * */
        if (
          getOperatorPriority(exp[i]) >
          getOperatorPriority(stack[stack.length - 1])
        ) {
          stack.push(exp[i]);
          break;
        } else {
          output += stack.pop();
        }
      }
    } else {
      /**
       * 비연산자는 output으로
       */
      output += exp[i];
    }

    /** 마지막 식까지 도달하면 stack clear */
    if (i === exp.length - 1) {
      while (stack.length > 0) {
        output += stack.pop();
      }
    }
  }

  return output;
};
