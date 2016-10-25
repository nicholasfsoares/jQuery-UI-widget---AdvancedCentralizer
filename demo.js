function Pannel(element,table){
	$(function(){
		var tr, th, td;
		
		tr = $('<tr></tr>');
		tr.appendTo(table);
		
		th = $('<th></th>',{
			colspan:4,
		}).text($.trim(element.get(0).id));
		th.appendTo(tr);
		
		tr = $('<tr></tr>');
		tr.appendTo(table);
		
		td = $('<td></td>').text('Width:');
		td.appendTo(tr);
		td = $('<td></td>',{
			class: 'elementWidth_'+$.trim(element.get(0).id),
		}).text(Math.round(element.width()));
		td.appendTo(tr);
		td = $('<td></td>').text('Height:');
		td.appendTo(tr);
		td = $('<td></td>',{
			class: 'elementHeight_'+$.trim(element.get(0).id),
		}).text(Math.round(element.height()));
		td.appendTo(tr);
		
		tr = $('<tr></tr>');
		tr.appendTo(table);
		
		td = $('<td></td>').text('Left:');
		td.appendTo(tr);
		td = $('<td></td>',{
			class: 'elementLeft_'+$.trim(element.get(0).id),
		}).text(element.css('left'));
		td.appendTo(tr);
		td = $('<td></td>').text('Top:');
		td.appendTo(tr);
		td = $('<td></td>',{
			class: 'elementTop_'+$.trim(element.get(0).id),
		}).text(element.css('top'));
		td.appendTo(tr);
		
		tr = $('<tr></tr>');
		tr.appendTo(table);
		
		td = $('<td></td>',{
			colspan:2,
		}).text('Position:');
		td.appendTo(tr);
		td = $('<td></td>',{
			colspan:2,
			class: 'elementPosition_'+$.trim(element.get(0).id),
		}).text(element.css('position').toUpperCase());
		td.appendTo(tr);
	});
}

function executeForAllChilds(childs, lista){
	var li, table;
	
	$.each(childs,function(i,el){
		if($(el).get(0).nodeName === 'DIV'){
			
			li = $('<li></li>');
			li.appendTo(lista);
			
			table = $('<table></table>');
			table.appendTo(li);
			
			Pannel($(el),table);
			
			$(window).resize(function(){
				$('.elementWidth_'+$(el).get(0).id).text(Math.round($(el).width()));
				$('.elementHeight_'+$(el).get(0).id).text(Math.round($(el).height()));
				$('.elementLeft_'+$(el).get(0).id).text($(el).css('left'));
				$('.elementTop_'+$(el).get(0).id).text($(el).css('top'));
				$('.elementPosition_'+$(el).get(0).id).text($(el).css('position'));
			});
			
			executeForAllChilds($(el).children(), lista);
		}
	});
}

function ControlPage(){
	$(function(){
		var nav, divDemoStart, ul, li, table;
		
		nav = $('.controlPage');
		divDemoStart = $('#Background');
		
		ul = $('<ul></ul>');
		ul.appendTo(nav);
		
		li = $('<li></li>');
		li.appendTo(ul);
		
		table = $('<table></table>');
		table.appendTo(li);
		
		Pannel(divDemoStart,table);
		
		$(window).resize(function(){
			$('.elementWidth_'+divDemoStart.get(0).id).text(Math.round(divDemoStart.width()));
			$('.elementHeight_'+divDemoStart.get(0).id).text(Math.round(divDemoStart.height()));
			$('.elementLeft_'+divDemoStart.get(0).id).text(divDemoStart.css('left'));
			$('.elementTop_'+divDemoStart.get(0).id).text(divDemoStart.css('top'));
			$('.elementPosition_'+divDemoStart.get(0).id).text(divDemoStart.css('position'));
		});
		
		executeForAllChilds(divDemoStart.children(), ul);
		
	});
}

$(function(){
	$('#Background').center();
	
	$('#center').center({
		parentObject: $('#Background'),
	});
	
	$('#header').center({
		parentObject: $('#Background'),
		directionAlign: 'horizontal',
	});
	
	$('#menu').center({
		parentObject: $('#Background'),
		directionAlign: 'vertical',
	});
	
	$('#alignCenterMiddle').center({
		parentObject:$('#center'),
	});
	
	$('#alignTopLeft').center({
		parentObject:$('#center'),
		referenceObject:{
			top: $('#alignCenterMiddle'),
		},
		delta: {
			top: $('#alignCenterMiddle').css('top').replace('px','')*1 - $('#alignCenterMiddle').outerHeight(),
		}
	});
	
	$('#alignBottomRight').center({
		parentObject:$('#center'),
		referenceObject:{
			bottom: $('#alignCenterMiddle'),
		},
		delta: {
			top: $('#alignCenterMiddle').css('top').replace('px','')*1 - $('#alignCenterMiddle').outerHeight(),
		}
	});
	
	$('#blueTop').center({
		parentObject: $('#alignTopLeft'),
	});
	
	$('#greenTop').center({
		parentObject: $('#alignTopLeft'),
		referenceObject:{
			right: $('#blueTop'),
		},
		delta: {
			left: 50,
		}
	});
	
	$('#redTop').center({
		parentObject: $('#alignTopLeft'),
		referenceObject:{
			right: $('#greenTop'),
		},
		delta: {
			left: 50,
		}
	});
	
	$('#greenMiddle').center({
		parentObject: $('#alignCenterMiddle'),
	});
	
	$('#redMiddle').center({
		parentObject: $('#alignCenterMiddle'),
		referenceObject:{
			right: $('#greenMiddle'),
		},
		delta: {
			left: 50,
		}
	});
	
	$('#blueMiddle').center({
		parentObject: $('#alignCenterMiddle'),
		referenceObject:{
			left: $('#greenMiddle'),
		},
		delta: {
			left: 50,
		}
	});
	
	$('#redBottom').center({
		parentObject: $('#alignBottomRight'),
	});
	
	$('#greenBottom').center({
		parentObject: $('#alignBottomRight'),
		referenceObject:{
			left: $('#redBottom'),
		},
		delta: {
			left: 50,
		}
	});
	
	$('#blueBottom').center({
		parentObject: $('#alignBottomRight'),
		referenceObject:{
			left: $('#greenBottom'),
		},
		delta: {
			left: 50,
		}
	});
	
	ControlPage();
});