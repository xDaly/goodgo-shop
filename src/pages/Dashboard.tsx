import React from 'react';
import Sidebar from '../components/Sidebar';
import './Dashboard.css'

function Dashboard() {
  return (
    <div className="w-full">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                Product name
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Image
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Category
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4 flex justify-center	">
                <img className='product-image rounded' src="https://goods.tn/storage/2023/08/6ba3af51d1aba50966f46d61561af389-600x600.jpeg" alt="" />
              </td>
              <td className="px-6 py-4 text-center ">
                Laptop
              </td>
              <td className="px-6 py-4 text-center ">
                $2999
              </td>
              <td className="px-6 py-4 text-center ">
                <a href="#" className="m-3 font-medium text-blue-600 dark:text-blue-500 hover:underline">Modifier</a>
                <a href="#" className="m-3 font-medium text-blue-600 dark:text-blue-500 hover:underline">Supprimer</a>
                <a href="#" className="m-3 font-medium text-blue-600 dark:text-blue-500 hover:underline">Afficher</a>
                {/* <a href="#" className="m-3 font-medium text-blue-600 dark:text-blue-500 hover:underline"><i className="fa-solid fa-eye-slash"></i></a> */}

              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
