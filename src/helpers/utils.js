export const getSongName = fileName => {
  if (!fileName || typeof fileName !== 'string' || fileName.trim() === '') {
    return 'Untitled';
  }

  // We will use the filename and remove the extension name
  // So, if the fileName is `Let it be.mp3` then we'll
  // just use `Let it be` and remove the `.mp3`
  let splits = fileName.split('.');
  splits.pop(); // removes the filetype (mp3, aac etc)
  return splits.join('.');
};
