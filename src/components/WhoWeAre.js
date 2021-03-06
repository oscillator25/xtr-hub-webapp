import React, { useContext } from 'react';
import { Grid, Row, Column, Button, ButtonSet } from 'carbon-components-react';
import ArrowDown from '@carbon/icons-react/lib/arrow--down/32';
import AppContext from '../context/app';

const WhoWeAre = () => {
  const { t } = useContext(AppContext);

  return (
    <section>
      <Grid className="landing__whoWeAre">
        <Row>
          <Column lg={9}>
            <h3>{t('informationTitle')}</h3>
            <p>{t('informationFirstPara')}</p>
            <p>{t('informationSecPara')}</p>
            <ButtonSet className="landing__buttonSet">
              <Button
                kind="primary"
                onClick={() => {
                  window.open(
                    '#', //get involved
                    '_blank',
                    'noopener'
                  );
                }}
              >
                {t('whatopeneewButtonPrimary')}
              </Button>
              <Button
                kind="tertiary"
                onClick={() => {
                  window.open(
                    '#', //slack
                    '_blank',
                    'noopener'
                  );
                }}
              >
                {t('whatopeneewButton2')}
              </Button>
              <Button
                kind="tertiary"
                onClick={() => {
                  window.open(
                    'https://github.com/xtressials',
                    '_blank',
                    'noopener'
                  );
                }}
              >
                {t('whatopeneewButton3')}
              </Button>
            </ButtonSet>
            <ArrowDown />
          </Column>
        </Row>
      </Grid>
    </section>
  );
};

export default WhoWeAre;
