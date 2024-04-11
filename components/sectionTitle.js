// React component with Tailwind CSS for better readability
import React from "react";
import Container from "./container";

const SectionTitle = ({ align, pretitle, title, children }) => {
  return (
    <Container
      className={`flex w-full flex-col mt-4 ${
        align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {pretitle && (
        <div className="text-sm font-bold tracking-wider text-custom uppercase mb-2">
          {pretitle}
        </div>
      )}

      {title && (
        <h2 className="max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white mb-4">
          {title}
        </h2>
      )}

      <div className="max-w-2xl text-lg leading-relaxed text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300 space-y-4">
        {children}
      </div>
    </Container>
  );
};

export default SectionTitle;