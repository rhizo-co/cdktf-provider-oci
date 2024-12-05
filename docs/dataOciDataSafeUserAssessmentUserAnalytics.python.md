# `dataOciDataSafeUserAssessmentUserAnalytics` Submodule <a name="`dataOciDataSafeUserAssessmentUserAnalytics` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeUserAssessmentUserAnalytics <a name="DataOciDataSafeUserAssessmentUserAnalytics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics oci_data_safe_user_assessment_user_analytics}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_user_analytics

dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics(
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
  authentication_type: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeUserAssessmentUserAnalyticsFilter]] = None,
  id: str = None,
  target_id: str = None,
  time_last_login_greater_than_or_equal_to: str = None,
  time_last_login_less_than: str = None,
  time_password_last_changed_greater_than_or_equal_to: str = None,
  time_password_last_changed_less_than: str = None,
  time_user_created_greater_than_or_equal_to: str = None,
  time_user_created_less_than: str = None,
  user_category: str = None,
  user_key: str = None,
  user_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.userAssessmentId">user_assessment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#user_assessment_id DataOciDataSafeUserAssessmentUserAnalytics#user_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#access_level DataOciDataSafeUserAssessmentUserAnalytics#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.accountStatus">account_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#account_status DataOciDataSafeUserAssessmentUserAnalytics#account_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.authenticationType">authentication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#authentication_type DataOciDataSafeUserAssessmentUserAnalytics#authentication_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#compartment_id_in_subtree DataOciDataSafeUserAssessmentUserAnalytics#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter">DataOciDataSafeUserAssessmentUserAnalyticsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#id DataOciDataSafeUserAssessmentUserAnalytics#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#target_id DataOciDataSafeUserAssessmentUserAnalytics#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.timeLastLoginGreaterThanOrEqualTo">time_last_login_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_last_login_greater_than_or_equal_to DataOciDataSafeUserAssessmentUserAnalytics#time_last_login_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.timeLastLoginLessThan">time_last_login_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_last_login_less_than DataOciDataSafeUserAssessmentUserAnalytics#time_last_login_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.timePasswordLastChangedGreaterThanOrEqualTo">time_password_last_changed_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_password_last_changed_greater_than_or_equal_to DataOciDataSafeUserAssessmentUserAnalytics#time_password_last_changed_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.timePasswordLastChangedLessThan">time_password_last_changed_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_password_last_changed_less_than DataOciDataSafeUserAssessmentUserAnalytics#time_password_last_changed_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.timeUserCreatedGreaterThanOrEqualTo">time_user_created_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_user_created_greater_than_or_equal_to DataOciDataSafeUserAssessmentUserAnalytics#time_user_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.timeUserCreatedLessThan">time_user_created_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_user_created_less_than DataOciDataSafeUserAssessmentUserAnalytics#time_user_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.userCategory">user_category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#user_category DataOciDataSafeUserAssessmentUserAnalytics#user_category}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.userKey">user_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#user_key DataOciDataSafeUserAssessmentUserAnalytics#user_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#user_name DataOciDataSafeUserAssessmentUserAnalytics#user_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `user_assessment_id`<sup>Required</sup> <a name="user_assessment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.userAssessmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#user_assessment_id DataOciDataSafeUserAssessmentUserAnalytics#user_assessment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.accessLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#access_level DataOciDataSafeUserAssessmentUserAnalytics#access_level}.

---

##### `account_status`<sup>Optional</sup> <a name="account_status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.accountStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#account_status DataOciDataSafeUserAssessmentUserAnalytics#account_status}.

---

##### `authentication_type`<sup>Optional</sup> <a name="authentication_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.authenticationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#authentication_type DataOciDataSafeUserAssessmentUserAnalytics#authentication_type}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#compartment_id_in_subtree DataOciDataSafeUserAssessmentUserAnalytics#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter">DataOciDataSafeUserAssessmentUserAnalyticsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#filter DataOciDataSafeUserAssessmentUserAnalytics#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#id DataOciDataSafeUserAssessmentUserAnalytics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `target_id`<sup>Optional</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.targetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#target_id DataOciDataSafeUserAssessmentUserAnalytics#target_id}.

