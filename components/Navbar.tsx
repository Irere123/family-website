import React from "react";
import Link from "next/link";
import { Twitter, WhatsApp } from "@mui/icons-material";
import { Tooltip } from "@mui/material";

export const Navbar: React.FC = () => {
  return (
    <>
      <div className="appNavbar__logo">
        <Link href="/">
          <a>
            <h1>N&N</h1>
          </a>
        </Link>
      </div>
      <div className="appNavbar__middle">
        <Link href="/">
          <a>
            <h3>Home</h3>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <h3>About Us</h3>
          </a>
        </Link>
        <Link href="/contact">
          <a>
            <h3>Contact</h3>
          </a>
        </Link>
      </div>
      <div className="appNavbar__right">
        <span>
          <a
            href="https://twitter.com/jmvchickens1972"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter />
          </a>
        </span>
        <span
          style={{
            cursor: "pointer",
          }}
        >
          <Tooltip title="+250788854485">
            <WhatsApp />
          </Tooltip>
        </span>
      </div>
    </>
  );
};
