# `dataOciVnMonitoringPathAnalyzerTest` Submodule <a name="`dataOciVnMonitoringPathAnalyzerTest` Submodule" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciVnMonitoringPathAnalyzerTest <a name="DataOciVnMonitoringPathAnalyzerTest" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_test oci_vn_monitoring_path_analyzer_test}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_test

dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  path_analyzer_test_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.Initializer.parameter.pathAnalyzerTestId">path_analyzer_test_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_test#path_analyzer_test_id DataOciVnMonitoringPathAnalyzerTest#path_analyzer_test_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `path_analyzer_test_id`<sup>Required</sup> <a name="path_analyzer_test_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.Initializer.parameter.pathAnalyzerTestId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_test#path_analyzer_test_id DataOciVnMonitoringPathAnalyzerTest#path_analyzer_test_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciVnMonitoringPathAnalyzerTest resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_test

dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_test

dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_test

dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_test

dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciVnMonitoringPathAnalyzerTest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciVnMonitoringPathAnalyzerTest to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciVnMonitoringPathAnalyzerTest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_test#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciVnMonitoringPathAnalyzerTest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.destinationEndpoint">destination_endpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList">DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.protocol">protocol</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.protocolParameters">protocol_parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList">DataOciVnMonitoringPathAnalyzerTestProtocolParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.queryOptions">query_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList">DataOciVnMonitoringPathAnalyzerTestQueryOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.sourceEndpoint">source_endpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList">DataOciVnMonitoringPathAnalyzerTestSourceEndpointList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.pathAnalyzerTestIdInput">path_analyzer_test_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.pathAnalyzerTestId">path_analyzer_test_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `destination_endpoint`<sup>Required</sup> <a name="destination_endpoint" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.destinationEndpoint"></a>

```python
destination_endpoint: DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList">DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.protocol"></a>

```python
protocol: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_parameters`<sup>Required</sup> <a name="protocol_parameters" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.protocolParameters"></a>

```python
protocol_parameters: DataOciVnMonitoringPathAnalyzerTestProtocolParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList">DataOciVnMonitoringPathAnalyzerTestProtocolParametersList</a>

---

##### `query_options`<sup>Required</sup> <a name="query_options" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.queryOptions"></a>

```python
query_options: DataOciVnMonitoringPathAnalyzerTestQueryOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList">DataOciVnMonitoringPathAnalyzerTestQueryOptionsList</a>

---

##### `source_endpoint`<sup>Required</sup> <a name="source_endpoint" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.sourceEndpoint"></a>

```python
source_endpoint: DataOciVnMonitoringPathAnalyzerTestSourceEndpointList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList">DataOciVnMonitoringPathAnalyzerTestSourceEndpointList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `path_analyzer_test_id_input`<sup>Optional</sup> <a name="path_analyzer_test_id_input" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.pathAnalyzerTestIdInput"></a>

```python
path_analyzer_test_id_input: str
```

- *Type:* str

---

##### `path_analyzer_test_id`<sup>Required</sup> <a name="path_analyzer_test_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.pathAnalyzerTestId"></a>

```python
path_analyzer_test_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciVnMonitoringPathAnalyzerTestConfig <a name="DataOciVnMonitoringPathAnalyzerTestConfig" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_test

dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  path_analyzer_test_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig.property.pathAnalyzerTestId">path_analyzer_test_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_test#path_analyzer_test_id DataOciVnMonitoringPathAnalyzerTest#path_analyzer_test_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `path_analyzer_test_id`<sup>Required</sup> <a name="path_analyzer_test_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig.property.pathAnalyzerTestId"></a>

```python
path_analyzer_test_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_test#path_analyzer_test_id DataOciVnMonitoringPathAnalyzerTest#path_analyzer_test_id}.

---

### DataOciVnMonitoringPathAnalyzerTestDestinationEndpoint <a name="DataOciVnMonitoringPathAnalyzerTestDestinationEndpoint" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpoint.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_test

dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpoint()
```


### DataOciVnMonitoringPathAnalyzerTestProtocolParameters <a name="DataOciVnMonitoringPathAnalyzerTestProtocolParameters" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParameters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_test

dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParameters()
```


