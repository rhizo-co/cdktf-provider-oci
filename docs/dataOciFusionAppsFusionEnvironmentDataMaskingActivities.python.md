# `dataOciFusionAppsFusionEnvironmentDataMaskingActivities` Submodule <a name="`dataOciFusionAppsFusionEnvironmentDataMaskingActivities` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFusionAppsFusionEnvironmentDataMaskingActivities <a name="DataOciFusionAppsFusionEnvironmentDataMaskingActivities" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities oci_fusion_apps_fusion_environment_data_masking_activities}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_data_masking_activities

dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fusion_environment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.Initializer.parameter.fusionEnvironmentId">fusion_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities#fusion_environment_id DataOciFusionAppsFusionEnvironmentDataMaskingActivities#fusion_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter">DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities#id DataOciFusionAppsFusionEnvironmentDataMaskingActivities#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities#state DataOciFusionAppsFusionEnvironmentDataMaskingActivities#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fusion_environment_id`<sup>Required</sup> <a name="fusion_environment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.Initializer.parameter.fusionEnvironmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities#fusion_environment_id DataOciFusionAppsFusionEnvironmentDataMaskingActivities#fusion_environment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter">DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities#filter DataOciFusionAppsFusionEnvironmentDataMaskingActivities#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities#id DataOciFusionAppsFusionEnvironmentDataMaskingActivities#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities#state DataOciFusionAppsFusionEnvironmentDataMaskingActivities#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter">DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentDataMaskingActivities resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_data_masking_activities

dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_data_masking_activities

dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_data_masking_activities

dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_data_masking_activities

dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentDataMaskingActivities resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciFusionAppsFusionEnvironmentDataMaskingActivities to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciFusionAppsFusionEnvironmentDataMaskingActivities that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFusionAppsFusionEnvironmentDataMaskingActivities to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.dataMaskingActivityCollection">data_masking_activity_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList">DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList">DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter">DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.fusionEnvironmentIdInput">fusion_environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.fusionEnvironmentId">fusion_environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `data_masking_activity_collection`<sup>Required</sup> <a name="data_masking_activity_collection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.dataMaskingActivityCollection"></a>

```python
data_masking_activity_collection: DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList">DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.filter"></a>

```python
filter: DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList">DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter">DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter</a>]]

---

##### `fusion_environment_id_input`<sup>Optional</sup> <a name="fusion_environment_id_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.fusionEnvironmentIdInput"></a>

```python
fusion_environment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `fusion_environment_id`<sup>Required</sup> <a name="fusion_environment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.fusionEnvironmentId"></a>

```python
fusion_environment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig <a name="DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_data_masking_activities

dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fusion_environment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.fusionEnvironmentId">fusion_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities#fusion_environment_id DataOciFusionAppsFusionEnvironmentDataMaskingActivities#fusion_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter">DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities#id DataOciFusionAppsFusionEnvironmentDataMaskingActivities#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities#state DataOciFusionAppsFusionEnvironmentDataMaskingActivities#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fusion_environment_id`<sup>Required</sup> <a name="fusion_environment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.fusionEnvironmentId"></a>

```python
fusion_environment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities#fusion_environment_id DataOciFusionAppsFusionEnvironmentDataMaskingActivities#fusion_environment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter">DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities#filter DataOciFusionAppsFusionEnvironmentDataMaskingActivities#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities#id DataOciFusionAppsFusionEnvironmentDataMaskingActivities#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities#state DataOciFusionAppsFusionEnvironmentDataMaskingActivities#state}.

---

### DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollection <a name="DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_data_masking_activities

dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollection()
```


### DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItems <a name="DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_data_masking_activities

dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItems()
```


### DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter <a name="DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_data_masking_activities

dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities#name DataOciFusionAppsFusionEnvironmentDataMaskingActivities#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities#values DataOciFusionAppsFusionEnvironmentDataMaskingActivities#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities#regex DataOciFusionAppsFusionEnvironmentDataMaskingActivities#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities#name DataOciFusionAppsFusionEnvironmentDataMaskingActivities#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities#values DataOciFusionAppsFusionEnvironmentDataMaskingActivities#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities#regex DataOciFusionAppsFusionEnvironmentDataMaskingActivities#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList <a name="DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_data_masking_activities

dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference <a name="DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_data_masking_activities

dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.property.fusionEnvironmentId">fusion_environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.property.isResumeDataMasking">is_resume_data_masking</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.property.timeMaskingFinish">time_masking_finish</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.property.timeMaskingStart">time_masking_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItems">DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fusion_environment_id`<sup>Required</sup> <a name="fusion_environment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.property.fusionEnvironmentId"></a>

```python
fusion_environment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_resume_data_masking`<sup>Required</sup> <a name="is_resume_data_masking" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.property.isResumeDataMasking"></a>

```python
is_resume_data_masking: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_masking_finish`<sup>Required</sup> <a name="time_masking_finish" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.property.timeMaskingFinish"></a>

```python
time_masking_finish: str
```

- *Type:* str

---

##### `time_masking_start`<sup>Required</sup> <a name="time_masking_start" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.property.timeMaskingStart"></a>

```python
time_masking_start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItems">DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItems</a>

---


### DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList <a name="DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_data_masking_activities

dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference <a name="DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_data_masking_activities

dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList">DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollection">DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.property.items"></a>

```python
items: DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList">DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollection">DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollection</a>

---


### DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList <a name="DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_data_masking_activities

dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter">DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter">DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter</a>]]

---


### DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference <a name="DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_data_masking_activities

dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter">DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter">DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter</a>]

---



