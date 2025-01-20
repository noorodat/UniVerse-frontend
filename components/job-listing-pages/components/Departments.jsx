
'use client'

import CustomFormSelect from "@/components/custom/select/CustomFormSelect";

const Departments = ({ departments }) => {
    return (
        <>
            <CustomFormSelect
                label={`Department`}
                name={`department`}
                selectName={'department'}
                data={departments}
                valueKey="id"
                labelKey="name"
            />
        </>
    );
};

export default Departments;
