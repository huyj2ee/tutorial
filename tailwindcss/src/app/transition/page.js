export default function Home() {
  return (
    <>
      <div>
        <p>13.1. Tailwind CSS Transition Property</p>
        <b>Tailwind CSS Transition Property Class</b>
        <div className="bg-green-200 m-8 grid grid-flow-col gap-4 p-5">
          <button className="transition duration-500 ease-in-out
            bg-green-300 hover:bg-green-600 transform
            hover:-translate-y-1 hover:scale-110
            rounded-lg p-4 border border-green-900">
            transition
          </button>
          <button className="transition-opacity duration-500 ease-in-out
            bg-green-300 hover:opacity-75 transform
            hover:-translate-y-1 hover:scale-110
            rounded-lg p-4 border border-green-900">
            transition-opacity
          </button>
          <button className="transition-none duration-500 ease-in-out
              bg-green-300 hover:bg-green-600 transform
              hover:-translate-y-1 hover:scale-110
              rounded-lg p-4 border border-green-900">
            transition-none
          </button>
          <button className="transition-colors duration-500 ease-in-out
            bg-green-300 hover:bg-yellow-600 transform
            hover:scale-110 rounded-lg p-4 border
            border-green-900 hover:border-black">
            transition-colors
          </button>
        </div>

        <p>&nbsp;</p>
        <p>13.2. Tailwind CSS Transition Duration</p>
        <b>Tailwind CSS Transition Duration Class</b>
        <div className="bg-green-200 m-8 grid grid-flow-col gap-4 p-5">
          <button className="transition duration-75 ease-in-out
            bg-green-300 hover:bg-green-600 transform
            hover:-translate-y-1 hover:scale-110
            rounded-lg p-4 border border-green-900">
            duration-75
          </button>
          <button className="transition duration-100 ease-in-out
            bg-green-300 hover:bg-green-600 transform
            hover:-translate-y-1 hover:scale-110
            rounded-lg p-4 border border-green-900">
            duration-100
          </button>
          <button className="transition duration-500 ease-in-out
            bg-green-300 hover:bg-green-600 transform
            hover:-translate-y-1 hover:scale-110
            rounded-lg p-4 border border-green-900">
            duration-500
          </button>
          <button className="transition duration-1000 ease-in-out
            bg-green-300 hover:bg-green-600 transform
            hover:-translate-y-1 hover:scale-110
            rounded-lg p-4 border border-green-900">
            duration-1000
          </button>
        </div>

        <p>&nbsp;</p>
        <p>13.3. Tailwind CSS Transition Timing Function</p>
        <b>Tailwind CSS Transition Timing Function Class</b>
        <div className="bg-green-200 m-8 grid grid-flow-col gap-4 p-5">
          <button className="transition duration-700 ease-in
            bg-green-300 hover:bg-green-600 transform
            hover:-translate-y-1 hover:scale-110
            rounded-lg p-4 border border-green-900">
            Hover me for ease-in
          </button>
          <button className="transition duration-700 ease-out
            bg-green-300 hover:bg-green-600 transform
            hover:-translate-y-1 hover:scale-110
            rounded-lg p-4 border border-green-900">
            Hover me for ease-out
          </button>
          <button className="transition duration-700 ease-in-out
            bg-green-300 hover:bg-green-600 transform
            hover:-translate-y-1 hover:scale-110
            rounded-lg p-4 border border-green-900">
            Hover me for ease-in-out
          </button>
          <button className="transition duration-700 ease-linear
            bg-green-300 hover:bg-green-600 transform
            hover:-translate-y-1 hover:scale-110
            rounded-lg p-4 border border-green-900">
            Hover me for ease-linear
          </button>
        </div>

        <p>&nbsp;</p>
        <p>13.4. Tailwind CSS Transition Delay</p>
        <b>Tailwind CSS Transition Delay Class</b>
        <div className="bg-green-200 m-8 grid grid-flow-col gap-4 p-5">
          <button className="transition delay-75 ease-in-out
            bg-green-300 hover:bg-green-600 transform
            hover:-translate-y-1 hover:scale-110
            rounded-lg p-4 border border-green-900">
            delay-75
          </button>
          <button className="transition delay-100 ease-in-out
            bg-green-300 hover:bg-green-600 transform
            hover:-translate-y-1 hover:scale-110
            rounded-lg p-4 border border-green-900">
            delay-100
          </button>
          <button className="transition delay-500 ease-in-out
            bg-green-300 hover:bg-green-600 transform
            hover:-translate-y-1 hover:scale-110
            rounded-lg p-4 border border-green-900">
            delay-500
          </button>
          <button className="transition delay-1000 ease-in-out
            bg-green-300 hover:bg-green-600 transform
            hover:-translate-y-1 hover:scale-110
            rounded-lg p-4 border border-green-900">
            delay-1000
          </button>
        </div>
      </div>
    </>
  );
}
