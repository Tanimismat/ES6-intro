document.getElementById('add-border').addEventListener('click', function () {
    const addBorder = document.getElementById('friend-container');
    addBorder.style.border = '4px solid salmon'
    addBorder.style.padding = '10px'
});

/* const friends = document.getElementsByClassName('friend');
for (const friend of friends) {
    friend.style.backgroundColor = 'lightskyblue'
} */
function addBackgroundColor() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightskyblue'
        friend.style.margin = '2px'
        friend.style.paddingLeft = '10px'
    }
}

document.getElementById('add-friend').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
            <h3 class="friend-name">New-Friend</h3>
            <p>Lorem, ipsum.</p>
    `
    container.appendChild(friendDiv)
})