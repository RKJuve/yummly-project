// ingredientLines parser v0.0.1

start = array

array = "[" "]" {return [];}
      / "[" _ w:(value:ingredientString ","* _ {return value;})+ "]" {return w;}

integer = digits:[0-9]+ {
	return parseInt(digits.join(""), 10);
}

word = _ letters:char+ _ {return letters.join("")}

ingredientString = '"' scalar:scalar* unit:unit* rest:word+ '"' 
{return {"scalar":scalar.join(),"unit":unit.join(), "rest":rest.join(" ")};}

scalar = i:integer _ {return i;}
       / i:[½⅓¼⅕⅙⅛⅔⅖⅚⅜¾⅗⅝⅞⅘] _  {return i;}

unit = "tsp." 
	 / "tsp"
	 / "tbsp"
	 / "tbsp."
	 / "teaspoons"
	 / "teaspoon"
	 / "tablespoons"
	 / "tablespoon"
	 / "cup"
	 / "cups"
	 / "sheets"
	 / "sheet"
	 / "stalk"
	 / "stalks"
	 / "bunch"
	 / "bunches"
	 / "cloves"
	 / "clove"
	 / "whole"


_ "whitespace"
  = whitespace*

whitespace = [ \t\n\r]

char
  // In the original JSON grammar: "any-Unicode-character-except-"-or-\-or-control-character"
  = [^"\\\0-\x1F\x7f]
  / '\\"'  { return '"';  }
  / "\\\\" { return "\\"; }
  / "\\/"  { return "/";  }
  / "\\b"  { return "\b"; }
  / "\\f"  { return "\f"; }
  / "\\n"  { return "\n"; }
  / "\\r"  { return "\r"; }
  / "\\t"  { return "\t"; }
  // "\\u" digits:$(hexDigit hexDigit hexDigit hexDigit) {
  //    return String.fromCharCode(parseInt("0x" + digits));
  //  }