import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import jsonapiClient from 'ra-jsonapi-client';

import { UserList } from 'components/react-admin/users';
import { CustomerList, CustomerEdit, CustomerCreate } from 'components/react-admin/customers';

// TODO  eliminar las dos lineas siguientes
import { PostList, PostEdit, PostCreate } from 'components/react-admin/posts';
import { MigrationList, MigrationEdit, MigrationCreate } from 'components/react-admin/migrations';

import CustomerIcon from '@mui/icons-material/SupportAgent';
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import MigrationIcon from '@mui/icons-material/Storage';
//import Icono from '@mui/icons-material/Medication';

import { AdminLayout } from 'components/react-admin/adminLayout';

import { ArtworkList} from 'components/react-admin/artworks';
import ArtworkIcon from '@mui/icons-material/Palette';

//const dataProvider = jsonServerProvider('http://encuentro.test/api');
const dataProvider = jsonapiClient('http://encuentro.test/api');

<Resource name="customers" list={CustomerList} icon={CustomerIcon} edit={CustomerEdit} create={CustomerCreate} />

const RAdmin = () => (
  <Admin
    basename="/dashboard"
    dataProvider={dataProvider}
    layout={AdminLayout}
   >
    <Resource name="customers"
    s list={CustomerList}
     icon={CustomerIcon} edit={CustomerEdit} 
     create={CustomerCreate} />

<Resource name="artworks" list={ArtworkList} icon={ArtworkIcon} />

    <Resource name="migrations"
      list={MigrationList} icon={MigrationIcon} edit={MigrationEdit} create={MigrationCreate}/>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} recordRepresentation="name" />
   
  </Admin>
)

export default RAdmin;