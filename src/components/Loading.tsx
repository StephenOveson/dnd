

const Loading: React.FC<{ loading: boolean }> = ({ loading, children }) => {
    return loading ? (
    <div style={{ borderBottomColor: "#ffc815", borderTopColor: "#ffc815" }} 
    className="flex m-auto relative top-40 animate-spin border-grey w-52 h-52 rounded-full border-8 border-solid">
    </div>) : (
        <>{children}</>
    )
}

export default Loading;