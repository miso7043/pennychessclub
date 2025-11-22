import React from "react";


export interface CampTableProps {
  title: string;
  tableTitles?: string[];
  rows: (string | boolean)[][]; // [highlight, ...columns]
}

export const CampTable: React.FC<CampTableProps> = ({ title, tableTitles, rows }) => (
  <div className="break-inside-avoid mb-8">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <table className="w-full border-collapse text-center">
      <thead>
        <tr>
          {(tableTitles || ["Location", "Time", "Level", "Dates"]).map((title, idx) => (
            <th
              key={title}
              className={
                "text-sm md:text-base bg-green-100/70 text-zinc-900 font-bold" +
                (idx === 0 ? " pl-2 pr-1 py-2" : "")
              }
            >
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => {
          const [highlight, ...columns] = row;
          return (
            <tr key={idx} className={highlight ? "bg-blue-300 text-stone-900" : "bg-yellow-100"}>
              {columns.map((col, colIdx) => (
                <td key={colIdx} className={`${colIdx === 0 ? "pl-2 pr-1 py-2" : "py-2"} text-sm md:text-base`}>{col}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);
