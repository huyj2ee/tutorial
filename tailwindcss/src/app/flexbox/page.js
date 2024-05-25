export default function Home() {
  return (
    <>
      <div>
        <p>2.1 Tailwind CSS Flex Direction</p>
        <b>Tailwind CSS flex-row Class</b>
        <div id="main" className="flex flex-row justify-evenly">
          <div className="bg-green-900 w-24 h-12">1</div>
          <div className="bg-green-800 w-24 h-12">2</div>
          <div className="bg-green-700 w-24 h-12">3</div>
          <div className="bg-green-600 w-24 h-12">4</div>
          <div className="bg-green-500 w-24 h-12">5</div>
          <div className="bg-green-400 w-24 h-12">6</div>
        </div>
        <b>Tailwind CSS flex-row-reverse Class</b>
        <div id="main" className="flex flex-row-reverse justify-evenly">
          <div className="bg-green-900 w-24 h-12">1</div>
          <div className="bg-green-800 w-24 h-12">2</div>
          <div className="bg-green-700 w-24 h-12">3</div>
          <div className="bg-green-600 w-24 h-12">4</div>
          <div className="bg-green-500 w-24 h-12">5</div>
          <div className="bg-green-400 w-24 h-12">6</div>
        </div>
        <b>Tailwind CSS flex-col Class</b>
        <div id="main" className="flex flex-col gap-y-2">
          <div className="bg-green-900 w-30 h-12">1</div>
          <div className="bg-green-800 w-30 h-12">2</div>
          <div className="bg-green-700 w-30 h-12">3</div>
          <div className="bg-green-600 w-30 h-12">4</div>
          <div className="bg-green-500 w-30 h-12">5</div>
          <div className="bg-green-400 w-30 h-12">6</div>
        </div>
        <b>Tailwind CSS flex-col-reverse Class</b>
        <div id="main" className="flex flex-col-reverse gap-y-2">
          <div className="bg-green-900 w-30 h-12">1</div>
          <div className="bg-green-800 w-30 h-12">2</div>
          <div className="bg-green-700 w-30 h-12">3</div>
          <div className="bg-green-600 w-30 h-12">4</div>
          <div className="bg-green-500 w-30 h-12">5</div>
          <div className="bg-green-400 w-30 h-12">6</div>
        </div>

        <p>&nbsp;</p>
        <p>2.2 Tailwind CSS Flex Wrap</p>
        <b>Tailwind CSS flex-wrap Class</b>
        <div id="main" className="ml-24 h-28 w-1/3 flex flex-wrap bg-green-200 border-solid border-4 border-green-900">
          <div className="bg-green-900 w-24 h-12">1</div>
          <div className="bg-green-800 w-24 h-12">2</div>
          <div className="bg-green-700 w-24 h-12">3</div>
          <div className="bg-green-600 w-24 h-12">4</div>
          <div className="bg-green-500 w-24 h-12">5</div>
          <div className="bg-green-400 w-24 h-12">6</div>
        </div>
        <b>Tailwind CSS flex-nowrap Class</b>
        <div id="main" className="ml-24 h-28 w-1/3 flex flex-nowrap bg-green-200 border-solid border-4 border-green-900">
          <div className="bg-green-900 w-24 h-12">1</div>
          <div className="bg-green-800 w-24 h-12">2</div>
          <div className="bg-green-700 w-24 h-12">3</div>
          <div className="bg-green-600 w-24 h-12">4</div>
          <div className="bg-green-500 w-24 h-12">5</div>
          <div className="bg-green-400 w-24 h-12">6</div>
        </div>
        <b>Tailwind CSS flex-wrap-reverse Class</b>
        <div id="main" className="ml-24 h-28 w-1/3 flex flex-wrap-reverse bg-green-200 border-solid border-4 border-green-900">
          <div className="bg-green-900 w-24 h-12">1</div>
          <div className="bg-green-800 w-24 h-12">2</div>
          <div className="bg-green-700 w-24 h-12">3</div>
          <div className="bg-green-600 w-24 h-12">4</div>
          <div className="bg-green-500 w-24 h-12">5</div>
          <div className="bg-green-400 w-24 h-12">6</div>
        </div>

        <p>&nbsp;</p>
        <p>2.3 Tailwind CSS Flex</p>
        <div id="main" className="bg-green-200 border-4 border-green-600 w-1/3 ml-32">
          <p className="ml-2">This is the effect of flex-1:</p>
          <div className="flex m-2 text-white">
            <div className="bg-green-900 flex-1">
              Geeksforgeeks
            </div>
            <div className="bg-green-800 flex-1">
              Tailwind CSS
            </div>
          </div>
          <p className="ml-2">This is the effect of flex-initial:</p>
          <div className="flex m-2 text-white">
            <div className="bg-green-900 flex-initial">
              Geeksforgeeks
            </div>
            <div className="bg-green-800 flex-initial">
              A Computer Science for Geeks
            </div> 
          </div>
          <p className="ml-2">This is the effect of flex-auto:</p>
          <div className="flex m-2 text-white">
            <div className="bg-green-900 flex-auto">
              CSS
            </div>
            <div className="bg-green-800 flex-auto">
              Cascading Style Sheet
            </div>
          </div>
          <p className="ml-2">This is the effect of flex-none:</p>
          <div className="flex m-2 text-white">
            <div className="bg-green-900 flex-none">
              HTML
            </div>
            <div className="bg-green-800 flex-none">
              Hypertext Markup Language
            </div>
          </div>
        </div>

        <p>&nbsp;</p>
        <p>2.4 Tailwind CSS Flex Grow</p>
        <b>Tailwind CSS flex-grow-0 Class</b>
        <div id="main" className="flex justify-evenly space-x-2 ml-12 mr-12">
          <div className="rounded bg-green-600 flex-grow h-12 ">
            Side Part
          </div>
          <div className="rounded bg-green-300 flex-grow-0 h-12">
            Flex-Grow-0
          </div>
          <div className="rounded bg-green-600 flex-grow h-12 mr-12">
            Side Part
          </div>
        </div>
        <b>Tailwind CSS flex-grow Class</b>
        <div id="main" className="flex justify-evenly space-x-2 ml-12 mr-12">
          <div className="rounded bg-green-600  w-24 h-12 ">Side Part</div>
          <div className="rounded bg-green-300 flex-grow h-12">
            TailWind CSS Flex-Grow
          </div>
          <div className="rounded bg-green-600  w-24 h-12 mr-12">Side Part</div>
        </div>

        <p>&nbsp;</p>
        <p>2.5 Tailwind CSS Flex Shrink</p>
        <b>Tailwind CSS flex-shrink-0 Class</b>
        <div id="main" className="flex justify-evenly space-x-2 ml-12 mr-12">
          <div className="rounded bg-green-600 flex-1 h-12 ">Side Part</div>
          <div className="rounded bg-green-300 flex-shrink-0 h-12">
            Flex-Shrink-0
          </div>
          <div className="rounded bg-green-600 flex-1 h-12 mr-12">Side Part</div>
        </div>
        <b>Tailwind CSS flex-shrink Class</b>
        <div id="main" className="flex justify-evenly space-x-2 ml-12 mr-12">
          <div className="rounded bg-green-600 flex-grow w-16 h-12 ">Side Part</div>
          <div className="rounded bg-green-300 flex-shrink h-12">Flex-Shrink</div>
          <div className="rounded bg-green-600 flex-grow w-16 h-12">Side Part</div>
        </div>

        <p>&nbsp;</p>
        <p>2.6 Tailwind CSS Order</p>
        <b>Tailwind CSS order Class</b>
        <div id="main" className="flex flex-row justify-evenly">
          <div className="bg-green-900 order-last w-24 h-12">1</div>
          <div className="bg-green-800 w-24 h-12">2</div>
          <div className="bg-green-700 w-24 h-12">3</div>
          <div className="bg-green-600 w-24 h-12">4</div>
          <div className="bg-green-500 order-first w-24 h-12">5</div>
          <div className="bg-green-400 w-24 h-12">6</div>
        </div>
      </div>
    </>
  );
}
