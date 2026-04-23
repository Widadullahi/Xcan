import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const publicUrl = process.env.PUBLIC_URL || '';

const videos = [
  {
    id: 'video-1',
    src: `${publicUrl}/videos/video-1.mp4`,
    title: 'XCAN In Action',
    description: 'A closer look at our truck service and engineering work.'
  },
  {
    id: 'video-2',
    src: `${publicUrl}/videos/video-2.mp4`,
    title: 'Truck Support Highlights',
    description: 'See more of our trucks, field activity, and service delivery.'
  }
];

const VideoShowcaseSection = () => {
  return (
    <section
      id="videos"
      className="section-padding"
      style={{
        background:
          'linear-gradient(180deg, rgba(6, 27, 49, 0.04) 0%, rgba(0, 86, 179, 0.08) 100%)'
      }}
    >
      <Container>
        <div className="section-title">
          <h2>WATCH XCAN IN ACTION</h2>
          <p className="section-subtitle">
            Two short videos placed right after services so visitors can see the work before browsing the gallery.
          </p>
        </div>

        <Row className="g-4">
          {videos.map((video) => (
            <Col lg={6} key={video.id}>
              <Card
                className="h-100 border-0 shadow-sm"
                style={{ borderRadius: '22px', overflow: 'hidden' }}
              >
                <div style={{ background: '#071a2d', padding: '14px' }}>
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    style={{
                      width: '100%',
                      display: 'block',
                      borderRadius: '16px',
                      maxHeight: '460px',
                      backgroundColor: '#000'
                    }}
                    className="video-showcase-player"
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <Card.Body className="p-4">
                  <Card.Title className="mb-2">{video.title}</Card.Title>
                  <Card.Text className="text-muted mb-0">{video.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default VideoShowcaseSection;
