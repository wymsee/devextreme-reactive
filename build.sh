cd packages/dx-core && yarn build
cd ../dx-react-core && yarn build
cd ../dx-react-grid && yarn build
cd ../dx-react-grid-bootstrap4 && yarn build
cd ../../
npx lerna version patch
npx lerna publish from-package