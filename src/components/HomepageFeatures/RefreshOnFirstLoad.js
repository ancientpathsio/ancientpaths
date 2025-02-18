import React, { useEffect } from 'react';

const RefreshOnPageLoad = () => {
  useEffect(() => {
    // Trigger a page reload
    window.location.reload();
  }, []); // Empty dependency array ensures this effect runs once per page load

  return null; // This component does not render anything
};

export default RefreshOnPageLoad;
