# `dataOciDataSafeUserAssessmentUsers` Submodule <a name="`dataOciDataSafeUserAssessmentUsers` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeUserAssessmentUsers <a name="DataOciDataSafeUserAssessmentUsers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users oci_data_safe_user_assessment_users}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_users

dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  user_assessment_id: str,
  access_level: str = None,
  account_status: str = None,
  are_all_schemas_accessible: typing.Union[bool, IResolvable] = None,
  authentication_type: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeUserAssessmentUsersFilter]] = None,
  id: str = None,
  schema_list: typing.List[str] = None,
  target_id: str = None,
  time_last_login_greater_than_or_equal_to: str = None,
  time_last_login_less_than: str = None,
  time_password_last_changed_greater_than_or_equal_to: str = None,
  time_password_last_changed_less_than: str = None,
  time_user_created_greater_than_or_equal_to: str = None,
  time_user_created_less_than: str = None,
  user_category: str = None,
  user_key: str = None,
  user_name: str = None,
  user_profile: str = None,
  user_role: str = None,
  user_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.userAssessmentId">user_assessment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_assessment_id DataOciDataSafeUserAssessmentUsers#user_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#access_level DataOciDataSafeUserAssessmentUsers#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.accountStatus">account_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#account_status DataOciDataSafeUserAssessmentUsers#account_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.areAllSchemasAccessible">are_all_schemas_accessible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#are_all_schemas_accessible DataOciDataSafeUserAssessmentUsers#are_all_schemas_accessible}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.authenticationType">authentication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#authentication_type DataOciDataSafeUserAssessmentUsers#authentication_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#compartment_id_in_subtree DataOciDataSafeUserAssessmentUsers#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter">DataOciDataSafeUserAssessmentUsersFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#id DataOciDataSafeUserAssessmentUsers#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.schemaList">schema_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#schema_list DataOciDataSafeUserAssessmentUsers#schema_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#target_id DataOciDataSafeUserAssessmentUsers#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.timeLastLoginGreaterThanOrEqualTo">time_last_login_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_last_login_greater_than_or_equal_to DataOciDataSafeUserAssessmentUsers#time_last_login_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.timeLastLoginLessThan">time_last_login_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_last_login_less_than DataOciDataSafeUserAssessmentUsers#time_last_login_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.timePasswordLastChangedGreaterThanOrEqualTo">time_password_last_changed_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_password_last_changed_greater_than_or_equal_to DataOciDataSafeUserAssessmentUsers#time_password_last_changed_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.timePasswordLastChangedLessThan">time_password_last_changed_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_password_last_changed_less_than DataOciDataSafeUserAssessmentUsers#time_password_last_changed_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.timeUserCreatedGreaterThanOrEqualTo">time_user_created_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_user_created_greater_than_or_equal_to DataOciDataSafeUserAssessmentUsers#time_user_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.timeUserCreatedLessThan">time_user_created_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_user_created_less_than DataOciDataSafeUserAssessmentUsers#time_user_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.userCategory">user_category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_category DataOciDataSafeUserAssessmentUsers#user_category}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.userKey">user_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_key DataOciDataSafeUserAssessmentUsers#user_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_name DataOciDataSafeUserAssessmentUsers#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.userProfile">user_profile</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_profile DataOciDataSafeUserAssessmentUsers#user_profile}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.userRole">user_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_role DataOciDataSafeUserAssessmentUsers#user_role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.userType">user_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_type DataOciDataSafeUserAssessmentUsers#user_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `user_assessment_id`<sup>Required</sup> <a name="user_assessment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.userAssessmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_assessment_id DataOciDataSafeUserAssessmentUsers#user_assessment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.accessLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#access_level DataOciDataSafeUserAssessmentUsers#access_level}.

---

##### `account_status`<sup>Optional</sup> <a name="account_status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.accountStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#account_status DataOciDataSafeUserAssessmentUsers#account_status}.

---

##### `are_all_schemas_accessible`<sup>Optional</sup> <a name="are_all_schemas_accessible" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.areAllSchemasAccessible"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#are_all_schemas_accessible DataOciDataSafeUserAssessmentUsers#are_all_schemas_accessible}.

---

