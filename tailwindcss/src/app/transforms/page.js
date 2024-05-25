export default function Home() {
  return (
    <>
      <div>
        <p>14.1. Tailwind CSS Transform</p>
        <b>Tailwind CSS Transform Class</b>
        <div className="bg-green-300 mx-16 space-y-4 p-2 justify-between grid grid-rows-1 grid-flow-col">
          <div title="bg-left-top"
            className="my-4 transform skew-y-12 bg-no-repeat w-16 h-16"
            style={{backgroundImage:"url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
          <div title="bg-left"
            className="my-4 transform rotate-45 bg-no-repeat w-16 h-16"
            style={{backgroundImage:"url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
          <div title="bg-left-bottom"
            className="my-4 transform scale-50 bg-no-repeat w-16 h-16"
            style={{backgroundImage:"url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
          <div title="bg-left-bottom"
            className="my-4 transform translate-x-4 translate-y-4 bg-no-repeat w-16 h-16"
            style={{backgroundImage:"url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
        </div>

        <p>&nbsp;</p>
        <p>14.2. Tailwind CSS Transform Origin</p>
        <b>Tailwind CSS Transform Origin Class</b>
        <div className="bg-green-300 mx-16 p-4 justify-between grid grid-flow-col">
          <div className="bg-yellow-500 w-16 h-16">
            <div className="w-16 h-16 origin-center bg-no-repeat transform rotate-45"
                title="origin-center"
                style={{backgroundImage:"url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
            </div>
          </div>
          <div className="bg-yellow-500 w-16 h-16">
            <div className="w-16 h-16 origin-top-left bg-no-repeat transform rotate-45"
                title="origin-top-left"
                style={{backgroundImage:"url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
            </div>
          </div>
          <div className="bg-yellow-500 w-16 h-16">
            <div className="w-16 h-16 origin-bottom-right bg-no-repeat transform rotate-45"
                title="origin-bottom-right"
                style={{backgroundImage:"url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
            </div>
          </div>
          <div className="bg-yellow-500 w-16 h-16">
            <div className="w-16 h-16 origin-left bg-no-repeat transform rotate-45"
                title="origin-left"
                style={{backgroundImage:"url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
            </div>
          </div>
        </div>

        <p>&nbsp;</p>
        <p>14.3. Tailwind CSS Scale</p>
        <b>Tailwind CSS scale-0 Class</b>
        <div className="bg-green-300 mx-16 p-4 justify-between grid grid-flow-col">
          <div className="transform scale-50 bg-no-repeat w-16 h-16"
            title="scale-50"
            style={{backgroundImage:"url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
          <div className="transform scale-75 bg-no-repeat w-16 h-16"
            title="scale-75"
            style={{backgroundImage:"url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
          <div className="transform scale-100 bg-no-repeat w-16 h-16"
            title="scale-100"
            style={{backgroundImage:"url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
          <div className="transform scale-125 bg-no-repeat w-16 h-16"
            title="scale-125"
            style={{backgroundImage:"url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
        </div>
        <b>Tailwind CSS scale-x-0 Class</b>
        <div className="bg-green-300 mx-16 p-4 justify-between grid grid-flow-col">
          <div className="transform scale-x-50 bg-no-repeat w-16 h-16"
            title="scale-x-50"
            style={{backgroundImage:"url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
          <div className="transform scale-x-75 bg-no-repeat w-16 h-16"
            title="scale-x-75"
            style={{backgroundImage:"url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
          <div className="transform scale-x-100 bg-no-repeat w-16 h-16"
            title="scale-x-100"
            style={{backgroundImage:"url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
          <div className="transform scale-x-125 bg-no-repeat w-16 h-16"
            title="scale-x-125"
            style={{backgroundImage:"url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
        </div>
        <b>Tailwind CSS scale-y-0 Class</b>
        <div className="bg-green-300 mx-16 p-4 justify-between grid grid-flow-col">
          <div className="transform scale-y-50 bg-no-repeat w-16 h-16"
            title="scale-y-50"
            style={{backgroundImage:"url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
          <div className="transform scale-y-75 bg-no-repeat w-16 h-16"
            title="scale-y-75"
            style={{backgroundImage:"url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
          <div className="transform scale-y-100 bg-no-repeat w-16 h-16"
            title="scale-y-100"
            style={{backgroundImage:"url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
          <div className="transform scale-y-125 bg-no-repeat w-16 h-16"
            title="scale-y-125"
            style={{backgroundImage:"url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
        </div>

        <p>&nbsp;</p>
        <p>14.4. Tailwind CSS Rotate</p>
        <b>Tailwind CSS Rotate Class</b>
        <div className="bg-green-300 mx-16 p-4 justify-between grid grid-flow-col">
          <div className="transform rotate-0 bg-no-repeat w-16 h-16"
            title="rotate-0"
            style={{backgroundImage:"url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
          <div className="transform rotate-45 bg-no-repeat w-16 h-16"
            title="rotate-45"
            style={{backgroundImage:"url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
          <div className="transform rotate-90 bg-no-repeat w-16 h-16"
            title="rotate-90"
            style={{backgroundImage:"url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
          <div className="transform rotate-180 bg-no-repeat w-16 h-16"
            title="rotate-180"
            style={{backgroundImage:"url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
        </div>

        <p>&nbsp;</p>
        <p>14.5. Tailwind CSS Translate</p>
        <b>Tailwind CSS Translate Class</b>
        <div className="bg-green-300 mx-16 p-4 justify-between grid grid-flow-col">
          <div className="transform translate-x-16 bg-no-repeat w-16 h-16"
            title="translate-x-16"
            style={{backgroundImage:"url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
          <div className="transform translate-y-16 bg-no-repeat w-16 h-16"
            title="translate-y-16"
            style={{backgroundImage:"url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
          <div className="transform -translate-x-16 bg-no-repeat w-16 h-16"
            title="-translate-x-16"
            style={{backgroundImage:"url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
          <div className="transform -translate-y-16 bg-no-repeat w-16 h-16"
            title="-translate-y-16"
            style={{backgroundImage:"url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
        </div>
      </div>
    </>
  );
}
