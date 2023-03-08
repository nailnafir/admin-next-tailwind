import React from "react";
import Lottie from "lottie-react";
import { useRouter } from "next/router";

interface EmptyStateProps {
  title: string;
  subtitle: string;
  button: string;
  lottie: any;
}

export default function EmptyState(props: EmptyStateProps) {
  const { title, subtitle, button, lottie } = props;
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col justify-center items-center px-6 mx-auto h-screen xl:px-0 dark:bg-gray-900">
        <div className="block md:max-w-lg">
          <Lottie animationData={lottie} loop={true} />
        </div>
        <div className="text-center xl:max-w-4xl">
          <h1 className="mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
            {title}
          </h1>
          <p className="mb-5 text-base font-normal text-gray-500 md:text-lg dark:text-gray-400">
            {subtitle}
          </p>
          <button
            onClick={() => router.back()}
            className="mx-auto text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
          >
            {button}
          </button>
        </div>
      </div>
    </>
  );
}
