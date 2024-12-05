# `dataOciBdsBdsInstance` Submodule <a name="`dataOciBdsBdsInstance` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBdsBdsInstance <a name="DataOciBdsBdsInstance" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance oci_bds_bds_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bds_instance_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.Initializer.parameter.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance#bds_instance_id DataOciBdsBdsInstance#bds_instance_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.Initializer.parameter.bdsInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance#bds_instance_id DataOciBdsBdsInstance#bds_instance_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciBdsBdsInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstance.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciBdsBdsInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciBdsBdsInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciBdsBdsInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBdsBdsInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.bootstrapScriptUrl">bootstrap_script_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.cloudSqlDetails">cloud_sql_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsList">DataOciBdsBdsInstanceCloudSqlDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.clusterAdminPassword">cluster_admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.clusterDetails">cluster_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsList">DataOciBdsBdsInstanceClusterDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.clusterProfile">cluster_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.clusterPublicKey">cluster_public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.clusterVersion">cluster_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.computeOnlyWorkerNode">compute_only_worker_node</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeList">DataOciBdsBdsInstanceComputeOnlyWorkerNodeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.edgeNode">edge_node</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeList">DataOciBdsBdsInstanceEdgeNodeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.ignoreExistingNodesShape">ignore_existing_nodes_shape</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.isCloudSqlConfigured">is_cloud_sql_configured</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.isForceStopJobs">is_force_stop_jobs</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.isHighAvailability">is_high_availability</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.isKafkaConfigured">is_kafka_configured</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.isSecure">is_secure</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.kafkaBrokerNode">kafka_broker_node</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeList">DataOciBdsBdsInstanceKafkaBrokerNodeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.kerberosRealmName">kerberos_realm_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.masterNode">master_node</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeList">DataOciBdsBdsInstanceMasterNodeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.networkConfig">network_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigList">DataOciBdsBdsInstanceNetworkConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.nodes">nodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesList">DataOciBdsBdsInstanceNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.numberOfNodesRequiringMaintenanceReboot">number_of_nodes_requiring_maintenance_reboot</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.osPatchVersion">os_patch_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.utilNode">util_node</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeList">DataOciBdsBdsInstanceUtilNodeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.workerNode">worker_node</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeList">DataOciBdsBdsInstanceWorkerNodeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.bdsInstanceIdInput">bds_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `bootstrap_script_url`<sup>Required</sup> <a name="bootstrap_script_url" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.bootstrapScriptUrl"></a>

```python
bootstrap_script_url: str
```

- *Type:* str

---

##### `cloud_sql_details`<sup>Required</sup> <a name="cloud_sql_details" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.cloudSqlDetails"></a>

```python
cloud_sql_details: DataOciBdsBdsInstanceCloudSqlDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsList">DataOciBdsBdsInstanceCloudSqlDetailsList</a>

---

##### `cluster_admin_password`<sup>Required</sup> <a name="cluster_admin_password" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.clusterAdminPassword"></a>

```python
cluster_admin_password: str
```

- *Type:* str

---

##### `cluster_details`<sup>Required</sup> <a name="cluster_details" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.clusterDetails"></a>

```python
cluster_details: DataOciBdsBdsInstanceClusterDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsList">DataOciBdsBdsInstanceClusterDetailsList</a>

---

##### `cluster_profile`<sup>Required</sup> <a name="cluster_profile" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.clusterProfile"></a>

```python
cluster_profile: str
```

- *Type:* str

---

##### `cluster_public_key`<sup>Required</sup> <a name="cluster_public_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.clusterPublicKey"></a>

```python
cluster_public_key: str
```

- *Type:* str

---

##### `cluster_version`<sup>Required</sup> <a name="cluster_version" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.clusterVersion"></a>

```python
cluster_version: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compute_only_worker_node`<sup>Required</sup> <a name="compute_only_worker_node" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.computeOnlyWorkerNode"></a>

