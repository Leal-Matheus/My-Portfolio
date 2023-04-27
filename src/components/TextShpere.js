import React, { useEffect } from "react";

import "../assets/styles/TextSphere.module.css";

const laBelle = La_Belle_Aurore({
  weight: "400",
  subsets: ['latin']
})
// Importing TagCloud package
import TagCloud from "TagCloud";
import { La_Belle_Aurore } from "next/font/google";

const TextShpere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
      const container = '.tagcloud';
      let radii;
      const texts = [
        'JavaScript', 
        'CSS', 
        'Sass', 
        'HTML',
        'C#', 
        'ReactNative', 
        'ReactJs',
        'Python', 
        'Flask', 
        'Git',
        'SQL Server', 
        'Node.js', 
        '.NET',
        'NextJs',
      ];
  
      function radiusValue() {
        if (window.screen.width <= 1024) {
          radii = 200;
        } else {
          radii = 350;
        }
        return radii;
      }
  
      const options = {
        radius: radiusValue(),
        maxSpeed: 'normal',
        initSpeed: 'normal',
        keep: true,
      };
  
      TagCloud(container, texts, options);
  }, []);

  return (
    <>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <div className={laBelle.className}>
          <span className="tagcloud" style={
            {color: "#5271ff", fontSize: '1.3rem'}
          }></span>
        </div>
      </div>
    </>
  );
};

export default TextShpere;
