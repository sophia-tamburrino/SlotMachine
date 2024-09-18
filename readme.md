- Create a new project but you are welcome to copy the code from the previous project.
- Create a slot machine application that randomly picks 3 graphics from at least 5 choices and displays them on the screen. The user is given 100 tokens to start playing. They can bet any amount of tokens as long as they don't bet more than they have.
-The player should only win when all three graphics match.
- A match of all 5 graphics should have different odds of matching. The amount won should take into account those different odds. For example, 3 apples should come up a lot fewer times than 3 pears. Use any themed graphics you would like as long as they are appropriate.
- You should randomly generate a number between 1 and 100 for each of the 3 graphics.
   - If the number is 1-5, one graphic should appear. This would happen 5% of the time.
   - If the number is 6-15, a new graphic should appear. This would happen 10% of the time.
   - If the number is 16-30, a new graphic should appear. This would happen 15% of the time.
   - If the number is 31-50, a new graphic should appear. This would happen 20% of the time.
   - If the number is 51-100, a new graphic should appear. This would happen 50% of the time.
- You must keep track of the number of tokens the user has at all times.
- Create a "spin" button that checks whether the user has placed a bet and whether that bet is greater than the number of tokens they have and then spins the numbers and calculates whether the user has won or lost.
- Display how many tokens the user will win for each token they bet for each graphic.
- Use the multipliers in the payout column below when you win.
- Challenge - Add audio to button.

 

Payouts based on % below:

%  --       Payout               

5%   --     1550*bet             

10%    --  180*bet               

15%    --  55*bet               

20%   --   25*bet              

50%  --    4*bet               