const stack = require('../src/stack');

// Mitt test 
test("Peek on stack with only an empty string should return undefined", () => {
    stack.push("Mikaela");
    stack.push("");
    stack.push("Emelie");
    stack.pop();
    expect(stack.peek()).toBe("Mikaela");
    stack.pop();
    expect(stack.peek()).toBeUndefined();
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