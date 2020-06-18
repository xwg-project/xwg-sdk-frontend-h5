import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/Home';
import Login from '@/components/account/Login';
import SignUp from '@/components/account/SignUp';
import DownLoad from '@/components/download/DownLoad';
import ToolDetail from '@/components/tooldetail/ToolDetail';
import Tab1 from '@/components/tablist/tab1';
import Tab2 from '@/components/tablist/tab2';
import Tab3 from '@/components/tablist/tab3';
import Tab4 from '@/components/tablist/tab4';
import Tab5 from '@/components/tablist/tab5';
import Tab6 from '@/components/tablist/tab6';
// import TradingChart from '@/components/tablist/echart/TradingChart';

import Page1 from '@/components/views/Page1';
import Page2 from '@/components/views/Page2';
import Page3 from '@/components/views/Page3';
import Page4 from '@/components/views/Page4';
import Page5 from '@/components/views/Page5';
import Page6 from '@/components/views/Page6';
import Page7 from '@/components/views/Page7';
// import Test from '@/components/tablist/Test';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      // keepAlive: true,
      redirect: '/Tab1',
      children: [
        {
          path: '/Tab1',
          name: 'Tab1',
          component: Tab1,
          meta: {
            index: 1,
          },
        },
        {
          path: '/Tab2',
          name: 'Tab2',
          component: Tab2,
          meta: {
            index: 2,
          },
        },
        {
          path: '/Tab3',
          name: 'Tab3',
          component: Tab3,
          meta: {
            index: 3,
          },
        },
        {
          path: '/Tab4',
          name: 'Tab4',
          component: Tab4,
          meta: {
            index: 4,
          },
        },
        {
          path: '/Tab5',
          name: 'Tab5',
          component: Tab5,
          meta: {
            index: 5,
          },
        },
        {
          path: '/Tab6',
          name: 'Tab6',
          component: Tab6,
          redirect: '/Page1',
          children: [
            {
              path: '/Page1',
              name: 'Page1',
              component: Page1,
              meta: {
                index: 6,
              },
            },
            {
              path: '/Page2',
              name: 'Page2',
              component: Page2,
            },
            {
              path: '/Page3',
              name: 'Page3',
              component: Page3,
            },
            {
              path: '/Page4',
              name: 'Page4',
              component: Page4,
            },
            {
              path: '/Page5',
              name: 'Page5',
              component: Page5,
            },
            {
              path: '/Page6',
              name: 'Page6',
              component: Page6,
            },
            {
              path: '/Page7',
              name: 'Page7',
              component: Page7,
            },
          ],
        },
      ],
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp,
    },
    {
      path: '/DownLoad',
      name: 'DownLoad',
      component: DownLoad,
    },
    {
      // path: '/ToolDetail/:id',
      path: '/ToolDetail',
      name: 'ToolDetail',
      component: ToolDetail,
      props: true,
    },
    // {
    //   path: '/TradingChart',
    //   name: 'TradingChart',
    //   component: TradingChart,
    // },
  ],
});
