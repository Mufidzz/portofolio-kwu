import React from 'react';
import {Col, Container, Row} from 'react-bootstrap/esm'
import headingImage from '../static/Tech.png'

class Index extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Container className="banner">
                    <Row>
                        <Col sm={7} className="text-banner">
                            <div>
                                <h1 className="title">Solusi cerdas untuk<br/> semua masalah anda.</h1>
                                <p className="paragraph">
                                    Teknologi hadir dengan perannya yang sangat memudahkan<br/>
                                    pekerjaan manusia. Dengan teknologi, masalah dapat diselesaikan<br/>
                                    dengan tepat dan efisien. OFLITE percaya bahwa di perkembangan<br/>
                                    dunia teknologi yang sudah sejauh ini, semua jenis masalah dapat<br/>
                                    diselesaikan dengan sebuah sistem. OFLITE menyediakan jasa pembuatan<br/>
                                    sistem berupa aplikasi untuk permasalahan harian<br/>
                                    ataupun pekerjaan anda.</p>
                            </div>
                        </Col>
                        <Col sm={5} className="flex flex-center">
                            <img
                                src={headingImage}
                                width="100%"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Index;
