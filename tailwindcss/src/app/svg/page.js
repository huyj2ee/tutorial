export default function Home() {
  return (
    <>
      <div>
        <p>16.1. Tailwind CSS Fill</p>
        <b>Tailwind CSS Fill Class</b>
        <div className="bg-green-200 m-4 grid grid-flow-col gap-4 p-5">
          <svg height="150px" width="600px" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <circle className="fill-current text-red-600" cx="100" cy="100" r="50"/>
            <circle className="fill-current text-green-600" cx="250" cy="100" r="50"/>
            <circle className="fill-current text-blue-600" cx="400" cy="100" r="50"/>
            <circle className="fill-current text-yellow-600" cx="550" cy="100" r="50"/>
          </svg>
        </div>

        <p>&nbsp;</p>
        <p>16.2. Tailwind CSS Stroke</p>
        <b>Tailwind CSS Stroke Class</b>
        <div className="bg-green-900 m-4 grid grid-flow-col gap-4 p-5">
          <svg height="150px" width="600px" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <circle className="stroke-current text-red-600" cx="100" cy="70" r="50" />
            <circle className="stroke-current text-green-600" cx="250" cy="70" r="50" />
            <circle className="stroke-current text-blue-600" cx="400" cy="70" r="50" />
            <circle className="stroke-current text-yellow-600" cx="550" cy="70" r="50" />
          </svg>
        </div>

        <p>&nbsp;</p>
        <p>16.3. Tailwind CSS Stroke Width</p>
        <b>Tailwind CSS Stroke Width Class</b>
        <div className="bg-green-900 m-24 grid grid-flow-col">
          <svg height="150px" width="500px" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <circle className="stroke-current text-red-600 stroke-0" cx="100" cy="70" r="50" />
            <circle className="stroke-current text-green-600 stroke-1" cx="250" cy="70" r="50" />
            <circle className="stroke-current text-blue-600 stroke-2" cx="400" cy="70" r="50" />
          </svg>
        </div>
      </div>
    </>
  );
}
