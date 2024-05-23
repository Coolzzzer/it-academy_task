function buildWrapper(tagName) {
  function tagBuild(cont, attribute = "") {
		
    let attributeString = Object.entries(attribute).map(([key, value]) => ` ${key}:'${symbolCheck(value)}'`);
		function symbolCheck(content){
			let mnemonicsString = "";
			for (let i=0;i<content.length;i++){
				if(content[i] === "<"){
					mnemonicsString += "&lt;"
				}else if(content[i] === ">"){
					mnemonicsString += "&gt;"
				}else if(content[i] === '"'){
					mnemonicsString += "&quot;"
				}else if(content[i] === "'"){
					mnemonicsString += "&apos;"
				}else if(content[i] === "&"){
					mnemonicsString += "&apos;"
				}else{
					mnemonicsString += content[i]
				}
			}
			return mnemonicsString
		}
    return `<${tagName}${attributeString}>${symbolCheck(cont)}</${tagName}>`;
  }
  return tagBuild;
}

var wrapP = buildWrapper("P");
console.log(wrapP("Однажды в студёную зимнюю пору"));
console.log(wrapP("Однажды в студёную зимнюю пору", { lang: "ru" }));
console.log( wrapP("Однажды в <студёную> зимнюю пору") );
var wrapH1=buildWrapper("H1");
console.log( wrapH1("СТИХИ",{align:"center",title:"M&M's"}) );
