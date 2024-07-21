'use client';
import React from 'react';
import { AccountingCreationProps } from '@/ledger/components/accountingForm/model/types';
import TransactionTypeButton from '../button/transactionTypeButton';
import '@/ledger/styles/index.scss';


const AccountingCreation: React.FC<AccountingCreationProps> = ({ selectTransactionType }) => {


    return (
        <div className="accounting-creation__container">
            <div className="accounting-creation__type-button-container">
                <div className="accounting-creation__transaction-type-button--expense">
                    <TransactionTypeButton
                        onClick={() => selectTransactionType("expense")}
                        label="支出"
                        description="記錄您的支出"
                    />
                </div>

                <div className="accounting-creation__transaction-type-button--income">
                    <TransactionTypeButton
                        onClick={() => selectTransactionType("income")}
                        label="收入"
                        description="記錄您的收入"
                    />
                </div>
            </div>
        </div>
    );
};

export default AccountingCreation;