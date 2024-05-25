export default function Home() {
  return (
    <>
      <div>
        <p>7.1. Tailwind CSS Font Family</p>
        <b>Tailwind CSS font-sans Class</b>
        <div className="mx-24 bg-green-200">
          <p className="font-sans p-4">
            Geeksforgeeks: A Computer Science portal for Geeks
          </p>
        </div>
        <b>Tailwind CSS font-serif Class</b>
        <div className="mx-24 bg-green-200">
          <p className="font-serif  p-4">
            Geeksforgeeks: A Computer Science portal for Geeks
          </p>
        </div>
        <b>Tailwind CSS font-mono Class</b>
        <div className="mx-24 bg-green-200">
          <p className="font-mono p-4">
            Geeksforgeeks: A Computer Science portal for Geeks
          </p>
        </div>

        <p>&nbsp;</p>
        <p>7.2. Tailwind CSS Font Size</p>
        <b>Tailwind CSS Font Size Class</b>
        <div className="mx-24 bg-green-200">
          <p className="text-xs">
            text-xs
          </p>
          <p className="text-sm">
            text-sm
          </p>
          <p className="text-base">
            text-base
          </p>
          <p className="text-lg">
            text-lg
          </p>
          <p className="text-xl">
            text-xl
          </p>
        </div>

        <p>&nbsp;</p>
        <p>7.3. Tailwind CSS Font Smoothing</p>
        <b>Tailwind CSS antialiased Class</b>
        <div className="mx-24 bg-green-200">
          <p className="text-lg p-4 antialiased">
            antialiased
          </p>
        </div>
        <b>Tailwind CSS subpixel-antialiased Class</b>
        <div className="mx-24 bg-green-200">
          <p className="text-lg p-4 subpixel-antialiased">
            subpixel-antialiased
          </p>
        </div>

        <p>&nbsp;</p>
        <p>7.4. Tailwind CSS Font Style</p>
        <b>Tailwind CSS italic Class</b>
        <div className="mx-24 bg-green-200">
          <p className="p-4 italic text-justify">
            Geeksforgeeks: A Computer Science portal
            for Geeks those who wants to pursue an engineering
            degree or wants to create a career on engineering field.
          </p>
        </div>
        <b>Tailwind CSS non-italic Class</b>
        <div className="mx-24 bg-green-200">
          <p className="p-4 non-italic text-justify">
            Geeksforgeeks: A Computer Science portal
            for Geeks those who wants to pursue an engineering
            degree or wants to create a career on engineering field.
          </p>
        </div>

        <p>&nbsp;</p>
        <p>7.5. Tailwind CSS Font Weight</p>
        <b>Tailwind CSS Font Weight Class</b>
        <div className="mx-24 bg-green-200">
          <p className="p-2 text-justify">font-thin:
            <span className="font-thin pl-10">
              A Computer Science portal for Geeks
            </span>
          </p>
          <p className="p-2 text-justify">font-normal:
            <span className="font-normal pl-4">
              A Computer Science portal for Geeks
            </span>
          </p>
          <p className="p-2 text-justify">font-medium:
            <span className="font-medium pl-2">
              A Computer Science portal for Geeks
            </span>
          </p>
          <p className="p-2 text-justify">font-bold:
            <span className="font-bold pl-8">
              A Computer Science portal for Geeks
            </span>
          </p>
          <p className="p-2 text-justify">font-black:
            <span className="font-black pl-6">
              A Computer Science portal for Geeks
            </span>
          </p>
        </div>

        <p>&nbsp;</p>
        <p>7.6. Tailwind CSS Font Variant Numeric</p>
        <b>Tailwind CSS Font Variant Numeric Class</b>
        <div className="bg-green-300 mx-24 h-full">
          <p className="normal-nums">normal-nums: 1234567890</p>
          <p className="ordinal">ordinal: 1234567890</p>
          <p className="slashed-zero">slashed-zero: 1234567890</p>
          <p className="lining-nums">lining-nums: 1234567890</p>
          <p className="oldstyle-nums">oldstyle-nums: 1234567890</p>
          <p className="proportional-nums">proportional-nums: 12121</p>
          <p className="proportional-nums">proportional-nums: 90909</p>
          <p className="tabular-nums">tabular-nums: 12121</p>
          <p className="tabular-nums">tabular-nums: 90909</p>
          <p className="diagonal-fractions">diagonal-fractions: 1/2 3/4 5/6</p>
          <p className="stacked-fractions">stacked-fractions: 1/2 3/4 5/6</p>
        </div>

        <p>&nbsp;</p>
        <p>7.7. Tailwind CSS Letter Spacing</p>
        <b>Tailwind CSS Letter Spacing Class</b>
        <div className="mx-24 bg-green-200 text-justify">
          <p className="p-2">tracking-tighter:<br/>
            <span className="tracking-tighter">
              A Computer Science portal for Geeks
            </span>
          </p>
          <p className="p-2">tracking-tight:<br/>
            <span className="tracking-tight">
              A Computer Science portal for Geeks
            </span>
          </p>
          <p className="p-2">tracking-normal:<br/>
            <span className="tracking-normal">
              A Computer Science portal for Geeks
            </span>
          </p>
          <p className="p-2">tracking-wide:<br/>
            <span className="tracking-wide">
              A Computer Science portal for Geeks
            </span>
          </p>
          <p className="p-2">tracking-wider:<br/>
            <span className="tracking-wider">
              A Computer Science portal for Geeks
            </span>
          </p>
          <p className="p-2">tracking-widest:<br/>
            <span className="tracking-widest">
              A Computer Science portal for Geeks
            </span>
          </p>
        </div>

        <p>&nbsp;</p>
        <p>7.8. Tailwind CSS Line Height</p>
        <b>Tailwind CSS Line Height Class</b>
        <div className="mx-24 bg-green-200 text-justify">
          <p className="p-2">leading-none:<br/>
            <span className="leading-none">
              How many times were you frustrated
              while looking out for a good
              collection of programming/algorithm
              /interview questions? What did you
              expect and what did you get?
              GeeksforGeeks.
            </span>
          </p>
          <p className="p-2">leading-normal:<br/>
            <span className="leading-normal">
              How many times were you frustrated
              while looking out for a good
              collection of programming/algorithm
              /interview questions? What did you
              expect and what did you get?
              GeeksforGeeks.
            </span>
          </p>
          <p className="p-2">leading-loose:<br/>
            <span className="leading-loose">
              How many times were you frustrated
              while looking out for a good
              collection of programming/algorithm
              /interview questions? What did you
              expect and what did you get?
              GeeksforGeeks.
            </span>
          </p>
        </div>

        <p>&nbsp;</p>
        <p>7.9. Tailwind CSS List Style Type</p>
        <b>Tailwind CSS List Style Type Class</b>
        <div className="mx-24 bg-green-200 text-justify px-6">
          <ul className="list-disc">
            <li>Self learning</li>
            <li>Contribute at Open Source</li>
            <li>Gain Stack overflow respect</li>
          </ul>
          <br/>
          <ol className="list-decimal">
            <li>Self learning</li>
            <li>Contribute at Open Source</li>
            <li>Gain Stack overflow respect</li>
          </ol>
          <br/>
          <ul className="list-none">
            <li>Self learning</li>
            <li>Contribute at Open Source</li>
            <li>Gain Stack overflow respect</li>
          </ul>
        </div>

        <p>&nbsp;</p>
        <p>7.10. Tailwind CSS Placeholder Color</p>
        <b>Tailwind CSS Placeholder Color Class</b>
        <div className="mx-14 bg-green-200 grid grid-rows-4 grid-flow-col text-justify p-4">
          <input className="placeholder-gray-500 p-3 m-2 rounded-lg border-2 border-green-400 bg-green-100"
                 placeholder="placeholder-gray-500"/>
          <input className="placeholder-red-500 p-3 m-2 rounded-lg border-2 border-green-400 bg-green-100"
                 placeholder="placeholder-red-500"/>
          <input className="placeholder-yellow-500 p-3 m-2 rounded-lg border-2 border-green-400 bg-green-100"
                 placeholder="placeholder-yellow-500"/>
          <input className="placeholder-green-500 p-3 m-2 rounded-lg border-2 border-green-400 bg-green-100"
                 placeholder="placeholder-green-500"/>
          <input className="placeholder-blue-500 p-3 m-2 rounded-lg border-2 border-green-400 bg-green-100"
                 placeholder="placeholder-blue-500"/>
          <input className="placeholder-indigo-500 p-3 m-2 rounded-lg border-2 border-green-400 bg-green-100"
                 placeholder="placeholder-indigo-500"/>
          <input className="placeholder-purple-500 p-3 m-2 rounded-lg border-2 border-green-400 bg-green-100"
                 placeholder="placeholder-purple-500"/>
          <input className="placeholder-pink-500 p-3 m-2 rounded-lg border-2 border-green-400 bg-green-100"
                 placeholder="placeholder-pink-500"/>
          <input className="placeholder-current p-3 m-2 rounded-lg border-2 border-green-400 bg-green-100"
                 placeholder="placeholder-current"/>
          <input className="placeholder-transparent p-3 m-2 rounded-lg border-2 border-green-400 bg-green-100"
                 placeholder="placeholder-transparent"/>
          <input className="placeholder-white p-3 m-2 rounded-lg border-2 border-green-400 bg-green-100"
                 placeholder="placeholder-white"/>
          <input className="placeholder-black p-3 m-2 rounded-lg border-2 border-green-400 bg-green-100"
                 placeholder="placeholder-black"/>
        </div>

        <p>&nbsp;</p>
        <p>7.11. Tailwind CSS Placeholder Opacity</p>
        <b>Tailwind CSS Placeholder Opacity Class</b>
        <div className="mx-14 bg-green-200 grid grid-rows-4 grid-flow-col text-justify p-4">
          <input className="placeholder-green-800 p-3 m-2 rounded-lg placeholder-opacity-100 border-2 border-green-400 bg-green-100"
                 placeholder="placeholder-opacity-100"/>
          <input className="placeholder-green-800 p-3 m-2 rounded-lg placeholder-opacity-75 border-2 border-green-400 bg-green-100"
                 placeholder="placeholder-opacity-75"/>
          <input className="placeholder-green-800 p-3 m-2 rounded-lg placeholder-opacity-50 border-2 border-green-400 bg-green-100"
                 placeholder="placeholder-opacity-50"/>
          <input className="placeholder-green-800 p-3 m-2 rounded-lg placeholder-opacity-25 border-2 border-green-400 bg-green-100"
                 placeholder="placeholder-opacity-25"/>
          <input className="placeholder-yellow-800 p-3 m-2 rounded-lg placeholder-opacity-100 border-2 border-green-400 bg-green-100"
                 placeholder="placeholder-opacity-100"/>
          <input className="placeholder-yellow-800 p-3 m-2 rounded-lg placeholder-opacity-75 border-2 border-green-400 bg-green-100"
                 placeholder="placeholder-opacity-75"/>
          <input className="placeholder-yellow-800 p-3 m-2 rounded-lg placeholder-opacity-50 border-2 border-green-400 bg-green-100"
                 placeholder="placeholder-opacity-50"/>
          <input className="placeholder-yellow-800 p-3 m-2 rounded-lg placeholder-opacity-25 border-2 border-green-400 bg-green-100"
                 placeholder="placeholder-opacity-25"/>
          <input className="placeholder-indigo-800 p-3 m-2 rounded-lg placeholder-opacity-100 border-2 border-green-400 bg-green-100"
                 placeholder="placeholder-opacity-100"/>
          <input className="placeholder-indigo-800 p-3 m-2 rounded-lg placeholder-opacity-75 border-2 border-green-400 bg-green-100"
                 placeholder="placeholder-opacity-75"/>
          <input className="placeholder-indigo-800 p-3 m-2 rounded-lg placeholder-opacity-50 border-2 border-green-400 bg-green-100"
                 placeholder="placeholder-opacity-50"/>
          <input className="placeholder-indigo-800 p-3 m-2 rounded-lg placeholder-opacity-25 border-2 border-green-400 bg-green-100"
                 placeholder="placeholder-opacity-25"/>
        </div>

        <p>&nbsp;</p>
        <p>7.12. Tailwind CSS Text Alignment</p>
        <b>Tailwind CSS text-left Class</b>
        <div className="mx-24 bg-green-200">
          <p className="p-4 text-left">
            Geeksforgeeks: A Computer Science portal for Geeks
            those who wants to pursue an engiinering degree or
            wants to create a career on engineering field.
          </p>
        </div>
        <b>Tailwind CSS text-center Class</b>
        <div className="mx-24 bg-green-200">
          <p className="p-4 text-center">
            Geeksforgeeks: A Computer Science portal for Geeks
            those who wants to pursue an engiinering degree or
            wants to create a career on engineering field.
          </p>
        </div>
        <b>Tailwind CSS text-right Class</b>
        <div className="mx-24 bg-green-200">
          <p className="p-4 text-right">
            Geeksforgeeks: A Computer Science portal for Geeks
            those who wants to pursue an engiinering degree or
            wants to create a career on engineering field.
          </p>
        </div>
        <b>Tailwind CSS text-justify Class</b>
        <div className="mx-24 bg-green-200">
          <p className="p-4 text-justify">
            Geeksforgeeks: A Computer Science portal for Geeks
            those who wants to pursue an engineering degree or
            wants to create a career on engineering field.
          </p>
        </div>

        <p>&nbsp;</p>
        <p>7.13. Tailwind CSS Text Color</p>
        <b>Tailwind CSS Text Color Class</b>  
        <div class="mx-14 bg-green-200 grid grid-rows-4 grid-flow-col text-justify p-4"> 
          <p class="text-transparent p-2">
            text-transparent
          </p>
          <p class="text-current p-2">
            text-current
          </p>
          <p class="text-black p-2">
            text-black
          </p>
          <p class="text-white p-2">
            text-white
          </p>
          <p class="text-gray-700 p-2">
            text-gray-700
          </p>
          <p class="text-red-700 p-2">
            text-red-700
          </p>
          <p class="text-indigo-700 p-2">
            text-indigo-700
          </p>
          <p class="text-blue-700 p-2">
            text-blue-700
          </p>
          <p class="text-green-700 p-2">
            text-green-700
          </p>
          <p class="text-yellow-700 p-2">
            text-yellow-700
          </p>
          <p class="text-pink-700 p-2">
            text-pink-700
          </p>
          <p class="text-purple-700 p-2">
            text-purple-700
          </p>
        </div>

        <p>&nbsp;</p>
        <p>7.14. Tailwind CSS Text Opacity</p>
        <b>Tailwind CSS Text Opacity Class</b>
        <div className="mx-14 bg-green-200 grid grid-rows-4 grid-flow-col text-justify p-4">
          <p className="text-green-800 text-opacity-100 p-2">
            text-opacity-100
          </p>
          <p className="text-green-800 text-opacity-75 p-2">
            text-opacity-75
          </p>
          <p className="text-green-800 text-opacity-50 p-2">
            text-opacity-50
          </p>
          <p className="text-green-800 text-opacity-25 p-2">
            text-opacity-25
          </p>
          <p className="text-yellow-800 text-opacity-100 p-2">
            text-opacity-100
          </p>
          <p className="text-yellow-800 text-opacity-75 p-2">
            text-opacity-75
          </p>
          <p className="text-yellow-800 text-opacity-50 p-2">
            text-opacity-50
          </p>
          <p className="text-yellow-800 text-opacity-25 p-2">
            text-opacity-25
          </p>
          <p className="text-pink-800 text-opacity-100 p-2">
            text-opacity-100
          </p>
          <p className="text-pink-800 text-opacity-75 p-2">
            text-opacity-75
          </p>
          <p className="text-pink-800 text-opacity-50 p-2">
            text-opacity-50
          </p>
          <p className="text-pink-800 text-opacity-25 p-2">
            text-opacity-25
          </p>
        </div>

        <p>&nbsp;</p>
        <p>7.15. Tailwind CSS Text Decoration</p>
        <b>Tailwind CSS underline Class</b>
        <div className="mx-14 bg-green-200 p-4">
          <p className="underline">
            A Computer Science portal for Geeks
          </p>
        </div>
        <b>Tailwind CSS line-through Class</b>
        <div className="mx-14 bg-green-200 p-4">
          <p className="line-through">
            A Computer Science portal for Geeks
          </p>
        </div>
        <b>Tailwind CSS Text Decoration Class</b>
        <div className="mx-14 bg-green-200 p-4">
          <p className="no-underline">
            A Computer Science portal for Geeks
          </p>
        </div>

        <p>&nbsp;</p>
        <p>7.16. Tailwind CSS Text Transform</p>
        <b>Tailwind CSS uppercase Class</b>
        <div className="mx-14 bg-green-200 p-4">
          <p className="uppercase">
            A Computer Science portal for Geeks
          </p>
        </div>
        <b>Tailwind CSS lowercase Class</b>
        <div className="mx-14 bg-green-200 p-4">
          <p className="lowercase">
            A Computer Science portal for Geeks
          </p>
        </div>
        <b>Tailwind CSS capitalize Class</b>
        <div className="mx-14 bg-green-200 p-4">
          <p className="capitalize">
            a computer science portal for geeks
          </p>
        </div>
        <b>Tailwind CSS normal-case Class</b>
        <div className="mx-14 bg-green-200 p-4">
          <p className="normal-case">
            A Computer Science portal for Geeks
          </p>
        </div>

        <p>&nbsp;</p>
        <p>7.17. Tailwind CSS Vertical Alignment</p>
        <b>Tailwind CSS Vertical Alignment Class</b>
        <div className="mx-4 h-24 rounded-lg grid grid-cols-2 text-left ">
          <p>
            <img className="inline-block align-baseline" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMlcO9UcFI5U_i_wm3AKfZUJBVqWt199vIiwQk7q4-x2XmBujSdJ_OAaz1KWI_oF342SGATTEzdz8_y4rk8nZhdNVHzmycxpRsfPtyR6TbZ-nWueN6SKuKRX0s7s_ZLjDmnMghk1utFALjgRHXc3jVq4jyFTjb91eL4OKItbeX1N2tIlU3pJysOsU83IuZ/s1600/GeeksForGeeks.png"/>
            align-baseline
          </p>
          <p>
            <img className="inline-block align-top" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMlcO9UcFI5U_i_wm3AKfZUJBVqWt199vIiwQk7q4-x2XmBujSdJ_OAaz1KWI_oF342SGATTEzdz8_y4rk8nZhdNVHzmycxpRsfPtyR6TbZ-nWueN6SKuKRX0s7s_ZLjDmnMghk1utFALjgRHXc3jVq4jyFTjb91eL4OKItbeX1N2tIlU3pJysOsU83IuZ/s1600/GeeksForGeeks.png"/>
            align-top
          </p>
          <p>
            <img className="inline-block align-middle" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMlcO9UcFI5U_i_wm3AKfZUJBVqWt199vIiwQk7q4-x2XmBujSdJ_OAaz1KWI_oF342SGATTEzdz8_y4rk8nZhdNVHzmycxpRsfPtyR6TbZ-nWueN6SKuKRX0s7s_ZLjDmnMghk1utFALjgRHXc3jVq4jyFTjb91eL4OKItbeX1N2tIlU3pJysOsU83IuZ/s1600/GeeksForGeeks.png"/>
            align-middle
          </p>
          <p>
            <img className="inline-block align-bottom" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMlcO9UcFI5U_i_wm3AKfZUJBVqWt199vIiwQk7q4-x2XmBujSdJ_OAaz1KWI_oF342SGATTEzdz8_y4rk8nZhdNVHzmycxpRsfPtyR6TbZ-nWueN6SKuKRX0s7s_ZLjDmnMghk1utFALjgRHXc3jVq4jyFTjb91eL4OKItbeX1N2tIlU3pJysOsU83IuZ/s1600/GeeksForGeeks.png"/>
            align-bottom
          </p>
          <p>
            <img className="inline-block align-text-top" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMlcO9UcFI5U_i_wm3AKfZUJBVqWt199vIiwQk7q4-x2XmBujSdJ_OAaz1KWI_oF342SGATTEzdz8_y4rk8nZhdNVHzmycxpRsfPtyR6TbZ-nWueN6SKuKRX0s7s_ZLjDmnMghk1utFALjgRHXc3jVq4jyFTjb91eL4OKItbeX1N2tIlU3pJysOsU83IuZ/s1600/GeeksForGeeks.png"/>
            align-text-top
          </p>
          <p>
            <img className="inline-block align-text-bottom" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMlcO9UcFI5U_i_wm3AKfZUJBVqWt199vIiwQk7q4-x2XmBujSdJ_OAaz1KWI_oF342SGATTEzdz8_y4rk8nZhdNVHzmycxpRsfPtyR6TbZ-nWueN6SKuKRX0s7s_ZLjDmnMghk1utFALjgRHXc3jVq4jyFTjb91eL4OKItbeX1N2tIlU3pJysOsU83IuZ/s1600/GeeksForGeeks.png"/>
            align-text-bottom
          </p>
        </div> 

        <p>&nbsp;</p>
        <p>7.18 Tailwind CSS Whitespace</p>
        <b>Tailwind CSS whitespace-normal Class</b>
        <div className="mx-24 bg-green-200 rounded-lg">
          <p className="p-4 whitespace-normal text-justify">
            Geeksforgeeks: A Computer Science portal for Geeks
            those who wants to pursue an engineering degree or
            wants to create     a career on engineering field.
          </p>
        </div>
        <b>Tailwind CSS whitespace-nowrap Class</b>
        <div className="mx-24 bg-green-200 rounded-lg">
          <p className="p-4 whitespace-nowrap text-justify">
            Geeksforgeeks: A Computer Science portal for Geeks
            those who wants to pursue an engineering degree or
            wants to create     a career on engineering field.
          </p>
        </div>
        <b>Tailwind CSS whitespace-pre Class</b>
        <div className="mx-24 bg-green-200 rounded-lg">
          <p className="p-4 whitespace-pre text-justify">
            Geeksforgeeks: A Computer Science portal for Geeks
            those who wants to pursue an engineering degree or
            wants to create     a career on engineering field.
          </p>
        </div>
        <b>Tailwind CSS whitespace-pre-line Class</b>
        <div className="mx-24 bg-green-200 rounded-lg">
          <p className="p-4 whitespace-pre-line text-justify">
            Geeksforgeeks: A Computer Science portal for Geeks
            those who wants to pursue an engineering degree or
            wants to create     a career on engineering field.
          </p>
        </div>
        <b>Tailwind CSS whitespace-pre-wrap Class</b>
        <div className="mx-24 bg-green-200 rounded-lg">
          <p className="p-4 whitespace-pre-wrap text-justify">
            Geeksforgeeks: A Computer Science portal for Geeks
            those who wants to pursue an engineering degree or
            wants to create     a career on engineering field.
          </p>
        </div>

        <p>&nbsp;</p>
        <p>7.19 Tailwind CSS Word Break</p>
        <b>Tailwind CSS break-normal Class</b>
        <div className="mx-48 w-48 bg-green-200 rounded-lg">
          <p className="p-4 break-normal">
            GeeksGeeks: Acomputerscienceportalforgeeks
          </p>
        </div>
        <b>Tailwind CSS break-words Class</b>
        <div className="mx-48 w-48 bg-green-200 rounded-lg">
          <p className="p-4 break-words">
            GeeksGeeks: Acomputerscienceportalforgeeks
          </p>
        </div>
        <b>Tailwind CSS break-all Class</b>
        <div className="mx-48 w-48 bg-green-200 rounded-lg">
          <p className="p-4 break-all">
            GeeksGeeks: Acomputerscienceportalforgeeks
          </p>
        </div>
      </div>
    </>
  );
}
