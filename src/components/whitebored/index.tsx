import React from "react";
import Link from "next/link";
import { TransitionMoveUp } from "@/components/animation/transition";

interface BoredDataProps {
  BoredData: BoredTypes;
}

export default function index(props: BoredDataProps) {
  const { activity, type, accessibility, participants, price, link } =
    props.BoredData;

  return (
    <TransitionMoveUp>
      <div className="p-10 bg-white rounded-xl w-full max-w-xl">
        <div className="flex flex-col gap-4 text-black">
          {/* Activity */}
          <div className="flex flex-row items-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-slate-800 h-8 w-8 mr-3"
            >
              <path
                d="M11 19.5H21"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 12.5H21"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 5.5H21"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 5.5L4 6.5L7 3.5"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 12.5L4 13.5L7 10.5"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 19.5L4 20.5L7 17.5"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div>
              <p className="font-semibold"> Do this</p>
              <span className="">{activity}</span>
            </div>
          </div>

          {/* Activity Type */}
          <div className="flex flex-row items-center">
            <svg
              viewBox="0 0 36 36"
              version="1.1"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="fill-slate-800 h-8 w-8 mr-3"
            >
              <path
                className="clr-i-outline clr-i-outline-path-1"
                d="M18.1,11c-3.9,0-7,3.1-7,7s3.1,7,7,7c3.9,0,7-3.1,7-7S22,11,18.1,11z M18.1,23c-2.8,0-5-2.2-5-5s2.2-5,5-5c2.8,0,5,2.2,5,5S20.9,23,18.1,23z"
              ></path>
              <path
                className="clr-i-outline clr-i-outline-path-2"
                d="M32.8,14.7L30,13.8l-0.6-1.5l1.4-2.6c0.3-0.6,0.2-1.4-0.3-1.9l-2.4-2.4c-0.5-0.5-1.3-0.6-1.9-0.3l-2.6,1.4l-1.5-0.6l-0.9-2.8C21,2.5,20.4,2,19.7,2h-3.4c-0.7,0-1.3,0.5-1.4,1.2L14,6c-0.6,0.1-1.1,0.3-1.6,0.6L9.8,5.2C9.2,4.9,8.4,5,7.9,5.5L5.5,7.9C5,8.4,4.9,9.2,5.2,9.8l1.3,2.5c-0.2,0.5-0.4,1.1-0.6,1.6l-2.8,0.9C2.5,15,2,15.6,2,16.3v3.4c0,0.7,0.5,1.3,1.2,1.5L6,22.1l0.6,1.5l-1.4,2.6c-0.3,0.6-0.2,1.4,0.3,1.9l2.4,2.4c0.5,0.5,1.3,0.6,1.9,0.3l2.6-1.4l1.5,0.6l0.9,2.9c0.2,0.6,0.8,1.1,1.5,1.1h3.4c0.7,0,1.3-0.5,1.5-1.1l0.9-2.9l1.5-0.6l2.6,1.4c0.6,0.3,1.4,0.2,1.9-0.3l2.4-2.4c0.5-0.5,0.6-1.3,0.3-1.9l-1.4-2.6l0.6-1.5l2.9-0.9c0.6-0.2,1.1-0.8,1.1-1.5v-3.4C34,15.6,33.5,14.9,32.8,14.7z M32,19.4l-3.6,1.1L28.3,21c-0.3,0.7-0.6,1.4-0.9,2.1l-0.3,0.5l1.8,3.3l-2,2l-3.3-1.8l-0.5,0.3c-0.7,0.4-1.4,0.7-2.1,0.9l-0.5,0.1L19.4,32h-2.8l-1.1-3.6L15,28.3c-0.7-0.3-1.4-0.6-2.1-0.9l-0.5-0.3l-3.3,1.8l-2-2l1.8-3.3l-0.3-0.5c-0.4-0.7-0.7-1.4-0.9-2.1l-0.1-0.5L4,19.4v-2.8l3.4-1l0.2-0.5c0.2-0.8,0.5-1.5,0.9-2.2l0.3-0.5L7.1,9.1l2-2l3.2,1.8l0.5-0.3c0.7-0.4,1.4-0.7,2.2-0.9l0.5-0.2L16.6,4h2.8l1.1,3.5L21,7.7c0.7,0.2,1.4,0.5,2.1,0.9l0.5,0.3l3.3-1.8l2,2l-1.8,3.3l0.3,0.5c0.4,0.7,0.7,1.4,0.9,2.1l0.1,0.5l3.6,1.1V19.4z"
              ></path>
              <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
            </svg>

            <div>
              <p className="font-semibold">What kind?</p>
              <span className=" capitalize">{type}</span>
            </div>
          </div>

          {/* Participants */}
          <div className="flex flex-row items-center">
            <svg
              viewBox="0 0 28 28"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="fill-slate-800 h-8 w-8 mr-3"
            >
              <g
                id="🔍-Product-Icons"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="ic_fluent_people_community_28_regular"
                  fill="#212121"
                  fillRule="nonzero"
                >
                  <path
                    d="M17.25,18 C18.4926407,18 19.5,19.0073593 19.5,20.25 L19.5,21.7519766 L19.4921156,21.8604403 C19.1813607,23.9866441 17.2715225,25.0090369 14.0667905,25.0090369 C10.8736123,25.0090369 8.93330141,23.9983408 8.51446278,21.8965776 L8.5,21.75 L8.5,20.25 C8.5,19.0073593 9.50735931,18 10.75,18 L17.25,18 Z M17.25,19.5 L10.75,19.5 C10.3357864,19.5 10,19.8357864 10,20.25 L10,21.670373 C10.2797902,22.870787 11.550626,23.5090369 14.0667905,23.5090369 C16.582858,23.5090369 17.7966388,22.8777026 18,21.6931543 L18,20.25 C18,19.8357864 17.6642136,19.5 17.25,19.5 Z M18.2435553,11.9989081 L23.75,12 C24.9926407,12 26,13.0073593 26,14.25 L26,15.7519766 L25.9921156,15.8604403 C25.6813607,17.9866441 23.7715225,19.0090369 20.5667905,19.0090369 L20.2519278,19.0056708 L20.2519278,19.0056708 C19.9568992,18.2920884 19.4151086,17.7078172 18.7333573,17.3574924 C19.2481703,17.4584023 19.8580822,17.5090369 20.5667905,17.5090369 C23.082858,17.5090369 24.2966388,16.8777026 24.5,15.6931543 L24.5,14.25 C24.5,13.8357864 24.1642136,13.5 23.75,13.5 L18.5,13.5 C18.5,12.9736388 18.4096286,12.468385 18.2435553,11.9989081 Z M4.25,12 L9.75644465,11.9989081 C9.61805027,12.3901389 9.53222663,12.8062147 9.50746303,13.2386463 L9.5,13.5 L4.25,13.5 C3.83578644,13.5 3.5,13.8357864 3.5,14.25 L3.5,15.670373 C3.77979024,16.870787 5.05062598,17.5090369 7.5667905,17.5090369 C8.18886171,17.5090369 8.73132757,17.4704451 9.1985991,17.3944422 C8.5478391,17.7478373 8.03195873,18.3174175 7.74634871,19.0065739 L7.5667905,19.0090369 C4.37361228,19.0090369 2.43330141,17.9983408 2.01446278,15.8965776 L2,15.75 L2,14.25 C2,13.0073593 3.00735931,12 4.25,12 Z M14,10 C15.9329966,10 17.5,11.5670034 17.5,13.5 C17.5,15.4329966 15.9329966,17 14,17 C12.0670034,17 10.5,15.4329966 10.5,13.5 C10.5,11.5670034 12.0670034,10 14,10 Z M14,11.5 C12.8954305,11.5 12,12.3954305 12,13.5 C12,14.6045695 12.8954305,15.5 14,15.5 C15.1045695,15.5 16,14.6045695 16,13.5 C16,12.3954305 15.1045695,11.5 14,11.5 Z M20.5,4 C22.4329966,4 24,5.56700338 24,7.5 C24,9.43299662 22.4329966,11 20.5,11 C18.5670034,11 17,9.43299662 17,7.5 C17,5.56700338 18.5670034,4 20.5,4 Z M7.5,4 C9.43299662,4 11,5.56700338 11,7.5 C11,9.43299662 9.43299662,11 7.5,11 C5.56700338,11 4,9.43299662 4,7.5 C4,5.56700338 5.56700338,4 7.5,4 Z M20.5,5.5 C19.3954305,5.5 18.5,6.3954305 18.5,7.5 C18.5,8.6045695 19.3954305,9.5 20.5,9.5 C21.6045695,9.5 22.5,8.6045695 22.5,7.5 C22.5,6.3954305 21.6045695,5.5 20.5,5.5 Z M7.5,5.5 C6.3954305,5.5 5.5,6.3954305 5.5,7.5 C5.5,8.6045695 6.3954305,9.5 7.5,9.5 C8.6045695,9.5 9.5,8.6045695 9.5,7.5 C9.5,6.3954305 8.6045695,5.5 7.5,5.5 Z"
                    id="🎨-Color"
                  ></path>
                </g>
              </g>
            </svg>

            <div>
              <p className="font-semibold">Participants</p>
              <span className="">{participants}</span>
            </div>
          </div>

          {/* Cost */}
          <div className="flex flex-row items-center">
            <svg
              viewBox="0 0 30 30"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-slate-800 h-8 w-8 mr-3"
            >
              <path d="M5.5 5c-.655 0-.66 1.01 0 1h22c.286 0 .5.214.5.5v13c0 .66 1 .66 1 0v-13c0-.822-.678-1.5-1.5-1.5h-22zm-2 2c-.654 0-.654 1 0 1h22c.286 0 .5.214.5.5v13c0 .665 1.01.66 1 0v-13c0-.822-.678-1.5-1.5-1.5h-22zm-2 2C.678 9 0 9.678 0 10.5v12c0 .822.678 1.5 1.5 1.5h22c.822 0 1.5-.678 1.5-1.5v-12c0-.822-.678-1.5-1.5-1.5h-22zm0 1h22c.286 0 .5.214.5.5v12c0 .286-.214.5-.5.5h-22c-.286 0-.5-.214-.5-.5v-12c0-.286.214-.5.5-.5zm1 1c-.276 0-.5.224-.5.5v2c0 .672 1 .656 1 0V12h1.5c.672 0 .656-1 0-1h-2zm10 0C9.468 11 7 13.468 7 16.5S9.468 22 12.5 22s5.5-2.468 5.5-5.5-2.468-5.5-5.5-5.5zm8 0c-.656 0-.672 1 0 1H22v1.5c0 .656 1 .672 1 0v-2c0-.276-.224-.5-.5-.5h-2zm-8 1c2.49 0 4.5 2.01 4.5 4.5S14.99 21 12.5 21 8 18.99 8 16.5s2.01-4.5 4.5-4.5zm0 1c-.277 0-.5.223-.5.5v.594c-.578.21-1 .76-1 1.406 0 .82.68 1.5 1.5 1.5.28 0 .5.212.5.5 0 .288-.22.5-.5.5h-1c-.338-.005-.5.248-.5.5s.162.505.5.5h.5v.5c0 .277.223.5.5.5s.5-.223.5-.5v-.594c.578-.21 1-.76 1-1.406 0-.82-.68-1.5-1.5-1.5-.28 0-.5-.212-.5-.5 0-.288.22-.5.5-.5h1c.338.005.5-.248.5-.5s-.162-.505-.5-.5H13v-.5c0-.277-.223-.5-.5-.5zm-10 6.002c-.25-.002-.5.162-.5.498v2c0 .276.224.5.5.5h2c.656 0 .672-1 0-1H3v-1.5c0-.328-.25-.496-.5-.498zm20 0c-.25.002-.5.17-.5.498V21h-1.5c-.672 0-.656 1 0 1h2c.276 0 .5-.224.5-.5v-2c0-.336-.25-.5-.5-.498z" />
            </svg>

            <div>
              <p className="font-semibold">How much will it cost?</p>
              <span className="">{price}</span>
            </div>
          </div>

          {/* Accessibility */}
          <div className="flex flex-row items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Layer_1"
              viewBox="0 0 511.957 511.957"
              xmlSpace="preserve"
              className="fill-slate-800 h-8 w-8 mr-3"
            >
              <g>
                <g>
                  <path d="M458.624,191.979c-16.021,0-25.387,6.101-34.368,11.947c-3.499,2.261-7.701,2.325-11.264,0.192s-5.504-5.909-5.163-10.048    l8.107-97.216c0.256-2.965-0.768-5.909-2.773-8.107c-2.027-2.197-4.864-3.456-7.851-3.456h-95.701    c-7.829,0-14.997,4.267-18.752,11.136c-3.712,6.848-3.435,15.147,0.768,21.653c4.267,6.613,7.04,11.605,7.04,20.544    c0,17.643-19.136,32-42.667,32c-23.531,0-42.667-14.357-42.667-32c0-8.939,2.773-13.931,7.019-20.523    c4.224-6.549,4.501-14.848,0.789-21.675c-3.755-6.869-10.923-11.136-18.752-11.136h-95.723c-2.965,0-5.824,1.259-7.851,3.456    c-2.005,2.197-3.029,5.141-2.773,8.107l8.107,97.216c0.341,4.16-1.6,7.915-5.163,10.048c-3.584,2.133-7.808,2.048-12.011-0.683    c-8.256-5.355-17.621-11.456-33.643-11.456c-29.397,0-53.333,28.715-53.333,64s23.936,64,53.333,64    c16.021,0,25.387-6.101,34.368-11.947c3.499-2.261,7.701-2.325,11.264-0.192c3.563,2.133,5.504,5.909,5.163,10.048l-8.107,97.216    c-0.256,2.965,0.768,5.909,2.773,8.107c2.027,2.197,4.864,3.456,7.851,3.456h95.723c7.829,0,14.997-4.267,18.752-11.136    c3.712-6.848,3.435-15.147-0.768-21.653c-4.267-6.613-7.04-11.605-7.04-20.544c0-17.643,19.136-32,42.667-32    c23.531,0,42.667,14.357,42.667,32c0,8.939-2.773,13.931-7.019,20.523c-4.224,6.549-4.501,14.848-0.789,21.675    c3.755,6.869,10.923,11.136,18.752,11.136h95.723c2.987,0,5.824-1.259,7.829-3.456c2.005-2.197,3.029-5.141,2.773-8.107    l-8.107-97.216c-0.341-4.16,1.6-7.915,5.163-10.048c3.563-2.155,7.787-2.048,12.011,0.683    c8.256,5.355,17.621,11.456,33.643,11.456c29.397,0,53.333-28.715,53.333-64S488.021,191.979,458.624,191.979z M458.624,298.667    c-9.685,0-14.848-3.349-22.763-8.512c-10.325-6.72-23.275-6.933-33.813-0.619c-10.56,6.315-16.491,17.856-15.467,30.123    l7.125,85.675l-84.139,0.064c5.269-8.192,10.411-17.408,10.411-32.064c0-29.397-28.715-53.333-64-53.333s-64,23.936-64,53.333    c0,14.656,5.141,23.872,10.389,32h-84.117l7.125-85.675c1.024-12.267-4.907-23.808-15.467-30.123    c-10.56-6.336-23.531-6.08-34.603,1.131c-7.147,4.651-12.288,8-21.995,8c-17.643,0-32-19.136-32-42.667    c0-23.531,14.357-42.667,32-42.667c9.685,0,14.848,3.349,22.763,8.512c10.304,6.699,23.275,6.912,33.813,0.619    c10.56-6.315,16.491-17.856,15.467-30.123l-7.125-85.675l84.139-0.064c-5.269,8.192-10.411,17.408-10.411,32.064    c0,29.397,28.715,53.333,64,53.333s64-23.936,64-53.333c0-14.656-5.141-23.872-10.389-32h84.117l-7.125,85.675    c-1.024,12.267,4.907,23.808,15.467,30.123c10.539,6.293,23.488,6.059,34.603-1.131c7.147-4.651,12.288-8,21.995-8    c17.643,0,32,19.136,32,42.667C490.624,279.531,476.267,298.667,458.624,298.667z" />
                </g>
              </g>
            </svg>

            <div>
              <p className="font-semibold">How hard will it be?</p>
              <span className="">{accessibility}</span>
            </div>
          </div>

          {/* Reference */}
          <div className="flex flex-row items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -0.5 25 25"
              className="fill-slate-800 h-8 w-8 mr-3"
            >
              <path
                d="M11.1828 7.68276C10.8899 7.97566 10.8899 8.45053 11.1828 8.74342C11.4756 9.03632 11.9505 9.03632 12.2434 8.74342L11.1828 7.68276ZM13.9851 5.94109L14.5154 6.47142V6.47142L13.9851 5.94109ZM18.5291 5.94109L17.9988 6.47142L18.5291 5.94109ZM18.5291 10.4851L17.9988 9.95476L18.5291 10.4851ZM15.7268 12.2268C15.4339 12.5197 15.4339 12.9945 15.7268 13.2874C16.0196 13.5803 16.4945 13.5803 16.7874 13.2874L15.7268 12.2268ZM13.7583 16.3185C14.0513 16.0257 14.0514 15.5508 13.7585 15.2579C13.4657 14.9649 12.9908 14.9648 12.6979 15.2576L13.7583 16.3185ZM10.9561 18.0591L11.4797 18.5961L11.4863 18.5895L10.9561 18.0591ZM6.44132 18.0309L5.91104 18.5612H5.91104L6.44132 18.0309ZM6.41208 13.5161L5.88171 12.9857L5.87499 12.9926L6.41208 13.5161ZM9.21441 11.7744C9.50731 11.4815 9.50731 11.0067 9.21441 10.7138C8.92152 10.4209 8.44665 10.4209 8.15375 10.7138L9.21441 11.7744ZM15.2744 10.2574C15.5673 9.96453 15.5673 9.48966 15.2744 9.19676C14.9815 8.90387 14.5066 8.90387 14.2138 9.19676L15.2744 10.2574ZM9.66975 13.7408C9.37686 14.0337 9.37686 14.5085 9.66975 14.8014C9.96265 15.0943 10.4375 15.0943 10.7304 14.8014L9.66975 13.7408ZM12.2434 8.74342L14.5154 6.47142L13.4548 5.41076L11.1828 7.68276L12.2434 8.74342ZM14.5154 6.47142C15.4773 5.50953 17.0369 5.50953 17.9988 6.47142L19.0594 5.41076C17.5117 3.86308 15.0024 3.86308 13.4548 5.41076L14.5154 6.47142ZM17.9988 6.47142C18.9607 7.43332 18.9607 8.99287 17.9988 9.95476L19.0594 11.0154C20.6071 9.46774 20.6071 6.95845 19.0594 5.41076L17.9988 6.47142ZM17.9988 9.95476L15.7268 12.2268L16.7874 13.2874L19.0594 11.0154L17.9988 9.95476ZM12.6979 15.2576L10.4259 17.5286L11.4863 18.5895L13.7583 16.3185L12.6979 15.2576ZM10.4325 17.5221C9.46732 18.4632 7.92491 18.4536 6.97159 17.5005L5.91104 18.5612C7.44495 20.0948 9.92671 20.1103 11.4797 18.5961L10.4325 17.5221ZM6.97159 17.5005C6.01827 16.5474 6.00828 15.0049 6.94918 14.0396L5.87499 12.9926C4.36107 14.5459 4.37714 17.0277 5.91104 18.5612L6.97159 17.5005ZM6.94241 14.0464L9.21441 11.7744L8.15375 10.7138L5.88175 12.9858L6.94241 14.0464ZM14.2138 9.19676L9.66975 13.7408L10.7304 14.8014L15.2744 10.2574L14.2138 9.19676Z"
                fill="#000000"
              />
            </svg>

            <div>
              <p className="font-semibold">Reference</p>
              <span className=" hover:text-orange-400">
                <Link href={`${link}`} target="_blank">
                  {link}
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </TransitionMoveUp>
  );
}
