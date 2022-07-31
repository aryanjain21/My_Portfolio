import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#fff',
                    '&.Mui-focused': {
                        color: '#08fdd8'
                    },
                    '&.Mui-error': {
                        color: '#d32f2f',
                    }
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    color: '#fff',
                    ':before': {
                        borderBottom: '1px solid #fff',
                    },
                    ':after': {
                        borderBottom: '1px solid #fff',
                    },
                    '&:hover': {
                        borderBottom: '1px solid #08fdd8',
                        ':before': {
                            borderBottom: '1px solid #08fdd8',
                        },
                        ':after': {
                            borderBottom: '1px solid #08fdd8',
                        },
                    }
                }
            }
        }
    }
});

export default theme;