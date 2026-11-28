Author: Nova Wolta
Purpose: Tic Tac Toe for the week 8 final.

1. Added a var for the 9 cells, a var for the restart button, a var for both score counters, and a var for the different index values to check for Xs and Os that will mean all three line up for a win. Set starting player to an X, and have the game unplayable by default. 

2. 11/26 11:50pm: each event listener works as it should, each cell has an event listener.

3. 11/27 3:30pm: messed with setting event listeners for each of the cells and their class/ids. used 'this' to refer to which cell has been clicked to update that ones text content with the current player, need to work on switching current player.

4. 5:06pm: set up an if/else/if for switching the player and adding text to display the current player, added an if/else for only letting cells be updated if the game is running and the cell is empty. Next up is checking all array values in the win conditions for equality to find a winner and stop the game, followed by adding the score to the local storage!