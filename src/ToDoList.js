import React, { useState } from "react";

function ToDoList() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 transition-transform duration-300 hover:scale-[1.01]">
        <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-6">
          📝 To-Do List
        </h1>

        <div className="flex gap-3 mb-6">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter a new task..."
            className="flex-1 bg-gray-50 placeholder:text-gray-400 text-gray-800 text-base border border-gray-300 rounded-lg px-4 py-2 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          <button
            type="button"
            onClick={() => {
              if (text.trim() !== "") {
                setItems([
                  ...items,
                  { id: Date.now(), text: text, status: false },
                ]);
                setText("");
              }
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg shadow 
                       transition-all focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Add
          </button>
        </div>

        {items.length === 0 ? (
          <p className="text-center text-gray-500 italic">No tasks yet — add one!</p>
        ) : (
          <ul className="space-y-3">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 px-4 py-3 rounded-lg shadow-sm border border-gray-200 transition-all"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={item.status}
                    onChange={() =>
                      setItems(
                        items.map((i) =>
                          i.id === item.id ? { ...i, status: !i.status } : i
                        )
                      )
                    }
                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <span
                    className={`font-medium ${
                      item.status
                        ? "text-gray-400 line-through"
                        : "text-gray-800"
                    }`}
                  >
                    {item.text}
                  </span>
                </div>

                <button
                  onClick={() =>
                    setItems(items.filter((i) => i.id !== item.id))
                  }
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded-md text-sm font-medium shadow 
                             focus:outline-none focus:ring-2 focus:ring-red-300 transition-all"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ToDoList;
