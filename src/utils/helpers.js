export const getViewportWidth = () => {
  return (
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  );
};

export const devices = {
  mobile: "mobile",
  tablet: "tablet",
  smallDesktop: "smallDesktop",
  desktop: "desktop",
  upToDesktop: "upToDesktop"
};

const devicesById = {
  [devices.mobile]: {
    id: devices.mobile,
    from: 0,
    to: 767
  },
  [devices.tablet]: {
    id: devices.tablet,
    from: 768,
    to: 1023
  },
  [devices.desktop]: {
    id: devices.desktop,
    from: 1025,
    to: 99999
  }
};

export const getDeviceIdFromDimensions = ({ width }) => {
  if (width >= 0 && width < devicesById.tablet.from) {
    return devices.mobile;
  } else if (
    width >= devicesById.tablet.from &&
    width < devicesById.desktop.from
  ) {
    return devices.tablet;
  }

  return devices.desktop;
};
