const sum = require("./sum")
test('1 + 2 = 3', test12);
function test12() {
	expect(sum(1,2)).toBe(3)
}
