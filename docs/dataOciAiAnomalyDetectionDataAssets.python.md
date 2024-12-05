# `dataOciAiAnomalyDetectionDataAssets` Submodule <a name="`dataOciAiAnomalyDetectionDataAssets` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAiAnomalyDetectionDataAssets <a name="DataOciAiAnomalyDetectionDataAssets" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets oci_ai_anomaly_detection_data_assets}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_data_assets

dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciAiAnomalyDetectionDataAssetsFilter]] = None,
  id: str = None,
  project_id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#compartment_id DataOciAiAnomalyDetectionDataAssets#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#display_name DataOciAiAnomalyDetectionDataAssets#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilter">DataOciAiAnomalyDetectionDataAssetsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#id DataOciAiAnomalyDetectionDataAssets#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#project_id DataOciAiAnomalyDetectionDataAssets#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#state DataOciAiAnomalyDetectionDataAssets#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#compartment_id DataOciAiAnomalyDetectionDataAssets#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#display_name DataOciAiAnomalyDetectionDataAssets#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilter">DataOciAiAnomalyDetectionDataAssetsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#filter DataOciAiAnomalyDetectionDataAssets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#id DataOciAiAnomalyDetectionDataAssets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#project_id DataOciAiAnomalyDetectionDataAssets#project_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#state DataOciAiAnomalyDetectionDataAssets#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciAiAnomalyDetectionDataAssetsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilter">DataOciAiAnomalyDetectionDataAssetsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciAiAnomalyDetectionDataAssets resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_data_assets

dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_data_assets

dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_data_assets

dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_data_assets

dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciAiAnomalyDetectionDataAssets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciAiAnomalyDetectionDataAssets to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciAiAnomalyDetectionDataAssets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAiAnomalyDetectionDataAssets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.dataAssetCollection">data_asset_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList">DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList">DataOciAiAnomalyDetectionDataAssetsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilter">DataOciAiAnomalyDetectionDataAssetsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `data_asset_collection`<sup>Required</sup> <a name="data_asset_collection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.dataAssetCollection"></a>

```python
data_asset_collection: DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList">DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.filter"></a>

```python
filter: DataOciAiAnomalyDetectionDataAssetsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList">DataOciAiAnomalyDetectionDataAssetsFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciAiAnomalyDetectionDataAssetsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilter">DataOciAiAnomalyDetectionDataAssetsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssets.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAiAnomalyDetectionDataAssetsConfig <a name="DataOciAiAnomalyDetectionDataAssetsConfig" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_data_assets

dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciAiAnomalyDetectionDataAssetsFilter]] = None,
  id: str = None,
  project_id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#compartment_id DataOciAiAnomalyDetectionDataAssets#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#display_name DataOciAiAnomalyDetectionDataAssets#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilter">DataOciAiAnomalyDetectionDataAssetsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#id DataOciAiAnomalyDetectionDataAssets#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#project_id DataOciAiAnomalyDetectionDataAssets#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#state DataOciAiAnomalyDetectionDataAssets#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#compartment_id DataOciAiAnomalyDetectionDataAssets#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#display_name DataOciAiAnomalyDetectionDataAssets#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciAiAnomalyDetectionDataAssetsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilter">DataOciAiAnomalyDetectionDataAssetsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#filter DataOciAiAnomalyDetectionDataAssets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#id DataOciAiAnomalyDetectionDataAssets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#project_id DataOciAiAnomalyDetectionDataAssets#project_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#state DataOciAiAnomalyDetectionDataAssets#state}.

---

### DataOciAiAnomalyDetectionDataAssetsDataAssetCollection <a name="DataOciAiAnomalyDetectionDataAssetsDataAssetCollection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_data_assets

dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollection()
```


### DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItems <a name="DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_data_assets

dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItems()
```


### DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetails <a name="DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_data_assets

dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetails()
```


### DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetails <a name="DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_data_assets

dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetails()
```


### DataOciAiAnomalyDetectionDataAssetsFilter <a name="DataOciAiAnomalyDetectionDataAssetsFilter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_data_assets

dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#name DataOciAiAnomalyDetectionDataAssets#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#values DataOciAiAnomalyDetectionDataAssets#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#regex DataOciAiAnomalyDetectionDataAssets#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#name DataOciAiAnomalyDetectionDataAssets#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#values DataOciAiAnomalyDetectionDataAssets#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_assets#regex DataOciAiAnomalyDetectionDataAssets#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList <a name="DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_data_assets

dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference <a name="DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_data_assets

dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.atpPasswordSecretId">atp_password_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.atpUserName">atp_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.cwalletFileSecretId">cwallet_file_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.dataSourceType">data_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.ewalletFileSecretId">ewallet_file_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.keyStoreFileSecretId">key_store_file_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.measurementName">measurement_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.ojdbcFileSecretId">ojdbc_file_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.passwordSecretId">password_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.tnsnamesFileSecretId">tnsnames_file_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.truststoreFileSecretId">truststore_file_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.versionSpecificDetails">version_specific_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList">DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.walletPasswordSecretId">wallet_password_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetails">DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `atp_password_secret_id`<sup>Required</sup> <a name="atp_password_secret_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.atpPasswordSecretId"></a>

