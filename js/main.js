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
const opinionButton = document.getElementById('opinion-cat');
const experienceButton = document.getElementById('experience-cat');
const infoButton = document.getElementById('info-cat');
const questionButton = document.getElementById('question-cat');
const commentInputBox = document.getElementById('comment-input');
const allFilter = document.getElementById('all-filter');
const opinionFilter = document.getElementById('opinion-filter');
const experienceFilter = document.getElementById('experience-filter');
const infoFilter = document.getElementById('info-filter');
const questionFilter = document.getElementById('question-filter');
let categoriesArray = [];
let categoryClasses = [];
const allComments = document.getElementsByClassName('comments');

// Comment Category Functions

let noActiveCat = () => {
  if (opinionButton.classList.contains('active-cat')) {
    return false;
  } else if (experienceButton.classList.contains('active-cat')) {
    return false;
  } else if (infoButton.classList.contains('active-cat')) {
    return false;
  }
  else if (questionButton.classList.contains('active-cat')) {
    return false;
  }
  else {
    return true;
  }
}

let noActiveFilter = () => {
  if (opinionFilter.classList.contains('active')) {
    return false;
  } else if (experienceFilter.classList.contains('active')) {
    return false;
  } else if (infoFilter.classList.contains('active')) {
    return false;
  }
  else if (questionFilter.classList.contains('active')) {
    return false;
  }
  else {
    return true;
  }
}

questionButton.addEventListener('click', () => {
  if (questionButton.classList.contains('active-cat')) {
    questionButton.classList.remove('active-cat');
    let index = categoriesArray.indexOf('question');
    categoriesArray.splice(index,1);
    if (noActiveCat()) {
      clearCommentBox();
    }
  }
  else {
    questionButton.classList.add('active-cat');
    openCommentBox();
    categoriesArray.push('question');
    categoryClasses.push('question');
  }
})

infoButton.addEventListener('click', () => {
  if (infoButton.classList.contains('active-cat')) {
    infoButton.classList.remove('active-cat');
    let index = categoriesArray.indexOf('additional info');
    categoriesArray.splice(index,1);
    if (noActiveCat()) {
      clearCommentBox();
    }
  }
  else {
    infoButton.classList.add('active-cat');
    openCommentBox();
    categoriesArray.push('additional info');
    categoryClasses.push('info');
  }
})

experienceButton.addEventListener('click', () => {
  if (experienceButton.classList.contains('active-cat')) {
    experienceButton.classList.remove('active-cat');
    let index = categoriesArray.indexOf('experience');
    categoriesArray.splice(index,1);
    if (noActiveCat()) {
      clearCommentBox();
    }
  }
  else {
    experienceButton.classList.add('active-cat');
    openCommentBox();
    categoriesArray.push('experience');
    categoryClasses.push('experience');
  }
})


opinionButton.addEventListener('click', () => {
  if (opinionButton.classList.contains('active-cat')) {
    opinionButton.classList.remove('active-cat');
    let index = categoriesArray.indexOf('opinion');
    categoriesArray.splice(index,1);
    if (noActiveCat()) {
      clearCommentBox();
    }
  }
  else {
    opinionButton.classList.add('active-cat');
    openCommentBox();
    categoriesArray.push('opinion');
    categoryClasses.push('opinion');
  }
})

// Comment Box Functions

function clearCommentBox() {
  commentInputBox.disabled = true;
  submitButton.disabled = true;
  commentInputBox.placeholder="Select a comment type above to leave a comment...";
}

function openCommentBox() {
  commentInputBox.disabled = false;
  submitButton.disabled = false;
  commentInputBox.placeholder="Write your comment here...";
}

// Submit Box Functions

