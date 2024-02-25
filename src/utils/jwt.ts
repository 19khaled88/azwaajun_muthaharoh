function getSecondsUntilExpiration(expValue:any) {
    // Convert the expValue to milliseconds
    const expMilliseconds = expValue * 1000;
  
    // Get the current time in milliseconds
    const currentTime = Date.now();
  
    // Calculate the difference in seconds
    const secondsUntilExpiration = Math.floor((expMilliseconds - currentTime) / 1000);
  
    return secondsUntilExpiration;
  }

  export default getSecondsUntilExpiration