```python
compute_only_worker_node: DataOciBdsBdsInstanceComputeOnlyWorkerNodeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeList">DataOciBdsBdsInstanceComputeOnlyWorkerNodeList</a>

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `edge_node`<sup>Required</sup> <a name="edge_node" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.edgeNode"></a>

```python
edge_node: DataOciBdsBdsInstanceEdgeNodeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeList">DataOciBdsBdsInstanceEdgeNodeList</a>

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignore_existing_nodes_shape`<sup>Required</sup> <a name="ignore_existing_nodes_shape" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.ignoreExistingNodesShape"></a>

```python
ignore_existing_nodes_shape: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_cloud_sql_configured`<sup>Required</sup> <a name="is_cloud_sql_configured" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.isCloudSqlConfigured"></a>

```python
is_cloud_sql_configured: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_force_stop_jobs`<sup>Required</sup> <a name="is_force_stop_jobs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.isForceStopJobs"></a>

```python
is_force_stop_jobs: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_high_availability`<sup>Required</sup> <a name="is_high_availability" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.isHighAvailability"></a>

```python
is_high_availability: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_kafka_configured`<sup>Required</sup> <a name="is_kafka_configured" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.isKafkaConfigured"></a>

```python
is_kafka_configured: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_secure`<sup>Required</sup> <a name="is_secure" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.isSecure"></a>

```python
is_secure: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `kafka_broker_node`<sup>Required</sup> <a name="kafka_broker_node" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.kafkaBrokerNode"></a>

```python
kafka_broker_node: DataOciBdsBdsInstanceKafkaBrokerNodeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeList">DataOciBdsBdsInstanceKafkaBrokerNodeList</a>

---

##### `kerberos_realm_name`<sup>Required</sup> <a name="kerberos_realm_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.kerberosRealmName"></a>

```python
kerberos_realm_name: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `master_node`<sup>Required</sup> <a name="master_node" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.masterNode"></a>

```python
master_node: DataOciBdsBdsInstanceMasterNodeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeList">DataOciBdsBdsInstanceMasterNodeList</a>

---

##### `network_config`<sup>Required</sup> <a name="network_config" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.networkConfig"></a>

```python
network_config: DataOciBdsBdsInstanceNetworkConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigList">DataOciBdsBdsInstanceNetworkConfigList</a>

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.nodes"></a>

```python
nodes: DataOciBdsBdsInstanceNodesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesList">DataOciBdsBdsInstanceNodesList</a>

---

##### `number_of_nodes`<sup>Required</sup> <a name="number_of_nodes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.numberOfNodes"></a>

```python
number_of_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_nodes_requiring_maintenance_reboot`<sup>Required</sup> <a name="number_of_nodes_requiring_maintenance_reboot" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.numberOfNodesRequiringMaintenanceReboot"></a>

```python
number_of_nodes_requiring_maintenance_reboot: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `os_patch_version`<sup>Required</sup> <a name="os_patch_version" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.osPatchVersion"></a>

```python
os_patch_version: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `util_node`<sup>Required</sup> <a name="util_node" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.utilNode"></a>

```python
util_node: DataOciBdsBdsInstanceUtilNodeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeList">DataOciBdsBdsInstanceUtilNodeList</a>

---

##### `worker_node`<sup>Required</sup> <a name="worker_node" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.workerNode"></a>

```python
worker_node: DataOciBdsBdsInstanceWorkerNodeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeList">DataOciBdsBdsInstanceWorkerNodeList</a>

---

##### `bds_instance_id_input`<sup>Optional</sup> <a name="bds_instance_id_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.bdsInstanceIdInput"></a>

```python
bds_instance_id_input: str
```

- *Type:* str

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.bdsInstanceId"></a>

```python
bds_instance_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBdsBdsInstanceCloudSqlDetails <a name="DataOciBdsBdsInstanceCloudSqlDetails" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetails()
```


### DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetails <a name="DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetails" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetails()
```


### DataOciBdsBdsInstanceClusterDetails <a name="DataOciBdsBdsInstanceClusterDetails" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetails()
```


### DataOciBdsBdsInstanceComputeOnlyWorkerNode <a name="DataOciBdsBdsInstanceComputeOnlyWorkerNode" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNode"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNode.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNode()
```


### DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfig <a name="DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfig()
```


### DataOciBdsBdsInstanceConfig <a name="DataOciBdsBdsInstanceConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bds_instance_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceConfig.property.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance#bds_instance_id DataOciBdsBdsInstance#bds_instance_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceConfig.property.bdsInstanceId"></a>

```python
bds_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance#bds_instance_id DataOciBdsBdsInstance#bds_instance_id}.

---

### DataOciBdsBdsInstanceEdgeNode <a name="DataOciBdsBdsInstanceEdgeNode" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNode"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNode.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNode()
```


### DataOciBdsBdsInstanceEdgeNodeShapeConfig <a name="DataOciBdsBdsInstanceEdgeNodeShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfig()
```


### DataOciBdsBdsInstanceKafkaBrokerNode <a name="DataOciBdsBdsInstanceKafkaBrokerNode" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNode"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNode.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNode()
```


### DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfig <a name="DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfig()
```


### DataOciBdsBdsInstanceMasterNode <a name="DataOciBdsBdsInstanceMasterNode" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNode"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNode.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNode()
```


### DataOciBdsBdsInstanceMasterNodeShapeConfig <a name="DataOciBdsBdsInstanceMasterNodeShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfig()
```


### DataOciBdsBdsInstanceNetworkConfig <a name="DataOciBdsBdsInstanceNetworkConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfig()
```


### DataOciBdsBdsInstanceNodes <a name="DataOciBdsBdsInstanceNodes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodes()
```


### DataOciBdsBdsInstanceNodesAttachedBlockVolumes <a name="DataOciBdsBdsInstanceNodesAttachedBlockVolumes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumes()
```


### DataOciBdsBdsInstanceUtilNode <a name="DataOciBdsBdsInstanceUtilNode" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNode"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNode.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNode()
```


### DataOciBdsBdsInstanceUtilNodeShapeConfig <a name="DataOciBdsBdsInstanceUtilNodeShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfig()
```


### DataOciBdsBdsInstanceWorkerNode <a name="DataOciBdsBdsInstanceWorkerNode" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNode"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNode.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNode()
```


### DataOciBdsBdsInstanceWorkerNodeShapeConfig <a name="DataOciBdsBdsInstanceWorkerNodeShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsList <a name="DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference <a name="DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.property.keytabFile">keytab_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.property.principalName">principal_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetails">DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `keytab_file`<sup>Required</sup> <a name="keytab_file" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.property.keytabFile"></a>

```python
keytab_file: str
```

- *Type:* str

---

##### `principal_name`<sup>Required</sup> <a name="principal_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.property.principalName"></a>

```python
principal_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetails">DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetails</a>

---


### DataOciBdsBdsInstanceCloudSqlDetailsList <a name="DataOciBdsBdsInstanceCloudSqlDetailsList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstanceCloudSqlDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstanceCloudSqlDetailsOutputReference <a name="DataOciBdsBdsInstanceCloudSqlDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.property.blockVolumeSizeInGbs">block_volume_size_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.property.isKerberosMappedToDatabaseUsers">is_kerberos_mapped_to_database_users</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.property.kerberosDetails">kerberos_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsList">DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.property.nvmes">nvmes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetails">DataOciBdsBdsInstanceCloudSqlDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_volume_size_in_gbs`<sup>Required</sup> <a name="block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.property.blockVolumeSizeInGbs"></a>

```python
block_volume_size_in_gbs: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `is_kerberos_mapped_to_database_users`<sup>Required</sup> <a name="is_kerberos_mapped_to_database_users" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.property.isKerberosMappedToDatabaseUsers"></a>

```python
is_kerberos_mapped_to_database_users: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `kerberos_details`<sup>Required</sup> <a name="kerberos_details" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.property.kerberosDetails"></a>

```python
kerberos_details: DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsList">DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsList</a>

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nvmes`<sup>Required</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.property.nvmes"></a>

```python
nvmes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstanceCloudSqlDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceCloudSqlDetails">DataOciBdsBdsInstanceCloudSqlDetails</a>

---


### DataOciBdsBdsInstanceClusterDetailsList <a name="DataOciBdsBdsInstanceClusterDetailsList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstanceClusterDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstanceClusterDetailsOutputReference <a name="DataOciBdsBdsInstanceClusterDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.property.ambariUrl">ambari_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.property.bdaVersion">bda_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.property.bdCellVersion">bd_cell_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.property.bdmVersion">bdm_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.property.bdsVersion">bds_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.property.bigDataManagerUrl">big_data_manager_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.property.clouderaManagerUrl">cloudera_manager_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.property.csqlCellVersion">csql_cell_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.property.dbVersion">db_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.property.hueServerUrl">hue_server_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.property.jupyterHubUrl">jupyter_hub_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.property.odhVersion">odh_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.property.osVersion">os_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.property.timeRefreshed">time_refreshed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetails">DataOciBdsBdsInstanceClusterDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ambari_url`<sup>Required</sup> <a name="ambari_url" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.property.ambariUrl"></a>

```python
ambari_url: str
```

- *Type:* str

---

##### `bda_version`<sup>Required</sup> <a name="bda_version" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.property.bdaVersion"></a>

```python
bda_version: str
```

- *Type:* str

---

##### `bd_cell_version`<sup>Required</sup> <a name="bd_cell_version" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.property.bdCellVersion"></a>

```python
bd_cell_version: str
```

- *Type:* str

---

##### `bdm_version`<sup>Required</sup> <a name="bdm_version" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.property.bdmVersion"></a>

```python
bdm_version: str
```

- *Type:* str

---

##### `bds_version`<sup>Required</sup> <a name="bds_version" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.property.bdsVersion"></a>

```python
bds_version: str
```

- *Type:* str

---

##### `big_data_manager_url`<sup>Required</sup> <a name="big_data_manager_url" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.property.bigDataManagerUrl"></a>

```python
big_data_manager_url: str
```

- *Type:* str

---

##### `cloudera_manager_url`<sup>Required</sup> <a name="cloudera_manager_url" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.property.clouderaManagerUrl"></a>

```python
cloudera_manager_url: str
```

- *Type:* str

---

##### `csql_cell_version`<sup>Required</sup> <a name="csql_cell_version" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.property.csqlCellVersion"></a>

```python
csql_cell_version: str
```

- *Type:* str

---

##### `db_version`<sup>Required</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

---

##### `hue_server_url`<sup>Required</sup> <a name="hue_server_url" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.property.hueServerUrl"></a>

```python
hue_server_url: str
```

- *Type:* str

---

##### `jupyter_hub_url`<sup>Required</sup> <a name="jupyter_hub_url" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.property.jupyterHubUrl"></a>

```python
jupyter_hub_url: str
```

- *Type:* str

---

##### `odh_version`<sup>Required</sup> <a name="odh_version" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.property.odhVersion"></a>

```python
odh_version: str
```

- *Type:* str

---

##### `os_version`<sup>Required</sup> <a name="os_version" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.property.osVersion"></a>

```python
os_version: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_refreshed`<sup>Required</sup> <a name="time_refreshed" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.property.timeRefreshed"></a>

```python
time_refreshed: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstanceClusterDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceClusterDetails">DataOciBdsBdsInstanceClusterDetails</a>

---


### DataOciBdsBdsInstanceComputeOnlyWorkerNodeList <a name="DataOciBdsBdsInstanceComputeOnlyWorkerNodeList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference <a name="DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.blockVolumeSizeInGbs">block_volume_size_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigList">DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNode">DataOciBdsBdsInstanceComputeOnlyWorkerNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_volume_size_in_gbs`<sup>Required</sup> <a name="block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.blockVolumeSizeInGbs"></a>

```python
block_volume_size_in_gbs: str
```

- *Type:* str

