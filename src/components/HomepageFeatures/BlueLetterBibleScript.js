import React, { useEffect } from 'react';

const BlueLetterBibleScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.blueletterbible.org/assets-v3/scripts/blbToolTip/BLB_ScriptTagger-min.js';
    script.type = 'text/javascript';
    script.onload = () => {
      // Additional settings for the plugin after it loads
      window.BLB.Tagger.Translation = 'ESV';
      window.BLB.Tagger.HyperLinks = 'all';
      window.BLB.Tagger.HideTanslationAbbrev = false;
      window.BLB.Tagger.TargetNewWindow = true;
      window.BLB.Tagger.Style = 'par';
      window.BLB.Tagger.NoSearchClassNames = 'noTag doNotTag';
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script); // Cleanup the script when the component is unmounted
    };
  }, []);

  return null; // This component doesn't render anything visually
};

export default BlueLetterBibleScript;