---

##### `time_last_login_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_last_login_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.timeLastLoginGreaterThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_last_login_greater_than_or_equal_to DataOciDataSafeUserAssessmentUserAnalytics#time_last_login_greater_than_or_equal_to}.

---

##### `time_last_login_less_than`<sup>Optional</sup> <a name="time_last_login_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.timeLastLoginLessThan"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_last_login_less_than DataOciDataSafeUserAssessmentUserAnalytics#time_last_login_less_than}.

---

##### `time_password_last_changed_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_password_last_changed_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.timePasswordLastChangedGreaterThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_password_last_changed_greater_than_or_equal_to DataOciDataSafeUserAssessmentUserAnalytics#time_password_last_changed_greater_than_or_equal_to}.

---

##### `time_password_last_changed_less_than`<sup>Optional</sup> <a name="time_password_last_changed_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.timePasswordLastChangedLessThan"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_password_last_changed_less_than DataOciDataSafeUserAssessmentUserAnalytics#time_password_last_changed_less_than}.

---

##### `time_user_created_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_user_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.timeUserCreatedGreaterThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_user_created_greater_than_or_equal_to DataOciDataSafeUserAssessmentUserAnalytics#time_user_created_greater_than_or_equal_to}.

---

##### `time_user_created_less_than`<sup>Optional</sup> <a name="time_user_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.timeUserCreatedLessThan"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_user_created_less_than DataOciDataSafeUserAssessmentUserAnalytics#time_user_created_less_than}.

---

##### `user_category`<sup>Optional</sup> <a name="user_category" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.userCategory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#user_category DataOciDataSafeUserAssessmentUserAnalytics#user_category}.

---

##### `user_key`<sup>Optional</sup> <a name="user_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.userKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#user_key DataOciDataSafeUserAssessmentUserAnalytics#user_key}.

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.userName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#user_name DataOciDataSafeUserAssessmentUserAnalytics#user_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetAccountStatus">reset_account_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetAuthenticationType">reset_authentication_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTargetId">reset_target_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTimeLastLoginGreaterThanOrEqualTo">reset_time_last_login_greater_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTimeLastLoginLessThan">reset_time_last_login_less_than</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTimePasswordLastChangedGreaterThanOrEqualTo">reset_time_password_last_changed_greater_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTimePasswordLastChangedLessThan">reset_time_password_last_changed_less_than</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTimeUserCreatedGreaterThanOrEqualTo">reset_time_user_created_greater_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTimeUserCreatedLessThan">reset_time_user_created_less_than</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetUserCategory">reset_user_category</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetUserKey">reset_user_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetUserName">reset_user_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeUserAssessmentUserAnalyticsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter">DataOciDataSafeUserAssessmentUserAnalyticsFilter</a>]]

---

##### `reset_access_level` <a name="reset_access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_account_status` <a name="reset_account_status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetAccountStatus"></a>

```python
def reset_account_status() -> None
```

##### `reset_authentication_type` <a name="reset_authentication_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetAuthenticationType"></a>

