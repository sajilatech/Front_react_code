import plusSlides from './components/NextButton;
class NextButton extends React.Component {
    constructor() {
        super();
        this.onClick = this.handleClick.bind(this);
    }

    handleClick (event) {
        script.plusSlides(1); // I don't know how to do this properly...
    }

    render() {
        return (
            <a className="next" onClick={this.onClick}>
                &#10095;
            </a>
        );
    } 

export default NextButton
