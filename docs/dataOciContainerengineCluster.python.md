# `dataOciContainerengineCluster` Submodule <a name="`dataOciContainerengineCluster` Submodule" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciContainerengineCluster <a name="DataOciContainerengineCluster" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster oci_containerengine_cluster}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster#cluster_id DataOciContainerengineCluster#cluster_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster#cluster_id DataOciContainerengineCluster#cluster_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciContainerengineCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineCluster.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciContainerengineCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciContainerengineCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciContainerengineCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciContainerengineCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.availableKubernetesUpgrades">available_kubernetes_upgrades</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.clusterPodNetworkOptions">cluster_pod_network_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsList">DataOciContainerengineClusterClusterPodNetworkOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.endpointConfig">endpoint_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigList">DataOciContainerengineClusterEndpointConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.endpoints">endpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsList">DataOciContainerengineClusterEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.imagePolicyConfig">image_policy_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigList">DataOciContainerengineClusterImagePolicyConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.kubernetesVersion">kubernetes_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataList">DataOciContainerengineClusterMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.openIdConnectDiscoveryEndpoint">open_id_connect_discovery_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.options">options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsList">DataOciContainerengineClusterOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.vcnId">vcn_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `available_kubernetes_upgrades`<sup>Required</sup> <a name="available_kubernetes_upgrades" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.availableKubernetesUpgrades"></a>

```python
available_kubernetes_upgrades: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cluster_pod_network_options`<sup>Required</sup> <a name="cluster_pod_network_options" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.clusterPodNetworkOptions"></a>

```python
cluster_pod_network_options: DataOciContainerengineClusterClusterPodNetworkOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsList">DataOciContainerengineClusterClusterPodNetworkOptionsList</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `endpoint_config`<sup>Required</sup> <a name="endpoint_config" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.endpointConfig"></a>

```python
endpoint_config: DataOciContainerengineClusterEndpointConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigList">DataOciContainerengineClusterEndpointConfigList</a>

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.endpoints"></a>

```python
endpoints: DataOciContainerengineClusterEndpointsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsList">DataOciContainerengineClusterEndpointsList</a>

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_policy_config`<sup>Required</sup> <a name="image_policy_config" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.imagePolicyConfig"></a>

```python
image_policy_config: DataOciContainerengineClusterImagePolicyConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigList">DataOciContainerengineClusterImagePolicyConfigList</a>

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `kubernetes_version`<sup>Required</sup> <a name="kubernetes_version" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.kubernetesVersion"></a>

```python
kubernetes_version: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.metadata"></a>

```python
metadata: DataOciContainerengineClusterMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataList">DataOciContainerengineClusterMetadataList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `open_id_connect_discovery_endpoint`<sup>Required</sup> <a name="open_id_connect_discovery_endpoint" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.openIdConnectDiscoveryEndpoint"></a>

```python
open_id_connect_discovery_endpoint: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.options"></a>

```python
options: DataOciContainerengineClusterOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsList">DataOciContainerengineClusterOptionsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciContainerengineClusterClusterPodNetworkOptions <a name="DataOciContainerengineClusterClusterPodNetworkOptions" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptions()
```


### DataOciContainerengineClusterConfig <a name="DataOciContainerengineClusterConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster#cluster_id DataOciContainerengineCluster#cluster_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster#cluster_id DataOciContainerengineCluster#cluster_id}.

---

### DataOciContainerengineClusterEndpointConfig <a name="DataOciContainerengineClusterEndpointConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfig()
```


### DataOciContainerengineClusterEndpoints <a name="DataOciContainerengineClusterEndpoints" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpoints.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterEndpoints()
```


### DataOciContainerengineClusterImagePolicyConfig <a name="DataOciContainerengineClusterImagePolicyConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfig()
```


### DataOciContainerengineClusterImagePolicyConfigKeyDetails <a name="DataOciContainerengineClusterImagePolicyConfigKeyDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetails()
```


### DataOciContainerengineClusterMetadata <a name="DataOciContainerengineClusterMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadata.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterMetadata()
```


### DataOciContainerengineClusterOptions <a name="DataOciContainerengineClusterOptions" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterOptions()
```


