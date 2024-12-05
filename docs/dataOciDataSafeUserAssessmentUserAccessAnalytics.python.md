# `dataOciDataSafeUserAssessmentUserAccessAnalytics` Submodule <a name="`dataOciDataSafeUserAssessmentUserAccessAnalytics` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeUserAssessmentUserAccessAnalytics <a name="DataOciDataSafeUserAssessmentUserAccessAnalytics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_access_analytics oci_data_safe_user_assessment_user_access_analytics}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_user_access_analytics

dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.Initializer.parameter.userAssessmentId">user_assessment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_access_analytics#user_assessment_id DataOciDataSafeUserAssessmentUserAccessAnalytics#user_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter">DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_access_analytics#id DataOciDataSafeUserAssessmentUserAccessAnalytics#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `user_assessment_id`<sup>Required</sup> <a name="user_assessment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.Initializer.parameter.userAssessmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_access_analytics#user_assessment_id DataOciDataSafeUserAssessmentUserAccessAnalytics#user_assessment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter">DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_access_analytics#filter DataOciDataSafeUserAssessmentUserAccessAnalytics#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_access_analytics#id DataOciDataSafeUserAssessmentUserAccessAnalytics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter">DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeUserAssessmentUserAccessAnalytics resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_user_access_analytics

dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_user_access_analytics

dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_user_access_analytics

dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_user_access_analytics

dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeUserAssessmentUserAccessAnalytics resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeUserAssessmentUserAccessAnalytics to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeUserAssessmentUserAccessAnalytics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_access_analytics#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeUserAssessmentUserAccessAnalytics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList">DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.userAccessAnalyticsCollection">user_access_analytics_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList">DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter">DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.userAssessmentIdInput">user_assessment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.userAssessmentId">user_assessment_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.filter"></a>

```python
filter: DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList">DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList</a>

---

##### `user_access_analytics_collection`<sup>Required</sup> <a name="user_access_analytics_collection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.userAccessAnalyticsCollection"></a>

```python
user_access_analytics_collection: DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList">DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter">DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `user_assessment_id_input`<sup>Optional</sup> <a name="user_assessment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.userAssessmentIdInput"></a>

```python
user_assessment_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `user_assessment_id`<sup>Required</sup> <a name="user_assessment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.userAssessmentId"></a>

```python
user_assessment_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalytics.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig <a name="DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_user_access_analytics

dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  user_assessment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.userAssessmentId">user_assessment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_access_analytics#user_assessment_id DataOciDataSafeUserAssessmentUserAccessAnalytics#user_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter">DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_access_analytics#id DataOciDataSafeUserAssessmentUserAccessAnalytics#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `user_assessment_id`<sup>Required</sup> <a name="user_assessment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.userAssessmentId"></a>

```python
user_assessment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_access_analytics#user_assessment_id DataOciDataSafeUserAssessmentUserAccessAnalytics#user_assessment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter">DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_access_analytics#filter DataOciDataSafeUserAssessmentUserAccessAnalytics#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_access_analytics#id DataOciDataSafeUserAssessmentUserAccessAnalytics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter <a name="DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_user_access_analytics

dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_access_analytics#name DataOciDataSafeUserAssessmentUserAccessAnalytics#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_access_analytics#values DataOciDataSafeUserAssessmentUserAccessAnalytics#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_access_analytics#regex DataOciDataSafeUserAssessmentUserAccessAnalytics#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_access_analytics#name DataOciDataSafeUserAssessmentUserAccessAnalytics#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_access_analytics#values DataOciDataSafeUserAssessmentUserAccessAnalytics#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_access_analytics#regex DataOciDataSafeUserAssessmentUserAccessAnalytics#regex}.

---

### DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollection <a name="DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_user_access_analytics

dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollection()
```


### DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItems <a name="DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_user_access_analytics

dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList <a name="DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_user_access_analytics

dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter">DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter">DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter</a>]]

---


### DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference <a name="DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_user_access_analytics

dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter">DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter">DataOciDataSafeUserAssessmentUserAccessAnalyticsFilter</a>]

---


### DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList <a name="DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_user_access_analytics

dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference <a name="DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_user_access_analytics

dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.property.userAssessmentUserAccessAnalyticCount">user_assessment_user_access_analytic_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItems">DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `user_assessment_user_access_analytic_count`<sup>Required</sup> <a name="user_assessment_user_access_analytic_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.property.userAssessmentUserAccessAnalyticCount"></a>

```python
user_assessment_user_access_analytic_count: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItems">DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItems</a>

---


### DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList <a name="DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_user_access_analytics

dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference <a name="DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment_user_access_analytics

dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList">DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollection">DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.property.items"></a>

```python
items: DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList">DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAccessAnalytics.DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollection">DataOciDataSafeUserAssessmentUserAccessAnalyticsUserAccessAnalyticsCollection</a>

---



