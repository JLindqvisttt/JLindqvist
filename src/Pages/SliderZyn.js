import Carousel from 'react-bootstrap/Carousel';

function SliderZyn() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('../images/ZYN/image1.png')}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('../images/ZYN/image2.png')}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('../images/ZYN/image3.png')}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('../images/ZYN/image4.png')}
                    alt="Four slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('../images/ZYN/image5.png')}
                    alt="Five slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('../images/ZYN/image6.png')}
                    alt="Six slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('../images/ZYN/image7.png')}
                    alt="Seven slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('../images/ZYN/image8.png')}
                    alt="Eighth slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default SliderZyn;