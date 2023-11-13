import clsx from 'clsx';
import React from 'react';
import Zoom from 'react-medium-image-zoom';
import styled from 'styled-components';

const LazyImage = styled.div`
    width: 100%;
    aspect-ratio: 16/9;
    display: flex;
    align-items: center;
    justify-content: center;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transition: opacity 500ms ease-in;
    }
`;

const Image = ({ src, alt, lazy = true, style = {} }) => {
    return (
        <Zoom>
            <LazyImage>
                <img
                    style={{
                        ...style,
                    }}
                    src={src}
                    alt={alt}
                    {...(lazy ? { loading: 'lazy' } : {})}
                />
            </LazyImage>
        </Zoom>
    );
};

const ProjectCard = (props) => {
    const {
        title = '',
        description = null,
        link = {
            label: '',
            url: '',
        },
        image = {
            src: '',
            alt: '',
        },
        labels = [],
    } = props;
    return (
        <div className="card margin-vert--md">
            <div
                className="card__header"
                style={{ display: 'flex', justifyContent: 'center' }}
            >
                {title && <h4>{title}</h4>}
            </div>
            <div className="card__body">
                {image.src && <Image src={image.src} alt={image.alt} />}
                {description}
            </div>
            <div className="card__footer">
                {link.url && (
                    <button
                        onClick={() => {
                            window.open(link.url, '_blank', 'noopener');
                        }}
                        className="button button--secondary button--block margin-bottom--sm"
                    >
                        {link.label}
                    </button>
                )}
                {labels.map((label, idx) => {
                    const isLastItem = idx === labels.length - 1;
                    return (
                        <div
                            key={idx}
                            className={clsx({
                                badge: true,
                                'badge--secondary': true,
                                'margin-right--sm': !isLastItem,
                            })}
                        >
                            {label}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export const PINKOI_TIMELINE = {
    LOGO: (
        <img
            src="./img/pinkoi.jpg"
            style={{ borderRadius: '50%' }}
            alt="pinkoi"
            loading="lazy"
        />
    ),
    TITLE: 'Pinkoi Inc.',
    SUBTITLE: ['Frontend Engineer', 'Platform Squad'],
    DATE: (
        <div>
            <div className="badge badge--warning" style={{ color: '#1b1b1d' }}>
                May. 2022 ~ Present
            </div>
        </div>
    ),
    KEY_ACHIEVEMENT: {
        WEB_VITALS: {
            title: '建立 Web Vitals 監控系統',
            bullets: [
                <li>
                    使用 Grafana Prometheus Node 安排 cronjob 定期產出 Web
                    Vitals Report
                    並且於部署時也會進行打點，因此能夠即時監控網站的 Web Vitals
                    指標狀況， 在網頁效能發生問題時能夠快速找到問題點。
                </li>,
                <li>
                    建立後透過動態載入共用模組跟延遲加載有效降低 FCP 1.7s
                    時間差距
                </li>,
                <ProjectCard
                    title="Web Vitals Monitor"
                    image={{
                        src: './assets/pinkoi-web-vitals-monitor.jpg',
                        alt: 'pinkoi web vitals monitor',
                    }}
                    labels={['Grafana', 'Prometheus', 'Node.js', 'Cronjob']}
                />,
            ],
        },
        DESIGN_SYSTEM: {
            title: '建立 Design System',
            bullets: [
                <li>
                    讓 Design Token 達成 Single Source Of Truth
                    並且同時跨語言支持 <code>javascript</code> <code>css</code>
                </li>,
                <li>
                    Code Gen Design Token Snippets 讓開發上能夠更加快速跟準確
                </li>,
                <li>
                    撰寫 Custom Eslint Rules 避免開發人員直接使用未規範的色票
                </li>,
                <li>與 Tailwind CSS | StoryBook 整合</li>,
            ],
        },
        CI_INTEGRATION: {
            title: '建立 開發環境 CI',
            bullets: [
                <li>引入 Cypress 進行全站性 E2E 測試</li>,
                <li>
                    打包 Cypress Image 供 CI 使用，並透過 cypress-parallel
                    平行化測試， 大幅縮短測試時間
                </li>,
                <li>
                    讓 Jest 與 Cypress 都產出 JUnit Report 準確回報測試結果
                </li>,
                <li>在 CI 過程加入 ESLint Job 確保程式碼品質</li>,
                <ProjectCard
                    title="CI On PR Approved"
                    image={{
                        src: './assets/pinkoi-ci.jpg',
                        alt: 'pinkoi ci',
                    }}
                    labels={[
                        'Jest',
                        'Cypress',
                        'Junit',
                        'ESLint',
                        'Github Actions',
                    ]}
                />,
            ],
        },
        OPENAPI: {
            title: 'OpenAPI Types Generate Process',
            bullets: [
                <li>
                    由 backend fast api Generate 出 openapi.json， 透過 openapi
                    schema 產出 TypeScript Type， 達成在前後端串接 api
                    時介面的一致性，使 api 介面能夠成為 single source of truth
                </li>,
            ],
        },
        XMAS: {
            title: '2022 Xmas',
            bullets: [
                <ProjectCard
                    title="2022 Xmas"
                    link={{
                        label: 'See Site',
                        url: 'https://www.pinkoi.com/event/xmas',
                    }}
                    image={{
                        src: './assets/pinkoi-xmas.jpg',
                        alt: 'pinkoi ci',
                    }}
                    labels={['React', 'Campaign', 'event', 'Xmas', '2022']}
                />,
            ],
        },
    },
};

export const REVTEL_TIMELINE = {
    LOGO: (
        <img
            src="./img/revtel.png"
            style={{ transform: 'scale(0.72)' }}
            alt="revtel"
            loading="lazy"
        />
    ),
    TITLE: 'Revtel Tech',
    SUBTITLE: ['Frontend Engineer'],
    DATE: (
        <div>
            <div className="badge badge--warning" style={{ color: '#1b1b1d' }}>
                Nov. 2020 - May. 2022
            </div>
        </div>
    ),
    KEY_ACHIEVEMENT: {
        DEVELOPMENT_EVN: {
            title: '創建並維護公司共用 zsh | vim 環境',
            bullets: [
                <li>使開發環境能快速建立於 Darwin | Ubuntu</li>,
                <li>
                    <ProjectCard
                        title="Revtel | .vim"
                        link={{
                            label: 'See GitHub',
                            url: 'https://github.com/revtel/.vim',
                        }}
                        image={{
                            src: 'https://camo.githubusercontent.com/18fb58db078bfd2e0927c172dd75fdb02caa030e5f16779bf82aa688bf9a5a3e/68747470733a2f2f692e696d6775722e636f6d2f747573636b79722e706e67',
                            alt: 'revtel .vim',
                        }}
                        description={
                            <p>
                                建立並維護公司共用 vim config，配合{' '}
                                <code>.zsh</code> 能在 darwin ubuntu base
                                的雲端機器上都能夠快速建置開發環境
                            </p>
                        }
                        labels={['vim', 'shell script']}
                    />
                </li>,
            ],
        },
        COMMON_LIB: {
            title: '開發公司共用電商專案模板及共用模組',
            bullets: [
                <li>
                    公司共用 Component Library 提供穩定購物流程 (
                    物流、正向金流、發票開立 )
                </li>,
                <li>公司共用 專案模板 快速建立標配電商及後台</li>,
            ],
        },
        MAINLY_INVOLVED: {
            title: '主要參與專案',
            bullets: [
                <li>
                    <ProjectCard
                        title="惇聚 | Tungrp"
                        image={{
                            src: './assets/revtel-tungrp.jpg',
                            alt: 'revtel tungrp',
                        }}
                        description={
                            <p>
                                為 <code>KENZO</code> | <code>Agete</code> |
                                <code>Isabel Marant</code> |{' '}
                                <code>self-portrait</code> |{' '}
                                <code>Les Nereides</code>{' '}
                                五家精品品牌代理商，全站包含搜尋、會員、產品列表篩選分頁、社群登入
                                <br />
                                另有同功能之 React Native App
                            </p>
                        }
                        labels={[
                            'React',
                            'Gatsby',
                            'React Native',
                            'GCP',
                            '綠界金流',
                        ]}
                    />
                    <ProjectCard
                        title="幫農事 | IFarmer"
                        link={{
                            label: 'See AppStore',
                            url: 'https://apps.apple.com/tw/app/%E5%B9%AB%E8%BE%B2%E4%BA%8B/id1607435148',
                        }}
                        image={{
                            src: './assets/revtel-ifarmer.png',
                            alt: 'revtel ifarmer',
                        }}
                        description={
                            <p>
                                為{' '}
                                <a href="https://www.buydirectlyfromfarmers.tw/">
                                    直接跟農夫買
                                </a>{' '}
                                內部運作管理系統，便於農夫管理訂單、產品、物流
                            </p>
                        }
                        labels={['React Native', 'Push Notification']}
                    />
                </li>,
            ],
        },
        SECONDARY_INVOLVED: {
            title: '次要參與專案',
            bullets: [
                <li>
                    <ProjectCard
                        title="法朋 | Leruban"
                        link={{
                            label: 'See Leruban',
                            url: 'https://lerubanpatisserie.com/',
                        }}
                        image={{
                            src: './assets/revtel-leruban.png',
                            alt: 'revtel leruban',
                        }}
                        description={<p>法朋烘焙甜點坊</p>}
                        labels={['React', 'Gatsby']}
                    />
                    <ProjectCard
                        title="小和好點 | Dot.Dot. Bakery"
                        link={{
                            label: 'See Dot.Dot. Bakery',
                            url: 'https://dotdothotel.com/',
                        }}
                        image={{
                            src: './assets/revtel-dotdot.png',
                            alt: 'revtel dotdot',
                        }}
                        description={<p>小和好點 dot.dot. Bakery Cafe</p>}
                        labels={['React', 'Gatsby']}
                    />
                </li>,
            ],
        },
    },
};

export const TITANSOFT_TIMELINE = {
    LOGO: (
        <img
            src="./img/titansoft.png"
            style={{ borderRadius: '50%' }}
            alt="titansoft"
            loading="lazy"
        />
    ),
    TITLE: 'Titansoft Pte Ltd',
    SUBTITLE: ['Product Developer', 'TWTG'],
    DATE: (
        <div>
            <div className="badge badge--warning" style={{ color: '#1b1b1d' }}>
                Sep. 2019 - Apr. 2020
            </div>
        </div>
    ),
    KEY_ACHIEVEMENT: {
        DEPARTMENT_STAR: {
            title: '部門之星',
            bullets: [
                <li>因工作態度優越，榮獲部門之星獎項</li>,
                <ProjectCard
                    title="部門之星 | Department Star"
                    image={{
                        src: './assets/titansoft-dep-star.jpg',
                        alt: 'titansoft dep star',
                    }}
                    description={null}
                />,
            ],
        },
        INVOLVED: {
            title: '主要經歷',
            bullets: [
                <li>維護數以十計的 .NET MVC 專案</li>,
                <li>獨立開發 CMS，以方便管理系統設定值</li>,
                <li>與五人團隊運行 Scrum</li>,
            ],
        },
    },
};

export const TITANSOFT_INTERN_TIMELINE = {
    LOGO: (
        <img
            src="./img/titansoft.png"
            style={{ borderRadius: '50%' }}
            alt="titansoft"
            loading="lazy"
        />
    ),
    TITLE: 'Titansoft Pte Ltd',
    SUBTITLE: ['Intern'],
    DATE: (
        <div>
            <div className="badge badge--warning" style={{ color: '#1b1b1d' }}>
                Mar. 2019 - Sep. 2020
            </div>
        </div>
    ),
    KEY_ACHIEVEMENT: {
        SHARE_REACT_WITH_INTERNS: {
            title: '與同期實習生分享 React',
            bullets: [
                <ProjectCard
                    title="與同期實習生分享 React"
                    image={{
                        src: './assets/titansoft-share-react.jpg',
                        alt: 'titansoft share react',
                    }}
                    description={null}
                />,
            ],
        },
        INVOLVED: {
            title: '主要經歷',
            bullets: [
                <li>開發公司內部差旅系統</li>,
                <li>
                    維護主要產品 Selenium
                    撰寫之自動化測試，並確保平行運行在多品牌實機上
                </li>,
            ],
        },
    },
};
