const submitButton = document.getElementById('submit-comment');
const userName = "Ham4Hamilton";
const timeStamp = "10 seconds ago";
const featuredAction = document.getElementById('featured-action');
const commentSectionTabs = document.getElementById('comment-section-tabs');
const commentsTab = document.getElementById('comments-tab');
const profileTab = document.getElementById('profile-tab');
const commentsTabContent = document.getElementById('comments-tab-content');
const commentReadingTabs = document.getElementById('comments-reading-tabs');
const featuredCommentsTab = document.getElementById('featured-comments-tab');
const allCommentsTab = document.getElementById('all-comments-tab');
const collapseButton = document.getElementById('collapse-button');
const dismissButton = document.getElementById('dismiss-button');



submitButton.addEventListener('click', () => {

  loadDoc();
  let commentInput = document.createElement('p');
  // let commentReadingArea = document.querySelector('.comment-reading-area');
  let commentReadingArea = document.querySelector('.main-comments-area');
  let newComment = document.createElement('div');
  let commentInfoBar = document.createElement('div');
  let commentContent = document.createElement('div');
  let commentActions = document.createElement('div');
  let commentInfoBarContent = document.createElement('ul');


  newComment.classList.add('comment');

  commentInfoBar.classList.add('commenter-info-bar');
  commentContent.classList.add('comment-content');
  commentActions.classList.add('comment-actions');
  commentInput.innerHTML = document.querySelector('textarea').value;

  commentInfoBar.appendChild(createCommentInfoBar(userName, timeStamp));
  commentContent.appendChild(commentInput);

  newComment.prepend(commentActions);
  newComment.prepend(commentContent);
  newComment.prepend(commentInfoBar);

  commentReadingArea.prepend(newComment);
  document.querySelector('textarea').value = "";

  if (allCommentsTab) {
    allCommentsTab.classList.add('is-active');
    featuredCommentsTab.classList.remove('is-active');
    document.querySelector('.featured-comment-tab-content').style.display="none";
    document.querySelector('.all-comments-tab-content').style.display="block";
  }
});

function createCommentInfoBar(userName, timeStamp) {
  let commentInfoBar = document.createElement('ul');
  let commenterName = document.createElement('li');
  let commentTime= document.createElement('li');

  commenterName.value = userName;
  commentTime.value = timeStamp;

  commenterName.classList.add('comment-user-name');
  commentTime.classList.add('comment-timestamp');

  commentInfoBar.prepend(commentTime);
  commentInfoBar.prepend(commenterName);

  commentInfoBar.querySelector('.comment-user-name').innerHTML = userName;
  commentInfoBar.querySelector('.comment-timestamp').innerHTML = timeStamp;

  return commentInfoBar;

};

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.querySelector('.comment-actions').innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "components/action-bar.txt", true);
  xhttp.send();
}


if (featuredAction) {
  featuredAction.addEventListener('click', () => {
    if (document.getElementById('featured-action').innerHTML === "Collapse") {
      document.querySelector('.featured-comments-section').style.maxHeight = "60px";
      document.querySelector('.featured-comments-section').style.overflow = "hidden";
      document.getElementById('featured-action').innerHTML = "Expand";
      document.querySelector('.featured-comments-section').classList.add('collapsed-style');
    }
    else if (document.getElementById('featured-action').innerHTML === "Expand") {
      document.querySelector('.featured-comments-section').style.maxHeight = "none";
      document.querySelector('.featured-comments-section').style.overflow = "visible";
      document.getElementById('featured-action').innerHTML = "Collapse";
      document.querySelector('.featured-comments-section').classList.remove('collapsed-style');
    }
    else if (document.getElementById('featured-action').innerHTML === "Dismiss") {
      document.querySelector('.featured-comments-section').style.display="none";
    }
  })
}

if (collapseButton) {
  collapseButton.addEventListener('click', () => {
    if (document.getElementById('collapse-button').innerHTML === "Collapse") {
      document.querySelector('.featured-comments-section').style.maxHeight = "60px";
      document.querySelector('.featured-comments-section').style.overflow = "hidden";
      document.getElementById('collapse-button').innerHTML = "Expand";
      document.querySelector('.featured-comments-section').classList.add('collapsed-style');
    }
    else if (document.getElementById('collapse-button').innerHTML === "Expand") {
      document.querySelector('.featured-comments-section').style.maxHeight = "none";
      document.querySelector('.featured-comments-section').style.overflow = "visible";
      document.getElementById('collapse-button').innerHTML = "Collapse";
      document.querySelector('.featured-comments-section').classList.remove('collapsed-style');
    }
  })
}

if (dismissButton) {
      dismissButton.addEventListener('click', () => {
        document.querySelector('.featured-comments-section').style.display="none";
      })
}


profileTab.addEventListener('click', () => {
  profileTab.classList.add('is-active');
  commentsTab.classList.remove('is-active');
  document.querySelector('.comment-tab-content').style.display="none";
})

commentsTab.addEventListener('click', () => {
  commentsTab.classList.add('is-active');
  profileTab.classList.remove('is-active');
  document.querySelector('.comment-tab-content').style.display="block";
})

allCommentsTab.addEventListener('click', () => {
  console.log("this is working");
  allCommentsTab.classList.add('is-active');
  featuredCommentsTab.classList.remove('is-active');
  document.querySelector('.featured-comment-tab-content').style.display="none";
  document.querySelector('.all-comments-tab-content').style.display="block";
})

featuredCommentsTab.addEventListener('click', () => {
  featuredCommentsTab.classList.add('is-active');
  allCommentsTab.classList.remove('is-active');
  document.querySelector('.featured-comment-tab-content').style.display="block";
  document.querySelector('.all-comments-tab-content').style.display="none";
})
