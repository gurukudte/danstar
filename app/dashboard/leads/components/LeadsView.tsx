"use client";

import { useEffect, useMemo, useState } from "react";
import { Download, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchLeads } from "../leadSlice";
import { LeadsTable } from "./LeadsTable";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export default function LeadsView() {
  const { leads, status } = useAppSelector((state) => state.leads);
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [serviceTypeFilter, setServiceTypeFilter] = useState("all");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Extract unique positions for filter dropdown
  const serviceTypes = [
    ...new Set(
      leads
        ?.filter((lead) => lead.serviceType !== "")
        .map((lead) => lead?.serviceType)
    ),
  ];

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchesSearch =
        lead.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.phone.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesServiceType =
        serviceTypeFilter === "all" || lead.serviceType === serviceTypeFilter;

      return matchesSearch && matchesServiceType;
    });
  }, [serviceTypeFilter, searchTerm, leads]);

  const handleExport = () => {
    if (!leads.length) return;

    const data = leads.map((lead) => ({
      "Full name": lead.fullName,
      Email: lead.email,
      "Phone number": lead.phone || "",
      "Service type": lead.serviceType || "",
      Message: lead.message,
      "Updated at": lead.updatedAt,
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Leads");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, `leads_${new Date().toISOString()}.xlsx`);
  };

  useEffect(() => {
    dispatch(fetchLeads());
  }, [dispatch]);
  return (
    <div className="bg-background rounded-lg shadow p-4 md:p-6 h-full flex flex-col">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h2 className="text-xl font-semibold text-secondary">
          Leads Management
        </h2>

        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by name or ID..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {serviceTypes.length > 0 && (
            <Select
              value={serviceTypeFilter}
              onValueChange={setServiceTypeFilter}
            >
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Filter by position" />
              </SelectTrigger>
              <SelectContent className="bg-background">
                <SelectItem value="all">All service types</SelectItem>
                {serviceTypes.map((lead) => (
                  <SelectItem key={lead} value={lead || ""}>
                    {lead}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>
        <Button
          variant="outline"
          onClick={handleExport}
          className="cursor-pointer"
        >
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>

      <LeadsTable
        leads={filteredLeads}
        loading={status === "loading"}
        isMobile={isMobile}
      />
    </div>
  );
}
