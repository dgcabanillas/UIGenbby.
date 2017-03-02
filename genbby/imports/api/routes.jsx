import React from 'react';
import { mount } from 'react-mounter';

import { MainLayout } from '../ui/layouts/MainLayout.jsx';
import Login from '../ui/components/Login.jsx';
import Registro from '../ui/components/Registro.jsx';
import { Welcome } from '../ui/components/Welcome.jsx';

FlowRouter.route('/', {
	action() {
		mount(MainLayout, {
			content: (<Login />)
		});
	}
});

FlowRouter.route('/registro', {
	action() {
		mount(MainLayout, {
			content: (<Registro />)
		});
	}
});

FlowRouter.route('/welcome', {
	action() {
		mount(MainLayout, {
			content: (<Welcome />)
		});
	}
});
