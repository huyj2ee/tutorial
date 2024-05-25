export default function Home() {
  return (
    <>
      <div>
        <p>9.1. Tailwind CSS Border Radius</p>
        <b>Tailwind CSS Rounded corners Class</b>
        <div className="mx-4 grid grid-cols-3 gap-2 bg-green-200 p-2">
          <div className="rounded-none bg-green-400 w-48 h-12">rounded-none</div>
          <div className="rounded bg-green-400 w-48 h-12">rounded</div>
          <div className="rounded-sm bg-green-400 w-48 h-12">rounded-sm</div>
          <div className="rounded-md bg-green-400 w-48 h-12">rounded-md</div>
          <div className="rounded-lg bg-green-400 w-48 h-12">rounded-lg</div>
          <div className="rounded-xl bg-green-400 w-48 h-12">rounded-xl</div>
        </div>
        <b>Tailwind CSS Pills and circles Class</b>
        <div className="mx-24 grid grid-cols-3 gap-2 bg-green-200 p-2">
          <div className="rounded-full bg-green-400 py-3 px-6">rounded-full for Design Pill</div>
          <div className="rounded-full mx-32 bg-green-400 h-24 w-24 flex items-center justify-center">rounded-full for Circle</div>
          <div>&nbsp;</div>
          <div className="rounded-t-full bg-green-400 py-3 px-6">rounded-t-full</div>
          <div className="rounded-t-full mx-32 bg-green-400 h-24 w-24 flex items-center justify-center">rounded-t-full</div>
          <div>&nbsp;</div>
          <div className="rounded-tl-full bg-green-400 py-3 px-6">rounded-tl-full</div>
          <div className="rounded-tl-full mx-32 bg-green-400 h-24 w-24 flex items-center justify-center">rounded-tl-full</div>
        </div>
        <b>Tailwind CSS Rounding sides separately Class</b>
        <div className="mx-4 grid grid-cols-2 gap-2 bg-green-200 p-2">
          <div className="rounded-t-lg bg-green-400 w-full h-12">rounded-t-lg</div>
          <div className="rounded-r-lg bg-green-400 w-full h-12">rounded-r-lg</div>
          <div className="rounded-l-lg bg-green-400 w-full h-12">rounded-l-lg</div>
          <div className="rounded-b-lg bg-green-400 w-full h-12">rounded-b-lg</div>
        </div>
        <b>Tailwind CSS Rounding corners separately Class</b>
        <div className="mx-4 grid grid-cols-2 gap-2 bg-green-200 p-2">
          <div className="rounded-tl-lg bg-green-400 w-full h-12">rounded-tl-lg</div>
          <div className="rounded-tr-lg bg-green-400 w-full h-12">rounded-tr-lg</div>
          <div className="rounded-bl-lg bg-green-400 w-full h-12">rounded-bl-lg</div>
          <div className="rounded-br-lg bg-green-400 w-full h-12">rounded-br-lg</div>
        </div>

        <p>&nbsp;</p>
        <p>9.2. Tailwind CSS Border Width</p>
        <b>Tailwind CSS Border all sides Class</b>
        <div className="mx-4 grid grid-cols-5 gap-2 bg-green-200 p-2">
          <div className="border-0 border-green-900 bg-green-400 w-full h-12">border-0</div>
          <div className="border border-green-900 bg-green-400 w-full h-12">border</div>
          <div className="border-2 border-green-900 bg-green-400 w-full h-12">border-2</div>
          <div className="border-4 border-green-900 bg-green-400 w-full h-12">border-4</div>
          <div className="border-8 border-green-900 bg-green-400 w-full h-12">border-8</div>
        </div>
        <b>Tailwind CSS Border individual sides Class</b>
        <div className="mx-4 grid grid-cols-4 gap-2 bg-green-200 p-2">
          <div className="border-b-2 border-green-900 bg-green-400 w-full h-12">border-b-2</div>
          <div className="border-r-2 border-green-900 bg-green-400 w-full h-12">border-r-2</div>
          <div className="border-l-2 border-green-900 bg-green-400 w-full h-12">border-l-2</div>
          <div className="border-t-2 border-green-900 bg-green-400 w-full h-12">border-t-2</div>
        </div>

        <p>&nbsp;</p>
        <p>9.3. Tailwind CSS Border Color</p>
        <b>Tailwind CSS Border Color Class</b>
        <div className="mx-14 bg-green-200 grid grid-rows-4 grid-flow-col gap-2 text-justify p-2">
          <p className="border-2 border-transparent p-2">border-transparent</p>
          <p className="border-2 border-current text-red-600 p-2">border-current</p>
          <p className="border-2 border-white p-2">border-white</p>
          <p className="border-2 border-black text-white p-2">border-black</p>
          <p className="border-2 border-gray-700 p-2">border-gray-700</p>
          <p className="border-2 border-red-700 p-2">border-red-700</p>
          <p className="border-2 border-indigo-700 p-2">border-indigo-700</p>
          <p className="border-2 border-blue-700 p-2">border-blue-700</p>
          <p className="border-2 border-green-700 p-2">border-green-700</p>
          <p className="border-2 border-yellow-700 p-2">border-yellow-700</p>
          <p className="border-2 border-pink-700 p-2">border-pink-700</p>
          <p className="border-2 border-purple-700 p-2">border-purple-700</p>
        </div>

        <p>&nbsp;</p>
        <p>9.4. Tailwind CSS Border Opacity</p>
        <b>Tailwind CSS Border Opacity Class</b>
        <div className="mx-14 bg-green-200 grid grid-rows-4 grid-flow-col gap-2 text-justify p-4">
          <p className="border-green-800 border-4 border-opacity-100 p-2">border-opacity-100</p>
          <p className="border-green-800 border-4 border-opacity-75 p-2">border-opacity-75</p>
          <p className="border-green-800 border-4 border-opacity-50 p-2">border-opacity-50</p>
          <p className="border-green-800 border-4 border-opacity-25 p-2">border-opacity-25</p>
          <p className="border-yellow-800 border-4 border-opacity-100 p-2">border-opacity-100</p>
          <p className="border-yellow-800 border-4 border-opacity-75 p-2">border-opacity-75</p>
          <p className="border-yellow-800 border-4 border-opacity-50 p-2">border-opacity-50</p>
          <p className="border-yellow-800 border-4 border-opacity-25 p-2">border-opacity-25</p>
          <p className="border-pink-800 border-4 border-opacity-100 p-2">border-opacity-100</p>
          <p className="border-pink-800 border-4 border-opacity-75 p-2">border-opacity-75</p>
          <p className="border-pink-800 border-4 border-opacity-50 p-2">border-opacity-50</p>
          <p className="border-pink-800 border-4 border-opacity-25 p-2">border-opacity-25</p>
        </div>

        <p>&nbsp;</p>
        <p>9.5. Tailwind CSS Border Style</p>
        <b>Tailwind CSS Border Style Class</b>
        <div className="mx-4 grid grid-cols-5 gap-2 bg-green-200 p-2">
          <div className="border-4 border-green-900 border-solid bg-green-400 w-full h-12">
            border-solid
          </div>
          <div className="border-4 border-green-900 border-dashed bg-green-400 w-full h-12">
            border-dashed
          </div>
          <div className="border-4 border-green-900 border-dotted bg-green-400 w-full h-12">
            border-dotted
          </div>
          <div className="border-4 border-green-900 border-double bg-green-400 w-full h-12">
            border-double
          </div>
          <div className="border-4 border-green-900 border-none bg-green-400 w-full h-12">
            border-none
          </div>
          <div className="border-4 border-green-900 border-hidden bg-green-400 w-full h-12">
            border-hidden
          </div>
        </div>

        <p>&nbsp;</p>
        <p>9.6. Tailwind CSS Divide Width</p>
        <b>Tailwind CSS Add borders between horizontal children Class</b>
        <div className="mx-4 bg-green-200 p-2">
          <div className="grid grid-cols-3 divide-x-4 divide-green-500">
            <div>GeeksforGeeks</div>
            <div>A Computer Science Portal</div>
            <div>For Geeks</div>
          </div>
        </div>
        <b>Tailwind CSS Add borders between vertical children Class</b>
        <div className="mx-4 bg-green-200 p-2">
          <div className="grid grid-cols-1 divide-y-4 divide-green-500">
            <div>GeeksforGeeks</div>
            <div>A Computer Science Portal</div>
            <div>For Geeks</div>
          </div>
        </div>
        <b>Tailwind CSS Add borders between horizontal children Class</b>
        <div className="mx-4 bg-green-200 p-2">
          <div className="flex flex-col-reverse divide-y-4 divide-y-reverse divide-green-500">
            <div>GeeksforGeeks</div>
            <div>A Computer Science Portal</div>
            <div>For Geeks</div>
          </div>
        </div>

        <p>&nbsp;</p>
        <p>9.7. Tailwind CSS Divide Color</p>
        <b>Tailwind CSS Divide Color Class</b>
        <div className="mx-4 bg-green-200 p-2">
          <div className="grid grid-cols-3 divide-x-4 divide-pink-500">
            <div><b>1.</b>GeeksforGeeks</div>
            <div>A Computer Science Portal</div>
            <div>For Geeks</div>
          </div>
          <div style={{height: "10px"}}></div>
          <div className="grid grid-cols-3 divide-x-4 divide-blue-500">
            <div><b>2.</b>GeeksforGeeks</div>
            <div>A Computer Science Portal</div>
            <div>For Geeks</div>
          </div>
          <div style={{height: "10px"}}></div>
          <div className="grid grid-cols-3 divide-x-4 divide-green-500">
            <div><b>3.</b>GeeksforGeeks</div>
            <div>A Computer Science Portal</div>
            <div>For Geeks</div>
          </div>
        </div>

        <p>&nbsp;</p>
        <p>9.8. Tailwind CSS Divide Opacity</p>
        <b>Tailwind CSS Divide Opacity Class</b>
        <div className="mx-4 bg-green-200 p-2">
          <div className="grid grid-cols-3 divide-x-4 divide-pink-500 divide-opacity-25">
            <div><b>1.</b>GeeksforGeeks</div>
            <div>A Computer Science Portal</div>
            <div>For Geeks</div>
          </div>
          <div style={{height: "10px"}}></div>
          <div className="grid grid-cols-3 divide-x-4 divide-pink-500 divide-opacity-50">
            <div><b>2.</b>GeeksforGeeks</div>
            <div>A Computer Science Portal</div>
            <div>For Geeks</div>
          </div>
          <div style={{height: "10px"}}></div>
          <div className="grid grid-cols-3 divide-x-4 divide-pink-500 divide-opacity-80">
            <div><b>3.</b>GeeksforGeeks</div>
            <div>A Computer Science Portal</div>
            <div>For Geeks</div>
          </div>
        </div>

        <p>&nbsp;</p>
        <p>9.9. Tailwind CSS Divide Style</p>
        <b>Tailwind CSS Divide Style Class</b>
        <div className="mx-4 bg-green-200 p-2">
          <div className="grid grid-cols-3 divide-x-4 divide-pink-500 divide-dashed">
            <div>divide-dashed</div>
            <div>A Computer Science Portal</div>
            <div>For Geeks</div>
          </div>
          <br/>
          <div className="grid grid-cols-3 divide-x-4 divide-yellow-500 divide-solid">
            <div>divide-solid</div>
            <div>A Computer Science Portal</div>
            <div>For Geeks</div>
          </div>
          <br/>
          <div className="grid grid-cols-3 divide-x-4 divide-gray-500 divide-double">
            <div>divide-double</div>
            <div>A Computer Science Portal</div>
            <div>For Geeks</div>
          </div>
          <br/>
          <div className="grid grid-cols-3 divide-x-4 divide-red-500 divide-dotted">
            <div>divide-dotted</div>
            <div>A Computer Science Portal</div>
            <div>For Geeks</div>
          </div>
        </div>

        <p>&nbsp;</p>
        <p>9.10. Tailwind CSS Ring Width</p>
        <b>Tailwind CSS Ring Width Class</b>
        <div className="mx-16 grid grid-cols-6 gap-2  p-2">
          <button className="ring ring-green-600 bg-green-400 ring-opacity-25 w-full h-12 rounded-lg">
            ring
          </button>
          <button className="ring-0 ring-green-600 bg-green-400 ring-opacity-25 w-full h-12 rounded-lg">
            ring-0
          </button>
          <button className="ring-1 ring-green-600 bg-green-400 ring-opacity-25 w-full h-12 rounded-lg">
            ring-1
          </button>
          <button className="ring-2 ring-green-600 bg-green-400 ring-opacity-25 w-full h-12 rounded-lg">
            ring-2
          </button>
          <button className="ring-4 ring-green-600 bg-green-400 ring-opacity-25 w-full h-12 rounded-lg">
            ring-4
          </button>
          <button className="ring-8 ring-green-600 bg-green-400 ring-opacity-25 w-full h-12 rounded-lg">
            ring-8
          </button>
        </div>
        <b>Tailwind CSS ring-inset Class</b>
        <div className="mx-16 grid grid-cols-5 gap-2  p-2">
          <button className="ring-4 ring-green-600 bg-green-400 ring-opacity-25 w-full h-12 rounded-lg">
            ring-4
          </button>
          <button className="ring-4 ring-inset ring-green-600 bg-green-400 ring-opacity-25 w-full h-12 rounded-lg">
            ring-inset
          </button>
        </div>

        <p>&nbsp;</p>
        <p>9.11. Tailwind CSS Ring Color</p>
        <b>Tailwind CSS Ring Color</b>
        <div className="mx-16 grid grid-cols-7 gap-4 p-2">
          <button className="ring-4 ring-transparent bg-green-400 w-full h-12 rounded-lg">
            ring-transparent
          </button>
          <button className="ring-4 ring-current bg-green-400 w-full h-12 rounded-lg">
            ring-current
          </button>
          <button className="ring-4 ring-red-600 bg-green-400 w-full h-12 rounded-lg">
            ring-red-600
          </button>
          <button className="ring-4 ring-green-600 bg-green-400 w-full h-12 rounded-lg">
            ring-green-600
          </button>
          <button className="ring-4 ring-blue-600 bg-green-400 w-full h-12 rounded-lg">
            ring-blue-600
          </button>
          <button className="ring-4 ring-yellow-600 bg-green-400 w-full h-12 rounded-lg">
            ring-yellow-600
          </button>
          <button className="ring-4 ring-pink-600 bg-green-400 w-full h-12 rounded-lg">
            ring-pink-600
          </button>
        </div>

        <p>&nbsp;</p>
        <p>9.12. Tailwind CSS Ring Opacity</p>
        <b>Tailwind CSS Ring Opacity Class</b>
        <div className="mx-16 grid grid-cols-5 gap-2  p-2">
          <button className="ring-2 ring-red-600 bg-green-400 ring-opacity-0 w-full h-12 rounded-lg">
            ring-opacity-0
          </button>
          <button className="ring-2 ring-red-600 bg-green-400 ring-opacity-25 w-full h-12 rounded-lg">
            ring-opacity-25
          </button>
          <button className="ring-2 ring-red-600 bg-green-400 ring-opacity-50 w-full h-12 rounded-lg">
            ring-opacity-50
          </button>
          <button className="ring-2 ring-red-600 bg-green-400 ring-opacity-75 w-full h-12 rounded-lg">
            ring-opacity-75
          </button>
          <button className="ring-2 ring-red-600 bg-green-400 ring-opacity-100 w-full h-12 rounded-lg">
            ring-opacity-100
          </button>
        </div>

        <p>&nbsp;</p>
        <p>9.13. Tailwind CSS Ring Offset Width</p>
        <b>Tailwind CSS Ring Offset Width Class</b>
        <div className="mx-16 grid grid-cols-2 gap-6 p-2">
          <button className="ring-4 ring-green-600 ring-offset-4 ring-offset-green-700 bg-green-400 ring-opacity-25 w-full h-12 rounded-lg">
            ring-offset-4 ring-offset-green-700
          </button>
          <button className="ring-4 ring-green-600 bg-green-400 ring-offset-4 ring-offset-yellow-700 ring-opacity-25 w-full h-12 rounded-lg">
            ring-offset-4 ring-offset-yellow-700
          </button>
        </div>

        <p>&nbsp;</p>
        <p>9.14. Tailwind CSS Ring Offset Color</p>
        <b>Tailwind CSS Ring Offset Color Class</b>
        <div class="mx-16 grid grid-cols-4 gap-6 p-2">
          <button class="ring-4 ring-green-600 ring-offset-4 ring-offset–transparent bg-green-400 ring-opacity-25 w-full h-12 rounded-lg">
            ring-offset-4 ring-offset–transparent
          </button>
          <button class="ring-4 ring-green-600 ring-offset-4 ring-offset–current bg-green-400 ring-opacity-25 w-full h-12 rounded-lg">
            ring-offset-4 ring-offset–current
          </button>
          <button class="ring-4 ring-green-600 ring-offset-4 ring-offset-green-700 bg-green-400 ring-opacity-25 w-full h-12 rounded-lg">
            ring-offset-4 ring-offset-green-700
          </button>
          <button class="ring-4 ring-green-600 bg-green-400 ring-offset-4 ring-offset-yellow-700 ring-opacity-25 w-full h-12 rounded-lg">
            ring-offset-4 ring-offset-yellow-700
          </button>
        </div>
      </div>
    </>
  );
}
