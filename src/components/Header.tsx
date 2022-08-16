import React from 'react';
import {Link} from "gatsby";

const Header = () => {
  return (
    <div className="bg-white p-2.5 mb-6">
        <div className="max-w-[980px] m-auto flex justify-between items-center">
            <div>
                <Link to='/' className="text-2xl font-semibold">
                    Newsroom
                </Link>
            </div>
            <div>
                <button className="text-sm text-[#1d1d1f]">
                    Popular Topics
                </button>
            </div>
        </div>
    </div>
  );
};



export default Header;