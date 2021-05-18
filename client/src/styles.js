import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            flexDirection: 'column-reverse',
        },
        image: {
            marginLeft: '1px',
        }
    },
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },


    text: {
        color: 'rgba(144, 228, 149, 1)',
        marginBottom: '15px'
    },

    heading: {
        color: 'rgba(0,183,255, 1)',
    },
    image: {
        marginLeft: '1px',
    },
}));
