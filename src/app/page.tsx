"use client"

import useMockSalesman from "@/shared/hook/use_mock_salesman";
import Link from "next/link";

export default function Page() {
  useMockSalesman();

  return (
    <div className="justify-center items-center flex-col flex h-full w-full ">
      <div className="flex flex-col items-center">
        <h1 className="font-bold mb-2 text-xl">Choose the Destination</h1>
        <div className="flex justify-between items-center">
          <Link
            className=" w-fit bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300"
            href="/leads/create_lead"
          >
            Create Lead
          </Link>
          <p className="mx-2 font-bold text-xs">Or</p>
          <Link
            className=" w-fit bg-indigo-100 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300"
            href="/dashboard"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
