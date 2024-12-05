# `dataOciAiAnomalyDetectionModels` Submodule <a name="`dataOciAiAnomalyDetectionModels` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAiAnomalyDetectionModels <a name="DataOciAiAnomalyDetectionModels" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models oci_ai_anomaly_detection_models}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_models

dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels(
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
  filter: typing.Union[IResolvable, typing.List[DataOciAiAnomalyDetectionModelsFilter]] = None,
  id: str = None,
  project_id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#compartment_id DataOciAiAnomalyDetectionModels#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#display_name DataOciAiAnomalyDetectionModels#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter">DataOciAiAnomalyDetectionModelsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#id DataOciAiAnomalyDetectionModels#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#project_id DataOciAiAnomalyDetectionModels#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#state DataOciAiAnomalyDetectionModels#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#compartment_id DataOciAiAnomalyDetectionModels#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#display_name DataOciAiAnomalyDetectionModels#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter">DataOciAiAnomalyDetectionModelsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#filter DataOciAiAnomalyDetectionModels#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#id DataOciAiAnomalyDetectionModels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#project_id DataOciAiAnomalyDetectionModels#project_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#state DataOciAiAnomalyDetectionModels#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciAiAnomalyDetectionModelsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter">DataOciAiAnomalyDetectionModelsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciAiAnomalyDetectionModels resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_models

dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_models

dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_models

dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_models

dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciAiAnomalyDetectionModels resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciAiAnomalyDetectionModels to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciAiAnomalyDetectionModels that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAiAnomalyDetectionModels to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList">DataOciAiAnomalyDetectionModelsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.modelCollection">model_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList">DataOciAiAnomalyDetectionModelsModelCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter">DataOciAiAnomalyDetectionModelsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.filter"></a>

```python
filter: DataOciAiAnomalyDetectionModelsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList">DataOciAiAnomalyDetectionModelsFilterList</a>

---

##### `model_collection`<sup>Required</sup> <a name="model_collection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.modelCollection"></a>

```python
model_collection: DataOciAiAnomalyDetectionModelsModelCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList">DataOciAiAnomalyDetectionModelsModelCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciAiAnomalyDetectionModelsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter">DataOciAiAnomalyDetectionModelsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAiAnomalyDetectionModelsConfig <a name="DataOciAiAnomalyDetectionModelsConfig" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_models

dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciAiAnomalyDetectionModelsFilter]] = None,
  id: str = None,
  project_id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#compartment_id DataOciAiAnomalyDetectionModels#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#display_name DataOciAiAnomalyDetectionModels#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter">DataOciAiAnomalyDetectionModelsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#id DataOciAiAnomalyDetectionModels#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#project_id DataOciAiAnomalyDetectionModels#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#state DataOciAiAnomalyDetectionModels#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#compartment_id DataOciAiAnomalyDetectionModels#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#display_name DataOciAiAnomalyDetectionModels#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciAiAnomalyDetectionModelsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter">DataOciAiAnomalyDetectionModelsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#filter DataOciAiAnomalyDetectionModels#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#id DataOciAiAnomalyDetectionModels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#project_id DataOciAiAnomalyDetectionModels#project_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#state DataOciAiAnomalyDetectionModels#state}.

---

### DataOciAiAnomalyDetectionModelsFilter <a name="DataOciAiAnomalyDetectionModelsFilter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_models

dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#name DataOciAiAnomalyDetectionModels#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#values DataOciAiAnomalyDetectionModels#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#regex DataOciAiAnomalyDetectionModels#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#name DataOciAiAnomalyDetectionModels#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#values DataOciAiAnomalyDetectionModels#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#regex DataOciAiAnomalyDetectionModels#regex}.

---

### DataOciAiAnomalyDetectionModelsModelCollection <a name="DataOciAiAnomalyDetectionModelsModelCollection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_models

dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollection()
```


### DataOciAiAnomalyDetectionModelsModelCollectionItems <a name="DataOciAiAnomalyDetectionModelsModelCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_models

dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItems()
```


### DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetails <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_models

dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetails()
```


### DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResults <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResults" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResults"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResults.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_models

dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResults()
```


### DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetails <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_models

dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetails()
```


### DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetails <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_models

dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciAiAnomalyDetectionModelsFilterList <a name="DataOciAiAnomalyDetectionModelsFilterList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_models

dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiAnomalyDetectionModelsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter">DataOciAiAnomalyDetectionModelsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciAiAnomalyDetectionModelsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter">DataOciAiAnomalyDetectionModelsFilter</a>]]

---


### DataOciAiAnomalyDetectionModelsFilterOutputReference <a name="DataOciAiAnomalyDetectionModelsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_models

dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter">DataOciAiAnomalyDetectionModelsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciAiAnomalyDetectionModelsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter">DataOciAiAnomalyDetectionModelsFilter</a>]

---


### DataOciAiAnomalyDetectionModelsModelCollectionItemsList <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_models

dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_models

dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_models

dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.algorithmHint">algorithm_hint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.dataAssetIds">data_asset_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.targetFap">target_fap</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.trainingFraction">training_fraction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.windowSize">window_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetails">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm_hint`<sup>Required</sup> <a name="algorithm_hint" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.algorithmHint"></a>

