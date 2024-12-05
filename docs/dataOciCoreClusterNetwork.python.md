# `dataOciCoreClusterNetwork` Submodule <a name="`dataOciCoreClusterNetwork` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreClusterNetwork <a name="DataOciCoreClusterNetwork" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_network oci_core_cluster_network}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetwork(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_network_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.Initializer.parameter.clusterNetworkId">cluster_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_network#cluster_network_id DataOciCoreClusterNetwork#cluster_network_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_network_id`<sup>Required</sup> <a name="cluster_network_id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.Initializer.parameter.clusterNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_network#cluster_network_id DataOciCoreClusterNetwork#cluster_network_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreClusterNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreClusterNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreClusterNetwork to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreClusterNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreClusterNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.clusterConfiguration">cluster_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList">DataOciCoreClusterNetworkClusterConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.hpcIslandId">hpc_island_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.instancePools">instance_pools</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList">DataOciCoreClusterNetworkInstancePoolsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.networkBlockIds">network_block_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.placementConfiguration">placement_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList">DataOciCoreClusterNetworkPlacementConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.clusterNetworkIdInput">cluster_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.clusterNetworkId">cluster_network_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `cluster_configuration`<sup>Required</sup> <a name="cluster_configuration" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.clusterConfiguration"></a>

```python
cluster_configuration: DataOciCoreClusterNetworkClusterConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList">DataOciCoreClusterNetworkClusterConfigurationList</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `hpc_island_id`<sup>Required</sup> <a name="hpc_island_id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.hpcIslandId"></a>

```python
hpc_island_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_pools`<sup>Required</sup> <a name="instance_pools" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.instancePools"></a>

```python
instance_pools: DataOciCoreClusterNetworkInstancePoolsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList">DataOciCoreClusterNetworkInstancePoolsList</a>

---

##### `network_block_ids`<sup>Required</sup> <a name="network_block_ids" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.networkBlockIds"></a>

```python
network_block_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `placement_configuration`<sup>Required</sup> <a name="placement_configuration" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.placementConfiguration"></a>

```python
placement_configuration: DataOciCoreClusterNetworkPlacementConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList">DataOciCoreClusterNetworkPlacementConfigurationList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `cluster_network_id_input`<sup>Optional</sup> <a name="cluster_network_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.clusterNetworkIdInput"></a>

```python
cluster_network_id_input: str
```

- *Type:* str

---

##### `cluster_network_id`<sup>Required</sup> <a name="cluster_network_id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.clusterNetworkId"></a>

```python
cluster_network_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreClusterNetworkClusterConfiguration <a name="DataOciCoreClusterNetworkClusterConfiguration" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfiguration()
```


### DataOciCoreClusterNetworkConfig <a name="DataOciCoreClusterNetworkConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_network_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig.property.clusterNetworkId">cluster_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_network#cluster_network_id DataOciCoreClusterNetwork#cluster_network_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_network_id`<sup>Required</sup> <a name="cluster_network_id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig.property.clusterNetworkId"></a>

```python
cluster_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_network#cluster_network_id DataOciCoreClusterNetwork#cluster_network_id}.

---

### DataOciCoreClusterNetworkInstancePools <a name="DataOciCoreClusterNetworkInstancePools" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePools"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePools.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePools()
```


### DataOciCoreClusterNetworkInstancePoolsLoadBalancers <a name="DataOciCoreClusterNetworkInstancePoolsLoadBalancers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancers()
```


### DataOciCoreClusterNetworkInstancePoolsPlacementConfigurations <a name="DataOciCoreClusterNetworkInstancePoolsPlacementConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurations()
```


### DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnets <a name="DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnets" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnets.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnets()
```


### DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails <a name="DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails()
```


### DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnets <a name="DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnets" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnets.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnets()
```


### DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails <a name="DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails()
```


### DataOciCoreClusterNetworkPlacementConfiguration <a name="DataOciCoreClusterNetworkPlacementConfiguration" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfiguration()
```


### DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnets <a name="DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnets" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnets.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnets()
```


### DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails <a name="DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails()
```


### DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnets <a name="DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnets" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnets.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnets()
```


### DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails <a name="DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreClusterNetworkClusterConfigurationList <a name="DataOciCoreClusterNetworkClusterConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreClusterNetworkClusterConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreClusterNetworkClusterConfigurationOutputReference <a name="DataOciCoreClusterNetworkClusterConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.property.hpcIslandId">hpc_island_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.property.networkBlockIds">network_block_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfiguration">DataOciCoreClusterNetworkClusterConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hpc_island_id`<sup>Required</sup> <a name="hpc_island_id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.property.hpcIslandId"></a>

```python
hpc_island_id: str
```

