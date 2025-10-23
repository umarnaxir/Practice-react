"use client";
import { useState } from "react";
import Modal from "./Modal";
import AutoProgress from "./AutoProgress";

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-3xl font-semibold">React Portal Modal Example</h1>
      <button
        onClick={() => setOpen(true)}
        className="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
      >
        Open Portal
      </button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <AutoProgress />
      </Modal>
    </div>
  );
}
