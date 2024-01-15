function roadRadar(speed, area) {
    const speedLimits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    };

    function getSpeedingStatus(difference) {
        if (difference <= 20) {
            return 'speeding';
        } else if (difference <= 40) {
            return 'excessive speeding';
        } else {
            return 'reckless driving';
        }
    }

    if (speed <= speedLimits[area]) {
        console.log(`Driving ${speed} km/h in a ${speedLimits[area]} zone`);
    } else {
        const difference = speed - speedLimits[area];
        const status = getSpeedingStatus(difference);
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimits[area]} - ${status}`);
    }
}

roadRadar(200, 'motorway');
