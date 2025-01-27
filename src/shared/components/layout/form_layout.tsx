import React, { JSX } from "react";

type AuthLayoutProps = {
  children: JSX.Element;
  container_stryle?: React.CSSProperties;
};

const AuthLayout = (props: AuthLayoutProps) => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gray-100 dark:bg-gray-900">
      {/* main card section */}
      <div className="w-full max-w-xl mx-auto md:max-w-2xl lg:max-w-lg xl:max-w-md my-10">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4">
          {/* card header */}
          <div className="flex justify-center items-center h-40"></div>
          {/* card body */}
          <div
            className="flex flex-col items-center px-8 py-6 rounded-b-2xl border-t border-gray-200 dark:border-gray-700"
            style={{ ...props.container_stryle }}
          >
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
