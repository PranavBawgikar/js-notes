## Logic
We use Math.random() to decide the computer's move. But since the Math.random() function generates numbers 0 >= and < 1, we need to come up with a way to decide how we can decide which move it is like Rock, Paper or Scissors.

To do this, let's divide the space between 0 and 1 into three equal parts-

<pre>
  0          1/3         2/3          1
   -----------|-----------|-----------
       rock       paper      scissors
</pre>
Each part represents a move. If we generate a random number
- If between 0 and 1/3 then `Rock`
- If between 1/3 and 2/3 then `Paper`
- If between 2/3 and 1 then `Scissor`
