/*
========================================

	GLOBAL STYLES

========================================
 */



import { MediaQueryStyleSheet } from 'react-native-responsive'
import Colors from './colors'
import { normalizer, normalWidthMargin } from '../utils/normalizer'

// ========================================
// DEFAULT TEXT STYLES
// ========================================

import defaultTextStyles from './styles/defaultTextStyles'

// ========================================
// MAIN STYLES
// ========================================

const styles = {
	
	// Use the default text styles
	...defaultTextStyles,
	
	// ========================================
	// Common Layout Elements
	
	// General screen container for ALL elements
	// Derived from Apple Human Interface Guidelines
	// and https://ivomynttinen.com/blog/ios-design-guidelines
	
	screenContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'stretch',
	},
	
	// Container for the main area, below navigation but above the bottom tab bar (if existing)
	// Used for wallet, nation create, etc.
	bodyContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		//alignItems: 'stretch',
		alignContent: 'flex-start',
		// these narrow left/right margins are for panels, which have their own indents.
		marginLeft: 8,
		marginRight: 8,
	},
	
	// Container for a grid of panels (or a mosaic).
	// Similar to bodyContainer but we stretch fill all space
	// Used for dashboard
	gridContainer: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'stretch',
		alignContent: 'flex-start',
		flex: 1,
		// these narrow left/right margins are for panels, which have their own indents.
		marginLeft: 8,
		marginRight: 8,
	},
	
	// Contains a title for a screen, e.g. Nations or Wallet
	titleContainer: {
		marginLeft: 8,
		marginRight: 8,
	},
	
	// A block of text in the body area
	bodyParagraph: {
		paddingBottom: 16,
	},
	
	statusBar: {
		height: 20,
		backgroundColor: 'transparent',
	},
	
	statusBariPhoneX: {
		height: 44,
		backgroundColor: 'transparent',
	},
	
	// Navigation area that shows a normal ("largeTitle" style) title
	navigationBar: {
		marginTop: 20, // force below the status bar !!! THIS IS WRONG
		marginLeft: 8,
		marginRight: 8,
		height: 44,
		backgroundColor: 'transparent',
	},
	
	// Tab bar at the bottom of the screen
	tabBar: {
		height: 49,
		marginTop: 10,
		marginBottom: 10,
		backgroundColor: Colors.shadeOfBitnationLightColor(0.1),
		flexDirection: 'row',
		alignItems: 'stretch',
		justifyContent: 'space-around',
	},
	
	// iPhone X? Not sure what this is.
	homeIndicator: {
		height: 34,
	},
	
	// Put the large title inside the body of the screen, so it scrolls up and away.
	// The margins are set in the body container. If the body has no margins (bars that go edge to edge)
	// then use the style below.
	titleBarLarge: {
		height: normalizer(52),
		alignItems: 'flex-start',
		marginLeft: 8,
		marginRight: 8,
	},
	
	// Used as part of the body of a screen, but if the body area goes to the edges
	// (e.g. a scrolling body with a table) you  might need margins.
	titleBarLargeMargins: {
		height: 52,
		marginLeft: 16,
		marginRight: 16,
		textAlign: 'left',
	},
	
	// Variations:
	
	// From Profile Screen:
	profilesScreenContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		flexDirection: 'column',
		alignItems: 'stretch',
	},
	
	// From Nations Screen:
	nationsScreenContainer: {
		flex: 1,
		//justifyContent: 'center',
		justifyContent: 'flex-start',
		flexDirection: 'column',
		alignItems: 'stretch',
	},
	
	// From Create Nations Screen:
	nationsScreenImageContainer: {
		flex: 1,
		justifyContent: 'center',
		//justifyContent: 'flex-start',
		flexDirection: 'row',
		alignItems: 'stretch',
		marginTop: 30,
		marginBottom: 20,
	},
	
	// ========================================
	// Panels in a grid.
	// These are lists of rectangular panels which contain different kinds of content.
	// These don't have margin left/right, so they won't work for dashboard.
	// Used in:  components/common/PanelView.js
	
	gridPanelView: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		margin: 4,
		//paddingTop: normalizer(16),
		//paddingBottom: normalizer(16),
		padding: normalizer(16),
		borderRadius: 8,
		backgroundColor: Colors.panelView,
	},
	
	// Make an element inside a gridPanel flush left/right by
	// removing the LR margin indents
	gridPanelNoLeftRightPadding: {
		marginLeft: -16,
		marginRight: -16,
		
	},
	
	// ========================================
	// Panels in a vertical list.
	// These are lists of rectangular panels which contain different kinds of content.
	// These don't have margin left/right, so they won't work for dashboard.
	// Used in:  components/common/PanelView.js

	panelView: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		borderRadius: 8,
		backgroundColor: Colors.panelView,
		marginTop: 4,
		marginBottom: 4,
		marginLeft: 0,
		marginRight: 0,
		paddingTop: normalizer(16),
		paddingBottom: normalizer(16),
		paddingLeft: 16,
		paddingRight: 16,
	},
	
	panelViewTransparent: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		borderRadius: 8,
		backgroundColor: 'transparent',
		marginTop: 8,
		marginBottom: 8,
		marginLeft: 0,
		marginRight: 0,
		paddingTop: 8,
	},
	
	// Panel Title Container for the Title and Icon, below
	panelTitleRowContainer: {
	    flexDirection: 'row',
	    backgroundColor: 'transparent',
	    paddingBottom: 8,
		// Line below the title:
		//borderBottomColor: Colors.BlueGrey,
		//borderStyle: 'solid',
		//borderBottomWidth: 1,
	},

  panelTitleContainer: {
    flex: 4,
    backgroundColor: 'transparent',
  },

  panelTitleIcon: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'flex-end',
  },
	
	// Text style for the Panel Title
	panelTitle: {
		...defaultTextStyles.title2,
		fontWeight: 'bold',
		color: Colors.titleColor,
		textAlign: 'left',
	},

  // Text style for the sub-titles in Panels
  panelSubTitle: {
    ...defaultTextStyles.title3,
    textAlign: 'left',
  },

	// Text style for the Panel Icon
	panelIcon: {
		...defaultTextStyles.title2,
		fontWeight: 'bold',
		textAlign: 'right',
	},
	
	panelTextContainer: {
        marginBottom: 8,
	},
	
	panelBody: {
		...defaultTextStyles.body,
		//color: 'white',
	},
	
	messageAdditionalInfoContainer: {},
	messageBottomContainer: {},
	
	// Button in Panel View
	panelButton: {
		marginTop: 13,
	},
	
	// ------------------------
	// Flatlist in a Panel View
	
	// Header Container for a flatList in a panel (not using ListHeaderComponent)
	// Should be similar to sectionListItemContainer
	panelFlatlistHeader: {
		backgroundColor: Colors.shadeOf(Colors.BitnationDarkColor, 0.5),
		// Matches the marginLeft:16 of sectionListItemContainer
		paddingLeft: 16,
		// Standard row height for an iOS list item:
		height: 30,
		justifyContent: 'center',
	},
	
	
	
	// ========================================
	// Forms
	// Example: Profile Edit Screen
	
	formRow: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	
	// Holds an input field in a form, e.g. Profile Edit
	fieldsContainer: {
		alignItems: 'stretch',
		flex: 1,
	},
	
	// Labels on forms, e.g. for a switch
	formLabelText: {
		...defaultTextStyles.body,
		color: 'white',
	},

  formSwitchLabelText: {
    ...defaultTextStyles.body,
    color: 'white',
		marginRight: 60,
		fontSize: 16,
  },
	
	// TextInput component
	textInput: {
		...defaultTextStyles.body,
		
		//backgroundColor: Colors.shadeOfBitnationLightColor(0.2),
		borderColor: Colors.borderColor,
		borderBottomWidth: 1,
		flex: 1,
		marginTop: 4,
		marginBottom: 4,
		marginRight: 0,
		marginLeft: 0,
		fontSize: 16,
		paddingLeft: 4,
		paddingTop: 6,
		paddingBottom: 6,
		// font settings
		//color: Colors.placeholderTextColor,
	},
	
	// text inside of text input fields prompting user to enter information,
	// e.g. 'Name' or 'Country'
	placeHolderText: {
		...defaultTextStyles.body,
		color: Colors.placeholderTextColor
	},
	
	editItemLabel: {
		...defaultTextStyles.body,
		backgroundColor: 'transparent',
		color: Colors.titleColor,
		fontWeight: 'bold',
		margin: 5,
	},
	
	labelText: {
		...defaultTextStyles.body,
		backgroundColor: 'transparent',
		color: Colors.titleColor,
	},
	
	dropDown: {
		backgroundColor: Colors.shadeOfBitnationLightColor(0.2),
		borderColor: Colors.borderColor,
		borderWidth: 1,
		flex: 1,
		marginTop: 4,
		marginBottom: 4,
		marginRight: 0,
		marginLeft: 0,
		paddingLeft: 4,
		paddingTop: 6,
		paddingBottom: 6,
	},
	
	dropDownTextDefault: {
		...defaultTextStyles.body,
		//color: Colors.BitnationLightColor,
		//fontSize: 17,
	},
	
	dropDownTextList: {
		...defaultTextStyles.body,
		color: Colors.BitnationHighlightColor,
	},
	
	switchContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 5,
		marginBottom: 10,
		// for testing
		borderWidth:0,
		
	},
	
	switchObject: {
		marginRight: 10,
	},

