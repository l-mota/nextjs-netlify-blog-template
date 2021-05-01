import React from "react";
import Twitter from "../assets/twitter-alt.svg";
import GitHub from "../assets/github-alt.svg";
import Instagram from "../assets/instagram.svg";
import Linkedin from "../assets/linkedin.svg";
import Email from "../assets/gmail.svg";
import config from "../lib/config";

export function SocialList({}) {
  return (
    <div>
      <a
        title="Instagram"
        href={`https://instagram.com/${config.instagram_account}`}
        target="_blank"
        rel="noopener"
      >
        <Instagram width={24} height={24} fill={"#222"} />
      </a>
      <a
        title="Linkedin"
        href={`https://linkedin.com/${config.linkedin_account}`}
        target="_blank"
        rel="noopener"
      >
        <Linkedin width={24} height={24} fill={"#222"} />
      </a>
      <a
        title="GitHub"
        href={`https://github.com/${config.github_account}`}
        target="_blank"
        rel="noopener"
      >
        <GitHub width={24} height={24} fill={"#222"} />
      </a>
      <a
        title="Email"
        href={`mailto:contato.lukamota@gmail.com`}
        target="_blank"
        rel="noopener"
      >
        <Email width={24} height={24} fill={"#222"} />
      </a>
      <a
        title="Twitter"
        href={`https://twitter.com/${config.twitter_account}`}
        target="_blank"
        rel="noopener"
      >
        <Twitter width={24} height={24} fill={"#222"} />
      </a>
            
      <style jsx>{`
        a {
          display: inline-block;
        }
        a:not(:last-child) {
          margin-right: 2em;
        }
      `}</style>
    </div>
  );
}
