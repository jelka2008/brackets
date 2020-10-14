module.exports = function check(str, bracketsConfig) {
    let tempArrEnterBracketsStr = [];
    let configObject = {};
    let configArrayEqualBrackers = [];
    let enterBracketsConfig = [];

    for (let i = 0; i < bracketsConfig.length; i++) {
        configObject = {
            ...configObject,
            [bracketsConfig[i][0]]: bracketsConfig[i][1],
        };
        enterBracketsConfig.push(bracketsConfig[i][0]);
        if (bracketsConfig[i][0] === bracketsConfig[i][1]) {
            configArrayEqualBrackers.push(bracketsConfig[i][1]);
        }
    }
    for (let i = 0; i < str.length; i++) {
        const lastEnterBacket =
            tempArrEnterBracketsStr[tempArrEnterBracketsStr.length - 1];
        if (
            enterBracketsConfig.includes(str[i]) &&
            !(
                configArrayEqualBrackers.includes(lastEnterBacket) &&
                str[i] === lastEnterBacket
            )
        ) {
            tempArrEnterBracketsStr.push(str[i]);
        } else {
            if (
                (tempArrEnterBracketsStr.length !== 0 &&
                    str[i] === configObject[lastEnterBacket]) ||
                (lastEnterBacket === "|" && str[i] === "|")
            ) {
                tempArrEnterBracketsStr.pop();
            } else {
                return false;
            }
        }
    }
    return tempArrEnterBracketsStr.length === 0;
};
