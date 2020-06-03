export default function EmailValidation(ClientAPI) {

	console.debug("---> Rules: Name ValidITON - 1")

	//The following evaluateTargetPath will retrieve the current value of the email control
	if (ClientAPI.evaluateTargetPath('#Page:EditNamePage/#Control:FCmyName/#Value')) {

		var fieldValue = ClientAPI.evaluateTargetPath('#Page:EditNamePage/#Control:FCmyName/#Value');
		var element = ClientAPI.evaluateTargetPath('#Page:EditNamePage/#Control:FCmyName');

		if (fieldValue == 'X') {
			//element.setEditable(false);
			element.setStyle("Background", "objectInputFaild");
			element.redraw();

		}

		ClientAPI.executeAction('/MDKSample1/Actions/checkInputMessageAction.action');
	} else {

		//If @ is present in the email value, return true to indicate validation is successful
		return true;
	}

}