"use client";
import { usePathname } from 'next/navigation';
import localFont from 'next/font/local'

const liveWellFont = localFont({ src: './cm_sans_serif.ttf' })

export function LiveWellNavBar() {
    const pathname = usePathname();
    return (
        <nav className={ `border-gray-200  $liveWellFont.className`}>
            <div className={`max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4`}>
                <a href="https://joinlivewell.ca/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://joinlivewell.ca/img/livewell-logo-black.svg" className="h-8" alt="Flowbite Logo" />
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false"`}>
                    <span className={`sr-only`}>Open main menu</span>
                    <svg className={`w-5 h-5`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className={`hidden w-full md:block md:w-auto`} id="navbar-default">
                    <ul className={`font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 `}>
                    <ul className={`font-medium justify-center mr-auto flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0`}>
                        <li>
                            <a href="https://joinlivewell.ca/c/bc/start" className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Birth Control</a>
                        </li>
                        <li>
                            <a href="https://joinlivewell.ca/c/a/start" className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Acne</a>
                        </li>
                        <li>
                            <a href="https://joinlivewell.ca/weight-loss" className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Weight Loss</a>
                        </li>
                        <li>
                            <a href="/livewell_link" className={`block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page"`}>LiveWell Link</a>
                        </li>
                    </ul>
                    </ul>
                </div>
                </div>
        </nav>
        // <nav className={`bg-white flex border-gray-200 dark:bg-gray-900 $liveWellFont.className`}>
        //     <div className="mx-12">
        //         <a href="https://joinlivewell.ca/" className="flex items-center space-x-3 rtl:space-x-reverse">
        //              <img src="https://joinlivewell.ca/img/livewell-logo-black.svg" className="h-8" alt="Flowbite Logo" />
        //         </a>
        //         <button data-collapse-toggle="navbar-default" type="button" className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false"`}>
        //             <span className={`sr-only`}>Open main menu</span>
        //             <svg className={`w-5 h-5`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        //                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        //             </svg>
        //         </button>
        //     </div>
        //     <div className="mx-50">
        //         <ul className={`font-medium justify-center mr-auto flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}>
        //             <li>
        //                 <a href="https://joinlivewell.ca/c/bc/start" className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Birth Control</a>
        //             </li>
        //             <li>
        //                 <a href="https://joinlivewell.ca/c/a/start" className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Acne</a>
        //             </li>
        //             <li>
        //                 <a href="https://joinlivewell.ca/weight-loss" className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Weight Loss</a>
        //             </li>
        //             <li>
        //                 <a href="/livewell_link" className={`block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page"`}>LiveWell Link</a>
        //             </li>
        //         </ul>
        //     </div>
        //     <div className="flex-1 flex justify-center ml-auto"/>
        // </nav>
    );
}