let currentVideoIndex = 0;
const videos = [
  document.getElementById('video1'),
  document.getElementById('video2'),
  document.getElementById('video3')
];
const sections = [
  document.getElementById('section1'),
  document.getElementById('section2'),
  document.getElementById('section3')
];

let observer;

function handleIntersection(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const index = sections.findIndex(section => section === entry.target);
      if (index !== -1) {
        restartVideo(index);
      }
    }
  });
}

function restartVideo(index) {
  videos.forEach((video, i) => {
    if (i === index) {
      video.currentTime = 0;
      video.play();
    } else {
      video.pause();
      video.currentTime = 0;
    }
  });
}

function createObserver() {
  observer = new IntersectionObserver(handleIntersection, { threshold: 0 });
  sections.forEach(section => observer.observe(section));
}

function destroyObserver() {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
}

let startX;
let isDragging = false;

function handleStart(e) {
  startX = e.pageX || e.touches[0].pageX;
  isDragging = true;
}

function handleMove(e) {
  if (!isDragging) return;
  const x = e.pageX || e.touches[0].pageX;
  const difference = startX - x;
  const threshold = window.innerWidth / 5;
  if (difference > threshold) {
    nextVideo();
    isDragging = false;
  } else if (difference < -threshold) {
    prevVideo();
    isDragging = false;
  }
}

function handleEnd() {
  isDragging = false;
}

document.addEventListener('mousedown', handleStart);
document.addEventListener('touchstart', handleStart);
document.addEventListener('mousemove', handleMove);
document.addEventListener('touchmove', handleMove);
document.addEventListener('mouseup', handleEnd);
document.addEventListener('touchend', handleEnd);

function showVideo(index) {
  sections.forEach((section, i) => {
    if (i === index) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });

  videos[currentVideoIndex].style.filter = 'brightness(0%)';
  setTimeout(() => {
    videos[currentVideoIndex].pause();
    videos[index].style.filter = 'brightness(100%)';
    videos[index].play();
    currentVideoIndex = index;
  }, 500);
}

function nextVideo() {
  const nextIndex = (currentVideoIndex + 1) % videos.length;
  showVideo(nextIndex);
}

function prevVideo() {
  const prevIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
  showVideo(prevIndex);
}

document.addEventListener('DOMContentLoaded', () => {
  showVideo(currentVideoIndex);
  createObserver();
});
