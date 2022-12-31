function findMatching(drivers, condition){
    return drivers.filter((elem) => {
        return elem.toLowerCase() === condition.toLowerCase();
    });
}

function fuzzyMatch(drivers, condition){
    return drivers.filter((elem) => {
        return elem.startsWith(condition);
    });
}

function matchName(drivers, condition){
    return drivers.filter((elem) => {
        return elem.name === condition;
    });
}