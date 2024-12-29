import { useState } from "react";
import Select from "react-select";

export default function SelectTags() {

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");
    const [selectedTags, setSelectedTags] = useState([]);

    const handleAddTag = () => {
        if (newTag.trim()) {
            const newOption = { value: newTag, label: newTag };
            setTags((prev) => [...prev, newOption]);
            setSelectedTags((prev) => [...prev, newOption]);
            setNewTag("");
        }
    };

    return (
        <div className="d-flex align-items-center gap-4">
            <Select
                value={selectedTags}
                onChange={(selected) => setSelectedTags(selected)}
                isMulti
                name="tags"
                options={tags}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder="Select or add tags"
            />
            <input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                placeholder="Add new"
                style={{ width: "150px", padding: "5px" }}
            />
            <button
                type="button"
                onClick={handleAddTag}
                className="theme-btn btn-style-one"
            >
                Add
            </button>
        </div>
    )
}
