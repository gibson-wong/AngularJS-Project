'use strict';

angular.module ('myApp.r2ciq-dialog-directive', [])

.directive('r2Dialog', function ($timeout) {
	return {
		restrict: 'E',
		scope: {
            okButton: '@',
            okCallback: '=',
            cancelButton: '@',
            cancelCallback: '=',
		//	position: '@',
            open: '@',
            title: '@',
            width: '@',
            height: '@',
            autoOpen: '@',
            resizable: '@',
            closeOnEscape: '@',
            hideCloseButton: '@',
			enableClosButton: '@',
			modal: '@',
			draggable: '@',
			buttons: '@',
			setClose: '='
			
		},
		replace: false,
		transclude: true,
		template: '<div ng-transclude></div>',
		controller: function ($scope, $element) {
			var hideCloseButton = $scope.hideCloseButton || true;
			
			++dialogNumber;
			var dialogClass = 'r2-dialog-' + dialogNumber;
			
			var defaults = {
				closeDialogAfterCallbacks: true
			};
			
			$scope.dialogOptions = {
				autoOpen: $scope.autoOpen||false,
			//	position: $scope.position ||'{ my: "center", at: "center", of: window }',
				modal: $scope.modal || true,
				resizable: $scope.resizable || false,
				draggable: $scope.draggable || true,
				dialogClass: dialogClass,
				height: $scope.height ||'auto',
				width: $scope.width ||'auto',
				closeOnEscape: $scope.closeOnEscape || false,
			//	initialFocus: $scope.initialFocus ||'firstElement',   //valid values are: 'firstElement', 'confirmButton', null, undefined, or a jQuery wrapped set (first element will be focused)
				
				close: function () {			
					console.log('closing...');	
				},
				open: function (event, ui) {
                    if(hideCloseButton == true) {
                        $(".ui-dialog-titlebar-close", ui.dialog).hide();
                    }
				}
			};
			
		   $scope.dialogOptions['buttons'] = [];

	   },
		link: function (scope, element, attrs, ctrl) {
           if(attrs.okButton) {				
               var btnOptions = { 
                   text: attrs.okButton, 
                   click: function() { 
						scope.$apply(scope.okCallback); 
					}
               };
               scope.dialogOptions['buttons'].push(btnOptions);    
           }		  
           
            if(attrs.cancelButton) {
               var btnOptions = { 
                   text: attrs.cancelButton, 
                   click: function() { 
						scope.$apply(scope.cancelCallback()); 
					}
               };
               scope.dialogOptions['buttons'].push(btnOptions);    
           }
		    // Initialize the element as a dialog
           // For some reason this timeout is required, otherwise it doesn't work
           // for more than one dialog
           $timeout(function() {
               $(element).dialog(scope.dialogOptions);
           },0);            
            // This works when observing an interpolated attribute
            // e.g {{dialogOpen}}.  In this case the val is always a string and so
            // must be compared with the string 'true' and not a boolean
            // using open: '@' and open="{{dialogOpen}}"
            attrs.$observe('open', function(val) {
                console.log('observing open val=' + val);
                if (val == 'true') {
                    console.log('open');
                    $(element).dialog("open");
                } 
                else 
                {
                    console.log('close');					
                    $(element).dialog("close");     					
                }
            });
            // This allows title to be bound
            attrs.$observe('title', function(val) {
                console.log('observing title: val=' + val);
                $(element).dialog("option", "title", val);                   
            });		   
		}
		
	}
});

/*
$.fn.r2Dialog = function (confirmCallback, closeCallback, cancelCallback, options) {
        var content$ = $(this);

        ++dialogNumber;
        var dialogClass = 'r2-dialog-' + dialogNumber;

        var defaults = {
            closeDialogAfterCallbacks: true
        };

        options = $.extend(defaults, options);

        var defaultDialogSettings = {
            autoOpen: false,
            position: '{ my: "center", at: "center", of: window }',
            modal: true,
            resizable: false,
            draggable: true,
            dialogClass: dialogClass,
            height: 'auto',
            width: 'auto',
            initialFocus: 'firstElement',   //valid values are: 'firstElement', 'confirmButton', null, undefined, or a jQuery wrapped set (first element will be focused)
            buttons: {
                Cancel: function () {
                    if (cancelCallback && typeof (cancelCallback) == 'function') {
                        cancelCallback();
                    }
                    $(this).dialog("close");
                },
                Ok: function () {
                    var closeDialogAfterCallbacks = options.closeDialogAfterCallbacks;

                    if (confirmCallback) {
                        var callbackResult = confirmCallback();

                        if (callbackResult === false) {
                            closeDialogAfterCallbacks = false;
                        }
                    }

                    if (closeDialogAfterCallbacks) {
                        $(this).dialog("close");
                    }
                }
            },
            close: function () {
                if (closeCallback) {
                    closeCallback();
                }
            },
            open: function (event, ui) {
                hideScrollBarsBasedOnDialogOptions();
                setDialogButtonAreaContent();
                configureDialogContainsVerticalTabs(content$);
                setFocus();
            }
        };

        var settings = $.extend(defaultDialogSettings, options || {});

        content$.find("script").remove();

        content$.dialog(settings);

        function open() {
            content$.dialog('open');
        };

        function close() {
            content$.dialog('close');
        };

        function destroy() {
            content$.dialog('destroy');
        };

        function setPosition(position) {
            content$.dialog('option', 'position', position);
        };

        function enableCloseButton() {
            $('.' + dialogClass).find(".ui-dialog-titlebar-close").prop('disabled', false).removeClass('r2s-dark-button-disabled');
        };

        function disableCloseButton() {
            $('.' + dialogClass).find(".ui-dialog-titlebar-close").prop("disabled", true).addClass('r2s-dark-button-disabled');
        };

        function enableOkCancelButtons() {
            var buttons = content$.parent().find(".ui-dialog-buttonpane button");

            _.each(buttons, function (button) {
                $(button).button('enable');
            });
        };

        function disableOkCancelButtons() {
            var buttons = content$.parent().find(".ui-dialog-buttonpane button");

            _.each(buttons, function (button) {
                $(button).button('disable');
            });
        };

        function setDialogButtonAreaContent() {
            if (options && options.buttonsContent$) {
                var dialogButtonPane$ = $('.' + dialogClass).find(".ui-dialog-buttonpane");
                if (!$.contains(dialogButtonPane$[0], options.buttonsContent$[0])) {
                    dialogButtonPane$.append(options.buttonsContent$);
                }
            }
        };

        function setFocus () {
            setInitialFocus(defaultDialogSettings, dialogClass);
        }

        function closeOnEscape(isCloseOnEscape) {
            content$.dialog('option', 'closeOnEscape', isCloseOnEscape);
        }

        function hideScrollBarsBasedOnDialogOptions() {
            if (options && options.hideScrollbars) {
                content$.css('overflow', 'hidden'); //this line does the actual hiding
            }
        };

        function setButtons(buttons) {
            content$.dialog('option', 'buttons', buttons);
        }


        return {
            open: open,
            close: close,
            destroy: destroy,
            enableCloseButton: enableCloseButton,
            disableCloseButton: disableCloseButton,
            enableOkCancelButtons: enableOkCancelButtons,
            disableOkCancelButtons: disableOkCancelButtons,
            closeOnEscape: closeOnEscape,
            setButtons: setButtons,
            setPosition: setPosition
        };
    };*/