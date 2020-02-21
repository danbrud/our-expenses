import React from 'react'

function NotFound() {
    return (
        <div>
            <p style={{ textAlign: 'center', marginTop: '100px' }}><img src="/logo_transparent.png" width="100px" height="100px" /></p>
            <h2 style={{ textAlign: 'center' }} onClick={() => window.location = '/'}>אוי לא. אנחנו אבודים קליק פה</h2> 
        </div>
    )
}

export default NotFound