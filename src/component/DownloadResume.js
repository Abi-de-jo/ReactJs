import React from 'react';

const ResumeDownload = () => {
  return (
    <div>
       <a href="./RESUME.pdf" download="RESUME.pdf">
        <button className='btn'>Download Resume</button>
      </a>
    </div>
  );
};

export default ResumeDownload;
