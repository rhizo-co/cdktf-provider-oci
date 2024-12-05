# `dataOciJmsFleetPerformanceTuningAnalysisResult` Submodule <a name="`dataOciJmsFleetPerformanceTuningAnalysisResult` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsFleetPerformanceTuningAnalysisResult <a name="DataOciJmsFleetPerformanceTuningAnalysisResult" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result oci_jms_fleet_performance_tuning_analysis_result}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_performance_tuning_analysis_result

dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fleet_id: str,
  performance_tuning_analysis_result_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer.parameter.fleetId">fleet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result#fleet_id DataOciJmsFleetPerformanceTuningAnalysisResult#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer.parameter.performanceTuningAnalysisResultId">performance_tuning_analysis_result_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result#performance_tuning_analysis_result_id DataOciJmsFleetPerformanceTuningAnalysisResult#performance_tuning_analysis_result_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result#id DataOciJmsFleetPerformanceTuningAnalysisResult#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer.parameter.fleetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result#fleet_id DataOciJmsFleetPerformanceTuningAnalysisResult#fleet_id}.

---

##### `performance_tuning_analysis_result_id`<sup>Required</sup> <a name="performance_tuning_analysis_result_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer.parameter.performanceTuningAnalysisResultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result#performance_tuning_analysis_result_id DataOciJmsFleetPerformanceTuningAnalysisResult#performance_tuning_analysis_result_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result#id DataOciJmsFleetPerformanceTuningAnalysisResult#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciJmsFleetPerformanceTuningAnalysisResult resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_performance_tuning_analysis_result

dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_performance_tuning_analysis_result

dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_performance_tuning_analysis_result

dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_performance_tuning_analysis_result

dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciJmsFleetPerformanceTuningAnalysisResult resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciJmsFleetPerformanceTuningAnalysisResult to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciJmsFleetPerformanceTuningAnalysisResult that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsFleetPerformanceTuningAnalysisResult to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.applicationInstallationId">application_installation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.applicationInstallationPath">application_installation_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.applicationName">application_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.result">result</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.timeFinished">time_finished</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.warningCount">warning_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.workRequestId">work_request_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.fleetIdInput">fleet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.performanceTuningAnalysisResultIdInput">performance_tuning_analysis_result_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.fleetId">fleet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.performanceTuningAnalysisResultId">performance_tuning_analysis_result_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `application_installation_id`<sup>Required</sup> <a name="application_installation_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.applicationInstallationId"></a>

```python
application_installation_id: str
```

- *Type:* str

---

##### `application_installation_path`<sup>Required</sup> <a name="application_installation_path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.applicationInstallationPath"></a>

```python
application_installation_path: str
```

- *Type:* str

---

##### `application_name`<sup>Required</sup> <a name="application_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.applicationName"></a>

```python
application_name: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `result`<sup>Required</sup> <a name="result" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.result"></a>

```python
result: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_finished`<sup>Required</sup> <a name="time_finished" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.timeFinished"></a>

```python
time_finished: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `warning_count`<sup>Required</sup> <a name="warning_count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.warningCount"></a>

```python
warning_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `work_request_id`<sup>Required</sup> <a name="work_request_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.workRequestId"></a>

```python
work_request_id: str
```

- *Type:* str

---

##### `fleet_id_input`<sup>Optional</sup> <a name="fleet_id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.fleetIdInput"></a>

```python
fleet_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `performance_tuning_analysis_result_id_input`<sup>Optional</sup> <a name="performance_tuning_analysis_result_id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.performanceTuningAnalysisResultIdInput"></a>

```python
performance_tuning_analysis_result_id_input: str
```

- *Type:* str

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `performance_tuning_analysis_result_id`<sup>Required</sup> <a name="performance_tuning_analysis_result_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.performanceTuningAnalysisResultId"></a>

```python
performance_tuning_analysis_result_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsFleetPerformanceTuningAnalysisResultConfig <a name="DataOciJmsFleetPerformanceTuningAnalysisResultConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_performance_tuning_analysis_result

dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fleet_id: str,
  performance_tuning_analysis_result_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.fleetId">fleet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result#fleet_id DataOciJmsFleetPerformanceTuningAnalysisResult#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.performanceTuningAnalysisResultId">performance_tuning_analysis_result_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result#performance_tuning_analysis_result_id DataOciJmsFleetPerformanceTuningAnalysisResult#performance_tuning_analysis_result_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result#id DataOciJmsFleetPerformanceTuningAnalysisResult#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result#fleet_id DataOciJmsFleetPerformanceTuningAnalysisResult#fleet_id}.

---

##### `performance_tuning_analysis_result_id`<sup>Required</sup> <a name="performance_tuning_analysis_result_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.performanceTuningAnalysisResultId"></a>

```python
performance_tuning_analysis_result_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result#performance_tuning_analysis_result_id DataOciJmsFleetPerformanceTuningAnalysisResult#performance_tuning_analysis_result_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result#id DataOciJmsFleetPerformanceTuningAnalysisResult#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



