import React, { useEffect } from 'react'

export default () => {
    useEffect(() => {
        document.addEventListener('scroll', _ => document.getElementById('logo').style.setProperty('--v-adjust', window.scrollY + 'px'))
    })
    
}