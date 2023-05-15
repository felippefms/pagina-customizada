'use client';

import { useEffect } from 'react';
import intlTelInput from '../intltelinput/build/js/intlTelInput.js';
import '../intltelinput/build/css/intlTelInput.css';
import '../intltelinput/build/js/utils.js';

function InputTel() {
    useEffect(() => {
      const input = document.querySelector("#phone");
      if (input !== null) {
          intlTelInput(input, {
          utilsScript: "../intltelinput/build/js/utils.js",
          separateDialCode:true,
          initialCountry:"br",
          preferredCountries:["br","us","ca","es","jp","cn"],
          nationalMode: true,
        });
      }
    }, []);
    
  return (
    <div className="flex w-full">
      <input id="phone" type="tel" className="w-full flex rounded-2xl border border-solid py-3 border-black iti"></input>
    </div>
  );
}

export default InputTel;