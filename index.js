/* Your code goes here */
var customerName = "bob";

function upperCaseCustomerName() {
  return customerName.toUpperCase();
}

function setBestCustomer() {
  return bestCustomer = "not bob";
}

function overWriteBestCustomer() {
  return bestCustomer = "maybe bob";
}




overWriteBestCustomer()
overwrites the best customer ‣
ReferenceError: overWriteBestCustomer is not defined
    at Context.it (test/indexTest.js:26:7)overWriteBestCustomer('maybe bob')
expect(window.bestCustomer).to.equal('maybe bob')
reassignLeastFavorite
unsuccessfully tries to reassign the least favorite customer ‣
ReferenceError: changeLeastFavoriteCustomer is not defined
    at Context.it (test/indexTest.js:33:14)expect(changeLeastFavoriteCustomer).to.throw(TypeError)
attemptTwoFavoriteCustomers
unsuccessfully tries to declare favoriteCustomer with let two times ‣
ReferenceError: attemptTwoFavoriteCustomers is not defined
    at Context.it (test/indexTest.js:39:14)expect(attemptTwoFavoriteCustomers).to.throw(SyntaxError)