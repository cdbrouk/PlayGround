# PostFix Notation

2021. 1.16

트리구조를 다시 한 번 훑는 과정에서 트리 순회 방식중에 후위 순회 방식을 하다가 여기까지 흘러들어왔당..

사실 그냥 후위 표기법을 계산하는 법만 하고 끝내려고 했는데.. 오랜만에 후위표기법을 본김에 중위 표기법에서 후위 표기법을 바꾸는 과정을 다시 정리하고 가려고 했당..

근데 지금 뭐 이래저래 정리하고.. 블로그에 쓸 것들이나 leetcode도 정리해서 이쪽에 올리려고 준비하다 보니 시간이 늦어서 계산법은 낼 마무리 해야겠따.. 넘졸리다..

이직 준비하면서 왠만하면 레포정리도 해야겠다.. 일기가 되버렸다..

## Convert infix into post fix

1. 비연산자는 결과 문자열로 바로 저장
2. 연산자는 스택으로
3. 식의 연산자가 스택의 연산자의 우선순위보다 낮거나 같은경우(<=) 스택연산자보다 높아질 때까지 pop
4. 높은 경우는 무조건 push
5. "("도 무조건 push
6. ")"은 "(" 만날때까지 pop