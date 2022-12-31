function findMatching(drivers, condition){
    const matches =  drivers.filter((elem) => {
        return elem.toLowerCase() === condition.toLowerCase();
    });
    return matches;
}

function fuzzyMatch(drivers, condition){
    const matches =  drivers.filter((elem) => {
        return elem.startsWith(condition);
    });
    return matches;
}

function matchName(drivers, condition){
    const matches =  drivers.filter((elem) => {
        return elem.name === condition;
    });
    return matches;
}