/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import dynamic from "next/dynamic";
const Select = dynamic(() => import('react-select'))
import { Controller, } from "react-hook-form";
import React from 'react';
interface IProps {
    control: any;
}
const GenderInput: React.FC<IProps> = ({ control }) => {

    const options = [
        {
            label: 'Male',
            value: 'male'
        },
        {
            label: 'Female',
            value: 'female'
        },
        {
            label: 'Others',
            value: 'others'
        },
    ]
    return (
        <>
            <Controller
                name="gender"
                control={control}
                render={({ field: { value, ...others } }) => {
                    return (
                        <>
                            <label>Gender</label>
                            <section >
                                <Select  {...others} options={options} />
                            </section>
                        </>
                    )
                }}
            />
        </>

    )
}

export default GenderInput



