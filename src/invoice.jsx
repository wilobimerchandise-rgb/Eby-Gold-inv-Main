import React from 'react';

const invoiceData = {
  docNo: "#EGS-INV-516285",
  date: "24/07/2026",
  billedTo: {
    name: "Cargo Brokerage",
    line1: "N/A",
    address: "229, Moshood Abiola Way, Ijora Lagos."
  },
  items: [
    { sn: 1, name: "Harpic Toilet Wash", qty: 3, rate: 4500, total: 13500 },
    { sn: 2, name: "Hand Wash", qty: 2, rate: 1600, total: 3200 },
    { sn: 3, name: "Morning Fresh - Big", qty: 2, rate: 3000, total: 6000 },
    { sn: 4, name: "Air Freshner", qty: 4, rate: 2100, total: 8400 },
    { sn: 5, name: "Rose Tissue Paper (bag)", qty: 2, rate: 12000, total: 24000 },
    { sn: 6, name: "Peak Milk Powder - 800g", qty: 1, rate: 10500, total: 10500 },
    { sn: 7, name: "Insecticide", qty: 3, rate: 3500, total: 10500 },
    { sn: 8, name: "Dettol - 500ml", qty: 3, rate: 9500, total: 28500 },
    { sn: 9, name: "Waste Bin Bag - Rolls", qty: 4, rate: 1200, total: 4800 },
    { sn: 10, name: "Milo - 800g", qty: 1, rate: 9000, total: 9000 },
    { sn: 11, name: "St Louis Sugar - pkt", qty: 1, rate: 2000, total: 2000 },
    { sn: 12, name: "Table tissue paper - pkt", qty: 1, rate: 2000, total: 2000 },
    { sn: 13, name: "DoubleA A4 Paper - pkt", qty: 2, rate: 6500, total: 13000 },
    { sn: 14, name: "Viva Detergent - 1.6kg", qty: 2, rate: 4500, total: 9000 },
  ],
  payment: {
    bank: "UBA",
    accountNo: "2188015307",
    accountName: "Ebere Favour Akaolisa"
  },
  subtotal: 144400,
  total: 144400,
  amountInWords: "one hundred and forty four thousand four hundred Naira Only"
}

export default function Invoice() {
  return (
    <div className="min-h-screen bg-[#fcfaf3] p-4">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md relative">
        
        {/* Watermark */}
        <img 
          src="https://placehold.co/400x400/cccccc/cccccc/png" 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 w-3/4 object-contain pointer-events-none"
          alt="watermark"
        />

        {/* Header */}
        <div className="flex justify-between items-start border-b-2 border-gray-800 pb-2 relative z-10">
          <div>
            <h1 className="text-2xl font-bold text-[#1e2a4a]">EBY-GOLD SUPERSTORES</h1>
            <p className="text-sm">19, Jejelaiye Street, Surulere, Lagos.</p>
            <p className="text-sm">Tel: 07058016395</p>
            <p className="text-sm">Email: ebereakaolisa5@gmail.com</p>
          </div>
          <div className="text-right">
            <h2 className="text-lg font-bold text-[#1e2a4a]">SALES INVOICE</h2>
            <p className="text-sm"><b>DOCUMENT NO:</b> {invoiceData.docNo}</p>
            <p className="text-sm"><b>DATE:</b> {invoiceData.date}</p>
          </div>
        </div>

        {/* Billed To */}
        <div className="mt-4 relative z-10">
          <p className="font-bold">BILLED TO:</p>
          <p>{invoiceData.billedTo.name}</p>
          <p>{invoiceData.billedTo.line1}</p>
          <p>{invoiceData.billedTo.address}</p>
        </div>

        {/* Items Table */}
        <table className="w-full mt-4 border-collapse relative z-10">
          <thead>
            <tr className="bg-[#1e2a4a] text-white text-sm">
              <th className="p-2 border text-center">S/N</th>
              <th className="p-2 border text-left">Items</th>
              <th className="p-2 border text-center">Qty</th>
              <th className="p-2 border text-right">Rate</th>
              <th className="p-2 border text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.items.map(item => (
              <tr key={item.sn} className="text-sm">
                <td className="p-2 border text-center">{item.sn}</td>
                <td className="p-2 border">{item.name}</td>
                <td className="p-2 border text-center">{item.qty}</td>
                <td className="p-2 border text-right">NGN {item.rate.toLocaleString()}</td>
                <td className="p-2 border text-right">NGN {item.total.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Payment + Total */}
        <div className="flex justify-between mt-4 gap-4 relative z-10">
          <div className="w-1/2">
            <div className="bg-[#1e2a4a] text-white p-1 text-sm font-bold">PAYMENT INFORMATION</div>
            <table className="w-full text-sm border">
              <tbody>
                <tr><td className="p-1 border font-semibold">Bank</td><td className="p-1 border">{invoiceData.payment.bank}</td></tr>
                <tr><td className="p-1 border font-semibold">Account No</td><td className="p-1 border">{invoiceData.payment.accountNo}</td></tr>
                <tr><td className="p-1 border font-semibold">Account Name</td><td className="p-1 border">{invoiceData.payment.accountName}</td></tr>
              </tbody>
            </table>
          </div>
          <div className="w-1/2">
            <table className="w-full text-sm border">
              <tbody>
                <tr><td className="p-2 border font-semibold">Subtotal</td><td className="p-2 border text-right">NGN {invoiceData.subtotal.toLocaleString()}</td></tr>
                <tr className="bg-[#1e2a4a] text-white font-bold"><td className="p-2 border">Total</td><td className="p-2 border text-right">NGN {invoiceData.total.toLocaleString()}</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Amount in Words */}
        <div className="mt-4 border-b-2 border-gray-800 pb-2 relative z-10">
          <p className="font-bold">Amount in Words: <span className="font-normal italic">{invoiceData.amountInWords}</span></p>
        </div>

        {/* Footer */}
        <div className="flex justify-between mt-8 text-sm text-gray-500 relative z-10">
          <p>Thank you for choosing Eby-Gold Superstores</p>
          <p className="font-bold text-[#1e2a4a]">Created by: ADMIN</p>
        </div>
      </div>
    </div>
  )
    }
const LOGO_URL = '/Eby-Gold-inv-Main/logo.png';