```python
def reset_authentication_type() -> None
```

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_target_id` <a name="reset_target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTargetId"></a>

```python
def reset_target_id() -> None
```

##### `reset_time_last_login_greater_than_or_equal_to` <a name="reset_time_last_login_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTimeLastLoginGreaterThanOrEqualTo"></a>

```python
def reset_time_last_login_greater_than_or_equal_to() -> None
```

##### `reset_time_last_login_less_than` <a name="reset_time_last_login_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTimeLastLoginLessThan"></a>

```python
def reset_time_last_login_less_than() -> None
```

##### `reset_time_password_last_changed_greater_than_or_equal_to` <a name="reset_time_password_last_changed_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTimePasswordLastChangedGreaterThanOrEqualTo"></a>

```python
def reset_time_password_last_changed_greater_than_or_equal_to() -> None
```

##### `reset_time_password_last_changed_less_than` <a name="reset_time_password_last_changed_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTimePasswordLastChangedLessThan"></a>

```python
def reset_time_password_last_changed_less_than() -> None
```

##### `reset_time_user_created_greater_than_or_equal_to` <a name="reset_time_user_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTimeUserCreatedGreaterThanOrEqualTo"></a>

```python
def reset_time_user_created_greater_than_or_equal_to() -> None
```

##### `reset_time_user_created_less_than` <a name="reset_time_user_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTimeUserCreatedLessThan"></a>

```python
def reset_time_user_created_less_than() -> None
```

##### `reset_user_category` <a name="reset_user_category" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetUserCategory"></a>

```python
def reset_user_category() -> None
```

##### `reset_user_key` <a name="reset_user_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetUserKey"></a>

```python
def reset_user_key() -> None
```

##### `reset_user_name` <a name="reset_user_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetUserName"></a>

```python
def reset_user_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeUserAssessmentUserAnalytics resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_user_analytics

dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_user_analytics

dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_user_analytics

dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_user_analytics

dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeUserAssessmentUserAnalytics resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeUserAssessmentUserAnalytics to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeUserAssessmentUserAnalytics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeUserAssessmentUserAnalytics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList">DataOciDataSafeUserAssessmentUserAnalyticsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userAggregations">user_aggregations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList">DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.accountStatusInput">account_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.authenticationTypeInput">authentication_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter">DataOciDataSafeUserAssessmentUserAnalyticsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.targetIdInput">target_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeLastLoginGreaterThanOrEqualToInput">time_last_login_greater_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeLastLoginLessThanInput">time_last_login_less_than_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timePasswordLastChangedGreaterThanOrEqualToInput">time_password_last_changed_greater_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timePasswordLastChangedLessThanInput">time_password_last_changed_less_than_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeUserCreatedGreaterThanOrEqualToInput">time_user_created_greater_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeUserCreatedLessThanInput">time_user_created_less_than_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userAssessmentIdInput">user_assessment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userCategoryInput">user_category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userKeyInput">user_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.accountStatus">account_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.authenticationType">authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeLastLoginGreaterThanOrEqualTo">time_last_login_greater_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeLastLoginLessThan">time_last_login_less_than</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timePasswordLastChangedGreaterThanOrEqualTo">time_password_last_changed_greater_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timePasswordLastChangedLessThan">time_password_last_changed_less_than</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeUserCreatedGreaterThanOrEqualTo">time_user_created_greater_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeUserCreatedLessThan">time_user_created_less_than</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userAssessmentId">user_assessment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userCategory">user_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userKey">user_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userName">user_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.filter"></a>

```python
filter: DataOciDataSafeUserAssessmentUserAnalyticsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList">DataOciDataSafeUserAssessmentUserAnalyticsFilterList</a>

---

##### `user_aggregations`<sup>Required</sup> <a name="user_aggregations" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userAggregations"></a>

```python
user_aggregations: DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList">DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList</a>

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `account_status_input`<sup>Optional</sup> <a name="account_status_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.accountStatusInput"></a>

```python
account_status_input: str
```

- *Type:* str

---

##### `authentication_type_input`<sup>Optional</sup> <a name="authentication_type_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.authenticationTypeInput"></a>

