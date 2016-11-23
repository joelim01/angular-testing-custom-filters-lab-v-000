describe('Favorite Food Filter', function () {
	var $controller, favoriteFood, userList;

	beforeEach(module('app'));

	beforeEach(inject(function ($filter) {
			favoriteFood = $filter('favoriteFood');
	}));

	userList = [{name: "Ethan", favoriteFood: "pizza"}, {name: "Jack", favoriteFood: "Buffalo wings"}]

	it('should find matching users', function () {
			expect(favoriteFood(userList, "pizza")).toEqual([{name: "Ethan", favoriteFood: "pizza"}]);
	});

});
