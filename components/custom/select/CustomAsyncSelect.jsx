import AsyncSelect from "react-select/async";

export default function CustomAsyncSelect({
    data,
    selectName,
    setValue,
    register,
    errors,
    defaultValue, // Accept default value as a prop
}) {
    const loadOptions = async (inputValue) => {
        return data
            .filter((ele) =>
                ele.name.toLowerCase().includes(inputValue.toLowerCase())
            )
            .map((ele) => ({ label: ele.name, value: ele.id }));
    };

    const handleSelectChange = (selectedOption) => {
        setValue(selectName, selectedOption ? selectedOption : null);

        if (register) {
            register(selectName).onChange({
                target: {
                    name: selectName,
                    value: selectedOption ? selectedOption.value : null,
                },
            });
        }
    };
    
    const transformedDefaultValue = defaultValue
        ? { label: defaultValue.name, value: defaultValue.id }
        : null;

    return (
        <>
            {errors && <p className="text-red">{errors.message}</p>}
            <AsyncSelect
                cacheOptions
                defaultOptions
                loadOptions={loadOptions}
                onChange={handleSelectChange}
                placeholder={`Select a ${selectName}`}
                defaultValue={transformedDefaultValue}
            />
        </>
    );
}