submitButton.addEventListener('click', () => {

  loadDoc();
  let commentInput = document.createElement('p');
  // let commentReadingArea = document.querySelector('.comment-reading-area');
  let commentReadingArea = document.querySelector('.main-comments-area');
  let newComment = document.createElement('div');
  let commentInfoBar = document.createElement('div');
  let commentCatInfoBar = document.createElement('div');
  let commentContent = document.createElement('div');
  let commentActions = document.createElement('div');
  let commentInfoBarContent = document.createElement('ul');


  newComment.classList.add('comment');

  for (var i = 0; i < categoryClasses.length; i++) {
    newComment.classList.add(categoryClasses[i]);
  }

  commentCatInfoBar.classList.add('category-line');
  commentInfoBar.classList.add('commenter-info-bar');
  commentContent.classList.add('comment-content');
  commentActions.classList.add('comment-actions');
  commentInput.innerHTML = document.querySelector('textarea').value;

  commentCatInfoBar.appendChild(createCommentCatLine(categoriesArray));
  commentInfoBar.appendChild(createCommentInfoBar(userName, timeStamp));
  commentContent.appendChild(commentInput);

  newComment.prepend(commentActions);
  newComment.prepend(commentContent);
  newComment.prepend(commentCatInfoBar);
  newComment.prepend(commentInfoBar);

  commentReadingArea.prepend(newComment);
  document.querySelector('textarea').value = "";
  opinionButton.classList.remove('active-cat');
  experienceButton.classList.remove('active-cat');
  infoButton.classList.remove('active-cat');
  questionButton.classList.remove('active-cat');
  noActiveCat();
  clearCommentBox();

  if (allCommentsTab) {
    allCommentsTab.classList.add('is-active');
    featuredCommentsTab.classList.remove('is-active');
    document.querySelector('.featured-comment-tab-content').style.display="none";
    document.querySelector('.all-comments-tab-content').style.display="block";
  }
});

let categoryString = "";

function createCommentCatLine(categoriesArray) {
  let commentCatLine = document.createElement('h5');
  let commentCats = document.createElement('span');
  if (categoriesArray.length === 1) {
      categoryString = categoriesArray[0] + ":";
  } else if (categoriesArray.length === 2) {
      categoryString = categoriesArray[0] + " and " + categoriesArray[1] + ":";
  } else if (categoriesArray.length === 3) {
    categoryString = categoriesArray[0] + ", " + categoriesArray[1] + " and " + categoriesArray[2] + ":";
  } else if (categoriesArray.length === 4) {
    categoryString = categoriesArray[0] + ", " + categoriesArray[1] + ", "+ categoriesArray[2] + " and " + categoriesArray[3] + ":";
  }
  commentCats.innerHTML = categoryString;
  commentCats.classList.add('category-detail');
  commentCatLine.innerHTML = "Shared this ";
  commentCatLine.appendChild(commentCats);
  return commentCatLine;
}

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

// Filtering Functions

allFilter.addEventListener('click', () => {
  resetFilters();
})

opinionFilter.addEventListener('click', () => {
  allFilter.classList.remove('active');
  if (opinionFilter.classList.contains('active')) {
    opinionFilter.classList.remove('active');
    toggle('opinion', "none");
    if(noActiveFilter()){
      resetFilters();
    }
  }
  else {
    if (noActiveFilter()) {
      toggle('comment', "none");
    }
    opinionFilter.classList.add('active');
    toggle('comment-reply', "none");
    toggle('opinion', "block");
  }
})

infoFilter.addEventListener('click', () => {
  allFilter.classList.remove('active');
  if (infoFilter.classList.contains('active')) {
    infoFilter.classList.remove('active');
    toggle('info', "none");
    if(noActiveFilter()){
      resetFilters();
    }
  }
  else {
    if (noActiveFilter()) {
      toggle('comment', "none");
    }
    infoFilter.classList.add('active');
    toggle('comment-reply', "none");
    toggle('info', "block");
  }
})

questionFilter.addEventListener('click', () => {
  allFilter.classList.remove('active');
  if (questionFilter.classList.contains('active')) {
    questionFilter.classList.remove('active');
    toggle('question', "none");
    if(noActiveFilter()){
      resetFilters();
    }
  }
  else {
    if (noActiveFilter()) {
      toggle('comment', "none");
    }
    questionFilter.classList.add('active');
    toggle('comment-reply', "none");
    toggle('question', "block");
  }
})

experienceFilter.addEventListener('click', () => {
  allFilter.classList.remove('active');
  if (experienceFilter.classList.contains('active')) {
    experienceFilter.classList.remove('active');
    toggle('experience', "none");
    if(noActiveFilter()){
      resetFilters();
    }
  }
  else {
    if (noActiveFilter()) {
      toggle('comment', "none");
    }
    experienceFilter.classList.add('active');
    toggle('comment-reply', "none");
    toggle('experience', "block");
  }
})

function resetFilters() {
  allFilter.classList.add('active');
  opinionFilter.classList.remove('active');
  questionFilter.classList.remove('active');
  experienceFilter.classList.remove('active');
  infoFilter.classList.remove('active');
  toggle('comment', "block");
  toggle('comment-reply', "block");
}

// Toggle Function

function toggle(className, displayState){
    var elements = document.getElementsByClassName(className)
    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = displayState;
    }
}
