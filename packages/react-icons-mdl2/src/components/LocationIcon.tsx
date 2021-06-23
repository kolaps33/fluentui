import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const LocationIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" className={classes.svg} focusable="false">
      <path d="M1024 128q123 0 237 32t214 90 182 141 140 181 91 214 32 238q0 123-32 237t-90 214-141 182-181 140-214 91-238 32q-123 0-237-32t-214-90-182-141-140-181-91-214-32-238q0-123 32-237t90-214 141-182 181-140 214-91 238-32zm0 1664q106 0 204-27t183-78 156-120 120-155 77-184 28-204q0-106-27-204t-78-183-120-156-155-120-184-77-204-28q-106 0-204 27t-183 78-156 120-120 155-77 184-28 204q0 106 27 204t78 183 120 156 155 120 184 77 204 28zm0-1152q79 0 149 30t122 83 82 122 31 149q0 79-30 149t-83 122-122 82-149 31q-79 0-149-30t-122-83-82-122-31-149q0-79 30-149t83-122 122-82 149-31z" />
    </svg>
  ),
  displayName: 'LocationIcon',
});

export default LocationIcon;