---

##### `number_of_nodes`<sup>Required</sup> <a name="number_of_nodes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.numberOfNodes"></a>

```python
number_of_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `shape_config`<sup>Required</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.shapeConfig"></a>

```python
shape_config: DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigList">DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigList</a>

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstanceComputeOnlyWorkerNode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNode">DataOciBdsBdsInstanceComputeOnlyWorkerNode</a>

---


### DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigList <a name="DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference <a name="DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.nvmes">nvmes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfig">DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nvmes`<sup>Required</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.nvmes"></a>

```python
nvmes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfig">DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfig</a>

---


### DataOciBdsBdsInstanceEdgeNodeList <a name="DataOciBdsBdsInstanceEdgeNodeList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstanceEdgeNodeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstanceEdgeNodeOutputReference <a name="DataOciBdsBdsInstanceEdgeNodeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.property.blockVolumeSizeInGbs">block_volume_size_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.property.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.property.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigList">DataOciBdsBdsInstanceEdgeNodeShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNode">DataOciBdsBdsInstanceEdgeNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_volume_size_in_gbs`<sup>Required</sup> <a name="block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.property.blockVolumeSizeInGbs"></a>

```python
block_volume_size_in_gbs: str
```

- *Type:* str

---

##### `number_of_nodes`<sup>Required</sup> <a name="number_of_nodes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.property.numberOfNodes"></a>

```python
number_of_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `shape_config`<sup>Required</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.property.shapeConfig"></a>

```python
shape_config: DataOciBdsBdsInstanceEdgeNodeShapeConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigList">DataOciBdsBdsInstanceEdgeNodeShapeConfigList</a>

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstanceEdgeNode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNode">DataOciBdsBdsInstanceEdgeNode</a>

---


### DataOciBdsBdsInstanceEdgeNodeShapeConfigList <a name="DataOciBdsBdsInstanceEdgeNodeShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference <a name="DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.nvmes">nvmes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfig">DataOciBdsBdsInstanceEdgeNodeShapeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nvmes`<sup>Required</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.nvmes"></a>

```python
nvmes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstanceEdgeNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceEdgeNodeShapeConfig">DataOciBdsBdsInstanceEdgeNodeShapeConfig</a>

---


### DataOciBdsBdsInstanceKafkaBrokerNodeList <a name="DataOciBdsBdsInstanceKafkaBrokerNodeList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference <a name="DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.property.blockVolumeSizeInGbs">block_volume_size_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.property.numberOfKafkaNodes">number_of_kafka_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.property.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigList">DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNode">DataOciBdsBdsInstanceKafkaBrokerNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_volume_size_in_gbs`<sup>Required</sup> <a name="block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.property.blockVolumeSizeInGbs"></a>

```python
block_volume_size_in_gbs: str
```

- *Type:* str

---

##### `number_of_kafka_nodes`<sup>Required</sup> <a name="number_of_kafka_nodes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.property.numberOfKafkaNodes"></a>

```python
number_of_kafka_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `shape_config`<sup>Required</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.property.shapeConfig"></a>

```python
shape_config: DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigList">DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigList</a>

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstanceKafkaBrokerNode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNode">DataOciBdsBdsInstanceKafkaBrokerNode</a>

---


### DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigList <a name="DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference <a name="DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.nvmes">nvmes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfig">DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nvmes`<sup>Required</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.nvmes"></a>

```python
nvmes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfig">DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfig</a>

---


### DataOciBdsBdsInstanceMasterNodeList <a name="DataOciBdsBdsInstanceMasterNodeList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstanceMasterNodeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstanceMasterNodeOutputReference <a name="DataOciBdsBdsInstanceMasterNodeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.property.blockVolumeSizeInGbs">block_volume_size_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.property.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.property.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigList">DataOciBdsBdsInstanceMasterNodeShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNode">DataOciBdsBdsInstanceMasterNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_volume_size_in_gbs`<sup>Required</sup> <a name="block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.property.blockVolumeSizeInGbs"></a>

