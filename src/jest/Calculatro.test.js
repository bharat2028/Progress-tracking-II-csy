import { add, subtract } from './Calculator'

test('adds two numbers ', () => {
expect(add(1, 2)).toBe(3);
expect(add(-1, 1)).toBe(0);
expect(add(-1, -2)).toBe(-3);
});

test('subtract two numbers ', () => {
expect(subtract(3, 2)).toBe(1);
expect(subtract(-1, 1)).toBe(-2);
expect(subtract(0, 5)).toBe(-5);
});