export function Header({title, children}) {
    return (
        <header className="text-center">
            <h1 className="mb-3 text-2xl font-semibold">{title}</h1>
            {children}
        </header>
    )
}