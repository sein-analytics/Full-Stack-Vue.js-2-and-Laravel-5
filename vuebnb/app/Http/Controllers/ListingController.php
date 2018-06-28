<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Listing;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;

class ListingController extends Controller
{
    /**
     * @param Listing $listing
     * @return \Illuminate\Support\Collection
     */
    private function get_listing(Listing $listing)
    {
        $model = $listing->toArray();
        for($i = 1; $i <= 4; $i++){
            $model['image_' . $i] = asset(
                'images/' . $listing->id . '/image_' . $i . '.jpg'
            );
        }
        return collect(['listing' => $model]);
    }

    public function get_listing_api(Listing $listing)
    {
        $data = $this->get_listing($listing);
        return response()->json($data);
    }

    private function add_meta_data(Collection $collection, Request $request)
    {
        return $collection->merge([
            'path' => $request->getPathInfo(),
            'auth' => Auth::check(),
            'saved' => Auth::check() ? Auth::user()->saved : []
        ]);
    }

    private function get_listing_summaries()
    {
        /** @var  $collection Collection */
        $collection = Listing::all([
            'id', 'address', 'price_per_night'
        ]);
        $collection->transform(function ($listing){
            $listing->thumb = asset('images/' . $listing->id . '/image_1_thumb.jpg');
            return $listing;
        });
        return collect(['listings' => $collection->toArray()]);
    }

    public function get_listing_web(Listing $listing, Request $request)
    {
        $data = $this->get_listing($listing);
        $data = $this->add_meta_data($data, $request);
        return view('app', ['data' => $data]);
    }

    public function get_home_web(Request $request)
    {
        $data = $this->get_listing_summaries();
        $data = $this->add_meta_data($data, $request);
        return view('app', ['data' => $data]);
    }

    public function get_home_api()
    {
        $data = $this->get_listing_summaries();
        return response()->json($data);
    }

}