### DataOciContainerengineClusterOptionsAddOns <a name="DataOciContainerengineClusterOptionsAddOns" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOns.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOns()
```


### DataOciContainerengineClusterOptionsAdmissionControllerOptions <a name="DataOciContainerengineClusterOptionsAdmissionControllerOptions" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptions()
```


### DataOciContainerengineClusterOptionsKubernetesNetworkConfig <a name="DataOciContainerengineClusterOptionsKubernetesNetworkConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfig()
```


### DataOciContainerengineClusterOptionsOpenIdConnectDiscovery <a name="DataOciContainerengineClusterOptionsOpenIdConnectDiscovery" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscovery"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscovery.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscovery()
```


### DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig <a name="DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig()
```


### DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims <a name="DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims()
```


### DataOciContainerengineClusterOptionsPersistentVolumeConfig <a name="DataOciContainerengineClusterOptionsPersistentVolumeConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfig()
```


### DataOciContainerengineClusterOptionsServiceLbConfig <a name="DataOciContainerengineClusterOptionsServiceLbConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciContainerengineClusterClusterPodNetworkOptionsList <a name="DataOciContainerengineClusterClusterPodNetworkOptionsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference <a name="DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.property.cniType">cni_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptions">DataOciContainerengineClusterClusterPodNetworkOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cni_type`<sup>Required</sup> <a name="cni_type" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.property.cniType"></a>

```python
cni_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineClusterClusterPodNetworkOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterClusterPodNetworkOptions">DataOciContainerengineClusterClusterPodNetworkOptions</a>

---


### DataOciContainerengineClusterEndpointConfigList <a name="DataOciContainerengineClusterEndpointConfigList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineClusterEndpointConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineClusterEndpointConfigOutputReference <a name="DataOciContainerengineClusterEndpointConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.property.isPublicIpEnabled">is_public_ip_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfig">DataOciContainerengineClusterEndpointConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_public_ip_enabled`<sup>Required</sup> <a name="is_public_ip_enabled" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.property.isPublicIpEnabled"></a>

```python
is_public_ip_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineClusterEndpointConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointConfig">DataOciContainerengineClusterEndpointConfig</a>

---


### DataOciContainerengineClusterEndpointsList <a name="DataOciContainerengineClusterEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineClusterEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineClusterEndpointsOutputReference <a name="DataOciContainerengineClusterEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.property.kubernetes">kubernetes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.property.privateEndpoint">private_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.property.publicEndpoint">public_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.property.vcnHostnameEndpoint">vcn_hostname_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpoints">DataOciContainerengineClusterEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kubernetes`<sup>Required</sup> <a name="kubernetes" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.property.kubernetes"></a>

```python
kubernetes: str
```

- *Type:* str

---

##### `private_endpoint`<sup>Required</sup> <a name="private_endpoint" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.property.privateEndpoint"></a>

```python
private_endpoint: str
```

- *Type:* str

---

##### `public_endpoint`<sup>Required</sup> <a name="public_endpoint" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.property.publicEndpoint"></a>

```python
public_endpoint: str
```

- *Type:* str

---

##### `vcn_hostname_endpoint`<sup>Required</sup> <a name="vcn_hostname_endpoint" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.property.vcnHostnameEndpoint"></a>

```python
vcn_hostname_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineClusterEndpoints
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterEndpoints">DataOciContainerengineClusterEndpoints</a>

---


### DataOciContainerengineClusterImagePolicyConfigKeyDetailsList <a name="DataOciContainerengineClusterImagePolicyConfigKeyDetailsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference <a name="DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetails">DataOciContainerengineClusterImagePolicyConfigKeyDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineClusterImagePolicyConfigKeyDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetails">DataOciContainerengineClusterImagePolicyConfigKeyDetails</a>

---


### DataOciContainerengineClusterImagePolicyConfigList <a name="DataOciContainerengineClusterImagePolicyConfigList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineClusterImagePolicyConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineClusterImagePolicyConfigOutputReference <a name="DataOciContainerengineClusterImagePolicyConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.property.isPolicyEnabled">is_policy_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.property.keyDetails">key_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsList">DataOciContainerengineClusterImagePolicyConfigKeyDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfig">DataOciContainerengineClusterImagePolicyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_policy_enabled`<sup>Required</sup> <a name="is_policy_enabled" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.property.isPolicyEnabled"></a>

