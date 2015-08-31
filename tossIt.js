
case 'FIGHT':
    var strong = prompt("How courageous! Are you strong (YES or NO)?").toUpperCase();
    var smart = prompt("Are you smart?").toUpperCase();

    if(strong === 'YES' || smart === 'YES') {
      console.log("You only need one of the two! You beat the troll--nice work!");
    } else {
      console.log("You're not strong OR smart? Well, if you were smarter, you probably wouldn't have tried to fight a troll. You lose!");
    }
    break;
    // ---  on the top of this line is an example.


    var user = prompt('Why do you wish to work at this startup?').toUpperCase();

switch(user) {
    case 'financial stability':
        var money = prompt("Can your devote 60 hours a week?").toUpperCase();
        var reasons = prompt("Are you smart?").toUpperCase();
          // I'm just here to -- seperate -- the vars from the logic. 

        if(money === 'YES' || smart === 'YES'){
            console.log("Then yes, i see no reason that i should shun you for being blunt.")
        }else{ console.log("Well I'm sorry, i don't see you growing here.");  }
        break;
    case 'dx':
        var priorExperience = prompt("For how long").toUpperCase();
        var dabblingApi = prompt("So you have dabbled with our api before hand?").toUpperCase();
            // I'm just here to -- seperate -- the vars from the logic.

        if(priorExperience  === 'YES' && dabblingApi === 'YES'){
          console.log("Well good we've been on the hunt for someone of your talents");
        }else{ console.log("Maybe we can find a place for you here."); }
        break;
    case 'a new life':
        var turnLeaf = prompt("Your ready for a new side of life huh?").toUpperCase();
        var flipFlop = prompt("In recent years, have you held 3 or more jobs?").toUpperCase();
          // I'm just here to -- seperate -- the vars from the logic.

        if(turnLeaf === 'YES' || flipFlop === 'YES'){
          console.log("We are dog & cat friendly, you start next Monday!");
        }else{ console.log("I'm sorry, but you don't seem to have stability"); }
        break;

    default:
        console.log("If you're open to this, we do have a intern position avaliable now, then you could grow from there.");
}
