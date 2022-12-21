import styled from 'styled-components';
import { ProgressIndicatorProps } from './ProgressIndicator';

export const ProgressBarContainer = styled.div`
    position: relative;
    background: #eee;
    height: 20px;
    width: 200px;
    border-radius: 6px;
    overflow: hidden;
`;

export const ProgressBar = styled.div<ProgressIndicatorProps>`
    background: #009900;
    width: ${(props: any) => props.progress}%;
`;