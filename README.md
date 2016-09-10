# Prezo
> Create nice looking presentations in seconds

Prezo leverages react-responsive-carousel capabilities to create presentations.

#### Installing as a package
`npm install prezo --save`

### Prezo

#### Usage

```
import React, { Component } from 'react';
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

ReactDOM.render(<MyPresentation />, document.querySelector('.my-presentation'));
```

#### Props

| Attributes | Type | Default | Description |
| :--------- | :--: | :-----: | ----------- |
| showArrows | `boolean` | `true` | show prev and next arrows |
| showPositionXofTotal | `boolean` | `true` | show index of the current slide. i.e: (1/8) |
| showIndicators | `boolean` | `true` | show little dots at the bottom with links for changing the slide |
| useDefaultStyles | `boolean` | `true` | loads the default styles |
| className | `string` | `` | custom class name assigned to the presentation |


### Slide

#### Usage

```
<Prezo>
    <!-- Title -->
    <Slide type="title">My awesome presentation</Slide>

    <!-- Primary -->
    <Slide type="primary">
        <h1>My awesome presentation</h1>
        <p>Brief text</p>
    </Slide>
    
    <!-- Sub title -->
    <Slide type="subtitle">Created in less than 1 minutes</Slide>
    
    <!-- Secondary type -->
    <Slide type="secondary">
        <h2>My awesome intro</h2>
        <p>Brief text</p>
    </Slide>
    
    <!-- Simple content -->
    <Slide>About how it's easy to build presentations</Slide>
    
    <!-- Multi columns -->
    <Slide multiColumns>
        <h2>Multi columns</h2>
        <img src="assets/meme.png" />
    </Slide>
    
    <!-- Video -->
    <Slide>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/n0F6hSpxaFc" />
    </Slide>
</Prezo>
```

| Attributes | Type | Default | Description |
| :--------- | :--: | :-----: | ----------- |
| type | `string` | `content` | accepts: primary, secondary, content, title, subtitle |
| multiColumns | `boolean` | `true` | allows to create columns - each dom element will be one column |
| customType | `string` | `` | add your own types, each custom type should contain a class matching it's name in your own css |
| className | `string` | `` | custom class name assigned to the slide |


#### Extending the default Slides through custom styles

- Add a className to Slide
- Load your css

#### Creating my own set of Slides instead of using existent ones

- Copy the file Prezo.scss from /src folder, add your own rules there.
- Add useDefaultStyles={ false } when creating your Prezo

#### Contributing
Please, feel free to contribute. You may file an issue or submit a pull request!

##### Setting up development environment
- `git clone git@github.com:leandrowd/prezo.git`
- `npm install`
- `npm run storybook`
- Open your favourite browser on `localhost:9001`

#### TODO:
- Add support for a "code" slide (with auto code coloring)
- Add support to css animations inside slides
