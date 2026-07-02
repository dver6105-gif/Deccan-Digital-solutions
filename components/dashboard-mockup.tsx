import { ArrowUpRight, CalendarDays, IndianRupee, LineChart, Users } from "lucide-react";

const rows = [
  ["Website inquiry", "Kannad Clinic", "New"],
  ["App update", "Retail demo", "Ready"],
  ["Payment page", "Service CRM", "Live"]
];

export function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-xl rounded-lg border bg-white p-4 shadow-soft">
      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <p className="text-sm font-semibold text-slate-500">Today</p>
          <h3 className="text-2xl font-bold text-slate-950">Business Control Room</h3>
        </div>
        <div className="rounded-md bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
          Online
        </div>
      </div>
      <div className="grid gap-3 py-4 sm:grid-cols-3">
        {[
          { label: "Leads", value: "28", icon: Users },
          { label: "Revenue", value: "₹84k", icon: IndianRupee },
          { label: "Bookings", value: "16", icon: CalendarDays }
        ].map((item) => (
          <div key={item.label} className="rounded-md border bg-slate-50 p-3">
            <item.icon className="h-4 w-4 text-primary" />
            <p className="mt-3 text-2xl font-bold text-slate-950">{item.value}</p>
            <p className="text-xs font-medium text-slate-500">{item.label}</p>
          </div>
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-md border p-4">
          <div className="mb-4 flex items-center justify-between">
            <p className="font-semibold text-slate-900">Growth</p>
            <LineChart className="h-4 w-4 text-primary" />
          </div>
          <div className="flex h-36 items-end gap-2">
            {[36, 58, 45, 72, 65, 88, 78].map((height, index) => (
              <div key={index} className="flex-1 rounded-t-md bg-primary/85" style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
        <div className="space-y-3">
          {rows.map(([task, client, status]) => (
            <div key={task} className="rounded-md border p-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-slate-950">{task}</p>
                  <p className="text-xs text-slate-500">{client}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-slate-400" />
              </div>
              <p className="mt-2 text-xs font-semibold text-primary">{status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
