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
    return () => {
      const container = ".tagcloud";
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
        'SSMS', 
        'Node.js', 
        '.NET',
        'NextJs',
      ];

      const options = {
        radius: 350,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
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
