const stack = require('../src/stack');

// Mitt test 
test("Stack should ignore empty strings and return correct stack size", () => {
    stack.push(65);
    stack.push(9);
    stack.push("")
    stack.push(444);
    stack.push("Hello world!")
    expect(stack.size()).toBe(4);
});

/*
test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});
*/