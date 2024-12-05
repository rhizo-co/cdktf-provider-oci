# `dataOciDataSafeListUserGrants` Submodule <a name="`dataOciDataSafeListUserGrants` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeListUserGrants <a name="DataOciDataSafeListUserGrants" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants oci_data_safe_list_user_grants}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_list_user_grants

dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants(
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
  user_key: str,
  depth_level: typing.Union[int, float] = None,
  depth_level_greater_than_or_equal_to: typing.Union[int, float] = None,
  depth_level_less_than: typing.Union[int, float] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeListUserGrantsFilter]] = None,
  grant_key: str = None,
  grant_name: str = None,
  id: str = None,
  privilege_category: str = None,
  privilege_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.userAssessmentId">user_assessment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#user_assessment_id DataOciDataSafeListUserGrants#user_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.userKey">user_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#user_key DataOciDataSafeListUserGrants#user_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.depthLevel">depth_level</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level DataOciDataSafeListUserGrants#depth_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.depthLevelGreaterThanOrEqualTo">depth_level_greater_than_or_equal_to</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level_greater_than_or_equal_to DataOciDataSafeListUserGrants#depth_level_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.depthLevelLessThan">depth_level_less_than</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level_less_than DataOciDataSafeListUserGrants#depth_level_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter">DataOciDataSafeListUserGrantsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.grantKey">grant_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#grant_key DataOciDataSafeListUserGrants#grant_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.grantName">grant_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#grant_name DataOciDataSafeListUserGrants#grant_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#id DataOciDataSafeListUserGrants#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.privilegeCategory">privilege_category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#privilege_category DataOciDataSafeListUserGrants#privilege_category}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.privilegeType">privilege_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#privilege_type DataOciDataSafeListUserGrants#privilege_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `user_assessment_id`<sup>Required</sup> <a name="user_assessment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.userAssessmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#user_assessment_id DataOciDataSafeListUserGrants#user_assessment_id}.

---

##### `user_key`<sup>Required</sup> <a name="user_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.userKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#user_key DataOciDataSafeListUserGrants#user_key}.

---

##### `depth_level`<sup>Optional</sup> <a name="depth_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.depthLevel"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level DataOciDataSafeListUserGrants#depth_level}.

---

##### `depth_level_greater_than_or_equal_to`<sup>Optional</sup> <a name="depth_level_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.depthLevelGreaterThanOrEqualTo"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level_greater_than_or_equal_to DataOciDataSafeListUserGrants#depth_level_greater_than_or_equal_to}.

---

##### `depth_level_less_than`<sup>Optional</sup> <a name="depth_level_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.depthLevelLessThan"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level_less_than DataOciDataSafeListUserGrants#depth_level_less_than}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter">DataOciDataSafeListUserGrantsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#filter DataOciDataSafeListUserGrants#filter}

---

##### `grant_key`<sup>Optional</sup> <a name="grant_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.grantKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#grant_key DataOciDataSafeListUserGrants#grant_key}.

---

##### `grant_name`<sup>Optional</sup> <a name="grant_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.grantName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#grant_name DataOciDataSafeListUserGrants#grant_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#id DataOciDataSafeListUserGrants#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privilege_category`<sup>Optional</sup> <a name="privilege_category" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.privilegeCategory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#privilege_category DataOciDataSafeListUserGrants#privilege_category}.

---

##### `privilege_type`<sup>Optional</sup> <a name="privilege_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.privilegeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#privilege_type DataOciDataSafeListUserGrants#privilege_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetDepthLevel">reset_depth_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetDepthLevelGreaterThanOrEqualTo">reset_depth_level_greater_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetDepthLevelLessThan">reset_depth_level_less_than</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetGrantKey">reset_grant_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetGrantName">reset_grant_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetPrivilegeCategory">reset_privilege_category</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetPrivilegeType">reset_privilege_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeListUserGrantsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter">DataOciDataSafeListUserGrantsFilter</a>]]

---

##### `reset_depth_level` <a name="reset_depth_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetDepthLevel"></a>

```python
def reset_depth_level() -> None
```

##### `reset_depth_level_greater_than_or_equal_to` <a name="reset_depth_level_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetDepthLevelGreaterThanOrEqualTo"></a>

```python
def reset_depth_level_greater_than_or_equal_to() -> None
```

##### `reset_depth_level_less_than` <a name="reset_depth_level_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetDepthLevelLessThan"></a>

```python
def reset_depth_level_less_than() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_grant_key` <a name="reset_grant_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetGrantKey"></a>

```python
def reset_grant_key() -> None
```

##### `reset_grant_name` <a name="reset_grant_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetGrantName"></a>

```python
def reset_grant_name() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_privilege_category` <a name="reset_privilege_category" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetPrivilegeCategory"></a>

```python
def reset_privilege_category() -> None
```

##### `reset_privilege_type` <a name="reset_privilege_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetPrivilegeType"></a>

