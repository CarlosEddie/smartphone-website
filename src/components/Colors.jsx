import { useState } from "react";

function Colors() {
    const colors = [
        { id: 'blue', name: 'Blue Titanium', image: '../../public/img/iphone-blue.jpg', colorClass: 'bg-blue-500' },
        { id: 'silver', name: 'Natural Titanium', image: '../../public/img/iphone-silver.jpg', colorClass: 'bg-gray-300' },
        { id: 'orange', name: 'Orange Titanium', image: '../../public/img/iphone-orange.jpg', colorClass: 'bg-orange-500' },
    ];

    const models = [
        { name: 'Pro Max', screen: '6.9 inches', storage: '256GB, 512GB or 1TB', battery: '33h of video', weight: '221g' },
        { name: 'Max', screen: '6.3 inches', storage: '128GB, 256GB or 512GB ', battery: '29h of video', weight: '199g' },
    ];

    const [selectedColor, setSelectedColor] = useState('blue')

    return (
        <section id="colors" className="bg-black py-20 px-8">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold mb-4">Choose your color</h2>
                    <p className="text-xl text-gray-400">Four beautiful titanium finishes</p>
                </div>

                <div className="flex justify-center mb-12">
                    <div className="relative w-full max-w-3xl">
                        
                        <div className="relative flex items-center justify-center min-h-125">
                            <img src={colors.find(color => color.id === selectedColor).image} alt="iphone 17" className="max-w-full max-h-150 mx-auto" />
                        </div>

                        <div className="absolute bottom-8 left-0 right-0 text-center">
                            <div className="px-8 py-4 rounded-full backdrop-blur-md bg-black/40 inline-block">
                                <h3 className="text-2xl font-semibold">{colors.find(color => color.id === selectedColor).name}</h3>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="flex justify-center items-center gap-8">
                    {colors.map(color => (
                        <button className={`relative transition-all duration-300 cursor-pointer hover:scale-105`} key={color.id} onClick={() => setSelectedColor(color.id)}>
                            <div className={`w-16 h-16 rounded-full border-4 ${color.colorClass} ${selectedColor === color.id ? 'border-white' : 'border-gray-600'}`}></div>
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
                    {models.map((model, index) => (
                        <div key={index} className="bg-linear-to-br from-gray-900 to-transparent rounded-3xl p-8 border-gray-800">
                            <div className="text-4xl mb-4">📱</div>
                            <h3 className="text-2xl font-bold mb-3">{model.name}</h3>
                            <p className="text-gray-400 mb-4">{model.screen}</p>
                            <ul className="space-y-2 text-gray-300">
                                <li>{model.storage}</li>
                                <li>{model.battery}</li>
                                <li>{model.weight}</li>
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <button className="bg-blue-700 hover:bg-blue-800 text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 mb-8 hover:scale-105 shadow-md shadow-blue-500/50 cursor-pointer">
                        Buy now starting from $1099
                    </button>
                    <p>
                        Or 12 installments of $91,58 with no interest
                    </p>
                </div>

            </div>
        </section>
    )
}

export default Colors;