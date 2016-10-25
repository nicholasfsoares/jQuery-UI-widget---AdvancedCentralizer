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

$.widget("nfs.center",{
	
	options:{
		parentObject:null,
		positionType:null,
		directionAlign:null,
		referenceObject:{
			top:null,
			left:null,
			bottom:null,
			right:null,
		},
		refreshWindowResize:true,
		delta:{
			top:0,
			left:0
		}
	},
	
	_offSet: {
		top: 0,
		left: 0,
	},
	
	_verticalAlign: function(){
		
		// vertical align by reference top object
		if(this.options.referenceObject['top'] && !this.options.referenceObject['bottom'])
			this._offSet['top'] = this.options.referenceObject['top'].css('top').replace('px','')*1 - this.element.outerHeight() - this.options.delta['top'];
		
		// vertical align by reference bottom object
		if(!this.options.referenceObject['top'] && this.options.referenceObject['bottom'])
			this._offSet['top'] = this.options.referenceObject['bottom'].css('top').replace('px','')*1 + this.element.outerHeight() + this.options.delta['top'];
		
		// vertical align by reference between top and bottom objects
		if(this.options.referenceObject['top'] && this.options.referenceObject['bottom'])
			this._offSet['top'] = (this.options.referenceObject['bottom'].css('top').replace('px','')*1 + (this.options.referenceObject['top'].css('top').replace('px','')*1 + this.options.referenceObject['top'].outerHeight()) - this.element.outerHeight()) / 2;
		
		// vertical align by reference window
		if(!this.options.referenceObject['top'] && !this.options.referenceObject['bottom'])
			this._offSet['top'] = ( this.options.parentObject.height() - this.element.outerHeight() ) / 2 - this.options.delta['top'];
		
		if(this.options.directionAlign === 'vertical' && this.options.delta['left'])
			this._offSet['left'] -= this.options.delta['left'];
	},
	
	_horizontalAlign: function(){
		
		// horizontal align by reference left object
		if(this.options.referenceObject['left'] && !this.options.referenceObject['right'])
			this._offSet['left'] = this.options.referenceObject['left'].css('left').replace('px','')*1 - this.element.outerWidth() - this.options.delta['left'];
		
		// horizontal align by reference right object
		if(!this.options.referenceObject['left'] && this.options.referenceObject['right'])
			this._offSet['left'] = this.options.referenceObject['right'].css('left').replace('px','')*1 + this.element.outerWidth() + this.options.delta['left'];
		
		// horizontal align by reference between left and right objects
		if(this.options.referenceObject['left'] && this.options.referenceObject['right']){
			this._offSet['left'] = (this.options.referenceObject['right'].css('left').replace('px','')*1 + this.options.referenceObject['left'].css('left').replace('px','')*1 + this.options.referenceObject['left'].outerWidth() - this.element.outerWidth()) / 2;
		}
		// horizontal align by reference window
		if(!this.options.referenceObject['left'] && !this.options.referenceObject['right'])
			this._offSet['left'] = ( this.options.parentObject.width() - this.element.outerWidth() ) / 2 - this.options.delta['left'];
		
		if(this.options.directionAlign === 'horizontal' && this.options.delta['top'])
			this._offSet['top'] -= this.options.delta['top'];
	},
	
	_positioner: function(){
		
		// force static objects setting positionType
		if(this.element.css('position') === 'static')
			this.element.css('position',this.options.positionType);
		
		// align vertical and horizontal position
		this.element
			.css({
				'top':this._offSet['top'] + 'px',
				'left':this._offSet['left'] + 'px',
			});
	},
	
	_centralizer: function(){
		
		// getting vertical align value
		if(this.options.directionAlign === 'vertical' || this.options.directionAlign === 'both')
			this._verticalAlign();
		
		// getting horizontal align value
		if(this.options.directionAlign === 'horizontal' || this.options.directionAlign === 'both')
			this._horizontalAlign();
		
		// setting left and top position.
		this._positioner();
	},
	
	_validatePositionType: function(){
		
		//check if users writed position type correctly for this plug-in.
		switch(this.options.positionType){
			case 'static': case 'relative': case 'fixed': case 'absolute':
				return this.options.positionType;
			default:
				return 'absolute';
		}
	},
	
	_direction: function(){
		
		// check if users writed direction align correctly for this plugin.
		if(this.options.directionAlign){
			if(this.options.directionAlign.toLowerCase() === 'horizontal' || this.options.directionAlign.toLowerCase() === 'h')
				return 'horizontal';
			
			if(this.options.directionAlign.toLowerCase() === 'vertical' || this.options.directionAlign.toLowerCase() === 'v')
				return 'vertical';
		}
		
		return 'both';
	},
	
	_create: function(){
		
		var selector = this.element;
		
		this._offSet['top'] = 0;
		this._offSet['left'] = 0;
		
		if(!this.options.parentObject)
			this.options.parentObject = $(window);
		
		if(!this.options.positionType)
			this.options.positionType = 'absolute';
		
		this.options.positionType = this._validatePositionType(this.options.positionType.toLowerCase());
		
		if(this.options.refreshWindowResize && this.options.refreshWindowResize !== true)
			this.options.refreshWindowResize = false;
		
		this.options.directionAlign = this._direction();
		
		this._centralizer();
		
		if(this.options.refreshWindowResize){
			$(window).resize(function(){
				selector.center('refresh');
			});
		}
	},

	refresh:  function(){
		this._offSet['top'] = 0;
		this._offSet['left'] = 0;
		this._centralizer();
	}
	
});