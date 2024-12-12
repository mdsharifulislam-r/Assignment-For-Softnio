import React from 'react'

export default function Table() {
  return (
    <table className="w-full text-left border-collapse">
  <thead>
    <tr className="md:text-sm text-xs font-semibold text-gray-600 border-b">
      <th className="p-4">Item</th>
      <th className="p-4">Color</th>
      <th className="p-4">Size</th>
      <th className="p-4">Qnt</th>
      <th className="p-4">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b">
      <td className="p-4 flex items-center">
        <img
          src="black.png"
          alt="Classy Modern Smart Watch"
          className="w-10 h-10 mr-4 rounded"
        />
        <span className='text-xs md:text-base'>Classy Modern Smart Watch</span>
      </td>
      <td className="p-4">Black</td>
      <td className="p-4 font-semibold">XL</td>
      <td className="p-4">1</td>
      <td className="p-4 font-semibold">$99.00</td>
    </tr>
    <tr className="border-b">
      <td className="p-4 flex items-center">
        <img
          src="blue.png"
          alt="Classy Modern Smart Watch"
          className="w-10 h-10 mr-4 rounded"
        />
        <span className='text-xs md:text-base'>Classy Modern Smart Watch</span>
      </td>
      <td className="p-4">Purple</td>
      <td className="p-4 font-semibold">L</td>
      <td className="p-4">2</td>
      <td className="p-4 font-semibold">$178.00</td>
    </tr>
    <tr>
      <td className="p-4 flex items-center">
        <img
          src="fit.png"
          alt="Classy Modern Smart Watch"
          className="w-10 h-10 mr-4 rounded"
        />
        <span className='text-xs md:text-base'>Classy Modern Smart Watch</span>
      </td>
      <td className="p-4">Cyan</td>
      <td className="p-4 font-semibold">M</td>
      <td className="p-4">1</td>
      <td className="p-4 font-semibold">$79.00</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colSpan={3} className="p-4">Total</td>
      <td className="p-4 text-right font-semibold">4</td>
      <td className="p-4 font-semibold">$356.00</td>
    </tr>
  </tfoot>

  
</table>

  )
}
