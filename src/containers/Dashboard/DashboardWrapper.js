import styled from "styled-components"

const DashboardWrapper = styled.div`

display: flex;

.sideBar {
    width: 300px !important;
    background-color: black !important;
    color: white;
    height: 100vh;
    padding: 20px 40px;
    position: sticky;
    top: 0;
    ul {
        padding: 0;
        li {
            list-style-type:none;
            a {
                display: block;
                text-decoration: none;
                padding: 15px 30px;
                background-color: white;
                color: black;
                margin-bottom: 15px;
                border-radius: 10px;

                &.active {
                    background-color:blueviolet;
                    color: white;
                }
            }
        }
    }
}

.rightBar {
    flex: 1;
}
`

export default DashboardWrapper


