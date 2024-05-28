import React, { useState } from 'react';

function HomeWhoWeHelp() {
    const [selectedCategory, setSelectedCategory] = useState('Fundacjom');
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 3;

    const data = {
        Fundacjom: [
            { id: 1, name: 'Fundacja “Dbam o Zdrowie”', description: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.', additionalText: 'Egestas, sed, tempus' },
            { id: 2, name: 'Fundacja “Dla dzieci”', description: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.', additionalText: 'Ut, aliquam, purus, sit, amet' },
            { id: 3, name: 'Fundacja “Bez domu”', description: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.', additionalText: 'Mi, quis, hendrerit, dolor' },
            { id: 4, name: 'Fundacja “Lorem, ipsum”', description: 'Cel i misja: Lorem ipsum dolor, sit amet consectetur adipisicing elit.', additionalText: 'Egestas, sed, tempus' },
            { id: 5, name: 'Fundacja “Lorem, ipsum”', description: 'Cel i misja: Lorem ipsum dolor, sit amet consectetur adipisicing elit.', additionalText: 'Ut, aliquam, purus, sit, amet' },
            { id: 6, name: 'Fundacja “Lorem, ipsum”', description: 'Cel i misja: Lorem ipsum dolor, sit amet consectetur adipisicing elit.', additionalText: 'Mi, quis, hendrerit, dolor' },
            { id: 7, name: 'Fundacja “Lorem, ipsum”', description: 'Cel i misja: Lorem ipsum dolor, sit amet consectetur adipisicing elit.', additionalText: 'Egestas, sed, tempus' },
            { id: 8, name: 'Fundacja “Lorem, ipsum”', description: 'Cel i misja: Lorem ipsum dolor, sit amet consectetur adipisicing elit.', additionalText: 'Ut, aliquam, purus, sit, amet' },
            { id: 9, name: 'Fundacja “Lorem, ipsum”', description: 'Cel i misja: Lorem ipsum dolor, sit amet consectetur adipisicing elit.', additionalText: 'Mi, quis, hendrerit, dolor' },
        ],
        'Organizacjom pozarządowym': [
            { id: 1, name: 'Organizacja “Lorem, ipsum 1”', description: 'Quis varius quam quisque id diam vel quam elementum pulvinar.', additionalText: 'Egestas, sed, tempus' },
            { id: 2, name: 'Organizacja “Lorem, ipsum 2”', description: 'Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.', additionalText: 'Ut, aliquam, purus, sit, amet' },
            { id: 3, name: 'Organizacja “Lorem, ipsum 3”', description: 'Scelerisque in dictum non consectetur a erat nam.', additionalText: 'Mi, quis, hendrerit, dolor' },
            { id: 4, name: 'Organizacja “Lorem, ipsum 4”', description: 'Quis varius quam quisque id diam vel quam elementum pulvinar.', additionalText: 'Egestas, sed, tempus' },
            { id: 5, name: 'Organizacja “Lorem, ipsum 5”', description: 'Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.', additionalText: 'Ut, aliquam, purus, sit, amet' },
            { id: 6, name: 'Organizacja “Lorem, ipsum 6”', description: 'Scelerisque in dictum non consectetur a erat nam.', additionalText: 'Mi, quis, hendrerit, dolor' },
        ],
        'Lokalnym zbiórkom': [
            { id: 1, name: 'Zbiórka “Lorem, ipsum 1”', description: 'Quis varius quam quisque id diam vel quam elementum pulvinar.', additionalText: 'Egestas, sed, tempus' },
            { id: 2, name: 'Zbiórka “Lorem, ipsum 2”', description: 'Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.', additionalText: 'Ut, aliquam, purus, sit, amet' },
            { id: 3, name: 'Zbiórka “Lorem, ipsum 3”', description: 'Scelerisque in dictum non consectetur a erat nam.', additionalText: 'Mi, quis, hendrerit, dolor' },
        ],
    };

    const descriptions = {
        Fundacjom: "W naszej bazie znajdziesz liste zweryfikowanych Fundacji, z którymi wspólpracujemy. Mozesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
        'Organizacjom pozarządowym': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        'Lokalnym zbiórkom': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const renderItems = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const itemsToRender = data[selectedCategory].slice(startIndex, endIndex);
    
        return itemsToRender.map(({ id, name, description, additionalText }, index) => (
            <div key={id} className="foundation-item" style={index % 3 === 2 ? { borderBottom: '1px solid white' } : null}>
                <div className="item-info">
                    <h3 className="item-name">{name}</h3>
                    <p className="item-description">{description}</p>
                </div>
                
                <div className="item-additional-text">
                    <p>{additionalText}</p>
                </div>
            </div>
        ));
    };
    

    const totalPages = Math.ceil(data[selectedCategory].length / itemsPerPage);

    return (
        <div id='foundation' className='foundation'>
            <div className="foundation-text">
                <h1>Komu pomagamy?</h1>
                <img src="../src/assets/Decoration.svg" alt="decoration" />
            </div>

            <div className="foundation-buttons">
                {Object.keys(data).map(category => (
                    <button
                        key={category}
                        className={`foundation-btn ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => handleCategoryChange(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="category-description">
                <p>{descriptions[selectedCategory]}</p>
            </div>

            <div className="items-container">
                {renderItems()}
            </div>

            {totalPages > 1 && (
                <div className="foundation-pagination">
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default HomeWhoWeHelp;