##### `authentication_type`<sup>Optional</sup> <a name="authentication_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.authenticationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#authentication_type DataOciDataSafeUserAssessmentUsers#authentication_type}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#compartment_id_in_subtree DataOciDataSafeUserAssessmentUsers#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter">DataOciDataSafeUserAssessmentUsersFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#filter DataOciDataSafeUserAssessmentUsers#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#id DataOciDataSafeUserAssessmentUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schema_list`<sup>Optional</sup> <a name="schema_list" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.schemaList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#schema_list DataOciDataSafeUserAssessmentUsers#schema_list}.

---

##### `target_id`<sup>Optional</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.targetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#target_id DataOciDataSafeUserAssessmentUsers#target_id}.

---

##### `time_last_login_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_last_login_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.timeLastLoginGreaterThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_last_login_greater_than_or_equal_to DataOciDataSafeUserAssessmentUsers#time_last_login_greater_than_or_equal_to}.

---

##### `time_last_login_less_than`<sup>Optional</sup> <a name="time_last_login_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.timeLastLoginLessThan"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_last_login_less_than DataOciDataSafeUserAssessmentUsers#time_last_login_less_than}.

---

##### `time_password_last_changed_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_password_last_changed_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.timePasswordLastChangedGreaterThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_password_last_changed_greater_than_or_equal_to DataOciDataSafeUserAssessmentUsers#time_password_last_changed_greater_than_or_equal_to}.

---

##### `time_password_last_changed_less_than`<sup>Optional</sup> <a name="time_password_last_changed_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.timePasswordLastChangedLessThan"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_password_last_changed_less_than DataOciDataSafeUserAssessmentUsers#time_password_last_changed_less_than}.

---

##### `time_user_created_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_user_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.timeUserCreatedGreaterThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_user_created_greater_than_or_equal_to DataOciDataSafeUserAssessmentUsers#time_user_created_greater_than_or_equal_to}.

---

##### `time_user_created_less_than`<sup>Optional</sup> <a name="time_user_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.timeUserCreatedLessThan"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_user_created_less_than DataOciDataSafeUserAssessmentUsers#time_user_created_less_than}.

---

##### `user_category`<sup>Optional</sup> <a name="user_category" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.userCategory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_category DataOciDataSafeUserAssessmentUsers#user_category}.

---

##### `user_key`<sup>Optional</sup> <a name="user_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.userKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_key DataOciDataSafeUserAssessmentUsers#user_key}.

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.userName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_name DataOciDataSafeUserAssessmentUsers#user_name}.

---

##### `user_profile`<sup>Optional</sup> <a name="user_profile" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.userProfile"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_profile DataOciDataSafeUserAssessmentUsers#user_profile}.

---

##### `user_role`<sup>Optional</sup> <a name="user_role" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.userRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_role DataOciDataSafeUserAssessmentUsers#user_role}.

---

##### `user_type`<sup>Optional</sup> <a name="user_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.userType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_type DataOciDataSafeUserAssessmentUsers#user_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetAccountStatus">reset_account_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetAreAllSchemasAccessible">reset_are_all_schemas_accessible</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetAuthenticationType">reset_authentication_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetSchemaList">reset_schema_list</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTargetId">reset_target_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimeLastLoginGreaterThanOrEqualTo">reset_time_last_login_greater_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimeLastLoginLessThan">reset_time_last_login_less_than</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimePasswordLastChangedGreaterThanOrEqualTo">reset_time_password_last_changed_greater_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimePasswordLastChangedLessThan">reset_time_password_last_changed_less_than</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimeUserCreatedGreaterThanOrEqualTo">reset_time_user_created_greater_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimeUserCreatedLessThan">reset_time_user_created_less_than</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserCategory">reset_user_category</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserKey">reset_user_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserName">reset_user_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserProfile">reset_user_profile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserRole">reset_user_role</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserType">reset_user_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeUserAssessmentUsersFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter">DataOciDataSafeUserAssessmentUsersFilter</a>]]

---

##### `reset_access_level` <a name="reset_access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_account_status` <a name="reset_account_status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetAccountStatus"></a>

```python
def reset_account_status() -> None
```

##### `reset_are_all_schemas_accessible` <a name="reset_are_all_schemas_accessible" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetAreAllSchemasAccessible"></a>

```python
def reset_are_all_schemas_accessible() -> None
```

##### `reset_authentication_type` <a name="reset_authentication_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetAuthenticationType"></a>

