# `dataOciCoreInstanceMeasuredBootReport` Submodule <a name="`dataOciCoreInstanceMeasuredBootReport` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreInstanceMeasuredBootReport <a name="DataOciCoreInstanceMeasuredBootReport" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_measured_boot_report oci_core_instance_measured_boot_report}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_measured_boot_report

dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_measured_boot_report#instance_id DataOciCoreInstanceMeasuredBootReport#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_measured_boot_report#id DataOciCoreInstanceMeasuredBootReport#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_measured_boot_report#instance_id DataOciCoreInstanceMeasuredBootReport#instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_measured_boot_report#id DataOciCoreInstanceMeasuredBootReport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreInstanceMeasuredBootReport resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_measured_boot_report

dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_measured_boot_report

dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_measured_boot_report

dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_measured_boot_report

dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreInstanceMeasuredBootReport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreInstanceMeasuredBootReport to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreInstanceMeasuredBootReport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_measured_boot_report#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreInstanceMeasuredBootReport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.isPolicyVerificationSuccessful">is_policy_verification_successful</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.measurements">measurements</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList">DataOciCoreInstanceMeasuredBootReportMeasurementsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `is_policy_verification_successful`<sup>Required</sup> <a name="is_policy_verification_successful" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.isPolicyVerificationSuccessful"></a>

```python
is_policy_verification_successful: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `measurements`<sup>Required</sup> <a name="measurements" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.measurements"></a>

```python
measurements: DataOciCoreInstanceMeasuredBootReportMeasurementsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList">DataOciCoreInstanceMeasuredBootReportMeasurementsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreInstanceMeasuredBootReportConfig <a name="DataOciCoreInstanceMeasuredBootReportConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_measured_boot_report

dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_measured_boot_report#instance_id DataOciCoreInstanceMeasuredBootReport#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_measured_boot_report#id DataOciCoreInstanceMeasuredBootReport#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_measured_boot_report#instance_id DataOciCoreInstanceMeasuredBootReport#instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_measured_boot_report#id DataOciCoreInstanceMeasuredBootReport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreInstanceMeasuredBootReportMeasurements <a name="DataOciCoreInstanceMeasuredBootReportMeasurements" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurements"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurements.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_measured_boot_report

dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurements()
```


### DataOciCoreInstanceMeasuredBootReportMeasurementsActual <a name="DataOciCoreInstanceMeasuredBootReportMeasurementsActual" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActual"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActual.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_measured_boot_report

dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActual()
```


### DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy <a name="DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_measured_boot_report

dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreInstanceMeasuredBootReportMeasurementsActualList <a name="DataOciCoreInstanceMeasuredBootReportMeasurementsActualList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_measured_boot_report

dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference <a name="DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_measured_boot_report

dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.hashAlgorithm">hash_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.pcrIndex">pcr_index</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActual">DataOciCoreInstanceMeasuredBootReportMeasurementsActual</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hash_algorithm`<sup>Required</sup> <a name="hash_algorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.hashAlgorithm"></a>

```python
hash_algorithm: str
```

- *Type:* str

---

##### `pcr_index`<sup>Required</sup> <a name="pcr_index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.pcrIndex"></a>

```python
pcr_index: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreInstanceMeasuredBootReportMeasurementsActual
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActual">DataOciCoreInstanceMeasuredBootReportMeasurementsActual</a>

---


### DataOciCoreInstanceMeasuredBootReportMeasurementsList <a name="DataOciCoreInstanceMeasuredBootReportMeasurementsList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_measured_boot_report

dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference <a name="DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_measured_boot_report

dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.actual">actual</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList">DataOciCoreInstanceMeasuredBootReportMeasurementsActualList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.policy">policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList">DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurements">DataOciCoreInstanceMeasuredBootReportMeasurements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actual`<sup>Required</sup> <a name="actual" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.actual"></a>

```python
actual: DataOciCoreInstanceMeasuredBootReportMeasurementsActualList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList">DataOciCoreInstanceMeasuredBootReportMeasurementsActualList</a>

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.policy"></a>

```python
policy: DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList">DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreInstanceMeasuredBootReportMeasurements
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurements">DataOciCoreInstanceMeasuredBootReportMeasurements</a>

---


### DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList <a name="DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_measured_boot_report

dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference <a name="DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_measured_boot_report

dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.hashAlgorithm">hash_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.pcrIndex">pcr_index</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy">DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hash_algorithm`<sup>Required</sup> <a name="hash_algorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.hashAlgorithm"></a>

```python
hash_algorithm: str
```

- *Type:* str

---

##### `pcr_index`<sup>Required</sup> <a name="pcr_index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.pcrIndex"></a>

```python
pcr_index: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy">DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy</a>

---



