
function convertHTML(str) {
  // &colon;&rpar;
  var multiple = {
        '&' : '&amp;',
        '<' : '&lt;',
        '>' : '&gt;',
        '"' : '&quot;',
        "'" : '&apos;'
      };
      for(var char in multiple) {
        var before = char;
        var after= multiple[char]; 
        var pattern = new RegExp(before, 'g');
        str = str.replace(pattern,after);    
      }
      return str;
    }

convertHTML("Dolce & Gabbana");