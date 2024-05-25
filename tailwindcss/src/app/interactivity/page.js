export default function Home() {
  return (
    <>
      <div>
        <p>15.1. Tailwind CSS Appearance</p>
        <b>Tailwind CSS Appearance Class</b>
        <div className="bg-green-300 mx-24 p-4 justify-between grid grid-flow-col">
          <select>
            <option>HTML</option>
            <option>CSS</option>
            <option>JavaScript</option>
          </select>
          <select className="appearance-none">
            <option>Reactjs</option>
            <option>Tailwind</option>
            <option>Framer Motion</option>
          </select>
        </div>

        <p>&nbsp;</p>
        <p>15.2. Tailwind CSS Cursor</p>
        <b>Tailwind CSS Cursor Class</b>
        <div id="main" className="p-2 justify-around ml-32 h-26 flex items-stretch bg-green-200 border-solid border-4 border-green-900 gap-4">
          <div className="cursor-auto bg-blue-600 w-full h-8 rounded-lg">
            cursor-auto
          </div>
          <div className="cursor-default bg-yellow-600 w-full h-8 rounded-lg">
            cursor-default
          </div>
          <div className="cursor-pointer bg-purple-600 w-full h-8 rounded-lg">
            cursor-pointer
          </div>
          <div className="cursor-wait bg-green-600 w-full h-8 rounded-lg">
            cursor-wait
          </div>
          <div className="cursor-text bg-indigo-600 w-full h-8 rounded-lg">
            cursor-text
          </div>
          <div className="cursor-move bg-yellow-300 w-full h-8 rounded-lg">
            cursor-move
          </div>
          <div className="cursor-help bg-purple-300 w-full h-8 rounded-lg">
            cursor-help
          </div>
          <div className="cursor-not-allowed bg-green-300 w-full h-8 rounded-lg">
            not-allowed
          </div>
        </div>

        <p>&nbsp;</p>
        <p>15.3. Tailwind CSS Outline</p>
        <b>Tailwind CSS Outline Class</b>
        <div className="mx-6 bg-green-200 grid grid-rows-3 grid-flow-col text-justify p-4">
          <input className="focus:outline-none placeholder-gray-500 p-3 m-2 rounded-lg border-2 border-green-400 bg-green-100"
            placeholder="Outline-none"/>
          <input className="focus:outline-white placeholder-gray-500 p-3 m-2 rounded-lg border-2 border-green-400 bg-green-100"
            placeholder="Outline-white"/>
          <input className="focus:outline-black placeholder-gray-500 p-3 m-2 rounded-lg border-2 border-green-400 bg-green-100"
            placeholder="Outline-black"/>
        </div>

        <p>&nbsp;</p>
        <p>15.4. Tailwind CSS Pointer Events</p>
        <b>Tailwind CSS Pointer Events Class</b>
        <div id="main" className="p-2 justify-around ml-32 h-26 w-2/3 flex items-stretch bg-green-200 border-solid border-4 border-green-900 gap-4">
          <div className="pointer-events-auto bg-blue-600 w-full h-8 rounded-lg">
            pointer-events-auto
          </div>
          <div className="pointer-events-none bg-green-600 w-full h-8 rounded-lg">
            pointer-events-none
          </div>
        </div>

        <p>&nbsp;</p>
        <p>15.5. Tailwind CSS Resize</p>
        <b>Tailwind CSS Resize Class</b>
        <div id="main" className="p-2 justify-around ml-32 h-26 w-2/3 flex items-stretch bg-green-200 border-solid border-4 border-green-900 gap-4">
          <textarea className="resize border rounded-md w-24 h-12">resize</textarea>
          <textarea className="resize-y border rounded-md w-24 h-12">resize-y</textarea>
          <textarea className="resize-x border rounded-md w-24 h-12">resize-x</textarea>
          <textarea className="resize-none border rounded-md w-24 h-12">resize-none</textarea>
        </div>

        <p>&nbsp;</p>
        <p>15.6. Tailwind CSS User Select</p>
        <b>Tailwind CSS User Select Class</b>
        <div className="mx-14 bg-green-200 grid grid-rows-2 grid-flow-col text-justify p-2 gap-2">
          <p className="bg-green-400 p-2 select-none">
            User Select: select-none
          </p>
          <p className="bg-yellow-400 p-2 select-text">
            User Select: select-text
          </p>
          <p className="bg-purple-400 p-2 select-all">
            User Select: select-all
          </p>
          <p className="bg-blue-800 p-2 select-auto">
            User Select: select-auto
          </p>
        </div>
      </div>
    </>
  );
}
