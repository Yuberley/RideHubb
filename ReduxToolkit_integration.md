Para reemplazar el manejo de contexto realizado en `AuthProvider` con Redux Toolkit, necesitamos hacer algunos cambios. Primero, definir un slice de Redux para manejar el estado de autenticación y luego usar este estado en lugar del contexto.

Voy a modificar los archivos para integrar Redux Toolkit:

1. **Instalar Redux Toolkit y React Redux**: Si aún no están instalados, necesitas agregarlos a tu proyecto.

   ```bash
   npm install @reduxjs/toolkit react-redux
   ```

2. **Configurar la store de Redux**:

   ```javascript
   // store.js
   import { configureStore } from '@reduxjs/toolkit';
   import authReducer from './features/auth/authSlice';

   export const store = configureStore({
     reducer: {
       auth: authReducer,
     },
   });
   ```

3. **Crear un authSlice para manejar el estado de autenticación**:

   ```javascript
   // features/auth/authSlice.js
   import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
   import { supabase } from '../../supabase/initSupabase';

   export const getSession = createAsyncThunk('auth/getSession', async () => {
     const { data, error } = await supabase.auth.getSession();
     if (error) throw new Error(error.message);
     return data.session;
   });

   const initialState = {
     session: null,
     isAuthenticated: false,
     status: 'idle',
     error: null
   };

   export const authSlice = createSlice({
     name: 'auth',
     initialState,
     reducers: {},
     extraReducers: (builder) => {
       builder
         .addCase(getSession.pending, (state) => {
           state.status = 'loading';
         })
         .addCase(getSession.fulfilled, (state, action) => {
           state.status = 'succeeded';
           state.session = action.payload;
           state.isAuthenticated = !!action.payload;
         })
         .addCase(getSession.rejected, (state, action) => {
           state.status = 'failed';
           state.error = action.error.message;
         });
     },
   });

   export default authSlice.reducer;
   ```

4. **Envolver tu aplicación con `Provider` de React Redux y pasarle la `store`**:

   ```javascript
   // App.tsx
   import React from 'react';
   import { Provider } from 'react-redux';
   import { StatusBar } from 'expo-status-bar';
   import { PaperProvider } from 'react-native-paper';
   import { registerRootComponent } from 'expo';
   import Navigation from "@/navigation/auth";
   import { store } from './store';

   const App = () => {
       return (
           <Provider store={store}>
               <PaperProvider>
                   <Navigation />
                   <StatusBar style="auto" />
               </PaperProvider>
           </Provider>
       );
   }

   registerRootComponent(App);

   export default App;
   ```

5. **Modificar `Navigation/index.tsx` para usar el estado de Redux en lugar del contexto**:

   ```javascript
   // Navigation/index.tsx
   import React from 'react';
   import { useSelector } from 'react-redux';
   import { NavigationContainer } from '@react-navigation/native';
   import Main from './MainStack';
   import Auth from './AuthStack';
   import Loading from '@/screens/utils/Loading';

   const Navigation = () => {
     const { isAuthenticated } = useSelector(state => state.auth);

     return (
       <NavigationContainer>
         {isAuthenticated == null && <Loading />}
         {isAuthenticated === false && <Auth />}
         {isAuthenticated === true && <Main />}
       </NavigationContainer>
     );
   };

   export default Navigation;
   ```

Con estos cambios, has migrado el manejo del estado de autenticación de Context API a Redux Toolkit. Ahora, el estado de autenticación se gestiona a través de Redux, lo que facilita el manejo de estados complejos y la lógica asíncrona.