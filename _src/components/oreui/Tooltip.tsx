import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

const OreUiTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(() => ({
    [`& .${tooltipClasses.arrow}`]: { color: '#3b3a48' },
    [`& .${tooltipClasses.tooltip}`]: { backgroundColor: '#3b3a48' }
}));

export default OreUiTooltip;