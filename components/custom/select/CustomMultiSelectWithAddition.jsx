import Select from "react-select";

export default function CustomMultiSelectWithAddition({
    selectName,
    elements,
    setElements,
    newElement,
    setNewElement,
    selectedElements,
    setSeletedElements,
    inputType = "input",
    btnTheme = "one",
    register,
    errors,
    setValue,
}) {
    const handleAddElement = () => {
        if (newElement.trim()) {
            const newOption = { value: newElement, label: newElement };
            const updatedSelected = [...selectedElements, newOption];
            setElements((prev) => [...prev, newOption]);
            setSeletedElements(updatedSelected);
            setValue(selectName, updatedSelected.map((option) => option.value)); // Sync with React Hook Form
            setNewElement("");
        }
    };

    const handleSelectChange = (selected) => {
        setSeletedElements(selected);
        setValue(selectName, selected ? selected.map((option) => option.value) : []); // Sync with React Hook Form
    };

    const renderInput = () => {
        const commonProps = {
            value: newElement,
            onChange: (e) => setNewElement(e.target.value),
            placeholder: "Add new",
            className: "form-control",
        };

        return inputType === "textarea" ? (
            <textarea {...commonProps} rows={3} />
        ) : (
            <input type="text" {...commonProps} />
        );
    };

    return (
        <div className={`row g-3 ${inputType === "textarea" ? "flex-column" : "align-items-center"}`}>
            {errors && <p className="text-red mt-2">{errors.message}</p>}
            <div className={inputType === "textarea" ? "col-12" : "col-12 col-md"}>
                <Select
                    value={selectedElements}
                    onChange={handleSelectChange}
                    isMulti
                    name={selectName}
                    options={elements}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    placeholder={`Select or add ${selectName}`}
                />
            </div>
            <div className={inputType === "textarea" ? "col-12" : "col-12 col-md-auto"}>
                {renderInput()}
            </div>
            <div className={inputType === "textarea" ? "col-12" : "col-12 col-md-auto"}>
                <button
                    type="button"
                    onClick={handleAddElement}
                    className={`theme-btn btn-style-${btnTheme} ${inputType === "textarea" ? "" : "w-100"}`}
                >
                    Add
                </button>
            </div>
        </div>
    );
}
