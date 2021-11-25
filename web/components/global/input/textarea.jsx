export default function Textarea({input, setInput, type, label = "", name, placeholder = "", autoComplete="off", className="", required="false" }) {
    return (
        <div className={className}>
            <label className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <textarea
                type={type}
                name={name}
                value={input}
                rows={4}
                onChange={(e) => setInput(e.target.value, name)}
                autoComplete={autoComplete}
                placeholder={placeholder}
                required={required}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
            />
        </div>
    )
}