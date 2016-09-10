import React, { PropTypes, Component } from 'react';

export default class Slide extends Component {
    static propTypes = {
        type: PropTypes.oneOf(['primary', 'secondary', 'content', 'title', 'subtitle']),
        multiColumns: PropTypes.bool,
        customType: PropTypes.string,
        className: PropTypes.string
    };

    static defaultProps = {
        type: 'content',
        multiColumns: false,
        customType: '',
        className: ''
    };

    renderTitle() {
        return <h1>{ this.props.children }</h1>;
    }

    renderSubTitle() {
        return <h2>{ this.props.children }</h2>;
    }

    renderContent() {
        const { children } = this.props;

        if (React.Children.count(children) !== 1) {
            return children;
        }

        return <p>{ this.props.children }</p>;
    }

    render() {
        const { className, children, customType, multiColumns } = this.props;
        let { type } = this.props;

        let content = children;

        if (type === 'title') {
            content = this.renderTitle();
            type = 'primary';
        } else if (type === 'subtitle') {
            content = this.renderSubTitle();
            type = 'secondary';
        } else if (type === 'content') {

            content = this.renderContent();
        }

        return (
            <div className={`prezo-slide ${ className } ${ type } ${ customType } ${ multiColumns ? 'multi-columns' : ''}`}>
                { content }
            </div>
        );
    }
};