```python
is_policy_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key_details`<sup>Required</sup> <a name="key_details" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.property.keyDetails"></a>

```python
key_details: DataOciContainerengineClusterImagePolicyConfigKeyDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigKeyDetailsList">DataOciContainerengineClusterImagePolicyConfigKeyDetailsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineClusterImagePolicyConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterImagePolicyConfig">DataOciContainerengineClusterImagePolicyConfig</a>

---


### DataOciContainerengineClusterMetadataList <a name="DataOciContainerengineClusterMetadataList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineClusterMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineClusterMetadataOutputReference <a name="DataOciContainerengineClusterMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.property.createdByUserId">created_by_user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.property.createdByWorkRequestId">created_by_work_request_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.property.deletedByUserId">deleted_by_user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.property.deletedByWorkRequestId">deleted_by_work_request_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.property.timeCredentialExpiration">time_credential_expiration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.property.timeDeleted">time_deleted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.property.updatedByUserId">updated_by_user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.property.updatedByWorkRequestId">updated_by_work_request_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadata">DataOciContainerengineClusterMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_by_user_id`<sup>Required</sup> <a name="created_by_user_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.property.createdByUserId"></a>

```python
created_by_user_id: str
```

- *Type:* str

---

##### `created_by_work_request_id`<sup>Required</sup> <a name="created_by_work_request_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.property.createdByWorkRequestId"></a>

```python
created_by_work_request_id: str
```

- *Type:* str

---

##### `deleted_by_user_id`<sup>Required</sup> <a name="deleted_by_user_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.property.deletedByUserId"></a>

```python
deleted_by_user_id: str
```

- *Type:* str

---

##### `deleted_by_work_request_id`<sup>Required</sup> <a name="deleted_by_work_request_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.property.deletedByWorkRequestId"></a>

```python
deleted_by_work_request_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_credential_expiration`<sup>Required</sup> <a name="time_credential_expiration" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.property.timeCredentialExpiration"></a>

```python
time_credential_expiration: str
```

- *Type:* str

---

##### `time_deleted`<sup>Required</sup> <a name="time_deleted" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.property.timeDeleted"></a>

```python
time_deleted: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `updated_by_user_id`<sup>Required</sup> <a name="updated_by_user_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.property.updatedByUserId"></a>

```python
updated_by_user_id: str
```

- *Type:* str

---

##### `updated_by_work_request_id`<sup>Required</sup> <a name="updated_by_work_request_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.property.updatedByWorkRequestId"></a>

```python
updated_by_work_request_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineClusterMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterMetadata">DataOciContainerengineClusterMetadata</a>

---


### DataOciContainerengineClusterOptionsAddOnsList <a name="DataOciContainerengineClusterOptionsAddOnsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineClusterOptionsAddOnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineClusterOptionsAddOnsOutputReference <a name="DataOciContainerengineClusterOptionsAddOnsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.property.isKubernetesDashboardEnabled">is_kubernetes_dashboard_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.property.isTillerEnabled">is_tiller_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOns">DataOciContainerengineClusterOptionsAddOns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_kubernetes_dashboard_enabled`<sup>Required</sup> <a name="is_kubernetes_dashboard_enabled" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.property.isKubernetesDashboardEnabled"></a>

```python
is_kubernetes_dashboard_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_tiller_enabled`<sup>Required</sup> <a name="is_tiller_enabled" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.property.isTillerEnabled"></a>

