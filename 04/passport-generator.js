const requiredFields = ['byr', 'ecl', 'eyr', 'hcl', 'hgt', 'iyr', 'pid'];
const optionalFields = ['cid'];
const allFields = [...requiredFields, ...optionalFields].sort();

const requiredFieldsString = requiredFields.join();
const allFieldsString = allFields.join();

const validEyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

module.exports = function* (data, validation = false) {
    let cursor = 0;

    while (cursor < data.length) {
        let values = [];

        while (true) {
            if (
                data[cursor] == '' 
                || cursor >= data.length
            ) break;
            values.push(data[cursor]);
            cursor++;
        }

        yield makePassport(values.join(' '), validation);

        cursor++;
    }
};

function makePassport(data, validation = false) {
    const collection = data.split(' ');

    const fields =  collection.reduce((result, field) => {
        const [label, value] = field.split(':');
        result[label] = value;
        return result;
    }, {});

    return {
        fields,
        valid: validation 
            ? fieldsCheck(fields) && fieldsValueCheck(fields) 
            : fieldsCheck(fields)
    };
}

function fieldsCheck(fields) {
    const fieldsString = Object.keys(fields).sort().join()
    return  [requiredFieldsString, allFieldsString].indexOf(fieldsString) > -1;
}

function fieldsValueCheck(fields) {
    return true
        && validateBritishYear(fields)
        && validateIssueYear(fields)
        && validateExpirationYear(fields)
        && validateHeight(fields)
        && validateHairColor(fields)
        && validateEyeColor(fields)
        &&  validatePassportId(fields)
    ;
}

function isFourDigit(value) {
    const data = value.trim();
    return !isNaN(data) && data.length == 4;
}

function isBetween(value ,min, max) {
    const data = Number(value);
    return data >= min && data <=max;
}

function validateBritishYear(fields) {
    return isFourDigit(fields.byr) && isBetween(fields.byr, 1920, 2002);
}

function validateIssueYear(fields) {
    return isFourDigit(fields.iyr) && isBetween(fields.iyr, 2010, 2020);
}

function validateExpirationYear(fields) {
    return isFourDigit(fields.eyr) && isBetween(fields.eyr, 2020, 2030);
}

function validateHeight(fields) {
    const [, height, unit] = fields.hgt.match(/^(\d+(?:\.\d+)?)(\w+)$/) 
        || [null, null, null];

    return unit == 'cm'
        ? isBetween(height, 150, 193)
        : (
            unit == 'in'
            ? isBetween(height, 59, 76)
            : false
        );
}

function validateHairColor(fields) {
    const color = fields.hcl.trim();
    return color.length == 7 && /^#[0-9a-f]+$/.test(color);
}

function validateEyeColor(fields) {
    return validEyeColors.indexOf(fields.ecl) > -1;
}

function validatePassportId(fields) {
    return /^\d{9}$/.test(fields.pid);
}
