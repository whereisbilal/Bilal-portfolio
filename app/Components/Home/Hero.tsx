
"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEye, faDownload } from "@fortawesome/free-solid-svg-icons";

interface GithubUser {
  followers: number;
  public_repos: number;
}

const Hero = () => {
  const [githubData, setGithubData] = useState<GithubUser | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/whereisbilal")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch GitHub data");
        }
        return res.json();
      })
      .then((data: GithubUser) => setGithubData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-10 font-mono sm:px-6 sm:py-12 md:px-8 md:py-16">
      <div className="flex flex-col items-start gap-5 sm:gap-6">
        {/* Profile Image */}
        <img
          src="/Home_Img/bg10.png"
          alt="Muhammad Bilal"
          className="h-24 w-24 rounded-full border border-gray-300 object-cover sm:h-28 sm:w-28 md:h-32 md:w-32"
        />

        {/* Name */}
        <h1 className="break-words text-3xl font-bold text-black sm:text-4xl md:text-5xl">
          Muhammad Bilal
        </h1>

        {/* Role */}
        <p className="max-w-full text-base leading-7 text-gray-600 sm:text-lg">
          Frontend Developer | Learning Full-Stack Development
        </p>

        {/* About */}
        <p className="max-w-3xl text-sm leading-7 text-gray-700 sm:text-base sm:leading-8">
          I'm a Frontend Developer learning Full-Stack Development. I enjoy
          building modern web applications and improving my skills through
          practical projects.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-5 text-xl text-gray-600 sm:gap-6 sm:text-2xl">
          <a
            href="https://github.com/whereisbilal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition hover:text-black"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            href="https://www.linkedin.com/in/whereisbilal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition hover:text-blue-700"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a
            href="https://x.com/whereisbilal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="transition hover:text-black"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>

        {/* Resume Buttons */}
        <div className="mt-2 flex w-full flex-col gap-3 min-[400px]:flex-row min-[400px]:flex-wrap sm:gap-4">
          <a
            href="https://imresume.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-black px-4 py-3 text-sm text-black transition hover:bg-black hover:text-white sm:px-5 sm:text-base"
          >
            <FontAwesomeIcon icon={faEye} />
            View Resume
          </a>

          <a
            href="/Muhammad Bilal _ Developer Portfolio.pdf"
            download="Muhammad Bilal _ Developer Portfolio.pdf"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-black px-4 py-3 text-sm text-white transition hover:bg-gray-800 sm:px-5 sm:text-base"
          >
            <FontAwesomeIcon icon={faDownload} />
            Download Resume
          </a>
        </div>

        {/* Activity Section */}
        <div className="mt-8 hidden w-full min-w-0 sm:mt-10 md:mt-14 md:block">
          <h2 className="mb-4 text-2xl font-bold tracking-wide text-black sm:text-3xl">
            ACTIVITY
          </h2>

          {githubData && (
            <p className="flex flex-wrap items-center gap-2 text-sm text-gray-600 sm:text-base">
              <FontAwesomeIcon icon={faGithub} />
              <span>{githubData.public_repos} Repositories</span>
            </p>
          )}

          <p className="mb-5 mt-4 text-sm leading-6 text-gray-600 sm:mb-6 sm:mt-5 sm:text-base">
            GitHub contributions over the last year.
          </p>

          <div className="w-full max-w-full overflow-x-auto pb-2">
            <div className="flex w-max min-w-full justify-start sm:justify-center">
              <GitHubCalendar
                username="whereisbilal"
                colorScheme="light"
                fontSize={12}
                blockSize={10}
                blockMargin={3}
                theme={{
                  light: [
                    "#ebedf0",
                    "#d1d5db",
                    "#9ca3af",
                    "#6b7280",
                    "#1f2937",
                  ],
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
