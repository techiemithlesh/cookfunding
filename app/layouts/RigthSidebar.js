import React from 'react'

const RigthSidebar = () => {
    const billCategories = [
        'Utilities', 'Cable TV', 'Mobile Recharge', 
        'Internet Services', 'Government Payments'
        
      ];
  return (
 
        <div className="w-80 bg-gray-100 p-6">
          <h3 className="text-xl font-bold mb-4">Bills Payment</h3>
          
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full p-2 mb-4 rounded"
          />
          
          <div className="grid grid-cols-3 gap-4">
            {billCategories.map((category) => (
              <div 
                key={category} 
                className="bg-white p-3 rounded text-center cursor-pointer"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      );

}

export default RigthSidebar