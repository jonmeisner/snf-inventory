import { Rating, styled } from '@mui/material';

export const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: 'white',
        fontSize: "8px",
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});

type ItemRatingProps = {
    value: number | undefined;
}

const ItemRating = ({ value }: ItemRatingProps) => {
    return (
        <StyledRating size='small' max={5} value={value} emptyIcon={<></>} readOnly />
    )
}

export default ItemRating;