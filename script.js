
// navbar icon active 
let navItems = document.querySelectorAll('.icon, .account-icon');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    removeActive();
    item.classList.add('active');

    if (item.classList.contains('account-icon')) {
      item.style.backgroundColor = 'var(--main-color)';
      document.querySelector(".account-page").style.display = 'block';
      
      document.querySelector(".nav-column").style.display = 'none';
      document.querySelector(".account-page-navbar").style.display = 'flex';
      document.querySelector('.follower-page').style.display = 'none';
    } else {
      document.querySelector(".account-page").style.display = 'none';
      document.querySelector(".nav-column").style.display = 'flex';
      document.querySelector(".account-page-navbar").style.display = 'none';
      
      document.querySelector('.follower-page').style.display = 'none';
    }
  });
});

function removeActive() {
  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.classList.contains('account-icon')) {
      item.style.backgroundColor = ''; // Reset background color
    }
  });
}
  

// follower page click open
document.querySelector('#followerPage').addEventListener('click', () => {
  document.querySelector('.follower-page').style.display = 'block';
  
  document.querySelector(".nav-column").style.display = 'none';

  // Add a delay of 3 seconds before checking internet connection status
 setTimeout(() => {
  if (navigator.onLine) {
 // If internet connection is good, hide the '.loading-follower-page' element
  document.querySelector('.loading-follower-page').style.display = 'none';
    } else {
    }
  }, 2000);
});







// profile picture select
document.querySelector('#select-profile').addEventListener('change',()=>{
  document.querySelectorAll('#selectImg').forEach(AllMyProfileImg=>{
  AllMyProfileImg.src = URL.createObjectURL(document.querySelector('#select-profile').files[0])
  
  })
});



// cover photo select
document.querySelector('#cover-image').addEventListener('change',()=>{
  document.querySelectorAll('#selectCoverImg').forEach(AllMyCoverImg=>{
  AllMyCoverImg.src = URL.createObjectURL(document.querySelector('#cover-image').files[0])
  
  })
});



//edit profile btn click

document.getElementById('editProfile').addEventListener('click', function() {
  
    document.querySelector('.edit-profile-page').style.bottom = '0'
    document.querySelector('nav').style.display = 'none'
    
    document.querySelector('.account-page-navbar').style.display = 'none'
});
// edit profile back btn click
document.getElementById('backBtn').addEventListener('click', function() {
  
    document.querySelector('.edit-profile-page').style.bottom = '-100%'
    
    document.querySelector('.account-page-navbar').style.display = 'flex'
    document.querySelector('nav').style.display = 'flex'
});


// create story click 
document.getElementById('myStory').addEventListener('click', function() {
  
    document.querySelector('.create-story-page').style.bottom = '0'
    document.querySelector('header').style.display = 'none';
    document.querySelector('.create-story-page-header').style.display = 'flex'
});

//create story back btn click
document.getElementById('cross-btn').addEventListener('click', function() {
  
    document.querySelector('.create-story-page').style.bottom = '-100%'
    document.querySelector('header').style.display = 'block';
    
});



document.getElementById('reels-btn').addEventListener('click', function() {
  
    document.querySelector('.active-border').style.left = '12.1rem';
    document.querySelector('.reelsColor').style.color = 'var(--main-color)';
    document.querySelector('.storieColor').style.color = 'black';
    document.querySelector('.story-scroll-container2').style.display = 'flex';
    document.querySelector('.story-scroll-container').style.display = 'none';
});

document.getElementById('srorie-btn').addEventListener('click', function() {
  
    document.querySelector('.active-border').style.left = '2rem';
    
    document.querySelector('.storieColor').style.color = 'var(--main-color)';
    document.querySelector('.reelsColor').style.color = 'black';
    document.querySelector('.story-scroll-container2').style.display = 'none';
    document.querySelector('.story-scroll-container').style.display = 'flex';
});

// navbar bottom bar 
document.getElementById('frist-icon').addEventListener('click', function() {
  
    document.querySelector('.nav-scroll-bottom-bar').style.left = '0';
    
    document.querySelector('.nav-column').style.display = 'flex';
    document.querySelector('header').style.height = '6rem';
    document.querySelector('.post-create-container').style.marginTop = '6rem'
    document.querySelector('.follower-page').style.display = 'none';
    document.getElementById('home1').style.display = 'none';
    document.getElementById('home2').style.display = 'flex';
    document.getElementById('bell2').style.display = 'none';
    document.getElementById('bell1').style.display = 'flex';
    document.getElementById("user2").style.display='none'
    document.getElementById("user1").style.display='flex'
    document.getElementById('store1').style.display = 'flex';
    document.getElementById('store2').style.display = 'none';
});

