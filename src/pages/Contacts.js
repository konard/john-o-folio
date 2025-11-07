const Contacts = () => {
    return (
    <main className="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Bangkok, Thailand</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Phone</h2>
                        <p><a href="tel:+66895453899">+66895453899</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram</h2>
                        <p><a href="https://t.me/johnmaxida">@johnmaxida</a></p>
                    </li>
					<li className="content-list__item">
                        <h2 className="title-2">Website</h2>
                        <p><a href="https://dewiar.com/bwm/110626">Сайт-визитка</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:JohnMaxiTesla@proton.me">JohnMaxiTesla@proton.me</a></p>
                    </li>
                </ul>
        </div>
    </main>
	)
};
export default Contacts;





