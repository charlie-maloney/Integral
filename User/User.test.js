const User = require('./User');

describe('User class functions correctly', () => {
  it('allows users to publish messages to their personal timeline', () => {
    const alice = new User('Alice');

    alice.postMessage('hello');
    expect(alice.timeline[0].message).toEqual('hello');
  });

  it('allows users to view *their own* timeline with the correct posts', () => {
    const alice = new User('Alice');

    alice.postMessage('hello');
    expect(alice.viewMessages()).toEqual(alice.timeline);
  });

  it('allows users to view *other* timelines with the correct posts', () => {
    const alice = new User('Alice');
    const bob = new User('Bob');

    alice.postMessage('hello');
    expect(bob.viewMessages(alice)).toEqual(alice.timeline);
  });

  it('allows users to follow other users', () => {
    const alice = new User('Alice');
    const bob = new User('Bob');

    alice.followUser(bob);
    expect(alice.following[0]).toEqual(bob);
    expect(bob.followers[0]).toEqual(alice);
  });

  it(`displays user's timeline in the order messages were posted`, () => {
    const alice = new User('Alice');
    const bob = new User('Bob');
    const charlie = new User('Charlie');

    charlie.followUser(alice);
    charlie.followUser(bob);

    alice.postMessage(`I love the weather today.`);
    bob.postMessage(`Darn! We lost!`);
    bob.postMessage(`Good game though.`);
    charlie.postMessage(`I'm in New York today! Anyone wants to have a coffee?`);

    const charlieTimeline = charlie.viewTimeline()

    expect(charlieTimeline[0].message).toEqual(`I'm in New York today! Anyone wants to have a coffee?`)
    expect(charlieTimeline[1].message).toEqual(`Good game though.`)
    expect(charlieTimeline[2].message).toEqual(`Darn! We lost!`)
    expect(charlieTimeline[3].message).toEqual(`I love the weather today.`)
  });
});
