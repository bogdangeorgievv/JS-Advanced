function roadRadar(speed, area) {
  
    let speedLimit = 0;
    let difference = 0;
    let status = '';
  
    if(area == 'motorway') {
        speedLimit = 130;
        if(speed <= speedLimit) {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
        } else {
            difference = speed - speedLimit;
            if(difference <= 20) {
                status = 'speeding';
            } else if (difference > 20 && difference <= 40) {
                status = 'excessive speeding';
            } else if (difference > 40) {
                status = 'reckless driving';
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
    }

    if(area == 'interstate') {
        speedLimit = 90;
        if(speed <= speedLimit) {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
        } else {
            difference = speed - speedLimit;
            if(difference <= 20) {
                status = 'speeding';
            } else if (difference > 20 && difference <= 40) {
                status = 'excessive speeding';
            } else if (difference > 40) {
                status = 'reckless driving';
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
    }

    if(area == 'city') {
        speedLimit = 50;
        if(speed <= speedLimit) {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
        } else {
            difference = speed - speedLimit;
            if(difference <= 20) {
                status = 'speeding';
            } else if (difference > 20 && difference <= 40) {
                status = 'excessive speeding';
            } else if (difference > 40) {
                status = 'reckless driving';
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
    }

    if(area == 'residential') {
        speedLimit = 20;
        if(speed <= speedLimit) {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
        } else {
            difference = speed - speedLimit;
            if(difference <= 20) {
                status = 'speeding';
            } else if (difference > 20 && difference <= 40) {
                status = 'excessive speeding';
            } else if (difference > 40) {
                status = 'reckless driving';
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
    }
}
roadRadar(200, 'motorway')
