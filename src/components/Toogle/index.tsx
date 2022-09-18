

import React, { useState } from 'react';

import { Container, ToggleLabel, ToggleSelector } from './Style';

const Toogle: React.FC = () => {
    const [online, setOnline] = useState(false);

    return (
        <Container>
            <ToggleLabel>Light</ToggleLabel>
            <ToggleSelector
                checked={online}
                uncheckedIcon={false}
                checkedIcon={false}
                onChange={() => setOnline(!online)}
            />
            <ToggleLabel>Dark</ToggleLabel>
        </Container>
    );
};

export default Toogle;