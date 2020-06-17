//import CommonLibrary from './Library/CommonLibrary';

export default function UpdateRequiredFailed(context) {

	alert("iam in Validation");

	//first remove all previous validation
	//CommonLibrary.clearValidationForPage(pageProxy);

	var allControls = context.getPageProxy().getControls();

	//var allControls = pageProxy.getPage().getControls();     
	//
	//var NameControls = context.getPageProxy().getControl('FCmyName').getControls();

	for (var item of allControls) {
		//item.clearValidation();
		console.log(item.getName());
	}
	//for (var item of allControls) {
	//	item.clearValidation();
	//}

	//get the missing fields
	var missingRequiredFields = context.getMissingRequiredControls();
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

		control.setStyle("objectInputFaild", "");

	}

	item = context.getPageProxy().getControl('FCmyName').getControls();
	item.clearValidation();

	//show inline error
	//pageProxy.getControl('FormCellContainer').redraw();
}