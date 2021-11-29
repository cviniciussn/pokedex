import styled from 'styled-components'


const HeaderComponent = styled.header`
background-color: #F5DB13;
padding: 16px 120px;
position: relative;
box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);

    .header-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        

        > img {
            width: 160px;
            height: 63px;
        }

        .navigation {
            list-style-type: none;

            display: flex;
            align-items: center;
            justify-content: center;

            li {

              > a {
                    text-decoration: none;
                    padding: 10px;
                    color: #000;
                }

                &.active{
                    position: relative;
                    &:after {
                        content: '';
                        width: 62px;
                        height: 3px;
                        display: block;
                        border-radius: 12px;
                        background-color: #000;
                        position: absolute;
                        bottom: -12px;
                        left: 50%;
                        transform: translate3d(-50%,0,0);
                    }
                }
            }

            li + li {
                margin-left: 25px;
            }
        }
    }

`;

export {
    HeaderComponent,
};