```python
def reset_authentication_type() -> None
```

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_schema_list` <a name="reset_schema_list" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetSchemaList"></a>

```python
def reset_schema_list() -> None
```

##### `reset_target_id` <a name="reset_target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTargetId"></a>

```python
def reset_target_id() -> None
```

##### `reset_time_last_login_greater_than_or_equal_to` <a name="reset_time_last_login_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimeLastLoginGreaterThanOrEqualTo"></a>

```python
def reset_time_last_login_greater_than_or_equal_to() -> None
```

##### `reset_time_last_login_less_than` <a name="reset_time_last_login_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimeLastLoginLessThan"></a>

```python
def reset_time_last_login_less_than() -> None
```

##### `reset_time_password_last_changed_greater_than_or_equal_to` <a name="reset_time_password_last_changed_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimePasswordLastChangedGreaterThanOrEqualTo"></a>

```python
def reset_time_password_last_changed_greater_than_or_equal_to() -> None
```

##### `reset_time_password_last_changed_less_than` <a name="reset_time_password_last_changed_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimePasswordLastChangedLessThan"></a>

```python
def reset_time_password_last_changed_less_than() -> None
```

##### `reset_time_user_created_greater_than_or_equal_to` <a name="reset_time_user_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimeUserCreatedGreaterThanOrEqualTo"></a>

```python
def reset_time_user_created_greater_than_or_equal_to() -> None
```

##### `reset_time_user_created_less_than` <a name="reset_time_user_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimeUserCreatedLessThan"></a>

```python
def reset_time_user_created_less_than() -> None
```

##### `reset_user_category` <a name="reset_user_category" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserCategory"></a>

```python
def reset_user_category() -> None
```

##### `reset_user_key` <a name="reset_user_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserKey"></a>

```python
def reset_user_key() -> None
```

##### `reset_user_name` <a name="reset_user_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserName"></a>

```python
def reset_user_name() -> None
```

##### `reset_user_profile` <a name="reset_user_profile" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserProfile"></a>

```python
def reset_user_profile() -> None
```

##### `reset_user_role` <a name="reset_user_role" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserRole"></a>

```python
def reset_user_role() -> None
```

##### `reset_user_type` <a name="reset_user_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserType"></a>

```python
def reset_user_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeUserAssessmentUsers resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_users

dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_users

dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_users

dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_users

dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeUserAssessmentUsers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeUserAssessmentUsers to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeUserAssessmentUsers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeUserAssessmentUsers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList">DataOciDataSafeUserAssessmentUsersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.users">users</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList">DataOciDataSafeUserAssessmentUsersUsersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.accountStatusInput">account_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.areAllSchemasAccessibleInput">are_all_schemas_accessible_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.authenticationTypeInput">authentication_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter">DataOciDataSafeUserAssessmentUsersFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.schemaListInput">schema_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.targetIdInput">target_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeLastLoginGreaterThanOrEqualToInput">time_last_login_greater_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeLastLoginLessThanInput">time_last_login_less_than_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timePasswordLastChangedGreaterThanOrEqualToInput">time_password_last_changed_greater_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timePasswordLastChangedLessThanInput">time_password_last_changed_less_than_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeUserCreatedGreaterThanOrEqualToInput">time_user_created_greater_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeUserCreatedLessThanInput">time_user_created_less_than_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userAssessmentIdInput">user_assessment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userCategoryInput">user_category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userKeyInput">user_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userProfileInput">user_profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userRoleInput">user_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userTypeInput">user_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.accountStatus">account_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.areAllSchemasAccessible">are_all_schemas_accessible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.authenticationType">authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.schemaList">schema_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeLastLoginGreaterThanOrEqualTo">time_last_login_greater_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeLastLoginLessThan">time_last_login_less_than</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timePasswordLastChangedGreaterThanOrEqualTo">time_password_last_changed_greater_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timePasswordLastChangedLessThan">time_password_last_changed_less_than</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeUserCreatedGreaterThanOrEqualTo">time_user_created_greater_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeUserCreatedLessThan">time_user_created_less_than</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userAssessmentId">user_assessment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userCategory">user_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userKey">user_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userProfile">user_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userRole">user_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userType">user_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.filter"></a>

