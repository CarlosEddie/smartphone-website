function Intro() {

    const specs = [
        {value: '6.3"', label: 'Display Super Retina XDR', color: 'text-blue-600'},
        {value: 'A18 Pro', label: 'Faster chip', color: 'text-orange-500'},
        {value: '48MP', label: 'Camera System', color: 'text-blue-600'},
        {value: '29h', label: 'battery', color: 'text-orange-500'},
    ];

    return (
        <section className="bg-black py-20 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-6xl md:text-8xl font-bold mb-6">smartphone</h1>
                <p className="text-2xl md:text-4xl mb-4 text-gradient font-bold">Titanium. So strong. So light. So powerful.</p>
                <p className="text-lg md:text-xl to-gray-300 mb-10 max-w-3xl mx-auto">The most refined design we've ever created. Aerospace-grade titanium. Chip 18 Pro. Revolutionary pro camera system.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/50 cursor-pointer">Buy now</button>
                <button className="border-2 border-white rounded-full hover:bg-white hover:text-black px-8 py-4 text-lg font-medium duration-300 hover:scale-105 cursor-pointer">Learn more</button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-auto max-w-5xl">
                {specs.map((spec, index) => (
                    <div key={index} className="bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300 hover:scale-105 cursor-pointer">
                        <p className={`text-3xl font-bold ${spec.color} `}>{spec.value}</p>
                        <p>{spec.label}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Intro;