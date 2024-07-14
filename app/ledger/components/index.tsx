import MainLayout from '@/_layout/components/mainLayout';
import AccountingOverview from './accountingOverview';
import AccountingForm from './accountingForm';
import FinancialOverview from './financialOverview';


export default function LedgerPage() {
    return (
        <MainLayout>
            <div className="flex p-6 bg-gray-100 min-h-screen space-x-6">
                <div className="w-3/4 flex flex-col space-y-4">
                    <AccountingOverview />
                    <AccountingForm />
                </div>
                <div className="w-1/4">
                    <FinancialOverview />
                </div>
            </div>
        </MainLayout>
    );
}