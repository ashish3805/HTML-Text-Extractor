# experiments
Module to parse HTML file into a readable form.

Given a HTML file as input i.e. input.html, we need to remove all its html tags and replace them with appropriate substitution.
Substitutions are defined for each attribute of each html tag as a JSON file(tags.json):
```

	'tag_name1':{'attribute_name1':'attirbute1_replacement',
				'attribute_name1':'attribute2_replacement',
				'attribute_nameX':'attributeX_replacement',
				},
	'tag_name2':{'attribute_name1':'attribute1_replacement',
				'attribute_name2':'attribute2_replacement',
				'attribute_nameX':'attributeX_replacement'
				}

```
parse.js:
	string getTag(string):takes input html file as string searches for html tags through regular expression 'tagRegex = /<\/?[^>]*>+/g;'. and for each tag parseTag() is called.
string parseTag(string):takes the tag as input Ex."<body backgrond="some_val" font="val">". it determines the name of the tag by looking at first word and if its a valid tag_name entry in tags.json calls tagToJson() to get a tag.json object. attributes.json:

```

		'attribute1':'value1'
		'attributeX':'valueX'
	
```
now we iterate through each attribute and look for replacement in tags.json and we keep appending repStr<replacement string to be returned>.if no attribute is present attributes.json is empty and we return empty repStr.Inside getTag() we recive the repStr and replace the found tag with repStr.