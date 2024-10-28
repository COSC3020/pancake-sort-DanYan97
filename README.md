# Pancake Sort

There is an abstract data type (ADT) called a *pancake array*, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array  `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a *single*
element into its correct position.

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons? What is it in terms of the number of flips? Add your
answer to this markdown file.

1. The pancke sort contains two nested loops, the outer loop iterates $n-1$ times, and for each iteration of the outerloop, the inner loop search for find the position of the largest element, as the length decrease in outer loop, the inner loop comparsion decrease by 1 unitll the length reach to 1. Therefore, the total comparsions can be represent as $(n-1)+(n-2)+(n-3)+...+1=\sum_{i=1}^{n-1}=\frac{(n-1)*n}{2}\in\Theta(n^2)$
2. For each iteration, it contsians two flips, one is for bring the largest to the front, another is for move it to the end, so the number of flips can take up to $2(n-1)$ (flip twice for each element). The runtime can then be represent as $\Theta(n)$

“I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.” --Doris Yan