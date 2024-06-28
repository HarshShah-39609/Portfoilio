import React, { useState, CSSProperties } from 'react';
import resumeData from "../resumeData";

const buttonStyles: CSSProperties = {
    color: 'white',
    border: 'none',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '4px',
};

const Portfolio: React.FC = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const openModal = (imgurl: string) => {
        setSelectedImage(imgurl);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setModalIsOpen(false);
    };

    return (
        <section id="portfolio">
            <div className="row">
                <div className="twelve columns collapsed">
                    <div style={{display:'flex' , justifyContent:'space-between'}}>
                        <h1 style={{color:'black',fontSize:'18px'}}>Check Out Some of My Works.</h1>
                        <a href="https://drive.google.com/drive/folders/1wAP_ek_vNBMDVcUsSD6QHYJedAwnTOCS?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <button style={buttonStyles}>View More</button>
                        </a>
                    </div>
                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf" style={{marginTop:'20px'}}>
                        {
                            resumeData.portfolio && resumeData.portfolio.map((item, index) => {
                                return (
                                    <div key={index} className="columns portfolio-item">
                                        <div className="item-wrap">
                                            <a href="#modal-01" onClick={(e) => { e.preventDefault(); openModal(item.imgurl); }}>
                                                <img src={`${item.imgurl}`} className="item-img" style={{ height: '90%', width: '90%' }} />
                                            </a>
                                            <h5 style={{ color: 'black' }}>{item.name}</h5>
                                            <p style={{ color: 'black' }}>{item.description}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            {modalIsOpen && (
                <div className="modal" onClick={closeModal} style={modalStyles.overlay as CSSProperties}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()} style={modalStyles.content as CSSProperties}>
                        <span className="close-button" onClick={closeModal} style={modalStyles.closeButton as CSSProperties}>&times;</span>
                        <img src={selectedImage || ''} alt="Full View" style={{ width: '100%' }} />
                    </div>
                </div>
            )}
        </section>
    );
};

const modalStyles = {
    overlay: {
        position: 'fixed' as 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
    },
    content: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '4px',
        maxWidth: '90%',
        maxHeight: '90%',
        overflow: 'auto',
    },
    closeButton: {
        position: 'absolute' as 'absolute',
        top: '10px',
        right: '10px',
        fontSize: '24px',
        cursor: 'pointer'
    }
};

export default Portfolio;
