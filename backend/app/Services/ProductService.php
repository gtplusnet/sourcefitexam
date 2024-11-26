<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class ProductService
{
    public function fetchProducts()
    {
        $response = Http::get('https://dummyjson.com/products');
        
        if ($response->successful()) {
            return $response->json();
        }

        throw new \Exception('Unable to fetch products');
    }
}