export const formatDate = (dateString, showDay = false, showYear = true, showMonth = true) => {
    if (!dateString) return "";

    const options = {};
    if (showDay) options.day = "2-digit";
    if (showMonth) options.month = "short";
    if (showYear) options.year = "numeric";

    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", options).format(date);
};
