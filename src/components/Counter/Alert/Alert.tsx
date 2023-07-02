export default function Alert() {


    return (
       
<div className="min-h-screen p-10 pt-32 h-100">
<div className="font-regular relative block w-full rounded-lg bg-pink-500 p-4 text-base leading-5 text-white opacity-100">Alert primary</div><div class="w-full md:w-7/12 pt-5 px-4 mb-8 mx-auto text-center">
            <div className="text-sm text-gray-700 py-1">
            This components requires
            <a
                href="https://www.material-tailwind.com?ref=tailwindcomponents"
                className="text-gray-700 font-semibold"
                target="_blank"
                >Material Tailwind CSS & JS</a
            >
            for the classes. <br /><br />
            A component by<a
                href="https://www.creative-tim.com?ref=tailwindcomponents"
                class="text-gray-700 font-semibold"
                target="_blank"
            >
                Creative Tim</a
            >.
            </div>
        </div>
      </div>
      );
}