- *Type:* str

---

##### `network_block_ids`<sup>Required</sup> <a name="network_block_ids" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.property.networkBlockIds"></a>

```python
network_block_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreClusterNetworkClusterConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfiguration">DataOciCoreClusterNetworkClusterConfiguration</a>

---


### DataOciCoreClusterNetworkInstancePoolsList <a name="DataOciCoreClusterNetworkInstancePoolsList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreClusterNetworkInstancePoolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreClusterNetworkInstancePoolsLoadBalancersList <a name="DataOciCoreClusterNetworkInstancePoolsLoadBalancersList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference <a name="DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.backendSetName">backend_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.instancePoolId">instance_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.vnicSelection">vnic_selection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancers">DataOciCoreClusterNetworkInstancePoolsLoadBalancers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backend_set_name`<sup>Required</sup> <a name="backend_set_name" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.backendSetName"></a>

```python
backend_set_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_pool_id`<sup>Required</sup> <a name="instance_pool_id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.instancePoolId"></a>

```python
instance_pool_id: str
```

- *Type:* str

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `vnic_selection`<sup>Required</sup> <a name="vnic_selection" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.vnicSelection"></a>

```python
vnic_selection: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreClusterNetworkInstancePoolsLoadBalancers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancers">DataOciCoreClusterNetworkInstancePoolsLoadBalancers</a>

---


### DataOciCoreClusterNetworkInstancePoolsOutputReference <a name="DataOciCoreClusterNetworkInstancePoolsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.instanceConfigurationId">instance_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.instanceDisplayNameFormatter">instance_display_name_formatter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.instanceHostnameFormatter">instance_hostname_formatter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.loadBalancers">load_balancers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList">DataOciCoreClusterNetworkInstancePoolsLoadBalancersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.placementConfigurations">placement_configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePools">DataOciCoreClusterNetworkInstancePools</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_configuration_id`<sup>Required</sup> <a name="instance_configuration_id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.instanceConfigurationId"></a>

```python
instance_configuration_id: str
```

- *Type:* str

---

##### `instance_display_name_formatter`<sup>Required</sup> <a name="instance_display_name_formatter" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.instanceDisplayNameFormatter"></a>

```python
instance_display_name_formatter: str
```

- *Type:* str

---

##### `instance_hostname_formatter`<sup>Required</sup> <a name="instance_hostname_formatter" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.instanceHostnameFormatter"></a>

```python
instance_hostname_formatter: str
```

- *Type:* str

---

##### `load_balancers`<sup>Required</sup> <a name="load_balancers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.loadBalancers"></a>

```python
load_balancers: DataOciCoreClusterNetworkInstancePoolsLoadBalancersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList">DataOciCoreClusterNetworkInstancePoolsLoadBalancersList</a>

---

##### `placement_configurations`<sup>Required</sup> <a name="placement_configurations" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.placementConfigurations"></a>

```python
placement_configurations: DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList</a>

---

##### `size`<sup>Required</sup> <a name="size" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreClusterNetworkInstancePools
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePools">DataOciCoreClusterNetworkInstancePools</a>

---


### DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList <a name="DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference <a name="DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.property.faultDomains">fault_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.property.primarySubnetId">primary_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.property.primaryVnicSubnets">primary_vnic_subnets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.property.secondaryVnicSubnets">secondary_vnic_subnets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurations">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `fault_domains`<sup>Required</sup> <a name="fault_domains" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.property.faultDomains"></a>

```python
fault_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `primary_subnet_id`<sup>Required</sup> <a name="primary_subnet_id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.property.primarySubnetId"></a>

```python
primary_subnet_id: str
```

- *Type:* str

---

##### `primary_vnic_subnets`<sup>Required</sup> <a name="primary_vnic_subnets" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.property.primaryVnicSubnets"></a>

```python
primary_vnic_subnets: DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList</a>

---

##### `secondary_vnic_subnets`<sup>Required</sup> <a name="secondary_vnic_subnets" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.property.secondaryVnicSubnets"></a>

```python
secondary_vnic_subnets: DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreClusterNetworkInstancePoolsPlacementConfigurations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurations">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurations</a>

---


### DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList <a name="DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference <a name="DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr">ipv6_subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv6_subnet_cidr`<sup>Required</sup> <a name="ipv6_subnet_cidr" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr"></a>

```python
ipv6_subnet_cidr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a>

---


### DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList <a name="DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference <a name="DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails">ipv6_address_ipv6_subnet_cidr_pair_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.isAssignIpv6Ip">is_assign_ipv6_ip</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnets">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv6_address_ipv6_subnet_cidr_pair_details`<sup>Required</sup> <a name="ipv6_address_ipv6_subnet_cidr_pair_details" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails"></a>

