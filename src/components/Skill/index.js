import * as Icon from '../Icon';
import Image from '../Image';
import React, { useState } from 'react';
import clsx from 'clsx';
import According from '../According';

const Skill = () => {
    const skills = {
        vim: {
            icon: <Icon.Vim />,
            title: 'vim',
            bullets: [
                <li>熟悉 vim 指令並用其開發</li>,
                <li>熟悉使用 vim text object</li>,
                <li>熟悉使用 vim 巨集指令</li>,
                <li>
                    熟悉於 VSCode | WebStorm 設置 Vim Plugin 和快捷加速開發
                </li>,
            ],
        },
        git: {
            icon: <Icon.Git />,
            title: 'Git',
            bullets: [
                <li>熟悉 Git CLI</li>,
                <li>能使用 Git CLI 解決大部分版本問題</li>,
                <li>暸解如何排除衝突、挽救版本</li>,
                <li>暸解 Git / GitHub Flow</li>,
                <li>慣於撰寫 conventional commit</li>,
            ],
        },
        shell: {
            icon: <Icon.Shell />,
            title: 'Shell',
            bullets: [
                <li>熟悉常用的指令進行檔案編輯</li>,
                <li>能運用 shell script做簡易的批次處理</li>,
                <li>暸解檔案讀寫權限及更改</li>,
                <li>使用 powershell | bash | zsh 經驗</li>,
            ],
        },
        github: {
            icon: <Icon.Github />,
            title: 'Github Actions',
            bullets: [<li>維護中</li>],
        },
        typescript: {
            icon: <Icon.Typescript />,
            title: 'Typescript',
            bullets: [<li>維護中</li>],
        },
        javascript: {
            icon: <Icon.Javascript />,
            title: 'Javascript',
            bullets: [<li>維護中</li>],
        },
        html5: {
            icon: <Icon.Html5 />,
            title: 'HTML',
            bullets: [<li>維護中</li>],
        },
        css3: {
            icon: <Icon.Css3 />,
            title: 'CSS',
            bullets: [<li>維護中</li>],
        },
        react: {
            icon: <Icon.React />,
            title: 'React',
            bullets: [
                <li>
                    撰寫 React.js{' '}
                    {new Date().getFullYear() -
                        new Date('2018-01-01').getFullYear()}{' '}
                    年經驗
                </li>,
                <li>熟悉 React 生命週期</li>,
                <li>
                    理解 React Reconciliation，及渲染 List 時 key 的使用技巧
                </li>,
                <li>熟悉使用 hook 及撰寫 custom hook</li>,
                <li>理解如何優化渲染效能及效能優化相關 hooks 的使用取捨</li>,
                <li>
                    理解如何將 class components 盡可能等價轉換為 function
                    components，並且有大量處理過 migration 經驗
                </li>,
                <li>迄今為止所有專案皆是使用 React.js 開發</li>,
            ],
        },
        jest: {
            icon: <Icon.Jest />,
            title: 'Jest',
            bullets: [<li>維護中</li>],
        },
        cypress: {
            icon: <Icon.Cypress />,
            title: 'Cypress',
            bullets: [
                <li>
                    使用 node 做 cypress cli
                    指令導出，讓非前端相關職能，能夠迅速使用 prompt 執行 cypress
                </li>,
                <Image src="/assets/cypress-prompt.png" alt="cypress prompt" />,
                <li>
                    透過 cypress-parallel 整合 ，讓 cypress 測試平行運行，減少
                    cypress 執行時間，約莫 80%
                </li>,
                <li>使用 docker 跟 GitHub Action 整合 cypress 運行 CI 經驗</li>,
            ],
        },
        webpack: {
            icon: <Icon.Webpack />,
            title: 'Webpack',
            bullets: [
                <li>熟悉 babel-loader | ts-loader</li>,
                <li>
                    熟悉 css-loader | style-loader | css preprocessor loader |
                    postcss-loader
                </li>,
                <li>理解如何正確部署 source map 及錯誤追蹤</li>,
                <li>理解如何拆分 split chunks</li>,
                <li>熟悉各項 minimizer 配置及其效能差異</li>,
                <li>自行撰寫 Webpack Plugin 經驗</li>,
            ],
        },
    };
    const [current, setCurrent] = useState(Object.keys(skills)[0]);
    return (
        <div className="skill-section">
            <div className="left">
                {Object.keys(skills).map((skill, index) => {
                    return (
                        <button
                            key={index}
                            className={clsx({
                                'is-active': current === skill,
                            })}
                            onClick={() => {
                                setCurrent(skill);
                            }}
                            type="button"
                            aria-label={skill}
                        >
                            <div
                                className={clsx({
                                    'is-active': current === skill,
                                    ff: true,
                                })}
                                title={skill}
                            >
                                {skills[skill].icon}
                            </div>
                            <div className="bf">{skills[skill].icon}</div>
                        </button>
                    );
                })}
            </div>
            <div className="right">
                <According
                    isOpen={true}
                    title={skills[current].title}
                    bullets={skills[current].bullets}
                />
            </div>
        </div>
    );
};
export default Skill;
