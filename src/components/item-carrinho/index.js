import './style.scss';

function ItemCarrinho(props) {
    return (
        <div className="item">
            <img src="assets/images/skins/awp.png" alt="Skin da AWP" />
            <span>{props.name}</span>
            <div className="contador">
                <img src="assets/images/icons/plus.png" alt="Icone de +" />
                <span>1</span>
                <img src="assets/images/icons/less.png" alt="Icone de -" />
            </div>
            <span>{props.price}</span>
        </div>
    )

}

export default ItemCarrinho;