```python
def reset_privilege_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeListUserGrants resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_list_user_grants

dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_list_user_grants

dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_list_user_grants

dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_list_user_grants

dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeListUserGrants resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeListUserGrants to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeListUserGrants that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeListUserGrants to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList">DataOciDataSafeListUserGrantsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grants">grants</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList">DataOciDataSafeListUserGrantsGrantsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelGreaterThanOrEqualToInput">depth_level_greater_than_or_equal_to_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelInput">depth_level_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelLessThanInput">depth_level_less_than_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter">DataOciDataSafeListUserGrantsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantKeyInput">grant_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantNameInput">grant_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeCategoryInput">privilege_category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeTypeInput">privilege_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userAssessmentIdInput">user_assessment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userKeyInput">user_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevel">depth_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelGreaterThanOrEqualTo">depth_level_greater_than_or_equal_to</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelLessThan">depth_level_less_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantKey">grant_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantName">grant_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeCategory">privilege_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeType">privilege_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userAssessmentId">user_assessment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userKey">user_key</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.filter"></a>

```python
filter: DataOciDataSafeListUserGrantsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList">DataOciDataSafeListUserGrantsFilterList</a>

---

##### `grants`<sup>Required</sup> <a name="grants" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grants"></a>

```python
grants: DataOciDataSafeListUserGrantsGrantsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList">DataOciDataSafeListUserGrantsGrantsList</a>

---

##### `depth_level_greater_than_or_equal_to_input`<sup>Optional</sup> <a name="depth_level_greater_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelGreaterThanOrEqualToInput"></a>

```python
depth_level_greater_than_or_equal_to_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depth_level_input`<sup>Optional</sup> <a name="depth_level_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelInput"></a>

```python
depth_level_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depth_level_less_than_input`<sup>Optional</sup> <a name="depth_level_less_than_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelLessThanInput"></a>

```python
depth_level_less_than_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeListUserGrantsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter">DataOciDataSafeListUserGrantsFilter</a>]]

---

##### `grant_key_input`<sup>Optional</sup> <a name="grant_key_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantKeyInput"></a>

```python
grant_key_input: str
```

- *Type:* str

---

##### `grant_name_input`<sup>Optional</sup> <a name="grant_name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantNameInput"></a>

```python
grant_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `privilege_category_input`<sup>Optional</sup> <a name="privilege_category_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeCategoryInput"></a>

```python
privilege_category_input: str
```

- *Type:* str

---

##### `privilege_type_input`<sup>Optional</sup> <a name="privilege_type_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeTypeInput"></a>

```python
privilege_type_input: str
```

- *Type:* str

---

##### `user_assessment_id_input`<sup>Optional</sup> <a name="user_assessment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userAssessmentIdInput"></a>

```python
user_assessment_id_input: str
```

- *Type:* str

---

##### `user_key_input`<sup>Optional</sup> <a name="user_key_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userKeyInput"></a>

```python
user_key_input: str
```

- *Type:* str

---

##### `depth_level`<sup>Required</sup> <a name="depth_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevel"></a>

```python
depth_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depth_level_greater_than_or_equal_to`<sup>Required</sup> <a name="depth_level_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelGreaterThanOrEqualTo"></a>

```python
depth_level_greater_than_or_equal_to: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depth_level_less_than`<sup>Required</sup> <a name="depth_level_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelLessThan"></a>

```python
depth_level_less_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `grant_key`<sup>Required</sup> <a name="grant_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantKey"></a>

```python
grant_key: str
```

- *Type:* str

---

##### `grant_name`<sup>Required</sup> <a name="grant_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantName"></a>

```python
grant_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `privilege_category`<sup>Required</sup> <a name="privilege_category" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeCategory"></a>

```python
privilege_category: str
```

- *Type:* str

---

##### `privilege_type`<sup>Required</sup> <a name="privilege_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeType"></a>

```python
privilege_type: str
```

- *Type:* str

---

##### `user_assessment_id`<sup>Required</sup> <a name="user_assessment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userAssessmentId"></a>

```python
user_assessment_id: str
```

- *Type:* str

---

##### `user_key`<sup>Required</sup> <a name="user_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userKey"></a>

```python
user_key: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeListUserGrantsConfig <a name="DataOciDataSafeListUserGrantsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_list_user_grants

dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  user_assessment_id: str,
  user_key: str,
  depth_level: typing.Union[int, float] = None,
  depth_level_greater_than_or_equal_to: typing.Union[int, float] = None,
  depth_level_less_than: typing.Union[int, float] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeListUserGrantsFilter]] = None,
  grant_key: str = None,
  grant_name: str = None,
  id: str = None,
  privilege_category: str = None,
  privilege_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.userAssessmentId">user_assessment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#user_assessment_id DataOciDataSafeListUserGrants#user_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.userKey">user_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#user_key DataOciDataSafeListUserGrants#user_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.depthLevel">depth_level</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level DataOciDataSafeListUserGrants#depth_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.depthLevelGreaterThanOrEqualTo">depth_level_greater_than_or_equal_to</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level_greater_than_or_equal_to DataOciDataSafeListUserGrants#depth_level_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.depthLevelLessThan">depth_level_less_than</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level_less_than DataOciDataSafeListUserGrants#depth_level_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter">DataOciDataSafeListUserGrantsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.grantKey">grant_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#grant_key DataOciDataSafeListUserGrants#grant_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.grantName">grant_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#grant_name DataOciDataSafeListUserGrants#grant_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#id DataOciDataSafeListUserGrants#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.privilegeCategory">privilege_category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#privilege_category DataOciDataSafeListUserGrants#privilege_category}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.privilegeType">privilege_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#privilege_type DataOciDataSafeListUserGrants#privilege_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `user_assessment_id`<sup>Required</sup> <a name="user_assessment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.userAssessmentId"></a>

```python
user_assessment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#user_assessment_id DataOciDataSafeListUserGrants#user_assessment_id}.

---

##### `user_key`<sup>Required</sup> <a name="user_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.userKey"></a>

```python
user_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#user_key DataOciDataSafeListUserGrants#user_key}.

---

##### `depth_level`<sup>Optional</sup> <a name="depth_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.depthLevel"></a>

```python
depth_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level DataOciDataSafeListUserGrants#depth_level}.

---

##### `depth_level_greater_than_or_equal_to`<sup>Optional</sup> <a name="depth_level_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.depthLevelGreaterThanOrEqualTo"></a>

```python
depth_level_greater_than_or_equal_to: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level_greater_than_or_equal_to DataOciDataSafeListUserGrants#depth_level_greater_than_or_equal_to}.

---

##### `depth_level_less_than`<sup>Optional</sup> <a name="depth_level_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.depthLevelLessThan"></a>

```python
depth_level_less_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level_less_than DataOciDataSafeListUserGrants#depth_level_less_than}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeListUserGrantsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter">DataOciDataSafeListUserGrantsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#filter DataOciDataSafeListUserGrants#filter}

---

##### `grant_key`<sup>Optional</sup> <a name="grant_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.grantKey"></a>

```python
grant_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#grant_key DataOciDataSafeListUserGrants#grant_key}.

---

##### `grant_name`<sup>Optional</sup> <a name="grant_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.grantName"></a>

```python
grant_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#grant_name DataOciDataSafeListUserGrants#grant_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#id DataOciDataSafeListUserGrants#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privilege_category`<sup>Optional</sup> <a name="privilege_category" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.privilegeCategory"></a>

```python
privilege_category: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#privilege_category DataOciDataSafeListUserGrants#privilege_category}.

---

##### `privilege_type`<sup>Optional</sup> <a name="privilege_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.privilegeType"></a>

```python
privilege_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#privilege_type DataOciDataSafeListUserGrants#privilege_type}.

---

### DataOciDataSafeListUserGrantsFilter <a name="DataOciDataSafeListUserGrantsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_list_user_grants

dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#name DataOciDataSafeListUserGrants#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#values DataOciDataSafeListUserGrants#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#regex DataOciDataSafeListUserGrants#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#name DataOciDataSafeListUserGrants#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#values DataOciDataSafeListUserGrants#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#regex DataOciDataSafeListUserGrants#regex}.

---

### DataOciDataSafeListUserGrantsGrants <a name="DataOciDataSafeListUserGrantsGrants" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrants"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrants.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_list_user_grants

dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrants()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeListUserGrantsFilterList <a name="DataOciDataSafeListUserGrantsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_list_user_grants

dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeListUserGrantsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter">DataOciDataSafeListUserGrantsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeListUserGrantsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter">DataOciDataSafeListUserGrantsFilter</a>]]

---


### DataOciDataSafeListUserGrantsFilterOutputReference <a name="DataOciDataSafeListUserGrantsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_list_user_grants

dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter">DataOciDataSafeListUserGrantsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeListUserGrantsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter">DataOciDataSafeListUserGrantsFilter</a>]

---


### DataOciDataSafeListUserGrantsGrantsList <a name="DataOciDataSafeListUserGrantsGrantsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_list_user_grants

dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeListUserGrantsGrantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeListUserGrantsGrantsOutputReference <a name="DataOciDataSafeListUserGrantsGrantsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_list_user_grants

dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.depthLevel">depth_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.grantName">grant_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.privilegeCategory">privilege_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.privilegeType">privilege_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrants">DataOciDataSafeListUserGrantsGrants</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `depth_level`<sup>Required</sup> <a name="depth_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.depthLevel"></a>

```python
depth_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `grant_name`<sup>Required</sup> <a name="grant_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.grantName"></a>

```python
grant_name: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `privilege_category`<sup>Required</sup> <a name="privilege_category" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.privilegeCategory"></a>

```python
privilege_category: str
```

- *Type:* str

---

##### `privilege_type`<sup>Required</sup> <a name="privilege_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.privilegeType"></a>

```python
privilege_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeListUserGrantsGrants
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrants">DataOciDataSafeListUserGrantsGrants</a>

---



