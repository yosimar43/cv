import React from "react";
import Image from "next/image";

const Logo = () => {
 return (
  <>
   <Image className="logo" src="/logos/guillermorodas.svg" alt="" />
   <style jsx>{`
    .logo {
     width: 100%;
     max-width: 293px;
    }
   `}</style>
  </>
 );
};

export default Logo;