### DataOciVnMonitoringPathAnalyzerTestQueryOptions <a name="DataOciVnMonitoringPathAnalyzerTestQueryOptions" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_test

dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptions()
```


### DataOciVnMonitoringPathAnalyzerTestSourceEndpoint <a name="DataOciVnMonitoringPathAnalyzerTestSourceEndpoint" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpoint.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_test

dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpoint()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList <a name="DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_test

dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference <a name="DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_test

dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.listenerId">listener_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.networkLoadBalancerId">network_load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.vlanId">vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.vnicId">vnic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpoint">DataOciVnMonitoringPathAnalyzerTestDestinationEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `listener_id`<sup>Required</sup> <a name="listener_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.listenerId"></a>

```python
listener_id: str
```

- *Type:* str

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

---

##### `network_load_balancer_id`<sup>Required</sup> <a name="network_load_balancer_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.networkLoadBalancerId"></a>

```python
network_load_balancer_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vlan_id`<sup>Required</sup> <a name="vlan_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.vlanId"></a>

```python
vlan_id: str
```

- *Type:* str

---

##### `vnic_id`<sup>Required</sup> <a name="vnic_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.vnicId"></a>

```python
vnic_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.internalValue"></a>

```python
internal_value: DataOciVnMonitoringPathAnalyzerTestDestinationEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpoint">DataOciVnMonitoringPathAnalyzerTestDestinationEndpoint</a>

---


### DataOciVnMonitoringPathAnalyzerTestProtocolParametersList <a name="DataOciVnMonitoringPathAnalyzerTestProtocolParametersList" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_test

dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference <a name="DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_test

dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.destinationPort">destination_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.icmpCode">icmp_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.icmpType">icmp_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.sourcePort">source_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParameters">DataOciVnMonitoringPathAnalyzerTestProtocolParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_port`<sup>Required</sup> <a name="destination_port" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.destinationPort"></a>

```python
destination_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `icmp_code`<sup>Required</sup> <a name="icmp_code" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.icmpCode"></a>

```python
icmp_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `icmp_type`<sup>Required</sup> <a name="icmp_type" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.icmpType"></a>

```python
icmp_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_port`<sup>Required</sup> <a name="source_port" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.sourcePort"></a>

```python
source_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciVnMonitoringPathAnalyzerTestProtocolParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParameters">DataOciVnMonitoringPathAnalyzerTestProtocolParameters</a>

---


### DataOciVnMonitoringPathAnalyzerTestQueryOptionsList <a name="DataOciVnMonitoringPathAnalyzerTestQueryOptionsList" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_test

dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference <a name="DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_test

dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.isBiDirectionalAnalysis">is_bi_directional_analysis</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptions">DataOciVnMonitoringPathAnalyzerTestQueryOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_bi_directional_analysis`<sup>Required</sup> <a name="is_bi_directional_analysis" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.isBiDirectionalAnalysis"></a>

```python
is_bi_directional_analysis: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciVnMonitoringPathAnalyzerTestQueryOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptions">DataOciVnMonitoringPathAnalyzerTestQueryOptions</a>

---


### DataOciVnMonitoringPathAnalyzerTestSourceEndpointList <a name="DataOciVnMonitoringPathAnalyzerTestSourceEndpointList" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_test

dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference <a name="DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vn_monitoring_path_analyzer_test

dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.listenerId">listener_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.networkLoadBalancerId">network_load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.vlanId">vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.vnicId">vnic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpoint">DataOciVnMonitoringPathAnalyzerTestSourceEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `listener_id`<sup>Required</sup> <a name="listener_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.listenerId"></a>

```python
listener_id: str
```

- *Type:* str

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

---

##### `network_load_balancer_id`<sup>Required</sup> <a name="network_load_balancer_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.networkLoadBalancerId"></a>

```python
network_load_balancer_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vlan_id`<sup>Required</sup> <a name="vlan_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.vlanId"></a>

```python
vlan_id: str
```

- *Type:* str

---

##### `vnic_id`<sup>Required</sup> <a name="vnic_id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.vnicId"></a>

```python
vnic_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.internalValue"></a>

```python
internal_value: DataOciVnMonitoringPathAnalyzerTestSourceEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpoint">DataOciVnMonitoringPathAnalyzerTestSourceEndpoint</a>

---



