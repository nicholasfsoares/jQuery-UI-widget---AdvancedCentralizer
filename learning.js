/*!
 * Advanced Centralizer
 * Author: Nicholas F. Soares
 *
 * Dependences CDNS includes:
 * http://code.jquery.com/jquery-3.1.1.min.js
 * http://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css
 * http://code.jquery.com/ui/1.12.1/jquery-ui.min.js
 * 
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 Nicholas Figueiredo Soares
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
$(function(){
	$('header').center({
		directionAlign:'horizontal',
		positionType:'fixed',
	});
	
	$('#title').center({
		parentObject:$('header')
	});
	
	$('#credits').center({
		parentObject:$('footer')
	});
	
	$('#txtTop').center({
		parentObject:$('.returnTop')
	});
	
	$('section').height($('section').height() - 80);
	
	$('section').center();
	
	// examples
	
	$('#element01').center({
		parentObject:$('#background01')
	});
	
	$('#element021').center({
		parentObject:$('#background02'),
		directionAlign:'horizontal'
	});
	
	$('#element022').center({
		parentObject:$('#background02'),
		directionAlign:'vertical'
	});
	
	$('#element031').center({
		parentObject:$('#background03'),
		directionAlign:'horizontal',
		delta:{
			top:-20,
			left:-50
		}
	});
	
	$('#element032').center({
		parentObject:$('#background03'),
		directionAlign:'vertical',
		delta:{
			top:-50,
			left:-20
		}
	});
	
	$('#element045').center({
		parentObject:$('#background04')
	});
	
	$('#element042').center({
		parentObject:$('#background04'),
		referenceObject:{
			top:$('#element045')
		}
	});
	
	$('#element044').center({
		parentObject:$('#background04'),
		referenceObject:{
			left:$('#element045')
		}
	});
	
	$('#element046').center({
		parentObject:$('#background04'),
		referenceObject:{
			right:$('#element045')
		}
	});
	
	$('#element048').center({
		parentObject:$('#background04'),
		referenceObject:{
			bottom:$('#element045')
		}
	});
	
	$('#element041').center({
		parentObject:$('#background04'),
		referenceObject:{
			left:$('#element042'),
			top:$('#element044')
		}
	});
	
	$('#element043').center({
		parentObject:$('#background04'),
		referenceObject:{
			right:$('#element042'),
			top:$('#element046')
		}
	});
	
	$('#element047').center({
		parentObject:$('#background04'),
		referenceObject:{
			left:$('#element048'),
			bottom:$('#element044')
		}
	});
	
	$('#element049').center({
		parentObject:$('#background04'),
		referenceObject:{
			right:$('#element048'),
			bottom:$('#element046')
		}
	});
	
	$('#element055').center({
		parentObject:$('#background05')
	});
	
	$('#element052').center({
		parentObject:$('#background05'),
		referenceObject:{
			top:$('#element055')
		},
		delta:{
			top:20
		}
	});
	
	$('#element054').center({
		parentObject:$('#background05'),
		referenceObject:{
			left:$('#element055')
		},
		delta:{
			left:20
		}
	});
	
	$('#element056').center({
		parentObject:$('#background05'),
		referenceObject:{
			right:$('#element055')
		},
		delta:{
			left:20
		}
	});
	
	$('#element058').center({
		parentObject:$('#background05'),
		referenceObject:{
			bottom:$('#element055')
		},
		delta:{
			top:20
		}
	});
	
	$('#element051').center({
		parentObject:$('#background05'),
		referenceObject:{
			left:$('#element052'),
			top:$('#element054')
		},
		delta:{
			top:20,
			left:20
		}
	});
	
	$('#element053').center({
		parentObject:$('#background05'),
		referenceObject:{
			right:$('#element052'),
			top:$('#element056')
		},
		delta:{
			top:40,
			left:40
		}
	});
	
	$('#element057').center({
		parentObject:$('#background05'),
		referenceObject:{
			left:$('#element058'),
			bottom:$('#element054')
		},
		delta:{
			top:10,
			left:10
		}
	});
	
	$('#element059').center({
		parentObject:$('#background05'),
		referenceObject:{
			right:$('#element058'),
			bottom:$('#element056')
		},
		delta:{
			top:-40,
			left:-40
		}
	});
	
	$('#element061').center({
		parentObject:$('#background06'),
		delta:{
			top:60
		}
	});

	$('#element062').center({
		parentObject:$('#background06'),
		delta:{
			top:-20
		}
	});
	
	$('#element063').center({
		parentObject:$('#background06'),
		referenceObject:{
			top:$('#element061'),
			bottom:$('#element062')
		},
	});
	
	$('#element071').center({
		parentObject:$('#background07'),
		delta:{
			left:60
		}
	});

	$('#element072').center({
		parentObject:$('#background07'),
		delta:{
			left:-20
		}
	});
	
	$('#element073').center({
		parentObject:$('#background07'),
		referenceObject:{
			left:$('#element071'),
			right:$('#element072')
		},
	});
	
	$('#element081').center({
		parentObject:$('#background08'),
		delta:{
			top:60,
			left:60
		}
	});

	$('#element082').center({
		parentObject:$('#background08'),
		delta:{
			top:-20,
			left:-20
		}
	});
	
	$('#element083').center({
		parentObject:$('#background08'),
		referenceObject:{
			top:$('#element081'),
			left:$('#element081'),
			bottom:$('#element082'),
			right:$('#element082')
		},
	});
});