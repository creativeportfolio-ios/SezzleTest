import * as React from "react";
import Layout from "SezzleTest/App/Components/Layout";
import Button from "SezzleTest/App/Components/Button";
import Text from "SezzleTest/App/Components/Text";

function getRandom() {
    return Math.floor(Math.random() * 100) + 1 ;
}

class DashBoard extends React.PureComponent<{}> {

    constructor(props) {
        super(props);
        this.generateReandomNumberButtonClick = this.generateReandomNumberButtonClick.bind(this);
        this.state = { random: getRandom() }
    }

    generateReandomNumberButtonClick = () => {
        this.setState({ random: getRandom() });
    }

	render(): React.Node {  
        return ( 
            <Layout.Center>
                 <Text
                    top="16p"
                    weight="light"
                    size="large"
                    color="white"
                    >{"Amount : $" + this.state.random}</Text>

                <Text
                    top="6p"
                    weight="light"
                    size="large"
                    color="white"
                    >{"4 interest-free installment payments"}</Text>

                <Text
                    top="6p"
                    weight="light"
                    size="large"
                    color="white"
                    >{"Amount : $"+(this.state.random/4)}</Text>

                <Button
                    above="16p"
                    spacing="8p"
                    theme="primary"
                    onPress={this.generateReandomNumberButtonClick.bind(this)}>Reandom Number</Button> 

            </Layout.Center>
        )
    }
}

export default DashBoard;