```python
authentication_type_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeUserAssessmentUserAnalyticsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter">DataOciDataSafeUserAssessmentUserAnalyticsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `target_id_input`<sup>Optional</sup> <a name="target_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.targetIdInput"></a>

```python
target_id_input: str
```

- *Type:* str

---

##### `time_last_login_greater_than_or_equal_to_input`<sup>Optional</sup> <a name="time_last_login_greater_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeLastLoginGreaterThanOrEqualToInput"></a>

```python
time_last_login_greater_than_or_equal_to_input: str
```

- *Type:* str

---

##### `time_last_login_less_than_input`<sup>Optional</sup> <a name="time_last_login_less_than_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeLastLoginLessThanInput"></a>

```python
time_last_login_less_than_input: str
```

- *Type:* str

---

##### `time_password_last_changed_greater_than_or_equal_to_input`<sup>Optional</sup> <a name="time_password_last_changed_greater_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timePasswordLastChangedGreaterThanOrEqualToInput"></a>

```python
time_password_last_changed_greater_than_or_equal_to_input: str
```

- *Type:* str

---

##### `time_password_last_changed_less_than_input`<sup>Optional</sup> <a name="time_password_last_changed_less_than_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timePasswordLastChangedLessThanInput"></a>

```python
time_password_last_changed_less_than_input: str
```

- *Type:* str

---

##### `time_user_created_greater_than_or_equal_to_input`<sup>Optional</sup> <a name="time_user_created_greater_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeUserCreatedGreaterThanOrEqualToInput"></a>

```python
time_user_created_greater_than_or_equal_to_input: str
```

- *Type:* str

---

##### `time_user_created_less_than_input`<sup>Optional</sup> <a name="time_user_created_less_than_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeUserCreatedLessThanInput"></a>

```python
time_user_created_less_than_input: str
```

- *Type:* str

---

##### `user_assessment_id_input`<sup>Optional</sup> <a name="user_assessment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userAssessmentIdInput"></a>

```python
user_assessment_id_input: str
```

- *Type:* str

---

##### `user_category_input`<sup>Optional</sup> <a name="user_category_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userCategoryInput"></a>

```python
user_category_input: str
```

- *Type:* str

---

##### `user_key_input`<sup>Optional</sup> <a name="user_key_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userKeyInput"></a>

```python
user_key_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `account_status`<sup>Required</sup> <a name="account_status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.accountStatus"></a>

```python
account_status: str
```

- *Type:* str

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `time_last_login_greater_than_or_equal_to`<sup>Required</sup> <a name="time_last_login_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeLastLoginGreaterThanOrEqualTo"></a>

```python
time_last_login_greater_than_or_equal_to: str
```

- *Type:* str

---

##### `time_last_login_less_than`<sup>Required</sup> <a name="time_last_login_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeLastLoginLessThan"></a>

```python
time_last_login_less_than: str
```

- *Type:* str

---

##### `time_password_last_changed_greater_than_or_equal_to`<sup>Required</sup> <a name="time_password_last_changed_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timePasswordLastChangedGreaterThanOrEqualTo"></a>

```python
time_password_last_changed_greater_than_or_equal_to: str
```

- *Type:* str

---

##### `time_password_last_changed_less_than`<sup>Required</sup> <a name="time_password_last_changed_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timePasswordLastChangedLessThan"></a>

```python
time_password_last_changed_less_than: str
```

- *Type:* str

---

##### `time_user_created_greater_than_or_equal_to`<sup>Required</sup> <a name="time_user_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeUserCreatedGreaterThanOrEqualTo"></a>

```python
time_user_created_greater_than_or_equal_to: str
```

- *Type:* str

---

##### `time_user_created_less_than`<sup>Required</sup> <a name="time_user_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeUserCreatedLessThan"></a>

```python
time_user_created_less_than: str
```

- *Type:* str

---

##### `user_assessment_id`<sup>Required</sup> <a name="user_assessment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userAssessmentId"></a>

```python
user_assessment_id: str
```

- *Type:* str

---

##### `user_category`<sup>Required</sup> <a name="user_category" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userCategory"></a>

```python
user_category: str
```

- *Type:* str

---

##### `user_key`<sup>Required</sup> <a name="user_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userKey"></a>

