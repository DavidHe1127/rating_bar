## Rating Widget

[![Appcelerator
Titanium](http://www-static.appcelerator.com/badges/titanium-git-badge-sq.png)](http://appcelerator.com/titanium/)
[![Appcelerator
Alloy](http://www-static.appcelerator.com/badges/alloy-git-badge-sq.png)](http://appcelerator.com/alloy/)
[![License](http://img.shields.io/badge/license-Apache%202.0-blue.svg?style=flat)](http://choosealicense.com/licenses/apache-2.0/)

###Introduction
This widget allows users to rate or purely display the rates only.

###Demo
![iOS Gif Demo](demos/ios_demo.gif) 
![Android Gif Demo](demos/android_demo.gif)


###How to use it
Check [GitTio](http://gitt.io/)

## Parameters and methods


| Function   | Parameters | Usage | Return Value Type |
| ---------- | ---------- | ----- | ----------------- |
| getRate    |    N/A     | return rates      |    integer        |

 * @param {boolean} _args.ratable - if false not allow for rating. false by default
 * @param {integer} _args.rate - 0~5
 * @param {object} _args.position - top/right/bottom/left
 * @param {object} _args.size - width/height
 

###Example :
	<Alloy>
		  <Window class="container">
		  	<Widget src="com.tourist.components.rating" ratable=true id="rating" rate="3" size={width:25,height:25} position={top:30} />
		  </Window>
	</Alloy>
	
  

## Version
* 1.0
  * Initial version

## License

<pre>
Copyright 2011-2015 David He

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
</pre>
