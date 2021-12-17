var Customer = /** @class */ (function () {
    function Customer(custNo, custName, custCity) {
        if (custNo === void 0) { custNo = 0; }
        if (custName === void 0) { custName = ""; }
        if (custCity === void 0) { custCity = ""; }
        this.custNo = 0;
        this.custName = "";
        this.custCity = "";
        this.custNo = custNo;
        this.custName = custName;
        this.custCity = custCity;
    }
    Customer.prototype.showCustomerDetails = function () {
        console.log("Customer Details :: Id: " + this.custNo + ", Name: " + this.custName + ", City :" + this.custCity);
    };
    return Customer;
}());
var custObj1 = new Customer();
var custObj2 = new Customer(121);
var custObj3 = new Customer(1213, "Rahul");
var custObj4 = new Customer(1213, "Rahul", "Pune");
custObj1.custNo = 12;
custObj1.custName = "Rahul";
custObj1.showCustomerDetails();
console.log("---------------");
custObj2.showCustomerDetails();
console.log("---------------");
custObj3.showCustomerDetails();
console.log("---------------");
custObj4.showCustomerDetails();
