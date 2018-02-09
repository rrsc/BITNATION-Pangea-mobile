import React, { Component } from 'react';
import {
  FlatList,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';

import styles from './styles';
import PanelView from '../../../components/common/PanelView';
import i18n from '../../../global/i18n';
import NationListItem from '../../../components/common/NationListItem';
import NationListHeader from '../../../components/common/NationListHeader';

const NEWEST_NATION_COUNT = 5;

/**
 * @desc Component to render nation panel on dashboard
 * @type React.Component
 */
export default class NationsPanel extends Component {

  render() {
    const { style } = this.props;
    const newestNations = _.take(_.sortBy(this.props.nations, nation => -nation.id), NEWEST_NATION_COUNT);
    const nationsCountStrings = i18n.t('screens.dashboard.nationsPanel.nationsCount', { count: this.props.nations.length });
    console.log(nationsCountStrings);

    return (
      <View style={style}>
        <PanelView style={styles.flex}
                   childrenContainerStyle={styles.childrenContainer}
                   title={i18n.t('screens.dashboard.nationsPanel.title')}>
          <View style={styles.nationsCountContainer}>
            <Text style={styles.callout}>
              {nationsCountStrings.prefix}
              <Text style={styles.nationsCountNumber}>
                {nationsCountStrings.main}
              </Text>
              {nationsCountStrings.suffix}
            </Text>
          </View>
          <View style={styles.nationsHeader}>
            <Text style={styles.nationsHeaderText}>{i18n.t('screens.dashboard.nationsPanel.newNations')}</Text>
          </View>
          <FlatList
            renderItem={(item) => {
              const nation = item.item;
              return (<NationListItem text={nation.nationName}
                                      onPress={this.props.onSelectNation}
                                      id={nation.id}/>);
            }}
            keyExtractor={(item) => item.id}
            data={newestNations}
            style={styles.flex}
          />
        </PanelView>
      </View>
    );
  }

}

NationsPanel.propTypes = {
  /**
   * @desc Array of all nations objects
   */
  nations: PropTypes.array,
  /**
   * @desc Callback on select nation to open. Takes one parameter - id of nation.
   */
  onSelectNation: PropTypes.func,
};

NationsPanel.defaultProps = {
  nations: [],
  onSelectNation: () => null,
};
