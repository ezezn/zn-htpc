define(['./module'], function (ui) {
	'use strict';
	ui.directive('znSize', function(){
		return {
			restrict: 'A',
			link: function(scope,element,attrs){
				attrs.$observe('znSize', function setSize(value){
				    element.css({
						'width': attrs.znSize.width,
						'height': attrs.znSize.height
					});
				});
			}
		}
	});
});	