import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

const isReloadLoanPage = async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    if (from.name === undefined) {
        next({name: 'no-loans'});
    } else {
        next();
    }
};

export default isReloadLoanPage;