```python
filter: DataOciDataSafeUserAssessmentUsersFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList">DataOciDataSafeUserAssessmentUsersFilterList</a>

---

##### `users`<sup>Required</sup> <a name="users" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.users"></a>

```python
users: DataOciDataSafeUserAssessmentUsersUsersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList">DataOciDataSafeUserAssessmentUsersUsersList</a>

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `account_status_input`<sup>Optional</sup> <a name="account_status_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.accountStatusInput"></a>

```python
account_status_input: str
```

- *Type:* str

---

##### `are_all_schemas_accessible_input`<sup>Optional</sup> <a name="are_all_schemas_accessible_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.areAllSchemasAccessibleInput"></a>

```python
are_all_schemas_accessible_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `authentication_type_input`<sup>Optional</sup> <a name="authentication_type_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.authenticationTypeInput"></a>

```python
authentication_type_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeUserAssessmentUsersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter">DataOciDataSafeUserAssessmentUsersFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `schema_list_input`<sup>Optional</sup> <a name="schema_list_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.schemaListInput"></a>

```python
schema_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_id_input`<sup>Optional</sup> <a name="target_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.targetIdInput"></a>

```python
target_id_input: str
```

- *Type:* str

---

##### `time_last_login_greater_than_or_equal_to_input`<sup>Optional</sup> <a name="time_last_login_greater_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeLastLoginGreaterThanOrEqualToInput"></a>

```python
time_last_login_greater_than_or_equal_to_input: str
```

- *Type:* str

---

##### `time_last_login_less_than_input`<sup>Optional</sup> <a name="time_last_login_less_than_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeLastLoginLessThanInput"></a>

```python
time_last_login_less_than_input: str
```

- *Type:* str

---

##### `time_password_last_changed_greater_than_or_equal_to_input`<sup>Optional</sup> <a name="time_password_last_changed_greater_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timePasswordLastChangedGreaterThanOrEqualToInput"></a>

```python
time_password_last_changed_greater_than_or_equal_to_input: str
```

- *Type:* str

---

##### `time_password_last_changed_less_than_input`<sup>Optional</sup> <a name="time_password_last_changed_less_than_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timePasswordLastChangedLessThanInput"></a>

```python
time_password_last_changed_less_than_input: str
```

- *Type:* str

---

##### `time_user_created_greater_than_or_equal_to_input`<sup>Optional</sup> <a name="time_user_created_greater_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeUserCreatedGreaterThanOrEqualToInput"></a>

```python
time_user_created_greater_than_or_equal_to_input: str
```

- *Type:* str

---

##### `time_user_created_less_than_input`<sup>Optional</sup> <a name="time_user_created_less_than_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeUserCreatedLessThanInput"></a>

```python
time_user_created_less_than_input: str
```

- *Type:* str

---

##### `user_assessment_id_input`<sup>Optional</sup> <a name="user_assessment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userAssessmentIdInput"></a>

```python
user_assessment_id_input: str
```

- *Type:* str

---

##### `user_category_input`<sup>Optional</sup> <a name="user_category_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userCategoryInput"></a>

```python
user_category_input: str
```

- *Type:* str

---

##### `user_key_input`<sup>Optional</sup> <a name="user_key_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userKeyInput"></a>

```python
user_key_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `user_profile_input`<sup>Optional</sup> <a name="user_profile_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userProfileInput"></a>

```python
user_profile_input: str
```

- *Type:* str

---

##### `user_role_input`<sup>Optional</sup> <a name="user_role_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userRoleInput"></a>

```python
user_role_input: str
```

- *Type:* str

---

##### `user_type_input`<sup>Optional</sup> <a name="user_type_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userTypeInput"></a>

```python
user_type_input: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `account_status`<sup>Required</sup> <a name="account_status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.accountStatus"></a>

```python
account_status: str
```

- *Type:* str

---

##### `are_all_schemas_accessible`<sup>Required</sup> <a name="are_all_schemas_accessible" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.areAllSchemasAccessible"></a>

```python
are_all_schemas_accessible: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `schema_list`<sup>Required</sup> <a name="schema_list" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.schemaList"></a>

```python
schema_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `time_last_login_greater_than_or_equal_to`<sup>Required</sup> <a name="time_last_login_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeLastLoginGreaterThanOrEqualTo"></a>

```python
time_last_login_greater_than_or_equal_to: str
```

- *Type:* str

---

##### `time_last_login_less_than`<sup>Required</sup> <a name="time_last_login_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeLastLoginLessThan"></a>

