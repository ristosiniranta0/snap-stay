/*
Filename: ComplexCodeExample.js
Description: This code demonstrates a sophisticated and elaborate implementation of a social media platform using JavaScript.
*/

// User class to represent each user in the social media platform
class User {
  constructor(name, age, email, password) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = password;
    this.friends = [];
    this.posts = [];
  }

  addFriend(user) {
    this.friends.push(user);
  }

  createPost(content) {
    const post = new Post(content);
    this.posts.push(post);
  }
}

// Post class to represent each post made by users
class Post {
  constructor(content) {
    this.content = content;
    this.likes = 0;
    this.comments = [];
  }

  addLike() {
    this.likes++;
  }

  addComment(user, comment) {
    this.comments.push({ user, comment });
  }
}

// Creating sample users and their interactions
const alice = new User("Alice", 25, "alice@example.com", "secretpassword");
const bob = new User("Bob", 30, "bob@example.com", "password123");
const charlie = new User("Charlie", 28, "charlie@example.com", "qwerty");

alice.addFriend(bob);
bob.addFriend(charlie);

alice.createPost("Hello, world!");
bob.createPost("Great day!");

alice.posts[0].addLike();
bob.posts[0].addComment(alice, "Nice post!");

console.log(alice);
console.log(bob);
console.log(charlie);


// Output:
/*
User {
  name: 'Alice',
  age: 25,
  email: 'alice@example.com',
  password: 'secretpassword',
  friends: [ User { name: 'Bob', ... }],
  posts: [
    Post { content: 'Hello, world!', ... }
  ]
}
User {
  name: 'Bob',
  age: 30,
  email: 'bob@example.com',
  password: 'password123',
  friends: [ User { name: 'Charlie', ... }],
  posts: [
    Post { content: 'Great day!', ... }
  ]
}
User {
  name: 'Charlie',
  age: 28,
  email: 'charlie@example.com',
  password: 'qwerty',
  friends: [],
  posts: []
}
*/