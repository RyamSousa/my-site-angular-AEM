
import { LazyMapTo } from '@adobe/aem-angular-editable-components';

const AboutEditConfig = {
    emptyLabel: 'About',
    isEmpty: cqModel =>
        !cqModel || !cqModel.text
};

const LazyAboutModule = () => import('./about/about.component').then(
    Module => Module.AboutComponent
);

LazyMapTo('siteangular/components/about')(LazyAboutModule, AboutEditConfig);

const InformationsEditConfig = {
    emptyLabel: 'Informations',
    isEmpty: cqModel =>
        !cqModel || !cqModel.name || !cqModel.avatarUrl
};

const LazyInformationsModule = () => import('./informations/informations.component').then(
    Module => Module.InformationsComponent
);

LazyMapTo('siteangular/components/informations')(LazyInformationsModule, InformationsEditConfig);

const PortfolioEditConfig = {
    emptyLabel: 'Portfolio',
    isEmpty: cqModel =>
        !cqModel || !cqModel.repositories
};

const LazyPortfolioModule = () => import('./portfolio/portfolio.component').then(
    Module => Module.PortfolioComponent
);

LazyMapTo('siteangular/components/portfolio')(LazyPortfolioModule, PortfolioEditConfig);
