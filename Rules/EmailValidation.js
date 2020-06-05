export default function EmailValidation(ClientAPI) {

	console.debug("---> Rules: Name ValidITON - 1")

	//The following evaluateTargetPath will retrieve the current value of the email control
	if (ClientAPI.evaluateTargetPath('#Page:EditNamePage/#Control:FCmyName/#Value')) {

		var fieldValue = ClientAPI.evaluateTargetPath('#Page:EditNamePage/#Control:FCmyName/#Value');
		var element = ClientAPI.evaluateTargetPath('#Page:EditNamePage/#Control:FCmyName');

		//if (fieldValue == 'X') {
		//element.setEditable(false);
		console.debug(">>> try Element");

		element.setStyle("objectInputFaild");
		element.setStyle("background-color: #720000");
		element.setValue("Hier bitte einen Wert eingeben");
		element.redraw();

		console.debug(">>> try getControl");

		var control = ClientAPI.getControl()
		control.setStyle("background-color: #720000");
		control.setValue("Bitte hier Wert eingeben!!");

		console.log(">fieldValue" + fieldValue);

		let srcValue = ClientAPI.getValue();
		//let targetCtrl = controlProxy.evaluateTargetPath("#Page:SampleExtensionPage/#Control:MyExtensionControlName");

		console.log(">>> exeAction");
		ClientAPI.executeAction('/MDKSample1/Actions/checkInputMessageAction.action');

		//}

	} else {

		//If @ is present in the email value, return true to indicate validation is successful
		return true;
	}

}