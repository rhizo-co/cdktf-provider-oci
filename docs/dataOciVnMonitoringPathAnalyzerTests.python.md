# `dataOciVnMonitoringPathAnalyzerTests` Submodule <a name="`dataOciVnMonitoringPathAnalyzerTests` Submodule" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciVnMonitoringPathAnalyzerTests <a name="DataOciVnMonitoringPathAnalyzerTests" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests oci_vn_monitoring_path_analyzer_tests}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_tests

dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests(
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
  filter: typing.Union[IResolvable, typing.List[DataOciVnMonitoringPathAnalyzerTestsFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#compartment_id DataOciVnMonitoringPathAnalyzerTests#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#display_name DataOciVnMonitoringPathAnalyzerTests#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter">DataOciVnMonitoringPathAnalyzerTestsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#id DataOciVnMonitoringPathAnalyzerTests#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#state DataOciVnMonitoringPathAnalyzerTests#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#compartment_id DataOciVnMonitoringPathAnalyzerTests#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#display_name DataOciVnMonitoringPathAnalyzerTests#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter">DataOciVnMonitoringPathAnalyzerTestsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#filter DataOciVnMonitoringPathAnalyzerTests#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#id DataOciVnMonitoringPathAnalyzerTests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#state DataOciVnMonitoringPathAnalyzerTests#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciVnMonitoringPathAnalyzerTestsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter">DataOciVnMonitoringPathAnalyzerTestsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciVnMonitoringPathAnalyzerTests resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_tests

dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_tests

dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_tests

dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_tests

dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciVnMonitoringPathAnalyzerTests resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciVnMonitoringPathAnalyzerTests to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciVnMonitoringPathAnalyzerTests that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciVnMonitoringPathAnalyzerTests to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList">DataOciVnMonitoringPathAnalyzerTestsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.pathAnalyzerTestCollection">path_analyzer_test_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter">DataOciVnMonitoringPathAnalyzerTestsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.filter"></a>

```python
filter: DataOciVnMonitoringPathAnalyzerTestsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList">DataOciVnMonitoringPathAnalyzerTestsFilterList</a>

---

##### `path_analyzer_test_collection`<sup>Required</sup> <a name="path_analyzer_test_collection" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.pathAnalyzerTestCollection"></a>

```python
path_analyzer_test_collection: DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciVnMonitoringPathAnalyzerTestsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter">DataOciVnMonitoringPathAnalyzerTestsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciVnMonitoringPathAnalyzerTestsConfig <a name="DataOciVnMonitoringPathAnalyzerTestsConfig" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_tests

dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciVnMonitoringPathAnalyzerTestsFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#compartment_id DataOciVnMonitoringPathAnalyzerTests#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#display_name DataOciVnMonitoringPathAnalyzerTests#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter">DataOciVnMonitoringPathAnalyzerTestsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#id DataOciVnMonitoringPathAnalyzerTests#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#state DataOciVnMonitoringPathAnalyzerTests#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#compartment_id DataOciVnMonitoringPathAnalyzerTests#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#display_name DataOciVnMonitoringPathAnalyzerTests#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciVnMonitoringPathAnalyzerTestsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter">DataOciVnMonitoringPathAnalyzerTestsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#filter DataOciVnMonitoringPathAnalyzerTests#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#id DataOciVnMonitoringPathAnalyzerTests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#state DataOciVnMonitoringPathAnalyzerTests#state}.

---

### DataOciVnMonitoringPathAnalyzerTestsFilter <a name="DataOciVnMonitoringPathAnalyzerTestsFilter" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_tests

dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#name DataOciVnMonitoringPathAnalyzerTests#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#values DataOciVnMonitoringPathAnalyzerTests#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#regex DataOciVnMonitoringPathAnalyzerTests#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#name DataOciVnMonitoringPathAnalyzerTests#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#values DataOciVnMonitoringPathAnalyzerTests#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#regex DataOciVnMonitoringPathAnalyzerTests#regex}.

---

### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_tests

dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection()
```


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_tests

dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems()
```


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_tests

dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint()
```


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_tests

dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters()
```


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_tests

dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions()
```


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_tests

dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciVnMonitoringPathAnalyzerTestsFilterList <a name="DataOciVnMonitoringPathAnalyzerTestsFilterList" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_tests

dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter">DataOciVnMonitoringPathAnalyzerTestsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciVnMonitoringPathAnalyzerTestsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter">DataOciVnMonitoringPathAnalyzerTestsFilter</a>]]

---


### DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference <a name="DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_tests

dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter">DataOciVnMonitoringPathAnalyzerTestsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciVnMonitoringPathAnalyzerTestsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter">DataOciVnMonitoringPathAnalyzerTestsFilter</a>]

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_tests

dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_tests

dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.listenerId">listener_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.networkLoadBalancerId">network_load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.vlanId">vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.vnicId">vnic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `listener_id`<sup>Required</sup> <a name="listener_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.listenerId"></a>

```python
listener_id: str
```

- *Type:* str

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

---

##### `network_load_balancer_id`<sup>Required</sup> <a name="network_load_balancer_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.networkLoadBalancerId"></a>

```python
network_load_balancer_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vlan_id`<sup>Required</sup> <a name="vlan_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.vlanId"></a>

```python
vlan_id: str
```

- *Type:* str

---

##### `vnic_id`<sup>Required</sup> <a name="vnic_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.vnicId"></a>

```python
vnic_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.internalValue"></a>

```python
internal_value: DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint</a>

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_tests

dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_tests

dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.destinationEndpoint">destination_endpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.protocol">protocol</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.protocolParameters">protocol_parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.queryOptions">query_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.sourceEndpoint">source_endpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `destination_endpoint`<sup>Required</sup> <a name="destination_endpoint" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.destinationEndpoint"></a>

```python
destination_endpoint: DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.protocol"></a>

```python
protocol: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_parameters`<sup>Required</sup> <a name="protocol_parameters" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.protocolParameters"></a>

```python
protocol_parameters: DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList</a>

---

##### `query_options`<sup>Required</sup> <a name="query_options" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.queryOptions"></a>

```python
query_options: DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList</a>

---

##### `source_endpoint`<sup>Required</sup> <a name="source_endpoint" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.sourceEndpoint"></a>

```python
source_endpoint: DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems</a>

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_tests

dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_tests

dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.destinationPort">destination_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.icmpCode">icmp_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.icmpType">icmp_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.sourcePort">source_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_port`<sup>Required</sup> <a name="destination_port" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.destinationPort"></a>

```python
destination_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `icmp_code`<sup>Required</sup> <a name="icmp_code" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.icmpCode"></a>

```python
icmp_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `icmp_type`<sup>Required</sup> <a name="icmp_type" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.icmpType"></a>

```python
icmp_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_port`<sup>Required</sup> <a name="source_port" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.sourcePort"></a>

```python
source_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters</a>

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_tests

dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_tests

dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.property.isBiDirectionalAnalysis">is_bi_directional_analysis</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_bi_directional_analysis`<sup>Required</sup> <a name="is_bi_directional_analysis" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.property.isBiDirectionalAnalysis"></a>

```python
is_bi_directional_analysis: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions</a>

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_tests

dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_tests

dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.listenerId">listener_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.networkLoadBalancerId">network_load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.vlanId">vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.vnicId">vnic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `listener_id`<sup>Required</sup> <a name="listener_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.listenerId"></a>

```python
listener_id: str
```

- *Type:* str

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

---

##### `network_load_balancer_id`<sup>Required</sup> <a name="network_load_balancer_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.networkLoadBalancerId"></a>

```python
network_load_balancer_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vlan_id`<sup>Required</sup> <a name="vlan_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.vlanId"></a>

```python
vlan_id: str
```

- *Type:* str

---

##### `vnic_id`<sup>Required</sup> <a name="vnic_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.vnicId"></a>

```python
vnic_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.internalValue"></a>

```python
internal_value: DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint</a>

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_tests

dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_tests

dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.property.items"></a>

```python
items: DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection</a>

---