```python
time_last_login_less_than: str
```

- *Type:* str

---

##### `time_password_last_changed_greater_than_or_equal_to`<sup>Required</sup> <a name="time_password_last_changed_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timePasswordLastChangedGreaterThanOrEqualTo"></a>

```python
time_password_last_changed_greater_than_or_equal_to: str
```

- *Type:* str

---

##### `time_password_last_changed_less_than`<sup>Required</sup> <a name="time_password_last_changed_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timePasswordLastChangedLessThan"></a>

```python
time_password_last_changed_less_than: str
```

- *Type:* str

---

##### `time_user_created_greater_than_or_equal_to`<sup>Required</sup> <a name="time_user_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeUserCreatedGreaterThanOrEqualTo"></a>

```python
time_user_created_greater_than_or_equal_to: str
```

- *Type:* str

---

##### `time_user_created_less_than`<sup>Required</sup> <a name="time_user_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeUserCreatedLessThan"></a>

```python
time_user_created_less_than: str
```

- *Type:* str

---

##### `user_assessment_id`<sup>Required</sup> <a name="user_assessment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userAssessmentId"></a>

```python
user_assessment_id: str
```

- *Type:* str

---

##### `user_category`<sup>Required</sup> <a name="user_category" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userCategory"></a>

```python
user_category: str
```

- *Type:* str

---

##### `user_key`<sup>Required</sup> <a name="user_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userKey"></a>

```python
user_key: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `user_profile`<sup>Required</sup> <a name="user_profile" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userProfile"></a>

```python
user_profile: str
```

- *Type:* str

---

##### `user_role`<sup>Required</sup> <a name="user_role" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userRole"></a>

```python
user_role: str
```

- *Type:* str

---

##### `user_type`<sup>Required</sup> <a name="user_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userType"></a>

```python
user_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeUserAssessmentUsersConfig <a name="DataOciDataSafeUserAssessmentUsersConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_users

dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  user_assessment_id: str,
  access_level: str = None,
  account_status: str = None,
  are_all_schemas_accessible: typing.Union[bool, IResolvable] = None,
  authentication_type: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeUserAssessmentUsersFilter]] = None,
  id: str = None,
  schema_list: typing.List[str] = None,
  target_id: str = None,
  time_last_login_greater_than_or_equal_to: str = None,
  time_last_login_less_than: str = None,
  time_password_last_changed_greater_than_or_equal_to: str = None,
  time_password_last_changed_less_than: str = None,
  time_user_created_greater_than_or_equal_to: str = None,
  time_user_created_less_than: str = None,
  user_category: str = None,
  user_key: str = None,
  user_name: str = None,
  user_profile: str = None,
  user_role: str = None,
  user_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userAssessmentId">user_assessment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_assessment_id DataOciDataSafeUserAssessmentUsers#user_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#access_level DataOciDataSafeUserAssessmentUsers#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.accountStatus">account_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#account_status DataOciDataSafeUserAssessmentUsers#account_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.areAllSchemasAccessible">are_all_schemas_accessible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#are_all_schemas_accessible DataOciDataSafeUserAssessmentUsers#are_all_schemas_accessible}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.authenticationType">authentication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#authentication_type DataOciDataSafeUserAssessmentUsers#authentication_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#compartment_id_in_subtree DataOciDataSafeUserAssessmentUsers#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter">DataOciDataSafeUserAssessmentUsersFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#id DataOciDataSafeUserAssessmentUsers#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.schemaList">schema_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#schema_list DataOciDataSafeUserAssessmentUsers#schema_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#target_id DataOciDataSafeUserAssessmentUsers#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timeLastLoginGreaterThanOrEqualTo">time_last_login_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_last_login_greater_than_or_equal_to DataOciDataSafeUserAssessmentUsers#time_last_login_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timeLastLoginLessThan">time_last_login_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_last_login_less_than DataOciDataSafeUserAssessmentUsers#time_last_login_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timePasswordLastChangedGreaterThanOrEqualTo">time_password_last_changed_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_password_last_changed_greater_than_or_equal_to DataOciDataSafeUserAssessmentUsers#time_password_last_changed_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timePasswordLastChangedLessThan">time_password_last_changed_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_password_last_changed_less_than DataOciDataSafeUserAssessmentUsers#time_password_last_changed_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timeUserCreatedGreaterThanOrEqualTo">time_user_created_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_user_created_greater_than_or_equal_to DataOciDataSafeUserAssessmentUsers#time_user_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timeUserCreatedLessThan">time_user_created_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_user_created_less_than DataOciDataSafeUserAssessmentUsers#time_user_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userCategory">user_category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_category DataOciDataSafeUserAssessmentUsers#user_category}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userKey">user_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_key DataOciDataSafeUserAssessmentUsers#user_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_name DataOciDataSafeUserAssessmentUsers#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userProfile">user_profile</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_profile DataOciDataSafeUserAssessmentUsers#user_profile}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userRole">user_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_role DataOciDataSafeUserAssessmentUsers#user_role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userType">user_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_type DataOciDataSafeUserAssessmentUsers#user_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `user_assessment_id`<sup>Required</sup> <a name="user_assessment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userAssessmentId"></a>

