function Footer() {

    const sections = [
        {
            title: 'Buy and Learn More',
            links: ['iPhone 17 Pro', 'iPhone 17 Pro Max', 'Compare Models', 'Accessories']
        },
        {
            title: 'Specifications',
            links: ['General Characteristics', 'Camera', 'Battery', 'Display']
        },
        {
            title: 'Support',
            links: ['iPhone Support', 'AppleCare+', 'iOS 19', 'Contact']
        },
        {
            title: 'Apple',
            links: ['About Apple', 'Newsroom', 'Privacy', 'Careers']
        },
    ]

    const buttonLinks = ['Privacy Policy', 'Terms of Use', 'Sales']

    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {sections.map((section, index) => (
                        <div key={index}>
                            <h4 className="font-semibold mb-4">{section.title}</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a href="#" className="hover:text-white cursor-pointer">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-gray-800 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-md text-gray-300">Copyright © Apple Inc. All rights reserved.</p>
                        <div className="flex gap-6 text-sm to-gray-400">
                            {buttonLinks.map ((buttonLink, buttonLinkIndex) => (
                                <a href="#" key={buttonLinkIndex} className="hover:text-white transition">
                                    {buttonLink}
                                </a>
                            ))}
                        </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-6">Website created for educational purposes.</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer;