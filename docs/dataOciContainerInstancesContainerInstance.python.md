# `dataOciContainerInstancesContainerInstance` Submodule <a name="`dataOciContainerInstancesContainerInstance` Submodule" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciContainerInstancesContainerInstance <a name="DataOciContainerInstancesContainerInstance" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance oci_container_instances_container_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container_instance_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.Initializer.parameter.containerInstanceId">container_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance#container_instance_id DataOciContainerInstancesContainerInstance#container_instance_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container_instance_id`<sup>Required</sup> <a name="container_instance_id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.Initializer.parameter.containerInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance#container_instance_id DataOciContainerInstancesContainerInstance#container_instance_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciContainerInstancesContainerInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciContainerInstancesContainerInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciContainerInstancesContainerInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciContainerInstancesContainerInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciContainerInstancesContainerInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.containerCount">container_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.containerRestartPolicy">container_restart_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.containers">containers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList">DataOciContainerInstancesContainerInstanceContainersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.dnsConfig">dns_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList">DataOciContainerInstancesContainerInstanceDnsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.faultDomain">fault_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.gracefulShutdownTimeoutInSeconds">graceful_shutdown_timeout_in_seconds</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.imagePullSecrets">image_pull_secrets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList">DataOciContainerInstancesContainerInstanceImagePullSecretsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList">DataOciContainerInstancesContainerInstanceShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.vnics">vnics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList">DataOciContainerInstancesContainerInstanceVnicsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.volumeCount">volume_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.volumes">volumes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList">DataOciContainerInstancesContainerInstanceVolumesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.containerInstanceIdInput">container_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.containerInstanceId">container_instance_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `container_count`<sup>Required</sup> <a name="container_count" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.containerCount"></a>

```python
container_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `container_restart_policy`<sup>Required</sup> <a name="container_restart_policy" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.containerRestartPolicy"></a>

```python
container_restart_policy: str
```

- *Type:* str

---

##### `containers`<sup>Required</sup> <a name="containers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.containers"></a>

```python
containers: DataOciContainerInstancesContainerInstanceContainersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList">DataOciContainerInstancesContainerInstanceContainersList</a>

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `dns_config`<sup>Required</sup> <a name="dns_config" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.dnsConfig"></a>

```python
dns_config: DataOciContainerInstancesContainerInstanceDnsConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList">DataOciContainerInstancesContainerInstanceDnsConfigList</a>

---

##### `fault_domain`<sup>Required</sup> <a name="fault_domain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.faultDomain"></a>

```python
fault_domain: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `graceful_shutdown_timeout_in_seconds`<sup>Required</sup> <a name="graceful_shutdown_timeout_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.gracefulShutdownTimeoutInSeconds"></a>

```python
graceful_shutdown_timeout_in_seconds: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_pull_secrets`<sup>Required</sup> <a name="image_pull_secrets" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.imagePullSecrets"></a>

```python
image_pull_secrets: DataOciContainerInstancesContainerInstanceImagePullSecretsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList">DataOciContainerInstancesContainerInstanceImagePullSecretsList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `shape_config`<sup>Required</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.shapeConfig"></a>

```python
shape_config: DataOciContainerInstancesContainerInstanceShapeConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList">DataOciContainerInstancesContainerInstanceShapeConfigList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `vnics`<sup>Required</sup> <a name="vnics" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.vnics"></a>

```python
vnics: DataOciContainerInstancesContainerInstanceVnicsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList">DataOciContainerInstancesContainerInstanceVnicsList</a>

---

##### `volume_count`<sup>Required</sup> <a name="volume_count" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.volumeCount"></a>

```python
volume_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.volumes"></a>

```python
volumes: DataOciContainerInstancesContainerInstanceVolumesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList">DataOciContainerInstancesContainerInstanceVolumesList</a>

---

##### `container_instance_id_input`<sup>Optional</sup> <a name="container_instance_id_input" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.containerInstanceIdInput"></a>

```python
container_instance_id_input: str
```

- *Type:* str

---

##### `container_instance_id`<sup>Required</sup> <a name="container_instance_id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.containerInstanceId"></a>

```python
container_instance_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciContainerInstancesContainerInstanceConfig <a name="DataOciContainerInstancesContainerInstanceConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container_instance_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.containerInstanceId">container_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance#container_instance_id DataOciContainerInstancesContainerInstance#container_instance_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container_instance_id`<sup>Required</sup> <a name="container_instance_id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.containerInstanceId"></a>

```python
container_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance#container_instance_id DataOciContainerInstancesContainerInstance#container_instance_id}.

---

### DataOciContainerInstancesContainerInstanceContainers <a name="DataOciContainerInstancesContainerInstanceContainers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainers()
```


### DataOciContainerInstancesContainerInstanceContainersHealthChecks <a name="DataOciContainerInstancesContainerInstanceContainersHealthChecks" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecks()
```


### DataOciContainerInstancesContainerInstanceContainersHealthChecksHeaders <a name="DataOciContainerInstancesContainerInstanceContainersHealthChecksHeaders" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeaders.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeaders()
```


### DataOciContainerInstancesContainerInstanceContainersResourceConfig <a name="DataOciContainerInstancesContainerInstanceContainersResourceConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfig()
```


### DataOciContainerInstancesContainerInstanceContainersSecurityContext <a name="DataOciContainerInstancesContainerInstanceContainersSecurityContext" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContext"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContext.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContext()
```


### DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilities <a name="DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilities" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilities.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilities()
```


### DataOciContainerInstancesContainerInstanceContainersVolumeMounts <a name="DataOciContainerInstancesContainerInstanceContainersVolumeMounts" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMounts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMounts()
```


### DataOciContainerInstancesContainerInstanceDnsConfig <a name="DataOciContainerInstancesContainerInstanceDnsConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfig()
```


### DataOciContainerInstancesContainerInstanceImagePullSecrets <a name="DataOciContainerInstancesContainerInstanceImagePullSecrets" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecrets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecrets.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecrets()
```


### DataOciContainerInstancesContainerInstanceShapeConfig <a name="DataOciContainerInstancesContainerInstanceShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfig()
```


### DataOciContainerInstancesContainerInstanceVnics <a name="DataOciContainerInstancesContainerInstanceVnics" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnics.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnics()
```


### DataOciContainerInstancesContainerInstanceVolumes <a name="DataOciContainerInstancesContainerInstanceVolumes" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumes()
```


### DataOciContainerInstancesContainerInstanceVolumesConfigs <a name="DataOciContainerInstancesContainerInstanceVolumesConfigs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigs.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigs()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList <a name="DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference <a name="DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeaders">DataOciContainerInstancesContainerInstanceContainersHealthChecksHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerInstancesContainerInstanceContainersHealthChecksHeaders
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeaders">DataOciContainerInstancesContainerInstanceContainersHealthChecksHeaders</a>

---


### DataOciContainerInstancesContainerInstanceContainersHealthChecksList <a name="DataOciContainerInstancesContainerInstanceContainersHealthChecksList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference <a name="DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureAction">failure_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.headers">headers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList">DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.healthCheckType">health_check_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.initialDelayInSeconds">initial_delay_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.intervalInSeconds">interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.statusDetails">status_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.successThreshold">success_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecks">DataOciContainerInstancesContainerInstanceContainersHealthChecks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `command`<sup>Required</sup> <a name="command" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `failure_action`<sup>Required</sup> <a name="failure_action" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureAction"></a>

```python
failure_action: str
```

- *Type:* str

---

##### `failure_threshold`<sup>Required</sup> <a name="failure_threshold" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `headers`<sup>Required</sup> <a name="headers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.headers"></a>

```python
headers: DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList">DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList</a>

---

##### `health_check_type`<sup>Required</sup> <a name="health_check_type" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.healthCheckType"></a>

```python
health_check_type: str
```

- *Type:* str

---

##### `initial_delay_in_seconds`<sup>Required</sup> <a name="initial_delay_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.initialDelayInSeconds"></a>

```python
initial_delay_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_in_seconds`<sup>Required</sup> <a name="interval_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.intervalInSeconds"></a>

```python
interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_details`<sup>Required</sup> <a name="status_details" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.statusDetails"></a>

```python
status_details: str
```

- *Type:* str

---

##### `success_threshold`<sup>Required</sup> <a name="success_threshold" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.successThreshold"></a>

```python
success_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_in_seconds`<sup>Required</sup> <a name="timeout_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerInstancesContainerInstanceContainersHealthChecks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecks">DataOciContainerInstancesContainerInstanceContainersHealthChecks</a>

---


### DataOciContainerInstancesContainerInstanceContainersList <a name="DataOciContainerInstancesContainerInstanceContainersList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerInstancesContainerInstanceContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerInstancesContainerInstanceContainersOutputReference <a name="DataOciContainerInstancesContainerInstanceContainersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.arguments">arguments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.containerId">container_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.containerInstanceId">container_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.environmentVariables">environment_variables</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.exitCode">exit_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.faultDomain">fault_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.healthChecks">health_checks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList">DataOciContainerInstancesContainerInstanceContainersHealthChecksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.imageUrl">image_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.isResourcePrincipalDisabled">is_resource_principal_disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.resourceConfig">resource_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList">DataOciContainerInstancesContainerInstanceContainersResourceConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.securityContext">security_context</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList">DataOciContainerInstancesContainerInstanceContainersSecurityContextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.timeTerminated">time_terminated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.volumeMounts">volume_mounts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList">DataOciContainerInstancesContainerInstanceContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.workingDirectory">working_directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainers">DataOciContainerInstancesContainerInstanceContainers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.arguments"></a>

```python
arguments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `command`<sup>Required</sup> <a name="command" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `container_id`<sup>Required</sup> <a name="container_id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.containerId"></a>

```python
container_id: str
```

- *Type:* str

---

##### `container_instance_id`<sup>Required</sup> <a name="container_instance_id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.containerInstanceId"></a>

```python
container_instance_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.environmentVariables"></a>

```python
environment_variables: StringMap
```

- *Type:* cdktf.StringMap

---

##### `exit_code`<sup>Required</sup> <a name="exit_code" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.exitCode"></a>

```python
exit_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fault_domain`<sup>Required</sup> <a name="fault_domain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.faultDomain"></a>

```python
fault_domain: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `health_checks`<sup>Required</sup> <a name="health_checks" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.healthChecks"></a>

```python
health_checks: DataOciContainerInstancesContainerInstanceContainersHealthChecksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList">DataOciContainerInstancesContainerInstanceContainersHealthChecksList</a>

---

##### `image_url`<sup>Required</sup> <a name="image_url" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.imageUrl"></a>

```python
image_url: str
```

- *Type:* str

---

##### `is_resource_principal_disabled`<sup>Required</sup> <a name="is_resource_principal_disabled" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.isResourcePrincipalDisabled"></a>

```python
is_resource_principal_disabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `resource_config`<sup>Required</sup> <a name="resource_config" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.resourceConfig"></a>

```python
resource_config: DataOciContainerInstancesContainerInstanceContainersResourceConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList">DataOciContainerInstancesContainerInstanceContainersResourceConfigList</a>

---

##### `security_context`<sup>Required</sup> <a name="security_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.securityContext"></a>

```python
security_context: DataOciContainerInstancesContainerInstanceContainersSecurityContextList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList">DataOciContainerInstancesContainerInstanceContainersSecurityContextList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_terminated`<sup>Required</sup> <a name="time_terminated" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.timeTerminated"></a>

```python
time_terminated: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `volume_mounts`<sup>Required</sup> <a name="volume_mounts" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.volumeMounts"></a>

```python
volume_mounts: DataOciContainerInstancesContainerInstanceContainersVolumeMountsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList">DataOciContainerInstancesContainerInstanceContainersVolumeMountsList</a>

---

##### `working_directory`<sup>Required</sup> <a name="working_directory" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.workingDirectory"></a>

```python
working_directory: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerInstancesContainerInstanceContainers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainers">DataOciContainerInstancesContainerInstanceContainers</a>

---


### DataOciContainerInstancesContainerInstanceContainersResourceConfigList <a name="DataOciContainerInstancesContainerInstanceContainersResourceConfigList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference <a name="DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.memoryLimitInGbs">memory_limit_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.vcpusLimit">vcpus_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfig">DataOciContainerInstancesContainerInstanceContainersResourceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_limit_in_gbs`<sup>Required</sup> <a name="memory_limit_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.memoryLimitInGbs"></a>

