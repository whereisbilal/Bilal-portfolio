
const WorkExperience = () => {
  return (
    <section
      id="work-experience"
      className="mt-12 w-full min-w-0 sm:mt-16 md:mt-20"
    >
      <h2 className="mb-7 text-xl font-bold uppercase tracking-wide sm:mb-10 sm:text-2xl">
        WORK EXPERIENCE
      </h2>

      <div className="flex flex-col gap-4 sm:gap-6 md:flex-row md:gap-8">
        {/* Date */}
        <div className="shrink-0 text-sm text-gray-500 sm:text-base md:min-w-[150px]">
          2024 — Present
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <h3 className="break-words text-lg font-semibold text-black sm:text-xl">
            Software Development Trainee
          </h3>

          <p className="mb-4 mt-1 text-sm leading-6 text-gray-500 sm:mb-5 sm:text-base">
            Professional Software Development Course – Jawan Pakistan
          </p>

          <div className="space-y-4 text-sm leading-7 text-gray-700 sm:space-y-5 sm:text-base sm:leading-8">
            <p>
              I have completed a Professional Software Development course from
              Jawan Pakistan, where I gained hands-on experience in HTML, CSS,
              JavaScript, React, Tailwind CSS, Next.js, and TypeScript. I
              started my web development journey in 2024, and since then I have
              built a strong foundation in modern frontend development through
              consistent practice and real-world projects.
            </p>

            <p>
              During my training, I developed projects including a Student
              Management System, a Contact Book Application, and several
              responsive web applications. These projects gave me a solid
              understanding of component-based architecture, state management,
              routing, and responsive design.
            </p>

            <p>
              I also have experience with Git and GitHub for version control,
              and I always strive to write clean, maintainable, and professional
              code.
            </p>

            <p>
              Currently, I am expanding my skills into backend development —
              learning Node.js, Express.js, and GraphQL — so that I can build
              full-stack applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;

            {/* <p>
              During my training, I completed projects including a Student
              Management System, Contact Book Application, and multiple
              responsive web applications. These projects strengthened my
              understanding of component-based architecture, state management,
              routing, and responsive design.
            </p>

            <p>
              I also have experience with Git and GitHub for version control and
              focus on writing clean, maintainable code. In addition, I create
              AI-generated content and manage a YouTube channel with 78.5K+
              subscribers. I also work with AI-powered image enhancement,
              professional portraits, and customized visual editing.
            </p> */}