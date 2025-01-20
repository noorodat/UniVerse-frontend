'use client'

import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../../features/filter/filterSlice";

const FilterDepartments = ({ departments }) => {
    const dispatch = useDispatch();
    const { category } = useSelector((state) => state.filter.jobList);

    // Category/Department change handler
    const departmentHandler = (e) => {
        dispatch(addCategory(e.target.value));
    };

    return (
        <>
            <select
                className="form-select"
                value={category}
                onChange={departmentHandler}
            >
                <option value="">Choose Department</option>
                {departments?.map((department) => (
                    <option key={department.id} value={department.name.toLowerCase()}>
                        {department.name}
                    </option>
                ))}
            </select>
        </>
    );
};

export default FilterDepartments;