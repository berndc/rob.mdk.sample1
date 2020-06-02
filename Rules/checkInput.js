export default function EmailValidation(ClientAPI) {

	//The following evaluateTargetPath will retrieve the current value of the email control
	if (ClientAPI.evaluateTargetPath('#Page:EditNamePage/#Control:FCmyNamel/#Value')) {

		var fieldValue = ClientAPI.evaluateTargetPath('#Page:EditNamePage/#Control:FCmyNamel/#Value');
		var element = ClientAPI.evaluateTargetPath('#Page:EditNamePage/#Control:FCmyNamel');

		if (fieldValue == 'X') {
			//element.setEditable(false);
			element.setStyle("objectInputFaild");
			element.redraw();
		}

		//atSign.executeAction('/RobSampleApp1/Actions/ValidationFailure.action');
	} else {

		//If @ is present in the email value, return true to indicate validation is successful
		return true;
	}
}