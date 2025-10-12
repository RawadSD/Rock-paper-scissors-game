let score =
      JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
        };
        scoreUpdate()
      // if(score === null){    => we can use this or the (!score) as you can see below

      // if(!score){
      //   score={
      //   wins: 0,
      //   losses: 0,
      //   ties: 0
      //   }
      // }
    function playGame(playerMove) {
     const computerMove = pickComputerMove();
     let result = '';
            if (playerMove === 'rock') {
                  if (computerMove === 'rock') {
                  result = 'tie'}
                else if (computerMove === 'paper') {
                  result = 'you lose'
                }
                else if (computerMove === 'scissors') {
                    result = 'you win'
            }

      } else if (playerMove === 'paper') {
                    if (computerMove === 'rock') {
                    result = 'you win'}
                  else if (computerMove === 'paper') {
                    result = 'tie'
                  }
                  else if (computerMove === 'scissors') {
                      result = 'you lose'
    }

       }else if (playerMove === 'scissors') {
                      if (computerMove === 'rock') {
                     result = 'you lose'}
                 else if (computerMove === 'paper') {
                     result = 'you win'
            }
                else if (computerMove === 'scissors') {
                     result = 'tie'
            }
            }
            if (result === 'you win'){
                score.wins += 1;
              }else if (result === 'you lose'){
                score.losses += 1;
              }else if (result === 'tie'){
                score.ties += 1;
              }
            localStorage.setItem('score', JSON.stringify(score));

            scoreUpdate()
            
            document.querySelector('.js-result')
            .innerHTML = result;
            document.querySelector('.js-moves')
            .innerHTML =`you 
              <img class="rock-icon" src="icons/${playerMove}-emoji.png"
              alt="">
              <img class="scissors-icon" src="icons/${computerMove}-emoji.png" alt="">computer`;
          
          
   }
   

   function scoreUpdate(){
    document.querySelector('.js-score')
        .innerHTML = `wins: ${score.wins}. losses: ${score.losses}. ties: ${score.ties}`
   }

    function pickComputerMove() {
        const randomNumber1 = Math.random();

        if (randomNumber1 < 1/3 && randomNumber1 > 0) {
              computerMove = 'rock';
              
        }

        else if (randomNumber1 < 2/3 && randomNumber1 > 1/3) {
              computerMove = 'paper';
              
        } else {
              computerMove = 'scissors';
              
        }
        return computerMove;
   }
   