```python
user_key: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeUserAssessmentUserAnalyticsConfig <a name="DataOciDataSafeUserAssessmentUserAnalyticsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_user_analytics

dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig(
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
  authentication_type: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeUserAssessmentUserAnalyticsFilter]] = None,
  id: str = None,
  target_id: str = None,
  time_last_login_greater_than_or_equal_to: str = None,
  time_last_login_less_than: str = None,
  time_password_last_changed_greater_than_or_equal_to: str = None,
  time_password_last_changed_less_than: str = None,
  time_user_created_greater_than_or_equal_to: str = None,
  time_user_created_less_than: str = None,
  user_category: str = None,
  user_key: str = None,
  user_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.userAssessmentId">user_assessment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#user_assessment_id DataOciDataSafeUserAssessmentUserAnalytics#user_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#access_level DataOciDataSafeUserAssessmentUserAnalytics#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.accountStatus">account_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#account_status DataOciDataSafeUserAssessmentUserAnalytics#account_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.authenticationType">authentication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#authentication_type DataOciDataSafeUserAssessmentUserAnalytics#authentication_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#compartment_id_in_subtree DataOciDataSafeUserAssessmentUserAnalytics#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter">DataOciDataSafeUserAssessmentUserAnalyticsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#id DataOciDataSafeUserAssessmentUserAnalytics#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#target_id DataOciDataSafeUserAssessmentUserAnalytics#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.timeLastLoginGreaterThanOrEqualTo">time_last_login_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_last_login_greater_than_or_equal_to DataOciDataSafeUserAssessmentUserAnalytics#time_last_login_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.timeLastLoginLessThan">time_last_login_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_last_login_less_than DataOciDataSafeUserAssessmentUserAnalytics#time_last_login_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.timePasswordLastChangedGreaterThanOrEqualTo">time_password_last_changed_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_password_last_changed_greater_than_or_equal_to DataOciDataSafeUserAssessmentUserAnalytics#time_password_last_changed_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.timePasswordLastChangedLessThan">time_password_last_changed_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_password_last_changed_less_than DataOciDataSafeUserAssessmentUserAnalytics#time_password_last_changed_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.timeUserCreatedGreaterThanOrEqualTo">time_user_created_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_user_created_greater_than_or_equal_to DataOciDataSafeUserAssessmentUserAnalytics#time_user_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.timeUserCreatedLessThan">time_user_created_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_user_created_less_than DataOciDataSafeUserAssessmentUserAnalytics#time_user_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.userCategory">user_category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#user_category DataOciDataSafeUserAssessmentUserAnalytics#user_category}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.userKey">user_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#user_key DataOciDataSafeUserAssessmentUserAnalytics#user_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#user_name DataOciDataSafeUserAssessmentUserAnalytics#user_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `user_assessment_id`<sup>Required</sup> <a name="user_assessment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.userAssessmentId"></a>

```python
user_assessment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#user_assessment_id DataOciDataSafeUserAssessmentUserAnalytics#user_assessment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#access_level DataOciDataSafeUserAssessmentUserAnalytics#access_level}.

---

##### `account_status`<sup>Optional</sup> <a name="account_status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.accountStatus"></a>

```python
account_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#account_status DataOciDataSafeUserAssessmentUserAnalytics#account_status}.

---

##### `authentication_type`<sup>Optional</sup> <a name="authentication_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#authentication_type DataOciDataSafeUserAssessmentUserAnalytics#authentication_type}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#compartment_id_in_subtree DataOciDataSafeUserAssessmentUserAnalytics#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeUserAssessmentUserAnalyticsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter">DataOciDataSafeUserAssessmentUserAnalyticsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#filter DataOciDataSafeUserAssessmentUserAnalytics#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#id DataOciDataSafeUserAssessmentUserAnalytics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `target_id`<sup>Optional</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#target_id DataOciDataSafeUserAssessmentUserAnalytics#target_id}.

---

##### `time_last_login_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_last_login_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.timeLastLoginGreaterThanOrEqualTo"></a>

