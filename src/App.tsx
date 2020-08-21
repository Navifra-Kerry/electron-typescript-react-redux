import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.scss';
import TitleBar from './components/shell/titleBar';
import { KeyboardManager } from './components/common/keyboardManager/keyboardManager';
import { HelpMenu } from './components/shell/helpMenu';
import { connect, ConnectedProps } from 'react-redux';
import * as ExampleActions from './redux/actions/exampleActions';
import { bindActionCreators } from 'redux';

function mapStateToProps(state) {
    return {
        Message: state.example.Message,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        ExampleAction: bindActionCreators(ExampleActions, dispatch),
    };
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

class App extends React.Component<PropsFromRedux> {
    constructor(props) {
        super(props);
        this.props.ExampleAction.initialize();
    }

    componentDidMount() {}

    render() {
        const platform = global && global.process ? global.process.platform : 'web';

        return (
            <Fragment>
                <KeyboardManager>
                    <div className={`app-shell platform-${platform}`}>
                        <TitleBar title={''}>
                            <div className="app-help-menu-icon">
                                <HelpMenu />
                            </div>
                        </TitleBar>
                        <div className="app-main">
                            <img src={logo} className="logo" alt="logo" />
                            <h2>{this.props.Message}</h2>
                        </div>
                    </div>
                </KeyboardManager>
            </Fragment>
        );
    }
}

export default connector(App);