```python
is_tiller_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineClusterOptionsAddOns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOns">DataOciContainerengineClusterOptionsAddOns</a>

---


### DataOciContainerengineClusterOptionsAdmissionControllerOptionsList <a name="DataOciContainerengineClusterOptionsAdmissionControllerOptionsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference <a name="DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.isPodSecurityPolicyEnabled">is_pod_security_policy_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptions">DataOciContainerengineClusterOptionsAdmissionControllerOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_pod_security_policy_enabled`<sup>Required</sup> <a name="is_pod_security_policy_enabled" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.isPodSecurityPolicyEnabled"></a>

```python
is_pod_security_policy_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineClusterOptionsAdmissionControllerOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptions">DataOciContainerengineClusterOptionsAdmissionControllerOptions</a>

---


### DataOciContainerengineClusterOptionsKubernetesNetworkConfigList <a name="DataOciContainerengineClusterOptionsKubernetesNetworkConfigList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference <a name="DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.podsCidr">pods_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.servicesCidr">services_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfig">DataOciContainerengineClusterOptionsKubernetesNetworkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pods_cidr`<sup>Required</sup> <a name="pods_cidr" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.podsCidr"></a>

```python
pods_cidr: str
```

- *Type:* str

---

##### `services_cidr`<sup>Required</sup> <a name="services_cidr" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.servicesCidr"></a>

```python
services_cidr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineClusterOptionsKubernetesNetworkConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfig">DataOciContainerengineClusterOptionsKubernetesNetworkConfig</a>

---


### DataOciContainerengineClusterOptionsList <a name="DataOciContainerengineClusterOptionsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineClusterOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryList <a name="DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference <a name="DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.isOpenIdConnectDiscoveryEnabled">is_open_id_connect_discovery_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscovery">DataOciContainerengineClusterOptionsOpenIdConnectDiscovery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_open_id_connect_discovery_enabled`<sup>Required</sup> <a name="is_open_id_connect_discovery_enabled" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.isOpenIdConnectDiscoveryEnabled"></a>

```python
is_open_id_connect_discovery_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineClusterOptionsOpenIdConnectDiscovery
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscovery">DataOciContainerengineClusterOptionsOpenIdConnectDiscovery</a>

---


### DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigList <a name="DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference <a name="DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.caCertificate">ca_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.groupsClaim">groups_claim</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.groupsPrefix">groups_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.isOpenIdConnectAuthEnabled">is_open_id_connect_auth_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.issuerUrl">issuer_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.requiredClaims">required_claims</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList">DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.signingAlgorithms">signing_algorithms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.usernameClaim">username_claim</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.usernamePrefix">username_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig">DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_certificate`<sup>Required</sup> <a name="ca_certificate" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.caCertificate"></a>

```python
ca_certificate: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `groups_claim`<sup>Required</sup> <a name="groups_claim" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.groupsClaim"></a>

```python
groups_claim: str
```

- *Type:* str

---

##### `groups_prefix`<sup>Required</sup> <a name="groups_prefix" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.groupsPrefix"></a>

```python
groups_prefix: str
```

- *Type:* str

---

##### `is_open_id_connect_auth_enabled`<sup>Required</sup> <a name="is_open_id_connect_auth_enabled" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.isOpenIdConnectAuthEnabled"></a>

```python
is_open_id_connect_auth_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `issuer_url`<sup>Required</sup> <a name="issuer_url" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.issuerUrl"></a>

```python
issuer_url: str
```

- *Type:* str

---

##### `required_claims`<sup>Required</sup> <a name="required_claims" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.requiredClaims"></a>

```python
required_claims: DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList">DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList</a>

---

##### `signing_algorithms`<sup>Required</sup> <a name="signing_algorithms" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.signingAlgorithms"></a>

```python
signing_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `username_claim`<sup>Required</sup> <a name="username_claim" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.usernameClaim"></a>

```python
username_claim: str
```

- *Type:* str

---

##### `username_prefix`<sup>Required</sup> <a name="username_prefix" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.usernamePrefix"></a>