```python
atp_password_secret_id: str
```

- *Type:* str

---

##### `atp_user_name`<sup>Required</sup> <a name="atp_user_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.atpUserName"></a>

```python
atp_user_name: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `cwallet_file_secret_id`<sup>Required</sup> <a name="cwallet_file_secret_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.cwalletFileSecretId"></a>

```python
cwallet_file_secret_id: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `data_source_type`<sup>Required</sup> <a name="data_source_type" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.dataSourceType"></a>

```python
data_source_type: str
```

- *Type:* str

---

##### `ewallet_file_secret_id`<sup>Required</sup> <a name="ewallet_file_secret_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.ewalletFileSecretId"></a>

```python
ewallet_file_secret_id: str
```

- *Type:* str

---

##### `key_store_file_secret_id`<sup>Required</sup> <a name="key_store_file_secret_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.keyStoreFileSecretId"></a>

```python
key_store_file_secret_id: str
```

- *Type:* str

---

##### `measurement_name`<sup>Required</sup> <a name="measurement_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.measurementName"></a>

```python
measurement_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `ojdbc_file_secret_id`<sup>Required</sup> <a name="ojdbc_file_secret_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.ojdbcFileSecretId"></a>

```python
ojdbc_file_secret_id: str
```

- *Type:* str

---

##### `password_secret_id`<sup>Required</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.passwordSecretId"></a>

```python
password_secret_id: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `tnsnames_file_secret_id`<sup>Required</sup> <a name="tnsnames_file_secret_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.tnsnamesFileSecretId"></a>

```python
tnsnames_file_secret_id: str
```

- *Type:* str

---

##### `truststore_file_secret_id`<sup>Required</sup> <a name="truststore_file_secret_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.truststoreFileSecretId"></a>

```python
truststore_file_secret_id: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `version_specific_details`<sup>Required</sup> <a name="version_specific_details" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.versionSpecificDetails"></a>

```python
version_specific_details: DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList">DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList</a>

---

##### `wallet_password_secret_id`<sup>Required</sup> <a name="wallet_password_secret_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.walletPasswordSecretId"></a>

```python
wallet_password_secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetails">DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetails</a>

---


### DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList <a name="DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_data_assets

dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference <a name="DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_data_assets

dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.property.influxVersion">influx_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.property.organizationName">organization_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.property.retentionPolicyName">retention_policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetails">DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `influx_version`<sup>Required</sup> <a name="influx_version" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.property.influxVersion"></a>

```python
influx_version: str
```

- *Type:* str

---

##### `organization_name`<sup>Required</sup> <a name="organization_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.property.organizationName"></a>

```python
organization_name: str
```

- *Type:* str

---

##### `retention_policy_name`<sup>Required</sup> <a name="retention_policy_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.property.retentionPolicyName"></a>

```python
retention_policy_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetails">DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsVersionSpecificDetails</a>

---


### DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList <a name="DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_data_assets

dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference <a name="DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_data_assets

dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.dataSourceDetails">data_source_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList">DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.privateEndpointId">private_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItems">DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `data_source_details`<sup>Required</sup> <a name="data_source_details" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.dataSourceDetails"></a>

```python
data_source_details: DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList">DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsDataSourceDetailsList</a>

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `private_endpoint_id`<sup>Required</sup> <a name="private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.privateEndpointId"></a>

```python
private_endpoint_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItems">DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItems</a>

---


### DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList <a name="DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_data_assets

dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference <a name="DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_data_assets

dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList">DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollection">DataOciAiAnomalyDetectionDataAssetsDataAssetCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.property.items"></a>

```python
items: DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList">DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiAnomalyDetectionDataAssetsDataAssetCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsDataAssetCollection">DataOciAiAnomalyDetectionDataAssetsDataAssetCollection</a>

---


### DataOciAiAnomalyDetectionDataAssetsFilterList <a name="DataOciAiAnomalyDetectionDataAssetsFilterList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_data_assets

dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiAnomalyDetectionDataAssetsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilter">DataOciAiAnomalyDetectionDataAssetsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciAiAnomalyDetectionDataAssetsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilter">DataOciAiAnomalyDetectionDataAssetsFilter</a>]]

---


### DataOciAiAnomalyDetectionDataAssetsFilterOutputReference <a name="DataOciAiAnomalyDetectionDataAssetsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_data_assets

dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilter">DataOciAiAnomalyDetectionDataAssetsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciAiAnomalyDetectionDataAssetsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAssets.DataOciAiAnomalyDetectionDataAssetsFilter">DataOciAiAnomalyDetectionDataAssetsFilter</a>]

---