```python
memory_limit_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vcpus_limit`<sup>Required</sup> <a name="vcpus_limit" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.vcpusLimit"></a>

```python
vcpus_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerInstancesContainerInstanceContainersResourceConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfig">DataOciContainerInstancesContainerInstanceContainersResourceConfig</a>

---


### DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList <a name="DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference <a name="DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.addCapabilities">add_capabilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.dropCapabilities">drop_capabilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilities">DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `add_capabilities`<sup>Required</sup> <a name="add_capabilities" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.addCapabilities"></a>

```python
add_capabilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `drop_capabilities`<sup>Required</sup> <a name="drop_capabilities" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.dropCapabilities"></a>

```python
drop_capabilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilities
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilities">DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a>

---


### DataOciContainerInstancesContainerInstanceContainersSecurityContextList <a name="DataOciContainerInstancesContainerInstanceContainersSecurityContextList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference <a name="DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.capabilities">capabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList">DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isNonRootUserCheckEnabled">is_non_root_user_check_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isRootFileSystemReadonly">is_root_file_system_readonly</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsGroup">run_as_group</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsUser">run_as_user</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.securityContextType">security_context_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContext">DataOciContainerInstancesContainerInstanceContainersSecurityContext</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.capabilities"></a>

```python
capabilities: DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList">DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList</a>

---

##### `is_non_root_user_check_enabled`<sup>Required</sup> <a name="is_non_root_user_check_enabled" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isNonRootUserCheckEnabled"></a>

```python
is_non_root_user_check_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_root_file_system_readonly`<sup>Required</sup> <a name="is_root_file_system_readonly" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isRootFileSystemReadonly"></a>

```python
is_root_file_system_readonly: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `run_as_group`<sup>Required</sup> <a name="run_as_group" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsGroup"></a>

```python
run_as_group: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `run_as_user`<sup>Required</sup> <a name="run_as_user" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsUser"></a>

```python
run_as_user: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_context_type`<sup>Required</sup> <a name="security_context_type" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.securityContextType"></a>

```python
security_context_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerInstancesContainerInstanceContainersSecurityContext
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContext">DataOciContainerInstancesContainerInstanceContainersSecurityContext</a>

---


### DataOciContainerInstancesContainerInstanceContainersVolumeMountsList <a name="DataOciContainerInstancesContainerInstanceContainersVolumeMountsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference <a name="DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.isReadOnly">is_read_only</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.mountPath">mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.partition">partition</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.subPath">sub_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.volumeName">volume_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMounts">DataOciContainerInstancesContainerInstanceContainersVolumeMounts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_read_only`<sup>Required</sup> <a name="is_read_only" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.isReadOnly"></a>

```python
is_read_only: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

---

##### `partition`<sup>Required</sup> <a name="partition" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.partition"></a>

```python
partition: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sub_path`<sup>Required</sup> <a name="sub_path" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.subPath"></a>

```python
sub_path: str
```

- *Type:* str

---

##### `volume_name`<sup>Required</sup> <a name="volume_name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.volumeName"></a>

```python
volume_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerInstancesContainerInstanceContainersVolumeMounts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMounts">DataOciContainerInstancesContainerInstanceContainersVolumeMounts</a>

---


### DataOciContainerInstancesContainerInstanceDnsConfigList <a name="DataOciContainerInstancesContainerInstanceDnsConfigList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerInstancesContainerInstanceDnsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerInstancesContainerInstanceDnsConfigOutputReference <a name="DataOciContainerInstancesContainerInstanceDnsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.property.nameservers">nameservers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.property.options">options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.property.searches">searches</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfig">DataOciContainerInstancesContainerInstanceDnsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.property.nameservers"></a>

```python
nameservers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `options`<sup>Required</sup> <a name="options" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.property.options"></a>

```python
options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `searches`<sup>Required</sup> <a name="searches" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.property.searches"></a>

