describe('PhoneCat controllers', function() {
 
  describe('PhoneListCtrl', function(){
 
    it('should create "phones" model with 3 phones', function() {
      	var scope = {},
        	ctrl = new PhoneListCtrl(scope);
 		//Comparacion de la data que trae  = 3
      	expect(scope.phones.length).toBe(3);
    });
  });
});