```python
time_last_login_greater_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_last_login_greater_than_or_equal_to DataOciDataSafeUserAssessmentUserAnalytics#time_last_login_greater_than_or_equal_to}.

---

##### `time_last_login_less_than`<sup>Optional</sup> <a name="time_last_login_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.timeLastLoginLessThan"></a>

```python
time_last_login_less_than: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_last_login_less_than DataOciDataSafeUserAssessmentUserAnalytics#time_last_login_less_than}.

---

##### `time_password_last_changed_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_password_last_changed_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.timePasswordLastChangedGreaterThanOrEqualTo"></a>

```python
time_password_last_changed_greater_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_password_last_changed_greater_than_or_equal_to DataOciDataSafeUserAssessmentUserAnalytics#time_password_last_changed_greater_than_or_equal_to}.

---

##### `time_password_last_changed_less_than`<sup>Optional</sup> <a name="time_password_last_changed_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.timePasswordLastChangedLessThan"></a>

```python
time_password_last_changed_less_than: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_password_last_changed_less_than DataOciDataSafeUserAssessmentUserAnalytics#time_password_last_changed_less_than}.

---

##### `time_user_created_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_user_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.timeUserCreatedGreaterThanOrEqualTo"></a>

```python
time_user_created_greater_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_user_created_greater_than_or_equal_to DataOciDataSafeUserAssessmentUserAnalytics#time_user_created_greater_than_or_equal_to}.

---

##### `time_user_created_less_than`<sup>Optional</sup> <a name="time_user_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.timeUserCreatedLessThan"></a>

```python
time_user_created_less_than: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_user_created_less_than DataOciDataSafeUserAssessmentUserAnalytics#time_user_created_less_than}.

---

##### `user_category`<sup>Optional</sup> <a name="user_category" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.userCategory"></a>

```python
user_category: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#user_category DataOciDataSafeUserAssessmentUserAnalytics#user_category}.

---

##### `user_key`<sup>Optional</sup> <a name="user_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.userKey"></a>

```python
user_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#user_key DataOciDataSafeUserAssessmentUserAnalytics#user_key}.

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#user_name DataOciDataSafeUserAssessmentUserAnalytics#user_name}.

---

### DataOciDataSafeUserAssessmentUserAnalyticsFilter <a name="DataOciDataSafeUserAssessmentUserAnalyticsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_user_analytics

dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#name DataOciDataSafeUserAssessmentUserAnalytics#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#values DataOciDataSafeUserAssessmentUserAnalytics#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#regex DataOciDataSafeUserAssessmentUserAnalytics#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#name DataOciDataSafeUserAssessmentUserAnalytics#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#values DataOciDataSafeUserAssessmentUserAnalytics#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#regex DataOciDataSafeUserAssessmentUserAnalytics#regex}.

---

### DataOciDataSafeUserAssessmentUserAnalyticsUserAggregations <a name="DataOciDataSafeUserAssessmentUserAnalyticsUserAggregations" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_user_analytics

dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregations()
```


### DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItems <a name="DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_user_analytics

dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeUserAssessmentUserAnalyticsFilterList <a name="DataOciDataSafeUserAssessmentUserAnalyticsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_user_analytics

dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter">DataOciDataSafeUserAssessmentUserAnalyticsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeUserAssessmentUserAnalyticsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter">DataOciDataSafeUserAssessmentUserAnalyticsFilter</a>]]

---


### DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference <a name="DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_user_analytics

dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter">DataOciDataSafeUserAssessmentUserAnalyticsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeUserAssessmentUserAnalyticsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter">DataOciDataSafeUserAssessmentUserAnalyticsFilter</a>]

---


### DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList <a name="DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_user_analytics

dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference <a name="DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_user_analytics

dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItems">DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItems">DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItems</a>

---


### DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList <a name="DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_user_analytics

dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference <a name="DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_user_analytics

dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList">DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregations">DataOciDataSafeUserAssessmentUserAnalyticsUserAggregations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.property.items"></a>

```python
items: DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList">DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeUserAssessmentUserAnalyticsUserAggregations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregations">DataOciDataSafeUserAssessmentUserAnalyticsUserAggregations</a>

---



