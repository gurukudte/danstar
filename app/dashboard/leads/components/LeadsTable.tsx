"use client";

import { format } from "date-fns";
import {
  Loader2,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Lead } from "../leadSlice";

interface ILeadTableProps {
  leads: Lead[];
  loading: boolean;
  isMobile: boolean;
}

export function LeadsTable({ leads, loading }: ILeadTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  // Calculate pagination values
  const totalItems = leads?.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedLeads = leads?.slice(startIndex, endIndex);

  // Column width definitions
  const columnWidths = {
    id: " w-[100px]",
    name: "w-[150px]",
    phone: " w-[120px]",
    email: " w-[200px]",
    serviceType: " w-[200px]",
    message: " w-[200px]",
    updatedAt: "w-[150px]",
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  // Handle items per page change
  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(Number(value));
    setCurrentPage(1);
  };
  console.log(paginatedLeads);
  return (
    <div className="rounded-md border dark:border-gray-700 h-[calc(100vh-200px)] flex flex-col">
      {/* Table container with separate header and body sections */}
      <div className="overflow-hidden flex flex-col h-full">
        {/* Fixed Header */}
        <div className="flex-none overflow-hidden">
          <Table className="min-w-[700px]">
            <TableHeader className="bg-secondary  sticky top-0 z-10">
              <TableRow>
                <TableHead className={`text-background ${columnWidths.name}`}>
                  Full name
                </TableHead>
                <TableHead className={`text-background ${columnWidths.email}`}>
                  Email
                </TableHead>
                <TableHead className={`text-background ${columnWidths.phone}`}>
                  Phone
                </TableHead>

                <TableHead
                  className={`text-background ${columnWidths.serviceType}`}
                >
                  Service Type
                </TableHead>
                <TableHead
                  className={`text-background ${columnWidths.message}`}
                >
                  Message
                </TableHead>
                <TableHead
                  className={`text-background ${columnWidths.updatedAt}`}
                >
                  updatedAt
                </TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>

        {/* Scrollable Body */}
        <div className="flex-grow overflow-y-auto h-full">
          <Table className="min-w-[700px]">
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={7} className="h-[400px] text-center">
                    <div className="flex flex-col items-center justify-center h-full gap-2">
                      <Loader2 className="h-8 w-8 animate-spin" />
                      <span>Loading leads...</span>
                    </div>
                  </TableCell>
                </TableRow>
              ) : paginatedLeads?.length > 0 ? (
                paginatedLeads?.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell className={columnWidths.name}>
                      {lead.fullName}
                    </TableCell>
                    <TableCell className={columnWidths.email}>
                      {lead.email || ""}
                    </TableCell>
                    <TableCell className={columnWidths.phone}>
                      {lead.phone}
                    </TableCell>
                    <TableCell className={columnWidths.serviceType}>
                      {lead.serviceType}
                    </TableCell>
                    <TableCell className={columnWidths.message}>
                      {lead.message}
                    </TableCell>
                    <TableCell className={columnWidths.updatedAt}>
                      {lead.updatedAt
                        ? format(new Date(lead.updatedAt), "yyyy-MM-dd HH:mm")
                        : ""}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="h-[400px] text-center">
                    <div className="flex flex-col items-center justify-center h-full gap-2">
                      <span className="text-lg font-medium">
                        {leads?.length === 0
                          ? "No Leads found"
                          : "No matching lead found"}
                      </span>
                      <span className="text-muted-foreground">
                        {leads?.length === 0
                          ? "Add your first lead to get started"
                          : "Try adjusting your search or filters"}
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Pagination Controls - Only show if not loading and there are employees */}
      {loading && leads?.length > 0 && (
        <div className="flex items-center justify-between px-4 py-3 border-t">
          <div className="text-sm text-muted-foreground">
            Showing {startIndex + 1}-{Math.min(endIndex, totalItems)} of{" "}
            {totalItems} leads
          </div>

          <div className="flex items-center space-x-6 lg:space-x-8">
            <div className="flex items-center space-x-2">
              <Select
                value={itemsPerPage.toString()}
                onValueChange={handleItemsPerPageChange}
              >
                <SelectTrigger className="h-8 w-[70px]">
                  <SelectValue placeholder={itemsPerPage} />
                </SelectTrigger>
                <SelectContent side="top">
                  {[5, 10, 20, 50].map((pageSize) => (
                    <SelectItem key={pageSize} value={`${pageSize}`}>
                      {pageSize}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                className="hidden h-8 w-8 p-0 lg:flex"
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
              >
                <ChevronsLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="h-8 w-8 p-0"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex w-[100px] items-center justify-center text-sm font-medium">
                Page {currentPage} of {totalPages}
              </div>
              <Button
                variant="outline"
                className="h-8 w-8 p-0"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages || totalPages === 0}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="hidden h-8 w-8 p-0 lg:flex"
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages || totalPages === 0}
              >
                <ChevronsRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
