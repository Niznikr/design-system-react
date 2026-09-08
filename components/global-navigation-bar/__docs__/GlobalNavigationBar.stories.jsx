import IconSettings from '../../icon-settings';
import GlobalNavigationBar from '../';
import GlobalNavigationBarRegion from '../region';
import GlobalNavigationBarLink from '../link';
import GlobalNavigationBarDropdown from '../dropdown';

import Button from '../../button';
import Icon from '../../icon';

import AppLauncher from '../../app-launcher';
import AppLauncherExpandableSection from '../../app-launcher/expandable-section';
import AppLauncherTile from '../../app-launcher/tile';

export default {
	title: 'Components/GlobalNavigationBar',
	component: GlobalNavigationBar,
	decorators: [
		(Story) => (
			<div className="slds-p-around_medium">
				<IconSettings iconPath="/assets/icons">
					<Story />
				</IconSettings>
			</div>
		),
	],
	argTypes: {
		theme: {
			control: { type: 'select' },
			options: ['light', 'dark'],
		},
	},
};

const dropdownCollection = [
	{
		label: 'Menu Item One',
		value: '1',
		iconCategory: 'utility',
		iconName: 'table',
		href: '#',
	},
	{
		label: 'Menu Item Two',
		value: '2',
		iconCategory: 'utility',
		iconName: 'kanban',
		href: '#',
	},
	{
		label: 'Menu Item Three',
		value: '3',
		iconCategory: 'utility',
		iconName: 'side_list',
		href: '#',
	},
];

// App launcher used by the primary region across the stories below.
const AppLauncherTrigger = () => (
	<AppLauncher
		id="app-launcher-trigger"
		triggerName="App Name"
		onSearch={(event) => console.log('Search term:', event.target.value)}
		modalHeaderButton={<Button label="App Exchange" />}
	>
		<AppLauncherExpandableSection title="Tile Section">
			<AppLauncherTile
				title="Marketing Cloud"
				iconText="MC"
				description="Send emails, track emails, read emails! Emails!"
			/>
			<AppLauncherTile
				title="Call Center"
				description="The key to call center and contact center is not to use too many words!"
				descriptionHeading="Call Center"
				iconText="CC"
			/>
		</AppLauncherExpandableSection>
		<AppLauncherExpandableSection title="Small Tile Section">
			<AppLauncherTile title="Journey Builder" iconText="JB" size="small" />
			<AppLauncherTile
				title="Sales Cloud"
				iconNode={<Icon name="campaign" category="standard" size="large" />}
				size="small"
			/>
		</AppLauncherExpandableSection>
	</AppLauncher>
);

// Default navigation bar — app launcher, navigation links, and a dropdown menu.
export const Default = {
	render: () => (
		<GlobalNavigationBar>
			<GlobalNavigationBarRegion region="primary">
				<AppLauncherTrigger />
			</GlobalNavigationBarRegion>
			<GlobalNavigationBarRegion region="secondary" navigation>
				<GlobalNavigationBarLink active label="Home" id="home-link" />
				<GlobalNavigationBarDropdown
					assistiveText={{ icon: 'Open menu item submenu' }}
					id="primaryDropdown"
					label="Menu Item"
					options={dropdownCollection}
				/>
				<GlobalNavigationBarLink label="Menu Item" />
				<GlobalNavigationBarLink label="Menu Item" />
				<GlobalNavigationBarLink label="Menu Item" />
			</GlobalNavigationBarRegion>
		</GlobalNavigationBar>
	),
};

// Light theme
export const LightTheme = {
	render: () => (
		<GlobalNavigationBar theme="light">
			<GlobalNavigationBarRegion region="primary">
				<AppLauncherTrigger />
			</GlobalNavigationBarRegion>
			<GlobalNavigationBarRegion region="secondary" navigation>
				<GlobalNavigationBarLink active label="Cases" id="cases-link" />
				<GlobalNavigationBarLink label="Queue" />
			</GlobalNavigationBarRegion>
		</GlobalNavigationBar>
	),
};

// Dark theme
export const DarkTheme = {
	render: () => (
		<GlobalNavigationBar theme="dark">
			<GlobalNavigationBarRegion region="primary">
				<AppLauncherTrigger />
			</GlobalNavigationBarRegion>
			<GlobalNavigationBarRegion region="secondary" navigation>
				<GlobalNavigationBarLink active label="Campaigns" id="campaigns-link" />
				<GlobalNavigationBarLink label="Leads" />
			</GlobalNavigationBarRegion>
		</GlobalNavigationBar>
	),
};

// With cloud theming
export const SalesCloud = {
	render: () => (
		<GlobalNavigationBar cloud="sales">
			<GlobalNavigationBarRegion region="primary">
				<AppLauncherTrigger />
			</GlobalNavigationBarRegion>
			<GlobalNavigationBarRegion region="secondary" navigation>
				<GlobalNavigationBarLink active label="Home" id="sales-home-link" />
				<GlobalNavigationBarLink label="Opportunities" />
				<GlobalNavigationBarLink label="Leads" />
			</GlobalNavigationBarRegion>
		</GlobalNavigationBar>
	),
};
