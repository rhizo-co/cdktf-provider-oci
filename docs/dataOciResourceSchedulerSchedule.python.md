# `dataOciResourceSchedulerSchedule` Submodule <a name="`dataOciResourceSchedulerSchedule` Submodule" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciResourceSchedulerSchedule <a name="DataOciResourceSchedulerSchedule" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedule oci_resource_scheduler_schedule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedule

dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  schedule_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.Initializer.parameter.scheduleId">schedule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedule#schedule_id DataOciResourceSchedulerSchedule#schedule_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `schedule_id`<sup>Required</sup> <a name="schedule_id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.Initializer.parameter.scheduleId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedule#schedule_id DataOciResourceSchedulerSchedule#schedule_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciResourceSchedulerSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedule

dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedule

dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedule

dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedule

dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciResourceSchedulerSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciResourceSchedulerSchedule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciResourceSchedulerSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciResourceSchedulerSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.recurrenceDetails">recurrence_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.recurrenceType">recurrence_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.resourceFilters">resource_filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersList">DataOciResourceSchedulerScheduleResourceFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.resources">resources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesList">DataOciResourceSchedulerScheduleResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.timeEnds">time_ends</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.timeLastRun">time_last_run</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.timeNextRun">time_next_run</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.timeStarts">time_starts</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.scheduleIdInput">schedule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.scheduleId">schedule_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `recurrence_details`<sup>Required</sup> <a name="recurrence_details" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.recurrenceDetails"></a>

```python
recurrence_details: str
```

- *Type:* str

---

##### `recurrence_type`<sup>Required</sup> <a name="recurrence_type" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.recurrenceType"></a>

```python
recurrence_type: str
```

- *Type:* str

---

##### `resource_filters`<sup>Required</sup> <a name="resource_filters" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.resourceFilters"></a>

```python
resource_filters: DataOciResourceSchedulerScheduleResourceFiltersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersList">DataOciResourceSchedulerScheduleResourceFiltersList</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.resources"></a>

```python
resources: DataOciResourceSchedulerScheduleResourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesList">DataOciResourceSchedulerScheduleResourcesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_ends`<sup>Required</sup> <a name="time_ends" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.timeEnds"></a>

```python
time_ends: str
```

- *Type:* str

---

##### `time_last_run`<sup>Required</sup> <a name="time_last_run" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.timeLastRun"></a>

```python
time_last_run: str
```

- *Type:* str

---

##### `time_next_run`<sup>Required</sup> <a name="time_next_run" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.timeNextRun"></a>

```python
time_next_run: str
```

- *Type:* str

---

##### `time_starts`<sup>Required</sup> <a name="time_starts" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.timeStarts"></a>

```python
time_starts: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `schedule_id_input`<sup>Optional</sup> <a name="schedule_id_input" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.scheduleIdInput"></a>

```python
schedule_id_input: str
```

- *Type:* str

---

##### `schedule_id`<sup>Required</sup> <a name="schedule_id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.scheduleId"></a>

```python
schedule_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerSchedule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciResourceSchedulerScheduleConfig <a name="DataOciResourceSchedulerScheduleConfig" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedule

dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  schedule_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleConfig.property.scheduleId">schedule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedule#schedule_id DataOciResourceSchedulerSchedule#schedule_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `schedule_id`<sup>Required</sup> <a name="schedule_id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleConfig.property.scheduleId"></a>

```python
schedule_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedule#schedule_id DataOciResourceSchedulerSchedule#schedule_id}.

---

### DataOciResourceSchedulerScheduleResourceFilters <a name="DataOciResourceSchedulerScheduleResourceFilters" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFilters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedule

dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFilters()
```


### DataOciResourceSchedulerScheduleResourceFiltersValue <a name="DataOciResourceSchedulerScheduleResourceFiltersValue" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValue"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValue.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedule

dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValue()
```


### DataOciResourceSchedulerScheduleResources <a name="DataOciResourceSchedulerScheduleResources" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedule

dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResources()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciResourceSchedulerScheduleResourceFiltersList <a name="DataOciResourceSchedulerScheduleResourceFiltersList" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedule

dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciResourceSchedulerScheduleResourceFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciResourceSchedulerScheduleResourceFiltersOutputReference <a name="DataOciResourceSchedulerScheduleResourceFiltersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedule

dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.property.shouldIncludeChildCompartments">should_include_child_compartments</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.property.value">value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueList">DataOciResourceSchedulerScheduleResourceFiltersValueList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFilters">DataOciResourceSchedulerScheduleResourceFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `should_include_child_compartments`<sup>Required</sup> <a name="should_include_child_compartments" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.property.shouldIncludeChildCompartments"></a>

```python
should_include_child_compartments: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.property.value"></a>

```python
value: DataOciResourceSchedulerScheduleResourceFiltersValueList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueList">DataOciResourceSchedulerScheduleResourceFiltersValueList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciResourceSchedulerScheduleResourceFilters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFilters">DataOciResourceSchedulerScheduleResourceFilters</a>

---


### DataOciResourceSchedulerScheduleResourceFiltersValueList <a name="DataOciResourceSchedulerScheduleResourceFiltersValueList" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedule

dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference <a name="DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedule

dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValue">DataOciResourceSchedulerScheduleResourceFiltersValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValueOutputReference.property.internalValue"></a>

```python
internal_value: DataOciResourceSchedulerScheduleResourceFiltersValue
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourceFiltersValue">DataOciResourceSchedulerScheduleResourceFiltersValue</a>

---


### DataOciResourceSchedulerScheduleResourcesList <a name="DataOciResourceSchedulerScheduleResourcesList" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedule

dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciResourceSchedulerScheduleResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciResourceSchedulerScheduleResourcesOutputReference <a name="DataOciResourceSchedulerScheduleResourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedule

dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResources">DataOciResourceSchedulerScheduleResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.property.metadata"></a>

```python
metadata: StringMap
```

- *Type:* cdktf.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciResourceSchedulerScheduleResources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedule.DataOciResourceSchedulerScheduleResources">DataOciResourceSchedulerScheduleResources</a>

---



