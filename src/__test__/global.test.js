const text = "Hello World.";

test('Does in fact test the app.', () => {
    expect(text).toMatch(/World/);
});