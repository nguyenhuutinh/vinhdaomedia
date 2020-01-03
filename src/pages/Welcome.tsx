import React, { useRef } from 'react';
import styles from './Welcome.less';
import logo from '@/assets/logo.png';
import { Link } from 'react-scroll';
import { ArrowDownOutline } from '@ant-design/icons';

import { Menu, Dropdown, Row, Col } from 'antd';

const Home: React.FC = () => {
	const refVideo = useRef();
	const menu = (
		<Menu>
			<Menu.Item>
				<a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
					1st menu item
				</a>
			</Menu.Item>
			<Menu.Item>
				<a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
					2nd menu item
				</a>
			</Menu.Item>
			<Menu.Item>
				<a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
					3rd menu item
				</a>
			</Menu.Item>
		</Menu>
	);
	return (
		<div>
			<div className={styles.header}>
				<div className={styles.logo}>
					<Link activeClass="active" to="section_0" spy={true} smooth={true} offset={0} duration={500}>
						<img src={logo} />
					</Link>
				</div>
				<div className={styles.menu}>
					<Link activeClass="active" to="section_1" spy={true} smooth={true} offset={-100} duration={500}>
						<div className={styles.menuItem}>About Us</div>
					</Link>
					<Dropdown overlay={menu}>
						<Link activeClass="active" to="section_1" spy={true} smooth={true} offset={-100} duration={500}>
							<div className={styles.menuItem}>Videography</div>
						</Link>
					</Dropdown>
					<Dropdown overlay={menu}>
						<Link activeClass="active" to="section_1" spy={true} smooth={true} offset={-100} duration={500}>
							<div className={styles.menuItem}>PHOTOGRAPHY</div>
						</Link>
					</Dropdown>
					<Link activeClass="active" to="section_1" spy={true} smooth={true} offset={-100} duration={500}>
						<div className={styles.menuItem}>Contact Us</div>
					</Link>
				</div>
			</div>
			<div style={{ position: 'absolute', top: 0 }}>
				<div>
					<video
						ref={refVideo}
						data-automation="FootageHero_heroVideo_video"
						muted
						autoPlay
						loop
						// style={{  }}
						style={{ width: '100vw' }}
					>
						<source
							src="https://ak.picdn.net/footage/assets/directors_choice/Lunar-New-Year-2019-stock-videos.webm"
							type="video/webm"
						/>
						<source
							src="https://ak.picdn.net/footage/assets/directors_choice/Lunar-New-Year-2019-stock-videos.mp4"
							type="video/mp4"
						/>
					</video>
					<div
						style={{
							width: '100%',
							height: '100%',
							position: 'absolute',
							top: 0,
							left: 0,
							backgroundColor: '#424242',
							opacity: 0.3
						}}
					/>
				</div>
				<div
					style={{
						position: 'absolute',
						top: '20%',
						left: '50%',
						width: '70vw',
						marginLeft: '-35vw',
						textAlign: 'center'
					}}
				>
					<h1 style={{ color: 'white', fontSize: '5em', lineHeight: '1em' }}>
						Give a touch of distinction to your work with captivating videos.
					</h1>
					<p style={{ color: 'white', fontSize: '2em' }}>
						Explore over 17 million royalty-free videos, with video options in stunning 4K and HD format.
					</p>
				</div>
			</div>
			<div style={{ height: '100vh', zIndex: 100, position: 'absolute', top: '70%' }}>
				<div style={{ width: '100vw', background: 'white' }}>
					<div>
						<br />
						<br />
						<br />
						<Row justify="center">
							<Col span={19}>
								<h3 style={{ fontSize: '3em' }}>Our Services</h3>
							</Col>
						</Row>
						<Row justify="center">
							<Col span={6} className={styles.col}>
								<div style={{ position: 'relative' }}>
									<img
										className={styles.item1}
										src="https://ak6.picdn.net/assets/cms/5542668c976be611024e322d7476341b7938ecb3-people-stock-videos.jpg "
									/>
									<div className={styles.catTitle}>
										<div>TVC</div>
									</div>
								</div>
							</Col>
							<Col span={6} className={styles.col}>
								<div style={{ position: 'relative' }}>
									<img
										className={styles.item1}
										src="https://ak6.picdn.net/assets/cms/5542668c976be611024e322d7476341b7938ecb3-people-stock-videos.jpg "
									/>
									<div className={styles.catTitle}>
										<div>F&B</div>
									</div>
								</div>
							</Col>
							<Col span={6} className={styles.col}>
								<div style={{ position: 'relative' }}>
									<img
										className={styles.item1}
										src="https://ak6.picdn.net/assets/cms/5542668c976be611024e322d7476341b7938ecb3-people-stock-videos.jpg "
									/>
									<div className={styles.catTitle}>
										<div>Fashion & Life Type</div>
									</div>
								</div>
							</Col>
						</Row>
						<Row justify="center">
							<Col span={6} className={styles.col}>
								<div style={{ position: 'relative' }}>
									<img
										className={styles.item1}
										src="https://ak6.picdn.net/assets/cms/5542668c976be611024e322d7476341b7938ecb3-people-stock-videos.jpg "
									/>
									<div className={styles.catTitle}>
										<div>Event</div>
									</div>
								</div>
							</Col>
							<Col span={6} className={styles.col}>
								<div style={{ position: 'relative' }}>
									<img
										className={styles.item1}
										src="https://ak6.picdn.net/assets/cms/5542668c976be611024e322d7476341b7938ecb3-people-stock-videos.jpg "
									/>
									<div className={styles.catTitle}>
										<div>Weding</div>
									</div>
								</div>
							</Col>
							<Col span={6} className={styles.col} />
						</Row>

						<br />
						<br />
						<br />
						<Row justify="center">
							<Col span={19}>
								<h3 style={{ fontSize: '3em' }}>Put your ideas in motion</h3>
							</Col>
						</Row>
						<Row justify="center">
							<Col span={6} className={styles.col}>
								<div style={{ position: 'relative' }}>
									<img
										className={styles.icon1}
										src="https://previews.123rf.com/images/ylivdesign/ylivdesign1801/ylivdesign180106000/94484408-mark-calendar-icon-simple-illustration-of-mark-calendar-vector-icon-for-web.jpg"
									/>
									<div className={styles.stepTitle}>
										<div>Booking</div>
									</div>
								</div>
							</Col>
							<Col span={6} className={styles.col}>
								<div style={{ position: 'relative' }}>
									<img
										className={styles.icon1}
										src="data:image/png;base64,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"
									/>
									<div className={styles.stepTitle}>
										<div>Confirm</div>
									</div>
								</div>
							</Col>
							<Col span={6} className={styles.col}>
								<div style={{ position: 'relative' }}>
									<img
										className={styles.icon1}
										src="https://c7.uihere.com/icons/87/921/256/calendar-and-clock-ef852153b9ce01772bb2351fc590fcfb.png"
									/>
									<div className={styles.stepTitle}>
										<div>Plan</div>
									</div>
								</div>
							</Col>
						</Row>

						<br />
						<br />
						<br />
						<Row justify="center">
							<Col span={19}>
								<h3 style={{ fontSize: '3em' }}>Collections</h3>
							</Col>
						</Row>
						<Row justify="center">
							<Col span={6} className={styles.col}>
								<div style={{ position: 'relative' }}>
									<img
										className={styles.item1}
										src="https://ak6.picdn.net/assets/cms/5542668c976be611024e322d7476341b7938ecb3-people-stock-videos.jpg "
									/>
									<div className={styles.catTitle}>
										
									</div>
								</div>
							</Col>
							<Col span={6} className={styles.col}>
								<div style={{ position: 'relative' }}>
									<img
										className={styles.item1}
										src="https://ak6.picdn.net/assets/cms/5542668c976be611024e322d7476341b7938ecb3-people-stock-videos.jpg "
									/>
									<div className={styles.catTitle}>
										
									</div>
								</div>
							</Col>
							<Col span={6} className={styles.col}>
								<div style={{ position: 'relative' }}>
									<img
										className={styles.item1}
										src="https://ak6.picdn.net/assets/cms/5542668c976be611024e322d7476341b7938ecb3-people-stock-videos.jpg "
									/>
									<div className={styles.catTitle}>
										
									</div>
								</div>
							</Col>
						</Row>
						<div style={{ height: 1, backgroundColor: '#f2f2f2', margin: 30 }} />
						<div className={styles.footer}>
							<Row>
                                <Col span={2}></Col>
								<Col span={18}>
									<div className={styles.left}>
										<h2>VINH DAO MEDIA COMPANY LIMITED – VID MEDIA CO.,LTD</h2>
										<h4>
											Email : vinhdaomedia@gmail.com <br />
											Phone : +84901.857.689 (Vinh) +84901.882.666 (Trí)
										</h4>
										<h4>28/57A Thanh Da, District Binh Thanh, Ho Chi Minh City, Viet Nam</h4>
									</div>
								</Col>
							</Row>
						</div>
						<div style={{ textAlign: 'center', paddingBottom: 10 }}>
							Copyright © 2020. All rights reserved
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
