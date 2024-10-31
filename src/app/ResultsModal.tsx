import React from "react";
import { Dialog } from "@headlessui/react";

interface ResultsModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalSchedules: number;
  onViewSchedules: () => void;
}

export const ResultsModal: React.FC<ResultsModalProps> = ({
  isOpen,
  onClose,
  totalSchedules,
  onViewSchedules,
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-10">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
          <Dialog.Title className="text-2xl font-bold mb-4 text-primary font-main">
            Schedules Generated!
          </Dialog.Title>
          <p className="mb-6 text-lg">
            Generated {totalSchedules} possible schedules and ranked them based
            on your preferences.
          </p>
          <div className="flex justify-end gap-4">
            <button
              className="btn btn-primary text-white"
              onClick={() => {
                onViewSchedules();
                onClose();
              }}
            >
              View Top 10 Schedules
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
