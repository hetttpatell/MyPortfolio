import React from 'react';
import Button from './button';

const GitPane = ({ paneWidth }) => {
  return (
    <div
      className="h-full bg-[#29292a] text-white font-light text-[15px]"
      style={{ width: paneWidth }}
    >
      <div className="flex font-normal text-[12px] justify-between p-1.5">
        <span className="pl-[10px]">SOURCE CONTROL</span>
      </div>
      <div className="p-[14px] text-[13px] font-normal justify-center flex flex-col gap-2">
        <p className="py-[10px] leading-relaxed">
          The folder currently open doesn't have a git repository. You can
          initialize a repository which will enable source control features
          powered by git.
        </p>
        <Button>Initialize Repository</Button>

        <p className="py-[10px] leading-relaxed">
          To learn more about how to use git and source control in VS Code
          <a
            style={{ paddingLeft: '3px' }}
            href="https://code.visualstudio.com/docs/editor/versioncontrol"
            target="_blank"
            rel="noopener noreferrer"
          >
            read their docs
          </a>
          .
        </p>
        <p className="py-[10px] leading-relaxed">
          You can also directly publish this folder to a GitHub repository. Once
          published, you'll have access to source control features powered by
          git and GitHub
        </p>
        <Button>Publish to GitHub</Button>
      </div>
    </div>
  );
};

export default GitPane;
