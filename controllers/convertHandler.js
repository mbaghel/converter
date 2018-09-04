/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var regex = /^[\d\/.]+/;
    var matched = input.match(regex);
    if (!matched) {
      return null;
    }

    // handle fractions
    var slashIndex = matched[0].indexOf('/');
    if (slashIndex > 0) {
      // return null if multiple slashes
      if (matched[0].slice(slashIndex + 1).indexOf('/') !== -1) {
        return null;
      }
      var num1 = parseFloat(matched[0].slice(0, slashIndex));
      var num2 = parseFloat(matched[0].slice(slashIndex + 1));
      var result = num1 / num2;
    } else {
      var result = parseFloat(matched[0]);
    }

    if (isNaN(result)) {
      return null;
    }
    return result;
  };
  
  this.getUnit = function(input) {
    var regex = /[a-z]+$/i;
    var matched = input.match(regex);
    if (!matched) {
      return null;
    }
    var unit = matched[0].toLowerCase();
    var validUnits = ['gal','l','mi','km','lbs','kg'];
    if (validUnits.indexOf(unit) < 0) {
      return null;
    }
    
    return unit;
  };
  
  this.getReturnUnit = function(initUnit) {
    var input = ['gal','l','mi','km','lbs','kg'];
    var expect = ['l','gal','km','mi','kg','lbs'];

    return expect[input.indexOf(initUnit)];
  };

  this.spellOutUnit = function(unit) {
    var input = ['gal','l','mi','km','lbs','kg'];
    var expect = ['gallons','liters','miles','kilometers','pounds','kilograms'];

    return expect[input.indexOf(unit)];
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    let result;
    switch(initUnit) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      default:
        result = initNum / miToKm;
    }
    return +(result.toFixed(5).toString());
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = `${initNum.toString()} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
