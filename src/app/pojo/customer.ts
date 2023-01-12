import { Address } from "./address";
import { Guarantor } from "./guarantor";
import { CarInfo } from "./car-info";
import { LoanDetails } from "./loan-details";
import { Profession } from "./profession";

export class Customer {

	cName:string;
	birthDate:string;
	gender:string;
	maritalStatus:string;
	loanAmount:string;
	email:string;
	mobile:string;
	pan:string;
	adhar:string;
    documentStatus:string;
	address:Address;
	proff:Profession;
	loan:LoanDetails;
	guarantor:Guarantor={
		gName: "",
		relation: "",
		mobile: "",
		desig: ""
	};
	car:CarInfo = {
		regNo: "",
		modelType: "",
		purchaseDate: "",
		price: ""
	}
}
