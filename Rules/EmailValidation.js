export default function checkInputLali(ClientAPI) {

	console.debug("---> Rules: Name ValidITON - 1")
		//ClientAPI.setStyle("objectInputFaild", "");
		//The following evaluateTargetPath will retrieve the current value of the email control
	if (ClientAPI.evaluateTargetPath('#Page:EditNamePage/#Control:FCmyName/#Value') == "999") {

		var fieldValue = ClientAPI.evaluateTargetPath('#Page:EditNamePage/#Control:FCmyName/#Value');
		var element = ClientAPI.evaluateTargetPath('#Page:EditNamePage/#Control:FCmyName');

		//if (fieldValue == 'X') {
		//element.setEditable(false);
		console.debug(">>> try Element");
		ClientAPI.setStyle("objectInput", "");
		//element.setStyle("objectInput", "");

		//element.setValue("Gut gemacht!!");

		element.redraw();

		console.debug(">>> try getControl");

		//var control = ClientAPI.getControl()
		//control.setStyle("background-color: #720000");
		//control.setValue("Bitte hier Wert eingeben!!");

		console.log(">fieldValue" + fieldValue);

		let srcValue = ClientAPI.getValue();
		//let targetCtrl = controlProxy.evaluateTargetPath("#Page:SampleExtensionPage/#Control:MyExtensionControlName");

		console.log(">>> exeAction");
		//ClientAPI.executeAction('/MDKSample1/Actions/checkInputMessageAction.action');

		//}

	} else {

		var element = ClientAPI.evaluateTargetPath('#Page:EditNamePage/#Control:FCmyName');

		//if (fieldValue == 'X') {
		//element.setEditable(false);
		console.debug(">>> try Element in Else");

		element.setStyle("objectInputFaild", "");

		//element.setValue("Versuch mal X!");
		ClientAPI.setStyle("objectInputFaild", "");
		element.redraw();
		/*var control = ClientAPI.getControl();
		control.setStyle("objectInput");
		control.setValue("Bitte mal ein X eingeben!!");
		ClientAPI.setStyle("objectInputFaild", "");

		control.redraw();
		//If @ is present in the email value, return true to indicate validation is successful
		//return true;
		*/
		ClientAPI.executeAction('/MDKSample1/Actions/checkInputMessageAction.action');
	}

}