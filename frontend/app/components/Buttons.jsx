export function ButtonPrimary({ children, onButtonClick, disabled = false }) {
    return (
      <button onClick={disabled ? null : onButtonClick} className={`gap-2 inline-flex items-center rounded-md ${disabled ? 'bg-gray-400' : 'bg-white'} px-3 py-2 text-sm font-semibold text-black shadow-sm ${disabled ? '' : 'hover:bg-gray-300'} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}>
        { children }
      </button>
    )
}

export function ButtonSecondary({ children, onButtonClick, disabled = false }) {
    return (
      <button onClick={disabled ? null : onButtonClick} className={`gap-2 inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold ${disabled ? 'text-gray-700' : 'text-white'} shadow-sm ${disabled ? '' : 'hover:bg-gray-900 hover:outline hover:outline-1 hover:outline-gray-800'} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600`}>
        { children }
      </button>
    )
}