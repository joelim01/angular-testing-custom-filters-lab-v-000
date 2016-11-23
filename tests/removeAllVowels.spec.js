describe('removeAllVowels Filter', function () {
	var $controller, removeAllVowels;

	beforeEach(module('app'));

	beforeEach(inject(function ($filter) {
			removeAllVowels = $filter('removeAllVowels');
	}));

	it('should not return vowels', function () {
			expect(removeAllVowels("pizza")).toEqual("pzz");
	});
});
