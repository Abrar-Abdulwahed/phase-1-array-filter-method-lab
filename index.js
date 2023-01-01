function findMatching(drivers, condition){
    return drivers.filter(elem => elem.toLowerCase() === condition.toLowerCase());
}

function fuzzyMatch(drivers, condition){
    return drivers.filter(elem => elem.startsWith(condition));
}

function matchName(drivers, condition){
    return drivers.filter(elem => elem.name === condition);
}