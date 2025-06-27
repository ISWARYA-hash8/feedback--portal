import React, { useState } from 'react';

const Resources = () => {
  const [resource, setResource] = useState('');

  const handleAdd = () => {
    if (resource) {
      alert(`Resource added: ${resource}`);
      setResource('');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Resources</h2>
      <input
        type="text"
        placeholder="Add new resource link..."
        className="w-full p-2 border rounded"
        value={resource}
        onChange={(e) => setResource(e.target.value)}
      />
      <button onClick={handleAdd} className="mt-3 bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800">
        Add Resource
      </button>
    </div>
  );
};

export default Resources;
