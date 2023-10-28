import React from 'react';
import Zoom from 'react-medium-image-zoom';

const Image = ({ src, alt, style = {} }) => (
    <Zoom>
        <img style={style} src={src} alt={alt} />
    </Zoom>
);

export const PINKOI_TIMELINE = {
    LOGO: (
        <img
            src="./img/pinkoi.jpg"
            style={{ borderRadius: '50%' }}
            alt="pinkoi"
        />
    ),
    TITLE: 'Pinkoi Inc.',
    SUBTITLE: ['Frontend Engineer', 'Platform Squad'],
    DATE: (
        <div>
            <div className="badge badge--warning">May. 2022 ~ Present</div>
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
                <Image
                    src="./assets/web-vitals-monitor.png"
                    alt="web-vitals-monitor"
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
                <Image src="./assets/pinkoi-ci.png" alt="pinkoi-ci" />,
            ],
        },
        OPENAPI: {
            title: 'OpenAPI Generate TypeScript Type',
            bullets: [
                <li>
                    由 backend fast api Generate 出 openapi.json， 透過 openapi
                    schema 產出 TypeScript Type， 達成在前後端串接 api
                    時介面的一致性，使 api 介面能夠成為 single source of truth
                </li>,
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
        />
    ),
    TITLE: 'Revtel Tech',
    SUBTITLE: ['Frontend Engineer'],
    DATE: (
        <div>
            <div className="badge badge--warning">Nov. 2020 - May. 2022</div>
        </div>
    ),
    KEY_ACHIEVEMENT: {
        DEVELOPMENT_EVN: {
            title: '創建並維護公司共用 zsh | vim 環境',
            bullets: [
                <li>使開發環境能快速建立於 darwin | ubuntu</li>,
                <li>
                    <div className="card">
                        <div
                            className="card__header"
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <div className="badge badge--secondary margin-bottom--md">
                                <div style={{ fontSize: '1.5rem' }}>
                                    revtel/.vim
                                </div>
                            </div>
                        </div>
                        <div className="card__body">
                            <Image
                                src="https://camo.githubusercontent.com/18fb58db078bfd2e0927c172dd75fdb02caa030e5f16779bf82aa688bf9a5a3e/68747470733a2f2f692e696d6775722e636f6d2f747573636b79722e706e67"
                                alt=".vim logo"
                            />
                            <p>
                                建立並維護公司共用 vim config，配合{' '}
                                <code>.zsh</code> 能在 darwin ubuntu base
                                的雲端機器上都能夠快速建置開發環境
                            </p>
                        </div>
                        <div className="card__footer">
                            <button
                                onClick={() => {
                                    window.open(
                                        'https://github.com/revtel/.vim',
                                        '_blank',
                                        'noopener'
                                    );
                                }}
                                className="button button--secondary button--block"
                            >
                                See GitHub
                            </button>
                        </div>
                    </div>
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
        TUNGRP: {
            title: '惇聚 | Tungrp',
            isOpen: false,
            bullets: [
                <li>
                    <div className="card">
                        <div
                            className="card__header"
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <div className="badge badge--secondary margin-bottom--md">
                                <div
                                    style={{
                                        fontSize: '1.5rem',
                                    }}
                                >
                                    惇聚 | Tungrp
                                </div>
                            </div>
                        </div>
                        <div className="card__body">
                            <Image
                                src="./assets/revtel-tungrp.jpg"
                                alt="revtel tungrp"
                            />
                            <p>
                                為 <code>KENZO</code> | <code>Agete</code> |
                                <code>Isabel Marant</code> |{' '}
                                <code>self-portrait</code> |{' '}
                                <code>Les Nereides</code>{' '}
                                五家精品品牌代理商，全站包含搜尋、會員、產品列表篩選分頁、社群登入
                                <br />
                                另有同功能之 React Native App
                            </p>
                        </div>
                        <div className="card__footer">
                            <div className="badge badge--secondary margin-right--sm">
                                React
                            </div>
                            <div className="badge badge--secondary margin-right--sm">
                                RWD
                            </div>
                            <div className="badge badge--secondary margin-right--sm">
                                React Native
                            </div>
                            <div className="badge badge--secondary margin-right--sm">
                                Google Cloud Platform
                            </div>
                            <div className="badge badge--secondary margin-right--sm">
                                Gatsby
                            </div>
                            <div className="badge badge--secondary margin-right--sm">
                                Push Notification
                            </div>
                            <div className="badge badge--secondary margin-right--sm">
                                綠界金流
                            </div>
                        </div>
                    </div>
                </li>,
            ],
        },
        IFARMER: {
            title: '幫農事 | IFarmer',
            isOpen: false,
            bullets: [
                <li>
                    <div className="card">
                        <div
                            className="card__header"
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <div className="badge badge--secondary margin-bottom--md">
                                <div
                                    style={{
                                        fontSize: '1.5rem',
                                    }}
                                >
                                    幫農事 | IFarmer
                                </div>
                            </div>
                        </div>
                        <div className="card__body">
                            <Image
                                src="./assets/revtel-ifarmer.png"
                                alt="revtel tungrp"
                            />
                            <p>
                                為{' '}
                                <a href="https://www.buydirectlyfromfarmers.tw/">
                                    直接跟農夫買
                                </a>{' '}
                                內部運作管理系統，便於農夫管理訂單、產品、物流
                            </p>
                        </div>
                        <div className="card__footer">
                            <button
                                onClick={() => {
                                    window.open(
                                        'https://apps.apple.com/tw/app/%E5%B9%AB%E8%BE%B2%E4%BA%8B/id1607435148',
                                        '_blank',
                                        'noopener'
                                    );
                                }}
                                className="button button--secondary button--block margin-bottom--sm"
                            >
                                See AppStore
                            </button>
                            <div className="badge badge--secondary margin-right--sm">
                                React Native
                            </div>
                            <div className="badge badge--secondary margin-right--sm">
                                Push Notification
                            </div>
                        </div>
                    </div>
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
        />
    ),
    TITLE: 'Titansoft Pte Ltd',
    SUBTITLE: ['Product Developer', 'TWTG', 'Intern'],
    DATE: (
        <div>
            <div className="badge badge--warning">Mar. 2019 - Apr. 2020</div>
        </div>
    ),
    KEY_ACHIEVEMENT: {},
};
