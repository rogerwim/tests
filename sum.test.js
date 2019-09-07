const {sum, mult} = require("./sum")
test('1 + 2 = 3', test12);
function test12() {
	expect(sum(1,2)).toBe(3)
}
test('2 + 2 = 4', test22);
function test22() {
        expect(sum(2,2)).toBe(4)
}
test('4 + 6 = 10', test46);
function test46() {
        expect(sum(4,6)).toBe(10)
}
test('8 + 8 = 16', test88);
function test88() {
        expect(sum(8,8)).toBe(16)
}
test('1 + 8 = 9', test18);
function test18() {
        expect(sum(1,8)).toBe(9)
}
test('80 + 20 = 100', test8020);
function test8020() {
        expect(sum(80,20)).toBe(100)
}

