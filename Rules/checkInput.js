export default function checkInput(ClientAPI) {

	//The following evaluateTargetPath will retrieve the current value of the email control
	if (!ClientAPI.evaluateTargetPath('#Page:EditNamePage/#Control:FCmyName/#Value')) {

		var fieldValue = ClientAPI.evaluateTargetPath('#Page:EditNamePage/#Control:FCmyName/#Value');
		var element = ClientAPI.evaluateTargetPath('#Page:EditNamePage/#Control:FCmyName');

		console.error(">>es wurde kein Name eingeben");

		ClientAPI.setStyle("objectInputFaild", "");

		ClientAPI.redraw();

		//return false;

		//atSign.executeAction('/RobSampleApp1/Actions/ValidationFailure.action');
	} else {

		let myName = ClientAPI.getGlobalDefinition('/MDKSample1/Globals/myName.global');

		ClientAPI.setStyle("objectInput", "");

		ClientAPI.redraw();

		//do something
		//if (myName.getType() == 'string') {
		//	alert(myName.getValue());
		//}
		//If @ is present in the email value, return true to indicate validation is successful
		//return true;
	}
}