```python
username_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig">DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig</a>

---


### DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList <a name="DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference <a name="DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims">DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims">DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims</a>

---


### DataOciContainerengineClusterOptionsOutputReference <a name="DataOciContainerengineClusterOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.property.addOns">add_ons</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsList">DataOciContainerengineClusterOptionsAddOnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.property.admissionControllerOptions">admission_controller_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsList">DataOciContainerengineClusterOptionsAdmissionControllerOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.property.kubernetesNetworkConfig">kubernetes_network_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigList">DataOciContainerengineClusterOptionsKubernetesNetworkConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.property.openIdConnectDiscovery">open_id_connect_discovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryList">DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.property.openIdConnectTokenAuthenticationConfig">open_id_connect_token_authentication_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigList">DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.property.persistentVolumeConfig">persistent_volume_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigList">DataOciContainerengineClusterOptionsPersistentVolumeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.property.serviceLbConfig">service_lb_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigList">DataOciContainerengineClusterOptionsServiceLbConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.property.serviceLbSubnetIds">service_lb_subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptions">DataOciContainerengineClusterOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `add_ons`<sup>Required</sup> <a name="add_ons" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.property.addOns"></a>

```python
add_ons: DataOciContainerengineClusterOptionsAddOnsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAddOnsList">DataOciContainerengineClusterOptionsAddOnsList</a>

---

##### `admission_controller_options`<sup>Required</sup> <a name="admission_controller_options" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.property.admissionControllerOptions"></a>

```python
admission_controller_options: DataOciContainerengineClusterOptionsAdmissionControllerOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsAdmissionControllerOptionsList">DataOciContainerengineClusterOptionsAdmissionControllerOptionsList</a>

---

##### `kubernetes_network_config`<sup>Required</sup> <a name="kubernetes_network_config" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.property.kubernetesNetworkConfig"></a>

```python
kubernetes_network_config: DataOciContainerengineClusterOptionsKubernetesNetworkConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsKubernetesNetworkConfigList">DataOciContainerengineClusterOptionsKubernetesNetworkConfigList</a>

---

##### `open_id_connect_discovery`<sup>Required</sup> <a name="open_id_connect_discovery" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.property.openIdConnectDiscovery"></a>

```python
open_id_connect_discovery: DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryList">DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryList</a>

---

##### `open_id_connect_token_authentication_config`<sup>Required</sup> <a name="open_id_connect_token_authentication_config" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.property.openIdConnectTokenAuthenticationConfig"></a>

```python
open_id_connect_token_authentication_config: DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigList">DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigList</a>

---

##### `persistent_volume_config`<sup>Required</sup> <a name="persistent_volume_config" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.property.persistentVolumeConfig"></a>

```python
persistent_volume_config: DataOciContainerengineClusterOptionsPersistentVolumeConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigList">DataOciContainerengineClusterOptionsPersistentVolumeConfigList</a>

---

##### `service_lb_config`<sup>Required</sup> <a name="service_lb_config" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.property.serviceLbConfig"></a>

```python
service_lb_config: DataOciContainerengineClusterOptionsServiceLbConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigList">DataOciContainerengineClusterOptionsServiceLbConfigList</a>

---

##### `service_lb_subnet_ids`<sup>Required</sup> <a name="service_lb_subnet_ids" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.property.serviceLbSubnetIds"></a>

```python
service_lb_subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineClusterOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptions">DataOciContainerengineClusterOptions</a>

---


### DataOciContainerengineClusterOptionsPersistentVolumeConfigList <a name="DataOciContainerengineClusterOptionsPersistentVolumeConfigList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference <a name="DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfig">DataOciContainerengineClusterOptionsPersistentVolumeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineClusterOptionsPersistentVolumeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsPersistentVolumeConfig">DataOciContainerengineClusterOptionsPersistentVolumeConfig</a>

---


### DataOciContainerengineClusterOptionsServiceLbConfigList <a name="DataOciContainerengineClusterOptionsServiceLbConfigList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineClusterOptionsServiceLbConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineClusterOptionsServiceLbConfigOutputReference <a name="DataOciContainerengineClusterOptionsServiceLbConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_cluster

dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfig">DataOciContainerengineClusterOptionsServiceLbConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineClusterOptionsServiceLbConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineCluster.DataOciContainerengineClusterOptionsServiceLbConfig">DataOciContainerengineClusterOptionsServiceLbConfig</a>

---



