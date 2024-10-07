'use client'

import { Calendar } from "@/components/ui/calendar";
import InfoCard from "@/components/ui/infoCard"

import React from "react";

const AdminPage = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* Left  */}
      <div className="w-full lg:w-3/4 flex flex-col gap-8">
        {/* User card  */}
        <div className="flex gap-4 justify-between flex-wrap">
          <InfoCard type="student" />
          <InfoCard type="teacher" />
          <InfoCard type="parent" />
          <InfoCard type="staff" />
        </div>

        {/* Middle */}
        <div className="flex gap-4 flex-col lg:flex-row">

        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/4 flex flex-col gap-8 max-md:hidden">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"

        />
      </div>
    </div>
  );
}

export default AdminPage;
