import React, { useEffect } from 'react';

const RefreshOnLoad = () => {
  useEffect(() => {
    // Trigger a page reload every time the page is loaded
    window.location.reload();
  }, []); // Empty dependency array ensures the effect runs on every page load

  return null; // This component does not render anything
};

export default RefreshOnLoad;
