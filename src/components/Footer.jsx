import React from 'react';

const socialCls =
  'text-text-faint text-[1.15rem] transition-all duration-200 ease-smooth hover:text-accent-strong hover:-translate-y-0.5';

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container-x flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-0.5">
          <span className="font-semibold text-text">
            Sumit Verma<span className="text-accent">.</span>
          </span>
          <span className="text-[0.85rem] text-text-faint">
            AI/ML Engineer · Bengaluru, India
          </span>
        </div>

        <div className="flex gap-5">
          <a
            href="https://github.com/sumitverma21"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={socialCls}
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/sumitverma04"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={socialCls}
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="mailto:sumitverma.workspace@mail.com"
            aria-label="Email"
            className={socialCls}
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>

        <p className="font-mono text-[0.82rem] text-text-faint">
          © {new Date().getFullYear()} Sumit Verma
        </p>
      </div>
    </footer>
  );
};

export default Footer;
