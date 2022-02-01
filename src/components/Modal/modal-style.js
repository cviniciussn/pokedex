import styled from "styled-components";

const Background = styled.div`
width: 100%;
height: 100vh;

display: flex;
justify-content: center;
align-items: center;

position: fixed;
z-index: 9999;
background: rgba(0, 0, 0, .3);

`

const ModalComponent = styled.div`


    .modal-card {
        width: 796px;

        position: relative;
        display: flex;

        .modal-close {
            position: absolute;
            top: -50px;
            right: 0;

            > img {
                width: 100%;
                max-width: 100%;

                cursor: pointer;    
            }
        }
        .modal-image {
            padding: 10px;
            background: linear-gradient(270deg, ${({ imageLinearFirst }) => imageLinearFirst} 0.15%, ${({ imageLinearSecond }) => imageLinearSecond} 100%);
            position: relative;

            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;

            box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);
            > img {
                display: block;
                width: 100%;
                height: 100%;
                max-width: 100%;
            }

            .types-container {
                display: flex;
                gap: 20px;

                position: absolute;
                bottom: 16px;
                right: 16px;

                .type {
                    padding: 0.5px 2px;
                    font-size: 12px;
                    border-radius: 8px;
                }
                #type-1 {
                    background-color: ${({ colorTypeFirst }) => colorTypeFirst}
                }

                #type-2 {
                    background-color: ${({ colorTypeSecond }) => colorTypeSecond}
                }
            }
        }

        .modal-content {
            padding: 30px 15px;
            border-top-right-radius: 16px;
            border-bottom-right-radius: 16px;

            background: linear-gradient(180deg, ${({ contentLinearFirst }) => contentLinearFirst} 42.19%, ${({ contentLinearSecond }) => contentLinearSecond} 100%);

            .modal-pokemon-primary{
                display: flex;
                align-items: baseline;
                justify-content: space-between;

                color: #FDFDFD;

                .title{
                    font-size: 36px;
                    font-weight: bold;
                    line-height: 46px;
                }

                .modal-pokemon-generation {
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    > p {
                        font-size: 24px;
                        line-height: 34px;

                    }

                    #pokemon-gerenation-id{
                        margin-left: 8px;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        width: 41px;
                        height: 41px;
                        border-radius: 50%;

                        color: #000;
                        background-color: #F2CB07;
                    }
                }
            }

            .modal-info {
                margin-top: 25px;

                .pokemon-abilities{
                    width: 60%;
                    padding: 12px 20px;

                    background-color: #FDFDFD;
                    border-radius: 8px;

                    display: flex;
                    align-items: flex-start;
                    flex-direction: column;

                    > h3, p {
                        font-size: 16px;
                        font-weight: normal;
                        line-height: 26px;
                    }
                }

                .pokemon-vitalities {
                    margin-top: 20px;
                    padding: 12px 20px;

                    background-color: #FDFDFD;
                    border-radius: 8px;

                    display: flex;
                    align-items: flex-start;
                    .pokemon-vitalities-info{
                        > h3 {
                            font-size: 16px;
                            font-weight: normal;
                        }

                        progress {
                            widith: 100%;
                            height: 5px;
                            background-color: #F6F7F9;
                            border-radius: 8px;
                        }

                        #life-points, 
                        #experience {
                            > span {
                                font-weight: bold;
                            }
                            > progress {
                                -webkit-appearance: none;
                            }
                        }
                        #life-points {
                            > progress {
                                ${'' /* Adiciona estilo em diferentes navegadores */}
                                &::-moz-progress-bar {
                                    background: linear-gradient(270deg, #64D368 0.15%, #64D368 70.88%);
                                    border-radius: 8px;
                                }
                                &::-ms-fill {
                                    background: linear-gradient(270deg, #64D368 0.15%, #64D368 70.88%);
                                    border-radius: 8px;
                                }
                                &::webkit-progress-value {
                                    background: linear-gradient(270deg, #64D368 0.15%, #64D368 70.88%);
                                    border-radius: 8px;
                                }
                                &::webkit-progress-bar {
                                    background: linear-gradient(270deg, #64D368 0.15%, #64D368 70.88%);
                                    border-radius: 8px;
                                }
                            }
                        }

                        #experience{
                            > progress {
                                &::-moz-progress-bar {
                                    background: linear-gradient(270deg, #F5DB13 0.15%, #F5DB13 70.88%);
                                    border-radius: 8px;
                                }
                                &::-ms-fill {
                                    background: linear-gradient(270deg, #F5DB13 0.15%, #F5DB13 70.88%);
                                    border-radius: 8px;
                                }
                                &::webkit-progress-value {
                                    background: linear-gradient(270deg, #F5DB13 0.15%, #F5DB13 70.88%);
                                    border-radius: 8px;
                                }
                                &::webkit-progress-bar {
                                    background: linear-gradient(270deg, #F5DB13 0.15%, #F5DB13 70.88%);
                                    border-radius: 8px;
                                }
                            }
                        }
                    }
                }

                .pokemon-properties {
                    margin-top: 20px;

                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .card-property {
                        padding: 8px;
                        width: 80px;
                        height: 70px;
                        background: #FDFDFD;
                        border-radius: 8px;

                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;

                        .property-number {
                            padding: 2px;
                            display: flex;
                            justify-content: center;
                            align-items: center;

                            width: 35px;
                            height: 35px;
                            border: 3px solid #000;
                            border-radius: 50%;

                            color: #212121;
                        }

                        > p {
                            margin-top: 6px;
                            font-size: 12px;
                            color: #212121;
                        }
                    }
                }
            }
        }
    }
`;

export {
    ModalComponent,
    Background
}