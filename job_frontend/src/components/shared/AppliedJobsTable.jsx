import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";
import { Ghost } from "lucide-react";

const AppliedJobsTable = () => {
  let arr = [1, 2, 3, 4, 5];
  return (
    <div>
      <Table>
        <TableCaption>A List of Your Applied Jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {arr.map((item, index) => (
            <TableRow key={index}>
              <TableCell>14-06-2024</TableCell>
              <TableCell>Software Developer</TableCell>
              <TableCell>JP Morgan</TableCell>
              <TableCell className="text-right">
                <Badge variant={Ghost}>Accepted</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobsTable;
