import React from 'react'

function ComingSoon() {
    return (
        <div>
            <p style={{ textAlign: 'center', marginTop: '100px' }}><img src="/logo_transparent.png" alt='logo' width="100px" height="100px" /></p>
            <h2 style={{ textAlign: 'center' }} onClick={() => window.location = '/'}>מגיע בקרוב... קליק פה</h2>
        </div>
    )
}

export default ComingSoon