function changeName() {
    document.querySelector('.userName').innerText = 'Peter Griffin'
};

function removeReq(n) {
    let userNames = [
        document.querySelector("#toddProf"),
        document.querySelector("#philProf")
    ];
    let currentReqs = parseInt(document.querySelector("#numReqs").innerText, 10);
    let reqCount = document.querySelector('#numReqs');
    let requestBox = document.querySelector('.row3');

        userNames[n].remove();
        currentReqs--;
        reqCount.innerText = currentReqs;
        if (currentReqs <= 0) {
            requestBox.remove();
        };
};

function addFriend() {
    let currentFriends = parseInt(document.querySelector("#numFriends").innerText, 10);
    let friendCount = document.querySelector('#numFriends');

        currentFriends++;
        friendCount.innerText = currentFriends
};