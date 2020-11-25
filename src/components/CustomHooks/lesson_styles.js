import { makeStyles } from '@material-ui/core';

export default function useLessonStyles() {
    const useStyles = makeStyles(theme => ({
        texts: {
            fontWeight: 300
        },
        description: {
            fontSize: 25,
            fontWeight: 100
        },
        title: {
            fontSize: 45,
            fontWeight: 100
        },
        subtitle: {
            fontSize: 30,
            fontWeight: 100
        },
        headers: {
            textAlign: 'center'
        },
        grammarContainer: {
            padding: 20,
            background: '#B3C5D7',
            borderRadius: 10,
            marginTop: 10,
            marginBottom: 10
        }
    }));
    return useStyles();
}