```python
user_assessment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_assessment_id DataOciDataSafeUserAssessmentUsers#user_assessment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#access_level DataOciDataSafeUserAssessmentUsers#access_level}.

---

##### `account_status`<sup>Optional</sup> <a name="account_status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.accountStatus"></a>

```python
account_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#account_status DataOciDataSafeUserAssessmentUsers#account_status}.

---

##### `are_all_schemas_accessible`<sup>Optional</sup> <a name="are_all_schemas_accessible" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.areAllSchemasAccessible"></a>

```python
are_all_schemas_accessible: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#are_all_schemas_accessible DataOciDataSafeUserAssessmentUsers#are_all_schemas_accessible}.

---

##### `authentication_type`<sup>Optional</sup> <a name="authentication_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#authentication_type DataOciDataSafeUserAssessmentUsers#authentication_type}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#compartment_id_in_subtree DataOciDataSafeUserAssessmentUsers#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeUserAssessmentUsersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter">DataOciDataSafeUserAssessmentUsersFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#filter DataOciDataSafeUserAssessmentUsers#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#id DataOciDataSafeUserAssessmentUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schema_list`<sup>Optional</sup> <a name="schema_list" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.schemaList"></a>

```python
schema_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#schema_list DataOciDataSafeUserAssessmentUsers#schema_list}.

---

##### `target_id`<sup>Optional</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#target_id DataOciDataSafeUserAssessmentUsers#target_id}.

---

##### `time_last_login_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_last_login_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timeLastLoginGreaterThanOrEqualTo"></a>

```python
time_last_login_greater_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_last_login_greater_than_or_equal_to DataOciDataSafeUserAssessmentUsers#time_last_login_greater_than_or_equal_to}.

---

##### `time_last_login_less_than`<sup>Optional</sup> <a name="time_last_login_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timeLastLoginLessThan"></a>

```python
time_last_login_less_than: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_last_login_less_than DataOciDataSafeUserAssessmentUsers#time_last_login_less_than}.

---

##### `time_password_last_changed_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_password_last_changed_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timePasswordLastChangedGreaterThanOrEqualTo"></a>

```python
time_password_last_changed_greater_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_password_last_changed_greater_than_or_equal_to DataOciDataSafeUserAssessmentUsers#time_password_last_changed_greater_than_or_equal_to}.

---

##### `time_password_last_changed_less_than`<sup>Optional</sup> <a name="time_password_last_changed_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timePasswordLastChangedLessThan"></a>

```python
time_password_last_changed_less_than: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_password_last_changed_less_than DataOciDataSafeUserAssessmentUsers#time_password_last_changed_less_than}.

---

##### `time_user_created_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_user_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timeUserCreatedGreaterThanOrEqualTo"></a>

```python
time_user_created_greater_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_user_created_greater_than_or_equal_to DataOciDataSafeUserAssessmentUsers#time_user_created_greater_than_or_equal_to}.

---

##### `time_user_created_less_than`<sup>Optional</sup> <a name="time_user_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timeUserCreatedLessThan"></a>

```python
time_user_created_less_than: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_user_created_less_than DataOciDataSafeUserAssessmentUsers#time_user_created_less_than}.

---

##### `user_category`<sup>Optional</sup> <a name="user_category" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userCategory"></a>

