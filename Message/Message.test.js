const Message = require('./Message');

describe('Message class functions correctly', () => {
  it('allows Message instances to be saved correctly', () => {
    const message1 = new Message('hello', 'Charlie');

    expect(message1.message).toEqual('hello');
    expect(message1.poster).toEqual('Charlie');
  });

  it('increments message IDs correctly', () => {
    const message1 = new Message('hello', 'Charlie');
    const message2 = new Message('bye', 'Charlie');

    expect(message1.id).toEqual(1);
    expect(message2.id).toEqual(2);
  });
});
