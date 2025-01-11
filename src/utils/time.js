export const formatTime = (seconds) => {
    if (seconds < 60) {
      return `${Math.floor(seconds)}s`;
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}m ${remainingSeconds}s`;
  };