```python
algorithm_hint: str
```

- *Type:* str

---

##### `data_asset_ids`<sup>Required</sup> <a name="data_asset_ids" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.dataAssetIds"></a>

```python
data_asset_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_fap`<sup>Required</sup> <a name="target_fap" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.targetFap"></a>

```python
target_fap: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `training_fraction`<sup>Required</sup> <a name="training_fraction" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.trainingFraction"></a>

```python
training_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `window_size`<sup>Required</sup> <a name="window_size" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.windowSize"></a>

```python
window_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetails">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetails</a>

---


### DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_models

dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_models

dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.fap">fap</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.isTrainingGoalAchieved">is_training_goal_achieved</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.mae">mae</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.maxInferenceSyncRows">max_inference_sync_rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.multivariateFap">multivariate_fap</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.rmse">rmse</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.rowReductionDetails">row_reduction_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.signalDetails">signal_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.warning">warning</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.windowSize">window_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResults">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResults</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fap`<sup>Required</sup> <a name="fap" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.fap"></a>

```python
fap: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_training_goal_achieved`<sup>Required</sup> <a name="is_training_goal_achieved" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.isTrainingGoalAchieved"></a>

```python
is_training_goal_achieved: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `mae`<sup>Required</sup> <a name="mae" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.mae"></a>

```python
mae: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_inference_sync_rows`<sup>Required</sup> <a name="max_inference_sync_rows" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.maxInferenceSyncRows"></a>

```python
max_inference_sync_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `multivariate_fap`<sup>Required</sup> <a name="multivariate_fap" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.multivariateFap"></a>

```python
multivariate_fap: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rmse`<sup>Required</sup> <a name="rmse" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.rmse"></a>

```python
rmse: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `row_reduction_details`<sup>Required</sup> <a name="row_reduction_details" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.rowReductionDetails"></a>

```python
row_reduction_details: DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList</a>

---

##### `signal_details`<sup>Required</sup> <a name="signal_details" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.signalDetails"></a>

```python
signal_details: DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList</a>

---

##### `warning`<sup>Required</sup> <a name="warning" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.warning"></a>

```python
warning: str
```

- *Type:* str

---

##### `window_size`<sup>Required</sup> <a name="window_size" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.windowSize"></a>

```python
window_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResults
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResults">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResults</a>

---


### DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_models

dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_models

dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.property.isReductionEnabled">is_reduction_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.property.reductionMethod">reduction_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.property.reductionPercentage">reduction_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetails">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_reduction_enabled`<sup>Required</sup> <a name="is_reduction_enabled" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.property.isReductionEnabled"></a>

```python
is_reduction_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `reduction_method`<sup>Required</sup> <a name="reduction_method" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.property.reductionMethod"></a>

```python
reduction_method: str
```

- *Type:* str

---

##### `reduction_percentage`<sup>Required</sup> <a name="reduction_percentage" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.property.reductionPercentage"></a>

```python
reduction_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetails">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetails</a>

---


### DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_models

dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_models

dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.details">details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.fap">fap</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.isQuantized">is_quantized</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.mviRatio">mvi_ratio</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.signalName">signal_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.std">std</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetails">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.details"></a>

```python
details: str
```

- *Type:* str

---

##### `fap`<sup>Required</sup> <a name="fap" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.fap"></a>

```python
fap: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_quantized`<sup>Required</sup> <a name="is_quantized" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.isQuantized"></a>

```python
is_quantized: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mvi_ratio`<sup>Required</sup> <a name="mvi_ratio" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.mviRatio"></a>

```python
mvi_ratio: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `signal_name`<sup>Required</sup> <a name="signal_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.signalName"></a>

```python
signal_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `std`<sup>Required</sup> <a name="std" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.std"></a>

```python
std: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetails">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetails</a>

---


### DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_models

dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.modelTrainingDetails">model_training_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.modelTrainingResults">model_training_results</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItems">DataOciAiAnomalyDetectionModelsModelCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `model_training_details`<sup>Required</sup> <a name="model_training_details" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.modelTrainingDetails"></a>

```python
model_training_details: DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList</a>

---

##### `model_training_results`<sup>Required</sup> <a name="model_training_results" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.modelTrainingResults"></a>

```python
model_training_results: DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList</a>

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiAnomalyDetectionModelsModelCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItems">DataOciAiAnomalyDetectionModelsModelCollectionItems</a>

---


### DataOciAiAnomalyDetectionModelsModelCollectionList <a name="DataOciAiAnomalyDetectionModelsModelCollectionList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_models

dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiAnomalyDetectionModelsModelCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiAnomalyDetectionModelsModelCollectionOutputReference <a name="DataOciAiAnomalyDetectionModelsModelCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_models

dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList">DataOciAiAnomalyDetectionModelsModelCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollection">DataOciAiAnomalyDetectionModelsModelCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.property.items"></a>

```python
items: DataOciAiAnomalyDetectionModelsModelCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList">DataOciAiAnomalyDetectionModelsModelCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiAnomalyDetectionModelsModelCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollection">DataOciAiAnomalyDetectionModelsModelCollection</a>

---



