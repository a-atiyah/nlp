import { checkForName } from "../src/client/js/nameChecker"
describe("Testing the Checker functionality", () => {
    test("Testing the checkForName() function", () => {
        expect(checkForName('https://blog.udacity.com/2021/02/css-background-shorthand-tutorial.html')).toBeTruthy();
})});