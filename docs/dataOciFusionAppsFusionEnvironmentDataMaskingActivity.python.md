# `dataOciFusionAppsFusionEnvironmentDataMaskingActivity` Submodule <a name="`dataOciFusionAppsFusionEnvironmentDataMaskingActivity` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFusionAppsFusionEnvironmentDataMaskingActivity <a name="DataOciFusionAppsFusionEnvironmentDataMaskingActivity" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activity oci_fusion_apps_fusion_environment_data_masking_activity}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_data_masking_activity

dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_masking_activity_id: str,
  fusion_environment_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.dataMaskingActivityId">data_masking_activity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activity#data_masking_activity_id DataOciFusionAppsFusionEnvironmentDataMaskingActivity#data_masking_activity_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.fusionEnvironmentId">fusion_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activity#fusion_environment_id DataOciFusionAppsFusionEnvironmentDataMaskingActivity#fusion_environment_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_masking_activity_id`<sup>Required</sup> <a name="data_masking_activity_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.dataMaskingActivityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activity#data_masking_activity_id DataOciFusionAppsFusionEnvironmentDataMaskingActivity#data_masking_activity_id}.

---

##### `fusion_environment_id`<sup>Required</sup> <a name="fusion_environment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.fusionEnvironmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activity#fusion_environment_id DataOciFusionAppsFusionEnvironmentDataMaskingActivity#fusion_environment_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentDataMaskingActivity resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_data_masking_activity

dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_data_masking_activity

dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_data_masking_activity

dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_data_masking_activity

dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentDataMaskingActivity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciFusionAppsFusionEnvironmentDataMaskingActivity to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciFusionAppsFusionEnvironmentDataMaskingActivity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFusionAppsFusionEnvironmentDataMaskingActivity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.isResumeDataMasking">is_resume_data_masking</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.timeMaskingFinish">time_masking_finish</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.timeMaskingStart">time_masking_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.dataMaskingActivityIdInput">data_masking_activity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.fusionEnvironmentIdInput">fusion_environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.dataMaskingActivityId">data_masking_activity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.fusionEnvironmentId">fusion_environment_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_resume_data_masking`<sup>Required</sup> <a name="is_resume_data_masking" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.isResumeDataMasking"></a>

```python
is_resume_data_masking: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_masking_finish`<sup>Required</sup> <a name="time_masking_finish" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.timeMaskingFinish"></a>

```python
time_masking_finish: str
```

- *Type:* str

---

##### `time_masking_start`<sup>Required</sup> <a name="time_masking_start" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.timeMaskingStart"></a>

```python
time_masking_start: str
```

- *Type:* str

---

##### `data_masking_activity_id_input`<sup>Optional</sup> <a name="data_masking_activity_id_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.dataMaskingActivityIdInput"></a>

```python
data_masking_activity_id_input: str
```

- *Type:* str

---

##### `fusion_environment_id_input`<sup>Optional</sup> <a name="fusion_environment_id_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.fusionEnvironmentIdInput"></a>

```python
fusion_environment_id_input: str
```

- *Type:* str

---

##### `data_masking_activity_id`<sup>Required</sup> <a name="data_masking_activity_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.dataMaskingActivityId"></a>

```python
data_masking_activity_id: str
```

- *Type:* str

---

##### `fusion_environment_id`<sup>Required</sup> <a name="fusion_environment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.fusionEnvironmentId"></a>

```python
fusion_environment_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig <a name="DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_data_masking_activity

dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_masking_activity_id: str,
  fusion_environment_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.dataMaskingActivityId">data_masking_activity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activity#data_masking_activity_id DataOciFusionAppsFusionEnvironmentDataMaskingActivity#data_masking_activity_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.fusionEnvironmentId">fusion_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activity#fusion_environment_id DataOciFusionAppsFusionEnvironmentDataMaskingActivity#fusion_environment_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_masking_activity_id`<sup>Required</sup> <a name="data_masking_activity_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.dataMaskingActivityId"></a>

```python
data_masking_activity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activity#data_masking_activity_id DataOciFusionAppsFusionEnvironmentDataMaskingActivity#data_masking_activity_id}.

---

##### `fusion_environment_id`<sup>Required</sup> <a name="fusion_environment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.fusionEnvironmentId"></a>

```python
fusion_environment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activity#fusion_environment_id DataOciFusionAppsFusionEnvironmentDataMaskingActivity#fusion_environment_id}.

---



