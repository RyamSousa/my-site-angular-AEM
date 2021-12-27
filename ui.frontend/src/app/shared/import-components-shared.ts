import { LazyMapTo } from '@adobe/aem-angular-editable-components';

const HeaderEditConfig = {
    emptyLabel: 'Header',
    isEmpty: cqModel =>
        !cqModel || !cqModel.avatarUrl || !cqModel.htmlUrl
};

const LazyHeaderModule = () => import('./header/header.component').then(
    Module => Module.HeaderComponent
);

LazyMapTo('siteangular/components/header')(LazyHeaderModule, HeaderEditConfig);

const FooterEditConfig = {
    emptyLabel: 'Footer',
    isEmpty: cqModel =>
        !cqModel || !cqModel.author || !cqModel.email
};

const LazyFooterModule = () => import('./footer/footer.component').then(
    Module => Module.FooterComponent
);

LazyMapTo('siteangular/components/footer')(LazyFooterModule, FooterEditConfig);