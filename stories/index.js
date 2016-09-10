import React, { Component } from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Prezo, Slide } from '../src/index';

class MyPresentation extends Component {
    render() {
        return (
            <Prezo>
                <Slide type="title">My awesome presentation</Slide>
                <Slide type="subtitle">Created in less than 1 minutes</Slide>
                <Slide>About how it's easy to build presentations</Slide>
            </Prezo>
        );
    }
}

storiesOf('Prezo', module)
    .add('From README.md', () => (
        <MyPresentation />
    ))
    .add('default', () => (
        <Prezo>
            <Slide type="title">Slide type = "title"</Slide>
            <Slide type="subtitle">Slide type = "subtitle"</Slide>
            <Slide>Slide for content</Slide>
        </Prezo>
    ))
    .add('no arrows', () => (
        <Prezo showArrows={ false }>
            <Slide type="title">Slide type = "title"</Slide>

            <Slide type="subtitle">Slide type = "subtitle"</Slide>

            <Slide>Slide for content</Slide>
        </Prezo>
    ))
    .add('no indicators (circles)', () => (
        <Prezo showIndicators={ false }>
            <Slide type="title">Slide type = "title"</Slide>

            <Slide type="subtitle">Slide type = "subtitle"</Slide>

            <Slide>Slide for content</Slide>
        </Prezo>
    ))
    .add('show # of total', () => (
        <Prezo showPositionXofTotal={ true }>
            <Slide type="title">Slide type = "title"</Slide>

            <Slide type="subtitle">Slide type = "subtitle"</Slide>

            <Slide>Slide for content</Slide>
        </Prezo>
    ))
    .add('Demo', () => (
        <Prezo>
            <Slide type="title">Slide type = "title"</Slide>

            <Slide type="subtitle">Slide type = "subtitle"</Slide>

            <Slide>Slide for content</Slide>

            <Slide><img src="assets/meme.png" /></Slide>

            <Slide type="primary">
                <h1>Slide type = "primary"</h1>
                <p>Render any content</p>
            </Slide>

            <Slide type="secondary">
                <h2>Slide type = "primary"</h2>
                <p>Render any content</p>
            </Slide>

            <Slide type="secondary" multiColumns>
                <h2>Multi columns</h2>
                <p>Render content in 2 columns</p>
            </Slide>

            <Slide multiColumns>
                <h2>Multi columns</h2>
                <p>Render content in 3 columns</p>
                <p>Just create different html nodes</p>
            </Slide>

            <Slide multiColumns>
                <h2>Multi columns</h2>
                <img src="assets/meme.png" />
            </Slide>

            <Slide multiColumns>
                <img src="assets/meme.png" />
                <img src="assets/meme.png" />
                <img src="assets/meme.png" />
            </Slide>

            <Slide multiColumns>
                <img src="assets/meme.png" />
                <img src="assets/meme.png" />
                <img src="assets/meme.png" />
                <img src="assets/meme.png" />
                <img src="assets/meme.png" />
                <img src="assets/meme.png" />
            </Slide>

            <Slide>
                <img src="assets/meme.png" />
                <img src="assets/meme.png" />
            </Slide>

            <Slide type="title">
                Support for videos
            </Slide>

            <Slide>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/n0F6hSpxaFc" />
            </Slide>

            <Slide type="subtitle">
                Also on columns
            </Slide>

            <Slide multiColumns>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/n0F6hSpxaFc" />
                <iframe width="560" height="315" src="https://player.vimeo.com/video/105955605?title=0&byline=0&portrait=0" />
            </Slide>

            <Slide type="primary">
                <h1>Thanks!</h1>
            </Slide>
        </Prezo>
    ));

storiesOf('Slides', module)
    .add('Primary', () => (
        <Prezo showIndicators={ false } showArrows={ false }>
            <Slide type="primary"><h1>Slide type = "Primary"</h1></Slide>
        </Prezo>
    ))
    .add('Secondary', () => (
        <Prezo showIndicators={ false } showArrows={ false }>
            <Slide type="secondary"><h2>Slide type = "Secondary"</h2></Slide>
        </Prezo>
    ))
    .add('Content', () => (
        <Prezo showIndicators={ false } showArrows={ false }>
            <Slide>
                <h1>Slide type = "Content"</h1>
                <p>Content is default type</p>
                <p>So you can omit <strong>it</strong></p>
            </Slide>
        </Prezo>
    ))
    .add('Content with just a text node', () => (
        <Prezo showIndicators={ false } showArrows={ false }>
            <Slide>Content doesn't need a tag surrounding it when it's the only child in the slide</Slide>
        </Prezo>
    ))
    .add('Title', () => (
        <Prezo showIndicators={ false } showArrows={ false }>
            <Slide type="title">Slide type = "title" (uses h1 in primary)</Slide>
        </Prezo>
    ))
    .add('SubTitle', () => (
        <Prezo showIndicators={ false } showArrows={ false }>
            <Slide type="subtitle">Slide type = "subtitle" (uses h2 in secondary)</Slide>
        </Prezo>
    ))
    .add('Multi columns', () => (
        <Prezo showIndicators={ false } showArrows={ false }>
            <Slide multiColumns>
                <h2>Multi columns</h2>
                <p>Render content in 3 columns</p>
                <p>Just create different html nodes</p>
            </Slide>
        </Prezo>
    ))
    .add('Multi columns with images', () => (
        <Prezo showIndicators={ false } showArrows={ false }>
            <Slide multiColumns>
                <img src="assets/meme.png" />
                <img src="assets/meme.png" />
            </Slide>
        </Prezo>
    ))
    .add('Multi columns with images and text', () => (
        <Prezo showIndicators={ false } showArrows={ false }>
            <Slide multiColumns>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the <strong>1500s</strong>, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <img src="assets/meme.png" />
            </Slide>
        </Prezo>
    ))
    .add('Videos', () => (
        <Prezo showIndicators={ false } showArrows={ false }>
            <Slide>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/n0F6hSpxaFc" />
            </Slide>
        </Prezo>
    ));
