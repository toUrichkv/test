import './contacts.css';
import map from '../../assets/img/карта.png'
function Contacts() {

    return (
        <>
            <div className="contacts">
                <img src={map} alt="" />
                <h3>Contacts</h3>
                <ul>
                    <li>Phone : 88005553535</li>
                    <li>WhatsApp : 88005553535</li>
                    <li>Telegram : 88005553535</li>
                    <li>Instagram : @test_test123</li>
                </ul>
                <ul>
                    <li>CaliRides LLC - DBA Boosted USA</li>
                    <li>1281 Andersen Drive Ste. K</li>
                </ul>
            </div>
        </>
    )
}
export default Contacts