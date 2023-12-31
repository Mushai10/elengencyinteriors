import PropTypes from 'prop-types';
import HeaderOne from '../components/HeaderComps';
import Breadcrumb from '../components/Breadcrumb';
import AuthForm from '../components/Auth/AuthForm';
import FooterComps from '../components/FooterComps';
import { getAllItems } from '../lib/ItemsUtil';

function AuthPage({ headerItems, authItems, footerItems }) {
    return (
        <>
            <HeaderOne headerItems={headerItems} headerContainer="container" />
            <Breadcrumb
                breadcrumbContainer="container"
                title="Login"
                item="Home"
                itemPath="/"
                activeItem="Login"
            />
            <AuthForm authItems={authItems} />
            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export async function getStaticProps() {
    const headerItems = await getAllItems('header');
    const authItems = await getAllItems('auth-data');
    const footerItems = await getAllItems('footer');

    return {
        props: {
            headerItems,
            authItems,
            footerItems,
        },
    };
}

AuthPage.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    authItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default AuthPage;
