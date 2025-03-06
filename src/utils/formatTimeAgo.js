export function formatTimeAgo(fbSeconds) {
  if (!fbSeconds) {
    return "No data available";
  }
  const date = new Date(fbSeconds * 1000);
  //Date function takes milliseconds
  const now = new Date();
  // console.log(date, now);
  const seconds = Math.floor((now - date) / 1000);

  if (seconds === -1) {
    return "Just now";
  }
  if (seconds === 1 || seconds === 0) {
    return `${seconds} second ago`;
  } else if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (seconds < 120) {
    return `1 minute ago`;
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} minutes ago`;
  } else if (seconds === 3600) {
    return `1 hour ago`;
  } else if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600);
    return `${hours} hours ago`;
  } else if (seconds === 86400) {
    return `1 day ago`;
  } else {
    const days = Math.floor(seconds / 86400);
    return `${days} days ago`;
  }
}
