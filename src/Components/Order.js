import React from "react";

function Order({ order, onOkClick }) {
  const handleChangeStatus = () => {
    onOkClick();
  };

  const handlePrint = () => {
    const printWindow = window.open("", "", "width=600,height=600");

    printWindow.document.open();
    printWindow.document.write(`
     <html>
        <head>
          <title>Print Order</title>
          <style>
            
            body {
              font-family: Arial, sans-serif;
              margin : 18px;
            }
            
            table {
            margin-top : 20px;
              width: 100%;
              border-collapse: collapse;
            }
            .top_table{
            display : flex ;
             justify-content: flex-end;

            }
            th, td {
             border: 1px solid #61B2E4;
              padding: 4px;
              text-align: right;
            }
th {
  background-color: #D6EEEE;
}
          </style>
        </head>
        <body>
          <h2>Order Details</h2>
          <div class="top_table">
          <table style="width:50%">
  <tr>
  <td>Jill</td>
    <th> الفاتورة</th>
  </tr>
  <tr>
  <td>Smith</td>
    <th>التاريخ</th>
  </tr>
  <tr>
   <td>50</td>
    <th>المبلغ المستحق</th>  
  </tr>
</table>
          </div>
          <div>
<table>
  <tr>
  <th>السعر</th>
   <th style="width:20%">الكمية</th>
     <th style="width:20%">سعر الوحدة</th>  
  <th >الصنف</th>
  </tr>
  <td valign="top">Lois</td>
  <td valign="top">Griffin</td>
  <td valign="top">$150</td>
   <td valign="top">Griffin</td>
  </tr>
 
</table>
          </div>
                  <div class="top_table">
          <table style="width:50%">
  <tr>
  <td>Jill</td>
    <th>المجموع الجزئي</th>
  </tr>
  <tr>
  <td>Smith</td>
    <th>الضريبة</th>
  </tr>
  <tr>
   <td>50</td>
    <th>الرصيد المستحق</th>  
  </tr>
</table>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
    printWindow.close();
  };
  return (
    <div className="flex flex-col ">
      <div className="overflow-x-auto w-4/6 mx-auto">
        <div className="inline-block min-w-full py-6 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            {order.table_num === 1101 ? (
              <div className="bg-green-600  w-32 text-white rounded-sm  py-2 px-1">
                {" "}
                Take Away
              </div>
            ) : null}
            <table className="min-w-full text-left text-base   ">
              <thead className="border-b border-neutral-700 font-bold py-10   ">
                <tr>
                  <th scope="col" className="px-4 py-6">
                    Table Number
                  </th>
                  <th scope="col" className="px-4 py-6">
                    ID
                  </th>
                  <th scope="col" className="px-4 py-6">
                    Time
                  </th>
                  <th scope="col" className="px-4 py-6">
                    Order
                  </th>
                  <th scope="col" className="px-4 py-4">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="font-medium text-zinc-600 ">
                  <td valign="top" className=" px-4 py-4 v ">
                    {order.table_num}
                  </td>
                  <td valign="top" className=" whitespace-nowrap px-4 py-4">
                    #{order.id}
                  </td>
                  <td valign="top" className="whitespace-nowrap px-4 py-4 ">
                    {order.time}
                  </td>
                  <td valign="top" className="whitespace-nowrap px-4 py-4">
                    {order.products.map((product) => (
                      <p key={product.id} className="pb-2 text-slate-500">
                        {product.name}
                      </p>
                    ))}
                  </td>
                  <td valign="top" className="whitespace-nowrap px-4 py-4">
                    {order.total_price}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="py-10 space-x-2">
        <button
          onClick={handleChangeStatus}
          className="py-3 px-4 w-2/4 bg-[#DC0D28] rounded-md shadow-md shadow-zinc-600 font-medium  text-white"
        >
          OK
        </button>
        <button
          onClick={handlePrint}
          className="py-3 px-4 inline-flex  bg-[#61B2E4] rounded-md shadow-md shadow-zinc-600 font-medium items-center justify-center text-white"
        >
          Print
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-printer ml-2 "
            viewBox="0 0 16 16"
          >
            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
            <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Order;
