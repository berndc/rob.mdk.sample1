//import CommonLibrary from './Library/CommonLibrary';

export default function UpdateRequiredFailed(pageProxy) {

	alert("iam in Validation");

	//first remove all previous validation
	//CommonLibrary.clearValidationForPage(pageProxy);

	//var allControls = pageProxy.getPage().getControls();     
	//var allControls = pageProxy.getControl('FormCellContainer').getControls();
	//for (var item of allControls) {
	//	item.clearValidation();
	//}

	//get the missing fields
	var missingRequiredFields = pageProxy.getMissingRequiredControls();
	var message = "Bitte Eingabe prüfen";

	//set the inline error
	for (var control of missingRequiredFields) {
		//control.setSyle();
		//CommonLibrary.setInlineControlError(pageProxy, control, message);
		alert("iam in llop");
		//	static executeInlineControlError(context, control, message, msgColor = 'ff0000', bgColor = '00ff00', separatorColor = '0000ff') {
		//this.setInlineControlError(context, control, message, 'ff0000', '00ff00', '0000ff';
		control.setValidationProperty('ValidationMessage', message);
		control.setValidationProperty('SeparatorIsHidden', false);
		control.setValidationProperty('ValidationViewIsHidden', false);
		control.setValidationProperty('ValidationViewBackgroundColor', '00ff00');
		control.setValidationProperty('ValidationMessageColor', 'ff0000');
		control.setValidationProperty('SeparatorBackgroundColor', '0000ff');

		//control.applyValidation();
            
		control.redraw();
		//}

		var allControls = pageProxy.getPage().getControls();
	}

	//show inline error
	//pageProxy.getControl('FormCellContainer').redraw();
}