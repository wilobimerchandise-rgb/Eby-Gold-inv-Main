import React, { useState, useRef } from 'react';

const LOGO_URL = '/Eby-Gold-inv-Main/logo.png'; // <-- This must be in root of repo

const initialItems = [
  { id: 1, product: 'Rice 50kg', qty: 2, unitPrice: 65000 },
  { id: 2, product: 'Groundnut Oil 25L', qty: 1, unitPrice: 45000 },
];

export default function Invoice() {
  const [items, setItems] = useState(initialItems);
  const [customer, setCustomer] = useState('Walk-in Customer');
  const [invoiceNo, setInvoiceNo] = useState('INV-001');
  const invoiceRef = useRef();

  const subtotal = items.reduce((sum, item) => sum + item.qty * item.unitPrice, 0);
  const total = subtotal;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen p-4 md:p-8 print:p-0 bg-gray-100">
      <div ref={invoiceRef} className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 print:shadow-none print:rounded-none">
        
        {/* Header with Logo fitted */}
        <div className="flex justify-between items-start border-b-2 border-gray-800 pb-4 mb-4">
          <div className="flex items-center gap-4">
            {/* LOGO BOX - fits perfectly, no stretch */}
            <div className="w-20 h-20 flex items-center justify-center bg-white rounded-lg border border-gray-200 p-1">
              <img 
                src={LOGO_URL} 
                alt="EG Logo" 
                className="w-full h-full object-contain" // <-- key: object-contain
                onError={(e)=>e.target.parentElement.style.display='none'} 
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">EBY-GOLD SUPERSTORES</h1>
              <p className="text-sm text-gray-600">Lagos, Nigeria</p>
              <p className="text-sm text-gray-600">Tel: 0800-000-0000</p>
            </div>
          </div>
          <div className="text-right">
            <h2 className="text-3xl font-bold text-red-600">INVOICE</h2>
            <p className="text-sm"><b>No:</b> {invoiceNo}</p>
            <p className="text-sm"><b>Date:</b> {new Date().toLocaleDateString()}</p>
          </div>
        </div>

        {/* Customer */}
        <div className="mb-6">
          <p><b>Bill To:</b> {customer}</p>
        </div>

        {/* Items Table */}
        <table className="w-full mb-6">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-2 text-left">#</th>
              <th className="p-2 text-left">Product</th>
              <th className="p-2 text-center">Qty</th>
              <th className="p-2 text-right">Unit Price</th>
              <th className="p-2 text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={item.id} className="border-b">
                <td className="p-2">{i + 1}</td>
                <td className="p-2">{item.product}</td>
                <td className="p-2 text-center">{item.qty}</td>
                <td className="p-2 text-right">₦{item.unitPrice.toLocaleString()}</td>
                <td className="p-2 text-right">₦{(item.qty * item.unitPrice).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Totals */}
        <div className="flex justify-end">
          <div className="w-64">
            <div className="flex justify-between py-1"><span>Subtotal:</span> <span>₦{subtotal.toLocaleString()}</span></div>
            <div className="flex justify-between py-1 font-bold text-lg border-t-2 border-gray-800"><span>Total:</span> <span>₦{total.toLocaleString()}</span></div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>Thank you for your business!</p>
        </div>
      </div>

      {/* Print Button */}
      <div className="text-center mt-6 print:hidden">
        <button 
          onClick={handlePrint}
          className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700"
        >
          Print / Save as PDF
        </button>
      </div>

      <style>{`
        @media print {
          body { background: white; }
        }
      `}</style>
    </div>
  );
      }
