import React, { useEffect, useRef, useState } from "react";

const UserForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleFocus = () => {
    buttonRef.current?.focus();
  };

  useEffect(() => {
    console.log("Name changed:", name);
  }, [name]);

  return (
    <div className="flex flex-col items-start gap-4 p-6">
      <input
        type="text"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
        placeholder="Enter your name"
        className="w-64 rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
      />

      <div className="flex items-center gap-3">
        <button
          ref={buttonRef}
          onClick={() => alert(`Hello ${name}`)}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-amber-300"
        >
          Say Hello
        </button>

        <button
          onClick={handleFocus}
          className="rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200 focus:outline-none"
        >
          Focus Greeting
        </button>
      </div>
    </div>
  );
};

export default UserForm;