```python
ipv6_address_ipv6_subnet_cidr_pair_details: DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList</a>

---

##### `is_assign_ipv6_ip`<sup>Required</sup> <a name="is_assign_ipv6_ip" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.isAssignIpv6Ip"></a>

```python
is_assign_ipv6_ip: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnets
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnets">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnets</a>

---


### DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList <a name="DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference <a name="DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr">ipv6_subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv6_subnet_cidr`<sup>Required</sup> <a name="ipv6_subnet_cidr" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr"></a>

```python
ipv6_subnet_cidr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a>

---


### DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList <a name="DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference <a name="DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails">ipv6_address_ipv6_subnet_cidr_pair_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.isAssignIpv6Ip">is_assign_ipv6_ip</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnets">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `ipv6_address_ipv6_subnet_cidr_pair_details`<sup>Required</sup> <a name="ipv6_address_ipv6_subnet_cidr_pair_details" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails"></a>

```python
ipv6_address_ipv6_subnet_cidr_pair_details: DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList</a>

---

##### `is_assign_ipv6_ip`<sup>Required</sup> <a name="is_assign_ipv6_ip" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.isAssignIpv6Ip"></a>

```python
is_assign_ipv6_ip: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnets
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnets">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnets</a>

---


### DataOciCoreClusterNetworkPlacementConfigurationList <a name="DataOciCoreClusterNetworkPlacementConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreClusterNetworkPlacementConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreClusterNetworkPlacementConfigurationOutputReference <a name="DataOciCoreClusterNetworkPlacementConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.property.placementConstraint">placement_constraint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.property.primarySubnetId">primary_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.property.primaryVnicSubnets">primary_vnic_subnets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList">DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.property.secondaryVnicSubnets">secondary_vnic_subnets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList">DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfiguration">DataOciCoreClusterNetworkPlacementConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `placement_constraint`<sup>Required</sup> <a name="placement_constraint" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.property.placementConstraint"></a>

```python
placement_constraint: str
```

- *Type:* str

---

##### `primary_subnet_id`<sup>Required</sup> <a name="primary_subnet_id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.property.primarySubnetId"></a>

```python
primary_subnet_id: str
```

- *Type:* str

---

##### `primary_vnic_subnets`<sup>Required</sup> <a name="primary_vnic_subnets" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.property.primaryVnicSubnets"></a>

```python
primary_vnic_subnets: DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList">DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList</a>

---

##### `secondary_vnic_subnets`<sup>Required</sup> <a name="secondary_vnic_subnets" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.property.secondaryVnicSubnets"></a>

```python
secondary_vnic_subnets: DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList">DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreClusterNetworkPlacementConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfiguration">DataOciCoreClusterNetworkPlacementConfiguration</a>

---


### DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList <a name="DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference <a name="DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr">ipv6_subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv6_subnet_cidr`<sup>Required</sup> <a name="ipv6_subnet_cidr" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr"></a>

```python
ipv6_subnet_cidr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a>

---


### DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList <a name="DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference <a name="DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails">ipv6_address_ipv6_subnet_cidr_pair_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList">DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.property.isAssignIpv6Ip">is_assign_ipv6_ip</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnets">DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv6_address_ipv6_subnet_cidr_pair_details`<sup>Required</sup> <a name="ipv6_address_ipv6_subnet_cidr_pair_details" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails"></a>

```python
ipv6_address_ipv6_subnet_cidr_pair_details: DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList">DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList</a>

---

##### `is_assign_ipv6_ip`<sup>Required</sup> <a name="is_assign_ipv6_ip" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.property.isAssignIpv6Ip"></a>

```python
is_assign_ipv6_ip: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnets
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnets">DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnets</a>

---


### DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList <a name="DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference <a name="DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr">ipv6_subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv6_subnet_cidr`<sup>Required</sup> <a name="ipv6_subnet_cidr" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr"></a>

```python
ipv6_subnet_cidr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a>

---


### DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList <a name="DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference <a name="DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cluster_network

dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails">ipv6_address_ipv6_subnet_cidr_pair_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList">DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.isAssignIpv6Ip">is_assign_ipv6_ip</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnets">DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `ipv6_address_ipv6_subnet_cidr_pair_details`<sup>Required</sup> <a name="ipv6_address_ipv6_subnet_cidr_pair_details" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails"></a>

```python
ipv6_address_ipv6_subnet_cidr_pair_details: DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList">DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList</a>

---

##### `is_assign_ipv6_ip`<sup>Required</sup> <a name="is_assign_ipv6_ip" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.isAssignIpv6Ip"></a>

```python
is_assign_ipv6_ip: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnets
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnets">DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnets</a>

---



