export default function Home() {
  return (
    <>
      <div>
        <p>8.1. Tailwind CSS Background Image</p>
        <b>Tailwind CSS Background Image Class</b>
        <div className="mx-4 grid grid-cols-3 gap-2">
          <div className="h-12 w-full bg-gradient-to-r rounded-lg from-yellow-400 via-green-500 to-blue-500">
            bg-gradient-to-r
          </div>
          <div className="h-12 w-full bg-gradient-to-tr rounded-lg from-yellow-400 via-green-500 to-blue-500">
            bg-gradient-to-tr
          </div>
          <div className="h-12 w-full bg-gradient-to-br rounded-lg from-yellow-400 via-green-500 to-blue-500">
            bg-gradient-to-br
          </div>
          <div className="h-12 w-full bg-gradient-to-b rounded-lg from-yellow-400 via-green-500 to-blue-500">
            bg-gradient-to-b
          </div>
          <div className="h-12 w-full bg-gradient-to-bl rounded-lg from-yellow-400 via-green-500 to-blue-500">
            bg-gradient-to-bl
          </div>
          <div className="h-12 w-full bg-gradient-to-tl rounded-lg from-yellow-400 via-green-500 to-blue-500">
            bg-gradient-to-tl
          </div>
          <div className="h-12 w-full bg-gradient-to-l rounded-lg from-yellow-400 via-green-500 to-blue-500">
            bg-gradient-to-l
          </div>
        </div>

        <p>&nbsp;</p>
        <p>8.2. Tailwind CSS Background Clip</p>
        <b>Tailwind CSS Background Clip Class
          <span className="bg-clip-text text-lg text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            bg-clip-text
          </span>
        </b>
        <div className="mx-2 grid grid-cols-3 gap-2 bg-green-200 rounded-lg">
          <div className="bg-clip-border p-6 bg-green-600 border-dashed border-4 border-green-300">
            bg-clip-border
          </div>
          <div className="bg-clip-padding p-6 bg-green-600 border-dashed border-4 border-green-300">
            bg-clip-padding
          </div>
          <div className="bg-clip-content p-6 bg-green-600 border-dashed border-4 border-green-300">
            bg-clip-content
          </div>
        </div>

        <p>&nbsp;</p>
        <p>8.3. Tailwind CSS Background Color</p>
        <b>Tailwind CSS Background Color Class</b>
        <div className="mx-14 bg-green-200 grid grid-rows-4 grid-flow-col text-justify p-4">
          <p className="bg-transparent p-2">
            bg-transparent
          </p>
          <p className="bg-current text-red-600 p-2">
            bg-current
          </p>
          <p className="bg-white p-2">
            bg-white
          </p>
          <p className="bg-black text-white p-2">
            bg-black
          </p>
          <p className="bg-gray-700 p-2">
            bg-gray-700
          </p>
          <p className="bg-red-700 p-2">
            bg-red-700
          </p>
          <p className="bg-indigo-700 p-2">
            bg-indigo-700
          </p>
          <p className="bg-blue-700 p-2">
            bg-blue-700
          </p>
          <p className="bg-green-700 p-2">
            bg-green-700
          </p>
          <p className="bg-yellow-700 p-2">
            bg-yellow-700
          </p>
          <p className="bg-pink-700 p-2">
            bg-pink-700
          </p>
          <p className="bg-purple-700 p-2">
            bg-purple-700
          </p>
        </div>

        <p>&nbsp;</p>
        <p>8.4. Tailwind CSS Background Opacity</p>
        <b>Tailwind CSS Background Opacity Class</b>
        <div className="mx-14 bg-green-200 grid grid-rows-4 grid-flow-col text-justify p-4">
          <p className="bg-green-800 bg-opacity-100 p-2">
            bg-opacity-100
          </p>
          <p className="bg-green-800 bg-opacity-75 p-2">
            bg-opacity-75
          </p>
          <p className="bg-green-800 bg-opacity-50 p-2">
            bg-opacity-50
          </p>
          <p className="bg-green-800 bg-opacity-25 p-2">
            bg-opacity-25
          </p>
          <p className="bg-yellow-800 bg-opacity-100 p-2">
            bg-opacity-100
          </p>
          <p className="bg-yellow-800 bg-opacity-75 p-2">
            bg-opacity-75
          </p>
          <p className="bg-yellow-800 bg-opacity-50 p-2">
            bg-opacity-50
          </p>
          <p className="bg-yellow-800 bg-opacity-25 p-2">
            bg-opacity-25
          </p>
          <p className="bg-pink-800 bg-opacity-100 p-2">
            bg-opacity-100
          </p>
          <p className="bg-pink-800 bg-opacity-75 p-2">
            bg-opacity-75
          </p>
          <p className="bg-pink-800 bg-opacity-50 p-2">
            bg-opacity-50
          </p>
          <p className="bg-pink-800 bg-opacity-25 p-2">
            bg-opacity-25
          </p>
        </div>

        <p>&nbsp;</p>
        <p>8.5. Tailwind CSS Background Position</p>
        <b>Tailwind CSS Background Position Class</b>
        <div className="bg-green-300 mx-16 space-y-4 p-2 justify-between grid grid-rows-3 grid-flow-col">
          <div title="bg-left-top"
            className="bg-no-repeat bg-left-top bg-green-200 w-24 h-24 border-4 my-4"
            style={{backgroundImage: "url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
          <div title="bg-left"
            className="bg-no-repeat bg-left bg-green-200 w-24 h-24 border-4 my-4"
            style={{backgroundImage: "url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
          <div title="bg-left-bottom"
            className="bg-no-repeat bg-left-bottom bg-green-200 w-24 h-24 border-4 my-4"
            style={{backgroundImage: "url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
          <div title="bg-top"
            className="bg-no-repeat bg-top bg-green-200 w-24 h-24 border-4 my-4"
            style={{backgroundImage: "url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
          <div title="bg-center"
            className="bg-no-repeat bg-center bg-green-200 w-24 h-24 border-4 my-4"
            style={{backgroundImage: "url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
          <div title="bg-bottom"
            className="bg-no-repeat bg-bottom bg-green-200 w-24 h-24 border-4 my-4"
            style={{backgroundImage: "url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
          <div title="bg-right-top"
            className="bg-no-repeat bg-right-top bg-green-200 w-24 h-24 border-4 my-4"
            style={{backgroundImage: "url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
          <div title="bg-right"
            className="bg-no-repeat bg-right bg-green-200 w-24 h-24 border-4 my-4"
            style={{backgroundImage: "url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
          <div title="bg-right-bottom"
            className="bg-no-repeat bg-right-bottom bg-green-200 w-24 h-24 border-4 my-4"
            style={{backgroundImage: "url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
        </div>

        <p>&nbsp;</p>
        <p>8.6. Tailwind CSS Background Repeat</p>
        <b>Tailwind CSS bg-repeat Class</b>
        <div className="bg-green-300 mx-16 space-y-4 p-2 justify-between">
          <div className="bg-repeat bg-left-top bg-green-200 w-full h-32 border-4"
            style={{backgroundImage: "url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
        </div>
        <b>Tailwind CSS bg-no-repeat Class</b>
        <div className="bg-green-300 mx-16 space-y-4 p-2 justify-between">
          <div className="bg-no-repeat bg-left-top bg-gree-200 w-full h-32 border-4"
            style={{backgroundImage: "url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
        </div>
        <b>Tailwind CSS bg-repeat-x Class</b>
        <div className="bg-green-300 mx-16 space-y-4 p-2 justify-between">
          <div className="bg-repeat-x bg-left-top bg-green-200 w-full h-32 border-4"
            style={{backgroundImage: "url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
        </div>
        <b>Tailwind CSS bg-repeat-y Class</b>
        <div className="bg-green-300 mx-16 space-y-4 p-2 justify-between">
          <div className="bg-repeat-y bg-left-top bg-green-200 w-full h-32 border-4"
            style={{backgroundImage: "url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
        </div>
        <b>Tailwind CSS bg-repeat-round Class</b>
        <div className="bg-green-300 mx-16 space-y-4 p-2 justify-between">
          <div className="bg-repeat-round bg-left-top bg-green-200 w-full h-32 border-4"
            style={{backgroundImage: "url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
        </div>
        <b>Tailwind CSS bg-repeat-space Class</b>
        <div className="bg-green-300 mx-16 space-y-4 p-2 justify-between">
          <div className="bg-repeat-space bg-left-top bg-green-200 w-full h-32 border-4"
            style={{backgroundImage: "url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWtpnjqDDPe_JVYCtRBRJsNk31igswUbkuayNTuqqmYwpfoZ6lQZy_CTcpvcb-4hxsOwXAcsdAVargctk-wqP66R6tjcEDF_B8zkHYUxAqeLhxpUdVA9YOnr4mqgPrL3mVxlP39swpHLAmAIuTCUiDx3ynxUlxw2IVmCUrjUWxq2TqyE0COp8sYUwwUPMa/s1600/GFGIcon.png)"}}>
          </div>
        </div>

        <p>&nbsp;</p>
        <p>8.7. Tailwind CSS Background Size</p>
        <b>Tailwind CSS bg-auto Class</b>
        <div className="bg-green-300 mx-16 space-y-4 p-2 justify-between">
          <div className="bg-no-repeat bg-auto bg-center bg-green-200 w-full h-48 border-2"
            style={{backgroundImage: "url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYfxghn0wT4peXUjYFJYh7fpChqMiDyGCmpK0Be6NkMBNQ0eX_Xrg7mHwscO1NEoCSVAacv1_eilf5TK-d1ILYoUKRz1yl8TWLoF5-QkPGFJZQD3q_GOREGHEaiQJ3PSDLS5p4W-sGJuLFQKyaHOb3oGNl2zH_UcSE7-7prFqkosK4HJmu2rHgwGMgnGI9/s1600/GFGLargeIcon.png)"}}>
          </div>
        </div>
        <b>Tailwind CSS bg-cover Class</b>
        <div className="bg-green-300 mx-16 space-y-4 p-2 justify-between">
          <div className="bg-no-repeat bg-cover bg-center bg-green-200 w-full h-48 border-2"
            style={{backgroundImage: "url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYfxghn0wT4peXUjYFJYh7fpChqMiDyGCmpK0Be6NkMBNQ0eX_Xrg7mHwscO1NEoCSVAacv1_eilf5TK-d1ILYoUKRz1yl8TWLoF5-QkPGFJZQD3q_GOREGHEaiQJ3PSDLS5p4W-sGJuLFQKyaHOb3oGNl2zH_UcSE7-7prFqkosK4HJmu2rHgwGMgnGI9/s1600/GFGLargeIcon.png)"}}>
          </div>
        </div>
        <b>Tailwind CSS bg-contain Class</b>
        <div className="bg-green-300 mx-16 space-y-4 p-2 justify-between">
          <div className="bg-no-repeat bg-contain bg-center bg-green-200 w-full h-48 border-2"
            style={{backgroundImage: "url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYfxghn0wT4peXUjYFJYh7fpChqMiDyGCmpK0Be6NkMBNQ0eX_Xrg7mHwscO1NEoCSVAacv1_eilf5TK-d1ILYoUKRz1yl8TWLoF5-QkPGFJZQD3q_GOREGHEaiQJ3PSDLS5p4W-sGJuLFQKyaHOb3oGNl2zH_UcSE7-7prFqkosK4HJmu2rHgwGMgnGI9/s1600/GFGLargeIcon.png)"}}>
          </div>
        </div>

        <p>&nbsp;</p>
        <p>8.8. Tailwind CSS Gradient Color Stops</p>
        <b>Tailwind CSS Gradient Color Stops Class</b>
        <div className="bg-gray-400 m-4 grid grid-flow-row gap-4 p-5">
          <div className="bg-gradient-to-r from-green-500 h-16">
            Gradient Color Stops: from-color
          </div>
          <div className="bg-gradient-to-r from-green-500 to-blue-500 h-16">
            Gradient Color Stops: to-color
          </div>
          <div className="bg-gradient-to-r from-indigo-400 via-yellow-500 to-green-500 h-16">
            Gradient Color Stops: via-color
          </div>
        </div>
      </div>
    </>
  );
}