```python
block_volume_size_in_gbs: str
```

- *Type:* str

---

##### `number_of_nodes`<sup>Required</sup> <a name="number_of_nodes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.property.numberOfNodes"></a>

```python
number_of_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `shape_config`<sup>Required</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.property.shapeConfig"></a>

```python
shape_config: DataOciBdsBdsInstanceMasterNodeShapeConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigList">DataOciBdsBdsInstanceMasterNodeShapeConfigList</a>

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstanceMasterNode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNode">DataOciBdsBdsInstanceMasterNode</a>

---


### DataOciBdsBdsInstanceMasterNodeShapeConfigList <a name="DataOciBdsBdsInstanceMasterNodeShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference <a name="DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.property.nvmes">nvmes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfig">DataOciBdsBdsInstanceMasterNodeShapeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nvmes`<sup>Required</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.property.nvmes"></a>

```python
nvmes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstanceMasterNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceMasterNodeShapeConfig">DataOciBdsBdsInstanceMasterNodeShapeConfig</a>

---


### DataOciBdsBdsInstanceNetworkConfigList <a name="DataOciBdsBdsInstanceNetworkConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstanceNetworkConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstanceNetworkConfigOutputReference <a name="DataOciBdsBdsInstanceNetworkConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.property.cidrBlock">cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.property.isNatGatewayRequired">is_nat_gateway_required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfig">DataOciBdsBdsInstanceNetworkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

---

##### `is_nat_gateway_required`<sup>Required</sup> <a name="is_nat_gateway_required" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.property.isNatGatewayRequired"></a>

```python
is_nat_gateway_required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstanceNetworkConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNetworkConfig">DataOciBdsBdsInstanceNetworkConfig</a>

---


### DataOciBdsBdsInstanceNodesAttachedBlockVolumesList <a name="DataOciBdsBdsInstanceNodesAttachedBlockVolumesList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference <a name="DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.property.volumeAttachmentId">volume_attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.property.volumeSizeInGbs">volume_size_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumes">DataOciBdsBdsInstanceNodesAttachedBlockVolumes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `volume_attachment_id`<sup>Required</sup> <a name="volume_attachment_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.property.volumeAttachmentId"></a>

```python
volume_attachment_id: str
```

- *Type:* str

---

##### `volume_size_in_gbs`<sup>Required</sup> <a name="volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.property.volumeSizeInGbs"></a>

```python
volume_size_in_gbs: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstanceNodesAttachedBlockVolumes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumes">DataOciBdsBdsInstanceNodesAttachedBlockVolumes</a>

---


### DataOciBdsBdsInstanceNodesList <a name="DataOciBdsBdsInstanceNodesList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstanceNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstanceNodesOutputReference <a name="DataOciBdsBdsInstanceNodesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.attachedBlockVolumes">attached_block_volumes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesList">DataOciBdsBdsInstanceNodesAttachedBlockVolumesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.faultDomain">fault_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.isRebootRequired">is_reboot_required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.localDisksTotalSizeInGbs">local_disks_total_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.nodeType">node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.nvmes">nvmes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.osVersion">os_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.sshFingerprint">ssh_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.timeMaintenanceRebootDue">time_maintenance_reboot_due</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodes">DataOciBdsBdsInstanceNodes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attached_block_volumes`<sup>Required</sup> <a name="attached_block_volumes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.attachedBlockVolumes"></a>

```python
attached_block_volumes: DataOciBdsBdsInstanceNodesAttachedBlockVolumesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesAttachedBlockVolumesList">DataOciBdsBdsInstanceNodesAttachedBlockVolumesList</a>

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `fault_domain`<sup>Required</sup> <a name="fault_domain" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.faultDomain"></a>

```python
fault_domain: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `is_reboot_required`<sup>Required</sup> <a name="is_reboot_required" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.isRebootRequired"></a>

```python
is_reboot_required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `local_disks_total_size_in_gbs`<sup>Required</sup> <a name="local_disks_total_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.localDisksTotalSizeInGbs"></a>

```python
local_disks_total_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

