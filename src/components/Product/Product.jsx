// import { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./product.css";
import { Container } from 'react-bootstrap';

import image2 from '../../Images/wireless-01.png'
import image1 from '../../Images/phone-01.jpg';
import image3 from '../../Images/watch-05.png';
import image4 from '../../Images/double-sofa-01.png';
const Product = (props) => {

    return (

        <Container style={{ background: "#f6f9fc" }}>
            <div className='heading'>
                <h1>Top Selling Products</h1>
            </div>

            <Row className="justify-content-center">

                <Col md={2} sm={5} xs={10} key={props.id} className="product mtop">
                    <h1> <span className="discount">{props.offer}</span></h1>
                    <img loading="lazy" src={image1} alt="" />
                    <div className="product-like">
                        <label>0</label> <br />
                        <ion-icon name="heart-outline" ></ion-icon>
                    </div>
                    <div className="product-details">
                        <h3 >
                            {props.productName}
                        </h3>
                        <div className="rate">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="price">
                            <h4>{props.price}</h4>
                            <button aria-label="Add" type="submit" className="add" >
                                <ion-icon name="add"></ion-icon>
                            </button>
                        </div>
                    </div>
                </Col>
                <Col md={2} sm={5} xs={10} key={props.id} className="product mtop">
                    <h1> <span className="discount">{props.offer}</span></h1>
                    <img loading="lazy" src={image2} alt="" />
                    <div className="product-like">
                        <label>0</label> <br />
                        <ion-icon name="heart-outline" ></ion-icon>
                    </div>
                    <div className="product-details">
                        <h3 >
                            {props.productName}
                        </h3>
                        <div className="rate">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="price">
                            <h4>{props.price}</h4>
                            <button aria-label="Add" type="submit" className="add" >
                                <ion-icon name="add"></ion-icon>
                            </button>
                        </div>
                    </div>
                </Col>
                <Col md={2} sm={5} xs={10} key={props.id} className="product mtop">
                    <h1> <span className="discount">{props.offer}</span></h1>
                    <img loading="lazy" src={image3} alt="" />
                    <div className="product-like">
                        <label>0</label> <br />
                        <ion-icon name="heart-outline" ></ion-icon>
                    </div>
                    <div className="product-details">
                        <h3 >
                            {props.productName}
                        </h3>
                        <div className="rate">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="price">
                            <h4>{props.price}</h4>
                            <button aria-label="Add" type="submit" className="add" >
                                <ion-icon name="add"></ion-icon>
                            </button>
                        </div>
                    </div>
                </Col>
                <Col md={2} sm={5} xs={10} key={props.id} className="product mtop">
                    <h1> <span className="discount">{props.offer}</span></h1>
                    <img loading="lazy" src={image4} alt="" />
                    <div className="product-like">
                        <label>0</label> <br />
                        <ion-icon name="heart-outline" ></ion-icon>
                    </div>
                    <div className="product-details">
                        <h3 >
                            {props.productName}
                        </h3>
                        <div className="rate">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="price">
                            <h4>{props.price}</h4>
                            <button aria-label="Add" type="submit" className="add" >
                                <ion-icon name="add"></ion-icon>
                            </button>
                        </div>
                    </div>
                </Col>

            </Row>

        </Container >



    );
};

export default Product;