// ========================================
	// Section Lists Layout
	// These are lists with rows divided by section headers, e.g. "A"
	// Example: Nations List screen
	
	sectionList: {
		flex: 1,
	},
	
	// e.g. NationListItem Text
	listItemText: {
		...defaultTextStyles.body,
		color: 'white',
		flex: 1,
	},

  // e.g. NationListItemState Text
  listItemTextState: {
		...defaultTextStyles.body,
	    color: Colors.listItemTextState,
	    textAlign: 'right',
	    marginRight: 16,
	  },
	
	// e.g. NationListItem, a row in a list of Nations
	sectionListTouchable: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	
	// e.g. NationListItem
	sectionListItemContainer: {
		flex: 1,
		flexDirection: 'row',
		height: 44,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.sectionListItemContainerBkgd,
		marginLeft: 16,
	},
	
	// e.g. NationListHeader
	sectionListHeaderContainer: {
		flexDirection: 'row',
		height: 30,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.sectionListHeaderContainer,
		//opacity: 0.5,
	},
	
	sectionListHeaderText: {
		...defaultTextStyles.body,
		flex: 1,
		marginLeft: 16,
		color: Colors.sectionListHeaderText,
	},

	sectionListSeparator: {
		flex: 1,
		marginLeft: 10,
		height:1,
		backgroundColor: Colors.sectionListSeparator,
	},

	sectionListDisclosure: {
		marginRight:16,
		width: 8,
		height: 15,
	},

	// ========================================
	// Tab Bar with text
	segmentedControlContainer: {
		height: 44,
		marginLeft: normalWidthMargin(),
		marginRight: normalWidthMargin(),
		flexDirection: 'row',
		alignItems: 'center',
	},
	segmentedControlContainerBackground: {
		backgroundColor: 'transparent',
	},
	tabsContainerStyle: {
		backgroundColor: 'transparent',
	},
	tabStyle: {
		backgroundColor: 'transparent',
	},
	tabTextStyle: {
		backgroundColor: 'transparent',
		color: Colors.tabTextStyle,
	},
	activeTabStyle: {
		backgroundColor: Colors.activeTabStyle,
	},
	
	// ========================================
	// Tab Bar with icons
	// e.g. NationActionButton used on NationDetailsScreen/index.js
	tabBarButton: {
		borderRadius: 15,
		backgroundColor: 'transparent',
		height: 48,
		width: 48,
		justifyContent: 'center',
	},
	tabBarContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	tabBarTitle: {
		marginTop: 4,
		color: '#8E8E93',
		backgroundColor: 'transparent',
		fontSize: 10,
	},
	
	// ========================================
	// Basic Text Styles, e.g. components/common/Text.js
	
	messageTitle: {
		fontSize: 22,
		color: Colors.titleColor,
		letterSpacing: 0,
		lineHeight: 28,
		textAlign: 'center',
	},
	messageText: {
		fontSize: 17,
		color: Colors.BitnationLightColor,
		letterSpacing: -0.65,
		lineHeight: 20.8,
		textAlign: 'center',
	},
	buttonTitle: {
		fontSize: 14,
		color: Colors.BitnationLightColor,
		letterSpacing: -0.02,
		lineHeight: 19,
		textAlign: 'center',
	},
	disabledButtonTitle: {
		fontSize: 14,
		color: Colors.disabledButtonTitleColor,
		letterSpacing: -0.02,
		lineHeight: 19,
		textAlign: 'center',
	},
	
	// ========================================
	// Buttons
	// e.g. components/common/Button.js
	
	baseButton: {
		borderRadius: 15,
		height: 30,
		justifyContent: 'center',
	},
	
	enabledButton: {
		backgroundColor: Colors.buttonColor,
	},
	
	disabledButton: {
		backgroundColor: Colors.disabledButtonColor,
	},
	
	buttonContainer: {
		marginLeft: 13,
		marginRight: 13,
	},

  buttonContainerMultiple: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 13,
    marginRight: 13,
  },
	
	// ========================================
	// Profile Screen
	// e.g. components/common/PanelView.js
	
	avatarContainer: {
		flexDirection: 'row',
		width: 100,
		alignItems: 'center',
	},
	
	avatarContainerLarge: {
		flex: 1,
		alignItems: 'center',
	},
	
	avatarChangeContainer: {
		alignItems: 'center',
	},
	
	avatarMedium: {
		height: 50,
		width: 50,
		borderRadius: 25,
	},
	
	// Profile View screen
	avatarLarge: {
		height: 100,
		width: 100,
		borderRadius: 50,
		margin: 16,
	},

  privateKeyGridViewContainer: {
    height: 241,
    borderRadius: 8,
    backgroundColor: Colors.shadeOf(Colors.BitnationDarkColor, 0.7),
    paddingTop: 20,
    paddingBottom: 3,
    paddingLeft: 12,
    paddingRight: 12,
  },

}

export default styles
