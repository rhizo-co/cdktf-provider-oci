# `dataOciStackMonitoringMetricExtension` Submodule <a name="`dataOciStackMonitoringMetricExtension` Submodule" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciStackMonitoringMetricExtension <a name="DataOciStackMonitoringMetricExtension" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extension oci_stack_monitoring_metric_extension}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extension

dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metric_extension_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.Initializer.parameter.metricExtensionId">metric_extension_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extension#metric_extension_id DataOciStackMonitoringMetricExtension#metric_extension_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metric_extension_id`<sup>Required</sup> <a name="metric_extension_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.Initializer.parameter.metricExtensionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extension#metric_extension_id DataOciStackMonitoringMetricExtension#metric_extension_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciStackMonitoringMetricExtension resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extension

dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extension

dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extension

dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extension

dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciStackMonitoringMetricExtension resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciStackMonitoringMetricExtension to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciStackMonitoringMetricExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciStackMonitoringMetricExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.collectionMethod">collection_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.collectionRecurrences">collection_recurrences</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.enabledOnResources">enabled_on_resources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList">DataOciStackMonitoringMetricExtensionEnabledOnResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.enabledOnResourcesCount">enabled_on_resources_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.lastUpdatedBy">last_updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.metricList">metric_list</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList">DataOciStackMonitoringMetricExtensionMetricListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.publishTrigger">publish_trigger</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.queryProperties">query_properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList">DataOciStackMonitoringMetricExtensionQueryPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.resourceUri">resource_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.metricExtensionIdInput">metric_extension_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.metricExtensionId">metric_extension_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `collection_method`<sup>Required</sup> <a name="collection_method" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.collectionMethod"></a>

```python
collection_method: str
```

- *Type:* str

---

##### `collection_recurrences`<sup>Required</sup> <a name="collection_recurrences" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.collectionRecurrences"></a>

```python
collection_recurrences: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enabled_on_resources`<sup>Required</sup> <a name="enabled_on_resources" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.enabledOnResources"></a>

```python
enabled_on_resources: DataOciStackMonitoringMetricExtensionEnabledOnResourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList">DataOciStackMonitoringMetricExtensionEnabledOnResourcesList</a>

---

##### `enabled_on_resources_count`<sup>Required</sup> <a name="enabled_on_resources_count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.enabledOnResourcesCount"></a>

```python
enabled_on_resources_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_by`<sup>Required</sup> <a name="last_updated_by" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.lastUpdatedBy"></a>

```python
last_updated_by: str
```

- *Type:* str

---

##### `metric_list`<sup>Required</sup> <a name="metric_list" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.metricList"></a>

```python
metric_list: DataOciStackMonitoringMetricExtensionMetricListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList">DataOciStackMonitoringMetricExtensionMetricListStructList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `publish_trigger`<sup>Required</sup> <a name="publish_trigger" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.publishTrigger"></a>

```python
publish_trigger: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `query_properties`<sup>Required</sup> <a name="query_properties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.queryProperties"></a>

```python
query_properties: DataOciStackMonitoringMetricExtensionQueryPropertiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList">DataOciStackMonitoringMetricExtensionQueryPropertiesList</a>

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `resource_uri`<sup>Required</sup> <a name="resource_uri" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.resourceUri"></a>

```python
resource_uri: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `metric_extension_id_input`<sup>Optional</sup> <a name="metric_extension_id_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.metricExtensionIdInput"></a>

```python
metric_extension_id_input: str
```

- *Type:* str

---

##### `metric_extension_id`<sup>Required</sup> <a name="metric_extension_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.metricExtensionId"></a>

```python
metric_extension_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciStackMonitoringMetricExtensionConfig <a name="DataOciStackMonitoringMetricExtensionConfig" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extension

dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metric_extension_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.metricExtensionId">metric_extension_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extension#metric_extension_id DataOciStackMonitoringMetricExtension#metric_extension_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metric_extension_id`<sup>Required</sup> <a name="metric_extension_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.metricExtensionId"></a>

```python
metric_extension_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extension#metric_extension_id DataOciStackMonitoringMetricExtension#metric_extension_id}.

---

### DataOciStackMonitoringMetricExtensionEnabledOnResources <a name="DataOciStackMonitoringMetricExtensionEnabledOnResources" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extension

dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResources()
```


### DataOciStackMonitoringMetricExtensionMetricListStruct <a name="DataOciStackMonitoringMetricExtensionMetricListStruct" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStruct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extension

dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStruct()
```


### DataOciStackMonitoringMetricExtensionQueryProperties <a name="DataOciStackMonitoringMetricExtensionQueryProperties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryProperties.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extension

dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryProperties()
```


### DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetails <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extension

dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetails()
```


### DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetails <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extension

dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetails()
```


### DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetails <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extension

dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetails()
```


### DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetails <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extension

dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciStackMonitoringMetricExtensionEnabledOnResourcesList <a name="DataOciStackMonitoringMetricExtensionEnabledOnResourcesList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extension

dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference <a name="DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extension

dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResources">DataOciStackMonitoringMetricExtensionEnabledOnResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringMetricExtensionEnabledOnResources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResources">DataOciStackMonitoringMetricExtensionEnabledOnResources</a>

---


### DataOciStackMonitoringMetricExtensionMetricListStructList <a name="DataOciStackMonitoringMetricExtensionMetricListStructList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extension

dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMetricExtensionMetricListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringMetricExtensionMetricListStructOutputReference <a name="DataOciStackMonitoringMetricExtensionMetricListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extension

dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.computeExpression">compute_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.isDimension">is_dimension</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.isHidden">is_hidden</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.metricCategory">metric_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStruct">DataOciStackMonitoringMetricExtensionMetricListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_expression`<sup>Required</sup> <a name="compute_expression" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.computeExpression"></a>

```python
compute_expression: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `is_dimension`<sup>Required</sup> <a name="is_dimension" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.isDimension"></a>

```python
is_dimension: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_hidden`<sup>Required</sup> <a name="is_hidden" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.isHidden"></a>

```python
is_hidden: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `metric_category`<sup>Required</sup> <a name="metric_category" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.metricCategory"></a>

```python
metric_category: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringMetricExtensionMetricListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStruct">DataOciStackMonitoringMetricExtensionMetricListStruct</a>

---


### DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extension

dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extension

dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.inParamPosition">in_param_position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.inParamValue">in_param_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetails">DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `in_param_position`<sup>Required</sup> <a name="in_param_position" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.inParamPosition"></a>

```python
in_param_position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `in_param_value`<sup>Required</sup> <a name="in_param_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.inParamValue"></a>

```python
in_param_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetails">DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetails</a>

---


### DataOciStackMonitoringMetricExtensionQueryPropertiesList <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extension

dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extension

dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extension

dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.outParamPosition">out_param_position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.outParamType">out_param_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetails">DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `out_param_position`<sup>Required</sup> <a name="out_param_position" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.outParamPosition"></a>

```python
out_param_position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `out_param_type`<sup>Required</sup> <a name="out_param_type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.outParamType"></a>

```python
out_param_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetails">DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetails</a>

---


### DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extension

dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.arguments">arguments</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.autoRowPrefix">auto_row_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.collectionMethod">collection_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.command">command</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.delimiter">delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.identityMetric">identity_metric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.inParamDetails">in_param_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList">DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.isMetricServiceEnabled">is_metric_service_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.jmxAttributes">jmx_attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.managedBeanQuery">managed_bean_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.outParamDetails">out_param_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList">DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.scriptDetails">script_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList">DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.sqlDetails">sql_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList">DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.sqlType">sql_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.startsWith">starts_with</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryProperties">DataOciStackMonitoringMetricExtensionQueryProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.arguments"></a>

```python
arguments: str
```

- *Type:* str

---

##### `auto_row_prefix`<sup>Required</sup> <a name="auto_row_prefix" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.autoRowPrefix"></a>

```python
auto_row_prefix: str
```

- *Type:* str

---

##### `collection_method`<sup>Required</sup> <a name="collection_method" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.collectionMethod"></a>

```python
collection_method: str
```

- *Type:* str

---

##### `command`<sup>Required</sup> <a name="command" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.command"></a>

```python
command: str
```

- *Type:* str

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

---

##### `identity_metric`<sup>Required</sup> <a name="identity_metric" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.identityMetric"></a>

```python
identity_metric: str
```

- *Type:* str

---

##### `in_param_details`<sup>Required</sup> <a name="in_param_details" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.inParamDetails"></a>

```python
in_param_details: DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList">DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList</a>

---

##### `is_metric_service_enabled`<sup>Required</sup> <a name="is_metric_service_enabled" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.isMetricServiceEnabled"></a>

```python
is_metric_service_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `jmx_attributes`<sup>Required</sup> <a name="jmx_attributes" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.jmxAttributes"></a>

```python
jmx_attributes: str
```

- *Type:* str

---

##### `managed_bean_query`<sup>Required</sup> <a name="managed_bean_query" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.managedBeanQuery"></a>

```python
managed_bean_query: str
```

- *Type:* str

---

##### `out_param_details`<sup>Required</sup> <a name="out_param_details" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.outParamDetails"></a>

```python
out_param_details: DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList">DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList</a>

---

##### `script_details`<sup>Required</sup> <a name="script_details" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.scriptDetails"></a>

```python
script_details: DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList">DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList</a>

---

##### `sql_details`<sup>Required</sup> <a name="sql_details" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.sqlDetails"></a>

```python
sql_details: DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList">DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList</a>

---

##### `sql_type`<sup>Required</sup> <a name="sql_type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.sqlType"></a>

```python
sql_type: str
```

- *Type:* str

---

##### `starts_with`<sup>Required</sup> <a name="starts_with" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.startsWith"></a>

```python
starts_with: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringMetricExtensionQueryProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryProperties">DataOciStackMonitoringMetricExtensionQueryProperties</a>

---


### DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extension

dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extension

dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetails">DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetails">DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetails</a>

---


### DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extension

dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extension

dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.scriptFileName">script_file_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetails">DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `script_file_name`<sup>Required</sup> <a name="script_file_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.scriptFileName"></a>

```python
script_file_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetails">DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetails</a>

---



