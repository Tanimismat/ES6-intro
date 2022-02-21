const count = 5;
const friends = ['abul', 'babul', 'kabul', 'sabul'];
const old1 = '<h3 class="friend-name">New-Friend</h3>';
const old2 = '<h3 class="friend-name">Friend' + count + '</h3>';
const new1 = `<h3 class="friend-name">Friend-${count}</h3>`
const new2 = `<h3 class="friend-name">New-Friend-${friends}</h3>`;
const new3 = `<h3 class="friend-name">New-Friend-${friends.length}</h3>`;
// console.log(new1);
// console.log(new2);
// console.log(new3);

const first = 'Mamun';
const last = 'Chowdhury';
const fullnew = `${first} ${last}`
console.log(fullnew);