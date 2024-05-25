export default function Home() {
  return (
    <>
      <div>
        <p>10.1. Tailwind CSS Box Shadow</p>
        <b>Tailwind CSS Box Shadow Class</b>
        <div className="grid grid-flow-col text-center p-2">
          <div className="shadow-sm w-24 h-24 bg-green-200 rounded-lg">shadow-sm</div>
          <div className="shadow w-24 h-24 bg-green-200 rounded-lg">shadow</div>
          <div className="shadow-md w-24 h-24 bg-green-200 rounded-lg">shadow-md</div>
          <div className="shadow-lg w-24 h-24 bg-green-200 rounded-lg">shadow-lg</div>
          <div className="shadow-xl w-24 h-24 bg-green-200 rounded-lg">shadow-xl</div>
          <div className="shadow-2xl w-24 h-24 bg-green-200 rounded-lg">shadow-2xl</div>
          <div className="shadow-inner w-24 h-24 bg-green-200 rounded-lg">shadow-inner</div>
          <div className="shadow-none w-24 h-24 bg-green-200 rounded-lg">shadow-none</div>
        </div>

        <p>&nbsp;</p>
        <p>10.2. Tailwind CSS Opacity</p>
        <b>Tailwind CSS Opacity Class</b>
        <div className="grid grid-flow-col text-center p-2">
          <div className="opacity-100  w-24 h-24 bg-green-500 rounded-lg">opacity-100</div>
          <div className="opacity-75 w-24 h-24 bg-green-500 rounded-lg">opacity-75</div>
          <div className="opacity-50 w-24 h-24 bg-green-500 rounded-lg">opacity-50</div>
          <div className="opacity-25 w-24 h-24 bg-green-500 rounded-lg">opacity-25</div>
          <div className="opacity-0  w-24 h-24 bg-green-500 rounded-lg">opacity-0</div>
        </div>
      </div>
    </>
  );
}
