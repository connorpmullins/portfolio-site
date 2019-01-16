import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Lightbox from 'react-images';

class Gallery extends Component {
    constructor () {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
            imageIndex: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.gotoImage = this.gotoImage.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
    }
    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            imageIndex: 0,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            imageIndex: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            imageIndex: this.state.imageIndex - 1,
        });
    }
    gotoNext () {
        this.setState({
            imageIndex: this.state.imageIndex + 1,
        });
    }
    gotoImage (index) {
        this.setState({
            currentImage: index,
            imageIndex: 0,
        });
    }
    handleClickImage () {
        console.log("hi@", this.state.imageIndex, this.props.images[this.state.currentImage].src.length - 1);
        if (this.state.imageIndex === this.props.images[this.state.currentImage].src.length - 1) return;

        this.gotoNext();
    }
    renderGallery () {
        const { images } = this.props;
        console.log(images, this.props);
        if (!images) return;

        const gallery = images.map((obj, i) => {
            return (
                <article className="6u 12u$(xsmall) work-item" key={i}>
                    <a
                        className="image fit thumb"
                        href={obj.src}
                        onClick={(e) => this.openLightbox(i, e)}
                    >
                        <img src={obj.thumbnail} alt=""/>
                    </a>

                    <h3>{obj.caption}</h3>
                    <p>{obj.description}</p>
                    <a href={obj.link}>Link</a>
                </article>
            );
        });

        return (
            <div className="row">
                {gallery}
            </div>
        );
    }
    render () {
        return (
            <div>
                {this.renderGallery()}
                <Lightbox
                    currentImage={this.state.imageIndex}
                    images={this.props.images[this.state.currentImage].src}
                    isOpen={this.state.lightboxIsOpen}
                    onClickImage={this.handleClickImage}
                    onClickNext={this.gotoNext}
                    onClickPrev={this.gotoPrevious}
                    onClickThumbnail={this.gotoImage}
                    onClose={this.closeLightbox}
                />
            </div>
        );
    }
}

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
    images: PropTypes.array
};

export default Gallery;