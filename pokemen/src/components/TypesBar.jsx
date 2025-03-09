import { useEffect, useState } from 'react';
import { getTypeIconSrc } from '../utils/pokemon-helper';

const TypesBar = ({ toggleType }) => {
    const [types, setTypes] = useState([]);
    const API_END_POINT = `https://pokeapi.co/api/v2/type/`;

    const fetchTypes = async () => {
        const res = await fetch(API_END_POINT);
        const data = await res.json();
        const filetedname = data.results.filter(({ name }) => name !== 'unknown' && name !== 'shadow' && name !== 'stellar');

        setTypes(filetedname);
    };

    useEffect(() => {
        fetchTypes();
    }, []);

    return (
        <nav className="types-bar">
            {types.map(({ name }) => {
                const typeImg = getTypeIconSrc(name);

                return (
                    <a key={name} className={name} onClick={() => toggleType(name)}>
                        <img src={typeImg} alt={name} />
                    </a>
                );
            })}
        </nav>
    );
};

export default TypesBar;
