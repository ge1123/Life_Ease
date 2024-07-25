'use client';
import { CustomFlowbiteTheme, Datepicker } from 'flowbite-react';
import React from 'react';
import { CustomDatePickerProps } from '@/_components/type/customDatepicker.type';

const customTheme = {
    root: {
        base: "relative",
    },
    popup: {
        root: {
            base: "absolute top-10 z-50 block pt-2",
            inline: "relative top-0 z-auto",
            inner: "inline-block rounded-lg bg-white p-4 shadow-lg bg-gray-100"
        },
        header: {
            base: "",
            title: "px-2 py-3 text-center font-semibold text-gray-900",
            selectors: {
                base: "mb-2 flex justify-between",
                button: {
                    base: "rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200",
                    prev: "",
                    next: "",
                    view: ""
                }
            }
        },
        view: {
            base: "p-1"
        },
        footer: {
            base: "mt-2 flex space-x-2",
            button: {
                base: "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-cyan-300",
                today: "bg-cyan-600 text-white hover:bg-cyan-500",
                clear: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-200"
            }
        }
    },
    views: {
        days: {
            header: {
                base: "mb-1 grid grid-cols-7",
                title: "h-6 text-center text-sm font-medium leading-6 text-gray-500"
            },
            items: {
                base: "grid w-64 grid-cols-7",
                item: {
                    base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-200",
                    selected: "bg-cyan-600 text-white hover:bg-cyan-500",
                    disabled: "text-gray-400"
                }
            }
        },
        months: {
            items: {
                base: "grid w-64 grid-cols-4",
                item: {
                    base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-200",
                    selected: "bg-cyan-600 text-white hover:bg-cyan-500",
                    disabled: "text-gray-400"
                }
            }
        },
        years: {
            items: {
                base: "grid w-64 grid-cols-4",
                item: {
                    base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-200",
                    selected: "bg-cyan-600 text-white hover:bg-cyan-500",
                    disabled: "text-gray-400"
                }
            }
        },
        decades: {
            items: {
                base: "grid w-64 grid-cols-4",
                item: {
                    base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-200",
                    selected: "bg-cyan-600 text-white hover:bg-cyan-500",
                    disabled: "text-gray-400"
                }
            }
        }
    }
};



const CustomDatepicker: React.FC<CustomDatePickerProps> = ({ selectedDate, onSelectedDateChanged }) => {

    return (
        <>
            <Datepicker
                defaultDate={selectedDate}
                onSelectedDateChanged={onSelectedDateChanged}
                language='en'
                theme={customTheme}
                
            />
        </>
    )
}

export default CustomDatepicker;