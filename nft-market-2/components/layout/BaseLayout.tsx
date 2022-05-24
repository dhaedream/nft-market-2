import { FunctionComponent } from "react";

const BaseLayout: FunctionComponent = ({ children }) => {
  return (
    //   give page margin
    <div className=" py-16 bg-gray-50 overflow-hidden min-h-screen">
      {/* max div for screensize/viewport  */}
      <div className="max-w-7xl mx-auto px-4 spacey-8 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
};

export default BaseLayout;