---

##### `nvmes`<sup>Required</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.nvmes"></a>

```python
nvmes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `os_version`<sup>Required</sup> <a name="os_version" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.osVersion"></a>

```python
os_version: str
```

- *Type:* str

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `ssh_fingerprint`<sup>Required</sup> <a name="ssh_fingerprint" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.sshFingerprint"></a>

```python
ssh_fingerprint: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_maintenance_reboot_due`<sup>Required</sup> <a name="time_maintenance_reboot_due" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.timeMaintenanceRebootDue"></a>

```python
time_maintenance_reboot_due: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstanceNodes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceNodes">DataOciBdsBdsInstanceNodes</a>

---


### DataOciBdsBdsInstanceUtilNodeList <a name="DataOciBdsBdsInstanceUtilNodeList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstanceUtilNodeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstanceUtilNodeOutputReference <a name="DataOciBdsBdsInstanceUtilNodeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.property.blockVolumeSizeInGbs">block_volume_size_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.property.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.property.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigList">DataOciBdsBdsInstanceUtilNodeShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNode">DataOciBdsBdsInstanceUtilNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_volume_size_in_gbs`<sup>Required</sup> <a name="block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.property.blockVolumeSizeInGbs"></a>

```python
block_volume_size_in_gbs: str
```

- *Type:* str

---

##### `number_of_nodes`<sup>Required</sup> <a name="number_of_nodes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.property.numberOfNodes"></a>

```python
number_of_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `shape_config`<sup>Required</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.property.shapeConfig"></a>

```python
shape_config: DataOciBdsBdsInstanceUtilNodeShapeConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigList">DataOciBdsBdsInstanceUtilNodeShapeConfigList</a>

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstanceUtilNode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNode">DataOciBdsBdsInstanceUtilNode</a>

---


### DataOciBdsBdsInstanceUtilNodeShapeConfigList <a name="DataOciBdsBdsInstanceUtilNodeShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference <a name="DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.property.nvmes">nvmes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfig">DataOciBdsBdsInstanceUtilNodeShapeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nvmes`<sup>Required</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.property.nvmes"></a>

```python
nvmes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstanceUtilNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceUtilNodeShapeConfig">DataOciBdsBdsInstanceUtilNodeShapeConfig</a>

---


### DataOciBdsBdsInstanceWorkerNodeList <a name="DataOciBdsBdsInstanceWorkerNodeList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstanceWorkerNodeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstanceWorkerNodeOutputReference <a name="DataOciBdsBdsInstanceWorkerNodeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.property.blockVolumeSizeInGbs">block_volume_size_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.property.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.property.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigList">DataOciBdsBdsInstanceWorkerNodeShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNode">DataOciBdsBdsInstanceWorkerNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_volume_size_in_gbs`<sup>Required</sup> <a name="block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.property.blockVolumeSizeInGbs"></a>

```python
block_volume_size_in_gbs: str
```

- *Type:* str

---

##### `number_of_nodes`<sup>Required</sup> <a name="number_of_nodes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.property.numberOfNodes"></a>

```python
number_of_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `shape_config`<sup>Required</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.property.shapeConfig"></a>

```python
shape_config: DataOciBdsBdsInstanceWorkerNodeShapeConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigList">DataOciBdsBdsInstanceWorkerNodeShapeConfigList</a>

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstanceWorkerNode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNode">DataOciBdsBdsInstanceWorkerNode</a>

---


### DataOciBdsBdsInstanceWorkerNodeShapeConfigList <a name="DataOciBdsBdsInstanceWorkerNodeShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference <a name="DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance

dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.nvmes">nvmes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfig">DataOciBdsBdsInstanceWorkerNodeShapeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nvmes`<sup>Required</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.nvmes"></a>

```python
nvmes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstanceWorkerNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstance.DataOciBdsBdsInstanceWorkerNodeShapeConfig">DataOciBdsBdsInstanceWorkerNodeShapeConfig</a>

---



