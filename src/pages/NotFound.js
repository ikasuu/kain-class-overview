import React from 'react';
import { Container } from 'react-bootstrap';

function NotFound() {
    return (
        <div>
            <Container>
                <h3>Looks like there was an error in the URL you entered,
                the page you are looking for may be moved or deleted.</h3>
            </Container>
        </div>
    )
}

export default NotFound