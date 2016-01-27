/*
tags contain the tags as json object: tags->tag_name->attribute
ifile is the given html file converted to string
*/
var fs=require('fs');
var tags=fs.readFileSync("tags.json");
tags=JSON.parse(tags);
var ifile=fs.readFileSync("input.html");
ifile=ifile.toString();

/*
converts given tag EX:<body face="arial" color="red" class="container col-md-12"> to json:
{
	"face":"arial",
	"color":"red",
	"class":"container col-md-12"
}
if no attribute found returns empty json {}
*/

function tagToJson(str){
	str=str.trim();
}

/*
parseTag() parses the given html tag. calculates and return repStr i.e. replacement to be
made by going through each attribute and finding its replacement in tags.json (now tags object)
*/
function parseTag(str){
	var repStr="";
	var tag=tagToJson(str);
	var tag_name=""// algo needed to be written to find first word in str
	if(tags.hasOwnProperty(tag_name)){
		repStr+=tags[tag_name][""]
		for( var attr in tag){
			if(tags[tag_name].hasOwnProperty(attr)){
				repStr+=tags[tag_name][attr];
			}
		}
		/*
			if tag has any img,link or href record it in corrosponding table. for future refrence.
		*/
		if(tag.hasOwnProperty("src")){
			table.push({[tag_name]:tag["src"]})
		}
		if(tag.hasOwnProperty("link")){
			table.push({[tag_name]:tag["link"]})
		}
		if(tag.hasOwnProperty("href")){
			table.push({[tag_name]:tag["href"]})
		}
	}
	return repStr
}

function getTag(str){
	var tagRegex = /<\/?[^>]*>+/g;
	var tmpArray;
	var tagsFound=[];// keeps all found tags can be removed if not needed
	var parsedStr='';
	/*execute regex search on string. search starts from postion lastIndex(read only prop of regex)*/
	
	while ((tmpArray = (tagRegex.exec(str))) !== null) {
		tagsFound.push(tmpArray[0]);
		//algo needed to call parseTag(tmpArray[0]) and replacing the matched tag with returned repStr.
	}
		return parsedStr;
}
console.log(getTag(ifile));// calling for parsing