```python
searches: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerInstancesContainerInstanceDnsConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfig">DataOciContainerInstancesContainerInstanceDnsConfig</a>

---


### DataOciContainerInstancesContainerInstanceImagePullSecretsList <a name="DataOciContainerInstancesContainerInstanceImagePullSecretsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference <a name="DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.registryEndpoint">registry_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretType">secret_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecrets">DataOciContainerInstancesContainerInstanceImagePullSecrets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `registry_endpoint`<sup>Required</sup> <a name="registry_endpoint" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.registryEndpoint"></a>

```python
registry_endpoint: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `secret_type`<sup>Required</sup> <a name="secret_type" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretType"></a>

```python
secret_type: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerInstancesContainerInstanceImagePullSecrets
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecrets">DataOciContainerInstancesContainerInstanceImagePullSecrets</a>

---


### DataOciContainerInstancesContainerInstanceShapeConfigList <a name="DataOciContainerInstancesContainerInstanceShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerInstancesContainerInstanceShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerInstancesContainerInstanceShapeConfigOutputReference <a name="DataOciContainerInstancesContainerInstanceShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.networkingBandwidthInGbps">networking_bandwidth_in_gbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.processorDescription">processor_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfig">DataOciContainerInstancesContainerInstanceShapeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `networking_bandwidth_in_gbps`<sup>Required</sup> <a name="networking_bandwidth_in_gbps" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.networkingBandwidthInGbps"></a>

```python
networking_bandwidth_in_gbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `processor_description`<sup>Required</sup> <a name="processor_description" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.processorDescription"></a>

```python
processor_description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerInstancesContainerInstanceShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfig">DataOciContainerInstancesContainerInstanceShapeConfig</a>

---


### DataOciContainerInstancesContainerInstanceVnicsList <a name="DataOciContainerInstancesContainerInstanceVnicsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerInstancesContainerInstanceVnicsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerInstancesContainerInstanceVnicsOutputReference <a name="DataOciContainerInstancesContainerInstanceVnicsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.hostnameLabel">hostname_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.isPublicIpAssigned">is_public_ip_assigned</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.skipSourceDestCheck">skip_source_dest_check</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.vnicId">vnic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnics">DataOciContainerInstancesContainerInstanceVnics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `hostname_label`<sup>Required</sup> <a name="hostname_label" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.hostnameLabel"></a>

```python
hostname_label: str
```

- *Type:* str

---

##### `is_public_ip_assigned`<sup>Required</sup> <a name="is_public_ip_assigned" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.isPublicIpAssigned"></a>

```python
is_public_ip_assigned: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `skip_source_dest_check`<sup>Required</sup> <a name="skip_source_dest_check" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.skipSourceDestCheck"></a>

```python
skip_source_dest_check: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `vnic_id`<sup>Required</sup> <a name="vnic_id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.vnicId"></a>

```python
vnic_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerInstancesContainerInstanceVnics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnics">DataOciContainerInstancesContainerInstanceVnics</a>

---


### DataOciContainerInstancesContainerInstanceVolumesConfigsList <a name="DataOciContainerInstancesContainerInstanceVolumesConfigsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference <a name="DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.data">data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fileName">file_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigs">DataOciContainerInstancesContainerInstanceVolumesConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.data"></a>

```python
data: str
```

- *Type:* str

---

##### `file_name`<sup>Required</sup> <a name="file_name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerInstancesContainerInstanceVolumesConfigs
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigs">DataOciContainerInstancesContainerInstanceVolumesConfigs</a>

---


### DataOciContainerInstancesContainerInstanceVolumesList <a name="DataOciContainerInstancesContainerInstanceVolumesList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerInstancesContainerInstanceVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerInstancesContainerInstanceVolumesOutputReference <a name="DataOciContainerInstancesContainerInstanceVolumesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance

dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.backingStore">backing_store</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.configs">configs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList">DataOciContainerInstancesContainerInstanceVolumesConfigsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumes">DataOciContainerInstancesContainerInstanceVolumes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backing_store`<sup>Required</sup> <a name="backing_store" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.backingStore"></a>

```python
backing_store: str
```

- *Type:* str

---

##### `configs`<sup>Required</sup> <a name="configs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.configs"></a>

```python
configs: DataOciContainerInstancesContainerInstanceVolumesConfigsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList">DataOciContainerInstancesContainerInstanceVolumesConfigsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerInstancesContainerInstanceVolumes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumes">DataOciContainerInstancesContainerInstanceVolumes</a>

---