document.getElementById('second-icon').addEventListener('click', function() {
  
    document.querySelector('.nav-scroll-bottom-bar').style.left = '4.9rem';
    document.querySelector('.nav-column').style.display = 'none';
    document.querySelector('header').style.height = '3rem';
    document.querySelector('.post-create-container').style.marginTop = '3rem'
    document.getElementById('home1').style.display = 'flex';
    document.getElementById('home2').style.display = 'none';
    document.getElementById("user2").style.display='none'
    document.getElementById("user1").style.display='flex'
    document.getElementById('bell2').style.display = 'none';
    document.getElementById('bell1').style.display = 'flex';
    document.getElementById('store2').style.display = 'flex';
    document.getElementById('store1').style.display = 'none';
});

document.getElementById('third-icon').addEventListener('click', function() {
  
    document.querySelector('.nav-scroll-bottom-bar').style.left = '9.8rem';
    document.querySelector('.nav-column').style.display = 'none';
    document.querySelector('header').style.height = '3rem';
    document.querySelector('.post-create-container').style.marginTop = '3rem'
    document.getElementById('bell1').style.display = 'none';
    document.getElementById('bell2').style.display = 'flex';
    document.getElementById("user2").style.display='none'
    document.getElementById("user1").style.display='flex'
    document.getElementById('home1').style.display = 'flex';
    document.getElementById('home2').style.display = 'none';
    document.getElementById('store1').style.display = 'flex';
    document.getElementById('store2').style.display = 'none';
});

document.getElementById('followerPage').addEventListener('click', function() {
  
    document.querySelector('.nav-scroll-bottom-bar').style.left = '14.4rem';
    document.querySelector('header').style.height = '3rem';
    document.getElementById("user2").style.display='flex'
    document.getElementById("user1").style.display='none'
    document.getElementById('bell2').style.display = 'none';
    document.getElementById('bell1').style.display = 'flex';
    document.getElementById('home1').style.display = 'flex';
    document.getElementById('home2').style.display = 'none';
    document.getElementById('store1').style.display = 'flex';
    document.getElementById('store2').style.display = 'none';
});

document.getElementById('five-icon').addEventListener('click', function() {
  
    document.querySelector('.nav-scroll-bottom-bar').style.left = '18.5rem';
    document.querySelector('.follower-page').style.display = 'none';
    document.querySelector('header').style.height = '3rem';
    document.getElementById("user2").style.display='none'
    document.getElementById("user1").style.display='flex'
    document.getElementById('bell2').style.display = 'none';
    document.getElementById('bell1').style.display = 'flex';
    document.getElementById('home1').style.display = 'flex';
    document.getElementById('home2').style.display = 'none';
    document.getElementById('store1').style.display = 'flex';
    document.getElementById('store2').style.display = 'none';
});


// create post page open
document.getElementById('input-box-container').addEventListener('click', function() {
  
  document.querySelector(".create-post-page").style.bottom = '0';
  document.querySelector('header').style.display = 'none';
});

document.getElementById('back-arrow').addEventListener('click', function() {
  
  document.querySelector(".create-post-page").style.bottom = '-100%';
  document.querySelector('header').style.display = 'block';
});





// comment content making start

document.getElementById('sendIcon').addEventListener('click', function() {
    // Get the content from the input field
    var commentContent = document.getElementById('commentInput').value;

    // Create a new comment box
    var newCommentBox = document.createElement('div');
    newCommentBox.className = 'comment-box';

    // Create elements for the new comment box
    var commentProfile = document.createElement('div');
    commentProfile.className = 'comment-profile';
    var profileImage = document.createElement('img');
    profileImage.src = 'profile.jpg'; // Set the path to your profile image
    profileImage.alt = 'Profile Image';
    commentProfile.appendChild(profileImage);

    var commentContentDiv = document.createElement('div');
    commentContentDiv.className = 'comment-content';
    var commentParagraph = document.createElement('p');
    commentParagraph.textContent = commentContent;
    commentContentDiv.appendChild(commentParagraph);

    // Append elements to the new comment box
    newCommentBox.appendChild(commentProfile);
    newCommentBox.appendChild(commentContentDiv);

    // Append the new comment box to the comment container
    document.getElementById('commentContainer').appendChild(newCommentBox);

    // Clear the input field
    document.getElementById('commentInput').value = '';
});



// comment-btn click and comment-page.open

document.getElementById('comment-btn-box').addEventListener('click', function() {
  
  document.querySelector(".comment-page").style.bottom = '0';
  document.querySelector('.comment-page-navbar').style.bottom = '0';
  document.querySelector('.main-content').style.display = 'none';
});