```python
user_category: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_category DataOciDataSafeUserAssessmentUsers#user_category}.

---

##### `user_key`<sup>Optional</sup> <a name="user_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userKey"></a>

```python
user_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_key DataOciDataSafeUserAssessmentUsers#user_key}.

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_name DataOciDataSafeUserAssessmentUsers#user_name}.

---

##### `user_profile`<sup>Optional</sup> <a name="user_profile" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userProfile"></a>

```python
user_profile: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_profile DataOciDataSafeUserAssessmentUsers#user_profile}.

---

##### `user_role`<sup>Optional</sup> <a name="user_role" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userRole"></a>

```python
user_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_role DataOciDataSafeUserAssessmentUsers#user_role}.

---

##### `user_type`<sup>Optional</sup> <a name="user_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userType"></a>

```python
user_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_type DataOciDataSafeUserAssessmentUsers#user_type}.

---

### DataOciDataSafeUserAssessmentUsersFilter <a name="DataOciDataSafeUserAssessmentUsersFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_users

dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#name DataOciDataSafeUserAssessmentUsers#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#values DataOciDataSafeUserAssessmentUsers#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#regex DataOciDataSafeUserAssessmentUsers#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#name DataOciDataSafeUserAssessmentUsers#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#values DataOciDataSafeUserAssessmentUsers#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#regex DataOciDataSafeUserAssessmentUsers#regex}.

---

### DataOciDataSafeUserAssessmentUsersUsers <a name="DataOciDataSafeUserAssessmentUsersUsers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_users

dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsers()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeUserAssessmentUsersFilterList <a name="DataOciDataSafeUserAssessmentUsersFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_users

dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeUserAssessmentUsersFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter">DataOciDataSafeUserAssessmentUsersFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeUserAssessmentUsersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter">DataOciDataSafeUserAssessmentUsersFilter</a>]]

---


### DataOciDataSafeUserAssessmentUsersFilterOutputReference <a name="DataOciDataSafeUserAssessmentUsersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_users

dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter">DataOciDataSafeUserAssessmentUsersFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeUserAssessmentUsersFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter">DataOciDataSafeUserAssessmentUsersFilter</a>]

---


### DataOciDataSafeUserAssessmentUsersUsersList <a name="DataOciDataSafeUserAssessmentUsersUsersList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_users

dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeUserAssessmentUsersUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeUserAssessmentUsersUsersOutputReference <a name="DataOciDataSafeUserAssessmentUsersUsersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_users

dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.accountStatus">account_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.adminRoles">admin_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.areAllSchemasAccessible">are_all_schemas_accessible</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.authenticationType">authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.schemaList">schema_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.timeLastLogin">time_last_login</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.timePasswordChanged">time_password_changed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.timeUserCreated">time_user_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.userCategory">user_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.userProfile">user_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.userTypes">user_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsers">DataOciDataSafeUserAssessmentUsersUsers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_status`<sup>Required</sup> <a name="account_status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.accountStatus"></a>

```python
account_status: str
```

- *Type:* str

---

##### `admin_roles`<sup>Required</sup> <a name="admin_roles" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.adminRoles"></a>

```python
admin_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `are_all_schemas_accessible`<sup>Required</sup> <a name="are_all_schemas_accessible" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.areAllSchemasAccessible"></a>

```python
are_all_schemas_accessible: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `schema_list`<sup>Required</sup> <a name="schema_list" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.schemaList"></a>

```python
schema_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `time_last_login`<sup>Required</sup> <a name="time_last_login" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.timeLastLogin"></a>

```python
time_last_login: str
```

- *Type:* str

---

##### `time_password_changed`<sup>Required</sup> <a name="time_password_changed" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.timePasswordChanged"></a>

```python
time_password_changed: str
```

- *Type:* str

---

##### `time_user_created`<sup>Required</sup> <a name="time_user_created" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.timeUserCreated"></a>

```python
time_user_created: str
```

- *Type:* str

---

##### `user_category`<sup>Required</sup> <a name="user_category" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.userCategory"></a>

```python
user_category: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `user_profile`<sup>Required</sup> <a name="user_profile" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.userProfile"></a>

```python
user_profile: str
```

- *Type:* str

---

##### `user_types`<sup>Required</sup> <a name="user_types" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.userTypes"></a>

```python
user_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeUserAssessmentUsersUsers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsers">DataOciDataSafeUserAssessmentUsersUsers</a>

---



