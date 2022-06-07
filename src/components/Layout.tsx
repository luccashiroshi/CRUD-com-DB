import Titulo from "./Titulo"

interface LayoutProps {
    titulo: string
    children: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`
            flex flex-col w-2/3
            bg-gradient-to-br from-gray-800 to-gray-600 text-white rounded-sm
        `}>
            <Titulo>{props.titulo}</Titulo>
            <div className="p-6">
                {props.children}
            </div>
        </div>
    )
}