import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://linkedin.com/in/connormullins/" target="_blank" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        <li><a href="https://github.com/connorpmullins" target="_blank" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="http://thelastpaladin.connorpmullins.me/" target="_blank" className="icon fa-gamepad"><span className="label">The Last Paladin</span></a></li>
                        <li><a href="mailto:connorpmullins@gmail.com" target="_blank" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>,
                </div>
            </div>
        )
    }
}

export default Footer
