export default function Home() {
  return (
    <>
      <div>
        <p>6.1. Tailwind CSS Width</p>
        <b>Tailwind CSS Width Class</b>
        <div className="flex">
          <div className="w-1/2 bg-green-600 h-12 rounded-l-lg">
            w-1/2
          </div>
          <div className="w-1/2 bg-green-300 h-12 rounded-r-lg">
            w-1/2
          </div>
        </div>
        <div className="flex ...">
          <div className="w-2/5 bg-green-600 h-12 rounded-l-lg">
            w-2/5
          </div>
          <div className="w-3/5 bg-green-300 h-12 rounded-r-lg">
            w-3/5
          </div>
        </div>
        <div className="flex ...">
          <div className="w-1/3 bg-green-600 h-12 rounded-l-lg">
            w-1/3
          </div>
          <div className="w-2/3 bg-green-300 h-12 rounded-r-lg">
            w-2/3
          </div>
        </div>
        <div className="flex ...">
          <div className="w-1/4 bg-green-600 h-12 rounded-l-lg">
            w-1/4
          </div>
          <div className="w-3/4 bg-green-300 h-12 rounded-r-lg">
            w-3/4
          </div>
        </div>
        <div className="flex ...">
          <div className="w-1/5 bg-green-600 h-12 rounded-l-lg">
            w-1/5
          </div>
          <div className="w-4/5 bg-green-300 h-12 rounded-r-lg">
            w-4/5
          </div>
        </div>
        <div className="flex ...">
          <div className="w-1/6 bg-green-600 h-12 rounded-l-lg">
            w-1/6
          </div>
          <div className="w-5/6 bg-green-300 h-12 rounded-r-lg">
            w-5/6
          </div>
        </div>
        <div className="w-full bg-green-300 h-12 rounded-lg">
            w-full
        </div>

        <p>&nbsp;</p>
        <p>6.2. Tailwind CSS Min-Width</p>
        <b>Tailwind CSS Min-Width Class</b>
        <div className="w-24 h-16 min-w-full md:min-w-0 bg-green-400 rounded-lg text-white">
        </div>

        <p>&nbsp;</p>
        <p>6.3. Tailwind CSS Max-Width</p>
        <b>Tailwind CSS Max-Width Class</b>
        <div className="h-8 max-w-xs mx-auto bg-green-400 rounded-lg text-white">
          max-w-xs
        </div>
        <div className="h-8 max-w-md mx-auto bg-green-400 rounded-lg text-white">
          max-w-md
        </div>
        <div className="h-8 max-w-lg mx-auto bg-green-400 rounded-lg text-white">
          max-w-lg
        </div>
        <div className="h-8 max-w-xl mx-auto bg-green-400 rounded-lg text-white">
          max-w-xl
        </div>
        <div className="h-8 max-w-2xl mx-auto bg-green-400 rounded-lg text-white">
          max-w-2xl
        </div>
        <div className="h-8 max-w-max mx-auto bg-green-400 rounded-lg text-white">
          max-w-max
        </div>

        <p>&nbsp;</p>
        <p>6.4. Tailwind CSS Height</p>
        <b>Tailwind CSS h-0 Class</b>
        <div className="flex flex-wrap-reverse p-4 mx-12 space-x-4 h-64 bg-green-200">
          <div className="h-8 w-12 bg-green-400 rounded-lg">h-8</div>
          <div className="h-12 w-12 bg-green-400 rounded-lg">h-12</div>
          <div className="h-16 w-12 bg-green-400 rounded-lg">h-16</div>
          <div className="h-20 w-12 bg-green-400 rounded-lg">h-20</div>
          <div className="h-24 w-12 bg-green-400 rounded-lg">h-24</div>
          <div className="h-32 w-12 bg-green-400 rounded-lg">h-32</div>
          <div className="h-40 w-12 bg-green-400 rounded-lg">h-40</div>
          <div className="h-48 w-12 bg-green-400 rounded-lg">h-48</div>
          <div className="h-52 w-12 bg-green-400 rounded-lg">h-52</div>
        </div>
        <b>Tailwind CSS h-auto Class</b>
        <div className="mx-48 bg-green-200 p-8">
          <div className="h-auto bg-green-400 rounded-lg">h-auto</div>
        </div>
        <b>Tailwind CSS h-screen Class</b>
        <div className="mx-48 bg-green-200 p-8">
          <div className="h-screen bg-green-400 rounded-lg">h-screen</div>
        </div>
        <b>Tailwind CSS h-full Class</b>
        <div className="mx-48 h-48 bg-green-200 p-8">
          <div className="h-full bg-green-400 rounded-lg">h-full</div>
        </div>

        <p>&nbsp;</p>
        <p>6.5. Tailwind CSS Min-Height</p>
        <b>Tailwind CSS min-h-0 Class</b>
        <div className="mx-48 bg-green-200 p-8">
          <div className="min-h-0 bg-green-400 rounded-lg">min-h-0</div>
        </div>
        <b>Tailwind CSS min-h-full Class</b>
        <div className="mx-48 h-48 bg-green-200 p-8">
          <div className="min-h-full bg-green-400 rounded-lg">min-h-full</div>
        </div>
        <b>Tailwind CSS min-h-screen Class</b>
        <div className="mx-48 bg-green-200 p-8">
          <div className="min-h-screen bg-green-400 rounded-lg">min-h-screen</div>
        </div>

        <p>&nbsp;</p>
        <p>6.6. Tailwind CSS Max-Height</p>
        <b>Tailwind CSS max-h-0 Class</b>
        <div className="mx-48 h-24 bg-green-200 p-8">
          <div className="max-h-0 bg-green-400 rounded-lg">max-h-0</div>
        </div>
        <b>Tailwind CSS max-h-px Class</b>
        <div className="mx-48 h-24 bg-green-200 p-8">
          <div className="max-h-px bg-green-400 rounded-lg">max-h-px</div>
        </div>
        <b>Tailwind CSS max-h-full Class</b>
        <div className="mx-48 h-24 bg-green-200 p-8">
          <div className="h-48 max-h-full bg-green-400 rounded-lg">max-h-full</div>
        </div>
        <b>Tailwind CSS max-h-screen Class</b>
        <div className="mx-48 h-48 bg-green-200 p-8">
          <div className="max-h-screen bg-green-400 rounded-lg">max-h-screen</div>
        </div>
      </div>
    </>
  );
}
