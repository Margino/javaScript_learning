// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

function alphabetWar([...fight]) {
    const sum = fight.reduce( (sum, letter) => {
        switch (letter) {
            case 'w':
                sum += 4;
                break;
            case 'p':
                sum += 3;
                break;
            case 'b':
                sum += 2;
                break;
            case 's':
                sum += 1;
                break;
            case 'm':
                sum -= 4;
                break;
            case 'q':
                sum -= 3;
                break;
            case 'd':
                sum -= 2;
                break;
            case 'z':
                sum -= 1;
                break;
        }
        return sum;
    }, 0);

    return sum > 0 ? `Left side wins!` :
           sum < 0 ? `Right side wins!` :
           `Let's fight again!`;
}


console.log(alphabetWar("z"));        //=> Right side wins!
console.log(alphabetWar("zdqmwpbs")); //=> Let's fight again!
console.log(alphabetWar("zzzzs"));    //=> Right side wins!
console.log(alphabetWar("wwwwwwz"));  //=> Left side wins!
