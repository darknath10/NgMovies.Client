import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieListResolver } from './services/movie-list-resolver.service';
import { MovieDetailResolver } from './services/movie-detail-resolver.service';
import { ReviewListResolver } from './services/review-list.resolver.service';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieTrailerComponent } from './movie-trailer/movie-trailer.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { ReviewListComponent } from './review-list/review-list.component';

import { AuthAdminGuard } from '../user/services/auth-admin-guard.service';

const moviesRoutes: Routes = [
    {
        path: 'movies',
        children: [
            {
                path: '',
                component: MovieListComponent,
                resolve: {movies: MovieListResolver}
            },
            {
                path: 'new',
                component: AddMovieComponent,
                canActivate: [AuthAdminGuard]
            },
            {
                path: ':id',
                component: MovieDetailComponent,
                resolve: { movie: MovieDetailResolver },
                children: [
                    {
                        path: '',
                        component: MovieTrailerComponent
                    },
                    {
                        path: 'edit',
                        component: EditMovieComponent,
                        canActivate: [AuthAdminGuard]
                    },
                    {
                        path: 'reviews',
                        component: ReviewListComponent,
                        resolve: { reviews: ReviewListResolver}
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(moviesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class MovieRoutingModule { }