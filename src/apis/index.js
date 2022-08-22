import site from './site';
import article from './article';
import user from './user';
import log from './log';
import system from './system';

export default {
    ...site,
    ...article,
    ...user,
    ...log,
    ...system
}