// comment page back btn click
document.getElementById("comment-page-back").addEventListener('click',function() {
  
  document.querySelector(".comment-page").style.bottom = '-100%';
  document.querySelector('.comment-page-navbar').style.bottom = '-20%';
  document.querySelector('.main-content').style.display = 'block';
})

document.addEventListener('backbutton', function() {
  document.querySelector(".comment-page").style.bottom = '-100%';
  document.querySelector('.comment-page-navbar').style.bottom = '-20%';
  document.querySelector('.main-content').style.display = 'block';
});


// select profile Image

document.querySelector('#select-post-img').addEventListener('change',()=>{
  document.querySelectorAll('#selectFeedImage').forEach(AllMyFeedImg=>{
  AllMyFeedImg.src = URL.createObjectURL(document.querySelector('#select-post-img').files[0])
  
  document.querySelector(".post-img-display img").style.display = "block";
  })
});












  

  
  // feed content making

 
function createFeedPost() {
  const text = document.getElementById('postTextarea').value;
  const imageSrc = document.getElementById('selectFeedImage').src;
  const currentTime = new Date();

  const feedPostContainerString = `
    <div class="feed-post-container">
  <div class="feed-post-header">
    <div class="profile-img">
      <img src="profile.jpg">
      <div class="post-detils-box">
        <h4>Lazim Mahmud</h4>
        <span id="postTimestamp">Just Now</span>
      </div>
    </div>
    <i class='bx bx-dots-vertical-rounded'></i>
  </div>
  <div class="post-text">
    <p>${text}</p>
  </div>
  <div class="post-img-container">
    <img src="${imageSrc}">
  </div>
  <div class="post-react-count">
    <p>10 like</p>
    <p>10 comments • 10 shares</p>
  </div>
  <div class="post-icon-container">
    <div class="like-box">
      <i class='bx bx-like'></i>
      <p>Like</p>
    </div>
    <div id="comment-btn-box" class="comment-btn-box">
      <i class='bx bx-message-rounded'></i>
      <p>Comment</p>
    </div>
    <div class="share-box">
      <i class='bx bx-share' ></i>
      <p>Share</p>
    </div>
  </div>
  <br>
</div>
  `;

  document.body.insertAdjacentHTML('beforeend', feedPostContainerString);
  updateTimestamp(currentTime);
  document.getElementById('postTextarea').value = '';
  document.getElementById('selectFeedImage').src = '';
  document.querySelector(".post-img-display img").style.display = "none";
}

function updateSelectedImage() {
  const selectedImage = document.getElementById('select-post-img');
  const imageDisplay = document.getElementById('selectFeedImage');

  if (selectedImage.files && selectedImage.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      imageDisplay.src = e.target.result;
    };

    reader.readAsDataURL(selectedImage.files[0]);
  }
}

function updateTimestamp(currentTime) {
  const timestampElement = document.getElementById('postTimestamp');
  const elapsedMilliseconds = new Date() - currentTime;

  const hours = Math.floor(elapsedMilliseconds / (1000 * 60 * 60));
  const minutes = Math.floor((elapsedMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((elapsedMilliseconds % (1000 * 60)) / 1000);

  let timestampText = 'Just Now';

  if (hours > 0) {
    timestampText = `${hours}h ago`;
  } else if (minutes > 0) {
    timestampText = `${minutes}m ago`;
  } else if (seconds > 0) {
    timestampText = `${seconds}s ago`;
  }

  timestampElement.textContent = timestampText;
}



// account page create post click

document.getElementById('input-bar').addEventListener('click', function() {
  
  document.querySelector(".create-post-page").style.bottom = '0';
  document.querySelector('header').style.display = 'none';
});

// loading post skelecton remove setTimeout
  // ইন্টারনেট কানেকশন চেক করতে একটি ফাংশন
  function checkInternetConnection() {
    // ইন্টারনেট কানেকশন চেক লজিক এখানে যোগ করুন

    // উদাহরণ: সিমুলেট করা হয়েছে একটি চেক যা সবসময় true রিটার্ন করবে
    return true;
  }

  document.addEventListener("DOMContentLoaded", function () {
    // স্ট্রাটেজি: চেক করুন কানেকশন আছে কি না
    if (checkInternetConnection()) {
      // ইন্টারনেট কানেকশন থাকলে, 3 সেকেন্ড পর loading-post এলিমেন্টটি গোপন করুন
      setTimeout(function () {
        var loadingPostElement = document.querySelector(".loading-post");
        if (loadingPostElement) {
          loadingPostElement.style.display = "none";
          document.querySelector(".feed-container").style.display = "block"
        }
      }, 1000);
    }
  });