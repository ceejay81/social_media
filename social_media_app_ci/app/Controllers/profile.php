namespace App\Controllers;

use App\Models\UserModel;

class Profile extends BaseController
{
    public function edit()
    {
        $userModel = new UserModel();
        $user = $userModel->find(session()->get('user_id'));
        return view('profile/edit', ['user' => $user]);
    }

    public function update()
    {
        $userModel = new UserModel();
        $userModel->update(session()->get('user_id'), $this->request->getPost());
        return redirect()->to('/profile/edit')->with('status', 'Profile updated!');
    }

    public function delete()
    {
        $userModel = new UserModel();
        $userModel->delete(session()->get('user_id'));
        return redirect()->to('/')->with('status', 'Profile deleted!');
    }
}
