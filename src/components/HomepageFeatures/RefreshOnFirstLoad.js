import React, { useEffect } from 'react';

const RefreshOnEveryLoad = () => {
  useEffect(() => {
    // Trigger a page reload
    window.location.reload();
  }, []); // This ensures the effect runs once on component mount

  return null; // This component does not render anything
};

export default RefreshOnEveryLoad;
