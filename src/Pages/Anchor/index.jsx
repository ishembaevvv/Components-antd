import React from "react";
import { Anchor, Row, Col } from "antd";
import { Link } from "react-router-dom";

export default function AnchorCom() {
  return (
    <Row>
      <Col span={16}>
        <div
          id="part-1"
          style={{
            height: "100vh",
            background: "rgba(255,0,0,0.02)",
          }}
        />
        <div
          id="part-2"
          style={{
            height: "100vh",
            background: "rgba(0,255,0,0.02)",
          }}
        />
        <div
          id="part-3"
          style={{
            height: "100vh",
            background: "rgba(0,0,255,0.02)",
          }}
        />
      </Col>
      <Col span={8}>
        <Anchor
          items={[
            {
              key: "part-1",
              href: "#part-1",
              title: "Part 1",
            },
            {
              key: "part-2",
              href: "#part-2",
              title: "Part 2",
            },
            {
              key: "part-3",
              href: "#part-3",
              title: "Part 3",
            },
          ]}
        />
      </Col>
      <Link to="/">
        <div class="w-full h-40 flex items-center justify-center cursor-pointer">
          <div class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
            <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                class="w-5 h-5 text-red-400"
              >
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
            </span>
            <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                class="w-5 h-5 text-red-400"
              >
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
            </span>
            <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200">
              Back
            </span>
          </div>
        </div>
      </Link>
    </Row>
  );
}