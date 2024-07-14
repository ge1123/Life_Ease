'use client';
import React, { useState } from 'react';


const AccountingCreation = ({ setType, setIsSelect }) => {

    const handleType= (type: string) => {
        setType(type)
        setIsSelect(true)
    }

    return (
        <div className="bg-white p-6 mb-4 rounded-lg">
            <h1 className="text-2xl font-bold mb-4">建立帳額</h1>
            <div className="flex space-x-4">
                <div
                    className="flex flex-col items-center justify-center text-white bg-pink-500 rounded-lg p-4 hover:bg-pink-600 transition duration-300 cursor-pointer shadow-md"
                    onClick={() => handleType("expense")}
                >
                    <i className="fas fa-money-bill-wave text-3xl mb-2"></i>
                    <span className="text-lg font-bold">支出</span>
                    <p className="text-sm">記錄您的支出</p>
                </div>
                <div
                    className="flex flex-col items-center justify-center text-white bg-green-500 rounded-lg p-4 hover:bg-green-600 transition duration-300 cursor-pointer shadow-md"
                    onClick={() => handleType("income")}
                >
                    <i className="fas fa-piggy-bank text-3xl mb-2"></i>
                    <span className="text-lg font-bold">收入</span>
                    <p className="text-sm">記錄您的收入</p>
                </div>
            </div>
        </div>
    );
};

export default AccountingCreation;