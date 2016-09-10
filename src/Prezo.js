import React, { PropTypes, Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default class Prezo extends Component {
    static propTypes = {
        showArrows: PropTypes.bool,
        showIndicators: PropTypes.bool,
        showPositionXofTotal: PropTypes.bool,
        className: PropTypes.string,
        useDefaultStyles: PropTypes.bool
    };

    static defaultProps = {
        showArrows: true,
        showIndicators: true,
        showPositionXofTotal: false,
        useDefaultStyles: true,
        className: ''
    };

    componentWillMount() {
        if (this.props.useDefaultStyles) {
            require('./Prezo.scss');
        }
    }

    render() {
        const { showArrows, showIndicators, showPositionXofTotal, className } = this.props;

        const carouselProps = {
            showArrows,
            showIndicators,
            showStatus: showPositionXofTotal,
            className: `Prezo ${className}`
        };

        return (
            <Carousel showThumbs={ false } useKeyboardArrows {...carouselProps}>
                { this.props.children }
            </Carousel>
        );
    }
};
