import React, { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import Head from "next/head";
import LineChart from "@/components/Chart/LineChart";
import StatisticChart from "@/components/Chart/StatisticChart";
import SimpleBarChart from "@/components/Chart/SimpleBarChart";
import SimpleColumnChart from "@/components/Chart/SimpleColumnChart";
import BarChart from "@/components/Chart/BarChart";
import PieChart from "@/components/Chart/PieChart";
import TableTransactions from "@/layouts/Transactions/TableTransactions";
import FooterDashboard from "@/components/Footers/FooterDashboard";

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  function sidebarHandler() {
    setSidebarOpen(!isSidebarOpen);
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar
        isSidebarOpen={isSidebarOpen}
        onClickToggleNavbar={sidebarHandler}
      />
      <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
        <Sidebar isSidebarOpen={isSidebarOpen} activeMenu="dashboard" />
        <div
          id="main-content"
          className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900"
        >
          <div className="px-4 pt-6">
            <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
              <LineChart />
              <StatisticChart />
            </div>
            <div className="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-2 2xl:grid-cols-3">
              <SimpleBarChart />
              <SimpleColumnChart />
            </div>
            <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3 mt-4">
              <BarChart />
              <PieChart />
            </div>
            <TableTransactions />
          </div>
          <FooterDashboard />
        </div>
      </div>
    </>
  );
}
