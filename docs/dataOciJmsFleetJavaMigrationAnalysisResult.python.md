# `dataOciJmsFleetJavaMigrationAnalysisResult` Submodule <a name="`dataOciJmsFleetJavaMigrationAnalysisResult` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsFleetJavaMigrationAnalysisResult <a name="DataOciJmsFleetJavaMigrationAnalysisResult" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_result oci_jms_fleet_java_migration_analysis_result}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_java_migration_analysis_result

dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult(
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
  java_migration_analysis_result_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.Initializer.parameter.fleetId">fleet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_result#fleet_id DataOciJmsFleetJavaMigrationAnalysisResult#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.Initializer.parameter.javaMigrationAnalysisResultId">java_migration_analysis_result_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_result#java_migration_analysis_result_id DataOciJmsFleetJavaMigrationAnalysisResult#java_migration_analysis_result_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_result#id DataOciJmsFleetJavaMigrationAnalysisResult#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.Initializer.parameter.fleetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_result#fleet_id DataOciJmsFleetJavaMigrationAnalysisResult#fleet_id}.

---

##### `java_migration_analysis_result_id`<sup>Required</sup> <a name="java_migration_analysis_result_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.Initializer.parameter.javaMigrationAnalysisResultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_result#java_migration_analysis_result_id DataOciJmsFleetJavaMigrationAnalysisResult#java_migration_analysis_result_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_result#id DataOciJmsFleetJavaMigrationAnalysisResult#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciJmsFleetJavaMigrationAnalysisResult resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_java_migration_analysis_result

dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_java_migration_analysis_result

dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_java_migration_analysis_result

dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_java_migration_analysis_result

dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciJmsFleetJavaMigrationAnalysisResult resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciJmsFleetJavaMigrationAnalysisResult to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciJmsFleetJavaMigrationAnalysisResult that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_result#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsFleetJavaMigrationAnalysisResult to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.applicationExecutionType">application_execution_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.applicationKey">application_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.applicationName">application_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.applicationPath">application_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.objectList">object_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.objectStorageUploadDirPath">object_storage_upload_dir_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.sourceJdkVersion">source_jdk_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.targetJdkVersion">target_jdk_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.workRequestId">work_request_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.fleetIdInput">fleet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.javaMigrationAnalysisResultIdInput">java_migration_analysis_result_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.fleetId">fleet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.javaMigrationAnalysisResultId">java_migration_analysis_result_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `application_execution_type`<sup>Required</sup> <a name="application_execution_type" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.applicationExecutionType"></a>

```python
application_execution_type: str
```

- *Type:* str

---

##### `application_key`<sup>Required</sup> <a name="application_key" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.applicationKey"></a>

```python
application_key: str
```

- *Type:* str

---

##### `application_name`<sup>Required</sup> <a name="application_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.applicationName"></a>

```python
application_name: str
```

- *Type:* str

---

##### `application_path`<sup>Required</sup> <a name="application_path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.applicationPath"></a>

```python
application_path: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object_list`<sup>Required</sup> <a name="object_list" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.objectList"></a>

```python
object_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `object_storage_upload_dir_path`<sup>Required</sup> <a name="object_storage_upload_dir_path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.objectStorageUploadDirPath"></a>

```python
object_storage_upload_dir_path: str
```

- *Type:* str

---

##### `source_jdk_version`<sup>Required</sup> <a name="source_jdk_version" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.sourceJdkVersion"></a>

```python
source_jdk_version: str
```

- *Type:* str

---

##### `target_jdk_version`<sup>Required</sup> <a name="target_jdk_version" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.targetJdkVersion"></a>

```python
target_jdk_version: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `work_request_id`<sup>Required</sup> <a name="work_request_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.workRequestId"></a>

```python
work_request_id: str
```

- *Type:* str

---

##### `fleet_id_input`<sup>Optional</sup> <a name="fleet_id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.fleetIdInput"></a>

```python
fleet_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `java_migration_analysis_result_id_input`<sup>Optional</sup> <a name="java_migration_analysis_result_id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.javaMigrationAnalysisResultIdInput"></a>

```python
java_migration_analysis_result_id_input: str
```

- *Type:* str

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `java_migration_analysis_result_id`<sup>Required</sup> <a name="java_migration_analysis_result_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.javaMigrationAnalysisResultId"></a>

```python
java_migration_analysis_result_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsFleetJavaMigrationAnalysisResultConfig <a name="DataOciJmsFleetJavaMigrationAnalysisResultConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_java_migration_analysis_result

dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fleet_id: str,
  java_migration_analysis_result_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.fleetId">fleet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_result#fleet_id DataOciJmsFleetJavaMigrationAnalysisResult#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.javaMigrationAnalysisResultId">java_migration_analysis_result_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_result#java_migration_analysis_result_id DataOciJmsFleetJavaMigrationAnalysisResult#java_migration_analysis_result_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_result#id DataOciJmsFleetJavaMigrationAnalysisResult#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_result#fleet_id DataOciJmsFleetJavaMigrationAnalysisResult#fleet_id}.

---

##### `java_migration_analysis_result_id`<sup>Required</sup> <a name="java_migration_analysis_result_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.javaMigrationAnalysisResultId"></a>

```python
java_migration_analysis_result_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_result#java_migration_analysis_result_id DataOciJmsFleetJavaMigrationAnalysisResult#java_migration_analysis_result_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_result#id DataOciJmsFleetJavaMigrationAnalysisResult#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



