
var data = [
    { principal:2500, time:1.8 },
    { principal:1000, time:5 },
    { principal:3000, time:1 },
    { principal:2000, time:3 }
];
var interestData = [];

function interestCalculator ( dataArray ) {
    // scan array 
    for (let i = 0; i < dataArray.length; i++) {
        // fetch individual item from array
        var entry = dataArray[i];

        if ( entry.principal >= 2500  && entry.time > 1 ) {
            if ( entry.time < 3 ) { var rate = 3; } else { var rate = 4; }
        } 
        else { if ( entry.principal < 2500 || entry.time <= 1 ) { var rate = 2; } else { var rate = 1; } };

        var interest = ( entry.principal * rate * entry.time ) / 100;
        
        interestData.push({principal: entry.principal, rate: rate, time: entry.time, interest: interest});
    };
    console.log(interestData);

    return interestData;
};

interestCalculator(data);